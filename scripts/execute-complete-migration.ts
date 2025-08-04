import { config } from "dotenv";
config({ path: ".env.local" });

import { createPool } from "@vercel/postgres";
import { menuarbol } from "../lib/menu-arbol";
import { menu1898 } from "../lib/menu-1898";
import { menucapriccio } from "../lib/menu-capriccio";
import * as bcrypt from "bcryptjs";

// Create pool
const { sql } = createPool({
  connectionString: process.env.POSTGRES_URL
});

const locationMenus = {
  arbol: menuarbol,
  "1898": menu1898,
  capriccio: menucapriccio,
};

async function migrateAllProducts() {
  console.log("🚀 Starting complete product migration...\n");
  
  let successCount = 0;
  let errorCount = 0;
  const errors: string[] = [];
  
  // Collect all unique products
  const allProducts = new Map<string, any>();
  
  for (const [locationId, menuItems] of Object.entries(locationMenus)) {
    for (const item of menuItems) {
      if (!allProducts.has(item.id)) {
        allProducts.set(item.id, item);
      }
    }
  }
  
  console.log(`📦 Found ${allProducts.size} unique products to migrate\n`);
  
  // Migrate products in batches
  const productArray = Array.from(allProducts.values());
  const batchSize = 10;
  
  for (let i = 0; i < productArray.length; i += batchSize) {
    const batch = productArray.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(productArray.length/batchSize)}...`);
    
    for (const item of batch) {
      try {
        await sql`
          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            ${item.id},
            ${item.name},
            ${item.description},
            ${item.price},
            ${item.image},
            ${item.prepTime || null},
            ${item.calories || null},
            ${item.spiceLevel || null},
            ${item.ingredients || []},
            ${item.allergens || []},
            ${item.dietary || []},
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
            updated_at = CURRENT_TIMESTAMP
        `;
        successCount++;
      } catch (error) {
        errorCount++;
        errors.push(`Product ${item.id}: ${error}`);
        console.error(`❌ Error migrating ${item.id}:`, error);
      }
    }
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n✅ Products migrated: ${successCount}/${allProducts.size}`);
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`);
  }
  
  return { successCount, errorCount, errors };
}

async function migrateLocationProducts() {
  console.log("\n🔗 Migrating location-product relationships...\n");
  
  let successCount = 0;
  let errorCount = 0;
  const errors: string[] = [];
  
  // Get category mapping
  const { rows: categories } = await sql`SELECT id, slug FROM categories`;
  const categoryMap = new Map(categories.map(c => [c.slug, c.id]));
  
  for (const [locationId, menuItems] of Object.entries(locationMenus)) {
    console.log(`Processing ${locationId} (${menuItems.length} items)...`);
    
    for (const item of menuItems) {
      const categoryId = categoryMap.get(item.category);
      
      if (!categoryId) {
        console.error(`❌ Category not found: ${item.category}`);
        errorCount++;
        continue;
      }
      
      try {
        // Get product ID by legacy_id
        const { rows: productRows } = await sql`
          SELECT id FROM products WHERE legacy_id = ${item.id}
        `;
        
        if (productRows.length === 0) {
          throw new Error(`Product not found with legacy_id: ${item.id}`);
        }
        
        const productId = productRows[0].id;
        
        await sql`
          INSERT INTO location_products (
            location_id, 
            product_id, 
            category_id,
            is_available,
            display_order
          ) VALUES (
            ${locationId},
            ${productId},
            ${categoryId},
            true,
            0
          )
          ON CONFLICT (location_id, product_id) DO UPDATE SET
            category_id = EXCLUDED.category_id,
            updated_at = CURRENT_TIMESTAMP
        `;
        successCount++;
      } catch (error) {
        errorCount++;
        errors.push(`Location-Product ${locationId}-${item.id}: ${error}`);
        console.error(`❌ Error creating relationship for ${item.id}:`, error);
      }
    }
  }
  
  console.log(`\n✅ Location-product relationships created: ${successCount}`);
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`);
  }
  
  return { successCount, errorCount, errors };
}

async function verifyMigration() {
  console.log("\n🔍 Verifying migration...\n");
  
  // Count products per location
  const { rows: locationCounts } = await sql`
    SELECT 
      l.id,
      l.name as location_name,
      COUNT(DISTINCT lp.product_id) as product_count
    FROM locations l
    LEFT JOIN location_products lp ON l.id = lp.location_id
    GROUP BY l.id, l.name
    ORDER BY l.name
  `;
  
  console.log("Products per location:");
  locationCounts.forEach(row => {
    console.log(`- ${row.location_name}: ${row.product_count} products`);
  });
  
  // Total unique products
  const { rows: productCount } = await sql`
    SELECT COUNT(*) as total FROM products
  `;
  console.log(`\nTotal unique products: ${productCount[0].total}`);
  
  // Total relationships
  const { rows: relationCount } = await sql`
    SELECT COUNT(*) as total FROM location_products
  `;
  console.log(`Total location-product relationships: ${relationCount[0].total}`);
}

async function main() {
  try {
    // 1. Migrate all products
    const productResult = await migrateAllProducts();
    
    // 2. Migrate location-product relationships
    const relationResult = await migrateLocationProducts();
    
    // 3. Verify migration
    await verifyMigration();
    
    console.log("\n✅ Migration completed!");
    
    // Save error log if any
    if (productResult.errorCount > 0 || relationResult.errorCount > 0) {
      const fs = require('fs');
      const errorLog = [
        ...productResult.errors,
        ...relationResult.errors
      ].join('\n');
      fs.writeFileSync('scripts/migration-errors.log', errorLog);
      console.log("\n⚠️  Errors logged to scripts/migration-errors.log");
    }
    
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
  });
}