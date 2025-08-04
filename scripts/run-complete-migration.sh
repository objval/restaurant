#!/bin/bash

# Restaurant Menu Migration Script
# This script migrates all menu data from local files to Neon PostgreSQL

echo "========================================"
echo "Restaurant Menu Database Migration"
echo "========================================"
echo ""
echo "This script will migrate all menu data to the Neon PostgreSQL database."
echo ""
echo "Prerequisites:"
echo "1. PostgreSQL client (psql) must be installed"
echo "2. .env.local must contain valid DATABASE_URL"
echo ""
echo "Press Enter to continue or Ctrl+C to cancel..."
read

# Load environment variables
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "ERROR: DATABASE_URL not found in .env.local"
    exit 1
fi

echo ""
echo "Starting migration..."
echo ""

# Execute the migration SQL
echo "Executing complete-migration.sql..."
psql "$DATABASE_URL" -f scripts/complete-migration.sql

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Migration completed successfully!"
    echo ""
    
    # Run verification
    echo "Running verification queries..."
    psql "$DATABASE_URL" -f scripts/verify-migration.sql
    
    echo ""
    echo "========================================"
    echo "Migration Summary"
    echo "========================================"
    echo ""
    echo "Next steps:"
    echo "1. Run 'bun dev' to start the development server"
    echo "2. Test all three restaurant locations"
    echo "3. Verify menus match exactly with local files"
    echo "4. Access admin panel at /login with:"
    echo "   Email: admin@restaurant.com"
    echo "   Password: [your ADMIN_SECRET_KEY from .env.local]"
else
    echo ""
    echo "❌ Migration failed!"
    echo "Please check the error messages above."
    exit 1
fi