const fs = require('fs');
const path = require('path');

// Read the menu file
const menuPath = path.join(__dirname, '../lib/menu-1898.ts');
let menuContent = fs.readFileSync(menuPath, 'utf8');

// Helper function to determine ingredients based on item name and description
function getIngredients(name, description, category) {
  const ingredients = [];
  const nameLower = name.toLowerCase();
  const descLower = description.toLowerCase();
  
  // Common base ingredients by category
  if (category === 'pizzas') {
    ingredients.push('Masa de pizza', 'Salsa de tomate', 'Queso mozzarella');
  } else if (category === 'sandwiches' || nameLower.includes('burger') || nameLower.includes('churrasco')) {
    ingredients.push('Pan');
  }
  
  // Specific ingredients based on name/description
  if (nameLower.includes('pollo') || descLower.includes('pollo')) ingredients.push('Pollo');
  if (nameLower.includes('carne') || descLower.includes('carne') || descLower.includes('vacuno')) ingredients.push('Carne de res');
  if (nameLower.includes('cerdo') || descLower.includes('cerdo')) ingredients.push('Cerdo');
  if (nameLower.includes('pescado') || descLower.includes('pescado') || nameLower.includes('merluza')) ingredients.push('Pescado');
  if (nameLower.includes('camarón') || nameLower.includes('camaron') || descLower.includes('camarón')) ingredients.push('Camarones');
  if (nameLower.includes('salmón') || nameLower.includes('salmon')) ingredients.push('Salmón');
  
  if (descLower.includes('palta')) ingredients.push('Palta');
  if (descLower.includes('tomate')) ingredients.push('Tomate');
  if (descLower.includes('lechuga')) ingredients.push('Lechuga');
  if (descLower.includes('cebolla')) ingredients.push('Cebolla');
  if (descLower.includes('champiñones') || descLower.includes('champinones')) ingredients.push('Champiñones');
  if (descLower.includes('queso')) ingredients.push('Queso');
  if (descLower.includes('tocino')) ingredients.push('Tocino');
  if (descLower.includes('huevo')) ingredients.push('Huevo');
  if (descLower.includes('papas fritas')) ingredients.push('Papas fritas');
  
  // For items with generic ingredients, add more specific ones
  if (ingredients.length === 0 || (ingredients.length === 1 && category === 'pizzas')) {
    if (category === 'salads') {
      ingredients.push('Mix de lechugas', 'Vegetales frescos', 'Aderezo');
    } else if (category === 'mains') {
      ingredients.push('Proteína principal', 'Guarnición');
    } else if (category === 'desserts') {
      ingredients.push('Ingredientes del postre');
    }
  }
  
  return ingredients;
}

// Helper function to determine allergens
function getAllergens(ingredients, name, description) {
  const allergens = [];
  const allText = (name + ' ' + description + ' ' + ingredients.join(' ')).toLowerCase();
  
  if (allText.includes('gluten') || allText.includes('pan') || allText.includes('masa') || allText.includes('harina')) {
    allergens.push('Gluten');
  }
  if (allText.includes('leche') || allText.includes('queso') || allText.includes('crema') || allText.includes('lácteo')) {
    allergens.push('Lácteos');
  }
  if (allText.includes('huevo')) {
    allergens.push('Huevos');
  }
  if (allText.includes('maní') || allText.includes('almendra') || allText.includes('nuez')) {
    allergens.push('Frutos secos');
  }
  if (allText.includes('camarón') || allText.includes('camaron') || allText.includes('langostino')) {
    allergens.push('Mariscos');
  }
  if (allText.includes('pescado') || allText.includes('merluza') || allText.includes('salmón') || allText.includes('salmon')) {
    allergens.push('Pescado');
  }
  
  return allergens;
}

// Helper function to determine dietary restrictions
function getDietary(ingredients, allergens, name, description) {
  const dietary = [];
  const allText = (name + ' ' + description + ' ' + ingredients.join(' ')).toLowerCase();
  
  // Check if gluten-free
  if (!allergens.includes('Gluten')) {
    dietary.push('gluten-free');
  }
  
  // Check if vegetarian (no meat, fish, or seafood)
  const hasMeat = allText.includes('pollo') || allText.includes('carne') || allText.includes('cerdo') || 
                  allText.includes('vacuno') || allText.includes('pescado') || allText.includes('merluza') ||
                  allText.includes('salmón') || allText.includes('salmon') || allText.includes('camarón') ||
                  allText.includes('camaron') || allText.includes('tocino') || allText.includes('jamón');
  
  const hasDairy = allergens.includes('Lácteos');
  const hasEggs = allergens.includes('Huevos');
  
  if (!hasMeat && !hasDairy && !hasEggs) {
    dietary.push('vegan');
  } else if (!hasMeat) {
    dietary.push('vegetarian');
  }
  
  return dietary;
}

// Parse the menu items
const menuMatch = menuContent.match(/export const menu1898: MenuItem\[\] = \[([\s\S]*?)\];/);
if (!menuMatch) {
  console.error('Could not find menu array');
  process.exit(1);
}

// Split into individual items
const itemsText = menuMatch[1];
const items = [];
let currentItem = '';
let braceCount = 0;

for (let i = 0; i < itemsText.length; i++) {
  const char = itemsText[i];
  currentItem += char;
  
  if (char === '{') braceCount++;
  if (char === '}') {
    braceCount--;
    if (braceCount === 0 && currentItem.trim()) {
      items.push(currentItem.trim());
      currentItem = '';
    }
  }
}

// Process each item
const processedItems = items.map(itemText => {
  try {
    // Extract item properties
    const idMatch = itemText.match(/"id":\s*"([^"]+)"/);
    const nameMatch = itemText.match(/"name":\s*"([^"]+)"/);
    const descMatch = itemText.match(/"description":\s*"([^"]+)"/);
    const categoryMatch = itemText.match(/"category":\s*"([^"]+)"/);
    
    if (!nameMatch || !categoryMatch) return itemText;
    
    const name = nameMatch[1];
    const description = descMatch ? descMatch[1] : '';
    const category = categoryMatch[1];
    
    // Check if ingredients are generic
    if (itemText.includes('"Ingredientes frescos"')) {
      const ingredients = getIngredients(name, description, category);
      const allergens = getAllergens(ingredients, name, description);
      const dietary = getDietary(ingredients, allergens, name, description);
      
      // Replace ingredients
      itemText = itemText.replace(
        /"ingredients":\s*\[\s*"Ingredientes frescos"\s*\]/,
        `"ingredients": [\\n      "${ingredients.join('",\\n      "')}"\\n    ]`
      );
      
      // Replace allergens
      itemText = itemText.replace(
        /"allergens":\s*\[[^\]]*\]/,
        `"allergens": [${allergens.length ? `\\n      "${allergens.join('",\\n      "')}"\\n    ` : ''}]`
      );
      
      // Replace dietary
      itemText = itemText.replace(
        /"dietary":\s*\[[^\]]*\]/,
        `"dietary": [${dietary.length ? `\\n      "${dietary.join('",\\n      "')}"\\n    ` : ''}]`
      );
    }
    
    return itemText;
  } catch (e) {
    console.error('Error processing item:', e);
    return itemText;
  }
});

// Reconstruct the file
const newMenuContent = menuContent.replace(
  /export const menu1898: MenuItem\[\] = \[([\s\S]*?)\];/,
  `export const menu1898: MenuItem[] = [\\n${processedItems.join(',\\n')}\\n];`
);

// Write back
fs.writeFileSync(menuPath, newMenuContent, 'utf8');
console.log('Menu updated successfully!');