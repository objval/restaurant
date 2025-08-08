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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  118,
  '2-3 min',
  false,
  false,
  true,
  'in_stock',
  120
);
