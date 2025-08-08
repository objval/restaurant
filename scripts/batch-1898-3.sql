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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegetarian', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegetarian', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegetarian', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegetarian', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  111,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  60
);
