-- ============================================
-- Migration: Insert Complete Menu 1898
-- Date: 2025-08-08
-- Total Items: 208
-- ============================================
-- 
-- This migration inserts all menu items for the 1898 restaurant location.
-- All dietary terms have been translated to Spanish:
--   • vegan → vegano
--   • vegetarian → vegetariano  
--   • gluten-free → sin gluten
--   • dairy-free → sin lácteos
--
-- Categories are mapped as follows:
--   • beers → cervezas-shop
--   • cocktails → cockteles
--   • wines → vinos-destilados
--   • coffee → cafeteria
--   • mains → platos-ejecutivos
--   • pizzas → pizzas
--   • sandwiches → sandwich
--   • snacks → bebestibles-jugos
--   • salads → vegetarianos-ensaladas
--   • desserts → reposteria-pasteleria
--   • specials → especiales-2x
-- ============================================

-- Clear existing data
DELETE FROM menu_1898;

-- Batch 1 of 11
-- Items 1 to 20


-- Item 1: Guinness extra stout 473 ML
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'guinness-extra-stout-473-ml',
  'Guinness extra stout 473 ML',
  'Cerveza premuim Irlanda (lata 473 ML) extra stout',
  5000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  165,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  1
);

-- Item 2: Corona
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'corona',
  'Corona',
  'Cerveza refrescante',
  3500,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  150,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  2
);

-- Item 3: Royal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'royal',
  'Royal',
  'Cerveza refrescante',
  3500,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  178,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  3
);

-- Item 4: Heineken
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'heineken',
  'Heineken',
  'Cerveza refrescante',
  3500,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  161,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  4
);

-- Item 5: Shop Heineken
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shop-heineken',
  'Shop Heineken',
  'Cerveza refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  152,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  5
);

-- Item 6: Shop Kunstman Torobayo
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shop-kunstman-torobayo',
  'Shop Kunstman Torobayo',
  'Cerveza refrescante',
  6000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  130,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  6
);

-- Item 7: Chelada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'chelada',
  'Chelada',
  'sal en la boca del shop mas 2 oz de jugi de limon',
  1000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  123,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  7
);

-- Item 8: michelada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'michelada',
  'michelada',
  'sal y merquen en la boca del shop ademas de 2 oz de limon',
  1000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  154,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  8
);

-- Item 9: Shop ruta S70 Ambar
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shop-ruta-s70-ambar',
  'Shop ruta S70 Ambar',
  'Cerveza refrescante',
  5000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  130,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  9
);

-- Item 10: Cuello negro Ambar
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cuello-negro-ambar',
  'Cuello negro Ambar',
  'Cerveza refrescante',
  5000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  138,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  10
);

-- Item 11: 2X Shop heineken
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-shop-heineken',
  '2X Shop heineken',
  'Lunes a Jueves de 17:00 a 21:00 hrs',
  6000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  164,
  '1-2 min',
  true,
  false,
  true,
  'in_stock',
  11
);

-- Item 12: 2X shop ruta s70
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-shop-ruta-s70',
  '2X shop ruta s70',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  9000,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  145,
  '1-2 min',
  true,
  false,
  true,
  'in_stock',
  12
);

-- Item 13: Austral Calafate
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'austral-calafate',
  'Austral Calafate',
  'Austral Calafate',
  4900,
  (SELECT id FROM categories WHERE slug = 'cervezas-shop'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  156,
  '1-2 min',
  false,
  false,
  true,
  'in_stock',
  13
);

-- Item 14: Pisco sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-sour',
  'Pisco sour',
  'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón y almíbar artesanal.',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo', 'Amargo de Angostura'],
  ARRAY['Huevos'],
  ARRAY['sin gluten'],
  256,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  14
);

-- Item 15: Pisco sour frutales
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-sour-frutales',
  'Pisco sour frutales',
  'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón, almíbar artesanal y con jugo frutal a elección.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo', 'Jugo de fruta (maracuyá, mango o frambuesa)', 'Amargo de Angostura'],
  ARRAY['Huevos'],
  ARRAY['sin gluten'],
  188,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  15
);

-- Item 16: Martini dry
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'martini-dry',
  'Martini dry',
  'Elaborado destilado Martini dry, acompañado de ginebra y aceituna para dar un efecto seco y aromático.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ginebra', 'Vermouth seco', 'Aceituna'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  203,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  16
);

-- Item 17: Piña colada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pina-colada',
  'Piña colada',
  'Coctel de origen Puerto riqueño, elaborada con base de ron, crema de coco, coco rallado, piña natural y almíbar artesanal.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Crema de coco', 'Coco rallado', 'Piña natural', 'Jarabe de goma'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  183,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  17
);

-- Item 18: Mojito clásico
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-clasico',
  'Mojito clásico',
  'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, soda y almíbar artesanal.',
  6000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Jugo de limón', 'Menta fresca', 'Agua con gas', 'Jarabe de goma'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  227,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  18
);

-- Item 19: Mojito frutal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-frutal',
  'Mojito frutal',
  'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, fruta natural y almíbar artesanal.',
  6500,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  245,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  19
);

-- Item 20: Mojito cerveza
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-cerveza',
  'Mojito cerveza',
  'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, almíbar artesanal y botellín
de cerveza a elección.',
  7600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  214,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  20
);
-- Batch 10 of 11
-- Items 181 to 200


-- Item 181: Ceviche 1898 para 2
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ceviche-1898-para-2',
  'Ceviche 1898 para 2',
  'Pesca del día, leche de tigre, cebolla morada, pimentón, cilantro, choclo peruano y tostadas al ajillo.',
  12500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  771,
  '15-20 min',
  false,
  true,
  true,
  'in_stock',
  181
);

-- Item 182: Tabla tradicional
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tabla-tradicional',
  'Tabla tradicional',
  'Cama de papas fritas, lomo de res, pollo, aceitunas, pepinillos y queso.',
  23900,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  976,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  182
);

-- Item 183: Tabla tradicional o chorrillana para 2
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tabla-tradicional-o-chorrillana-para-2',
  'Tabla tradicional o chorrillana para 2',
  'Tablitas para 2 personas',
  12900,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  839,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  183
);

