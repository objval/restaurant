export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  ingredients: string[]
  allergens: string[]
  dietary: string[] // vegetarian, vegan, gluten-free, etc.
  spiceLevel?: number // 1-5 scale
  calories?: number
  prepTime: string
  chef_special?: boolean
  popular?: boolean
  seasonal?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  icon: string
}

export const menuCategories: MenuCategory[] = [
  { id: "appetizers", name: "Entradas", description: "Perfectas para comenzar tu comida", icon: "🥗" },
  { id: "soups", name: "Sopas y Ensaladas", description: "Opciones frescas y nutritivas", icon: "🥣" },
  { id: "mains", name: "Platos Principales", description: "Nuestros platos estrella", icon: "🍽️" },
  { id: "seafood", name: "Mariscos", description: "Lo mejor del océano", icon: "🐟" },
  { id: "steaks", name: "Carnes y Parrilla", description: "Cortes premium y especialidades a la parrilla", icon: "🥩" },
  { id: "pasta", name: "Pastas y Risottos", description: "Clásicos de inspiración italiana", icon: "🍝" },
  { id: "desserts", name: "Postres", description: "Dulces finales para tu comida", icon: "🍰" },
  { id: "beverages", name: "Bebidas", description: "Tragos y cócteles artesanales", icon: "🍹" },
]

