-- Batch 2 of 11
-- Items 21 to 40


-- Item 21: Tequila margarita
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tequila-margarita',
  'Tequila margarita',
  'Cóctel elaborado con tequila mexicano , jugo de limón natural, toque de triple sec y copa enllantada con sal.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Tequila', 'Limón', 'Triple sec'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  247,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  21
);

-- Item 22: Tequila margarita frutal
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'tequila-margarita-frutal',
  'Tequila margarita frutal',
  'Cóctel elaborado con tequila mexicano , jugo de limón natural, toque de triple sec, jugo de fruta y copa enllantada con sal.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Tequila', 'Limón', 'Triple sec'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  238,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  22
);

-- Item 23: Ruso blanco
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ruso-blanco',
  'Ruso blanco',
  'Cóctel elaborado con vodka, licor de café, crema de leche, decorado con salsa de chocolate y marrasquino rojo.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Licor de café', 'Crema de leche', 'Salsa de chocolate', 'Marrasquino rojo'],
  ARRAY['Lácteos'],
  ARRAY['vegetarian', 'gluten-free'],
  192,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  23
);

-- Item 24: Vaina
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'vaina',
  'Vaina',
  'Cóctel chileno elaborado con vino dulce, licor de cacao, cognac, espesado con yema de huevo y polvoreada con canela.',
  4600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vino dulce', 'Licor de cacao', 'Cognac', 'Yema de huevo', 'Canela'],
  ARRAY['Huevos'],
  ARRAY['vegetarian', 'gluten-free'],
  243,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  24
);

-- Item 25: Caipiriña
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'caipirina',
  'Caipiriña',
  'Cóctel elaborado con cachaca brasileña, jugo natural de limón, almíbar artesanal y soda.',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Cachaça', 'Jugo de limón', 'Azúcar', 'Hielo'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  239,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  25
);

-- Item 26: old fashion
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'old-fashion',
  'old fashion',
  'Cóctel elaborado con whisky, saborizado con azúcar rubia, amargo de angostura, naranja deshidratada y marrasquino.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky', 'Azúcar', 'Amargo de Angostura', 'Naranja', 'Cereza'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  222,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  26
);

-- Item 27: ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'ramazzotti',
  'ramazzotti',
  'Cóctel elaborado con licor italiano a base de flor de hibiscus, flor de azahar y toques de naranja, con espumante, soda y frutos rojos.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ramazzotti', 'Vino espumoso', 'Agua con gas', 'Frutos rojos', 'Naranja'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  241,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  27
);

-- Item 28: aperol
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'aperol',
  'aperol',
  'Cóctel italiano elaborado a base de genciana, ruibarbo y quina, con espumante, soda y frutos rojos.',
  6300,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Aperol', 'Vino espumoso', 'Agua con gas', 'Naranja'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  199,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  28
);

-- Item 29: cosmopolitan
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'cosmopolitan',
  'cosmopolitan',
  'Cóctel 1898 elaborado con vodka, jugo de limón natural, licor de cassis y endulzado con granadina.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Jugo de arándano', 'Jugo de lima', 'Triple sec'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  191,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  29
);

-- Item 30: clavo oxidado
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'clavo-oxidado',
  'clavo oxidado',
  'Cóctel elaborado a base de whisky, endulzado con whisky especiado de miel drambuie y decorado con marrasquino.',
  7000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky escocés', 'Drambuie'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  213,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  30
);

-- Item 31: Mojito ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mojito-ramazzotti',
  'Mojito ramazzotti',
  'Cóctel elaborado con ron, jugo de limón natural, menta fresca, almíbar natural, ramazzotti y soda.',
  6800,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  247,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  31
);

-- Item 32: Moscow mule
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'moscow-mule',
  'Moscow mule',
  'Cóctel elaborado con vodka, jugo de limón natural, jengibre natural, almíbar artesanal y ginger ale.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Cerveza de jengibre', 'Jugo de lima'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  196,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  32
);

-- Item 33: Negroni
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'negroni',
  'Negroni',
  'Cóctel elaborado con campari a base de infusión de hierbas amargas, plantas aromáticas, fruta, bitter rosso y ginebra.',
  7000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ginebra', 'Campari', 'Vermut dulce'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  188,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  33
);

-- Item 34: Pisco sour Ramazzotti
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'pisco-sour-ramazzotti',
  'Pisco sour Ramazzotti',
  'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón, almíbar artesanal y ramazzotti.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  207,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  34
);

-- Item 35: Primavera
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'primavera',
  'Primavera',
  'Cóctel elaborado con pisco Del valle del Elqui, jugo de naranja, jugo de piña y granadina.',
  4600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Pisco', 'Jugo de naranja', 'Jugo de piña', 'Granadina'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  259,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  35
);

-- Item 36: Amareto sour
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'amareto-sour',
  'Amareto sour',
  'Cóctel elaborado con licor de avellanas amaretto, jugo de limón y almíbar artesanal.',
  5750,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Amaretto', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo'],
  ARRAY['Huevos', 'Nueces'],
  ARRAY['vegetarian', 'gluten-free'],
  242,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  36
);

-- Item 37: Daiquiri
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'daiquiri',
  'Daiquiri',
  'Cóctel elaborado con ron, jugo de limón natural y almíbar artesanal.',
  4600,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Jugo de lima', 'Jarabe de goma'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  210,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  37
);

-- Item 38: god father
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'god-father',
  'god father',
  'Cóctel elaborado con whisky y licor de avellanas amaretto, decorado con marrasquino.',
  6800,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Whisky escocés', 'Amaretto'],
  ARRAY['Nueces'],
  ARRAY['vegan', 'gluten-free'],
  253,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  38
);

-- Item 39: Laguna azul
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'laguna-azul',
  'Laguna azul',
  'Cóctel elaborado con vodka, curacao blue y jugo de limón natural.',
  5000,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Vodka', 'Blue Curaçao', 'Limonada', 'Cereza'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  237,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  39
);

-- Item 40: Mega mojito
INSERT INTO menu_1898 (
  slug, name, description, price, category_id, 
  ingredients, allergens, dietary, calories, prep_time,
  popular, chef_special, active, stock_status, display_order
) VALUES (
  'mega-mojito',
  'Mega mojito',
  'Cóctel refrescante de un litro elaborado con ron, jugo de limón natural, menta fresca, soda y almíbar artesanal.',
  10200,
  (SELECT id FROM categories WHERE slug = 'cockteles'),
  ARRAY['Ron', 'Limón', 'Menta'],
  NULL,
  ARRAY['vegan', 'gluten-free'],
  186,
  '3-5 min',
  false,
  false,
  true,
  'in_stock',
  40
);