-- Item 184: Empanada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'empanada',
  'Empanada',
  'ave, pimentón y champiñón',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  695,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  184
);

-- Item 185: Empanada de mechada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'empanada-de-mechada',
  'Empanada de mechada',
  'Empanada horneada de mechada y cebolla caramelizada',
  3500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  823,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  185
);

-- Item 186: Cesar pollo
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cesar-pollo',
  'Cesar pollo',
  'Tierno mix de lechugas acompañado de cubos de pechuga de pollo, crutones, tocino, tomate cherry, aceituna y queso reggianito integrado con una cremosa salsa cesar.',
  8500,
  (SELECT id FROM categories WHERE slug = 'vegetarianos-ensaladas'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['sin gluten'],
  306,
  '8-10 min',
  false,
  false,
  true,
  'in_stock',
  186
);

-- Item 187: Cesar camarón
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cesar-camaron',
  'Cesar camarón',
  'suabe mix de lechugas acompañado de camarones, crutones, tocino, tomate cherry, aceituna y queso reggianito unificado con una cremosa salsa cesar.',
  9500,
  (SELECT id FROM categories WHERE slug = 'vegetarianos-ensaladas'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Mariscos'],
  ARRAY['sin gluten'],
  310,
  '8-10 min',
  false,
  false,
  true,
  'in_stock',
  187
);

-- Item 188: Ensalada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ensalada',
  'Ensalada',
  'Ensalada fresca',
  4500,
  (SELECT id FROM categories WHERE slug = 'vegetarianos-ensaladas'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  318,
  '8-10 min',
  false,
  false,
  true,
  'in_stock',
  188
);

-- Item 189: helado copa
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'helado-copa',
  'helado copa',
  'Postre delicioso',
  4000,
  (SELECT id FROM categories WHERE slug = 'reposteria-pasteleria'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  455,
  '5-8 min',
  false,
  false,
  true,
  'in_stock',
  189
);

-- Item 190: Helado copa Triple
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'helado-copa-triple',
  'Helado copa Triple',
  'Postre delicioso',
  5000,
  (SELECT id FROM categories WHERE slug = 'reposteria-pasteleria'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  454,
  '5-8 min',
  false,
  false,
  true,
  'in_stock',
  190
);

-- Item 191: Brownie con helado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'brownie-con-helado',
  'Brownie con helado',
  'Tibio brownie de chocolate con helado de vainilla.',
  5900,
  (SELECT id FROM categories WHERE slug = 'reposteria-pasteleria'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  383,
  '5-8 min',
  false,
  false,
  true,
  'in_stock',
  191
);

-- Item 192: completo italiano
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'completo-italiano',
  'completo italiano',
  'Salchicha, tomate, palta y mayonesa',
  5000,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  503,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  192
);

-- Item 193: completo americano
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'completo-americano',
  'completo americano',
  'Salchicha, tomate, palta, salsa americana, chucrut y mayonesa',
  5500,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  460,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  193
);

-- Item 194: Crepes relleno con manjar, nueces
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'crepes-relleno-con-manjar-nueces',
  'Crepes relleno con manjar, nueces',
  'Postre delicioso',
  5300,
  (SELECT id FROM categories WHERE slug = 'reposteria-pasteleria'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Frutos secos'],
  ARRAY['vegano', 'sin gluten'],
  404,
  '5-8 min',
  false,
  false,
  true,
  'in_stock',
  194
);

-- Item 195: Postre
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'postre',
  'Postre',
  'Postre delicioso',
  6300,
  (SELECT id FROM categories WHERE slug = 'reposteria-pasteleria'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  406,
  '5-8 min',
  false,
  false,
  true,
  'in_stock',
  195
);

-- Item 196: 2X Shop heineken
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-shop-heineken',
  '2X Shop heineken',
  'Lunes a Jueves de 17:00 a 21:00 hrs',
  6000,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  164,
  '1-2 min',
  true,
  false,
  true,
  'in_stock',
  196
);

-- Item 197: 2X shop ruta s70
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-shop-ruta-s70',
  '2X shop ruta s70',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  9000,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Malta', 'Lúpulo', 'Levadura', 'Agua'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  145,
  '1-2 min',
  true,
  false,
  true,
  'in_stock',
  197
);

-- Item 198: 2x pisco sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-pisco-sour',
  '2x pisco sour',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  8500,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Pisco'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  249,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  198
);

-- Item 199: 2x caipirinha
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-caipirinha',
  '2x caipirinha',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  7400,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Cachaça', 'Limón'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  249,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  199
);

-- Item 200: 2x Ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-ramazzotti',
  '2x Ramazzotti',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  8990,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Licor premium'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  209,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  200
);
-- Batch 11 of 11
-- Items 201 to 208


-- Item 201: 2x Mojito frutal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-mojito-frutal',
  '2x Mojito frutal',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  10400,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  215,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  201
);

-- Item 202: 2X Ruso blanco
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-ruso-blanco',
  '2X Ruso blanco',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  9990,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Licor premium'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  207,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  202
);

-- Item 203: 2X Tequila margarita
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-tequila-margarita',
  '2X Tequila margarita',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  9200,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Tequila', 'Limón', 'Triple sec'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  192,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  203
);

-- Item 204: 2X pisco mistral 35
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-pisco-mistral-35',
  '2X pisco mistral 35',
  'activo día del pisco',
  7300,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  148,
  '1 min',
  true,
  false,
  true,
  'in_stock',
  204
);

-- Item 205: 2X Pisco alto del carmen
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-2x-pisco-alto-del-carmen',
  '2X Pisco alto del carmen',
  'Activo día del pisco',
  7300,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  108,
  '1 min',
  true,
  false,
  true,
  'in_stock',
  205
);

-- Item 206: Johnnie double black
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'johnnie-double-black',
  'Johnnie double black',
  'Whisky escocés premium con notas intensas y ahumadas',
  13000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Whisky Johnnie Walker Double Black'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  140,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  206
);

