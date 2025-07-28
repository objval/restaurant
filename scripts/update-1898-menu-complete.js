const fs = require('fs');
const path = require('path');

// Read the menu file
const menuPath = path.join(__dirname, '../lib/menu-1898.ts');
let content = fs.readFileSync(menuPath, 'utf8');

// First, remove all quotes from property names
content = content.replace(/"(\w+)":/g, '$1:');

// Beer updates based on scraped data
const beerUpdates = {
  'guinness-extra-stout-473-ml': {
    price: 4900,
    description: 'Cerveza premium Irlanda lata 473ML extra stout',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=500&h=400&fit=crop'
  },
  'corona': {
    price: 3000,
    description: 'Cerveza mexicana refrescante de 355ml',
    image: 'https://images.unsplash.com/photo-1559818454-1b46997bfe30?w=500&h=400&fit=crop'
  },
  'royal': {
    price: 3000,
    description: 'Cerveza chilena tradicional de 355ml',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop'
  },
  'heineken': {
    price: 3000,
    description: 'Cerveza holandesa premium de 355ml',
    image: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?w=500&h=400&fit=crop'
  },
  'shop-heineken': {
    price: 4500,
    description: 'Heineken de barril 500cc',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop'
  },
  'shop-kunstman-torobayo': {
    price: 6000,
    description: 'Kunstmann Torobayo de barril 500cc',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=500&h=400&fit=crop'
  },
  'chelada': {
    price: 1000,
    description: 'Cerveza con sal en el borde del vaso y 2 oz de jugo de limón',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
    spiceLevel: 1
  },
  'michelada': {
    price: 1000,
    description: 'Cerveza con sal y merkén en el borde del vaso, más 2 oz de jugo de limón',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
    spiceLevel: 2
  }
};

// Function to update beer items
Object.keys(beerUpdates).forEach(beerId => {
  const update = beerUpdates[beerId];
  
  // Find the item by id and update its properties
  const itemRegex = new RegExp(`(id:\\s*"${beerId}"[^}]+?)price:\\s*\\d+`, 's');
  content = content.replace(itemRegex, `$1price: ${update.price}`);
  
  // Update description
  const descRegex = new RegExp(`(id:\\s*"${beerId}"[^}]+?)description:\\s*"[^"]*"`, 's');
  content = content.replace(descRegex, `$1description: "${update.description}"`);
  
  // Update image
  const imgRegex = new RegExp(`(id:\\s*"${beerId}"[^}]+?)image:\\s*"[^"]*"`, 's');
  content = content.replace(imgRegex, `$1image: "${update.image}"`);
  
  // Add spiceLevel if needed
  if (update.spiceLevel) {
    const endRegex = new RegExp(`(id:\\s*"${beerId}"[^}]+?prepTime:\\s*"[^"]*")`, 's');
    content = content.replace(endRegex, `$1,\n    spiceLevel: ${update.spiceLevel}`);
  }
});

// Add popular flag to common beers
const popularBeers = ['corona', 'heineken', 'shop-heineken'];
popularBeers.forEach(beerId => {
  const endRegex = new RegExp(`(id:\\s*"${beerId}"[^}]+?prepTime:\\s*"[^"]*")`, 's');
  content = content.replace(endRegex, `$1,\n    popular: true`);
});

// Write back the updated content
fs.writeFileSync(menuPath, content);

console.log('Updated menu-1898.ts with correct prices, descriptions, and images');