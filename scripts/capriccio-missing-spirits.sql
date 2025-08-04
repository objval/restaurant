-- Add missing spirits to Capriccio menu

-- Check which spirits are missing
-- Expected: Gin Hendrik´s, Whiskey Jack Daniel Apple, Pisco Alto del Carmen, Pisco Mistral Nobel, Ron Havana Añejo Especial

-- Create function for adding spirits
CREATE OR REPLACE FUNCTION add_capriccio_spirit(
  p_legacy_id TEXT,
  p_name TEXT,
  p_description TEXT,
  p_price DECIMAL
) RETURNS void AS $$
BEGIN
  -- First ensure product exists
  INSERT INTO products (
    legacy_id, name, description, base_price, 
    image_url, prep_time, calories, ingredients, 
    allergens, dietary_tags, is_chef_special, is_popular
  ) VALUES (
    p_legacy_id, p_name, p_description, p_price,
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
    '2 min', 65, ARRAY[p_name], '{}', ARRAY['vegan'], false, false
  ) ON CONFLICT (legacy_id) DO UPDATE SET
    name = EXCLUDED.name,
    base_price = EXCLUDED.base_price;
    
  -- Then add to location
  INSERT INTO location_products (location_id, product_id, category_id, is_available)
  SELECT 
    'capriccio',
    p.id,
    c.id,
    true
  FROM products p
  CROSS JOIN categories c
  WHERE p.legacy_id = p_legacy_id
    AND c.slug = 'spirits'
  ON CONFLICT (location_id, product_id) DO NOTHING;
END;
$$ LANGUAGE plpgsql;

-- Add missing spirits
SELECT add_capriccio_spirit('gin-hendrik-s', 'Gin Hendrik´s', 'Gin escocés con pepino y pétalos de rosa', 7990);
SELECT add_capriccio_spirit('whiskey-jack-daniel-apple-new', 'Whiskey Jack Daniel Apple', 'Tennessee Whiskey con sabor a manzana', 7990);
SELECT add_capriccio_spirit('pisco-alto-del-carmen', 'Pisco Alto del Carmen', 'Pisco chileno tradicional', 5990);
SELECT add_capriccio_spirit('pisco-mistral-nobel-new', 'Pisco Mistral Nobel', 'Pisco premium chileno', 6990);
SELECT add_capriccio_spirit('ron-havana-anejo-especial', 'Ron Havana Añejo Especial', 'Ron cubano añejo especial', 5990);

-- Fix existing Pisco El Gobernador to be Pisco Alto del Carmen
UPDATE products 
SET name = 'Pisco Alto del Carmen', base_price = 5990 
WHERE legacy_id = 'pisco-el-gobernador';

-- Clean up function
DROP FUNCTION IF EXISTS add_capriccio_spirit;