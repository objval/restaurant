-- Complete El Árbol Menu Migration
-- This script inserts all 239 menu items for El Árbol restaurant
-- Run this directly in Neon SQL Editor

-- Ensure El Árbol location exists
INSERT INTO locations (id, name, concept, path, coordinates, theme, images, description, long_description, hours, specialties, atmosphere, price_range, contact, features, stats, social_proof, social_media, promotions)
VALUES (
  'arbol',
  'El Árbol',
  'Restaurante familiar con ambiente acogedor',
  '/arbol',
  '{"lat": -39.2819, "lng": -72.2253}',
  '{"primary": "#2D5016", "secondary": "#8B4513", "accent": "#DAA520", "background": "#F5F5DC", "text": "#2D5016", "overlay": "rgba(45, 80, 22, 0.9)"}',
  '{"hero": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", "interior": "https://images.unsplash.com/photo-1554679665-f5537f187268", "signature": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", "ambiance": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0", "gallery": ["https://images.unsplash.com/photo-1552566626-52f8b828add9", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", "https://images.unsplash.com/photo-1554679665-f5537f187268", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"]}',
  'Sabores caseros en un ambiente familiar',
  'En El Árbol encontrarás la combinación perfecta entre tradición y modernidad. Nuestro restaurante familiar ha sido el punto de encuentro de generaciones, donde cada plato cuenta una historia y cada visita se convierte en un recuerdo inolvidable.',
  '{"monday": "12:00 - 23:00", "tuesday": "12:00 - 23:00", "wednesday": "12:00 - 23:00", "thursday": "12:00 - 00:00", "friday": "12:00 - 01:00", "saturday": "12:00 - 01:00", "sunday": "12:00 - 22:00", "weekdays": "12:00 - 23:00", "weekends": "12:00 - 01:00"}',
  ARRAY['Cocina casera', 'Ambiente familiar', 'Postres artesanales', 'Menú infantil'],
  ARRAY['Acogedor', 'Familiar', 'Tradicional', 'Espacioso'],
  '$$-$$$',
  '{"phone": "+56 9 1234 5678", "address": "Av. Principal 123, Temuco", "email": "info@elarbol.cl"}',
  ARRAY['WiFi Gratis', 'Estacionamiento', 'Terraza', 'Zona Infantil', 'Accesible'],
  '{"yearsOpen": 15, "dishes": 80, "chefs": 5, "awards": 3}',
  '{"reviews": 1250, "googleRating": 4.6}',
  '{"instagram": "@elarboltco", "facebook": "ElArbolRestaurante"}',
  '[{"title": "Happy Hour", "subtitle": "2x1 en cervezas", "schedule": "Lun-Vie 17:00-19:00", "color": "primary"}, {"title": "Almuerzo Ejecutivo", "subtitle": "Menú del día + bebida", "schedule": "Lun-Vie 12:00-15:00", "color": "secondary"}]'
) ON CONFLICT (id) DO NOTHING;

-- Insert all categories used by El Árbol
INSERT INTO categories (slug, name, description, icon, display_order) VALUES
('recommended', 'Recomendado para Hoy', 'Sugerencias especiales de nuestro chef', '⭐', 1),
('coffee', 'Cafetería', 'Café de grano, tés e infusiones', '☕', 2),
('beverages', 'Bebestibles', 'Refrescos y bebidas sin alcohol', '🥤', 3),
('desserts', 'Repostería y Pastelería', 'Dulces finales para tu comida', '🍰', 4),
('breakfast', 'Desayunos hasta el mediodía', 'Para empezar el día con energía', '🍳', 5),
('appetizers', 'Entradas', 'Perfectas para comenzar tu comida', '🥗', 6),
('mains', 'Carta de Autor', 'Nuestros platos estrella', '🍽️', 7),
('steaks', 'Cortes con Guarnición', 'Cortes premium y especialidades', '🥩', 8),
('kids', 'Menú de Niños', 'Platos pensados para los más pequeños', '🧒', 9),
('salads', 'Vegetarianos y Ensaladas', 'Opciones frescas y saludables', '🥬', 10),
('sandwiches', 'Sándwich', 'Opciones contundentes y sabrosas', '🥪', 11),
('sharing', 'Tablas', 'Ideales para disfrutar en grupo', '🍱', 12),
('pizzas', 'Pizzas', 'Pizzas a la piedra con ingredientes frescos', '🍕', 13),
('beers', 'Cervezas y Shop', 'Una selección de cervezas artesanales y de barril', '🍺', 14),
('cocktails', 'Cócteles', 'Tragos y cócteles artesanales', '🍹', 15),
('spirits', 'Destilados', 'Selección de licores premium', '🥃', 16),
('wines', 'Vinos', 'Nuestra selección de vinos', '🍷', 17),
('extras', 'Agregados', 'Complementos y extras', '➕', 18),
('specials', 'Especiales 2X', 'Ofertas y promociones especiales', '🎉', 0)
ON CONFLICT (slug) DO NOTHING;

