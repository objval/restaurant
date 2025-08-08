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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  209,
  '3-5 min',
  true,
  false,
  true,
  'in_stock',
  200
);
