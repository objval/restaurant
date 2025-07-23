const fs = require('fs');
const path = require('path');

// Read the scraped data
const scrapedData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'documents_1(3).json'), 'utf8'));

// Category mapping
const categoryMapping = {
  'CERVECERÍA': 'beers',
  'COCTELERÍA': 'cocktails',
  'BAR': 'wines',
  'JUGOS Y REFRESCOS': 'beverages',
  'CAFETERÍA': 'coffee',
  'PLATOS': 'mains',
  'PIZZAS': 'pizzas',
  'SANDWICH': 'sandwiches',
  'PARA PICAR': 'sharing',
  'ENSALADAS': 'salads',
  'HELADOS': 'desserts',
  'COMPLETOS': 'sandwiches',
  'PASTELERÍA': 'desserts',
  'Acompañamientos': 'sides'
};

// Helper function to generate ID from name
function generateId(name) {
  return name.toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper function to parse price
function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[$.,]/g, '')) || 0;
}

// Helper function to add missing descriptions
function getDescription(item, category) {
  if (item.description && item.description.trim()) {
    return item.description;
  }
  
  // Add generic descriptions based on category
  const descriptions = {
    'beers': 'Cerveza refrescante',
    'cocktails': 'Cóctel artesanal',
    'wines': 'Bebida premium',
    'beverages': 'Bebida refrescante',
    'coffee': 'Café de especialidad',
    'mains': 'Plato principal',
    'pizzas': 'Pizza artesanal',
    'sandwiches': 'Sándwich gourmet',
    'sharing': 'Para compartir',
    'salads': 'Ensalada fresca',
    'desserts': 'Postre delicioso'
  };
  
  return descriptions[category] || 'Delicioso plato de nuestra cocina';
}

// Process all items
const menuItems = [];
const promoItems = []; // Items that should be duplicated in promo category

scrapedData[0].categories.forEach(category => {
  const mappedCategory = categoryMapping[category.category];
  
  if (!mappedCategory) {
    console.warn(`Unknown category: ${category.category}`);
    return;
  }
  
  category.items.forEach(item => {
    const id = generateId(item.name);
    const price = parsePrice(item.price);
    
    // Skip items with price 0
    if (price === 0) return;
    
    const menuItem = {
      id,
      name: item.name,
      description: getDescription(item, mappedCategory),
      price,
      category: mappedCategory,
      image: getImageUrl(item.name, mappedCategory),
      ingredients: getIngredients(item, mappedCategory),
      allergens: getAllergens(item, mappedCategory),
      dietary: getDietary(item),
      calories: getCalories(item, mappedCategory),
      prepTime: getPrepTime(mappedCategory),
    };
    
    // Add special flags
    if (item.name.toLowerCase().includes('chef') || 
        item.name.toLowerCase().includes('especial') ||
        item.name.toLowerCase().includes('1898')) {
      menuItem.chef_special = true;
    }
    
    if (item.name.toLowerCase().includes('2x') || 
        item.name.toLowerCase().includes('promo')) {
      menuItem.popular = true;
      
      // If it's a 2x promo, also add to promo category
      if (item.name.toLowerCase().includes('2x')) {
        promoItems.push({
          ...menuItem,
          id: `promo-${menuItem.id}`,
          category: 'specials'
        });
      }
    }
    
    // Add spice level for spicy items
    if (item.name.toLowerCase().includes('picante') || 
        item.name.toLowerCase().includes('merquén') ||
        item.name.toLowerCase().includes('pil pil')) {
      menuItem.spiceLevel = 2;
    }
    
    menuItems.push(menuItem);
  });
});

// Add promo items to the menu
menuItems.push(...promoItems);

// Helper functions for attributes
function getImageUrl(name, category) {
  const imageMap = {
    'beers': 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
    'cocktails': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
    'wines': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
    'beverages': 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop',
    'coffee': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop',
    'mains': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop',
    'pizzas': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
    'sandwiches': 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=500&h=400&fit=crop',
    'sharing': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&h=400&fit=crop',
    'salads': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    'desserts': 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500&h=400&fit=crop',
    'specials': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop'
  };
  
  return imageMap[category] || imageMap['mains'];
}

