import { MenuItem } from "./menu-data"

// Menu for Location 3: Capriccio - Coastal/Seafood theme
export const menucapriccio: MenuItem[] = [
  // Entradas
  {
    id: "tabla-mariscos",
    name: "Tabla de Mariscos Costeros",
    description: "Selección de ostras frescas, camarones y centolla con salsa cocktail",
    price: 38990,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&h=400&fit=crop",
    ingredients: ["Ostras frescas", "Camarones jumbo", "Centolla", "Salsa cocktail", "Limón"],
    allergens: ["Mariscos"],
    dietary: ["gluten-free"],
    calories: 320,
    prepTime: "10-12 min",
    chef_special: true,
  },
  {
    id: "camarones-coco",
    name: "Camarones Apanados en Coco",
    description: "Camarones jumbo en costra de coco con chutney de mango",
    price: 17990,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=400&fit=crop",
    ingredients: ["Camarones jumbo", "Coco rallado", "Chutney de mango", "Salsa agridulce"],
    allergens: ["Mariscos", "Gluten"],
    dietary: [],
    calories: 380,
    prepTime: "12-15 min",
    popular: true,
  },

  // Sopas
  {
    id: "chupe-mariscos",
    name: "Chupe de Mariscos",
    description: "Sopa cremosa con almejas frescas, papas y hierbas",
    price: 13990,
    category: "soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=400&fit=crop",
    ingredients: ["Almejas frescas", "Papas", "Crema", "Apio", "Cebollas", "Hierbas"],
    allergens: ["Mariscos", "Lácteos"],
    dietary: [],
    calories: 380,
    prepTime: "8-10 min",
    popular: true,
  },

  // Mariscos
  {
    id: "cioppino-costero",
    name: "Cioppino Costero",
    description: "Guiso de mariscos frescos con pan artesanal y hierbas",
    price: 29990,
    category: "seafood",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=400&fit=crop",
    ingredients: ["Mariscos mixtos", "Caldo de tomate", "Pan artesanal", "Hierbas frescas", "Vino blanco"],
    allergens: ["Pescado", "Mariscos", "Gluten"],
    dietary: [],
    calories: 580,
    prepTime: "20-25 min",
    chef_special: true,
  },
  {
    id: "robalo-parrilla",
    name: "Robalo a la Parrilla",
    description: "Robalo mediterráneo con limón, hierbas y aceite de oliva",
    price: 27990,
    category: "seafood",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=400&fit=crop",
    ingredients: ["Robalo entero", "Limón", "Hierbas frescas", "Aceite de oliva extra virgen", "Sal marina"],
    allergens: ["Pescado"],
    dietary: ["gluten-free"],
    calories: 420,
    prepTime: "15-18 min",
    popular: true,
  },
  {
    id: "sandwich-centolla",
    name: "Sándwich de Centolla",
    description: "Carne fresca de centolla en pan brioche con mayonesa al limón",
    price: 31990,
    category: "seafood",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&h=400&fit=crop",
    ingredients: ["Centolla fresca", "Pan brioche", "Mayonesa al limón", "Apio", "Ciboulette"],
    allergens: ["Mariscos", "Gluten", "Lácteos", "Huevos"],
    dietary: [],
    calories: 520,
    prepTime: "12-15 min",
    chef_special: true,
  },

  // Carnes
  {
    id: "mar-tierra",
    name: "Mar y Tierra",
    description: "Filete a la parrilla con cola de langosta y mantequilla de ajo",
    price: 42990,
    category: "steaks",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop",
    ingredients: ["Filete mignon", "Cola de langosta", "Mantequilla de ajo", "Espárragos", "Puré de papas"],
    allergens: ["Mariscos", "Lácteos"],
    dietary: [],
    calories: 780,
    prepTime: "25-30 min",
    chef_special: true,
  },

  // Postres
  {
    id: "pie-limon",
    name: "Pie de Limón",
    description: "Postre tradicional con base de galleta y crema batida",
    price: 7990,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop",
    ingredients: ["Jugo de limón", "Base de galleta", "Leche condensada", "Crema batida", "Ralladura de limón"],
    allergens: ["Gluten", "Lácteos", "Huevos"],
    dietary: ["vegetarian"],
    calories: 380,
    prepTime: "5 min",
    popular: true,
  },

  // Bebidas
  {
    id: "sangria-atardecer",
    name: "Sangría del Atardecer",
    description: "Vino tinto de la casa con frutas de estación y cítricos",
    price: 10990,
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop",
    ingredients: ["Vino tinto", "Frutas de estación", "Cítricos", "Brandy", "Almíbar"],
    allergens: [],
    dietary: ["vegan"],
    calories: 220,
    prepTime: "3-5 min",
    popular: true,
  },
]