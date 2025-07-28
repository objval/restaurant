const fs = require('fs');
const path = require('path');

// Read the scraped data
const scrapedData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'lib', 'data', 'documents_1(3).json'), 'utf8'));

// Read the generated menu
const menuContent = fs.readFileSync(path.join(__dirname, '..', 'lib', 'menu-1898.ts'), 'utf8');
const menuMatch = menuContent.match(/export const menu1898: MenuItem\[\] = (\[[\s\S]*\])/);
const menuData = JSON.parse(menuMatch[1]);

// Helper function to normalize names for comparison
function normalizeName(name) {
  return name.toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/ñ/g, 'n')
    .trim();
}

// Helper function to parse price
function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[$.,]/g, '')) || 0;
}

// Create maps for comparison
const scrapedMap = new Map();
const menuMap = new Map();

// Process scraped data
let scrapedCount = 0;
scrapedData[0].categories.forEach(category => {
  category.items.forEach(item => {
    const price = parsePrice(item.price);
    if (price > 0) {
      scrapedCount++;
      const normalizedName = normalizeName(item.name);
      scrapedMap.set(normalizedName, {
        name: item.name,
        price: price,
        description: item.description,
        category: category.category
      });
    }
  });
});

// Process menu data (excluding duplicates in promo category)
const uniqueMenuItems = new Map();
menuData.forEach(item => {
  const normalizedName = normalizeName(item.name);
  if (!uniqueMenuItems.has(normalizedName) || !item.id.startsWith('promo-')) {
    uniqueMenuItems.set(normalizedName, item);
  }
});

uniqueMenuItems.forEach((item, normalizedName) => {
  menuMap.set(normalizedName, {
    name: item.name,
    price: item.price,
    description: item.description,
    category: item.category,
    id: item.id
  });
});

console.log('=== MENU COMPARISON REPORT ===\n');
console.log(`Total items in scraped data: ${scrapedCount}`);
console.log(`Total unique items in menu: ${uniqueMenuItems.size}`);
console.log(`Total items in menu (including promos): ${menuData.length}\n`);

// Find missing items
console.log('=== MISSING ITEMS ===');
let missingCount = 0;
scrapedMap.forEach((scrapedItem, normalizedName) => {
  if (!menuMap.has(normalizedName)) {
    missingCount++;
    console.log(`- ${scrapedItem.name} (${scrapedItem.category}) - $${scrapedItem.price}`);
  }
});
if (missingCount === 0) {
  console.log('✓ No missing items');
}
console.log(`\nTotal missing: ${missingCount}`);

// Find price mismatches
console.log('\n=== PRICE MISMATCHES ===');
let priceMismatchCount = 0;
scrapedMap.forEach((scrapedItem, normalizedName) => {
  const menuItem = menuMap.get(normalizedName);
  if (menuItem && menuItem.price !== scrapedItem.price) {
    priceMismatchCount++;
    console.log(`- ${scrapedItem.name}: Scraped: $${scrapedItem.price}, Menu: $${menuItem.price}`);
  }
});
if (priceMismatchCount === 0) {
  console.log('✓ All prices match');
}
console.log(`\nTotal price mismatches: ${priceMismatchCount}`);

// Find name variations
console.log('\n=== NAME VARIATIONS ===');
let nameVariationCount = 0;
scrapedMap.forEach((scrapedItem, normalizedName) => {
  const menuItem = menuMap.get(normalizedName);
  if (menuItem && menuItem.name !== scrapedItem.name) {
    nameVariationCount++;
    console.log(`- Scraped: "${scrapedItem.name}" vs Menu: "${menuItem.name}"`);
  }
});
if (nameVariationCount === 0) {
  console.log('✓ All names match exactly');
}
console.log(`\nTotal name variations: ${nameVariationCount}`);

// Category distribution
console.log('\n=== CATEGORY DISTRIBUTION ===');
const categoryCount = new Map();
menuData.forEach(item => {
  categoryCount.set(item.category, (categoryCount.get(item.category) || 0) + 1);
});
[...categoryCount.entries()].sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
  console.log(`${category}: ${count} items`);
});

// Check for 2x promos in both categories
console.log('\n=== 2X PROMO ITEMS (should be in both cocktails and specials) ===');
const promoItems = menuData.filter(item => item.name.toLowerCase().includes('2x'));
const promoByCat = {};
promoItems.forEach(item => {
  if (!promoByCat[item.name]) promoByCat[item.name] = [];
  promoByCat[item.name].push(item.category);
});

Object.entries(promoByCat).forEach(([name, categories]) => {
  console.log(`- ${name}: ${categories.join(', ')}`);
});

console.log('\n=== SUMMARY ===');
console.log(`✓ Coverage: ${((uniqueMenuItems.size / scrapedCount) * 100).toFixed(1)}%`);
console.log(`✓ Accuracy: ${(((uniqueMenuItems.size - priceMismatchCount) / uniqueMenuItems.size) * 100).toFixed(1)}%`);