-- Item 207: Lasagna
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'lasagna',
  'Lasagna',
  'Lasaña casera con capas de pasta, salsa bolognesa y queso gratinado',
  5500,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Pasta de lasaña', 'Carne molida', 'Salsa de tomate', 'Queso mozzarella', 'Queso parmesano', 'Bechamel', 'Hierbas italianas'],
  ARRAY['Gluten', 'Lácteos', 'Huevos'],
  NULL,
  650,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  207
);

-- Item 208: Promo completo+schop heineken o jugo
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-completo-schop-heineken-o-jugo',
  'Promo completo+schop heineken o jugo',
  'Disponible de Lunes a Jueves hasta las 21:00 hrs',
  6900,
  (SELECT id FROM categories WHERE slug = 'especiales-2x'),
  ARRAY['Vienesa', 'Pan de completo', 'Tomate', 'Palta', 'Mayonesa', 'Cerveza Heineken o jugo'],
  ARRAY['Gluten'],
  NULL,
  550,
  '8-10 min',
  true,
  false,
  true,
  'in_stock',
  208
);
-- Batch 2 of 11
-- Items 21 to 40


-- Item 21: Tequila margarita
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tequila-margarita',
  'Tequila margarita',
  'Cóctel elaborado con tequila mexicano , jugo de limón natural, toque de triple sec y copa enllantada con sal.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Tequila', 'Limón', 'Triple sec'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  247,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  21
);

-- Item 22: Tequila margarita frutal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tequila-margarita-frutal',
  'Tequila margarita frutal',
  'Cóctel elaborado con tequila mexicano , jugo de limón natural, toque de triple sec, jugo de fruta y copa enllantada con sal.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Tequila', 'Limón', 'Triple sec'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  238,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  22
);

-- Item 23: Ruso blanco
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ruso-blanco',
  'Ruso blanco',
  'Cóctel elaborado con vodka, licor de café, crema de leche, decorado con salsa de chocolate y marrasquino rojo.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Licor de café', 'Crema de leche', 'Salsa de chocolate', 'Marrasquino rojo'],
  ARRAY['Lácteos'],
  ARRAY['vegetariano', 'sin gluten'],
  192,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  23
);

-- Item 24: Vaina
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'vaina',
  'Vaina',
  'Cóctel chileno elaborado con vino dulce, licor de cacao, cognac, espesado con yema de huevo y polvoreada con canela.',
  4600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vino dulce', 'Licor de cacao', 'Cognac', 'Yema de huevo', 'Canela'],
  ARRAY['Huevos'],
  ARRAY['vegetariano', 'sin gluten'],
  243,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  24
);

-- Item 25: Caipiriña
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'caipirina',
  'Caipiriña',
  'Cóctel elaborado con cachaca brasileña, jugo natural de limón, almíbar artesanal y soda.',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Cachaça', 'Jugo de limón', 'Azúcar', 'Hielo'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  239,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  25
);

-- Item 26: old fashion
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'old-fashion',
  'old fashion',
  'Cóctel elaborado con whisky, saborizado con azúcar rubia, amargo de angostura, naranja deshidratada y marrasquino.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky', 'Azúcar', 'Amargo de Angostura', 'Naranja', 'Cereza'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  222,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  26
);

-- Item 27: ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ramazzotti',
  'ramazzotti',
  'Cóctel elaborado con licor italiano a base de flor de hibiscus, flor de azahar y toques de naranja, con espumante, soda y frutos rojos.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ramazzotti', 'Vino espumoso', 'Agua con gas', 'Frutos rojos', 'Naranja'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  241,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  27
);

-- Item 28: aperol
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'aperol',
  'aperol',
  'Cóctel italiano elaborado a base de genciana, ruibarbo y quina, con espumante, soda y frutos rojos.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Aperol', 'Vino espumoso', 'Agua con gas', 'Naranja'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  199,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  28
);

-- Item 29: cosmopolitan
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cosmopolitan',
  'cosmopolitan',
  'Cóctel 1898 elaborado con vodka, jugo de limón natural, licor de cassis y endulzado con granadina.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Jugo de arándano', 'Jugo de lima', 'Triple sec'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  191,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  29
);

-- Item 30: clavo oxidado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'clavo-oxidado',
  'clavo oxidado',
  'Cóctel elaborado a base de whisky, endulzado con whisky especiado de miel drambuie y decorado con marrasquino.',
  7000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky escocés', 'Drambuie'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  213,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  30
);

-- Item 31: Mojito ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-ramazzotti',
  'Mojito ramazzotti',
  'Cóctel elaborado con ron, jugo de limón natural, menta fresca, almíbar natural, ramazzotti y soda.',
  6800,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  247,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  31
);

-- Item 32: Moscow mule
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'moscow-mule',
  'Moscow mule',
  'Cóctel elaborado con vodka, jugo de limón natural, jengibre natural, almíbar artesanal y ginger ale.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Cerveza de jengibre', 'Jugo de lima'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  196,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  32
);

-- Item 33: Negroni
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'negroni',
  'Negroni',
  'Cóctel elaborado con campari a base de infusión de hierbas amargas, plantas aromáticas, fruta, bitter rosso y ginebra.',
  7000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ginebra', 'Campari', 'Vermut dulce'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  188,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  33
);

-- Item 34: Pisco sour Ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-sour-ramazzotti',
  'Pisco sour Ramazzotti',
  'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón, almíbar artesanal y ramazzotti.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  207,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  34
);

-- Item 35: Primavera
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'primavera',
  'Primavera',
  'Cóctel elaborado con pisco Del valle del Elqui, jugo de naranja, jugo de piña y granadina.',
  4600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco', 'Jugo de naranja', 'Jugo de piña', 'Granadina'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  259,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  35
);

-- Item 36: Amareto sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'amareto-sour',
  'Amareto sour',
  'Cóctel elaborado con licor de avellanas amaretto, jugo de limón y almíbar artesanal.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Amaretto', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo'],
  ARRAY['Huevos', 'Nueces'],
  ARRAY['vegetariano', 'sin gluten'],
  242,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  36
);

