import { sql } from '@vercel/postgres';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(process.cwd(), '.env.local') });

// Complete list of expected items from user
const expectedItems = {
  'Cervezas Y Shop': [
    { name: 'Austral Calafate individual', price: 4500 },
    { name: 'Austral Lager individual', price: 4500 },
    { name: 'Chelada', price: 1000 },
    { name: 'Kunstmann Torobayo individual', price: 4900 },
    { name: 'Michelada', price: 1000 },
    { name: 'Heiniken S/Alcohol', price: 3200 },
    { name: 'Kuns Lager Sin Alcohol', price: 4900 },
    { name: 'Shop Heiniken', price: 4500 },
    { name: '2x Shop Heiniken', price: 6000 },
    { name: 'Kunsman Sin Filtrar 500cc', price: 6990 },
    { name: 'Kuntsman Gran Torobayo 500 cc', price: 7590 }
  ],
  'Bebestibles': [
    { name: 'Agua Natural Pellegrino Pompelmo', price: 2990 },
    { name: 'Agua Soda Pellegrino Pet Sparklin', price: 2990 },
    { name: 'Jugo Frambuesa', price: 3200 },
    { name: 'Limonada', price: 3900 },
    { name: 'Agua tónica', price: 2200 },
    { name: 'Cordillerano', price: 0 },
    { name: 'Coca Cola', price: 2200 },
    { name: 'Ginger Ale', price: 2200 },
    { name: 'Ginger Ale 220cc', price: 1500 },
    { name: 'Coca Cero', price: 2200 },
    { name: 'Agua Tonica 220', price: 1500 },
    { name: 'Agua Acqua Panna Pet Bot', price: 2990 },
    { name: 'Pink Tonic', price: 2200 },
    { name: 'Coca cola 220', price: 1500 },
    { name: 'Coca Cero 220', price: 1500 },
    { name: 'Sprite 220', price: 1500 },
    { name: 'Sprite', price: 2200 },
    { name: 'Sprite Cero', price: 2200 },
    { name: 'Red bull yellow', price: 2990 },
    { name: 'Red Bull 250 cc', price: 2990 }
  ],
  'Coctelería de Autor': [
    { name: 'Auguri', price: 6990 },
    { name: 'Capriccio', price: 6990 }
  ],
  'Cocteleria': [
    { name: 'Sour', price: 5290 },
    { name: 'Piccione', price: 6290 },
    { name: 'Limoncello Spritz', price: 5000 },
    { name: 'Old Fashioned', price: 5000 },
    { name: 'Ramazzoti Spritz', price: 5000 },
    { name: 'Negronni', price: 5000 },
    { name: 'Gin Tonic', price: 5000 },
    { name: '2x Alto del Carmen', price: 8990 }
  ],
  'Cafetería': [
    { name: 'Americano', price: 2800 },
    { name: 'Cortado', price: 3200 },
    { name: 'Expreso', price: 2400 },
    { name: 'Te Twinings', price: 2700 }
  ],
  'Platos Principales': [
    { name: 'Pollo al Sol de Naranja', price: 13990 }
  ],
  'Papas Topping': [
    { name: 'Papas con Mechada del Chef', price: 13990 },
    { name: 'Papas al Pesto Verde', price: 9990 },
    { name: 'Papas Búfalo', price: 9990 }
  ],
  'Destilados': [
    { name: 'Gin Tanqueray London Dry', price: 6990 },
    { name: 'Whiskey Ballentines Bourbon 7 años', price: 4990 },
    { name: 'Whiskey Johnnie Walker Double Black', price: 12990 },
    { name: 'Gin Tanqueray Sevilla', price: 7990 },
    { name: 'Gin Tanqueray Royal', price: 6990 },
    { name: 'Tequila Don Julio', price: 8490 },
    { name: 'Chivas Regal 12 Años', price: 7990 },
    { name: 'Whiskey Johnnie Walker Black', price: 8990 },
    { name: 'Whiskey Jack Daniel Apple', price: 7990 },
    { name: 'Gin Beeafeater', price: 6990 },
    { name: 'Jaggermeister', price: 6990 },
    { name: 'Drambuie', price: 6990 },
    { name: 'Ron Havana Añejo 7 Años', price: 8990 },
    { name: 'Ron Havana Añejo Especial', price: 5990 },
    { name: 'Whisky Johnnie Walker Red', price: 6990 },
    { name: 'Pisco Alto del Carmen', price: 5990 },
    { name: 'Pisco Mistral Nobel', price: 6990 },
    { name: 'Gin Hendrik´s', price: 7990 },
    { name: 'Gin Beefeater Pink', price: 7490 },
    { name: 'Fernet Branca', price: 5990 },
    { name: 'Jhonnie Walker Blonde', price: 7990 },
    { name: 'Vodka Smirnoff', price: 5990 },
    { name: 'Pisco Horcón Quemado', price: 6990 },
    { name: 'Mistral 35', price: 5990 }
  ],
  'Vinos y Espumantes': [
    { name: 'Chardon Rose 187 cc', price: 5500 },
    { name: 'Chardon brut 750 cc', price: 16990 },
    { name: 'Viu Manent Noble Semillon Chardoney', price: 9990 }
  ],
  'Bajativos': [
    { name: 'Amaretto', price: 2590 }
  ]
};