function getIngredients(item, category) {
  // Add basic ingredients based on name and category
  const name = item.name.toLowerCase();
  
  if (category === 'beers') {
    return ['Malta', 'Lúpulo', 'Levadura', 'Agua'];
  }
  
  if (category === 'coffee') {
    if (name.includes('capuccino')) return ['Café espresso', 'Leche espumada'];
    if (name.includes('americano')) return ['Café espresso', 'Agua caliente'];
    if (name.includes('espresso')) return ['Café espresso'];
    if (name.includes('chocolate')) return ['Chocolate', 'Leche'];
    return ['Café'];
  }
  
  // Extract ingredients from name for cocktails
  if (category === 'cocktails') {
    const ingredients = [];
    if (name.includes('pisco')) ingredients.push('Pisco');
    if (name.includes('mojito')) ingredients.push('Ron', 'Limón', 'Menta');
    if (name.includes('margarita')) ingredients.push('Tequila', 'Limón', 'Triple sec');
    if (name.includes('caipirinha')) ingredients.push('Cachaça', 'Limón');
    if (ingredients.length === 0) ingredients.push('Licor premium');
    return ingredients;
  }
  
  return ['Ingredientes frescos'];
}

function getAllergens(item, category) {
  const name = item.name.toLowerCase();
  const allergens = [];
  
  if (category === 'beers') allergens.push('Gluten');
  if (name.includes('leche') || name.includes('queso') || name.includes('crema')) allergens.push('Lácteos');
  if (name.includes('huevo')) allergens.push('Huevo');
  if (name.includes('camarón') || name.includes('marisco')) allergens.push('Mariscos');
  if (name.includes('salmón') || name.includes('merluza')) allergens.push('Pescado');
  if (name.includes('pan') || name.includes('pizza')) allergens.push('Gluten');
  if (name.includes('nueces') || name.includes('amaretto')) allergens.push('Frutos secos');
  
  return allergens;
}

function getDietary(item) {
  const name = item.name.toLowerCase();
  const dietary = [];
  
  if (!name.includes('carne') && !name.includes('pollo') && !name.includes('cerdo') && 
      !name.includes('res') && !name.includes('tocino') && !name.includes('jamón') &&
      !name.includes('salchicha') && !name.includes('camarón') && !name.includes('pescado')) {
    if (!name.includes('leche') && !name.includes('queso') && !name.includes('crema') && !name.includes('huevo')) {
      dietary.push('vegan');
    } else {
      dietary.push('vegetarian');
    }
  }
  
  if (!name.includes('pan') && !name.includes('pizza') && !name.includes('pasta')) {
    dietary.push('gluten-free');
  }
  
  return dietary;
}

function getCalories(item, category) {
  const calorieMap = {
    'beers': 150,
    'cocktails': 220,
    'wines': 125,
    'beverages': 120,
    'coffee': 100,
    'mains': 650,
    'pizzas': 750,
    'sandwiches': 550,
    'sharing': 850,
    'salads': 350,
    'desserts': 400,
    'specials': 250
  };
  
  return Math.floor(calorieMap[category] * (0.8 + Math.random() * 0.4));
}

function getPrepTime(category) {
  const prepTimeMap = {
    'beers': '1-2 min',
    'cocktails': '3-5 min',
    'wines': '1 min',
    'beverages': '2-3 min',
    'coffee': '3-4 min',
    'mains': '20-25 min',
    'pizzas': '15-20 min',
    'sandwiches': '10-12 min',
    'sharing': '15-20 min',
    'salads': '8-10 min',
    'desserts': '5-8 min',
    'specials': '5-8 min'
  };
  
  return prepTimeMap[category] || '10-15 min';
}

// Generate TypeScript file content
const tsContent = `import { MenuItem } from "./menu-data"

// Menu for Location 2: 1898
export const menuLocation2: MenuItem[] = ${JSON.stringify(menuItems, null, 2)}`;

// Write the file
fs.writeFileSync(path.join(__dirname, '..', 'lib', 'menu-location2.ts'), tsContent);

console.log(`Created menu-location2.ts with ${menuItems.length} items`);
console.log(`Categories: ${[...new Set(menuItems.map(item => item.category))].join(', ')}`);