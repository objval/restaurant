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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
