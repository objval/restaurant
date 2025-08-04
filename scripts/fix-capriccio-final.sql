-- Fix Capriccio menu to match JSON exactly

-- 1. Add missing items from JSON
-- Add Ceviche del Pacífico to Platos Frios
INSERT INTO products (
  legacy_id, name, description, base_price, image_url, prep_time, calories, 
  ingredients, allergens, dietary_tags, is_chef_special, is_popular
) VALUES (
  'ceviche-del-pacifico', 
  'Ceviche del Pacífico', 
  'Cubos de atún fresco marinados al estilo leche de tigre, con cítricos, pasta de ají y jengibre, coronados con finas láminas de palta y chips de plátano verde para aportar textura. Una explosión de frescura y sabor del mar.',
  16990,
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=400&fit=crop',
  '15 min',
  250,
  ARRAY['Atún fresco', 'Leche de tigre', 'Cítricos', 'Pasta de ají', 'Jengibre', 'Palta', 'Chips de plátano'],
  ARRAY['Pescado'],
  ARRAY['gluten-free'],
  true,
  true
) ON CONFLICT (legacy_id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  base_price = EXCLUDED.base_price;

INSERT INTO location_products (location_id, product_id, category_id, is_available)
SELECT 'capriccio', p.id, c.id, true
FROM products p, categories c
WHERE p.legacy_id = 'ceviche-del-pacifico' AND c.slug = 'cold_dishes'
ON CONFLICT DO NOTHING;

-- Add Tabla de Tierra y Cenizas to Tablas
INSERT INTO products (
  legacy_id, name, description, base_price, image_url, prep_time, calories, 
  ingredients, allergens, dietary_tags, is_chef_special, is_popular
) VALUES (
  'tabla-tierra-cenizas', 
  'Tabla de Tierra y Cenizas', 
  'Un festín de cortes: Lomo de res, truto de pollo al arrostro, cerdo a la plancha sobre, ideal para 4 personas. una base de papas rústicas. Flambeado y acompañado de chimichurri casero.',
  28990,
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop',
  '30 min',
  1200,
  ARRAY['Lomo de res', 'Pollo al arrostro', 'Cerdo a la plancha', 'Papas rústicas', 'Chimichurri'],
  ARRAY['Gluten'],
  '{}',
  true,
  true
) ON CONFLICT (legacy_id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  base_price = EXCLUDED.base_price;

INSERT INTO location_products (location_id, product_id, category_id, is_available)
SELECT 'capriccio', p.id, c.id, true
FROM products p, categories c
WHERE p.legacy_id = 'tabla-tierra-cenizas' AND c.slug = 'boards'
ON CONFLICT DO NOTHING;

-- 2. Fix cocktail categories - move all cocktails to proper categories
-- First, ensure the category exists
INSERT INTO categories (slug, name, description, icon, display_order) 
VALUES ('cocktails_author', 'Coctelería de Autor', 'Cócteles de autor', '🍹', 3)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO categories (slug, name, description, icon, display_order) 
VALUES ('cocktails', 'Cocteleria', 'Cócteles clásicos', '🍸', 4)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;

-- Move Auguri and Capriccio to Coctelería de Autor
UPDATE location_products 
SET category_id = (SELECT id FROM categories WHERE slug = 'cocktails_author')
WHERE location_id = 'capriccio' 
AND product_id IN (SELECT id FROM products WHERE legacy_id IN ('auguri', 'capriccio'));

-- Move other cocktails to Cocteleria
UPDATE location_products 
SET category_id = (SELECT id FROM categories WHERE slug = 'cocktails')
WHERE location_id = 'capriccio' 
AND product_id IN (
  SELECT id FROM products WHERE legacy_id IN (
    'sour', 'piccione', 'limoncello-spritz', 'old-fashioned', 
    'ramazzoti-spritz', 'negronni', '2x-alto-carmen'
  )
);

-- Add missing Gin Tonic to Cocteleria
INSERT INTO products (
  legacy_id, name, description, base_price, image_url, prep_time, calories, 
  ingredients, allergens, dietary_tags, is_chef_special, is_popular
) VALUES (
  'gin-tonic-new', 
  'Gin Tonic', 
  'Gin tonic clásico',
  5000,
  'https://images.unsplash.com/photo-1576518720578-ea735ad6c51e?w=500&h=400&fit=crop',
  '3 min',
  150,
  ARRAY['Gin', 'Agua tónica', 'Limón'],
  '{}',
  ARRAY['vegan'],
  false,
  false
) ON CONFLICT (legacy_id) DO NOTHING;

INSERT INTO location_products (location_id, product_id, category_id, is_available)
SELECT 'capriccio', p.id, c.id, true
FROM products p, categories c
WHERE p.legacy_id = 'gin-tonic-new' AND c.slug = 'cocktails'
ON CONFLICT DO NOTHING;

-- 3. Remove extra items not in JSON
DELETE FROM location_products 
WHERE location_id = 'capriccio' 
AND product_id = (SELECT id FROM products WHERE legacy_id = 'pisco-el-gobernador');

-- 4. Fix wine names to match JSON exactly
UPDATE products SET name = 'Chardon Rose 187 cc' WHERE legacy_id = 'chardon-rose-187';
UPDATE products SET name = 'Chardon brut 750 cc' WHERE legacy_id = 'chardon-brut-750';
UPDATE products SET name = 'Viu Manent Noble Semillon Chardoney' WHERE legacy_id = 'viu-manent-noble';

-- Move wines to correct category
UPDATE categories SET name = 'Vinos y Espumantes' WHERE slug = 'wines';

-- Final cleanup: ensure all items are in correct categories
-- This query shows the final state
SELECT 
  c.name as category,
  COUNT(p.id) as items,
  STRING_AGG(p.name, ', ' ORDER BY p.name) as products
FROM categories c
LEFT JOIN location_products lp ON c.id = lp.category_id AND lp.location_id = 'capriccio'
LEFT JOIN products p ON lp.product_id = p.id
GROUP BY c.name
ORDER BY c.display_order;