export const menuData = {
  location1: [
    // Entradas
    {
      id: "arancini-trufa",
      name: "Arancini de Trufa",
      description: "Bolitas de risotto crujientes con aceite de trufa y parmesano, servidas con salsa marinara",
      price: 12990,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=400&fit=crop",
      ingredients: ["Arroz arborio", "Aceite de trufa", "Parmesano", "Salsa marinara", "Hierbas frescas"],
      allergens: ["Lácteos", "Gluten"],
      dietary: ["Vegetariano"],
      calories: 320,
      prepTime: "8-10 min",
      chef_special: true,
    },
    {
      id: "alitas-buffalo",
      name: "Alitas Buffalo Urbanas",
      description: "Alitas de pollo crujientes bañadas en salsa buffalo casera con dip de queso azul",
      price: 14990,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&h=400&fit=crop",
      ingredients: ["Alitas de pollo", "Salsa buffalo", "Queso azul", "Apio", "Zanahorias"],
      allergens: ["Lácteos"],
      dietary: [],
      spiceLevel: 3,
      calories: 480,
      prepTime: "12-15 min",
      popular: true,
    },
    {
      id: "nachos-cargados",
      name: "Nachos Cargados del Centro",
      description: "Totopos caseros con queso derretido, jalapeños y todos los acompañamientos",
      price: 16990,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&h=400&fit=crop",
      ingredients: ["Totopos caseros", "Queso cheddar", "Jalapeños", "Crema agria", "Guacamole", "Salsa"],
      allergens: ["Lácteos", "Gluten"],
      dietary: ["Vegetariano"],
      calories: 650,
      prepTime: "10-12 min",
      popular: true,
    },

    // Sopas y Ensaladas
    {
      id: "caesar-urbana",
      name: "Ensalada César Urbana",
      description: "Lechuga romana crujiente con crutones caseros, parmesano y aderezo césar clásico",
      price: 11990,
      category: "soups",
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&h=400&fit=crop",
      ingredients: ["Lechuga romana", "Crutones caseros", "Parmesano", "Aderezo césar", "Anchoas"],
      allergens: ["Gluten", "Lácteos", "Pescado"],
      dietary: [],
      calories: 320,
      prepTime: "8-10 min",
      popular: true,
    },
    {
      id: "crema-tomate",
      name: "Crema de Tomate Asado",
      description: "Sopa cremosa de tomates asados con albahaca fresca y un toque de crema",
      price: 9990,
      category: "soups",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=400&fit=crop",
      ingredients: ["Tomates asados", "Crema", "Albahaca fresca", "Cebollas", "Ajo"],
      allergens: ["Lácteos"],
      dietary: ["Vegetariano"],
      calories: 280,
      prepTime: "5-7 min",
    },

    // Platos Principales
    {
      id: "benedict-lumiere",
      name: "Benedict Lumière",
      description: "Huevos pochados sobre pan artesanal con tocino curado y salsa holandesa",
      price: 18990,
      category: "mains",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&h=400&fit=crop",
      ingredients: ["Huevos de campo", "Pan artesanal", "Tocino curado", "Salsa holandesa", "Microverdes"],
      allergens: ["Huevos", "Gluten", "Lácteos"],
      dietary: [],
      calories: 520,
      prepTime: "12-15 min",
      popular: true,
    },
    {
      id: "hamburguesa-centro",
      name: "Hamburguesa del Centro",
      description: "Carne wagyu con aioli de trufa, queso cheddar añejo y papas fritas cortadas a mano",
      price: 24990,
      category: "mains",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
      ingredients: ["Carne wagyu", "Aioli de trufa", "Queso cheddar añejo", "Pan brioche", "Papas fritas"],
      allergens: ["Gluten", "Lácteos"],
      dietary: [],
      calories: 780,
      prepTime: "15-18 min",
      chef_special: true,
    },

    // Carnes y Parrilla
    {
      id: "bife-ciudad",
      name: "Bife de la Ciudad",
      description: "Ribeye premium con vegetales de estación y reducción de vino tinto",
      price: 32990,
      category: "steaks",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop",
      ingredients: ["Ribeye premium", "Vegetales de estación", "Reducción de vino tinto", "Mantequilla de hierbas"],
      allergens: ["Lácteos"],
      dietary: [],
      calories: 650,
      prepTime: "20-25 min",
      chef_special: true,
    },

    // Postres
    {
      id: "volcan-chocolate",
      name: "Volcán de Chocolate",
      description: "Bizcocho tibio de chocolate con centro fundido y helado de vainilla",
      price: 8990,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop",
      ingredients: ["Chocolate negro", "Mantequilla", "Huevos", "Harina", "Helado de vainilla"],
      allergens: ["Huevos", "Gluten", "Lácteos"],
      dietary: [],
      calories: 450,
      prepTime: "12-15 min",
      popular: true,
    },

    // Bebidas
    {
      id: "manhattan-centro",
      name: "Manhattan del Centro",
      description: "Whisky premium con vermut dulce y bitter angostura",
      price: 12990,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop",
      ingredients: ["Whisky premium", "Vermut dulce", "Bitter angostura", "Cereza de guarnición"],
      allergens: [],
      dietary: [],
      prepTime: "3-5 min",
      chef_special: true,
    },
  ],

  location2: [
    // Entradas
    {
      id: "bruschetta-jardin",
      name: "Bruschetta del Jardín",
      description: "Pan tostado con tomates heritage, albahaca y glaseado balsámico",
      price: 10990,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=500&h=400&fit=crop",
      ingredients: ["Pan artesanal", "Tomates heritage", "Albahaca fresca", "Glaseado balsámico", "Aceite de oliva"],
      allergens: ["Gluten"],
      dietary: ["Vegetariano", "Vegano"],
      calories: 180,
      prepTime: "8-10 min",
      seasonal: true,
    },
    {
      id: "carpaccio-betarraga",
      name: "Carpaccio de Betarraga",
      description: "Betarragas asadas en láminas finas con queso de cabra y nueces confitadas",
      price: 13990,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop",
      ingredients: ["Betarragas asadas", "Queso de cabra", "Nueces confitadas", "Rúcula", "Vinagreta de miel"],
      allergens: ["Lácteos", "Frutos secos"],
      dietary: ["Vegetariano", "Sin gluten"],
      calories: 220,
      prepTime: "10-12 min",
      chef_special: true,
    },

    // Mariscos
    {
      id: "salmon-hierbas",
      name: "Salmón en Costra de Hierbas",
      description: "Salmón del Atlántico con hierbas del jardín y salsa de mantequilla al limón",
      price: 26990,
      category: "seafood",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop",
      ingredients: ["Salmón del Atlántico", "Hierbas frescas", "Mantequilla al limón", "Vegetales de estación"],
      allergens: ["Pescado", "Lácteos"],
      dietary: ["Sin gluten"],
      calories: 480,
      prepTime: "18-20 min",
      chef_special: true,
    },

    // Pastas y Risottos
    {
      id: "risotto-trufa",
      name: "Risotto de Trufa y Hongos",
      description: "Arroz carnaroli cremoso con hongos silvestres y aceite de trufa",
      price: 22990,
      category: "pasta",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=400&fit=crop",
      ingredients: ["Arroz carnaroli", "Hongos silvestres", "Aceite de trufa", "Parmesano", "Vino blanco"],
      allergens: ["Lácteos"],
      dietary: ["Vegetariano"],
      calories: 520,
      prepTime: "25-30 min",
      chef_special: true,
    },

    // Postres
    {
      id: "panna-cotta-lavanda",
      name: "Panna Cotta de Lavanda",
      description: "Postre sedoso con miel y frutos rojos frescos",
      price: 9990,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop",
      ingredients: ["Crema", "Lavanda", "Miel", "Frutos rojos", "Menta"],
      allergens: ["Lácteos"],
      dietary: ["Vegetariano", "Sin gluten"],
      calories: 280,
      prepTime: "5 min",
      popular: true,
    },

    // Bebidas
    {
      id: "gin-botanico",
      name: "Gin Botánico",
      description: "Gin infusionado con hierbas frescas y flor de saúco",
      price: 11990,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop",
      ingredients: ["Gin infusionado", "Hierbas frescas", "Flor de saúco", "Pepino", "Tónica"],
      allergens: [],
      dietary: ["Vegano"],
      prepTime: "5-7 min",
      popular: true,
    },
  ],

  location3: [
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
      dietary: ["Sin gluten"],
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
      dietary: ["Sin gluten"],
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
      dietary: ["Vegetariano"],
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
      category: "beverages",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop",
      ingredients: ["Vino tinto", "Frutas de estación", "Cítricos", "Brandy", "Almíbar"],
      allergens: [],
      dietary: ["Vegano"],
      prepTime: "3-5 min",
      popular: true,
    },
  ],
}

// Helper function to find menu item by ID across all locations
export function findMenuItemById(itemId: string): MenuItem | null {
  for (const locationItems of Object.values(menuData)) {
    const item = locationItems.find((item) => item.id === itemId)
    if (item) return item
  }
  return null
}

// Helper function to get menu item ID by name (for backward compatibility)
export function getMenuItemIdByName(name: string, locationId: string): string | null {
  const locationItems = menuData[locationId as keyof typeof menuData]
  if (!locationItems) return null

  const item = locationItems.find((item) => item.name.toLowerCase() === name.toLowerCase())
  return item?.id || null
}
