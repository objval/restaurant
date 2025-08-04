-- Capriccio Menu Cleanup Script
-- This script ensures the menu matches exactly what was provided

-- First, let's identify and remove items that are NOT in the provided menu
-- These are items that exist in DB but not in the user's list

-- Remove extra cocktails
DELETE FROM location_products 
WHERE location_id = 'capriccio' 
AND product_id IN (
  SELECT id FROM products WHERE legacy_id IN (
    'espresso-martini',  -- Not in the menu
    'gin-tonic',         -- Listed as "Gin Tonic" but already exists as separate
    'martini-sporco',    -- Not in the menu
    'negroni',          -- Should be "Negronni"
    'gin-and-tonic'     -- Duplicate
  )
);

-- Remove extra main dishes
DELETE FROM location_products 
WHERE location_id = 'capriccio' 
AND product_id IN (
  SELECT id FROM products WHERE legacy_id IN (
    'lomo-saltado',              -- Not in the menu
    'tabla-fuego-brasa',         -- Not in the menu (only in Tablas section header)
    'tabla-mediterranea-fria'    -- Not in the menu (only in Tablas section header)
  )
);

-- Remove extra appetizers
DELETE FROM location_products 
WHERE location_id = 'capriccio' 
AND product_id IN (
  SELECT id FROM products WHERE legacy_id IN (
    'ceviche-pacifico',          -- Not in the menu
    'bruschetta-picante-golfo'   -- Not in the menu
  )
);

-- Remove duplicate spirits that don't exist in the menu
DELETE FROM location_products 
WHERE location_id = 'capriccio' 
AND product_id IN (
  SELECT id FROM products WHERE legacy_id IN (
    'gin-beefeater',       -- Should be "Gin Beeafeater" 
    'gin-tanqueray-london', -- Should be "Gin Tanqueray London Dry"
    'gin-hendricks',       -- Should be "Gin Hendrik´s"
    'jagermeister',        -- Should be "Jaggermeister"
    'whiskey-ballentines', -- Should be "Whiskey Ballentines Bourbon 7 años"
    'whiskey-jack-daniel-apple', -- Should be "Whiskey Jack Daniel Apple"
    'whiskey-johnnie-walker-black-label', -- Should be "Whiskey Johnnie Walker Black"
    'whisky-johnnie-walker-red-label',    -- Should be "Whisky Johnnie Walker Red"
    'ron-havana-7',        -- Should be "Ron Havana Añejo 7 Años"
    'ron-havana-especial', -- Should be "Ron Havana Añejo Especial"
    'pisco-el-gobernador', -- Not in the menu
    'pisco-alto-carmen',   -- Should be "Pisco Alto del Carmen"
    'pisco-mistral-nobel'  -- Already correct
  )
);

-- Now let's ensure all items have correct names and descriptions

-- Fix cocktail names and descriptions
UPDATE products SET 
  name = 'Negronni',
  description = 'El clásico italiano con gin, Campari y vermut'
WHERE legacy_id = 'negronni';

UPDATE products SET
  description = 'Base de papa rústica, acompañado de mechada en su jugo.'
WHERE legacy_id = 'papas-mechada-chef';

UPDATE products SET
  description = 'Papas rústicas salteadas en peso fresco.'
WHERE legacy_id = 'papas-pesto-verde';

UPDATE products SET
  description = 'Papas rusticas salteadas en pasta de ají.'
WHERE legacy_id = 'papas-bufalo';

-- Ensure empty category placeholders exist but with no products
INSERT INTO categories (slug, name, description, icon, display_order) VALUES
('cold_dishes', 'Platos Frios', 'Platos fríos', '🥗', 6),
('tapas', 'Tapas y Bruschettas', 'Tapas y bruschettas', '🍢', 9),
('boards', 'Tablas', 'Tablas para compartir', '🧀', 10)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description;

-- Final verification query to show the exact menu structure
WITH menu_summary AS (
  SELECT 
    c.name as category,
    c.display_order,
    COUNT(p.id) as item_count,
    STRING_AGG(p.name || ' ($' || p.base_price || ')', ', ' ORDER BY p.name) as items
  FROM categories c
  LEFT JOIN location_products lp ON c.id = lp.category_id AND lp.location_id = 'capriccio'
  LEFT JOIN products p ON lp.product_id = p.id
  WHERE c.slug IN (
    'beers', 'beverages', 'drinks', 'coffee', 'cold_dishes', 
    'main_courses', 'tapas', 'boards', 'topping_potatoes', 
    'spirits', 'wines', 'bajativos'
  )
  GROUP BY c.id, c.name, c.display_order
)
SELECT 
  category,
  COALESCE(item_count, 0) as items,
  CASE 
    WHEN item_count = 0 THEN '(Empty section)'
    ELSE items
  END as menu_items
FROM menu_summary
ORDER BY display_order;