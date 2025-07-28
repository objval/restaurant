const fs = require('fs');
const path = require('path');

// Read the original menu file again
const menuPath = path.join(__dirname, '../lib/menu-1898.ts');
const backupPath = path.join(__dirname, '../lib/menu-1898-backup.ts');

// Read backup if it exists, otherwise read current
let originalContent;
if (fs.existsSync(backupPath)) {
  originalContent = fs.readFileSync(backupPath, 'utf8');
} else {
  originalContent = fs.readFileSync(menuPath, 'utf8');
}

// Helper function to get ingredients, allergens, and dietary based on item name/description
function getItemData(name, description, category) {
  const nameUpper = name.toUpperCase();
  const descUpper = description.toUpperCase();
  
  // Default empty arrays
  let ingredients = [];
  let allergens = [];
  let dietary = [];
  
  // Beers
  if (category === 'beers') {
    ingredients = ['Malta', 'Lúpulo', 'Levadura', 'Agua'];
    allergens = ['Gluten'];
    dietary = ['vegan'];
  }
  // Cocktails
  else if (category === 'cocktails') {
    // Margarita variations
    if (nameUpper.includes('MARGARITA')) {
      ingredients = ['Tequila', 'Triple sec', 'Jugo de limón'];
      if (nameUpper.includes('FROZEN')) ingredients.push('Hielo picado');
      if (nameUpper.includes('MANGO')) ingredients.push('Pulpa de mango');
      if (nameUpper.includes('FRESA') || nameUpper.includes('STRAWBERRY')) ingredients.push('Fresas');
      if (nameUpper.includes('SANDÍA') || nameUpper.includes('WATERMELON')) ingredients.push('Sandía');
      if (nameUpper.includes('MARACUYÁ') || nameUpper.includes('PASSION')) ingredients.push('Maracuyá');
      if (nameUpper.includes('TAMARINDO')) ingredients.push('Tamarindo');
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Mojito variations
    else if (nameUpper.includes('MOJITO')) {
      ingredients = ['Ron blanco', 'Menta fresca', 'Jugo de limón', 'Azúcar', 'Agua con gas'];
      if (nameUpper.includes('FRESA') || nameUpper.includes('STRAWBERRY')) ingredients.push('Fresas');
      if (nameUpper.includes('MARACUYÁ')) ingredients.push('Maracuyá');
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Pisco Sour
    else if (nameUpper.includes('PISCO SOUR')) {
      ingredients = ['Pisco', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo', 'Amargo de angostura'];
      allergens = ['Huevos'];
      dietary = ['gluten-free'];
    }
    // Piña Colada
    else if (nameUpper.includes('PIÑA COLADA')) {
      ingredients = ['Ron blanco', 'Crema de coco', 'Jugo de piña', 'Hielo'];
      allergens = [];
      dietary = ['gluten-free'];
    }
    // Daiquiri
    else if (nameUpper.includes('DAIQUIRI')) {
      ingredients = ['Ron blanco', 'Jugo de limón', 'Jarabe de azúcar'];
      if (nameUpper.includes('FRESA')) ingredients.push('Fresas');
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Cuba Libre
    else if (nameUpper.includes('CUBA LIBRE')) {
      ingredients = ['Ron', 'Coca-Cola', 'Jugo de limón', 'Hielo'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Long Island
    else if (nameUpper.includes('LONG ISLAND')) {
      ingredients = ['Vodka', 'Ron', 'Gin', 'Tequila', 'Triple sec', 'Jugo de limón', 'Coca-Cola'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Cosmopolitan
    else if (nameUpper.includes('COSMOPOLITAN')) {
      ingredients = ['Vodka', 'Triple sec', 'Jugo de arándano', 'Jugo de limón'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Manhattan
    else if (nameUpper.includes('MANHATTAN')) {
      ingredients = ['Whisky', 'Vermut rojo', 'Amargo de angostura', 'Cereza'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Aperol Spritz
    else if (nameUpper.includes('APEROL SPRITZ')) {
      ingredients = ['Aperol', 'Prosecco', 'Agua con gas', 'Naranja'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Tequila Sunrise
    else if (nameUpper.includes('TEQUILA SUNRISE')) {
      ingredients = ['Tequila', 'Jugo de naranja', 'Granadina'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Sex on the Beach
    else if (nameUpper.includes('SEX ON THE BEACH')) {
      ingredients = ['Vodka', 'Licor de durazno', 'Jugo de naranja', 'Jugo de arándano'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Caipirinha/Caipiroska
    else if (nameUpper.includes('CAIPIRINHA') || nameUpper.includes('CAIPIROSKA')) {
      ingredients = nameUpper.includes('CAIPIROSKA') ? ['Vodka'] : ['Cachaça'];
      ingredients.push('Limón', 'Azúcar', 'Hielo');
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
    // Sangria
    else if (nameUpper.includes('SANGRIA')) {
      ingredients = ['Vino tinto', 'Brandy', 'Jugo de naranja', 'Frutas mixtas', 'Azúcar'];
      allergens = ['Sulfitos'];
      dietary = ['vegan', 'gluten-free'];
    }
    // Clerico
    else if (nameUpper.includes('CLERICO')) {
      ingredients = ['Vino blanco', 'Frutas mixtas', 'Azúcar', 'Agua con gas'];
      allergens = ['Sulfitos'];
      dietary = ['vegan', 'gluten-free'];
    }
    // Bloody Mary
    else if (nameUpper.includes('BLOODY MARY')) {
      ingredients = ['Vodka', 'Jugo de tomate', 'Salsa worcestershire', 'Tabasco', 'Sal', 'Pimienta', 'Apio'];
      allergens = ['Pescado']; // Worcestershire sauce contains anchovies
      dietary = ['gluten-free'];
    }
    // Default cocktail
    else {
      ingredients = ['Alcohol base', 'Mezcladores', 'Hielo'];
      allergens = [];
      dietary = ['gluten-free'];
    }
  }
  // Spirits
  else if (category === 'spirits') {
    if (nameUpper.includes('WHISKY') || nameUpper.includes('WHISKEY')) {
      ingredients = ['Cebada malteada', 'Agua', 'Levadura'];
      allergens = ['Gluten'];
      dietary = [];
    } else if (nameUpper.includes('VODKA')) {
      ingredients = ['Granos destilados', 'Agua'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('RON') || nameUpper.includes('RUM')) {
      ingredients = ['Caña de azúcar', 'Melaza', 'Levadura'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('TEQUILA')) {
      ingredients = ['Agave azul'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('GIN')) {
      ingredients = ['Enebro', 'Botánicos', 'Alcohol de grano'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('BRANDY') || nameUpper.includes('COGNAC')) {
      ingredients = ['Uvas destiladas'];
      allergens = ['Sulfitos'];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('PISCO')) {
      ingredients = ['Uvas pisqueras'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else {
      ingredients = ['Alcohol destilado'];
      allergens = [];
      dietary = ['gluten-free'];
    }
  }
  // Beverages
  else if (category === 'beverages') {
    if (nameUpper.includes('COCA') || nameUpper.includes('PEPSI') || nameUpper.includes('SPRITE') || nameUpper.includes('FANTA')) {
      ingredients = ['Agua carbonatada', 'Azúcar', 'Saborizantes naturales'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('JUGO') || nameUpper.includes('JUICE')) {
      ingredients = ['Fruta natural', 'Agua'];
      if (nameUpper.includes('NARANJA')) ingredients[0] = 'Naranjas';
      if (nameUpper.includes('PIÑA')) ingredients[0] = 'Piña';
      if (nameUpper.includes('MANGO')) ingredients[0] = 'Mango';
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('LIMONADA')) {
      ingredients = ['Limones', 'Agua', 'Azúcar'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('AGUA') || nameUpper.includes('WATER')) {
      ingredients = ['Agua purificada'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('TÉ') || nameUpper.includes('TEA')) {
      ingredients = ['Té', 'Agua'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('ENERGÉTICA') || nameUpper.includes('RED BULL') || nameUpper.includes('MONSTER')) {
      ingredients = ['Agua', 'Azúcar', 'Cafeína', 'Taurina', 'Vitaminas'];
      allergens = [];
      dietary = ['gluten-free'];
    } else {
      ingredients = ['Agua', 'Saborizantes'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
  }
  // Coffee
  else if (category === 'coffee') {
    ingredients = ['Café'];
    if (nameUpper.includes('LATTE') || nameUpper.includes('CAPPUCCINO') || nameUpper.includes('FLAT WHITE') || nameUpper.includes('CORTADO')) {
      ingredients.push('Leche');
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('MOCHA')) {
      ingredients.push('Leche', 'Chocolate');
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('AMERICANO') || nameUpper.includes('ESPRESSO')) {
      ingredients.push('Agua');
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('AFFOGATO')) {
      ingredients.push('Helado de vainilla');
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
    } else {
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
  }
  // Main dishes
  else if (category === 'mains') {
    // Carnes
    if (nameUpper.includes('LOMO') || nameUpper.includes('FILETE') || nameUpper.includes('STEAK')) {
      ingredients = ['Carne de res', 'Sal', 'Pimienta'];
      if (descUpper.includes('POBRE')) ingredients.push('Papas fritas', 'Huevos', 'Plátano frito', 'Arroz');
      allergens = [];
      if (descUpper.includes('HUEVO')) allergens.push('Huevos');
      dietary = [];
    }
    // Pollo
    else if (nameUpper.includes('POLLO') || nameUpper.includes('CHICKEN')) {
      ingredients = ['Pollo', 'Especias'];
      if (nameUpper.includes('GRILLADO') || nameUpper.includes('PLANCHA')) ingredients.push('Aceite de oliva');
      if (nameUpper.includes('MILANESA')) {
        ingredients.push('Pan rallado', 'Huevo', 'Harina');
        allergens = ['Gluten', 'Huevos'];
      } else {
        allergens = [];
      }
      dietary = [];
    }
    // Pescados y mariscos
    else if (nameUpper.includes('SALMÓN') || nameUpper.includes('SALMON')) {
      ingredients = ['Salmón', 'Limón', 'Especias'];
      allergens = ['Pescado'];
      dietary = [];
    }
    else if (nameUpper.includes('CEVICHE')) {
      ingredients = ['Pescado blanco', 'Limón', 'Cebolla', 'Ají', 'Cilantro'];
      allergens = ['Pescado'];
      dietary = ['gluten-free'];
    }
    else if (nameUpper.includes('PULPO') || nameUpper.includes('OCTOPUS')) {
      ingredients = ['Pulpo', 'Aceite de oliva', 'Ajo', 'Paprika'];
      allergens = ['Mariscos'];
      dietary = ['gluten-free'];
    }
    // Pastas
    else if (nameUpper.includes('PASTA') || nameUpper.includes('SPAGHETTI') || nameUpper.includes('FETTUCCINE') || nameUpper.includes('RAVIOLI') || nameUpper.includes('LASAGNA')) {
      ingredients = ['Pasta', 'Salsa'];
      allergens = ['Gluten'];
      if (descUpper.includes('ALFREDO') || descUpper.includes('CARBONARA') || descUpper.includes('QUESO')) {
        ingredients.push('Crema', 'Queso');
        allergens.push('Lácteos');
      }
      if (descUpper.includes('CARBONARA')) {
        ingredients.push('Panceta', 'Huevo');
        allergens.push('Huevos');
      }
      dietary = [];
    }
    // Arroces
    else if (nameUpper.includes('ARROZ') || nameUpper.includes('RISOTTO') || nameUpper.includes('PAELLA')) {
      ingredients = ['Arroz'];
      allergens = [];
      dietary = ['gluten-free'];
      if (nameUpper.includes('MARISCOS')) {
        ingredients.push('Mariscos mixtos', 'Caldo de pescado');
        allergens = ['Mariscos', 'Pescado'];
      }
      if (nameUpper.includes('RISOTTO')) {
        ingredients.push('Caldo', 'Mantequilla', 'Queso parmesano');
        allergens.push('Lácteos');
      }
    }
    // Hamburguesas
    else if (nameUpper.includes('HAMBURGUESA') || nameUpper.includes('BURGER')) {
      ingredients = ['Carne molida', 'Pan de hamburguesa', 'Lechuga', 'Tomate'];
      allergens = ['Gluten'];
      if (descUpper.includes('QUESO') || descUpper.includes('CHEESE')) {
        ingredients.push('Queso');
        allergens.push('Lácteos');
      }
      dietary = [];
    }
    // Vegetarianos
    else if (nameUpper.includes('QUINOA') || nameUpper.includes('VEGGIE') || nameUpper.includes('VEGETARIANO')) {
      ingredients = ['Verduras mixtas'];
      if (nameUpper.includes('QUINOA')) ingredients.unshift('Quinoa');
      allergens = [];
      dietary = ['vegetarian', 'gluten-free'];
      if (!descUpper.includes('QUESO') && !descUpper.includes('HUEVO')) {
        dietary.push('vegan');
      }
    }
    // Default mains
    else {
      ingredients = ['Proteína', 'Guarnición'];
      allergens = [];
      dietary = [];
    }
  }
  // Pizzas
  else if (category === 'pizzas') {
    ingredients = ['Masa de pizza', 'Salsa de tomate', 'Queso mozzarella'];
    allergens = ['Gluten', 'Lácteos'];
    dietary = [];
    
    if (nameUpper.includes('MARGARITA') || nameUpper.includes('MARGHERITA')) {
      ingredients.push('Albahaca', 'Aceite de oliva');
      dietary = ['vegetarian'];
    } else if (nameUpper.includes('PEPPERONI')) {
      ingredients.push('Pepperoni');
    } else if (nameUpper.includes('HAWAIANA')) {
      ingredients.push('Jamón', 'Piña');
    } else if (nameUpper.includes('VEGETARIANA')) {
      ingredients.push('Pimientos', 'Champiñones', 'Cebolla', 'Aceitunas');
      dietary = ['vegetarian'];
    } else if (nameUpper.includes('CUATRO QUESOS') || nameUpper.includes('4 QUESOS')) {
      ingredients.push('Queso azul', 'Queso parmesano', 'Queso cheddar');
      dietary = ['vegetarian'];
    } else if (nameUpper.includes('CARNE') || nameUpper.includes('MEAT')) {
      ingredients.push('Carne molida', 'Pepperoni', 'Jamón');
    } else if (nameUpper.includes('BBQ')) {
      ingredients.push('Pollo', 'Salsa BBQ', 'Cebolla');
    } else if (nameUpper.includes('MARISCOS') || nameUpper.includes('SEAFOOD')) {
      ingredients.push('Camarones', 'Calamares', 'Mejillones');
      allergens.push('Mariscos');
    }
  }
  // Sandwiches
  else if (category === 'sandwiches') {
    ingredients = ['Pan'];
    allergens = ['Gluten'];
    dietary = [];
    
    if (nameUpper.includes('CLUB')) {
      ingredients.push('Pollo', 'Tocino', 'Lechuga', 'Tomate', 'Mayonesa');
      allergens.push('Huevos'); // mayo
    } else if (nameUpper.includes('BLT')) {
      ingredients.push('Tocino', 'Lechuga', 'Tomate', 'Mayonesa');
      allergens.push('Huevos'); // mayo
    } else if (nameUpper.includes('CUBANO')) {
      ingredients.push('Cerdo', 'Jamón', 'Queso', 'Pepinillos', 'Mostaza');
      allergens.push('Lácteos');
    } else if (nameUpper.includes('PHILLY')) {
      ingredients.push('Carne', 'Queso', 'Cebolla', 'Pimientos');
      allergens.push('Lácteos');
    } else if (nameUpper.includes('VEGGIE') || nameUpper.includes('VEGETARIANO')) {
      ingredients.push('Verduras asadas', 'Hummus', 'Aguacate');
      dietary = ['vegetarian', 'vegan'];
      allergens = ['Gluten', 'Sésamo']; // hummus
    } else if (nameUpper.includes('TUNA') || nameUpper.includes('ATÚN')) {
      ingredients.push('Atún', 'Mayonesa', 'Apio', 'Cebolla');
      allergens.push('Pescado', 'Huevos'); // mayo
    } else if (nameUpper.includes('JAMÓN') || nameUpper.includes('HAM')) {
      ingredients.push('Jamón', 'Queso', 'Lechuga', 'Tomate');
      allergens.push('Lácteos');
    }
  }
  // Appetizers
  else if (category === 'appetizers') {
    if (nameUpper.includes('EMPANADA')) {
      ingredients = ['Masa', 'Relleno'];
      allergens = ['Gluten'];
      if (descUpper.includes('CARNE')) ingredients[1] = 'Carne molida';
      if (descUpper.includes('QUESO')) {
        ingredients[1] = 'Queso';
        allergens.push('Lácteos');
      }
      dietary = [];
    } else if (nameUpper.includes('CEVICHE')) {
      ingredients = ['Pescado', 'Limón', 'Cebolla', 'Cilantro', 'Ají'];
      allergens = ['Pescado'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('CALAMARES') || nameUpper.includes('CALAMARI')) {
      ingredients = ['Calamares', 'Harina', 'Huevo', 'Pan rallado'];
      allergens = ['Mariscos', 'Gluten', 'Huevos'];
      dietary = [];
    } else if (nameUpper.includes('PAPAS') || nameUpper.includes('FRIES')) {
      ingredients = ['Papas', 'Aceite', 'Sal'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('NACHOS')) {
      ingredients = ['Chips de maíz', 'Queso', 'Jalapeños'];
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
      if (descUpper.includes('CARNE')) {
        ingredients.push('Carne molida');
        dietary = [];
      } else {
        dietary.push('vegetarian');
      }
    } else if (nameUpper.includes('GUACAMOLE')) {
      ingredients = ['Aguacate', 'Tomate', 'Cebolla', 'Cilantro', 'Limón'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('HUMMUS')) {
      ingredients = ['Garbanzos', 'Tahini', 'Limón', 'Ajo', 'Aceite de oliva'];
      allergens = ['Sésamo'];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('CARPACCIO')) {
      ingredients = ['Carne cruda', 'Aceite de oliva', 'Limón', 'Parmesano'];
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('BROCHETA') || nameUpper.includes('SKEWER')) {
      ingredients = ['Proteína', 'Verduras', 'Especias'];
      allergens = [];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('CROQUETA')) {
      ingredients = ['Bechamel', 'Pan rallado', 'Huevo', 'Relleno'];
      allergens = ['Gluten', 'Lácteos', 'Huevos'];
      dietary = [];
    }
  }
  // Salads
  else if (category === 'salads') {
    ingredients = ['Lechuga mixta'];
    allergens = [];
    dietary = ['vegan', 'gluten-free'];
    
    if (nameUpper.includes('CÉSAR') || nameUpper.includes('CAESAR')) {
      ingredients.push('Pollo', 'Crutones', 'Queso parmesano', 'Aderezo césar');
      allergens = ['Gluten', 'Lácteos', 'Huevos', 'Pescado']; // anchoas en aderezo
      dietary = [];
    } else if (nameUpper.includes('GRIEGA') || nameUpper.includes('GREEK')) {
      ingredients.push('Tomate', 'Pepino', 'Cebolla', 'Queso feta', 'Aceitunas', 'Aceite de oliva');
      allergens = ['Lácteos'];
      dietary = ['vegetarian', 'gluten-free'];
    } else if (nameUpper.includes('CAPRESE')) {
      ingredients = ['Tomate', 'Mozzarella', 'Albahaca', 'Aceite de oliva'];
      allergens = ['Lácteos'];
      dietary = ['vegetarian', 'gluten-free'];
    } else if (nameUpper.includes('NIÇOISE')) {
      ingredients.push('Atún', 'Huevo duro', 'Anchoas', 'Aceitunas', 'Papas', 'Judías verdes');
      allergens = ['Pescado', 'Huevos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('WALDORF')) {
      ingredients.push('Manzana', 'Apio', 'Nueces', 'Mayonesa');
      allergens = ['Frutos secos', 'Huevos'];
      dietary = [];
    } else if (nameUpper.includes('QUINOA')) {
      ingredients = ['Quinoa', 'Verduras mixtas', 'Vinagreta'];
      dietary = ['vegan', 'gluten-free'];
    } else if (nameUpper.includes('POLLO') || nameUpper.includes('CHICKEN')) {
      ingredients.push('Pollo grillado', 'Verduras mixtas', 'Vinagreta');
      dietary = ['gluten-free'];
    }
  }
  // Desserts
  else if (category === 'desserts') {
    if (nameUpper.includes('HELADO') || nameUpper.includes('ICE CREAM')) {
      ingredients = ['Crema', 'Leche', 'Azúcar'];
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
      if (descUpper.includes('CHOCOLATE')) ingredients.push('Chocolate');
      if (descUpper.includes('VAINILLA')) ingredients.push('Vainilla');
      if (descUpper.includes('FRESA')) ingredients.push('Fresas');
    } else if (nameUpper.includes('TIRAMISÚ') || nameUpper.includes('TIRAMISU')) {
      ingredients = ['Bizcochos', 'Café', 'Mascarpone', 'Huevos', 'Cacao'];
      allergens = ['Gluten', 'Lácteos', 'Huevos'];
      dietary = [];
    } else if (nameUpper.includes('CHEESECAKE')) {
      ingredients = ['Queso crema', 'Galletas', 'Mantequilla', 'Azúcar'];
      allergens = ['Gluten', 'Lácteos'];
      dietary = [];
    } else if (nameUpper.includes('BROWNIE')) {
      ingredients = ['Chocolate', 'Harina', 'Huevos', 'Mantequilla', 'Azúcar'];
      allergens = ['Gluten', 'Lácteos', 'Huevos'];
      dietary = [];
      if (descUpper.includes('NUECES')) {
        ingredients.push('Nueces');
        allergens.push('Frutos secos');
      }
    } else if (nameUpper.includes('FLAN')) {
      ingredients = ['Leche', 'Huevos', 'Azúcar', 'Caramelo'];
      allergens = ['Lácteos', 'Huevos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('CRÈME BRÛLÉE') || nameUpper.includes('CREME BRULEE')) {
      ingredients = ['Crema', 'Huevos', 'Azúcar', 'Vainilla'];
      allergens = ['Lácteos', 'Huevos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('MOUSSE')) {
      ingredients = ['Chocolate', 'Crema', 'Huevos', 'Azúcar'];
      allergens = ['Lácteos', 'Huevos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('TARTA') || nameUpper.includes('PIE')) {
      ingredients = ['Masa', 'Relleno', 'Azúcar'];
      allergens = ['Gluten'];
      if (descUpper.includes('MANZANA')) ingredients[1] = 'Manzanas';
      if (descUpper.includes('LIMÓN')) {
        ingredients[1] = 'Crema de limón';
        allergens.push('Lácteos', 'Huevos');
      }
      dietary = [];
    } else if (nameUpper.includes('PROFITEROLES')) {
      ingredients = ['Masa choux', 'Crema pastelera', 'Chocolate'];
      allergens = ['Gluten', 'Lácteos', 'Huevos'];
      dietary = [];
    } else if (nameUpper.includes('PANNA COTTA')) {
      ingredients = ['Crema', 'Azúcar', 'Gelatina', 'Vainilla'];
      allergens = ['Lácteos'];
      dietary = ['gluten-free'];
    } else if (nameUpper.includes('CHURROS')) {
      ingredients = ['Harina', 'Agua', 'Aceite', 'Azúcar'];
      allergens = ['Gluten'];
      dietary = ['vegan'];
    } else if (nameUpper.includes('SORBET')) {
      ingredients = ['Fruta', 'Azúcar', 'Agua'];
      allergens = [];
      dietary = ['vegan', 'gluten-free'];
    }
  }
  
  return { ingredients, allergens, dietary };
}

// Parse the file to find and update empty ingredient arrays
const regex = /\{[\s\S]*?id: "([^"]+)"[\s\S]*?name: "([^"]+)"[\s\S]*?description: "([^"]+)"[\s\S]*?category: "([^"]+)"[\s\S]*?ingredients: \[\],\s*allergens: \[\],\s*dietary: \[\]/g;

let updatedContent = originalContent;
let match;

while ((match = regex.exec(originalContent)) !== null) {
  const [fullMatch, id, name, description, category] = match;
  
  const { ingredients, allergens, dietary } = getItemData(name, description, category);
  
  // Format arrays properly
  const formatArray = (arr) => {
    if (arr.length === 0) return '[]';
    return `[${arr.map(item => `"${item}"`).join(', ')}]`;
  };
  
  // Replace empty arrays with populated ones
  const replacement = fullMatch.replace(
    /ingredients: \[\],\s*allergens: \[\],\s*dietary: \[\]/,
    `ingredients: ${formatArray(ingredients)},
    allergens: ${formatArray(allergens)},
    dietary: ${formatArray(dietary)}`
  );
  
  updatedContent = updatedContent.replace(fullMatch, replacement);
}

// Write the updated content
fs.writeFileSync(menuPath, updatedContent, 'utf8');
console.log('Menu comprehensively fixed!');