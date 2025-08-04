import { config } from "dotenv";
config({ path: ".env.local" });

import { menuarbol } from "../lib/menu-arbol";
import { menu1898 } from "../lib/menu-1898";
import { menucapriccio } from "../lib/menu-capriccio";
import { getLocationMenu } from "../lib/db";

const locationMenus = {
  arbol: menuarbol,
  "1898": menu1898,
  capriccio: menucapriccio,
};

interface ComparisonResult {
  location: string;
  localCount: number;
  dbCount: number;
  missingInDb: string[];
  extraInDb: string[];
  priceMismatches: Array<{
    id: string;
    name: string;
    localPrice: number;
    dbPrice: number;
  }>;
  categoryMismatches: Array<{
    id: string;
    name: string;
    localCategory: string;
    dbCategory: string;
  }>;
}

async function compareMenus(): Promise<ComparisonResult[]> {
  const results: ComparisonResult[] = [];
  
  for (const [locationId, localMenu] of Object.entries(locationMenus)) {
    console.log(`\n🔍 Comparing ${locationId} menu...`);
    
    // Get menu from database
    const dbMenu = await getLocationMenu(locationId);
    
    // Create maps for easy lookup
    const localMap = new Map(localMenu.map(item => [item.id, item]));
    const dbMap = new Map(dbMenu.map(item => [item.id, item]));
    
    const result: ComparisonResult = {
      location: locationId,
      localCount: localMenu.length,
      dbCount: dbMenu.length,
      missingInDb: [],
      extraInDb: [],
      priceMismatches: [],
      categoryMismatches: [],
    };
    
    // Check for missing items in DB
    for (const [id, localItem] of localMap) {
      if (!dbMap.has(id)) {
        result.missingInDb.push(`${id}: ${localItem.name}`);
      } else {
        const dbItem = dbMap.get(id)!;
        
        // Check price
        if (localItem.price !== dbItem.price) {
          result.priceMismatches.push({
            id,
            name: localItem.name,
            localPrice: localItem.price,
            dbPrice: dbItem.price,
          });
        }
        
        // Check category
        if (localItem.category !== dbItem.category) {
          result.categoryMismatches.push({
            id,
            name: localItem.name,
            localCategory: localItem.category,
            dbCategory: dbItem.category,
          });
        }
      }
    }
    
    // Check for extra items in DB
    for (const [id, dbItem] of dbMap) {
      if (!localMap.has(id)) {
        result.extraInDb.push(`${id}: ${dbItem.name}`);
      }
    }
    
    results.push(result);
  }
  
  return results;
}

async function generateDetailedReport(results: ComparisonResult[]): Promise<string> {
  let report = `MENU COMPARISON REPORT
Generated: ${new Date().toISOString()}
======================================\n\n`;
  
  let hasIssues = false;
  
  for (const result of results) {
    report += `📍 LOCATION: ${result.location.toUpperCase()}\n`;
    report += `${"=".repeat(40)}\n`;
    report += `Local items: ${result.localCount}\n`;
    report += `Database items: ${result.dbCount}\n`;
    
    if (result.localCount === result.dbCount && 
        result.missingInDb.length === 0 && 
        result.extraInDb.length === 0 &&
        result.priceMismatches.length === 0 &&
        result.categoryMismatches.length === 0) {
      report += `✅ PERFECT MATCH!\n\n`;
    } else {
      hasIssues = true;
      report += `\n⚠️  ISSUES FOUND:\n`;
      
      if (result.missingInDb.length > 0) {
        report += `\n❌ Missing in database (${result.missingInDb.length}):\n`;
        result.missingInDb.forEach(item => {
          report += `   - ${item}\n`;
        });
      }
      
      if (result.extraInDb.length > 0) {
        report += `\n➕ Extra in database (${result.extraInDb.length}):\n`;
        result.extraInDb.forEach(item => {
          report += `   - ${item}\n`;
        });
      }
      
      if (result.priceMismatches.length > 0) {
        report += `\n💰 Price mismatches (${result.priceMismatches.length}):\n`;
        result.priceMismatches.forEach(item => {
          report += `   - ${item.name}: Local=$${item.localPrice} vs DB=$${item.dbPrice}\n`;
        });
      }
      
      if (result.categoryMismatches.length > 0) {
        report += `\n📁 Category mismatches (${result.categoryMismatches.length}):\n`;
        result.categoryMismatches.forEach(item => {
          report += `   - ${item.name}: Local="${item.localCategory}" vs DB="${item.dbCategory}"\n`;
        });
      }
      
      report += "\n";
    }
  }
  
  report += `\n${"=".repeat(60)}\n`;
  report += hasIssues ? "❌ MIGRATION NEEDS ATTENTION\n" : "✅ MIGRATION SUCCESSFUL - ALL MENUS MATCH!\n";
  
  return report;
}

// Category analysis
async function analyzeCategoryUsage(): Promise<string> {
  let analysis = "\nCATEGORY USAGE ANALYSIS\n";
  analysis += "=======================\n\n";
  
  const categoryUsage = new Map<string, Set<string>>();
  
  for (const [locationId, menu] of Object.entries(locationMenus)) {
    for (const item of menu) {
      if (!categoryUsage.has(item.category)) {
        categoryUsage.set(item.category, new Set());
      }
      categoryUsage.get(item.category)!.add(locationId);
    }
  }
  
  analysis += "Categories by location usage:\n";
  for (const [category, locations] of categoryUsage) {
    analysis += `- ${category}: used in ${Array.from(locations).join(", ")}\n`;
  }
  
  return analysis;
}

async function main() {
  console.log("🔍 Starting menu comparison...\n");
  
  try {
    // Run comparison
    const results = await compareMenus();
    
    // Generate report
    const report = await generateDetailedReport(results);
    console.log(report);
    
    // Save report
    const fs = require('fs');
    fs.writeFileSync('scripts/comparison-report.txt', report);
    console.log("📄 Full report saved to scripts/comparison-report.txt");
    
    // Category analysis
    const categoryAnalysis = await analyzeCategoryUsage();
    console.log(categoryAnalysis);
    
    // Summary statistics
    const totalLocalItems = Object.values(locationMenus).reduce((sum, menu) => sum + menu.length, 0);
    const totalDbItems = results.reduce((sum, r) => sum + r.dbCount, 0);
    const totalMissing = results.reduce((sum, r) => sum + r.missingInDb.length, 0);
    const totalExtra = results.reduce((sum, r) => sum + r.extraInDb.length, 0);
    
    console.log("\n📊 SUMMARY STATISTICS:");
    console.log(`- Total items in local files: ${totalLocalItems}`);
    console.log(`- Total items in database: ${totalDbItems}`);
    console.log(`- Total missing items: ${totalMissing}`);
    console.log(`- Total extra items: ${totalExtra}`);
    
    if (totalMissing === 0 && totalExtra === 0) {
      console.log("\n✅ SUCCESS: Database contains all menu items from local files!");
    } else {
      console.log("\n⚠️  ACTION REQUIRED: Please run the complete migration to sync all items.");
    }
    
  } catch (error) {
    console.error("❌ Error during comparison:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
  });
}