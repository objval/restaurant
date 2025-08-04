-- Capriccio Missing Items Migration
-- This script adds the 62 missing items to complete the Capriccio menu

-- Ensure categories exist
INSERT INTO categories (slug, name, description, icon, display_order) VALUES
('beers', 'Cervezas Y Shop', 'Cervezas artesanales y comerciales', '🍺', 1),
('beverages', 'Bebestibles', 'Bebidas sin alcohol', '🥤', 2),
('coffee', 'Cafetería', 'Café y bebidas calientes', '☕', 7),
('topping_potatoes', 'Papas Topping', 'Papas con toppings especiales', '🥔', 8),
('bajativos', 'Bajativos', 'Digestivos y licores dulces', '🥃', 10)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description;

-- Create function to simplify product insertion
CREATE OR REPLACE FUNCTION insert_capriccio_product(
  p_legacy_id TEXT,
  p_name TEXT,
  p_description TEXT,
  p_price DECIMAL,
  p_category TEXT,
  p_image TEXT DEFAULT 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
  p_prep_time TEXT DEFAULT '5-10 min',
  p_calories INT DEFAULT NULL,
  p_ingredients TEXT[] DEFAULT '{}',
  p_allergens TEXT[] DEFAULT '{}',
  p_dietary TEXT[] DEFAULT '{}',
  p_chef_special BOOLEAN DEFAULT false,
  p_popular BOOLEAN DEFAULT false
) RETURNS void AS $$
BEGIN
  INSERT INTO products (
    legacy_id, name, description, base_price, image_url,
    prep_time, calories, ingredients, allergens,
    dietary_tags, is_chef_special, is_popular
  ) VALUES (
    p_legacy_id, p_name, p_description, p_price, p_image,
    p_prep_time, p_calories, p_ingredients, p_allergens,
    p_dietary, p_chef_special, p_popular
  ) ON CONFLICT (legacy_id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    base_price = EXCLUDED.base_price,
    updated_at = CURRENT_TIMESTAMP;
    
  INSERT INTO location_products (location_id, product_id, category_id, is_available)
  SELECT 
    'capriccio',
    p.id,
    c.id,
    true
  FROM products p
  CROSS JOIN categories c
  WHERE p.legacy_id = p_legacy_id
    AND c.slug = p_category
  ON CONFLICT (location_id, product_id) DO NOTHING;
END;
$$ LANGUAGE plpgsql;

-- CERVEZAS Y SHOP (11 missing items)
SELECT insert_capriccio_product('austral-calafate', 'Austral Calafate individual', 'Edición especial premium 500 cc', 4500, 'beers', 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop', '1 min', 200, ARRAY['Cerveza Austral Calafate'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('austral-lager', 'Austral Lager individual', 'Cerveza lager refrescante', 4500, 'beers', 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop', '1 min', 180, ARRAY['Cerveza Austral Lager'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('chelada', 'Chelada', 'Cerveza preparada con limón y sal', 1000, 'beers', 'https://images.unsplash.com/photo-1567696911980-2c669027769d?w=500&h=400&fit=crop', '2 min', 150, ARRAY['Cerveza', 'Limón', 'Sal'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('kunstmann-torobayo', 'Kunstmann Torobayo individual', 'Cerveza artesanal premium', 4900, 'beers', 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&h=400&fit=crop', '1 min', 190, ARRAY['Cerveza Kunstmann Torobayo'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('michelada', 'Michelada', 'Cerveza preparada con especias y salsas', 1000, 'beers', 'https://images.unsplash.com/photo-1567696911980-2c669027769d?w=500&h=400&fit=crop', '3 min', 160, ARRAY['Cerveza', 'Salsa picante', 'Limón', 'Especias'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('heineken-sin-alcohol', 'Heiniken S/Alcohol', 'Cerveza sin alcohol', 3200, 'beers', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop', '1 min', 70, ARRAY['Cerveza Heineken 0.0'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('kuns-lager-sin-alcohol', 'Kuns Lager Sin Alcohol', 'Cerveza artesanal sin alcohol', 4900, 'beers', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop', '1 min', 65, ARRAY['Cerveza Kunstmann Sin Alcohol'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('shop-heineken', 'Shop Heiniken', 'Cerveza Heineken para llevar', 4500, 'beers', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop', '1 min', 142, ARRAY['Cerveza Heineken'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('2x-shop-heineken', '2x Shop Heiniken', 'Pack de 2 cervezas Heineken', 6000, 'beers', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop', '1 min', 284, ARRAY['2x Cerveza Heineken'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('kunsman-sin-filtrar', 'Kunsman Sin Filtrar 500cc', 'Cerveza artesanal sin filtrar', 6990, 'beers', 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&h=400&fit=crop', '1 min', 210, ARRAY['Cerveza Kunstmann Sin Filtrar'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('kuntsman-gran-torobayo', 'Kuntsman Gran Torobayo 500 cc', 'Cerveza premium gran formato', 7590, 'beers', 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&h=400&fit=crop', '1 min', 220, ARRAY['Cerveza Kunstmann Gran Torobayo'], '{}', ARRAY['vegan'], false, true);

-- BEBESTIBLES (20 missing items)
SELECT insert_capriccio_product('pellegrino-pompelmo', 'Agua Natural Pellegrino Pompelmo', 'Agua mineral con pomelo', 2990, 'beverages', 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua San Pellegrino Pompelmo'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('pellegrino-sparklin', 'Agua Soda Pellegrino Pet Sparklin', 'Agua mineral con gas', 2990, 'beverages', 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua San Pellegrino con gas'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('jugo-frambuesa', 'Jugo Frambuesa', 'Jugo natural de frambuesa', 3200, 'beverages', 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?w=500&h=400&fit=crop', '2 min', 120, ARRAY['Frambuesas', 'Agua', 'Azúcar'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('limonada', 'Limonada', 'Limonada fresca natural', 3900, 'beverages', 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=500&h=400&fit=crop', '3 min', 100, ARRAY['Limones frescos', 'Agua', 'Azúcar', 'Hielo'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('agua-tonica', 'Agua tónica', 'Agua tónica premium', 2200, 'beverages', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '1 min', 35, ARRAY['Agua tónica'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('cordillerano', 'Cordillerano', 'Agua con hielo', 0, 'beverages', 'https://images.unsplash.com/photo-1560023907-5f339617ea55?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua', 'Hielo'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('coca-cola', 'Coca Cola', 'Bebida cola clásica', 2200, 'beverages', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop', '1 min', 139, ARRAY['Coca Cola'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('ginger-ale', 'Ginger Ale', 'Bebida de jengibre', 2200, 'beverages', 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&h=400&fit=crop', '1 min', 124, ARRAY['Ginger Ale'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('ginger-ale-220', 'Ginger Ale 220cc', 'Bebida de jengibre formato pequeño', 1500, 'beverages', 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&h=400&fit=crop', '1 min', 60, ARRAY['Ginger Ale'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('coca-cero', 'Coca Cero', 'Coca Cola sin azúcar', 2200, 'beverages', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Coca Cola Zero'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('agua-tonica-220', 'Agua Tonica 220', 'Agua tónica formato pequeño', 1500, 'beverages', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '1 min', 20, ARRAY['Agua tónica'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('acqua-panna', 'Agua Acqua Panna Pet Bot', 'Agua mineral sin gas premium', 2990, 'beverages', 'https://images.unsplash.com/photo-1550505333-af04681d4c88?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua Acqua Panna'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('pink-tonic', 'Pink Tonic', 'Agua tónica rosada', 2200, 'beverages', 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&h=400&fit=crop', '1 min', 35, ARRAY['Pink Tonic'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('coca-cola-220', 'Coca cola 220', 'Coca Cola formato pequeño', 1500, 'beverages', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop', '1 min', 65, ARRAY['Coca Cola'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('coca-cero-220', 'Coca Cero 220', 'Coca Cola Zero formato pequeño', 1500, 'beverages', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Coca Cola Zero'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('sprite-220', 'Sprite 220', 'Sprite formato pequeño', 1500, 'beverages', 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop', '1 min', 60, ARRAY['Sprite'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('sprite', 'Sprite', 'Bebida lima limón', 2200, 'beverages', 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop', '1 min', 140, ARRAY['Sprite'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('sprite-cero', 'Sprite Cero', 'Sprite sin azúcar', 2200, 'beverages', 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Sprite Zero'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('red-bull-yellow', 'Red bull yellow', 'Red Bull edición tropical', 2990, 'beverages', 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=400&fit=crop', '1 min', 110, ARRAY['Red Bull Yellow Edition'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('red-bull-250', 'Red Bull 250 cc', 'Red Bull clásico', 2990, 'beverages', 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=400&fit=crop', '1 min', 110, ARRAY['Red Bull'], '{}', ARRAY['vegan'], false, true);

-- Missing COCKTAILS (4 items)
SELECT insert_capriccio_product('ramazzotti-spritz', 'Ramazzotti Spritz', 'Spritz italiano con Ramazzotti', 5000, 'drinks', 'https://images.unsplash.com/photo-1594631661960-34762327295a?w=500&h=400&fit=crop', '3 min', 160, ARRAY['Ramazzotti', 'Prosecco', 'Soda', 'Naranja'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('negronni', 'Negronni', 'El clásico italiano con gin, Campari y vermut', 5000, 'drinks', 'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?w=500&h=400&fit=crop', '3 min', 190, ARRAY['Gin', 'Campari', 'Vermut rosso', 'Naranja'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('gin-tonic', 'Gin Tonic', 'Gin tonic clásico', 5000, 'drinks', 'https://images.unsplash.com/photo-1576518720578-ea735ad6c51e?w=500&h=400&fit=crop', '3 min', 150, ARRAY['Gin', 'Agua tónica', 'Limón'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('2x-alto-carmen', '2x Alto del Carmen', 'Doble de pisco Alto del Carmen', 8990, 'drinks', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 130, ARRAY['2x Pisco Alto del Carmen'], '{}', ARRAY['vegan', 'gluten-free'], false, false);

-- Update SOUR price
UPDATE products SET base_price = 5290 WHERE legacy_id = 'sour';

-- CAFETERÍA (4 items)
SELECT insert_capriccio_product('americano', 'Americano', 'Café americano', 2800, 'coffee', 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&h=400&fit=crop', '3 min', 5, ARRAY['Café espresso', 'Agua caliente'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('cortado', 'Cortado', 'Café cortado con leche', 3200, 'coffee', 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=400&fit=crop', '3 min', 40, ARRAY['Café espresso', 'Leche vaporizada'], ARRAY['Lácteos'], '{}', false, true);
SELECT insert_capriccio_product('expreso', 'Expreso', 'Café espresso', 2400, 'coffee', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop', '2 min', 2, ARRAY['Café espresso'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('te-twinings', 'Te Twinings', 'Selección de té Twinings', 2700, 'coffee', 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&h=400&fit=crop', '5 min', 0, ARRAY['Té Twinings', 'Agua caliente'], '{}', ARRAY['vegan'], false, false);

-- PLATOS PRINCIPALES (1 item)
SELECT insert_capriccio_product('pollo-sol-naranja', 'Pollo al Sol de Naranja', 'Turo de pollo deshuesado al estilo arrostro. Apagado con triple sec y jugo de naranja. Acompañado de coles de bruselas salteadas.', 13990, 'main_courses', 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=400&fit=crop', '25-30 min', 520, ARRAY['Pollo deshuesado', 'Triple sec', 'Jugo de naranja', 'Coles de bruselas'], ARRAY['Alcohol'], '{}', true, true);

-- PAPAS TOPPING (2 items) - Update existing Papas Búfalo price and add 2 new
UPDATE products SET base_price = 9990 WHERE legacy_id = 'papas-bufalo';

SELECT insert_capriccio_product('papas-mechada-chef', 'Papas con Mechada del Chef', 'Base de papa rústica, acompañado de mechada en su jugo.', 13990, 'topping_potatoes', 'https://images.unsplash.com/photo-1630431341973-a2b8d97fb7e3?w=500&h=400&fit=crop', '20 min', 680, ARRAY['Papas rústicas', 'Carne mechada', 'Jugo de cocción'], ARRAY['Gluten'], '{}', true, true);
SELECT insert_capriccio_product('papas-pesto-verde', 'Papas al Pesto Verde', 'Papas rústicas salteadas en peso fresco.', 9990, 'topping_potatoes', 'https://images.unsplash.com/photo-1585451456595-89cd7a3608b6?w=500&h=400&fit=crop', '15 min', 450, ARRAY['Papas rústicas', 'Pesto fresco', 'Parmesano'], ARRAY['Lácteos', 'Frutos secos'], ARRAY['vegetarian'], false, false);

-- Missing DESTILADOS (16 items) with corrected names and prices
SELECT insert_capriccio_product('gin-tanqueray-london-dry', 'Gin Tanqueray London Dry', 'London Dry Gin premium', 6990, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Tanqueray London Dry'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('whiskey-ballentines-bourbon', 'Whiskey Ballentines Bourbon 7 años', 'Whisky escocés 7 años', 4990, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Ballentines'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('whiskey-johnnie-black', 'Whiskey Johnnie Walker Black', 'Whisky escocés 12 años premium', 8990, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Johnnie Walker Black Label'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('whiskey-jack-daniel-apple', 'Whiskey Jack Daniel Apple', 'Tennessee Whiskey con manzana', 7990, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Jack Daniel Apple'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('gin-beeafeater', 'Gin Beeafeater', 'London Dry Gin clásico', 6990, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Beefeater'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('jaggermeister', 'Jaggermeister', 'Licor de hierbas alemán', 6990, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 100, ARRAY['Jägermeister'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('ron-havana-7-anos', 'Ron Havana Añejo 7 Años', 'Ron cubano añejo 7 años', 8990, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Ron Havana Club 7 años'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('ron-havana-especial', 'Ron Havana Añejo Especial', 'Ron cubano especial', 5990, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Ron Havana Club Especial'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('whisky-johnnie-red', 'Whisky Johnnie Walker Red', 'Whisky escocés Red Label', 6990, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Johnnie Walker Red Label'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('gin-hendricks', 'Gin Hendrik´s', 'Gin escocés con pepino y rosas', 7990, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Hendricks'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('gin-beefeater-pink', 'Gin Beefeater Pink', 'Gin con fresas', 7490, 'spirits', 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Beefeater Pink'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('fernet-branca', 'Fernet Branca', 'Amargo italiano de hierbas', 5990, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 75, ARRAY['Fernet Branca'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('johnnie-walker-blonde', 'Jhonnie Walker Blonde', 'Whisky escocés suave', 7990, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Johnnie Walker Blonde'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('vodka-smirnoff', 'Vodka Smirnoff', 'Vodka premium', 5990, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Vodka Smirnoff'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('pisco-horcon-quemado', 'Pisco Horcón Quemado', 'Pisco chileno especial', 6990, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Pisco Horcón Quemado'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('mistral-35', 'Mistral 35', 'Pisco Mistral 35°', 5990, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Pisco Mistral 35'], '{}', ARRAY['vegan', 'gluten-free'], false, false);

-- Update existing spirit prices to match user's list
UPDATE products SET base_price = 12990 WHERE legacy_id = 'whiskey-johnnie-double-black';
UPDATE products SET base_price = 7990 WHERE legacy_id = 'gin-tanqueray-sevilla';
UPDATE products SET base_price = 6990 WHERE legacy_id = 'gin-tanqueray-royal';
UPDATE products SET base_price = 8490 WHERE legacy_id = 'tequila-don-julio';
UPDATE products SET base_price = 7990 WHERE legacy_id = 'chivas-regal-12';
UPDATE products SET base_price = 7990 WHERE legacy_id = 'whiskey-jack-daniel-apple';
UPDATE products SET base_price = 6990 WHERE legacy_id = 'gin-beefeater';
UPDATE products SET base_price = 6990 WHERE legacy_id = 'jagermeister';
UPDATE products SET base_price = 6990 WHERE legacy_id = 'drambuie';
UPDATE products SET base_price = 8990 WHERE legacy_id = 'ron-havana-7';
UPDATE products SET base_price = 5990 WHERE legacy_id = 'ron-havana-especial';
UPDATE products SET base_price = 6990 WHERE legacy_id = 'whisky-johnnie-red';
UPDATE products SET base_price = 5990 WHERE legacy_id = 'pisco-alto-carmen';
UPDATE products SET base_price = 6990 WHERE legacy_id = 'pisco-mistral-nobel';
UPDATE products SET base_price = 7990 WHERE legacy_id = 'gin-hendricks';

-- VINOS Y ESPUMANTES (3 items) - Update existing prices
UPDATE products SET base_price = 5500 WHERE legacy_id = 'chardon-rose-187';
UPDATE products SET base_price = 16990 WHERE legacy_id = 'chardon-brut-750';
UPDATE products SET base_price = 9990 WHERE legacy_id = 'viu-manent-noble';

-- BAJATIVOS (1 item)
SELECT insert_capriccio_product('amaretto', 'Amaretto', 'Licor italiano de almendras', 2590, 'bajativos', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 110, ARRAY['Amaretto'], ARRAY['Frutos secos'], ARRAY['vegan'], false, false);

-- Clean up function
DROP FUNCTION IF EXISTS insert_capriccio_product;