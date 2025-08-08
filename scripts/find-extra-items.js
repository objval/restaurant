const fs = require('fs');
const path = require('path');

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/data/1898.json'), 'utf8'));

// Extract all items from JSON
const jsonItemNames = new Set();
jsonData[0].categories.forEach(category => {
  category.items.forEach(item => {
    jsonItemNames.add(item.name.toLowerCase());
  });
});

// Read TS file
const tsContent = fs.readFileSync(path.join(__dirname, '../lib/menu-1898.ts'), 'utf8');

// Extract items from TS file
const tsItemMatches = tsContent.matchAll(/{\s*"id":\s*"[^"]+",\s*"name":\s*"([^"]+)"/g);
const tsItems = [];
for (const match of tsItemMatches) {
  tsItems.push(match[1]);
}

// Find items in TS but not in JSON
const extraItems = [];
tsItems.forEach(item => {
  if (!jsonItemNames.has(item.toLowerCase())) {
    extraItems.push(item);
  }
});

console.log('=== EXTRA ITEMS IN TS FILE ===');
console.log(`Items in TS but not in JSON: ${extraItems.length}`);
if (extraItems.length > 0) {
  extraItems.forEach(item => {
    console.log(`  - ${item}`);
  });
}