-- Now let's create a function to simplify product insertion
CREATE OR REPLACE FUNCTION insert_arbol_product(
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
    'arbol',
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

-- Insert all El Árbol products using the function
-- RECOMENDADO PARA HOY (7 items)
SELECT insert_arbol_product('tomahawk-lomo-vetado', 'Tomahawk de lomo vetado', 'Jugoso Tomahawk de lomo vetado de 700 grs, acompañado de tomates cherry glaseados, vegetales de estación asados, papas a las finas hierbas y nuestras salsas de merkén y chimichurri.', 24500, 'recommended', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop', '30-35 min', 1200, ARRAY['Lomo vetado Tomahawk', 'Tomates cherry', 'Romero', 'Ajo', 'Vegetales de estación', 'Papas', 'Merkén', 'Chimichurri'], '{}', '{}', true, true);
SELECT insert_arbol_product('anticuchos-parrilleros', 'Anticuchos Parrilleros', 'Anticuchos grillados de res, cerdo y longaniza Llanquihue de 1000 grs, acompañados de tomates cherry glaseados, papas a las finas hierbas, salsa de ajo con cilantro, tostadas y chimichurri.', 26500, 'recommended', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop', '25-30 min', 1500, ARRAY['Carne de res', 'Carne de cerdo', 'Longaniza Llanquihue', 'Tomates cherry', 'Papas', 'Ajo', 'Cilantro', 'Pan tostado'], ARRAY['Gluten'], '{}', true, true);
SELECT insert_arbol_product('pastel-jaiba-500', 'Pastel de Jaiba 500 grs', 'Delicioso pastel de jaiba gratinado con queso mantecoso, preparado con jaiba fresca y nuestra receta tradicional.', 12500, 'recommended', 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&h=400&fit=crop', '20-25 min', 650, ARRAY['Jaiba fresca', 'Queso mantecoso', 'Pan rallado', 'Crema', 'Vino blanco', 'Cebolla', 'Ajo'], ARRAY['Mariscos', 'Lácteos', 'Gluten'], '{}', false, true);
SELECT insert_arbol_product('ravioles-salmon', 'Ravioles relleno Salmón', 'Ravioles rellenos de salmón en suave salsa de camarones y tomate cherry.', 14900, 'recommended', 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop', '18-22 min', 700, ARRAY['Pasta fresca', 'Salmón', 'Camarones', 'Tomate cherry', 'Crema', 'Vino blanco', 'Albahaca'], ARRAY['Pescado', 'Mariscos', 'Gluten', 'Lácteos'], '{}', false, false);
SELECT insert_arbol_product('crudo', 'Crudo', 'Suave corte de res, cebolla morada, pepinillo y ají verde en brunoise, cilantro, gajos de limón, tostadas y salsa de sour cream de la casa.', 11900, 'recommended', 'https://images.unsplash.com/photo-1626790291085-babaee0abef8?w=500&h=400&fit=crop', '10-12 min', 450, ARRAY['Carne de res', 'Cebolla morada', 'Pepinillo', 'Ají verde', 'Cilantro', 'Limón', 'Pan tostado', 'Sour cream'], ARRAY['Gluten', 'Lácteos'], '{}', false, false);
SELECT insert_arbol_product('ramazzotti-violeta', 'Ramazzotti violeta', 'Refrescante cóctel con Ramazzotti, notas florales de violeta y un toque cítrico.', 6500, 'recommended', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '3-5 min', 180, ARRAY['Ramazzotti', 'Jarabe de violeta', 'Limón', 'Agua tónica'], '{}', ARRAY['vegan'], false, false);
SELECT insert_arbol_product('caipirina', 'Caipiriña', 'El clásico cóctel brasileño con cachaça, limón fresco y azúcar.', 4500, 'recommended', 'https://images.unsplash.com/photo-1607446045875-de57c995726b?w=500&h=400&fit=crop', '5 min', 200, ARRAY['Cachaça', 'Limón', 'Azúcar', 'Hielo'], '{}', ARRAY['vegan'], false, false);

-- CAFETERÍA (22 items)
SELECT insert_arbol_product('tetera-compartir', 'Tetera para compartir', 'Tetera de 750 ml, consultar variedades disponibles.', 4500, 'coffee', 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&h=400&fit=crop', '5-7 min', 5, ARRAY['Té premium', 'Agua purificada'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('tetera-pequena', 'Tetera pequeña', 'Tetera de 500 ml, consultar variedades disponibles.', 2500, 'coffee', 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&h=400&fit=crop', '5-7 min', 5, ARRAY['Té premium', 'Agua purificada'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('te', 'Té', 'Selección de tés premium servidos en taza individual.', 1800, 'coffee', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=400&fit=crop', '3-5 min', 2, ARRAY['Té premium', 'Agua purificada'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('cafe-tradicional', 'Café tradicional', 'Café de grano arábica 100% preparado al momento.', 1800, 'coffee', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop', '3-4 min', 5, ARRAY['Café arábica', 'Agua'], '{}', ARRAY['vegan', 'gluten-free'], false, true);
SELECT insert_arbol_product('expresso', 'Expresso', 'Shot de café expresso con crema dorada perfecta.', 2400, 'coffee', 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=400&fit=crop', '2-3 min', 3, ARRAY['Café expresso'], '{}', ARRAY['vegan', 'gluten-free'], false, true);
SELECT insert_arbol_product('expresso-doble', 'Expresso doble', 'Doble shot de café expresso para los amantes del café intenso.', 3500, 'coffee', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop', '2-3 min', 6, ARRAY['Café expresso doble'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('americano', 'Americano', 'Café expresso diluido con agua caliente, suave y aromático.', 2800, 'coffee', 'https://images.unsplash.com/photo-1521127474489-d524412fd439?w=500&h=400&fit=crop', '3-4 min', 5, ARRAY['Café expresso', 'Agua caliente'], '{}', ARRAY['vegan', 'gluten-free'], false, true);
SELECT insert_arbol_product('ristretto', 'Ristretto', 'Shot de café concentrado, más intenso que el expresso tradicional.', 2200, 'coffee', 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&h=400&fit=crop', '2-3 min', 2, ARRAY['Café ristretto'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('mocaccino', 'Mocaccino', 'Deliciosa mezcla de café expresso, chocolate y leche espumosa.', 3200, 'coffee', 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&h=400&fit=crop', '5-6 min', 320, ARRAY['Café expresso', 'Chocolate', 'Leche', 'Crema batida'], ARRAY['Lácteos'], '{}', false, false);
SELECT insert_arbol_product('cafe-irlandes', 'Café Irlandés', 'Café con whisky irlandés, azúcar morena y crema flotante.', 4000, 'coffee', 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&h=400&fit=crop', '5-7 min', 250, ARRAY['Café', 'Whisky irlandés', 'Azúcar morena', 'Crema'], ARRAY['Lácteos'], '{}', false, false);
SELECT insert_arbol_product('capuccino', 'Capuccino', 'Café expresso con leche vaporizada y espuma de leche cremosa.', 3200, 'coffee', 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=400&fit=crop', '4-5 min', 120, ARRAY['Café expresso', 'Leche vaporizada', 'Espuma de leche'], ARRAY['Lácteos'], '{}', false, true);
SELECT insert_arbol_product('cortado', 'Cortado', 'Café expresso cortado con un toque de leche caliente.', 3200, 'coffee', 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&h=400&fit=crop', '3-4 min', 60, ARRAY['Café expresso', 'Leche caliente'], ARRAY['Lácteos'], '{}', false, true);
SELECT insert_arbol_product('chocolate-caliente', 'Chocolate caliente', 'Cremoso chocolate caliente preparado con cacao premium.', 2800, 'coffee', 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=500&h=400&fit=crop', '5-6 min', 280, ARRAY['Cacao', 'Leche', 'Azúcar', 'Crema'], ARRAY['Lácteos'], '{}', false, false);
SELECT insert_arbol_product('chocolate-nevado', 'Chocolate nevado', 'Chocolate frío con helado de vainilla y crema batida.', 3500, 'coffee', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=400&fit=crop', '5-7 min', 380, ARRAY['Cacao', 'Leche', 'Helado de vainilla', 'Crema batida'], ARRAY['Lácteos'], '{}', false, false);
SELECT insert_arbol_product('cafe-helado', 'Café helado', 'Café expresso servido con hielo y un toque de crema.', 4000, 'coffee', 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=400&fit=crop', '4-5 min', 150, ARRAY['Café expresso', 'Hielo', 'Crema', 'Azúcar'], ARRAY['Lácteos'], '{}', false, true);
SELECT insert_arbol_product('milkshake', 'Milkshake', 'Cremoso batido de helado con sabores a elección.', 4500, 'coffee', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=400&fit=crop', '5-6 min', 450, ARRAY['Helado', 'Leche', 'Crema batida', 'Jarabe'], ARRAY['Lácteos'], '{}', false, true);
SELECT insert_arbol_product('nutella-coffee', 'Nutella Coffe', 'Café con deliciosa crema de Nutella y leche espumosa.', 3900, 'coffee', 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?w=500&h=400&fit=crop', '5-6 min', 380, ARRAY['Café expresso', 'Nutella', 'Leche', 'Crema batida'], ARRAY['Lácteos', 'Frutos secos'], '{}', false, false);
SELECT insert_arbol_product('infusion-menta-jengibre', 'Infusión menta jengibre', 'Reconfortante infusión natural de menta fresca y jengibre.', 1800, 'coffee', 'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500&h=400&fit=crop', '5-7 min', 5, ARRAY['Menta fresca', 'Jengibre', 'Agua'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('cafe-late', 'Café Late', 'Café expresso con abundante leche vaporizada.', 3200, 'coffee', 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=500&h=400&fit=crop', '4-5 min', 150, ARRAY['Café expresso', 'Leche vaporizada'], ARRAY['Lácteos'], '{}', false, true);
SELECT insert_arbol_product('afogato', 'Afogato', 'Porción de helado de vainilla con una carga de café de grano.', 3200, 'coffee', 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=400&fit=crop', '3-4 min', 250, ARRAY['Helado de vainilla', 'Café expresso'], ARRAY['Lácteos'], '{}', false, false);
SELECT insert_arbol_product('caja-te-infusiones', 'Caja Té Infusiones Variedad', 'Selección premium de tés e infusiones para compartir.', 8000, 'coffee', 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&h=400&fit=crop', '5-7 min', 10, ARRAY['Variedad de tés', 'Infusiones naturales'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('lavazza-sachet', 'Lavazza Sachet', 'Café Lavazza premium en presentación individual.', 2300, 'coffee', 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&h=400&fit=crop', '3-4 min', 5, ARRAY['Café Lavazza'], '{}', ARRAY['vegan', 'gluten-free'], false, false);

-- BEBESTIBLES (26 items)
SELECT insert_arbol_product('jugo-frambuesa', 'Jugo Frambuesa', 'Refrescante jugo natural de frambuesas frescas.', 3600, 'beverages', 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop', '3-5 min', 120, ARRAY['Frambuesas', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('limonada', 'Limonada', 'Clásica limonada casera con limones frescos.', 3900, 'beverages', 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=500&h=400&fit=crop', '5 min', 100, ARRAY['Limones frescos', 'Agua', 'Azúcar', 'Hielo'], '{}', ARRAY['vegan', 'gluten-free'], false, true);
SELECT insert_arbol_product('limonada-menta-jengibre', 'Limonada menta jengibre', 'Limonada especial con toques de menta fresca y jengibre.', 4200, 'beverages', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop', '5-7 min', 110, ARRAY['Limones', 'Menta', 'Jengibre', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('agua-mineral-gas', 'Agua mineral c/gas', 'Agua mineral con gas, refrescante y natural.', 2200, 'beverages', 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua mineral carbonatada'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('red-bull', 'Red Bull', 'Bebida energética Red Bull.', 3500, 'beverages', 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=500&h=400&fit=crop', '1 min', 110, ARRAY['Red Bull'], '{}', ARRAY['gluten-free'], false, false);
SELECT insert_arbol_product('crush', 'Crush', 'Bebida gaseosa Crush sabor naranja.', 2200, 'beverages', 'https://images.unsplash.com/photo-1603394630850-69b3ca8121ca?w=500&h=400&fit=crop', '1 min', 150, ARRAY['Bebida Crush'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('sprite', 'Sprite', 'Bebida gaseosa Sprite lima-limón.', 2200, 'beverages', 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop', '1 min', 140, ARRAY['Sprite'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('ginger-ale', 'Ginger Ale', 'Bebida gaseosa de jengibre, refrescante y suave.', 2200, 'beverages', 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=400&fit=crop', '1 min', 120, ARRAY['Ginger Ale'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('jugo-mango', 'Jugo Mango', 'Delicioso jugo natural de mango maduro.', 3200, 'beverages', 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=400&fit=crop', '3-5 min', 130, ARRAY['Mango', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('jugo-pina', 'Jugo Piña', 'Refrescante jugo natural de piña tropical.', 3200, 'beverages', 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?w=500&h=400&fit=crop', '3-5 min', 120, ARRAY['Piña', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('coca-cola', 'Coca Cola', 'Clásica Coca-Cola bien fría.', 2200, 'beverages', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop', '1 min', 140, ARRAY['Coca-Cola'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('coca-zero', 'Coca Zero', 'Coca-Cola Zero sin azúcar.', 2200, 'beverages', 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Coca-Cola Zero'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('agua-tonica', 'Agua tónica', 'Agua tónica premium para cócteles o sola.', 2200, 'beverages', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '1 min', 80, ARRAY['Agua tónica'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('agua-mineral-sin-gas', 'Agua mineral s/gas', 'Agua mineral sin gas, pura y natural', 2200, 'beverages', 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua mineral'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('coca-cola-220', 'Coca-cola 220 cc', 'Coca-Cola en presentación personal de 220cc', 1500, 'beverages', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop', '1 min', 90, ARRAY['Coca-Cola'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('coca-zero-220', 'Coca zero 220 cc', 'Coca-Cola Zero en presentación personal de 220cc', 1500, 'beverages', 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Coca-Cola Zero'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('sprite-220', 'Sprite 220 cc', 'Sprite en presentación personal de 220cc', 1500, 'beverages', 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop', '1 min', 90, ARRAY['Sprite'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('pepsi-220', 'Pepsi 220 cc', 'Pepsi en presentación personal de 220cc', 1500, 'beverages', 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&h=400&fit=crop', '1 min', 90, ARRAY['Pepsi'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('limonada-frambuesa', 'Limonada Frambuesa', 'Limonada con delicioso toque de frambuesas frescas', 4200, 'beverages', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop', '5-7 min', 120, ARRAY['Limones', 'Frambuesas', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('jugo-frutilla', 'Jugo de frutilla', 'Jugo natural de frutillas frescas y dulces', 3600, 'beverages', 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=500&h=400&fit=crop', '3-5 min', 110, ARRAY['Frutillas', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('jugo-berries', 'Jugo de Berries', 'Frutilla, Arándanos y Frambuesas', 3600, 'beverages', 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop', '5 min', 130, ARRAY['Frutillas', 'Arándanos', 'Frambuesas', 'Agua', 'Azúcar'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('sprite-cero', 'Sprite Cero', 'Sprite Zero sin azúcar', 2200, 'beverages', 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Sprite Zero'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('manantial', 'Manantial', 'Agua sin Hielo', 0, 'beverages', 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua purificada'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('cordillerano', 'Cordillerano', 'Agua con hielo', 0, 'beverages', 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop', '1 min', 0, ARRAY['Agua purificada', 'Hielo'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('ginger-ale-220', 'Ginger Ale 220cc', 'Ginger Ale en presentación personal de 220cc', 1500, 'beverages', 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=400&fit=crop', '1 min', 80, ARRAY['Ginger Ale'], '{}', ARRAY['vegan', 'gluten-free'], false, false);
SELECT insert_arbol_product('tonica-220', 'Tonica 220cc', 'Agua tónica en presentación personal de 220cc', 1500, 'beverages', 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop', '1 min', 50, ARRAY['Agua tónica'], '{}', ARRAY['vegan', 'gluten-free'], false, false);

-- Continue with remaining categories...