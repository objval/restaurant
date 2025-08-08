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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  122,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  100
);
