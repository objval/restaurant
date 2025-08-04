
-- Products per location
SELECT 
  l.name as location_name,
  COUNT(DISTINCT lp.product_id) as product_count
FROM locations l
LEFT JOIN location_products lp ON l.id = lp.location_id
GROUP BY l.id, l.name
ORDER BY l.name;


-- Products per category per location
SELECT 
  l.name as location_name,
  c.name as category_name,
  COUNT(lp.product_id) as product_count
FROM locations l
CROSS JOIN categories c
LEFT JOIN location_products lp ON l.id = lp.location_id AND c.id = lp.category_id
GROUP BY l.id, l.name, c.id, c.name
HAVING COUNT(lp.product_id) > 0
ORDER BY l.name, c.display_order;


-- Check for products without legacy_id (should be 0)
SELECT COUNT(*) as products_without_legacy_id
FROM products
WHERE legacy_id IS NULL;


-- Total unique products
SELECT COUNT(*) as total_products
FROM products;