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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegetarian', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  110,
  '1 min',
  false,
  false,
  true,
  'in_stock',
  80
);
