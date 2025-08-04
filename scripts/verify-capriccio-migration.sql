-- Verification script for Capriccio migration
-- This script checks if all 38 Capriccio menu items are properly migrated

-- Check total products for Capriccio
SELECT 
  'Total Capriccio Products' as metric,
  COUNT(DISTINCT p.id) as count
FROM products p
JOIN location_products lp ON p.id = lp.product_id
WHERE lp.location_id = 'capriccio';

-- Check products by category
SELECT 
  c.name as category,
  COUNT(p.id) as product_count
FROM categories c
LEFT JOIN location_products lp ON c.id = lp.category_id
LEFT JOIN products p ON lp.product_id = p.id
WHERE lp.location_id = 'capriccio'
GROUP BY c.id, c.name
ORDER BY c.display_order;

-- List all Capriccio products with details
SELECT 
  p.legacy_id,
  p.name,
  c.name as category,
  p.base_price,
  p.is_chef_special,
  p.is_popular
FROM products p
JOIN location_products lp ON p.id = lp.product_id
JOIN categories c ON lp.category_id = c.id
WHERE lp.location_id = 'capriccio'
ORDER BY c.display_order, p.name;

-- Check for missing products (should return empty if all 38 are migrated)
WITH expected_ids AS (
  SELECT unnest(ARRAY[
    'auguri', 'capriccio-cocktail', 'sour', 'piccione', 'espresso-martini',
    'limoncello-spritz', 'old-fashioned', 'ramazzoti-spritz', 'martini-sporco',
    'negroni', 'gin-tonic', 'ceviche-pacifico', 'bruschetta-picante-golfo',
    'tabla-fuego-brasa', 'tabla-mediterranea-fria', 'papas-bufalo',
    'gin-tanqueray-london', 'whiskey-ballentines', 'whiskey-johnnie-double-black',
    'gin-tanqueray-sevilla', 'gin-tanqueray-royal', 'tequila-don-julio',
    'chivas-regal-12', 'whiskey-johnnie-black', 'whiskey-jack-daniel-apple',
    'gin-beefeater', 'jagermeister', 'drambuie', 'ron-havana-7',
    'ron-havana-especial', 'pisco-gobernador', 'whisky-johnnie-red',
    'pisco-alto-carmen', 'pisco-mistral-nobel', 'gin-hendricks',
    'chardon-rose-187', 'chardon-brut-750', 'viu-manent-noble'
  ]) as legacy_id
)
SELECT 
  'Missing products:' as status,
  STRING_AGG(e.legacy_id, ', ') as missing_ids
FROM expected_ids e
LEFT JOIN products p ON e.legacy_id = p.legacy_id
LEFT JOIN location_products lp ON p.id = lp.product_id AND lp.location_id = 'capriccio'
WHERE p.id IS NULL OR lp.product_id IS NULL;