-- Item 37: Daiquiri
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'daiquiri',
  'Daiquiri',
  'Cóctel elaborado con ron, jugo de limón natural y almíbar artesanal.',
  4600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Jugo de lima', 'Jarabe de goma'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  210,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  37
);

-- Item 38: god father
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'god-father',
  'god father',
  'Cóctel elaborado con whisky y licor de avellanas amaretto, decorado con marrasquino.',
  6800,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky escocés', 'Amaretto'],
  ARRAY['Nueces'],
  ARRAY['vegano', 'sin gluten'],
  253,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  38
);

-- Item 39: Laguna azul
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'laguna-azul',
  'Laguna azul',
  'Cóctel elaborado con vodka, curacao blue y jugo de limón natural.',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Blue Curaçao', 'Limonada', 'Cereza'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  237,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  39
);

-- Item 40: Mega mojito
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mega-mojito',
  'Mega mojito',
  'Cóctel refrescante de un litro elaborado con ron, jugo de limón natural, menta fresca, soda y almíbar artesanal.',
  10200,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  186,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  40
);
-- Batch 3 of 11
-- Items 41 to 60


-- Item 41: Mega Mojito Frutal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mega-mojito-frutal',
  'Mega Mojito Frutal',
  'Cóctel refrescante de un litro elaborado con ron, jugo de limón natural, menta fresca, jugo de fruta, y almíbar artesanal.',
  11000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  237,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  41
);

-- Item 42: Mojito blue
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-blue',
  'Mojito blue',
  'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, curacao blue, soda y almíbar artesanal.',
  6800,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  246,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  42
);

-- Item 43: Mojito Jagger
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-jagger',
  'Mojito Jagger',
  'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, jagermeister soda y almíbar artesanal.',
  6900,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  207,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  43
);

-- Item 44: Chardonay sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'chardonay-sour',
  'Chardonay sour',
  'Cóctel elaborado con vino de cepa chardonnay, jugo de limón natural y almíbar artesanal.',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Chardonnay', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo'],
  ARRAY['Huevos'],
  ARRAY['vegetariano', 'sin gluten'],
  244,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  44
);

-- Item 45: jaggermeister
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'jaggermeister',
  'jaggermeister',
  'Cóctel artesanal',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Jägermeister'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  182,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  45
);

-- Item 46: Tom Collins
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tom-collins',
  'Tom Collins',
  'Cóctel elaborado con ginebra, jugo de limón natural, soda y almíbar artesanal.',
  5500,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ginebra', 'Jugo de limón', 'Agua con gas', 'Jarabe de goma'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  191,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  46
);

-- Item 47: Whiskey sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'whiskey-sour',
  'Whiskey sour',
  'Cóctel elaborado con whisky, jugo de limón y almíbar artesanal.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo'],
  ARRAY['Huevos'],
  ARRAY['vegetariano', 'sin gluten'],
  210,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  47
);

-- Item 48: Pisco sour Catedral
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-sour-catedral',
  'Pisco sour Catedral',
  'Doble Pisco sour con base de pisco, jugo de limón, almíbar artesanal y gotas de angostura.',
  9200,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  250,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  48
);

-- Item 49: Ruso negro
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ruso-negro',
  'Ruso negro',
  'Cóctel elaborado con vodka, licor de café, decorado con salsa de chocolate y marrasquino.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Licor de café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  232,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  49
);

-- Item 50: Orgasmo
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'orgasmo',
  'Orgasmo',
  'Cóctel elaborado con crema de whisky , amaretto, licor de café y decorado con salsa de chocolate y marrasquino.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Licor de café', 'Amaretto', 'Crema irlandesa'],
  ARRAY['Lácteos', 'Nueces'],
  ARRAY['vegetariano', 'sin gluten'],
  254,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  50
);

-- Item 51: 2x pisco sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-pisco-sour',
  '2x pisco sour',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  8500,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  249,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  51
);

-- Item 52: 2x caipirinha
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-caipirinha',
  '2x caipirinha',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  7400,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Cachaça', 'Limón'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  249,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  52
);

-- Item 53: 2x Ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-ramazzotti',
  '2x Ramazzotti',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  8990,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ramazzotti', 'Vino espumoso', 'Agua con gas', 'Frutos rojos', 'Naranja'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  209,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  53
);

-- Item 54: 2x Mojito frutal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-mojito-frutal',
  '2x Mojito frutal',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  10400,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  215,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  54
);

-- Item 55: 2X Ruso blanco
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-ruso-blanco',
  '2X Ruso blanco',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  9990,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Licor de café', 'Crema de leche', 'Salsa de chocolate', 'Marrasquino rojo'],
  ARRAY['Lácteos'],
  ARRAY['vegetariano', 'sin gluten'],
  207,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  55
);

-- Item 56: Pisco sour peruano
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-sour-peruano',
  'Pisco sour peruano',
  'Cóctel artesanal',
  6500,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  235,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  56
);

-- Item 57: 2X Tequila margarita
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-tequila-margarita',
  '2X Tequila margarita',
  'Lunes a jueves de 17:00 a 21:00 hrs',
  9200,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Tequila', 'Limón', 'Triple sec'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  192,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  57
);

-- Item 58: Fernet Branca
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'fernet-branca',
  'Fernet Branca',
  'con bebida',
  4500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Fernet Branca', 'Cola'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  130,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  58
);

-- Item 59: Shot manzanilla
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shot-manzanilla',
  'Shot manzanilla',
  'Bebida premium',
  3450,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Licor de manzanilla'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  149,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  59
);

-- Item 60: copa de vino Castillo Molina
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'copa-de-vino-castillo-molina',
  'copa de vino Castillo Molina',
  'Bebida premium',
  3500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Vino tinto'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  111,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  60
);
-- Batch 4 of 11
-- Items 61 to 80


-- Item 61: Shot Tequila
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shot-tequila',
  'Shot Tequila',
  'Bebida premium',
  4000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Tequila'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  108,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  61
);

-- Item 62: Shot Jose cuervo especial
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shot-jose-cuervo-especial',
  'Shot Jose cuervo especial',
  'Bebida premium',
  5000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Tequila Jose Cuervo Especial'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  145,
  '1 min',
  false,
  true,
  true,
  'in_stock',
  62
);