async function verifyCapriccioMenu() {
  console.log('🔍 Verifying Capriccio Menu Completeness...\n');
  
  try {
    // Get all products from database
    const dbProducts = await sql`
      SELECT 
        p.name,
        p.base_price,
        c.name as category_name
      FROM products p
      JOIN location_products lp ON p.id = lp.product_id
      JOIN categories c ON lp.category_id = c.id
      WHERE lp.location_id = 'capriccio'
      ORDER BY c.display_order, p.name
    `;
    
    // Create a map of DB products for easy lookup
    const dbMap = new Map();
    dbProducts.rows.forEach(item => {
      const key = item.name.toLowerCase().trim();
      dbMap.set(key, {
        name: item.name,
        price: parseFloat(item.base_price),
        category: item.category_name
      });
    });
    
    console.log(`📊 Database has ${dbProducts.rows.length} products\n`);
    
    // Check each category
    let totalExpected = 0;
    let totalFound = 0;
    let totalMissing = 0;
    const missingItems = [];
    
    for (const [category, items] of Object.entries(expectedItems)) {
      console.log(`\n📂 ${category}:`);
      let categoryFound = 0;
      let categoryMissing = 0;
      
      for (const item of items) {
        totalExpected++;
        const searchKey = item.name.toLowerCase().trim();
        const dbItem = dbMap.get(searchKey);
        
        if (dbItem) {
          categoryFound++;
          totalFound++;
          // Check price match
          if (Math.abs(dbItem.price - item.price) > 10) {
            console.log(`   ⚠️  ${item.name} - Price mismatch: DB has $${dbItem.price}, expected $${item.price}`);
          }
        } else {
          categoryMissing++;
          totalMissing++;
          missingItems.push({ category, ...item });
          console.log(`   ❌ MISSING: ${item.name} ($${item.price})`);
        }
      }
      
      console.log(`   ✅ Found: ${categoryFound}/${items.length}`);
      if (categoryMissing > 0) {
        console.log(`   ❌ Missing: ${categoryMissing}`);
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY:');
    console.log(`   Total Expected: ${totalExpected}`);
    console.log(`   Total Found: ${totalFound}`);
    console.log(`   Total Missing: ${totalMissing}`);
    console.log(`   Completion: ${((totalFound/totalExpected)*100).toFixed(1)}%`);
    
    if (missingItems.length > 0) {
      console.log('\n❌ MISSING ITEMS BY CATEGORY:');
      const grouped = missingItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {});
      
      for (const [category, items] of Object.entries(grouped)) {
        console.log(`\n${category} (${items.length} items):`);
        items.forEach(item => {
          console.log(`   - ${item.name}: $${item.price}`);
        });
      }
    }
    
    // Also check for items in DB that aren't in the expected list
    console.log('\n🔍 Checking for extra items in database...');
    const extraItems = [];
    
    dbProducts.rows.forEach(dbItem => {
      let found = false;
      for (const items of Object.values(expectedItems)) {
        if (items.some(item => item.name.toLowerCase().trim() === dbItem.name.toLowerCase().trim())) {
          found = true;
          break;
        }
      }
      if (!found) {
        extraItems.push(dbItem);
      }
    });
    
    if (extraItems.length > 0) {
      console.log(`\n⚠️  Found ${extraItems.length} items in DB not in the expected list:`);
      extraItems.forEach(item => {
        console.log(`   - ${item.name} (${item.category_name})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run verification
verifyCapriccioMenu();