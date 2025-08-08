const fs = require('fs');
const path = require('path');

// Read and parse the TypeScript menu file
const menuPath = path.join(__dirname, '..', 'lib', 'menu-1898.ts');
const menuContent = fs.readFileSync(menuPath, 'utf8');

// Extract the menu array more carefully
const startIndex = menuContent.indexOf('export const menu1898: MenuItem[] = [');
const endIndex = menuContent.lastIndexOf('];') + 1;

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find menu array');
  process.exit(1);
}

// Get just the array portion
const arrayContent = menuContent.substring(
  menuContent.indexOf('[', startIndex),
  endIndex
);

// Clean up the content for JSON parsing
const cleanedContent = arrayContent
  .replace(/export const menu1898: MenuItem\[\] = /, '')
  .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":') // Quote all keys
  .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
  .replace(/\/\/[^\n]*/g, '') // Remove comments
  .trim();

// Parse the menu data
let menu;
try {
  menu = eval(cleanedContent); // Using eval because JSON.parse might fail with some syntax
} catch (e) {
  console.error('Error parsing menu:', e);
  process.exit(1);
}

console.log(`Found ${menu.length} menu items`);

// Category mapping
const categoryMap = {
  'beers': 'cervezas-shop',
  'cocktails': 'cockteles',
  'wines': 'vinos-destilados',
  'coffee': 'cafeteria',
  'mains': 'platos-ejecutivos',
  'pizzas': 'pizzas',
  'sandwiches': 'sandwich',
  'snacks': 'bebestibles-jugos',
  'salads': 'vegetarianos-ensaladas',
  'desserts': 'reposteria-pasteleria',
  'specials': 'especiales-2x'
};

// Dietary translation map
const dietaryTranslation = {
  'vegan': 'vegano',
  'vegetarian': 'vegetariano',
  'gluten-free': 'sin gluten',
  'dairy-free': 'sin lácteos',
  'nut-free': 'sin frutos secos'
};

// Function to translate dietary array
function translateDietary(dietary) {
  if (!dietary || !Array.isArray(dietary)) return null;
  if (dietary.length === 0) return null;
  return dietary.map(d => dietaryTranslation[d] || d);
}

// Function to format array for PostgreSQL
function formatArray(arr) {
  if (!arr || (Array.isArray(arr) && arr.length === 0)) return 'NULL';
  if (!Array.isArray(arr)) return 'NULL';
  return `ARRAY[${arr.map(item => `'${String(item).replace(/'/g, "''")}'`).join(', ')}]`;
}

// Function to format value
function formatValue(value) {
  if (value === null || value === undefined) return 'NULL';
  if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
  if (typeof value === 'boolean') return value.toString();
  return value;
}

// Generate SQL
let sql = `-- ============================================
-- Migration: Insert Complete Menu 1898
-- Date: ${new Date().toISOString().split('T')[0]}
-- Total Items: ${menu.length}
-- ============================================

-- Clear existing data
DELETE FROM menu_1898;

-- ============================================
-- Insert all menu items
-- ============================================

`;

