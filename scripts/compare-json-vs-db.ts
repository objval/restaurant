import { sql } from '@vercel/postgres';
import { config } from 'dotenv';
import { resolve } from 'path';
import * as fs from 'fs';

// Load environment variables
config({ path: resolve(process.cwd(), '.env.local') });

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('D:\\Descargas\\results(2).json', 'utf-8'));
const jsonMenu = jsonData[0].categories;

// Extract all products from JSON
const jsonProducts = new Map();
let jsonTotalCount = 0;

jsonMenu.forEach(category => {
  category.products.forEach(product => {
    jsonTotalCount++;
    const price = parseInt(product.price.replace(/\$|\./, ''));
    jsonProducts.set(product.product_name.toLowerCase(), {
      name: product.product_name,
      price: price,
      description: product.description,
      category: category.category_name
    });
  });
});

async function compareMenus() {
  console.log('🔍 Comparing JSON Menu vs Database...\n');
  
  try {
    // Get all products from database
    const dbProducts = await sql`
      SELECT 
        p.name,
        p.base_price::integer as price,
        p.description,
        c.name as category_name
      FROM products p
      JOIN location_products lp ON p.id = lp.product_id
      JOIN categories c ON lp.category_id = c.id
      WHERE lp.location_id = 'capriccio'
      ORDER BY c.display_order, p.name
    `;
    
    const dbMap = new Map();
    dbProducts.rows.forEach(item => {
      dbMap.set(item.name.toLowerCase(), {
        name: item.name,
        price: item.price,
        description: item.description,
        category: item.category_name
      });
    });
    
    console.log(`📊 JSON has ${jsonTotalCount} products`);
    console.log(`📊 Database has ${dbProducts.rows.length} products\n`);
    
    // Check for items in JSON but not in DB
    console.log('❌ Items in JSON but NOT in Database:');
    let missingInDb = 0;
    jsonProducts.forEach((jsonItem, key) => {
      if (!dbMap.has(key)) {
        missingInDb++;
        console.log(`   - ${jsonItem.name} ($${jsonItem.price}) [${jsonItem.category}]`);
      }
    });
    if (missingInDb === 0) console.log('   None - All JSON items are in DB ✓');
    
    // Check for items in DB but not in JSON
    console.log('\n⚠️  Items in Database but NOT in JSON:');
    let extraInDb = 0;
    dbMap.forEach((dbItem, key) => {
      if (!jsonProducts.has(key)) {
        extraInDb++;
        console.log(`   - ${dbItem.name} ($${dbItem.price}) [${dbItem.category}]`);
      }
    });
    if (extraInDb === 0) console.log('   None - No extra items in DB ✓');
    
    // Check for price mismatches
    console.log('\n💰 Price Mismatches:');
    let priceMismatches = 0;
    jsonProducts.forEach((jsonItem, key) => {
      const dbItem = dbMap.get(key);
      if (dbItem && dbItem.price !== jsonItem.price) {
        priceMismatches++;
        console.log(`   - ${jsonItem.name}: JSON=$${jsonItem.price}, DB=$${dbItem.price}`);
      }
    });
    if (priceMismatches === 0) console.log('   None - All prices match ✓');
    
    // Summary by category
    console.log('\n📂 Category Comparison:');
    const jsonCategories = {};
    const dbCategories = {};
    
    jsonMenu.forEach(cat => {
      jsonCategories[cat.category_name] = cat.products.length;
    });
    
    const dbCategoryCount = await sql`
      SELECT c.name, COUNT(p.id) as count
      FROM categories c
      LEFT JOIN location_products lp ON c.id = lp.category_id AND lp.location_id = 'capriccio'
      LEFT JOIN products p ON lp.product_id = p.id
      GROUP BY c.name
      ORDER BY c.name
    `;
    
    dbCategoryCount.rows.forEach(row => {
      if (row.count > 0) {
        dbCategories[row.name] = parseInt(row.count);
      }
    });
    
    // Compare categories
    Object.keys(jsonCategories).forEach(catName => {
      const jsonCount = jsonCategories[catName];
      const dbCount = dbCategories[catName] || 0;
      const match = jsonCount === dbCount ? '✓' : '✗';
      console.log(`   ${catName}: JSON=${jsonCount}, DB=${dbCount} ${match}`);
    });
    
    console.log('\n' + '='.repeat(60));
    console.log('SUMMARY:');
    console.log(`   Missing in DB: ${missingInDb}`);
    console.log(`   Extra in DB: ${extraInDb}`);
    console.log(`   Price mismatches: ${priceMismatches}`);
    console.log(`   Match status: ${missingInDb === 0 && extraInDb === 0 && priceMismatches === 0 ? '✅ PERFECT MATCH!' : '❌ MISMATCH'}`);
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run comparison
compareMenus();