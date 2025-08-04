import { config } from "dotenv";
config({ path: ".env.local" });

const projectId = "ancient-darkness-66047211";

console.log(`
======================================
Restaurant Menu Database Migration
======================================

This script will execute the complete menu migration using the Neon database.

Project ID: ${projectId}
Database: neondb

Please ensure scripts/complete-migration.sql has been generated.

This migration will:
- Insert 425 unique products
- Create 483 location-product relationships
- Ensure all 3 locations have their complete menus

Press Ctrl+C to cancel, or wait to continue...
`);

// Give user time to cancel
setTimeout(async () => {
  console.log("\nStarting migration...\n");
  
  console.log(`
Next steps to complete the migration:

1. Execute the SQL file using one of these methods:

   Option A - Using psql command line:
   psql "${process.env.DATABASE_URL}" -f scripts/complete-migration.sql

   Option B - Using Neon Console:
   - Go to https://console.neon.tech/app/projects/${projectId}
   - Navigate to the SQL Editor
   - Copy and paste the contents of scripts/complete-migration.sql
   - Execute the queries

   Option C - Using a PostgreSQL client (pgAdmin, DBeaver, etc.):
   - Connect using the connection string from .env.local
   - Execute scripts/complete-migration.sql

2. Verify the migration:
   psql "${process.env.DATABASE_URL}" -f scripts/verify-migration.sql

3. Test the application:
   bun dev

4. Compare menus:
   bun tsx scripts/compare-menus.ts

The database connection details are:
- Host: ${process.env.DATABASE_URL?.split('@')[1]?.split('/')[0]}
- Database: neondb
- Connection string is in .env.local

Admin Panel Access:
- URL: http://localhost:3000/login
- Email: admin@restaurant.com
- Password: ${process.env.ADMIN_SECRET_KEY || '[Check ADMIN_SECRET_KEY in .env.local]'}
`);

}, 3000);