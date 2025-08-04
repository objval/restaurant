import { config } from "dotenv";
config({ path: ".env.local" });
import { createPool } from "@vercel/postgres";
import { locations } from "../lib/locations";
import { menuCategories } from "../lib/menu-data";
import { menuarbol } from "../lib/menu-arbol";
import { menu1898 } from "../lib/menu-1898";
import { menucapriccio } from "../lib/menu-capriccio";
import * as bcrypt from "bcryptjs";

// Create pool with connection string
const { sql } = createPool({
  connectionString: process.env.POSTGRES_URL
});

// Map of location IDs to their menu data
const locationMenus = {
  arbol: menuarbol,
  "1898": menu1898,
  capriccio: menucapriccio,
};

async function migrateData() {
  console.log("Starting data migration...");

  try {
    // 1. Insert locations
    console.log("Migrating locations...");
    for (const location of locations) {
      await sql`
        INSERT INTO locations (
          id, name, concept, path, coordinates, theme, images,
          description, long_description, hours, specialties, atmosphere,
          price_range, contact, features, stats, social_proof, social_media, promotions
        ) VALUES (
          ${location.id},
          ${location.name},
          ${location.concept},
          ${location.path},
          ${JSON.stringify(location.coordinates)},
          ${JSON.stringify(location.theme)},
          ${JSON.stringify(location.images)},
          ${location.description},
          ${location.longDescription},
          ${JSON.stringify(location.hours)},
          ${location.specialties},
          ${location.atmosphere},
          ${location.priceRange},
          ${JSON.stringify(location.contact)},
          ${location.features},
          ${JSON.stringify(location.stats)},
          ${JSON.stringify(location.socialProof)},
          ${JSON.stringify(location.socialMedia || {})},
          ${JSON.stringify(location.promotions)}
        )
        ON CONFLICT (id) DO NOTHING
      `;
    }
    console.log("✓ Locations migrated");

    // 2. Insert categories
    console.log("Migrating categories...");
    for (let i = 0; i < menuCategories.length; i++) {
      const category = menuCategories[i];
      await sql`
        INSERT INTO categories (slug, name, description, icon, display_order)
        VALUES (${category.id}, ${category.name}, ${category.description}, ${category.icon}, ${i})
        ON CONFLICT (slug) DO NOTHING
      `;
    }
    console.log("✓ Categories migrated");

    // 3. Get category ID mapping
    const { rows: categories } = await sql`SELECT id, slug FROM categories`;
    const categoryMap = new Map(categories.map(c => [c.slug, c.id]));

    // 4. Insert products and location_products
    console.log("Migrating products...");
    let productCount = 0;
    
    for (const [locationId, menuItems] of Object.entries(locationMenus)) {
      console.log(`  Processing ${locationId} menu...`);
      
      for (const item of menuItems) {
        // Insert or get product
        const { rows: productRows } = await sql`
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
            ${item.prepTime},
            ${item.calories || null},
            ${item.spiceLevel || null},
            ${item.ingredients},
            ${item.allergens},
            ${item.dietary},
            ${item.chef_special || false},
            ${item.popular || false},
            ${item.seasonal || false}
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
          RETURNING id
        `;
        
        const productId = productRows[0].id;
        const categoryId = categoryMap.get(item.category);
        
        // Insert location_product relationship
        await sql`
          INSERT INTO location_products (
            location_id, product_id, category_id, is_available
          ) VALUES (
            ${locationId},
            ${productId},
            ${categoryId},
            true
          )
          ON CONFLICT (location_id, product_id) DO NOTHING
        `;
        
        productCount++;
      }
    }
    console.log(`✓ ${productCount} products migrated`);

    // 5. Migrate menu highlights
    console.log("Migrating menu highlights...");
    for (const location of locations) {
      if (location.menuHighlights && location.menuHighlights.length > 0) {
        for (let i = 0; i < location.menuHighlights.length; i++) {
          const highlight = location.menuHighlights[i];
          
          // Find the product by legacy_id
          const { rows: productRows } = await sql`
            SELECT id FROM products WHERE legacy_id = ${highlight.id}
          `;
          
          if (productRows.length > 0) {
            await sql`
              INSERT INTO menu_highlights (
                location_id, product_id, custom_name, custom_description,
                custom_price, custom_image, display_order
              ) VALUES (
                ${location.id},
                ${productRows[0].id},
                ${highlight.name},
                ${highlight.description},
                ${highlight.price},
                ${highlight.image},
                ${i}
              )
              ON CONFLICT DO NOTHING
            `;
          }
        }
      }
    }
    console.log("✓ Menu highlights migrated");

    // 6. Create default admin user
    console.log("Creating default admin user...");
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_SECRET_KEY || "super-secret-admin-key-2024", 10);
    
    await sql`
      INSERT INTO admin_users (email, password_hash, name, role)
      VALUES ('admin@restaurant.com', ${hashedPassword}, 'Admin', 'admin')
      ON CONFLICT (email) DO NOTHING
    `;
    console.log("✓ Default admin user created (admin@restaurant.com)");

    console.log("\n✅ Migration completed successfully!");
    
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  }
}

// Run migration
migrateData().then(() => {
  console.log("Migration script finished");
  process.exit(0);
}).catch((error) => {
  console.error("Migration script failed:", error);
  process.exit(1);
});