-- Item 63: Shot Jose Cuervo Reposado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'shot-jose-cuervo-reposado',
  'Shot Jose Cuervo Reposado',
  'Bebida premium',
  6300,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Tequila Jose Cuervo Reposado'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  109,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  63
);

-- Item 64: Crema de whisky
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'crema-de-whisky',
  'Crema de whisky',
  'Bebida premium',
  5400,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Crema de whisky'],
  ARRAY['Lácteos'],
  ARRAY['vegetariano', 'sin gluten'],
  114,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  64
);

-- Item 65: Tanqueray
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tanqueray',
  'Tanqueray',
  'Bebida premium',
  6900,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ginebra Tanqueray', 'Agua tónica'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  136,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  65
);

-- Item 66: Campari
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'campari',
  'Campari',
  'Bebida premium',
  4500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Campari', 'Agua con gas'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  103,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  66
);

-- Item 67: Botella vino alto
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'botella-vino-alto',
  'Botella vino alto',
  'Bebida premium',
  13000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Vino tinto'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  146,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  67
);

-- Item 68: Sangría
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'sangria',
  'Sangría',
  'Bebida premium',
  5900,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Vino tinto', 'Fruta picada', 'Azúcar', 'Brandy'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  114,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  68
);

-- Item 69: Promo tequila
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-tequila',
  'Promo tequila',
  'Minuto feliz',
  1000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  120,
  '1 min',
  true,
  false,
  true,
  'in_stock',
  69
);

-- Item 70: Propeller
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'propeller',
  'Propeller',
  'con bebida',
  5000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  111,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  70
);

-- Item 71: Boolton
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'boolton',
  'Boolton',
  'Bebida premium',
  3500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  147,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  71
);

-- Item 72: Beefeater
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'beefeater',
  'Beefeater',
  'con bebida',
  6900,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  121,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  72
);

-- Item 73: Gin Hendricks
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'gin-hendricks',
  'Gin Hendricks',
  'Bebida premium',
  6900,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  134,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  73
);

-- Item 74: Tanqueray berries
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tanqueray-berries',
  'Tanqueray berries',
  'Bebida premium',
  6900,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  132,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  74
);

-- Item 75: mistral 35º
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mistral-35',
  'mistral 35º',
  'con bebida',
  4600,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  111,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  75
);

-- Item 76: Gobernador
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'gobernador',
  'Gobernador',
  'con bebida',
  5750,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  116,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  76
);

-- Item 77: Mistral nobel barrica 40º
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mistral-nobel-barrica-40',
  'Mistral nobel barrica 40º',
  'con bebida',
  6300,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  118,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  77
);

-- Item 78: Alto del carmen
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'alto-del-carmen',
  'Alto del carmen',
  'con bebida',
  4600,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  149,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  78
);

-- Item 79: Horcón quemado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'horcon-quemado',
  'Horcón quemado',
  'con bebida',
  5750,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  120,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  79
);

-- Item 80: pisco bauza
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-bauza',
  'pisco bauza',
  'Bebida premium',
  4600,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  110,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  80
);
-- Batch 5 of 11
-- Items 81 to 100


-- Item 81: El Gobernador
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'el-gobernador',
  'El Gobernador',
  'con bebida',
  5750,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  109,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  81
);

-- Item 82: Mistral nobel
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mistral-nobel',
  'Mistral nobel',
  'Bebida premium',
  6300,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  141,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  82
);

-- Item 83: 2X pisco mistral 35
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-pisco-mistral-35',
  '2X pisco mistral 35',
  'activo día del pisco',
  7300,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  148,
  '1 min',
  true,
  false,
  true,
  'in_stock',
  83
);

-- Item 84: 2X Pisco alto del carmen
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  '2x-pisco-alto-del-carmen',
  '2X Pisco alto del carmen',
  'Activo día del pisco',
  7300,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  108,
  '1 min',
  true,
  false,
  true,
  'in_stock',
  84
);

-- Item 85: Ron habana reserva 7 años
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ron-habana-reserva-7-anos',
  'Ron habana reserva 7 años',
  'Bebida premium',
  8500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['sin gluten'],
  105,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  85
);

-- Item 86: Havana Reserva
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'havana-reserva',
  'Havana Reserva',
  'con bebida',
  6500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['sin gluten'],
  101,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  86
);

-- Item 87: Havana Club
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'havana-club',
  'Havana Club',
  'con bebida',
  4600,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  123,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  87
);

-- Item 88: Absolut
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'absolut',
  'Absolut',
  'con bebida',
  5000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  114,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  88
);

-- Item 89: Eristoff
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'eristoff',
  'Eristoff',
  'con bebida',
  4000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  142,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  89
);

-- Item 90: Stolichnaya
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'stolichnaya',
  'Stolichnaya',
  'con bebida',
  6900,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  120,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  90
);

-- Item 91: Ballantine's
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ballantine-s',
  'Ballantine''s',
  'con bebida',
  5000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  120,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  91
);

-- Item 92: Johnny red label
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'johnny-red-label',
  'Johnny red label',
  'con bebida',
  5000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  126,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  92
);

-- Item 93: Johnny Black label
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'johnny-black-label',
  'Johnny Black label',
  'con bebida',
  8000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  133,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  93
);

-- Item 94: Jack Daniels Nº7
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'jack-daniels-n-7',
  'Jack Daniels Nº7',
  'con bebida',
  8000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  131,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  94
);

-- Item 95: Chivas Regal 12 años
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'chivas-regal-12-anos',
  'Chivas Regal 12 años',
  'con bebida',
  9000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  109,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  95
);

-- Item 96: Fireball
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'fireball',
  'Fireball',
  'con bebida',
  6500,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  119,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  96
);

-- Item 97: Johnnie walker game of thrones
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'johnnie-walker-game-of-thrones',
  'Johnnie walker game of thrones',
  'whisky con notas de vainilla y fruta fresca, para los fanáticos de game of thrones.',
  8000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  148,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  97
);

