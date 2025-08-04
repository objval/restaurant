import { sql } from '@vercel/postgres';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') });

async function testDatabaseConnection() {
  console.log('🔍 Testing Database Connection...\n');
  
  try {
    // Test 1: Basic connection
    console.log('1️⃣ Testing basic connection...');
    const connectionTest = await sql`SELECT current_database(), current_user, version()`;
    console.log('✅ Connected to database:', connectionTest.rows[0].current_database);
    console.log('✅ User:', connectionTest.rows[0].current_user);
    console.log('✅ PostgreSQL version:', connectionTest.rows[0].version.split(',')[0]);
    
    // Test 2: Check tables exist
    console.log('\n2️⃣ Checking tables...');
    const tables = await sql`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public' 
      ORDER BY tablename
    `;
    console.log('✅ Found', tables.rows.length, 'tables:');
    tables.rows.forEach(row => console.log('   -', row.tablename));
    
    // Test 3: Count locations
    console.log('\n3️⃣ Checking locations...');
    const locations = await sql`
      SELECT id, name, 
        (SELECT COUNT(*) FROM location_products WHERE location_id = locations.id) as product_count
      FROM locations 
      ORDER BY name
    `;
    console.log('✅ Found', locations.rows.length, 'locations:');
    locations.rows.forEach(row => 
      console.log(`   - ${row.name} (${row.id}): ${row.product_count} products`)
    );
    
    // Test 4: Check products by category for Capriccio
    console.log('\n4️⃣ Checking Capriccio menu...');
    const capriccioMenu = await sql`
      SELECT c.name as category, COUNT(p.id) as count
      FROM categories c
      LEFT JOIN location_products lp ON c.id = lp.category_id
      LEFT JOIN products p ON lp.product_id = p.id
      WHERE lp.location_id = 'capriccio'
      GROUP BY c.id, c.name
      ORDER BY c.display_order
    `;
    console.log('✅ Capriccio menu by category:');
    capriccioMenu.rows.forEach(row => 
      console.log(`   - ${row.category}: ${row.count} items`)
    );
    
    // Test 5: Sample some products
    console.log('\n5️⃣ Sample products from Capriccio...');
    const sampleProducts = await sql`
      SELECT p.name, p.base_price, c.name as category
      FROM products p
      JOIN location_products lp ON p.id = lp.product_id
      JOIN categories c ON lp.category_id = c.id
      WHERE lp.location_id = 'capriccio'
      ORDER BY RANDOM()
      LIMIT 5
    `;
    console.log('✅ Random sample of products:');
    sampleProducts.rows.forEach(row => 
      console.log(`   - ${row.name} ($${row.base_price}) [${row.category}]`)
    );
    
    // Test 6: Check if getLocationMenu function would work
    console.log('\n6️⃣ Testing getLocationMenu query...');
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
      LIMIT 3
    `;
    console.log('✅ Menu query returns', menuQuery.rows.length, 'items (limited to 3)');
    menuQuery.rows.forEach(row => 
      console.log(`   - ${row.name} [${row.category}]`)
    );
    
    console.log('\n✅ All database tests passed! The connection is working properly.');
    
  } catch (error) {
    console.error('❌ Database connection error:', error);
    console.error('\nMake sure:');
    console.error('1. Your .env.local file contains the correct DATABASE_URL');
    console.error('2. Your Neon database is active and accessible');
    console.error('3. The DATABASE_URL format is correct');
  }
}

// Run the test
testDatabaseConnection();