const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Initialize Supabase client
const supabaseUrl = 'https://tdfmzckdxvueziozxfvt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZm16Y2tkeHZ1ZXppb3p4ZnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNzA5MDIsImV4cCI6MjA1MTg0NjkwMn0.Eq9eyL_K4UkJJvbKWZpHkx6F80sqk2rIwmGqDVhFmxA';
const supabase = createClient(supabaseUrl, supabaseKey);

// Category mapping
const categoryNameMap = {
  'beers': 'Cervecería',
  'cocktails': 'Coctelería', 
  'wines': 'Bar',
  'spirits': 'Licores',
  'beverages': 'Jugos y Refrescos',
  'coffee': 'Cafetería',
  'mains': 'Platos',
  'pizzas': 'Pizzas',
  'sandwiches': 'Sandwich',
  'appetizers': 'Para Picar',
  'salads': 'Ensaladas',
  'desserts': 'Helados',
  'hotdogs': 'Completos',
  'pastries': 'Pastelería',
  'specials': 'Promociones'
};

async function migrate() {
  try {
    // Read the TS file
    const tsContent = fs.readFileSync(path.join(__dirname, '../lib/menu-1898.ts'), 'utf8');
    
    // Extract the array content
    const arrayMatch = tsContent.match(/export const menu1898: MenuItem\[\] = (\[[\s\S]*\])/);
    if (!arrayMatch) {
      throw new Error('Could not find menu array in TS file');
    }
    
    // Parse the menu items
    const menuItemsStr = arrayMatch[1]
      .replace(/popular:\s*true/g, '"popular": true')
      .replace(/chef_special:\s*true/g, '"chef_special": true');
    
    const menuItems = eval(menuItemsStr);
    
    console.log(`Found ${menuItems.length} items to migrate`);
    
    // Get or create categories
    const categoryMap = {};
    for (const [key, name] of Object.entries(categoryNameMap)) {
      const { data: existingCategory } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', key)
        .single();
      
      if (existingCategory) {
        categoryMap[key] = existingCategory.id;
      } else {
        const { data: newCategory, error } = await supabase
          .from('categories')
          .insert({
            name: name,
            slug: key,
            active: true,
            display_order: Object.keys(categoryMap).length + 1
          })
          .select('id')
          .single();
        
        if (error) {
          console.error(`Error creating category ${name}:`, error);
        } else {
          categoryMap[key] = newCategory.id;
        }
      }
    }
    
    console.log('Categories ready:', Object.keys(categoryMap).length);
    
    // Prepare items for insertion
    const itemsToInsert = menuItems.map(item => ({
      slug: item.id,
      name: item.name,
      description: item.description || '',
      price: item.price,
      category_id: categoryMap[item.category] || categoryMap['beverages'],
      active: true,
      stock_status: 'in_stock',
      image_url: item.image || null,
      preparation_time: item.prepTime || '5-10 min',
      calories: item.calories || null,
      spicy_level: 0,
      is_vegetarian: item.dietary?.includes('vegetarian') || false,
      is_vegan: item.dietary?.includes('vegan') || false,
      is_gluten_free: item.dietary?.includes('gluten-free') || false,
      featured: item.popular || false,
      chef_special: item.chef_special || false
    }));
    
    // Insert in batches of 50
    const batchSize = 50;
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < itemsToInsert.length; i += batchSize) {
      const batch = itemsToInsert.slice(i, i + batchSize);
      
      const { data, error } = await supabase
        .from('menu_1898')
        .insert(batch);
      
      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
        errorCount += batch.length;
      } else {
        successCount += batch.length;
        console.log(`✓ Inserted batch ${i / batchSize + 1} (${batch.length} items)`);
      }
    }
    
    console.log('\n=== MIGRATION COMPLETE ===');
    console.log(`✓ Successfully inserted: ${successCount} items`);
    console.log(`✗ Failed: ${errorCount} items`);
    
    // Verify count
    const { count } = await supabase
      .from('menu_1898')
      .select('*', { count: 'exact', head: true });
    
    console.log(`\nTotal items in database: ${count}`);
    
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();