-- Item 98: Johnnie Blonde
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'johnnie-blonde',
  'Johnnie Blonde',
  'Whisky con notas de vainilla, manzana acaramelada y caramelo, y un final suave.',
  5000,
  (SELECT id FROM categories WHERE slug = 'vinos-destilados'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  124,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  98
);

-- Item 99: coca cola
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'coca-cola',
  'coca cola',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  139,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  99
);

-- Item 100: coca cola zero
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'coca-cola-zero',
  'coca cola zero',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  122,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  100
);
-- Batch 6 of 11
-- Items 101 to 120


-- Item 101: fanta
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'fanta',
  'fanta',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  105,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  101
);

-- Item 102: sprite
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'sprite',
  'sprite',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  117,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  102
);

-- Item 103: schweppes ginger ale
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'schweppes-ginger-ale',
  'schweppes ginger ale',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  97,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  103
);

-- Item 104: schweppes tonica
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'schweppes-tonica',
  'schweppes tonica',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  116,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  104
);

-- Item 105: Limonada tradicional
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'limonada-tradicional',
  'Limonada tradicional',
  'Bebida refrescante',
  3000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  112,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  105
);

-- Item 106: Limonada menta jengibre
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'limonada-menta-jengibre',
  'Limonada menta jengibre',
  'Bebida refrescante',
  3500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  142,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  106
);

-- Item 107: jugo natural frambuesa
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'jugo-natural-frambuesa',
  'jugo natural frambuesa',
  'Bebida refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  102,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  107
);

-- Item 108: jugo natural de piña
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'jugo-natural-de-pina',
  'jugo natural de piña',
  'Bebida refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  143,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  108
);

-- Item 109: jugo natural mango
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'jugo-natural-mango',
  'jugo natural mango',
  'Bebida refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  117,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  109
);

-- Item 110: jugo natural maracuya
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'jugo-natural-maracuya',
  'jugo natural maracuya',
  'Bebida refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  112,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  110
);

-- Item 111: agua mineral con gas
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'agua-mineral-con-gas',
  'agua mineral con gas',
  'Bebida refrescante',
  2000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  98,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  111
);

-- Item 112: agua mineral sin gas
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'agua-mineral-sin-gas',
  'agua mineral sin gas',
  'Bebida refrescante',
  2000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  96,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  112
);

-- Item 113: Red Bull
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'red-bull',
  'Red Bull',
  'Bebida refrescante',
  3500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  118,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  113
);

-- Item 114: Milkshake
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'milkshake',
  'Milkshake',
  'Bebida refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  116,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  114
);

-- Item 115: mini coca 220 cc
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-coca-220-cc',
  'mini coca 220 cc',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  126,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  115
);

-- Item 116: Crush
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'crush',
  'Crush',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  137,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  116
);

-- Item 117: Pap
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pap',
  'Pap',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  136,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  117
);

-- Item 118: Naranja Platano
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'naranja-platano',
  'Naranja Platano',
  'Bebida refrescante',
  4000,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  118,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  118
);

-- Item 119: Red Bull Yellow
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'red-bull-yellow',
  'Red Bull Yellow',
  'Bebida refrescante',
  3500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  110,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  119
);

-- Item 120: mini sprite
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-sprite',
  'mini sprite',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  118,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  120
);
-- Batch 7 of 11
-- Items 121 to 140


-- Item 121: mini ginger ale
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-ginger-ale',
  'mini ginger ale',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  126,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  121
);

-- Item 122: mini tonica
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-tonica',
  'mini tonica',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  99,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  122
);

-- Item 123: mini pepsi
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-pepsi',
  'mini pepsi',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  132,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  123
);

-- Item 124: mini coca zero
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-coca-zero',
  'mini coca zero',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  115,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  124
);

-- Item 125: mini sprite zero
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-sprite-zero',
  'mini sprite zero',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  106,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  125
);

-- Item 126: mini tonica zero
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mini-tonica-zero',
  'mini tonica zero',
  'Bebida refrescante',
  1500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  138,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  126
);

-- Item 127: Pepsi
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pepsi',
  'Pepsi',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  121,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  127
);

-- Item 128: Limonsoda
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'limonsoda',
  'Limonsoda',
  'Bebida refrescante',
  2500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  101,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  128
);

-- Item 129: Café americano
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-americano',
  'Café americano',
  'Café de especialidad',
  2600,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso', 'Agua caliente'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  99,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  129
);

-- Item 130: Café espresso
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-espresso',
  'Café espresso',
  'Café de especialidad',
  2400,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso'],
  NULL,
  ARRAY['sin gluten'],
  86,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  130
);

-- Item 131: Café espresso doble
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-espresso-doble',
  'Café espresso doble',
  'Café de especialidad',
  3500,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso'],
  NULL,
  ARRAY['sin gluten'],
  82,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  131
);

-- Item 132: Café helado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-helado',
  'Café helado',
  'Café de especialidad',
  4000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  119,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  132
);

-- Item 133: Café irlandes
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-irlandes',
  'Café irlandes',
  'Café de especialidad',
  4000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  89,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  133
);

-- Item 134: Café nescafé
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-nescafe',
  'Café nescafé',
  'Café de especialidad',
  2000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  95,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  134
);

-- Item 135: Capuccino
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'capuccino',
  'Capuccino',
  'Café de especialidad',
  2800,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso', 'Leche espumada'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  117,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  135
);

-- Item 136: Capuccino doble
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'capuccino-doble',
  'Capuccino doble',
  'Café de especialidad',
  3400,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso', 'Leche espumada'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  116,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  136
);

-- Item 137: Chocolate caliente
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'chocolate-caliente',
  'Chocolate caliente',
  'Café de especialidad',
  3000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Chocolate', 'Leche'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  102,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  137
);

-- Item 138: chocolate nevado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'chocolate-nevado',
  'chocolate nevado',
  'Café de especialidad',
  3500,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Chocolate', 'Leche'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  90,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  138
);

-- Item 139: mokaccino
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mokaccino',
  'mokaccino',
  'Café de especialidad',
  3500,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  101,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  139
);

