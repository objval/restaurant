const fs = require('fs');
const path = require('path');

// Read the JSON data
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/data/documents_1(3).json'), 'utf8'));

// Category mapping from JSON to TypeScript
const categoryMapping = {
  'CERVECERÍA': 'beers',
  'COCTELERÍA': 'cocktails',
  'BAR': 'spirits',
  'JUGOS Y REFRESCOS': 'beverages',
  'CAFETERÍA': 'coffee',
  'PLATOS': 'mains',
  'PIZZAS': 'pizzas',
  'SANDWICH': 'sandwiches',
  'PARA PICAR': 'appetizers',
  'ENSALADAS': 'salads',
  'HELADOS': 'desserts',
  'COMPLETOS': 'hot-dogs',
  'Acompañamientos': 'sides',
  'PASTELERÍA': 'desserts'
};

// Helper function to create URL-friendly ID
function createId(name) {
  return name
    .toLowerCase()
    .replace(/[àáäâ]/g, 'a')
    .replace(/[èéëê]/g, 'e')
    .replace(/[ìíïî]/g, 'i')
    .replace(/[òóöô]/g, 'o')
    .replace(/[ùúüû]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper function to extract price number
function extractPrice(priceStr) {
  const cleaned = priceStr.replace(/[^0-9]/g, '');
  return parseInt(cleaned) || 0;
}

// Generate placeholder image based on category
function getPlaceholderImage(category, name) {
  const imageMap = {
    'beers': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
    'cocktails': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
    'spirits': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&h=400&fit=crop',
    'beverages': 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&h=400&fit=crop',
    'coffee': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop',
    'mains': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop',
    'pizzas': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
    'sandwiches': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=400&fit=crop',
    'appetizers': 'https://images.unsplash.com/photo-1601924381523-019e7d8a7c10?w=500&h=400&fit=crop',
    'salads': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    'desserts': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop',
    'hot-dogs': 'https://images.unsplash.com/photo-1612392062798-4117917fcc50?w=500&h=400&fit=crop',
    'sides': 'https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?w=500&h=400&fit=crop'
  };
  return imageMap[category] || imageMap['mains'];
}

// Convert JSON to TypeScript format
const menuItems = [];

jsonData[0].categories.forEach(category => {
  const tsCategory = categoryMapping[category.category] || 'mains';
  
  category.items.forEach(item => {
    const menuItem = {
      id: createId(item.name),
      name: item.name,
      description: item.description || '',
      price: extractPrice(item.price),
      category: tsCategory,
      image: getPlaceholderImage(tsCategory, item.name),
      popular: false, // Will be set for popular items
      spicy: false, // Can be determined from name/description
      vegetarian: false, // Can be determined from ingredients
      featured: false
    };
    
    // Add default ingredients based on category
    if (tsCategory === 'beers') {
      menuItem.ingredients = ['Malta', 'Lúpulo', 'Levadura', 'Agua'];
      menuItem.allergens = ['Gluten'];
      menuItem.dietary = ['vegan'];
      menuItem.calories = 150;
      menuItem.prepTime = '1-2 min';
    } else if (tsCategory === 'cocktails') {
      menuItem.prepTime = '3-5 min';
    } else if (tsCategory === 'coffee') {
      menuItem.prepTime = '2-3 min';
    } else if (tsCategory === 'mains' || tsCategory === 'pizzas' || tsCategory === 'sandwiches') {
      menuItem.prepTime = '15-20 min';
    } else if (tsCategory === 'appetizers') {
      menuItem.prepTime = '10-15 min';
    }
    
    menuItems.push(menuItem);
  });
});

// Generate TypeScript file content
const tsContent = `import { MenuItem } from "./menu-data"

// Menu for Location 2: 1898
export const menu1898: MenuItem[] = ${JSON.stringify(menuItems, null, 2)}`;

// Write to file
fs.writeFileSync(path.join(__dirname, '../lib/menu-1898-updated.ts'), tsContent);

console.log(`Created menu with ${menuItems.length} items`);
console.log('File saved as: lib/menu-1898-updated.ts');

// Summary by category
const summary = {};
menuItems.forEach(item => {
  summary[item.category] = (summary[item.category] || 0) + 1;
});
console.log('\nItems by category:');
Object.entries(summary).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count}`);
});