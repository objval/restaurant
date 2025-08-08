-- Restaurant Menu Database Schema
-- Generated on 2025-08-08
-- This schema is used for all restaurant locations: Arbol, Capriccio, and 1898

-- ============================================
-- Categories Table
-- ============================================
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    display_order INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Menu Table Template
-- Use this template for each location's menu table
-- Replace {location} with: arbol, capriccio, or 1898
-- ============================================
CREATE TABLE IF NOT EXISTS menu_{location} (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    category_id UUID REFERENCES categories(id),
    image_url TEXT,
    ingredients TEXT[],
    allergens TEXT[],
    dietary TEXT[],
    spice_level INTEGER,
    calories INTEGER,
    prep_time TEXT,
    chef_special BOOLEAN DEFAULT false,
    popular BOOLEAN DEFAULT false,
    seasonal BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    stock_status TEXT DEFAULT 'in_stock',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Menu Arbol Table
-- ============================================
CREATE TABLE IF NOT EXISTS menu_arbol (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    category_id UUID REFERENCES categories(id),
    image_url TEXT,
    ingredients TEXT[],
    allergens TEXT[],
    dietary TEXT[],
    spice_level INTEGER,
    calories INTEGER,
    prep_time TEXT,
    chef_special BOOLEAN DEFAULT false,
    popular BOOLEAN DEFAULT false,
    seasonal BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    stock_status TEXT DEFAULT 'in_stock',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Menu Capriccio Table
-- ============================================
CREATE TABLE IF NOT EXISTS menu_capriccio (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    category_id UUID REFERENCES categories(id),
    image_url TEXT,
    ingredients TEXT[],
    allergens TEXT[],
    dietary TEXT[],
    spice_level INTEGER,
    calories INTEGER,
    prep_time TEXT,
    chef_special BOOLEAN DEFAULT false,
    popular BOOLEAN DEFAULT false,
    seasonal BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    stock_status TEXT DEFAULT 'in_stock',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Menu 1898 Table
-- ============================================
CREATE TABLE IF NOT EXISTS menu_1898 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    category_id UUID REFERENCES categories(id),
    image_url TEXT,
    ingredients TEXT[],
    allergens TEXT[],
    dietary TEXT[],
    spice_level INTEGER,
    calories INTEGER,
    prep_time TEXT,
    chef_special BOOLEAN DEFAULT false,
    popular BOOLEAN DEFAULT false,
    seasonal BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    stock_status TEXT DEFAULT 'in_stock',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Indexes for Better Performance
-- ============================================

-- Categories indexes
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_active ON categories(active);
CREATE INDEX IF NOT EXISTS idx_categories_display_order ON categories(display_order);

-- Menu Arbol indexes
CREATE INDEX IF NOT EXISTS idx_menu_arbol_slug ON menu_arbol(slug);
CREATE INDEX IF NOT EXISTS idx_menu_arbol_category_id ON menu_arbol(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_arbol_active ON menu_arbol(active);
CREATE INDEX IF NOT EXISTS idx_menu_arbol_stock_status ON menu_arbol(stock_status);
CREATE INDEX IF NOT EXISTS idx_menu_arbol_popular ON menu_arbol(popular);
CREATE INDEX IF NOT EXISTS idx_menu_arbol_chef_special ON menu_arbol(chef_special);
CREATE INDEX IF NOT EXISTS idx_menu_arbol_display_order ON menu_arbol(display_order);

-- Menu Capriccio indexes
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_slug ON menu_capriccio(slug);
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_category_id ON menu_capriccio(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_active ON menu_capriccio(active);
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_stock_status ON menu_capriccio(stock_status);
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_popular ON menu_capriccio(popular);
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_chef_special ON menu_capriccio(chef_special);
CREATE INDEX IF NOT EXISTS idx_menu_capriccio_display_order ON menu_capriccio(display_order);

-- Menu 1898 indexes
CREATE INDEX IF NOT EXISTS idx_menu_1898_slug ON menu_1898(slug);
CREATE INDEX IF NOT EXISTS idx_menu_1898_category_id ON menu_1898(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_1898_active ON menu_1898(active);
CREATE INDEX IF NOT EXISTS idx_menu_1898_stock_status ON menu_1898(stock_status);
CREATE INDEX IF NOT EXISTS idx_menu_1898_popular ON menu_1898(popular);
CREATE INDEX IF NOT EXISTS idx_menu_1898_chef_special ON menu_1898(chef_special);
CREATE INDEX IF NOT EXISTS idx_menu_1898_display_order ON menu_1898(display_order);

-- ============================================
-- Triggers for Updated Timestamp
-- ============================================

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for categories table
CREATE TRIGGER update_categories_updated_at 
    BEFORE UPDATE ON categories 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Triggers for menu_arbol table
CREATE TRIGGER update_menu_arbol_updated_at 
    BEFORE UPDATE ON menu_arbol 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Triggers for menu_capriccio table
CREATE TRIGGER update_menu_capriccio_updated_at 
    BEFORE UPDATE ON menu_capriccio 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Triggers for menu_1898 table
CREATE TRIGGER update_menu_1898_updated_at 
    BEFORE UPDATE ON menu_1898 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Column Comments for Documentation
-- ============================================

-- Categories table comments
COMMENT ON TABLE categories IS 'Menu categories shared across all restaurant locations';
COMMENT ON COLUMN categories.id IS 'Unique identifier for the category';
COMMENT ON COLUMN categories.slug IS 'URL-friendly identifier for the category';
COMMENT ON COLUMN categories.name IS 'Display name of the category';
COMMENT ON COLUMN categories.description IS 'Optional description of the category';
COMMENT ON COLUMN categories.icon IS 'Optional icon identifier for UI display';
COMMENT ON COLUMN categories.display_order IS 'Order in which categories should be displayed';
COMMENT ON COLUMN categories.active IS 'Whether the category is currently active';

-- Menu table comments (applies to all menu tables)
COMMENT ON TABLE menu_arbol IS 'Menu items for the Arbol restaurant location';
COMMENT ON TABLE menu_capriccio IS 'Menu items for the Capriccio restaurant location';
COMMENT ON TABLE menu_1898 IS 'Menu items for the 1898 restaurant location';

-- Column comments for menu tables
COMMENT ON COLUMN menu_arbol.id IS 'Unique identifier for the menu item';
COMMENT ON COLUMN menu_arbol.slug IS 'URL-friendly identifier for the menu item';
COMMENT ON COLUMN menu_arbol.name IS 'Display name of the menu item';
COMMENT ON COLUMN menu_arbol.description IS 'Detailed description of the menu item';
COMMENT ON COLUMN menu_arbol.price IS 'Price in Chilean pesos';
COMMENT ON COLUMN menu_arbol.category_id IS 'Foreign key reference to categories table';
COMMENT ON COLUMN menu_arbol.image_url IS 'URL to the menu item image';
COMMENT ON COLUMN menu_arbol.ingredients IS 'Array of ingredients';
COMMENT ON COLUMN menu_arbol.allergens IS 'Array of allergen warnings';
COMMENT ON COLUMN menu_arbol.dietary IS 'Array of dietary classifications (vegan, vegetarian, gluten-free, etc.)';
COMMENT ON COLUMN menu_arbol.spice_level IS 'Spice level from 0 (mild) to 5 (very spicy)';
COMMENT ON COLUMN menu_arbol.calories IS 'Estimated calories per serving';
COMMENT ON COLUMN menu_arbol.prep_time IS 'Estimated preparation time';
COMMENT ON COLUMN menu_arbol.chef_special IS 'Whether this is a chef''s special';
COMMENT ON COLUMN menu_arbol.popular IS 'Whether this is a popular item';
COMMENT ON COLUMN menu_arbol.seasonal IS 'Whether this is a seasonal item';
COMMENT ON COLUMN menu_arbol.active IS 'Whether the item is currently available';
COMMENT ON COLUMN menu_arbol.stock_status IS 'Current stock status (in_stock, low_stock, out_of_stock)';
COMMENT ON COLUMN menu_arbol.display_order IS 'Order in which items should be displayed within their category';

-- ============================================
-- Sample Data Types and Enum Values
-- ============================================

-- Stock status enum values
-- Valid values: 'in_stock', 'low_stock', 'out_of_stock'

-- Dietary classifications
-- Common values: 'vegan', 'vegetarian', 'gluten-free', 'dairy-free', 'nut-free', 'kosher', 'halal'

-- Common allergens
-- Common values: 'Gluten', 'Lácteos', 'Huevos', 'Pescado', 'Mariscos', 'Nueces', 'Soja', 'Maní'

-- ============================================
-- Utility Queries
-- ============================================

-- Get all menu items with category names
-- SELECT 
--     m.*,
--     c.name as category_name
-- FROM menu_arbol m
-- LEFT JOIN categories c ON m.category_id = c.id
-- WHERE m.active = true
-- ORDER BY c.display_order, m.display_order;

-- Get popular items across all locations
-- SELECT name, price, 'arbol' as location FROM menu_arbol WHERE popular = true
-- UNION ALL
-- SELECT name, price, 'capriccio' as location FROM menu_capriccio WHERE popular = true
-- UNION ALL
-- SELECT name, price, '1898' as location FROM menu_1898 WHERE popular = true;

-- Update stock status
-- UPDATE menu_arbol SET stock_status = 'out_of_stock' WHERE slug = 'item-slug';

-- ============================================
-- End of Schema
-- ============================================