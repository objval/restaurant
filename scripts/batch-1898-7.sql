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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  112,
  '3-4 min',
  false,
  false,
  true,
  'in_stock',
  140
);
