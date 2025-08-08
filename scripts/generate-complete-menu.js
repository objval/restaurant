const fs = require('fs');
const path = require('path');

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/data/1898.json'), 'utf8'));

// Category mapping
const categoryMap = {
  'CERVECERÍA': 'beers',
  'COCTELERÍA': 'cocktails',
  'BAR': 'spirits',
  'Gin': 'spirits',
  'Piscos': 'spirits',
  'Ron': 'spirits',
  'Vodka': 'spirits',
  "Whisky's": 'spirits',
  'JUGOS Y REFRESCOS': 'beverages',
  'CAFETERÍA': 'coffee',
  'PLATOS': 'mains',
  'PIZZAS': 'pizzas',
  'SANDWICH': 'sandwiches',
  'PARA PICAR': 'appetizers',
  'ENSALADAS': 'salads',
  'HELADOS': 'desserts',
  'COMPLETOS': 'hotdogs',
  'PASTELERÍA': 'pastries'
};

// Helper function to generate slug
function generateSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to parse price
function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[^0-9]/g, ''));
}

// Helper function to generate metadata based on item type
function generateMetadata(item, category) {
  const metadata = {
    ingredients: [],
    allergens: [],
    dietary: [],
    calories: 0,
    prepTime: '',
    image: ''
  };

  // Set image based on category
  const imageMap = {
    'beers': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
    'cocktails': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
    'spirits': 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
    'beverages': 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
    'coffee': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop',
    'mains': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    'pizzas': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
    'sandwiches': 'https://images.unsplash.com/photo-1521390188846-e2a8a3569fb0?w=500&h=400&fit=crop',
    'appetizers': 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=500&h=400&fit=crop',
    'salads': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    'desserts': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop',
    'hotdogs': 'https://images.unsplash.com/photo-1612392062126-3a66afd40730?w=500&h=400&fit=crop',
    'pastries': 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=500&h=400&fit=crop'
  };
  metadata.image = imageMap[category] || imageMap['beverages'];

  // Generate metadata based on category and name
  const nameLower = item.name.toLowerCase();
  
  // Prep times
  if (category === 'beers' || category === 'spirits') {
    metadata.prepTime = '1-2 min';
  } else if (category === 'cocktails') {
    metadata.prepTime = '3-5 min';
  } else if (category === 'beverages' || category === 'coffee') {
    metadata.prepTime = '2-3 min';
  } else if (category === 'mains') {
    metadata.prepTime = '15-20 min';
  } else if (category === 'pizzas') {
    metadata.prepTime = '12-18 min';
  } else if (category === 'sandwiches' || category === 'hotdogs') {
    metadata.prepTime = '8-10 min';
  } else if (category === 'appetizers') {
    metadata.prepTime = '10-15 min';
  } else if (category === 'salads') {
    metadata.prepTime = '5-8 min';
  } else if (category === 'desserts' || category === 'pastries') {
    metadata.prepTime = '3-5 min';
  }

  // Calories (rough estimates)
  if (category === 'beers') {
    metadata.calories = 140 + Math.floor(Math.random() * 40);
  } else if (category === 'cocktails') {
    metadata.calories = 180 + Math.floor(Math.random() * 80);
  } else if (category === 'spirits') {
    metadata.calories = 100 + Math.floor(Math.random() * 50);
  } else if (category === 'beverages') {
    if (nameLower.includes('zero') || nameLower.includes('light')) {
      metadata.calories = 5 + Math.floor(Math.random() * 10);
    } else if (nameLower.includes('jugo') || nameLower.includes('natural')) {
      metadata.calories = 120 + Math.floor(Math.random() * 40);
    } else {
      metadata.calories = 100 + Math.floor(Math.random() * 50);
    }
  } else if (category === 'coffee') {
    metadata.calories = 50 + Math.floor(Math.random() * 150);
  } else if (category === 'mains') {
    metadata.calories = 450 + Math.floor(Math.random() * 350);
  } else if (category === 'pizzas') {
    metadata.calories = 800 + Math.floor(Math.random() * 400);
  } else if (category === 'sandwiches') {
    metadata.calories = 400 + Math.floor(Math.random() * 300);
  } else if (category === 'appetizers') {
    metadata.calories = 350 + Math.floor(Math.random() * 250);
  } else if (category === 'salads') {
    metadata.calories = 250 + Math.floor(Math.random() * 150);
  } else if (category === 'desserts' || category === 'pastries') {
    metadata.calories = 300 + Math.floor(Math.random() * 200);
  } else if (category === 'hotdogs') {
    metadata.calories = 350 + Math.floor(Math.random() * 150);
  }

  // Basic ingredients and allergens based on item
  if (category === 'beers') {
    metadata.ingredients = ['Malta de cebada', 'Lúpulo', 'Levadura', 'Agua'];
    metadata.allergens = ['Gluten'];
    metadata.dietary = ['vegan'];
  } else if (category === 'cocktails' || category === 'spirits') {
    metadata.dietary = ['gluten-free'];
    if (nameLower.includes('ruso') || nameLower.includes('crema')) {
      metadata.allergens = ['Lácteos'];
      metadata.dietary = ['vegetarian', 'gluten-free'];
    } else if (nameLower.includes('sour') && !nameLower.includes('amaretto')) {
      metadata.allergens = ['Huevos'];
    } else {
      metadata.dietary.push('vegan');
    }
  } else if (category === 'beverages') {
    metadata.dietary = ['vegan', 'gluten-free'];
    if (nameLower.includes('milkshake')) {
      metadata.allergens = ['Lácteos'];
      metadata.dietary = ['vegetarian', 'gluten-free'];
    }
  } else if (category === 'coffee') {
    metadata.dietary = ['gluten-free'];
    if (nameLower.includes('capuccino') || nameLower.includes('chocolate') || nameLower.includes('mokaccino')) {
      metadata.allergens = ['Lácteos'];
      metadata.dietary.push('vegetarian');
    } else {
      metadata.dietary.push('vegan');
    }
  } else if (category === 'mains') {
    if (nameLower.includes('salmón') || nameLower.includes('merluza')) {
      metadata.allergens = ['Pescado'];
      metadata.dietary = ['gluten-free'];
    } else if (nameLower.includes('pollo')) {
      metadata.dietary = ['gluten-free'];
    } else if (nameLower.includes('lomo') || nameLower.includes('costillar') || nameLower.includes('carne')) {
      metadata.dietary = ['gluten-free'];
    }
  } else if (category === 'pizzas') {
    metadata.allergens = ['Gluten', 'Lácteos'];
    metadata.dietary = ['vegetarian'];
  } else if (category === 'sandwiches' || category === 'hotdogs') {
    metadata.allergens = ['Gluten'];
    if (nameLower.includes('queso') || nameLower.includes('cheese')) {
      metadata.allergens.push('Lácteos');
    }
  } else if (category === 'appetizers') {
    if (nameLower.includes('empanada')) {
      metadata.allergens = ['Gluten'];
    }
    if (nameLower.includes('queso') || nameLower.includes('cheese')) {
      metadata.allergens.push('Lácteos');
    }
    if (nameLower.includes('ceviche')) {
      metadata.allergens = ['Pescado', 'Mariscos'];
    }
  } else if (category === 'salads') {
    metadata.dietary = ['gluten-free'];
    if (nameLower.includes('cesar')) {
      metadata.allergens = ['Lácteos', 'Huevos'];
      if (nameLower.includes('camarón')) {
        metadata.allergens.push('Mariscos');
      }
    } else {
      metadata.dietary.push('vegan');
    }
  } else if (category === 'desserts' || category === 'pastries') {
    metadata.allergens = ['Lácteos'];
    metadata.dietary = ['vegetarian'];
    if (nameLower.includes('brownie') || nameLower.includes('crepes')) {
      metadata.allergens.push('Gluten', 'Huevos');
    }
    if (nameLower.includes('nueces')) {
      metadata.allergens.push('Frutos secos');
    }
  }

  return metadata;
}

