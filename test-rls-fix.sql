-- Test script to verify RLS fix for menu_capriccio
-- Run this as an authenticated admin user

-- 1. Test INSERT (this was failing before)
INSERT INTO menu_capriccio (
  name,
  slug,
  description,
  price,
  active,
  stock_status
) VALUES (
  'Test Product - RLS Fix',
  'test-product-rls-fix',
  'This is a test to verify the RLS policy fix',
  15.99,
  true,
  'in_stock'
) RETURNING id, name, slug;

-- 2. Test UPDATE (should work for authenticated users)
UPDATE menu_capriccio 
SET description = 'Updated description to verify RLS'
WHERE slug = 'test-product-rls-fix'
RETURNING id, name, description;

-- 3. Test DELETE (this was missing before)
DELETE FROM menu_capriccio 
WHERE slug = 'test-product-rls-fix'
RETURNING id, name;

-- 4. Verify all menu tables have identical policy structure
SELECT 
  tablename,
  COUNT(*) as policy_count,
  string_agg(policyname, ' | ' ORDER BY policyname) as policies
FROM pg_policies
WHERE tablename IN ('menu_arbol', 'menu_1898', 'menu_capriccio')
GROUP BY tablename
ORDER BY tablename;

-- Expected output:
-- All three tables should have 3 policies each:
-- 1. "Anon can update stock and active status" (UPDATE)
-- 2. "Authenticated users can manage menu_*" (ALL)
-- 3. "Public can view menu_*" (SELECT)

-- 5. Test that public/anon users can still read menu
-- (Run this part without authentication or as anon)
-- SELECT * FROM menu_capriccio WHERE active = true LIMIT 5;
