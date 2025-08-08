"use server"

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import type { Database } from '@/lib/database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export async function toggleProductActive(
  location: 'arbol' | '1898' | 'capriccio',
  productId: string,
  currentActive: boolean
) {
  console.log(`[toggleProductActive] Location: ${location}, ID: ${productId}, Current: ${currentActive}`)
  
  const table = `menu_${location}` as const
  const newActiveStatus = !currentActive
  
  const { data, error } = await supabase
    .from(table)
    .update({ active: newActiveStatus })
    .eq('id', productId)
    .select()
  
  if (error) {
    console.error(`[toggleProductActive] Error:`, error)
    throw new Error(`Failed to update active status: ${error.message}`)
  }
  
  if (!data || data.length === 0) {
    console.error(`[toggleProductActive] No product found with ID: ${productId}`)
    throw new Error(`Product not found`)
  }
  
  console.log(`[toggleProductActive] Success - New status: ${data[0].active}`)
  
  // Revalidate the admin dashboard and menu pages
  revalidatePath('/admin/dashboard')
  revalidatePath(`/${location}/menu`)
  
  return { success: true, data: data[0] }
}

export async function toggleProductStock(
  location: 'arbol' | '1898' | 'capriccio',
  productId: string,
  currentStock: string
) {
  console.log(`[toggleProductStock] Location: ${location}, ID: ${productId}, Current: ${currentStock}`)
  
  const table = `menu_${location}` as const
  const newStock = currentStock === 'in_stock' ? 'out_of_stock' : 'in_stock'
  
  const { data, error } = await supabase
    .from(table)
    .update({ stock_status: newStock })
    .eq('id', productId)
    .select()
  
  if (error) {
    console.error(`[toggleProductStock] Error:`, error)
    throw new Error(`Failed to update stock status: ${error.message}`)
  }
  
  if (!data || data.length === 0) {
    console.error(`[toggleProductStock] No product found with ID: ${productId}`)
    throw new Error(`Product not found`)
  }
  
  console.log(`[toggleProductStock] Success - New stock: ${data[0].stock_status}`)
  
  // Revalidate the admin dashboard and menu pages
  revalidatePath('/admin/dashboard')
  revalidatePath(`/${location}/menu`)
  
  return { success: true, data: data[0] }
}

export async function getProducts(location: 'arbol' | '1898' | 'capriccio') {
  const table = `menu_${location}_with_categories` as const
  
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .order('category_display_order')
    .order('display_order')
    .order('name')
  
  if (error) {
    console.error(`[getProducts] Error fetching products:`, error)
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
  
  return data || []
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('active', true)
    .order('display_order')
  
  if (error) {
    console.error(`[getCategories] Error:`, error)
    throw new Error(`Failed to fetch categories: ${error.message}`)
  }
  
  return data || []
}

export async function getProductStats(location: 'arbol' | '1898' | 'capriccio') {
  const table = `menu_${location}` as const
  
  const { data, error } = await supabase
    .from(table)
    .select('active, stock_status, price')
  
  if (error) {
    console.error(`[getProductStats] Error:`, error)
    throw new Error(`Failed to fetch stats: ${error.message}`)
  }
  
  const products = data || []
  const totalProducts = products.length
  const activeProducts = products.filter(p => p.active).length
  const outOfStock = products.filter(p => p.stock_status === 'out_of_stock').length
  const avgPrice = products.length 
    ? products.reduce((sum, p) => sum + Number(p.price), 0) / products.length 
    : 0
  
  return {
    totalProducts,
    activeProducts,
    outOfStock,
    avgPrice
  }
}