// Process items in batches of 10
const batchSize = 10;
for (let i = 0; i < menu.length; i += batchSize) {
  const batch = menu.slice(i, Math.min(i + batchSize, menu.length));
  
  sql += `-- Batch ${Math.floor(i/batchSize) + 1}: Items ${i + 1} to ${Math.min(i + batchSize, menu.length)}\n`;
  sql += 'INSERT INTO menu_1898 (slug, name, description, price, category_id, ingredients, allergens, dietary, calories, prep_time, popular, chef_special, active, stock_status, display_order) VALUES\n';
  
  batch.forEach((item, index) => {
    const isLast = index === batch.length - 1;
    const categorySlug = categoryMap[item.category] || item.category;
    const dietary = translateDietary(item.dietary);
    
    // Determine special flags based on item properties
    const isPopular = item.popular === true || 
                     item.name.toLowerCase().includes('2x') || 
                     item.name.toLowerCase().includes('promo') ||
                     item.description?.toLowerCase().includes('popular');
                     
    const isChefSpecial = item.chefSpecial === true || 
                         item.name.includes('1898') ||
                         item.description?.toLowerCase().includes('chef') ||
                         item.description?.toLowerCase().includes('especial');
    
    sql += `(${formatValue(item.id)}, `;
    sql += `${formatValue(item.name)}, `;
    sql += `${formatValue(item.description || '')}, `;
    sql += `${item.price}, `;
    sql += `(SELECT id FROM categories WHERE slug = '${categorySlug}'), `;
    sql += `${formatArray(item.ingredients)}, `;
    sql += `${formatArray(item.allergens)}, `;
    sql += `${formatArray(dietary)}, `;
    sql += `${item.calories || 'NULL'}, `;
    sql += `${formatValue(item.prepTime || item.preparation_time || '10-15 min')}, `;
    sql += `${isPopular}, `;
    sql += `${isChefSpecial}, `;
    sql += `true, `;
    sql += `'in_stock', `;
    sql += `${i + index + 1})`;
    sql += isLast ? ';\n\n' : ',\n';
  });
}

// Add verification queries
sql += `-- ============================================
-- Verification Queries
-- ============================================

-- Check total count (should be ${menu.length})
SELECT COUNT(*) as total_items FROM menu_1898;

-- Check items by category
SELECT 
    c.name as category_name,
    c.slug as category_slug,
    COUNT(m.id) as item_count
FROM menu_1898 m
JOIN categories c ON m.category_id = c.id
GROUP BY c.name, c.slug
ORDER BY c.display_order;

-- Check for any NULL category_ids (should be 0)
SELECT COUNT(*) as items_without_category
FROM menu_1898 
WHERE category_id IS NULL;

-- Check dietary translations
SELECT DISTINCT unnest(dietary) as dietary_value
FROM menu_1898
WHERE dietary IS NOT NULL
ORDER BY dietary_value;

-- Sample items to verify
SELECT name, price, category_id, dietary, allergens
FROM menu_1898
LIMIT 5;
`;

// Write to file
const outputPath = path.join(__dirname, '..', 'migrations', 'insert_menu_1898_complete.sql');
fs.writeFileSync(outputPath, sql);
console.log(`✅ Generated SQL migration with ${menu.length} items`);
console.log(`📁 File saved to: ${outputPath}`);

// Generate summary
const categoryCounts = {};
let withAllergens = 0;
let withDietary = 0;
let popular = 0;
let chefSpecial = 0;

menu.forEach(item => {
  const cat = categoryMap[item.category] || item.category;
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  
  if (item.allergens && item.allergens.length > 0) withAllergens++;
  if (item.dietary && item.dietary.length > 0) withDietary++;
  if (item.name.toLowerCase().includes('2x') || item.name.toLowerCase().includes('promo')) popular++;
  if (item.name.includes('1898')) chefSpecial++;
});

console.log('\n📊 Summary:');
console.log('================');
console.log('\nItems by category:');
Object.entries(categoryCounts).sort().forEach(([cat, count]) => {
  console.log(`  • ${cat}: ${count} items`);
});

console.log('\nMetadata stats:');
console.log(`  • Items with allergens: ${withAllergens}`);
console.log(`  • Items with dietary info: ${withDietary}`);
console.log(`  • Popular items (promos/2x): ${popular}`);
console.log(`  • Chef specials (1898): ${chefSpecial}`);

// Check for English terms
let englishTerms = 0;
menu.forEach(item => {
  if (item.dietary) {
    item.dietary.forEach(d => {
      if (['vegan', 'vegetarian', 'gluten-free', 'dairy-free'].includes(d)) {
        englishTerms++;
      }
    });
  }
});
console.log(`\n🔄 English dietary terms to translate: ${englishTerms}`);