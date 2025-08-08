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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegetarian'],
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
  ARRAY['vegan', 'gluten-free'],
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
