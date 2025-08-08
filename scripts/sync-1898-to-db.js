const fs = require('fs');
const path = require('path');

// Read and parse the menu-1898.ts file
const tsContent = fs.readFileSync(path.join(__dirname, '../lib/menu-1898.ts'), 'utf8');

// Extract the menu array
const menuMatch = tsContent.match(/export const menu1898: MenuItem\[\] = (\[[\s\S]*\])/);
if (!menuMatch) {
  console.error('Could not find menu array');
  process.exit(1);
}

// Clean up the array string for parsing
let arrayStr = menuMatch[1];
// Replace TypeScript boolean values with JSON booleans
arrayStr = arrayStr.replace(/:\s*true/g, ': true');
arrayStr = arrayStr.replace(/:\s*false/g, ': false');
// Remove trailing commas
arrayStr = arrayStr.replace(/,(\s*[}\]])/g, '$1');
// Remove the final array closing bracket and any trailing content
arrayStr = arrayStr.substring(0, arrayStr.lastIndexOf(']') + 1);

// Parse the menu items
let menuItems;
try {
  menuItems = eval(arrayStr);
} catch (e) {
  console.error('Error parsing menu:', e);
  process.exit(1);
}

console.log(`Found ${menuItems.length} items to sync`);

// Generate SQL for each item
const insertStatements = [];

// Category mapping
const categoryMap = {
  'beers': 'cervezas-shop',
  'cocktails': 'cockteles',
  'wines': 'vinos-destilados',
  'spirits': 'vinos-destilados',
  'beverages': 'bebestibles-jugos',
  'coffee': 'cafeteria',
  'mains': 'platos-ejecutivos',
  'pizzas': 'pizzas',
  'sandwiches': 'sandwich',
  'appetizers': 'tablas',
  'salads': 'vegetarianos-ensaladas',
  'desserts': 'reposteria-pasteleria',
  'hotdogs': 'sandwich',
  'pastries': 'reposteria-pasteleria',
  'specials': 'especiales-2x'
};

menuItems.forEach((item, index) => {
  // Escape single quotes in text fields
  const name = item.name.replace(/'/g, "''");
  const description = (item.description || '').replace(/'/g, "''");
  
  // Format arrays for PostgreSQL
  const ingredients = item.ingredients ? 
    `ARRAY[${item.ingredients.map(i => `'${i.replace(/'/g, "''")}'`).join(', ')}]` : 
    'NULL';
  
  const allergens = item.allergens && item.allergens.length > 0 ? 
    `ARRAY[${item.allergens.map(a => `'${a.replace(/'/g, "''")}'`).join(', ')}]` : 
    'NULL';
  
  const dietary = item.dietary && item.dietary.length > 0 ? 
    `ARRAY[${item.dietary.map(d => `'${d.replace(/'/g, "''")}'`).join(', ')}]` : 
    'NULL';
  
  // Map category
  const categorySlug = categoryMap[item.category] || 'bebestibles-jugos';
  
  // Format the insert statement
  const sql = `
-- Item ${index + 1}: ${item.name}
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '${item.id}',
  '${name}',
  '${description}',
  ${item.price},
  (SELECT id FROM categories WHERE slug = '${categorySlug}'),
  ${ingredients},
  ${allergens},
  ${dietary},
  ${item.calories || 'NULL'},
  '${item.prepTime || '5-10 min'}',
  ${item.popular || false},
  ${item.chef_special || false},
  true,
  'in_stock',
  ${index + 1}
);`;
  
  insertStatements.push(sql);
});

// Write to file
const fullSql = `-- Full sync of menu-1898.ts to database
-- Generated on ${new Date().toISOString()}
-- Total items: ${menuItems.length}

-- Clear existing data
TRUNCATE TABLE menu_1898 CASCADE;

-- Insert all items
${insertStatements.join('\n')}

-- Verify count
SELECT COUNT(*) as total FROM menu_1898;
`;

fs.writeFileSync(path.join(__dirname, 'sync-1898.sql'), fullSql);
console.log(`Generated SQL file with ${menuItems.length} insert statements`);
console.log('Saved to: scripts/sync-1898.sql');

// Also create smaller batch files for easier execution
const batchSize = 20;
for (let i = 0; i < insertStatements.length; i += batchSize) {
  const batch = insertStatements.slice(i, i + batchSize);
  const batchNum = Math.floor(i / batchSize) + 1;
  const batchSql = `-- Batch ${batchNum} of ${Math.ceil(insertStatements.length / batchSize)}
-- Items ${i + 1} to ${Math.min(i + batchSize, insertStatements.length)}

${batch.join('\n')}
`;
  fs.writeFileSync(path.join(__dirname, `batch-1898-${batchNum}.sql`), batchSql);
}

console.log(`Created ${Math.ceil(insertStatements.length / batchSize)} batch files`);