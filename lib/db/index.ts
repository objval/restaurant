import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

// Type definitions for our database tables
export interface DBLocation {
  id: string;
  name: string;
  concept: string;
  path: string;
  coordinates: any;
  theme: any;
  images: any;
  description: string;
  long_description: string;
  hours: any;
  specialties: string[];
  atmosphere: string[];
  price_range: string;
  contact: any;
  features: string[];
  stats: any;
  social_proof: any;
  social_media: any;
  promotions: any[];
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface DBCategory {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: string;
  display_order: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface DBProduct {
  id: string;
  legacy_id: string;
  name: string;
  description: string;
  base_price: number;
  image_url: string;
  image_alt: string;
  prep_time: string;
  calories: number;
  spice_level: number;
  properties: any;
  ingredients: string[];
  allergens: string[];
  dietary_tags: string[];
  nutritional_info: any;
  is_chef_special: boolean;
  is_popular: boolean;
  is_seasonal: boolean;
  is_new: boolean;
  is_active: boolean;
  meta_title: string;
  meta_description: string;
  created_at: Date;
  updated_at: Date;
}

export interface DBLocationProduct {
  id: number;
  location_id: string;
  product_id: string;
  category_id: number;
  custom_price: number;
  custom_name: string;
  custom_description: string;
  is_available: boolean;
  out_of_stock: boolean;
  available_from: string;
  available_until: string;
  available_days: number[];
  display_order: number;
  featured: boolean;
  stock_quantity: number;
  low_stock_threshold: number;
  created_at: Date;
  updated_at: Date;
}

// Database query functions
export async function getLocations() {
  noStore();
  const { rows } = await sql<DBLocation>`
    SELECT * FROM locations 
    WHERE is_active = true 
    ORDER BY name
  `;
  return rows;
}

export async function getLocationById(id: string) {
  noStore();
  const { rows } = await sql<DBLocation>`
    SELECT * FROM locations 
    WHERE id = ${id} AND is_active = true
    LIMIT 1
  `;
  return rows[0];
}

export async function getCategories() {
  noStore();
  const { rows } = await sql<DBCategory>`
    SELECT * FROM categories 
    WHERE is_active = true 
    ORDER BY display_order, name
  `;
  return rows;
}

export async function getLocationMenu(locationId: string) {
  noStore();
  const { rows } = await sql`
    SELECT 
      p.*,
      lp.custom_price,
      lp.custom_name,
      lp.custom_description,
      lp.is_available,
      lp.out_of_stock,
      lp.display_order as location_display_order,
      lp.featured,
      c.id as category_id,
      c.slug as category_slug,
      c.name as category_name,
      c.icon as category_icon,
      c.display_order as category_display_order
    FROM products p
    INNER JOIN location_products lp ON p.id = lp.product_id
    INNER JOIN categories c ON lp.category_id = c.id
    WHERE 
      lp.location_id = ${locationId}
      AND p.is_active = true
      AND lp.is_available = true
      AND c.is_active = true
    ORDER BY 
      c.display_order, 
      c.name,
      lp.display_order,
      p.name
  `;
  
  return rows.map(row => ({
    // Product data
    id: row.legacy_id || row.id,
    name: row.custom_name || row.name,
    description: row.custom_description || row.description,
    price: Number(row.custom_price || row.base_price),
    category: row.category_slug,
    image: row.image_url,
    ingredients: row.ingredients || [],
    allergens: row.allergens || [],
    dietary: row.dietary_tags || [],
    spiceLevel: row.spice_level,
    calories: row.calories,
    prepTime: row.prep_time,
    chef_special: row.is_chef_special,
    popular: row.is_popular,
    seasonal: row.is_seasonal,
    outOfStock: row.out_of_stock,
    // Category data
    categoryName: row.category_name,
    categoryIcon: row.category_icon,
  }));
}

export async function getMenuHighlights(locationId: string) {
  noStore();
  const { rows } = await sql`
    SELECT 
      mh.*,
      p.name as product_name,
      p.description as product_description,
      p.base_price as product_price,
      p.image_url as product_image,
      p.legacy_id
    FROM menu_highlights mh
    INNER JOIN products p ON mh.product_id = p.id
    WHERE 
      mh.location_id = ${locationId}
      AND mh.is_active = true
      AND p.is_active = true
    ORDER BY mh.display_order
  `;
  
  return rows.map(row => ({
    id: row.legacy_id || row.product_id,
    name: row.custom_name || row.product_name,
    description: row.custom_description || row.product_description,
    price: row.custom_price || `$${row.product_price}`,
    image: row.custom_image || row.product_image,
  }));
}

export async function getCategoriesWithItems(locationId: string) {
  noStore();
  const { rows } = await sql`
    SELECT DISTINCT
      c.id,
      c.slug,
      c.name,
      c.description,
      c.icon,
      c.display_order
    FROM categories c
    INNER JOIN location_products lp ON c.id = lp.category_id
    INNER JOIN products p ON lp.product_id = p.id
    WHERE 
      lp.location_id = ${locationId}
      AND lp.is_available = true
      AND p.is_active = true
      AND c.is_active = true
    ORDER BY c.display_order, c.name
  `;
  
  return rows.map(row => ({
    id: row.slug,
    name: row.name,
    description: row.description,
    icon: row.icon,
  }));
}

// Admin functions
export async function toggleProductAvailability(
  productId: string,
  locationId: string,
  isAvailable: boolean
) {
  await sql`
    UPDATE location_products 
    SET is_available = ${isAvailable}, updated_at = CURRENT_TIMESTAMP
    WHERE product_id = ${productId} AND location_id = ${locationId}
  `;
}

export async function updateProductStock(
  productId: string,
  locationId: string,
  outOfStock: boolean
) {
  await sql`
    UPDATE location_products 
    SET out_of_stock = ${outOfStock}, updated_at = CURRENT_TIMESTAMP
    WHERE product_id = ${productId} AND location_id = ${locationId}
  `;
}

export async function updateProduct(productId: string, updates: Partial<DBProduct>) {
  const updateFields = Object.entries(updates)
    .filter(([key, value]) => value !== undefined && key !== 'id')
    .map(([key, value]) => {
      if (Array.isArray(value) || typeof value === 'object') {
        return sql`${sql.identifier([key])} = ${JSON.stringify(value)}`;
      }
      return sql`${sql.identifier([key])} = ${value}`;
    });

  if (updateFields.length === 0) return;

  // Build dynamic update query
  const query = `
    UPDATE products 
    SET ${updateFields.map((_, i) => `$${i + 2}`).join(', ')}, updated_at = CURRENT_TIMESTAMP
    WHERE id = $1
  `;
  
  // This is a simplified version - in production you'd want to use a query builder
  await sql`
    UPDATE products 
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = ${productId}
  `;
}