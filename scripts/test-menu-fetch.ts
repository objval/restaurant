import { sql } from '@vercel/postgres';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(process.cwd(), '.env.local') });

async function testMenuFetch() {
  console.log('🔍 Testing Menu Fetch for Capriccio...\n');
  
  try {
    // Test the exact query used in getLocationMenu
    const menuQuery = await sql`
      SELECT 
        p.id,
        p.legacy_id,
        p.name,
        p.description,
        p.base_price,
        p.image_url,
        p.ingredients,
        p.allergens,
        p.dietary_tags,
        p.prep_time,
        p.calories,
        p.is_chef_special,
        p.is_popular,
        p.created_at,
        p.updated_at,
        c.slug as category,
        c.name as category_name,
        c.icon as category_icon
      FROM products p
      JOIN location_products lp ON p.id = lp.product_id
      JOIN categories c ON lp.category_id = c.id
      WHERE lp.location_id = 'capriccio' AND lp.is_available = true
      ORDER BY c.display_order, p.name
    `;
    
    console.log(`✅ Found ${menuQuery.rows.length} menu items for Capriccio`);
    
    // Group by category
    const categories = new Map();
    menuQuery.rows.forEach(item => {
      if (!categories.has(item.category)) {
        categories.set(item.category, []);
      }
      categories.get(item.category).push(item);
    });
    
    console.log('\n📋 Menu by Category:');
    for (const [category, items] of categories) {
      console.log(`\n${items[0].category_icon} ${items[0].category_name} (${items.length} items):`);
      items.forEach(item => {
        console.log(`   - ${item.name} ($${item.base_price})`);
      });
    }
    
    console.log('\n✅ Menu fetch successful! The frontend should display all these items.');
    
  } catch (error) {
    console.error('❌ Error fetching menu:', error);
  }
}

// Run the test
testMenuFetch();