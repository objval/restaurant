-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Locations table
CREATE TABLE locations (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  concept TEXT NOT NULL,
  path VARCHAR(255) UNIQUE NOT NULL,
  coordinates JSONB NOT NULL DEFAULT '{}',
  theme JSONB NOT NULL DEFAULT '{}',
  images JSONB NOT NULL DEFAULT '{}',
  description TEXT,
  long_description TEXT,
  hours JSONB NOT NULL DEFAULT '{}',
  specialties TEXT[] DEFAULT '{}',
  atmosphere TEXT[] DEFAULT '{}',
  price_range VARCHAR(50),
  contact JSONB NOT NULL DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  stats JSONB DEFAULT '{}',
  social_proof JSONB DEFAULT '{}',
  social_media JSONB DEFAULT '{}',
  promotions JSONB DEFAULT '[]',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Products (menu items) table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  legacy_id VARCHAR(255) UNIQUE, -- To maintain existing IDs
  name VARCHAR(255) NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  image_alt TEXT,
  prep_time VARCHAR(50),
  calories INTEGER,
  spice_level INTEGER CHECK (spice_level IS NULL OR (spice_level >= 0 AND spice_level <= 5)),
  
  -- Flexible JSON fields for easy property management
  properties JSONB DEFAULT '{}',
  ingredients TEXT[] DEFAULT '{}',
  allergens TEXT[] DEFAULT '{}',
  dietary_tags TEXT[] DEFAULT '{}',
  nutritional_info JSONB DEFAULT '{}',
  
  -- Flags
  is_chef_special BOOLEAN DEFAULT false,
  is_popular BOOLEAN DEFAULT false,
  is_seasonal BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  
  -- SEO and metadata
  meta_title VARCHAR(255),
  meta_description TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Location-specific product availability and overrides
CREATE TABLE location_products (
  id SERIAL PRIMARY KEY,
  location_id VARCHAR(50) REFERENCES locations(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id),
  
  -- Location-specific overrides
  custom_price DECIMAL(10,2),
  custom_name VARCHAR(255),
  custom_description TEXT,
  
  -- Availability controls
  is_available BOOLEAN DEFAULT true,
  out_of_stock BOOLEAN DEFAULT false,
  available_from TIME,
  available_until TIME,
  available_days INTEGER[],
  
  -- Display controls
  display_order INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  
  -- Stock management
  stock_quantity INTEGER,
  low_stock_threshold INTEGER DEFAULT 5,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(location_id, product_id)
);

-- Menu highlights (for location landing pages)
CREATE TABLE menu_highlights (
  id SERIAL PRIMARY KEY,
  location_id VARCHAR(50) REFERENCES locations(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  custom_name VARCHAR(255),
  custom_description TEXT,
  custom_price VARCHAR(50),
  custom_image TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Admin users table (for Better Auth)
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sessions table (for Better Auth)
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audit log for tracking changes
CREATE TABLE audit_log (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES admin_users(id),
  action VARCHAR(50) NOT NULL,
  table_name VARCHAR(100) NOT NULL,
  record_id TEXT,
  old_values JSONB,
  new_values JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX idx_location_products_location ON location_products(location_id);
CREATE INDEX idx_location_products_product ON location_products(product_id);
CREATE INDEX idx_location_products_category ON location_products(category_id);
CREATE INDEX idx_location_products_available ON location_products(is_available);
CREATE INDEX idx_products_active ON products(is_active);
CREATE INDEX idx_products_legacy_id ON products(legacy_id);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_display_order ON categories(display_order);
CREATE INDEX idx_menu_highlights_location ON menu_highlights(location_id);
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);
CREATE INDEX idx_audit_log_user ON audit_log(user_id);
CREATE INDEX idx_audit_log_table ON audit_log(table_name);

-- Create update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update timestamp trigger to all tables
CREATE TRIGGER update_locations_updated_at BEFORE UPDATE ON locations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_location_products_updated_at BEFORE UPDATE ON location_products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_menu_highlights_updated_at BEFORE UPDATE ON menu_highlights
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();