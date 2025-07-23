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
  { id: "specials", name: "Especiales 2X", description: "Ofertas y promociones especiales", icon: "🎉" },
  { id: "recommended", name: "Recomendado para Hoy", description: "Sugerencias especiales de nuestro chef", icon: "⭐" },
  { id: "mains", name: "Platos de Autor", description: "Nuestros platos estrella", icon: "🍽️" },
  { id: "pizzas", name: "Pizzas", description: "Pizzas a la piedra con ingredientes frescos", icon: "🍕" },
  { id: "sandwiches", name: "Sándwiches y Fajitas", description: "Opciones contundentes y sabrosas", icon: "🥪" },
  { id: "sharing", name: "Tablas para Compartir", description: "Ideales para disfrutar en grupo", icon: "🍱" },
  { id: "appetizers", name: "Entradas", description: "Perfectas para comenzar tu comida", icon: "🥗" },
  { id: "salads", name: "Ensaladas", description: "Creaciones frescas y saludables", icon: "🥬" },
  { id: "seafood", name: "Mariscos", description: "Lo mejor del océano", icon: "🐟" },
  { id: "steaks", name: "Carnes y Parrilla", description: "Cortes premium y especialidades a la parrilla", icon: "🥩" },
  { id: "pasta", name: "Pastas y Risottos", description: "Clásicos de inspiración italiana", icon: "🍝" },
  { id: "soups", name: "Sopas y Cremas", description: "Opciones frescas y nutritivas", icon: "🥣" },
  { id: "cocktails", name: "Cócteles", description: "Tragos y cócteles artesanales", icon: "🍹" },
  { id: "beers", name: "Cervezas y Shop", description: "Una selección de cervezas artesanales y de barril", icon: "🍺" },
  { id: "wines", name: "Vinos y Destilados", description: "Nuestra selección de vinos y licores", icon: "🍷" },
  { id: "beverages", name: "Bebestibles y Jugos", description: "Refrescos y bebidas sin alcohol", icon: "🥤" },
  { id: "coffee", name: "Cafetería", description: "Café de grano, tés e infusiones", icon: "☕" },
  { id: "desserts", name: "Repostería y Pastelería", description: "Dulces finales para tu comida", icon: "🍰" },
  { id: "breakfast", name: "Desayunos", description: "Para empezar el día con energía", icon: "🍳" },
  { id: "kids", name: "Menú de Niños", description: "Platos pensados para los más pequeños", icon: "🧒" },
]

// Import menu data from individual location files
import { menuLocation1 } from "./menu-location1"
import { menuLocation2 } from "./menu-location2"
import { menuLocation3 } from "./menu-location3"

// Combine all menu data
export const menuData = {
  location1: menuLocation1,
  location2: menuLocation2,
  location3: menuLocation3,
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

// Helper function to get available categories for a location
export function getLocationCategories(locationId: string): string[] {
  const locationItems = menuData[locationId as keyof typeof menuData]
  if (!locationItems) return []
  
  // Get unique categories from menu items
  const categories = new Set(locationItems.map(item => item.category))
  
  // Return sorted array of categories that actually have items
  return Array.from(categories).sort()
}

// Helper function to get menu items by category for a location
export function getMenuItemsByCategory(locationId: string, category: string): MenuItem[] {
  const locationItems = menuData[locationId as keyof typeof menuData]
  if (!locationItems) return []
  
  return locationItems.filter(item => item.category === category)
}

// Helper function to get categories with items for a location
export function getCategoriesWithItems(locationId: string): MenuCategory[] {
  const availableCategories = getLocationCategories(locationId)
  
  // Filter menu categories to only include those that have items
  return menuCategories.filter(category => availableCategories.includes(category.id))
}