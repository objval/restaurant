-- Capriccio Menu Migration - Batch 1: Cocktails & Appetizers (13 items)
-- This script migrates drinks and appetizers for Capriccio restaurant

-- Ensure Capriccio location exists
INSERT INTO locations (id, name, concept, path, coordinates, theme, images, description, long_description, hours, specialties, atmosphere, price_range, contact, features, stats, social_proof, social_media, promotions)
VALUES (
  'capriccio',
  'Capriccio',
  'Cocina mediterránea contemporánea',
  '/capriccio',
  '{"lat": -39.2773, "lng": -72.2281}',
  '{"primary": "#1B4F72", "secondary": "#F39C12", "accent": "#E74C3C", "background": "#ECF0F1", "text": "#2C3E50", "overlay": "rgba(27, 79, 114, 0.9)"}',
  '{"hero": "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d", "interior": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", "signature": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f", "ambiance": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0", "gallery": ["https://images.unsplash.com/photo-1590846406792-0adc7f938f1d", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"]}',
  'Elegancia mediterránea frente al mar',
  'Capriccio es un oasis gastronómico donde la sofisticación mediterránea se encuentra con la calidez latinoamericana. Con vistas panorámicas al océano, ofrecemos una experiencia culinaria única que celebra los sabores del mar y la tierra.',
  '{"monday": "12:30 - 00:00", "tuesday": "12:30 - 00:00", "wednesday": "12:30 - 00:00", "thursday": "12:30 - 01:00", "friday": "12:30 - 02:00", "saturday": "12:30 - 02:00", "sunday": "12:30 - 23:00", "weekdays": "12:30 - 00:00", "weekends": "12:30 - 02:00"}',
  ARRAY['Mariscos frescos', 'Cocina mediterránea', 'Vista al mar', 'Coctelería de autor'],
  ARRAY['Elegante', 'Romántico', 'Vista al mar', 'Sofisticado'],
  '$$$-$$$$',
  '{"phone": "+56 9 8765 4321", "address": "Av. Costanera 456, Temuco", "email": "reservas@capriccio.cl"}',
  ARRAY['Vista al Mar', 'Terraza', 'Estacionamiento Valet', 'WiFi', 'Reservas Online'],
  '{"yearsOpen": 8, "dishes": 45, "chefs": 3, "awards": 5}',
  '{"reviews": 890, "googleRating": 4.8}',
  '{"instagram": "@capricciotco", "facebook": "CapriccioRestaurante"}',
  '[{"title": "Sunset Hour", "subtitle": "30% en coctelería", "schedule": "Mar-Dom 18:00-20:00", "color": "accent"}, {"title": "Menú Ejecutivo", "subtitle": "Entrada + Fondo + Postre", "schedule": "Lun-Vie 12:30-16:00", "color": "primary"}]'
) ON CONFLICT (id) DO NOTHING;

-- Ensure categories exist
INSERT INTO categories (slug, name, description, icon, display_order) VALUES
('drinks', 'Bebidas', 'Cócteles y bebidas especiales', '🍹', 1),
('appetizers', 'Entradas', 'Para comenzar tu experiencia', '🥗', 2),
('main_courses', 'Platos Principales', 'Nuestras especialidades', '🍽️', 3),
('side_dishes', 'Acompañamientos', 'Complementos perfectos', '🥔', 4),
('spirits', 'Destilados', 'Selección premium de licores', '🥃', 5),
('wines', 'Vinos', 'Carta de vinos selecta', '🍷', 6)
ON CONFLICT (slug) DO NOTHING;

-- Create function to simplify Capriccio product insertion
CREATE OR REPLACE FUNCTION insert_capriccio_product(
  p_legacy_id TEXT,
  p_name TEXT,
  p_description TEXT,
  p_price DECIMAL,
  p_category TEXT,
  p_image TEXT DEFAULT 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
  p_prep_time TEXT DEFAULT '15-20 min',
  p_calories INT DEFAULT NULL,
  p_ingredients TEXT[] DEFAULT '{}',
  p_allergens TEXT[] DEFAULT '{}',
  p_dietary TEXT[] DEFAULT '{}',
  p_chef_special BOOLEAN DEFAULT false,
  p_popular BOOLEAN DEFAULT false
) RETURNS void AS $$
BEGIN
  -- Insert product
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
    
  -- Create location relationship
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

