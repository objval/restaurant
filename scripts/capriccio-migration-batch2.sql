-- Capriccio Menu Migration - Batch 2: Main Courses, Sides & Spirits (25 items)
-- This script migrates main courses, side dishes and spirits for Capriccio restaurant

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

-- MAIN COURSES (2 items)
SELECT insert_capriccio_product('tabla-fuego-brasa', 'Tabla Fuego & Brasa', 'Selección premium de carnes a la parrilla: entraña, pollo marinado y chorizo artesanal, con chimichurri y salsas de la casa para 2-3 personas.', 28500, 'main_courses', 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop', '25-30 min', 1200, ARRAY['Entraña', 'Pollo marinado', 'Chorizo artesanal', 'Chimichurri', 'Salsas de la casa', 'Papas rústicas'], ARRAY['Gluten'], '{}', true, true);
SELECT insert_capriccio_product('tabla-mediterranea-fria', 'Tabla Mediterránea Fría', 'Exquisita selección de quesos importados, jamón serrano, aceitunas, frutos secos, miel de lavanda y pan artesanal, ideal para compartir.', 22900, 'main_courses', 'https://images.unsplash.com/photo-1626266799458-731a3b9cfca0?w=500&h=400&fit=crop', '10 min', 800, ARRAY['Quesos importados', 'Jamón serrano', 'Aceitunas variadas', 'Frutos secos', 'Miel de lavanda', 'Pan artesanal', 'Frutas de estación'], ARRAY['Gluten', 'Lácteos', 'Frutos secos'], '{}', false, true);

-- SIDE DISHES (1 item)
SELECT insert_capriccio_product('papas-bufalo', 'Papas Búfalo', 'Crujientes papas rústicas bañadas en nuestra salsa búfalo especial, con un toque picante y ranch para equilibrar.', 6500, 'side_dishes', 'https://images.unsplash.com/photo-1630431341973-a2b8d97fb7e3?w=500&h=400&fit=crop', '15 min', 420, ARRAY['Papas rústicas', 'Salsa búfalo', 'Salsa ranch', 'Especias'], ARRAY['Lácteos'], ARRAY['vegetarian'], false, true);

-- SPIRITS (19 items)
SELECT insert_capriccio_product('gin-tanqueray-london', 'Gin Tanqueray London', 'London Dry Gin con su característico sabor a enebro y cítricos, perfecto para un gin tonic clásico.', 5500, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Tanqueray London Dry'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('whiskey-ballentines', 'Whiskey Ballentines', 'Whisky escocés suave y equilibrado, con notas de miel y vainilla.', 5000, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Ballentines'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('whiskey-johnnie-double-black', 'Whiskey Johnnie Walker Double Black', 'Whisky premium con intenso sabor ahumado y especiado, envejecido en barricas de roble carbonizado.', 8000, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Johnnie Walker Double Black'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('gin-tanqueray-sevilla', 'Gin Tanqueray Sevilla', 'Gin con naranjas de Sevilla y otros cítricos, ideal para un gin tonic afrutado.', 6000, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Tanqueray Sevilla'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('gin-tanqueray-royal', 'Gin Tanqueray Royal', 'Gin premium con notas florales y cítricas, destilado con orquídeas francesas.', 6500, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Tanqueray Royale'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('tequila-don-julio', 'Tequila Don Julio', 'Tequila premium 100% agave azul, suave y con notas de vainilla y caramelo.', 7000, 'spirits', 'https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Tequila Don Julio'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('chivas-regal-12', 'Chivas Regal 12 años', 'Whisky escocés premium blend, suave y cremoso con notas de miel, vainilla y manzanas maduras.', 7500, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Chivas Regal 12'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('whiskey-johnnie-black', 'Whiskey Johnnie Walker Black Label', 'Whisky escocés 12 años con carácter ahumado y notas de frutos secos.', 6500, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Johnnie Walker Black Label'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('whiskey-jack-daniel-apple', 'Whiskey Jack Daniel''s Apple', 'Tennessee Whiskey con el sabor de manzanas verdes crujientes, perfecto para tragos refrescantes.', 6000, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Jack Daniel''s Apple'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('gin-beefeater', 'Gin Beefeater', 'London Dry Gin clásico con su perfil cítrico y de enebro, ideal para cócteles.', 5000, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Beefeater'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('jagermeister', 'Jägermeister', 'Licor de hierbas alemán con 56 botánicos diferentes, servido bien frío.', 5500, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 100, ARRAY['Jägermeister'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('drambuie', 'Drambuie', 'Licor escocés de whisky con miel de brezo, hierbas y especias, con más de 270 años de tradición.', 6000, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 106, ARRAY['Drambuie'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('ron-havana-7', 'Ron Havana Club 7 años', 'Ron cubano añejo con cuerpo complejo y notas de cacao, vainilla y frutas tropicales.', 6500, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Ron Havana Club 7 años'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('ron-havana-especial', 'Ron Havana Club Especial', 'Ron cubano dorado, perfecto para mojitos y otros cócteles cubanos clásicos.', 5000, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Ron Havana Club Especial'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('pisco-gobernador', 'Pisco El Gobernador', 'Pisco chileno premium con notas florales y frutales, ideal para pisco sour.', 6000, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Pisco El Gobernador'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('whisky-johnnie-red', 'Whisky Johnnie Walker Red Label', 'Whisky escocés vibrante con notas especiadas y ahumadas, perfecto para mezclar.', 5000, 'spirits', 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Whisky Johnnie Walker Red Label'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('pisco-alto-carmen', 'Pisco Alto del Carmen', 'Pisco chileno tradicional con más de 90 años de historia, suave y aromático.', 5000, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Pisco Alto del Carmen'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('pisco-mistral-nobel', 'Pisco Mistral Nobel', 'Pisco premium chileno con elegante presentación y sabor refinado.', 7000, 'spirits', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Pisco Mistral Nobel'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_capriccio_product('gin-hendricks', 'Gin Hendrick''s', 'Gin escocés infusionado con pétalos de rosa y pepino, único y refrescante.', 7500, 'spirits', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop', '2 min', 65, ARRAY['Gin Hendrick''s'], '{}', ARRAY['vegan'], false, true);

-- WINES (3 items)
SELECT insert_capriccio_product('chardon-rose-187', 'Chardón Rosé 187cc', 'Espumante rosé chileno en formato individual, fresco y afrutado con finas burbujas.', 3500, 'wines', 'https://images.unsplash.com/photo-1566995541428-f2246c17cda1?w=500&h=400&fit=crop', '2 min', 120, ARRAY['Espumante Rosé Chardón'], '{}', ARRAY['vegan'], false, false);
SELECT insert_capriccio_product('chardon-brut-750', 'Chardón Brut 750cc', 'Espumante brut chileno, elegante y seco con notas cítricas y tostadas.', 12000, 'wines', 'https://images.unsplash.com/photo-1566995541428-f2246c17cda1?w=500&h=400&fit=crop', '2 min', 125, ARRAY['Espumante Brut Chardón'], '{}', ARRAY['vegan'], false, true);
SELECT insert_capriccio_product('viu-manent-noble', 'Viu Manent Noble Semillón', 'Vino dulce de cosecha tardía, con intensos aromas a miel, damascos y cítricos confitados, perfecto para postres.', 18000, 'wines', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop', '2 min', 150, ARRAY['Vino Noble Semillón'], '{}', ARRAY['vegan'], false, false);

-- Clean up function
DROP FUNCTION IF EXISTS insert_capriccio_product;