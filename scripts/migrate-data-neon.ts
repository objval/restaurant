import { config } from "dotenv";
config({ path: ".env.local" });

import { locations } from "../lib/locations";
import { menuCategories } from "../lib/menu-data";
import { menuarbol } from "../lib/menu-arbol";
import { menu1898 } from "../lib/menu-1898";
import { menucapriccio } from "../lib/menu-capriccio";
import * as bcrypt from "bcryptjs";

// Map of location IDs to their menu data
const locationMenus = {
  arbol: menuarbol,
  "1898": menu1898,
  capriccio: menucapriccio,
};

const projectId = "ancient-darkness-66047211";

async function executeSQL(query: string, params: any[] = []) {
  // We'll use the Neon MCP tool to execute SQL
  console.log("Executing SQL:", query.substring(0, 100) + "...");
  // This function will be called from the main script
  return { rows: [] };
}

// Generate SQL statements
async function generateMigrationSQL() {
  const statements: string[] = [];
  
  // 1. Insert locations
  console.log("Generating location inserts...");
  for (const location of locations) {
    const sql = `
      INSERT INTO locations (
        id, name, concept, path, coordinates, theme, images,
        description, long_description, hours, specialties, atmosphere,
        price_range, contact, features, stats, social_proof, social_media, promotions
      ) VALUES (
        '${location.id}',
        '${location.name.replace(/'/g, "''")}',
        '${location.concept.replace(/'/g, "''")}',
        '${location.path}',
        '${JSON.stringify(location.coordinates)}',
        '${JSON.stringify(location.theme)}',
        '${JSON.stringify(location.images)}',
        '${location.description.replace(/'/g, "''")}',
        '${location.longDescription.replace(/'/g, "''")}',
        '${JSON.stringify(location.hours)}',
        ARRAY[${location.specialties.map(s => `'${s.replace(/'/g, "''")}'`).join(',')}],
        ARRAY[${location.atmosphere.map(s => `'${s.replace(/'/g, "''")}'`).join(',')}],
        '${location.priceRange}',
        '${JSON.stringify(location.contact)}',
        ARRAY[${location.features.map(s => `'${s.replace(/'/g, "''")}'`).join(',')}],
        '${JSON.stringify(location.stats)}',
        '${JSON.stringify(location.socialProof)}',
        '${JSON.stringify(location.socialMedia || {})}',
        '${JSON.stringify(location.promotions)}'
      )
      ON CONFLICT (id) DO NOTHING
    `;
    statements.push(sql);
  }

  // 2. Insert categories
  console.log("Generating category inserts...");
  for (let i = 0; i < menuCategories.length; i++) {
    const category = menuCategories[i];
    const sql = `
      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('${category.id}', '${category.name.replace(/'/g, "''")}', '${category.description.replace(/'/g, "''")}', '${category.icon}', ${i})
      ON CONFLICT (slug) DO NOTHING
    `;
    statements.push(sql);
  }

  // 3. Insert products and location_products
  console.log("Generating product inserts...");
  const productInserts: string[] = [];
  const locationProductInserts: string[] = [];
  const menuHighlightInserts: string[] = [];
  
  // Track unique products
  const uniqueProducts = new Map();
  
  for (const [locationId, menuItems] of Object.entries(locationMenus)) {
    for (const item of menuItems) {
      if (!uniqueProducts.has(item.id)) {
        uniqueProducts.set(item.id, item);
        
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
            '${item.prepTime}',
            ${item.calories || 'NULL'},
            ${item.spiceLevel || 'NULL'},
            ARRAY[${item.ingredients.map(i => `'${i.replace(/'/g, "''")}'`).join(',')}],
            ARRAY[${item.allergens.map(a => `'${a.replace(/'/g, "''")}'`).join(',')}],
            ARRAY[${item.dietary.map(d => `'${d.replace(/'/g, "''")}'`).join(',')}],
            ${item.chef_special || false},
            ${item.popular || false},
            ${item.seasonal || false}
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        `;
        productInserts.push(productSql);
      }
      
      // Location-product relationship
      const locationProductSql = `
        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '${locationId}',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '${item.id}'
          AND c.slug = '${item.category}'
        ON CONFLICT (location_id, product_id) DO NOTHING
      `;
      locationProductInserts.push(locationProductSql);
    }
  }

  // 4. Menu highlights
  console.log("Generating menu highlight inserts...");
  for (const location of locations) {
    if (location.menuHighlights && location.menuHighlights.length > 0) {
      for (let i = 0; i < location.menuHighlights.length; i++) {
        const highlight = location.menuHighlights[i];
        
        const highlightSql = `
          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            '${location.id}',
            p.id,
            '${highlight.name.replace(/'/g, "''")}',
            '${highlight.description.replace(/'/g, "''")}',
            '${highlight.price}',
            '${highlight.image}',
            ${i}
          FROM products p
          WHERE p.legacy_id = '${highlight.id}'
          ON CONFLICT DO NOTHING
        `;
        menuHighlightInserts.push(highlightSql);
      }
    }
  }

  // 5. Create default admin user
  console.log("Generating admin user insert...");
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_SECRET_KEY || "super-secret-admin-key-2024", 10);
  const adminSql = `
    INSERT INTO admin_users (email, password_hash, name, role)
    VALUES ('admin@restaurant.com', '${hashedPassword}', 'Admin', 'admin')
    ON CONFLICT (email) DO NOTHING
  `;

  return {
    locations: statements,
    products: productInserts,
    locationProducts: locationProductInserts,
    menuHighlights: menuHighlightInserts,
    admin: adminSql
  };
}

// Export the function for use in other scripts
export { generateMigrationSQL };

// If running directly
if (require.main === module) {
  generateMigrationSQL().then(sqls => {
    console.log("\n✅ Generated migration SQL statements:");
    console.log(`- ${sqls.locations.length} location inserts`);
    console.log(`- ${sqls.products.length} product inserts`);
    console.log(`- ${sqls.locationProducts.length} location-product relationships`);
    console.log(`- ${sqls.menuHighlights.length} menu highlights`);
    console.log(`- 1 admin user`);
    
    // Write to file for manual execution if needed
    const fs = require('fs');
    const allSql = [
      ...sqls.locations,
      ...sqls.products,
      ...sqls.locationProducts,
      ...sqls.menuHighlights,
      sqls.admin
    ].join(';\n\n') + ';';
    
    fs.writeFileSync('scripts/migration.sql', allSql);
    console.log("\n✅ SQL statements written to scripts/migration.sql");
  });
}