import { config } from "dotenv";
config({ path: ".env.local" });

import { menuarbol } from "../lib/menu-arbol";
import { menu1898 } from "../lib/menu-1898";
import { menucapriccio } from "../lib/menu-capriccio";
import { menuCategories } from "../lib/menu-data";
import * as bcrypt from "bcryptjs";

const projectId = "ancient-darkness-66047211";

// Map of location IDs to their menu data
const locationMenus = {
  arbol: menuarbol,
  "1898": menu1898,
  capriccio: menucapriccio,
};

interface MigrationStats {
  totalProducts: number;
  totalLocationProducts: number;
  productsByLocation: Record<string, number>;
  categoriesUsed: Set<string>;
}

async function generateCompleteMigrationSQL(): Promise<{
  stats: MigrationStats;
  sql: string;
}> {
  const stats: MigrationStats = {
    totalProducts: 0,
    totalLocationProducts: 0,
    productsByLocation: {},
    categoriesUsed: new Set(),
  };

  const sqlStatements: string[] = [];
  
  // Track unique products across all locations
  const allProducts = new Map<string, any>();
  
  // Collect all unique products
  for (const [locationId, menuItems] of Object.entries(locationMenus)) {
    stats.productsByLocation[locationId] = menuItems.length;
    
    for (const item of menuItems) {
      if (!allProducts.has(item.id)) {
        allProducts.set(item.id, item);
      }
      stats.categoriesUsed.add(item.category);
    }
  }
  
  stats.totalProducts = allProducts.size;
  
  console.log(`\n📊 Migration Statistics:`);
  console.log(`- Total unique products: ${stats.totalProducts}`);
  console.log(`- Products by location:`);
  Object.entries(stats.productsByLocation).forEach(([loc, count]) => {
    console.log(`  - ${loc}: ${count} products`);
  });
  console.log(`- Categories used: ${stats.categoriesUsed.size}`);
  
  // Generate SQL for all products
  console.log("\n🔄 Generating product inserts...");
  
  for (const [productId, item] of allProducts) {
    const productSql = `
INSERT INTO products (
  legacy_id, name, description, base_price, image_url,
  prep_time, calories, spice_level, ingredients, allergens,
  dietary_tags, is_chef_special, is_popular, is_seasonal
) VALUES (
  '${item.id}',
  '${item.name.replace(/'/g, "''")}',
  '${item.description.replace(/'/g, "''")}',
  ${item.price},
  '${item.image}',
  ${item.prepTime ? `'${item.prepTime}'` : 'NULL'},
  ${item.calories || 'NULL'},
  ${item.spiceLevel || 'NULL'},
  ARRAY[${item.ingredients.map(i => `'${i.replace(/'/g, "''")}'`).join(',')}]::text[],
  ARRAY[${item.allergens.map(a => `'${a.replace(/'/g, "''")}'`).join(',')}]::text[],
  ARRAY[${item.dietary.map(d => `'${d.replace(/'/g, "''")}'`).join(',')}]::text[],
  ${item.chef_special || false},
  ${item.popular || false},
  ${item.seasonal || false}
)
ON CONFLICT (legacy_id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  base_price = EXCLUDED.base_price,
  image_url = EXCLUDED.image_url,
  prep_time = EXCLUDED.prep_time,
  calories = EXCLUDED.calories,
  spice_level = EXCLUDED.spice_level,
  ingredients = EXCLUDED.ingredients,
  allergens = EXCLUDED.allergens,
  dietary_tags = EXCLUDED.dietary_tags,
  is_chef_special = EXCLUDED.is_chef_special,
  is_popular = EXCLUDED.is_popular,
  is_seasonal = EXCLUDED.is_seasonal,
  updated_at = CURRENT_TIMESTAMP;`;
    
    sqlStatements.push(productSql);
  }
  
  // Generate location-product relationships
  console.log("\n🔗 Generating location-product relationships...");
  
  for (const [locationId, menuItems] of Object.entries(locationMenus)) {
    for (const item of menuItems) {
      stats.totalLocationProducts++;
      
      const locationProductSql = `
INSERT INTO location_products (
  location_id, 
  product_id, 
  category_id,
  is_available,
  display_order
) 
SELECT 
  '${locationId}',
  p.id,
  c.id,
  true,
  0
FROM products p
CROSS JOIN categories c
WHERE p.legacy_id = '${item.id}'
  AND c.slug = '${item.category}'
ON CONFLICT (location_id, product_id) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  updated_at = CURRENT_TIMESTAMP;`;
      
      sqlStatements.push(locationProductSql);
    }
  }
  
  console.log(`- Total location-product relationships: ${stats.totalLocationProducts}`);
  
  return {
    stats,
    sql: sqlStatements.join('\n\n')
  };
}

// Generate verification queries
function generateVerificationSQL(): string {
  const queries: string[] = [];
  
  // Count products per location
  queries.push(`
-- Products per location
SELECT 
  l.name as location_name,
  COUNT(DISTINCT lp.product_id) as product_count
FROM locations l
LEFT JOIN location_products lp ON l.id = lp.location_id
GROUP BY l.id, l.name
ORDER BY l.name;`);
  
  // Count products per category per location
  queries.push(`
-- Products per category per location
SELECT 
  l.name as location_name,
  c.name as category_name,
  COUNT(lp.product_id) as product_count
FROM locations l
CROSS JOIN categories c
LEFT JOIN location_products lp ON l.id = lp.location_id AND c.id = lp.category_id
GROUP BY l.id, l.name, c.id, c.name
HAVING COUNT(lp.product_id) > 0
ORDER BY l.name, c.display_order;`);
  
  // Check for missing legacy IDs
  queries.push(`
-- Check for products without legacy_id (should be 0)
SELECT COUNT(*) as products_without_legacy_id
FROM products
WHERE legacy_id IS NULL;`);
  
  // Total unique products
  queries.push(`
-- Total unique products
SELECT COUNT(*) as total_products
FROM products;`);
  
  return queries.join('\n\n');
}

async function main() {
  console.log("🚀 Starting complete menu migration...\n");
  
  // Generate migration SQL
  const { stats, sql } = await generateCompleteMigrationSQL();
  
  // Write migration SQL
  const fs = require('fs');
  fs.writeFileSync('scripts/complete-migration.sql', sql);
  console.log("\n✅ Migration SQL written to scripts/complete-migration.sql");
  
  // Write verification SQL
  const verificationSQL = generateVerificationSQL();
  fs.writeFileSync('scripts/verify-migration.sql', verificationSQL);
  console.log("✅ Verification SQL written to scripts/verify-migration.sql");
  
  // Write stats summary
  const summary = `
MIGRATION SUMMARY
=================

Total Unique Products: ${stats.totalProducts}
Total Location-Product Relationships: ${stats.totalLocationProducts}

Products by Location:
${Object.entries(stats.productsByLocation).map(([loc, count]) => `- ${loc}: ${count} products`).join('\n')}

Categories Used: ${Array.from(stats.categoriesUsed).join(', ')}

Next Steps:
1. Execute scripts/complete-migration.sql in your database
2. Run scripts/verify-migration.sql to verify the migration
3. Use scripts/compare-menus.ts to compare local vs database data
`;
  
  fs.writeFileSync('scripts/migration-summary.txt', summary);
  console.log("✅ Migration summary written to scripts/migration-summary.txt");
  
  console.log("\n" + summary);
}

if (require.main === module) {
  main().catch(console.error);
}