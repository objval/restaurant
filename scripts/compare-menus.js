const fs = require('fs');
const path = require('path');

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/data/1898.json'), 'utf8'));

// Read TS file and extract item names
const tsContent = fs.readFileSync(path.join(__dirname, '../lib/menu-1898.ts'), 'utf8');

// Extract all items from JSON
const jsonItems = [];
jsonData[0].categories.forEach(category => {
  category.items.forEach(item => {
    jsonItems.push({
      name: item.name,
      category: category.category_name,
      price: item.price,
      description: item.description
    });
  });
});

// Extract items from TS file using regex
const tsItemMatches = tsContent.matchAll(/"name":\s*"([^"]+)"/g);
const tsItemNames = new Set();
for (const match of tsItemMatches) {
  tsItemNames.add(match[1]);
}

// Find missing items
const missingItems = [];
const foundItems = [];

jsonItems.forEach(item => {
  if (!tsItemNames.has(item.name)) {
    missingItems.push(item);
  } else {
    foundItems.push(item);
  }
});

// Group missing items by category
const missingByCategory = {};
missingItems.forEach(item => {
  if (!missingByCategory[item.category]) {
    missingByCategory[item.category] = [];
  }
  missingByCategory[item.category].push(item);
});

console.log('=== COMPARISON RESULTS ===');
console.log(`Total items in JSON: ${jsonItems.length}`);
console.log(`Total items in TS: ${tsItemNames.size}`);
console.log(`Missing items: ${missingItems.length}`);
console.log('\n=== MISSING ITEMS BY CATEGORY ===');

Object.keys(missingByCategory).forEach(category => {
  console.log(`\n${category} (${missingByCategory[category].length} items):`);
  missingByCategory[category].forEach(item => {
    console.log(`  - ${item.name}: ${item.price}`);
  });
});

// Save missing items to file for processing
fs.writeFileSync(
  path.join(__dirname, 'missing-items.json'), 
  JSON.stringify(missingByCategory, null, 2)
);

console.log('\n✓ Missing items saved to scripts/missing-items.json');