// Process all items
const allItems = [];
jsonData[0].categories.forEach(category => {
  const mappedCategory = categoryMap[category.category_name] || 'beverages';
  
  category.items.forEach(item => {
    const metadata = generateMetadata(item, mappedCategory);
    const price = parsePrice(item.price);
    
    const processedItem = {
      id: generateSlug(item.name),
      name: item.name,
      description: item.description || `${item.name} - Especialidad de la casa`,
      price: price,
      category: mappedCategory,
      image: metadata.image,
      ingredients: metadata.ingredients.length > 0 ? metadata.ingredients : ['Ingredientes frescos y de calidad'],
      allergens: metadata.allergens,
      dietary: metadata.dietary,
      calories: metadata.calories,
      prepTime: metadata.prepTime
    };
    
    // Mark popular items
    if (item.name.toLowerCase().includes('2x') || item.name.toLowerCase().includes('promo')) {
      processedItem.popular = true;
    }
    
    allItems.push(processedItem);
  });
});

// Generate TypeScript file
const tsContent = `import { MenuItem } from "./menu-data"

// Menu completo para Location 2: 1898
export const menu1898Complete: MenuItem[] = ${JSON.stringify(allItems, null, 2)}`;

// Write to file
fs.writeFileSync(path.join(__dirname, '../lib/menu-1898-complete.ts'), tsContent);

console.log(`Generated complete menu with ${allItems.length} items`);
console.log(`Categories processed: ${Object.keys(categoryMap).join(', ')}`);