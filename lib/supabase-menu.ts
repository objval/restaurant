import { createClient } from '@supabase/supabase-js'
import type { Database, Tables, TablesInsert } from './database.types'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create client if env vars are present
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null as unknown as ReturnType<typeof createClient<Database>>

// Type aliases for menu tables
export type MenuArbol = Tables<'menu_arbol'>
export type Menu1898 = Tables<'menu_1898'>
export type MenuCapriccio = Tables<'menu_capriccio'>
export type Category = Tables<'categories'>

// View types with categories
export type MenuArbolWithCategory = Tables<'menu_arbol_with_categories'>
export type Menu1898WithCategory = Tables<'menu_1898_with_categories'>
export type MenuCapriccioWithCategory = Tables<'menu_capriccio_with_categories'>

// Union type for any menu item
export type MenuItemDB = MenuArbol | Menu1898 | MenuCapriccio

/**
 * Fetch all categories
 */
export async function getCategories() {
  if (!supabase) return []
  
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('active', true)
    .order('display_order')

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return data || []
}

/**
 * Fetch menu items for El Árbol location
 */
export async function getMenuArbol() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('menu_arbol_with_categories')
    .select('*')
    .order('category_display_order')
    .order('display_order')
    .order('name')

  if (error) {
    console.error('Error fetching menu for El Árbol:', error)
    return []
  }

  return data || []
}

/**
 * Fetch menu items for 1898 location
 */
export async function getMenu1898() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('menu_1898_with_categories')
    .select('*')
    .order('category_display_order')
    .order('display_order')
    .order('name')

  if (error) {
    console.error('Error fetching menu for 1898:', error)
    return []
  }

  return data || []
}

/**
 * Fetch menu items for Capriccio location
 */
export async function getMenuCapriccio() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('menu_capriccio_with_categories')
    .select('*')
    .order('category_display_order')
    .order('display_order')
    .order('name')

  if (error) {
    console.error('Error fetching menu for Capriccio:', error)
    return []
  }

  return data || []
}

/**
 * Fetch menu items for a specific location
 */
export async function getMenuByLocation(location: 'arbol' | '1898' | 'capriccio') {
  switch (location) {
    case 'arbol':
      return getMenuArbol()
    case '1898':
      return getMenu1898()
    case 'capriccio':
      return getMenuCapriccio()
    default:
      console.error('Invalid location:', location)
      return []
  }
}

/**
 * Convert database menu item to the format expected by components
 * Maps category_id to category slug for compatibility with existing components
 */
export function convertDBMenuItemToLocal(
  item: MenuArbolWithCategory | Menu1898WithCategory | MenuCapriccioWithCategory, 
  categories?: Category[]
) {
  // Get the category slug from the database categories
  let categorySlug = ''
  if (item.category_id && categories) {
    const category = categories.find(c => c.id === item.category_id)
    categorySlug = category?.slug || ''
  }

  return {
    id: item.slug || '',
    name: item.name || '',
    description: item.description || '',
    price: Number(item.price) || 0,
    category: categorySlug,
    image: item.image_url || '',
    ingredients: item.ingredients || [],
    allergens: item.allergens || [],
    dietary: item.dietary || [],
    spiceLevel: item.spice_level || undefined,
    calories: item.calories || undefined,
    prepTime: item.prep_time || '',
    chef_special: item.chef_special || false,
    popular: item.popular || false,
    seasonal: item.seasonal || false,
    stock_status: (item.stock_status as 'in_stock' | 'out_of_stock') || 'in_stock',
  }
}

/**
 * Admin functions (require authentication)
 */

/**
 * Update menu item active status
 */
export async function updateMenuItemStatus(
  location: 'arbol' | '1898' | 'capriccio',
  itemId: string,
  active: boolean
) {
  const table = `menu_${location}` as 'menu_arbol' | 'menu_1898' | 'menu_capriccio'
  
  const { data, error } = await supabase
    .from(table)
    .update({ active })
    .eq('id', itemId)
    .select()
    .single()

  if (error) {
    console.error('Error updating item status:', error)
    return null
  }

  return data
}

/**
 * Update menu item stock status
 */
export async function updateMenuItemStock(
  location: 'arbol' | '1898' | 'capriccio',
  itemId: string,
  stockStatus: 'in_stock' | 'out_of_stock'
) {
  const table = `menu_${location}` as 'menu_arbol' | 'menu_1898' | 'menu_capriccio'
  
  const { data, error } = await supabase
    .from(table)
    .update({ stock_status: stockStatus })
    .eq('id', itemId)
    .select()
    .single()

  if (error) {
    console.error('Error updating item stock:', error)
    return null
  }

  return data
}

/**
 * Update menu item price
 */
export async function updateMenuItemPrice(
  location: 'arbol' | '1898' | 'capriccio',
  itemId: string,
  price: number
) {
  const table = `menu_${location}` as 'menu_arbol' | 'menu_1898' | 'menu_capriccio'
  
  const { data, error } = await supabase
    .from(table)
    .update({ price })
    .eq('id', itemId)
    .select()
    .single()

  if (error) {
    console.error('Error updating item price:', error)
    return null
  }

  return data
}

/**
 * Create a new menu item
 */
export async function createMenuItem(
  location: 'arbol' | '1898' | 'capriccio',
  item: Omit<TablesInsert<'menu_arbol'>, 'id' | 'created_at' | 'updated_at'>
) {
  const table = `menu_${location}` as 'menu_arbol' | 'menu_1898' | 'menu_capriccio'
  
  const { data, error } = await supabase
    .from(table)
    .insert(item)
    .select()
    .single()

  if (error) {
    console.error('Error creating menu item:', error)
    return null
  }

  return data
}

/**
 * Delete a menu item (soft delete by setting active to false)
 */
export async function deleteMenuItem(
  location: 'arbol' | '1898' | 'capriccio',
  itemId: string
) {
  return updateMenuItemStatus(location, itemId, false)
}