-- DRINKS/COCKTAILS (11 items)
SELECT insert_capriccio_product('auguri', 'Auguri', 'Cóctel de autor con mezcla exclusiva de la casa', 6990, 'drinks', 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=400&fit=crop', '5-7 min', 180, ARRAY['Base de licor (ej. vodka, gin)', 'Frutas de estación', 'Hierbas aromáticas', 'Jarabes artesanales'], '{}', '{}', true, false);
SELECT insert_capriccio_product('capriccio-cocktail', 'Capriccio', 'Cóctel signature refrescante con toques mediterráneos de romero y naranja, evocando la brisa marina.', 6990, 'drinks', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '5-7 min', 190, ARRAY['Base de licor (ej. ron, pisco)', 'Cítricos', 'Especias mediterráneas (ej. romero)', 'Jarabe de naranja'], '{}', '{}', true, false);
SELECT insert_capriccio_product('sour', 'Sour', 'Clásico cóctel sour, perfectamente equilibrado con pisco o whisky, jugo de limón fresco, azúcar y un toque de amargo de angostura.', 5000, 'drinks', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=400&fit=crop', '3-5 min', 150, ARRAY['Pisco o whisky', 'Jugo de limón', 'Azúcar', 'Clara de huevo', 'Amargo de angostura'], ARRAY['Huevos'], '{}', false, true);
SELECT insert_capriccio_product('piccione', 'Piccione', 'Cóctel refrescante a base de vodka con vibrantes notas cítricas y un sutil toque de menta, ideal para el verano.', 6290, 'drinks', 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop', '5 min', 170, ARRAY['Base de vodka', 'Cítricos frescos', 'Toque de menta'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('espresso-martini', 'Espresso Martini', 'Intenso y sofisticado cóctel con vodka, café espresso recién hecho y licor de café, perfecto para los amantes del café.', 5000, 'drinks', 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=500&h=400&fit=crop', '3-5 min', 220, ARRAY['Vodka', 'Espresso', 'Licor de café', 'Azúcar'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('limoncello-spritz', 'Limoncello Spritz', 'Refrescante spritz con el auténtico limoncello italiano, prosecco y agua con gas, decorado con una rodaja de limón.', 5000, 'drinks', 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop', '3 min', 140, ARRAY['Limoncello', 'Prosecco', 'Agua con gas', 'Rodaja de limón'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('old-fashioned', 'Old Fashioned', 'El clásico cóctel con whisky bourbon, azúcar, amargo de angostura y un twist de naranja, una bebida atemporal.', 5000, 'drinks', 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&h=400&fit=crop', '3-5 min', 180, ARRAY['Whisky bourbon', 'Azúcar', 'Amargo de angostura', 'Naranja'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('ramazzoti-spritz', 'Ramazzoti Spritz', 'Spritz italiano con Ramazzotti, prosecco y un toque de naranja, una alternativa herbal al clásico Aperol Spritz.', 5000, 'drinks', 'https://images.unsplash.com/photo-1594631661960-34762327295a?w=500&h=400&fit=crop', '3 min', 160, ARRAY['Ramazzotti', 'Prosecco', 'Soda', 'Naranja'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('martini-sporco', 'Martini Sporco', 'Martini clásico con un toque de salmuera de aceituna, gin premium y vermut seco, la elegancia en una copa.', 5690, 'drinks', 'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?w=500&h=400&fit=crop', '3-5 min', 170, ARRAY['Gin premium', 'Vermut seco', 'Salmuera de aceituna', 'Aceitunas'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('negroni', 'Negroni', 'El equilibrio perfecto entre gin, Campari y vermut rosso, un clásico italiano con carácter fuerte y aromático.', 5000, 'drinks', 'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?w=500&h=400&fit=crop', '3 min', 190, ARRAY['Gin', 'Campari', 'Vermut rosso', 'Naranja'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('gin-tonic', 'Gin & Tonic', 'Refrescante gin tonic premium con selección de gin artesanal, agua tónica premium y botánicos frescos.', 5000, 'drinks', 'https://images.unsplash.com/photo-1576518720578-ea735ad6c51e?w=500&h=400&fit=crop', '3 min', 150, ARRAY['Gin artesanal', 'Agua tónica premium', 'Botánicos frescos'], '{}', ARRAY['vegan'], false, false);

-- APPETIZERS (2 items)
SELECT insert_capriccio_product('ceviche-pacifico', 'Ceviche Pacífico', 'Pescado fresco marinado en leche de tigre con ají amarillo, acompañado de camote, choclo y canchita, una explosión de sabores del mar.', 8500, 'appetizers', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=400&fit=crop', '15 min', 250, ARRAY['Pescado fresco', 'Leche de tigre', 'Ají amarillo', 'Camote', 'Choclo', 'Canchita', 'Cebolla morada', 'Cilantro'], ARRAY['Pescado'], ARRAY['gluten-free'], false, true);
SELECT insert_capriccio_product('bruschetta-picante-golfo', 'Bruschetta Picante del Golfo', 'Crujientes tostadas con tomate fresco, albahaca, camarones salteados al ajo y un toque de ají para un inicio vibrante.', 7300, 'appetizers', 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400&fit=crop', '10-12 min', 280, ARRAY['Pan artesanal', 'Tomate fresco', 'Albahaca', 'Camarones', 'Ajo', 'Ají', 'Aceite de oliva'], ARRAY['Gluten', 'Mariscos'], '{}', false, false);

-- Clean up function
DROP FUNCTION IF EXISTS insert_capriccio_product;