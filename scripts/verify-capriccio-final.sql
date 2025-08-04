-- Final Capriccio Menu Verification
-- This should match exactly the provided menu

-- Detailed menu breakdown by category
SELECT 
  c.name as "Category",
  COUNT(p.id) as "Items",
  STRING_AGG(
    p.name || ' - $' || CAST(p.base_price AS INTEGER)::text, 
    E'\n' ORDER BY p.name
  ) as "Products"
FROM categories c
LEFT JOIN location_products lp ON c.id = lp.category_id AND lp.location_id = 'capriccio'
LEFT JOIN products p ON lp.product_id = p.id
WHERE c.slug IN (
  'beers',           -- Cervezas Y Shop
  'beverages',       -- Bebestibles  
  'drinks',          -- Coctelería de Autor + Cocteleria
  'coffee',          -- Cafetería
  'cold_dishes',     -- Platos Frios (empty)
  'main_courses',    -- Platos Principales
  'tapas',           -- Tapas y Bruschettas (empty)
  'boards',          -- Tablas (empty)
  'topping_potatoes',-- Papas Topping
  'spirits',         -- Destilados
  'wines',           -- Vinos y Espumantes
  'bajativos'        -- Bajativos
)
GROUP BY c.id, c.name, c.display_order
ORDER BY 
  CASE c.slug
    WHEN 'beers' THEN 1
    WHEN 'beverages' THEN 2
    WHEN 'drinks' THEN 3
    WHEN 'coffee' THEN 4
    WHEN 'cold_dishes' THEN 5
    WHEN 'main_courses' THEN 6
    WHEN 'tapas' THEN 7
    WHEN 'boards' THEN 8
    WHEN 'topping_potatoes' THEN 9
    WHEN 'spirits' THEN 10
    WHEN 'wines' THEN 11
    WHEN 'bajativos' THEN 12
  END;

-- Summary count
SELECT 
  'TOTAL CAPRICCIO PRODUCTS' as metric,
  COUNT(DISTINCT p.id) as count
FROM products p
JOIN location_products lp ON p.id = lp.product_id
WHERE lp.location_id = 'capriccio';