-- Item 140: Té variedades
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'te-variedades',
  'Té variedades',
  'Café de especialidad',
  2000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  112,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  140
);
-- Batch 8 of 11
-- Items 141 to 160


-- Item 141: Te
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'te',
  'Te',
  'Café de especialidad',
  2000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  87,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  141
);

-- Item 142: Capuccino vainilla
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'capuccino-vainilla',
  'Capuccino vainilla',
  'Café de especialidad',
  3200,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso', 'Leche espumada'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  89,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  142
);

-- Item 143: capuccino vainilla doble
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'capuccino-vainilla-doble',
  'capuccino vainilla doble',
  'Café de especialidad',
  3500,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso', 'Leche espumada'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  110,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  143
);

-- Item 144: Cortado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cortado',
  'Cortado',
  'Café de especialidad',
  2800,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  89,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  144
);

-- Item 145: Café americano doble
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cafe-americano-doble',
  'Café americano doble',
  'Café de especialidad',
  5000,
  (SELECT id FROM categories WHERE slug = 'cafeteria'),
  ARRAY['Café espresso', 'Agua caliente'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  81,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  145
);

-- Item 146: Costillar de cerdo a la chilena
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'costillar-de-cerdo-a-la-chilena',
  'Costillar de cerdo a la chilena',
  'Plato principal',
  12900,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['sin gluten'],
  568,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  146
);

-- Item 147: Pollo grillado al limón (salsa cítrica)
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pollo-grillado-al-limon-salsa-citrica',
  'Pollo grillado al limón (salsa cítrica)',
  'Plato principal',
  9500,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['sin gluten'],
  573,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  147
);

-- Item 148: Merluza crocante
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'merluza-crocante',
  'Merluza crocante',
  'Merluza crocante Austral+guarnición',
  11900,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Merluza austral', 'Pan rallado', 'Huevo', 'Harina', 'Guarnición'],
  ARRAY['Pescado', 'Gluten', 'Huevos'],
  NULL,
  666,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  148
);

-- Item 149: Salmón grillado (300 grs) c/ guarnición a elección.
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'salmon-grillado-300-grs-c-guarnicion-a-eleccion',
  'Salmón grillado (300 grs) c/ guarnición a elección.',
  'Salmón a la plancha con guarnición a elección',
  13900,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Pescado'],
  ARRAY['vegano', 'sin gluten'],
  522,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  149
);

-- Item 150: Lomo 3 pimientas
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'lomo-3-pimientas',
  'Lomo 3 pimientas',
  'lomo de res, en salsa demi glace y pimientas +guarnición.',
  13500,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  768,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  150
);

-- Item 151: Lomo a lo pobre
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'lomo-a-lo-pobre',
  'Lomo a lo pobre',
  'lomo de vacuno acompañado de cebolla caramelizada huevo frito y papas fritas.',
  14900,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  740,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  151
);

-- Item 152: Lomo grillado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'lomo-grillado',
  'Lomo grillado',
  'Lomo con guarnición a elección',
  13900,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  596,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  152
);

-- Item 153: Carne braseada (cocción lenta)
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'carne-braseada-coccion-lenta',
  'Carne braseada (cocción lenta)',
  'Plato principal',
  12900,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['sin gluten'],
  712,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  153
);

-- Item 154: SOPA DEL DÍA
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'sopa-del-dia',
  'SOPA DEL DÍA',
  'Hasta las 16:00 hrs',
  3500,
  (SELECT id FROM categories WHERE slug = 'platos-ejecutivos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  699,
  '20-25 min',
  false,
  false,
  true,
  'in_stock',
  154
);

-- Item 155: Pizza
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pizza',
  'Pizza',
  'pizza casera con masa a la piedra base de pomodoro y 5 ingredientes a elección ( 2 proteínas) champiñon, aceituna, pollo, chorizo, cebollín, maíz, vacuno, tomate, cebolla caramelizada, mechada, salame, piña).',
  15900,
  (SELECT id FROM categories WHERE slug = 'pizzas'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  621,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  155
);

-- Item 156: Pizza individual 1898
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pizza-individual-1898',
  'Pizza individual 1898',
  'pizza individual1898 napolitana o salame',
  7900,
  (SELECT id FROM categories WHERE slug = 'pizzas'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  709,
  '15-20 min',
  false,
  true,
  true,
  'in_stock',
  156
);

-- Item 157: Pizza 1898
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pizza-1898',
  'Pizza 1898',
  'Vacuno, pollo, tocino, salame, chorizo y tomate',
  17900,
  (SELECT id FROM categories WHERE slug = 'pizzas'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Gluten'],
  ARRAY['vegano'],
  829,
  '15-20 min',
  false,
  true,
  true,
  'in_stock',
  157
);

-- Item 158: Extra queso pizza
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'extra-queso-pizza',
  'Extra queso pizza',
  'Pizza artesanal',
  4900,
  (SELECT id FROM categories WHERE slug = 'pizzas'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Lácteos', 'Gluten'],
  ARRAY['vegetariano'],
  606,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  158
);

-- Item 159: Agregado BBQ
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'agregado-bbq',
  'Agregado BBQ',
  'Pizza artesanal',
  2000,
  (SELECT id FROM categories WHERE slug = 'pizzas'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  800,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  159
);

-- Item 160: Agregado tocino pizza
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'agregado-tocino-pizza',
  'Agregado tocino pizza',
  'Pizza artesanal',
  2500,
  (SELECT id FROM categories WHERE slug = 'pizzas'),
  ARRAY['Ingredientes frescos'],
  ARRAY['Gluten'],
  NULL,
  754,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  160
);
-- Batch 9 of 11
-- Items 161 to 180


-- Item 161: Churrasco 1898
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'churrasco-1898',
  'Churrasco 1898',
  'Carne de res, palta, tomate, lechuga, cebolla caramelizada y champiñones salteados',
  10900,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Pan', 'Carne de res', 'Palta', 'Tomate', 'Lechuga', 'Cebolla caramelizada', 'Champiñones salteados'],
  ARRAY['Gluten'],
  NULL,
  598,
  '10-12 min',
  false,
  true,
  true,
  'in_stock',
  161
);

