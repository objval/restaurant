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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  801,
  '15-20 min',
  false,
  false,
  true,
  'in_stock',
  180
);
