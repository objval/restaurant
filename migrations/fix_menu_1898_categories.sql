-- ============================================
-- Fix Category Mappings for Menu 1898
-- ============================================

-- Update beers (cervezas-shop -> beers)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'beers')
WHERE slug IN (
  'guinness-extra-stout-473-ml', 'corona', 'royal', 'heineken', 
  'shop-heineken', 'shop-kunstman-torobayo', 'chelada', 'michelada',
  'shop-ruta-s70-ambar', 'cuello-negro-ambar', '2x-shop-heineken',
  '2x-shop-ruta-s70', 'austral-calafate'
);

-- Update cocktails (cockteles -> cocktails)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'cocktails')
WHERE slug LIKE 'pisco-sour%' 
   OR slug LIKE 'mojito%' 
   OR slug LIKE 'tequila-margarita%'
   OR slug LIKE 'mega-mojito%'
   OR slug IN (
  'martini-dry', 'pina-colada', 'ruso-blanco', 'vaina', 'caipirina',
  'old-fashion', 'ramazzotti', 'aperol', 'cosmopolitan', 'clavo-oxidado',
  'moscow-mule', 'negroni', 'primavera', 'amareto-sour', 'daiquiri',
  'god-father', 'laguna-azul', 'chardonay-sour', 'jaggermeister',
  'tom-collins', 'whiskey-sour', 'ruso-negro', 'orgasmo'
);

-- Update 2x cocktail promos to specials
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'specials')
WHERE slug LIKE '2x-%' 
   OR slug LIKE 'promo-%';

-- Update wines and spirits (vinos-destilados -> wines or spirits)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'wines')
WHERE slug IN (
  'copa-de-vino-castillo-molina', 'botella-vino-alto', 'sangria'
);

UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'spirits')
WHERE slug IN (
  'fernet-branca', 'shot-manzanilla', 'shot-tequila', 'shot-jose-cuervo-especial',
  'shot-jose-cuervo-reposado', 'crema-de-whisky', 'tanqueray', 'campari',
  'promo-tequila', 'propeller', 'boolton', 'beefeater', 'gin-hendricks',
  'tanqueray-berries', 'mistral-35', 'gobernador', 'mistral-nobel-barrica-40',
  'alto-del-carmen', 'horcon-quemado', 'pisco-bauza', 'el-gobernador',
  'mistral-nobel', 'ron-habana-reserva-7-anos', 'havana-reserva', 'havana-club',
  'absolut', 'eristoff', 'stolichnaya', 'ballantine-s', 'johnny-red-label',
  'johnny-black-label', 'jack-daniels-n-7', 'chivas-regal-12-anos', 'fireball',
  'johnnie-walker-game-of-thrones', 'johnnie-blonde', 'johnnie-double-black'
);

-- Update coffee (cafeteria -> coffee)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'coffee')
WHERE slug IN (
  'expresso', 'americano', 'americano-grande', 'capuccino', 'capuccino-grande',
  'cortado-grande', 'latte', 'cafe-vienesa', 'cafe-mocha', 'cafe-irlandes',
  'cafe-chocolate', 'double-expresso', 'expresso-descafeinado', 'mocaccino-helado',
  'chocolate-submarino', 'chocolate-caliente', 'te', 'capuccino-vainilla',
  'capuccino-vainilla-doble', 'cortado', 'cafe-americano-doble'
);

-- Update main dishes (platos-ejecutivos -> main_courses)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'main_courses')
WHERE slug IN (
  'costillar-de-cerdo-a-la-chilena', 'pollo-grillado-al-limon-salsa-citrica',
  'merluza-crocante', 'salmon-grillado-300-grs-c-guarnicion-a-eleccion',
  'lomo-3-pimientas', 'lomo-a-lo-pobre', 'lomo-grillado', 'carne-braseada-coccion-lenta',
  'sopa-del-dia', 'lasagna'
);

-- Update sandwiches (sandwich -> sandwiches)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'sandwiches')
WHERE slug IN (
  'churrasco-1898', 'burguer-chada', 'el-puraquina', 'churrasco-italiano',
  'churrasco-chacarero', 'barros-luco', 'hamburguesa-americana', 'cheese-burger',
  'promo-sandwich-mas-shop-ruta-s70', 'champinones-agregado', 'agregado-tomate-cebolla-lechuga',
  'agregado-palta', 'completo-italiano', 'completo-americano',
  'promo-completo-schop-heineken-o-jugo'
);

-- Update beverages/snacks (bebestibles-jugos -> beverages)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'beverages')
WHERE slug IN (
  'coca-cola', 'coca-cola-zero', 'sprite', 'fanta', 'agua-con-gas',
  'agua-sin-gas', 'kross-frutal', 'jugo-naranja-exprimido', 'limonada',
  'vaso-de-leche', 'vaso-de-milo'
);

-- Update sharing plates to sharing
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'sharing')
WHERE slug IN (
  'cheese-bacon', 'porcion-de-papas-fritas', 'salchipapas', 'fish-chips',
  'tabla-beer-bar', 'chorrillana-1898', 'papas-bravas-para-2', 'papas-bravas-para-4',
  'ceviche-1898-para-2', 'tabla-tradicional', 'tabla-tradicional-o-chorrillana-para-2'
);

-- Update appetizers
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'appetizers')
WHERE slug IN ('empanada', 'empanada-de-mechada');

-- Update salads (vegetarianos-ensaladas -> salads)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'salads')
WHERE slug IN ('cesar-pollo', 'cesar-camaron', 'ensalada');

-- Update desserts (reposteria-pasteleria -> desserts)
UPDATE menu_1898 
SET category_id = (SELECT id FROM categories WHERE slug = 'desserts')
WHERE slug IN (
  'helado-copa', 'helado-copa-triple', 'brownie-con-helado',
  'crepes-relleno-con-manjar-nueces', 'postre'
);

-- ============================================
-- Verification
-- ============================================

-- Check total items with categories
SELECT 
    COUNT(*) as total_items,
    COUNT(category_id) as items_with_category,
    COUNT(*) - COUNT(category_id) as items_without_category
FROM menu_1898;

-- Items by category
SELECT 
    c.name as category_name,
    c.slug as category_slug,
    COUNT(m.id) as item_count
FROM menu_1898 m
JOIN categories c ON m.category_id = c.id
GROUP BY c.name, c.slug, c.display_order
ORDER BY c.display_order;

-- List any remaining items without categories
SELECT slug, name 
FROM menu_1898 
WHERE category_id IS NULL;