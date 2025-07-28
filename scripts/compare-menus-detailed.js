const fs = require('fs');
const path = require('path');

// Read scraped menu data
const scrapedData = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/data/menu_scraped.json'), 'utf8'));
const scrapedMenu = scrapedData[0].menu;

// Read TypeScript menu file
const tsContent = fs.readFileSync(path.join(__dirname, '../lib/menu-arbol.ts'), 'utf8');

// Parse TypeScript menu items
const parseTypeScriptMenu = (content) => {
  const items = [];
  const regex = /{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*description:\s*"([^"]*)",\s*price:\s*(\d+),\s*category:\s*"([^"]+)"/gm;
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({
      id: match[1],
      name: match[2],
      description: match[3],
      price: parseInt(match[4]),
      category: match[5]
    });
  }
  
  return items;
};

const tsMenuItems = parseTypeScriptMenu(tsContent);

// Create lookup maps
const scrapedByName = new Map();
scrapedMenu.forEach(category => {
  category.items.forEach(item => {
    const normalizedName = item.name.toLowerCase().trim();
    scrapedByName.set(normalizedName, { ...item, category: category.category });
  });
});

const tsByName = new Map();
tsMenuItems.forEach(item => {
  const normalizedName = item.name.toLowerCase().trim();
  tsByName.set(normalizedName, item);
});

// Compare and find discrepancies
const discrepancies = {
  priceDifferences: [],
  missingInTypeScript: [],
  missingInScraped: [],
  descriptionDifferences: []
};

// Check items in scraped data
scrapedByName.forEach((scrapedItem, normalizedName) => {
  const tsItem = tsByName.get(normalizedName);
  
  if (!tsItem) {
    discrepancies.missingInTypeScript.push({
      name: scrapedItem.name,
      category: scrapedItem.category,
      price: scrapedItem.price,
      description: scrapedItem.description
    });
  } else {
    // Compare prices
    const scrapedPrice = parseInt(scrapedItem.price.replace(/[^\d]/g, ''));
    if (scrapedPrice !== tsItem.price) {
      discrepancies.priceDifferences.push({
        name: scrapedItem.name,
        category: scrapedItem.category,
        scrapedPrice: scrapedItem.price,
        tsPrice: tsItem.price,
        difference: tsItem.price - scrapedPrice
      });
    }
    
    // Compare descriptions
    const scrapedDesc = scrapedItem.description.trim();
    const tsDesc = tsItem.description.trim();
    if (scrapedDesc && tsDesc && scrapedDesc !== tsDesc) {
      discrepancies.descriptionDifferences.push({
        name: scrapedItem.name,
        category: scrapedItem.category,
        scrapedDescription: scrapedDesc,
        tsDescription: tsDesc
      });
    }
  }
});

// Check items in TypeScript that are not in scraped
tsByName.forEach((tsItem, normalizedName) => {
  if (!scrapedByName.has(normalizedName)) {
    discrepancies.missingInScraped.push({
      name: tsItem.name,
      category: tsItem.category,
      price: tsItem.price,
      description: tsItem.description
    });
  }
});

// Sort results by category
const sortByCategory = (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name);

discrepancies.priceDifferences.sort(sortByCategory);
discrepancies.missingInTypeScript.sort(sortByCategory);
discrepancies.missingInScraped.sort(sortByCategory);
discrepancies.descriptionDifferences.sort(sortByCategory);

// Generate report
console.log('=== MENU COMPARISON REPORT ===\n');

console.log(`Total items in scraped data: ${Array.from(scrapedByName.values()).length}`);
console.log(`Total items in TypeScript file: ${tsMenuItems.length}\n`);

console.log('=== PRICE DIFFERENCES ===');
if (discrepancies.priceDifferences.length === 0) {
  console.log('No price differences found.\n');
} else {
  let currentCategory = '';
  discrepancies.priceDifferences.forEach(item => {
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      console.log(`\n${currentCategory}:`);
    }
    console.log(`  - ${item.name}`);
    console.log(`    Scraped: ${item.scrapedPrice} | TypeScript: $${item.tsPrice} | Difference: $${item.difference}`);
  });
  console.log('');
}

console.log('=== MISSING IN TYPESCRIPT FILE ===');
if (discrepancies.missingInTypeScript.length === 0) {
  console.log('No items missing in TypeScript file.\n');
} else {
  let currentCategory = '';
  discrepancies.missingInTypeScript.forEach(item => {
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      console.log(`\n${currentCategory}:`);
    }
    console.log(`  - ${item.name} (${item.price})`);
    if (item.description) {
      console.log(`    Description: ${item.description.substring(0, 100)}...`);
    }
  });
  console.log('');
}

console.log('=== MISSING IN SCRAPED DATA ===');
if (discrepancies.missingInScraped.length === 0) {
  console.log('No items missing in scraped data.\n');
} else {
  let currentCategory = '';
  discrepancies.missingInScraped.forEach(item => {
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      console.log(`\n${item.category}:`);
    }
    console.log(`  - ${item.name} ($${item.price})`);
  });
  console.log('');
}

console.log('=== DESCRIPTION DIFFERENCES ===');
if (discrepancies.descriptionDifferences.length === 0) {
  console.log('No significant description differences found.\n');
} else {
  console.log(`Found ${discrepancies.descriptionDifferences.length} items with different descriptions.`);
  console.log('(Showing first 10 differences)\n');
  
  discrepancies.descriptionDifferences.slice(0, 10).forEach(item => {
    console.log(`${item.name} (${item.category}):`);
    console.log(`  Scraped: "${item.scrapedDescription.substring(0, 100)}..."`);
    console.log(`  TypeScript: "${item.tsDescription.substring(0, 100)}..."\n`);
  });
}

// Save detailed report to file
const reportData = {
  summary: {
    scrapedItemsCount: Array.from(scrapedByName.values()).length,
    typeScriptItemsCount: tsMenuItems.length,
    priceDifferencesCount: discrepancies.priceDifferences.length,
    missingInTypeScriptCount: discrepancies.missingInTypeScript.length,
    missingInScrapedCount: discrepancies.missingInScraped.length,
    descriptionDifferencesCount: discrepancies.descriptionDifferences.length
  },
  discrepancies
};

fs.writeFileSync(
  path.join(__dirname, 'menu-comparison-report.json'),
  JSON.stringify(reportData, null, 2)
);

console.log('\nDetailed report saved to: scripts/menu-comparison-report.json');