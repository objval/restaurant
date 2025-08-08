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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['vegan'],
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
  ARRAY['gluten-free'],
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
  ARRAY['gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
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
  ARRAY['vegan', 'gluten-free'],
  214,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  20
);