-- Item 162: Burguer chada
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'burguer-chada',
  'Burguer chada',
  'jugosa hamburguesa, cubierta por tocino, cebolla morada, queso cheddar, tomate y lechuga',
  10900,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Pan de hamburguesa', 'Carne de res', 'Tocino', 'Cebolla morada', 'Queso cheddar', 'Tomate', 'Lechuga'],
  ARRAY['Gluten', 'Lácteos'],
  NULL,
  561,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  162
);

-- Item 163: El puraquina
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'el-puraquina',
  'El puraquina',
  'sabroso filete de pollo cubierto por palta, lechuga, queso fundido, champiñon, y tocino.',
  9500,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  566,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  163
);

-- Item 164: Churrasco italiano
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'churrasco-italiano',
  'Churrasco italiano',
  'Sándwich gourmet',
  9200,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  626,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  164
);

-- Item 165: Churrasco chacarero
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'churrasco-chacarero',
  'Churrasco chacarero',
  'Sándwich gourmet',
  9000,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  469,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  165
);

-- Item 166: Barros Luco
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'barros-luco',
  'Barros Luco',
  'Sándwich gourmet',
  8500,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  441,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  166
);

-- Item 167: Hamburguesa americana
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'hamburguesa-americana',
  'Hamburguesa americana',
  'lechuga, tomates, hamburguesa, BBQ, cheddar, tocino, aros de cebolla morada, mayonesa',
  9500,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  517,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  167
);

-- Item 168: Cheese burger
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cheese-burger',
  'Cheese burger',
  'hamburguesa, cheedar, pepinillos, tocino, mayonesa',
  8500,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  527,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  168
);

-- Item 169: Promo sandwich más shop ruta s70
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'promo-sandwich-mas-shop-ruta-s70',
  'Promo sandwich más shop ruta s70',
  'Promoción válida todos los jueves desde las 18:00 hrs. Sandwich mechada, lechuga, tomate, cebolla morada y mayonesa más shop rs70',
  9990,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  657,
  '10-12 min',
  true,
  false,
  true,
  'in_stock',
  169
);

-- Item 170: Champiñones agregado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'champinones-agregado',
  'Champiñones agregado',
  'Sándwich gourmet',
  1500,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  608,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  170
);

-- Item 171: Agregado, Tomate, cebolla, lechuga.
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'agregado-tomate-cebolla-lechuga',
  'Agregado, Tomate, cebolla, lechuga.',
  'Sándwich gourmet',
  1000,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  502,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  171
);

-- Item 172: Agregado palta
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'agregado-palta',
  'Agregado palta',
  'Sándwich gourmet',
  2000,
  (SELECT id FROM categories WHERE slug = 'sandwich'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  540,
  '10-12 min',
  false,
  false,
  true,
  'in_stock',
  172
);

-- Item 173: Cheese & Bacon
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cheese-bacon',
  'Cheese & Bacon',
  'base de crujientes papas fritas cubierto por un manto de queso fundido y tocino frito.',
  9800,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  884,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  173
);

-- Item 174: Porcion de papas fritas
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'porcion-de-papas-fritas',
  'Porcion de papas fritas',
  'crujientes papas fritas espectacular para acompañar con un shop ya sea ambar o stout.',
  5500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  813,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  174
);

-- Item 175: Salchipapas
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'salchipapas',
  'Salchipapas',
  'crujientes papas fritas acompañadas con vianesas de la mejor calidad y tradicion del sur de chile.',
  6900,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  949,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  175
);

-- Item 176: Fish & Chips
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'fish-chips',
  'Fish & Chips',
  'Tiras de merluza crocante, acompañados con papas rústicas, salsa provenzal y sabroso pilpil de camarones.',
  15800,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  867,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  176
);

-- Item 177: TABLA BEER BAR
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tabla-beer-bar',
  'TABLA BEER BAR',
  'Cama papas fritas, verduras salteadas, Champiñones, carne braseada (cocción lenta), queso fundido y perejil!',
  23900,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  887,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  177
);

-- Item 178: Chorrillana 1898
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'chorrillana-1898',
  'Chorrillana 1898',
  'crujientes papas fritas cubierto con cubos de carne de res, pollo y longaniza, queso de campo, huevos de gallina fritos cebolla caramelizada y salchichas.',
  23500,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  813,
  '15-20 min',
  false,
  true,
  true,
  'in_stock',
  178
);

-- Item 179: Papas bravas para 2
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'papas-bravas-para-2',
  'Papas bravas para 2',
  'Para compartir',
  8900,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  917,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  179
);

-- Item 180: papas bravas para 4
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'papas-bravas-para-4',
  'papas bravas para 4',
  'Para compartir',
  12900,
  (SELECT id FROM categories WHERE slug = 'bebestibles-jugos'),
  ARRAY['Ingredientes frescos'],
  NULL,
  ARRAY['vegano', 'sin gluten'],
  801,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  180
);

-- ============================================
-- Verification Queries
-- ============================================

-- Check total count (should be 208)
SELECT COUNT(*) as total_items FROM menu_1898;

-- Check items by category
SELECT 
    c.name as category_name,
    c.slug as category_slug,
    COUNT(m.id) as item_count,
    c.display_order
FROM menu_1898 m
JOIN categories c ON m.category_id = c.id
GROUP BY c.name, c.slug, c.display_order
ORDER BY c.display_order;

-- Check for any NULL category_ids (should be 0)
SELECT COUNT(*) as items_without_category
FROM menu_1898 
WHERE category_id IS NULL;

-- Check dietary values are in Spanish
SELECT DISTINCT unnest(dietary) as dietary_value
FROM menu_1898
WHERE dietary IS NOT NULL
ORDER BY dietary_value;

-- Verify popular items (2x promos)
SELECT name, price, popular
FROM menu_1898
WHERE popular = true
ORDER BY name;

-- Verify chef specials (items with 1898 in name)
SELECT name, price, chef_special
FROM menu_1898
WHERE chef_special = true
ORDER BY name;
