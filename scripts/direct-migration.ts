import { config } from "dotenv";
config({ path: ".env.local" });

import { createPool } from "@vercel/postgres";
import * as fs from "fs";
import * as path from "path";

async function executeMigration() {
  console.log("🚀 Starting direct migration execution...\n");

  // Read the migration file
  const migrationPath = path.join(__dirname, "complete-migration.sql");
  const migrationSQL = fs.readFileSync(migrationPath, "utf-8");

  // Split into individual statements (by semicolon + newline)
  const statements = migrationSQL
    .split(/;\s*\n/)
    .filter(stmt => stmt.trim().length > 0)
    .map(stmt => stmt.trim() + ";");

  console.log(`📊 Found ${statements.length} SQL statements to execute\n`);

  // Create connection pool
  const pool = createPool({
    connectionString: process.env.DATABASE_URL,
  });

  let successCount = 0;
  let errorCount = 0;
  const errors: string[] = [];

  // Execute in batches
  const batchSize = 50;
  const totalBatches = Math.ceil(statements.length / batchSize);

  for (let i = 0; i < statements.length; i += batchSize) {
    const batchNum = Math.floor(i / batchSize) + 1;
    const batch = statements.slice(i, i + batchSize);
    
    console.log(`Processing batch ${batchNum}/${totalBatches} (${batch.length} statements)...`);

    for (const statement of batch) {
      try {
        // Skip empty statements
        if (!statement.trim() || statement.trim() === ";") continue;

        await pool.sql([statement] as any);
        successCount++;

        // Show progress every 10 successful statements
        if (successCount % 10 === 0) {
          process.stdout.write(`✓ ${successCount} `);
        }
      } catch (error: any) {
        errorCount++;
        errors.push(`Statement ${i + batch.indexOf(statement)}: ${error.message}`);
        
        // Log first few errors
        if (errorCount <= 5) {
          console.error(`\n❌ Error: ${error.message}`);
        }
      }
    }
    
    console.log(""); // New line after batch
  }

  console.log("\n======================================");
  console.log("Migration Results");
  console.log("======================================");
  console.log(`✅ Successful statements: ${successCount}`);
  console.log(`❌ Failed statements: ${errorCount}`);

  if (errorCount > 0) {
    console.log("\nFirst 10 errors:");
    errors.slice(0, 10).forEach(err => console.log(`- ${err}`));
    
    // Save all errors to file
    fs.writeFileSync("scripts/migration-errors.log", errors.join("\n"));
    console.log(`\nAll errors saved to scripts/migration-errors.log`);
  }

  // Run verification
  console.log("\n🔍 Running verification queries...\n");

  try {
    const productCount = await pool.sql`SELECT COUNT(*) as count FROM products`;
    const locationProductCount = await pool.sql`SELECT COUNT(*) as count FROM location_products`;
    const locationStats = await pool.sql`
      SELECT l.name, COUNT(lp.product_id) as product_count
      FROM locations l
      LEFT JOIN location_products lp ON l.id = lp.location_id
      GROUP BY l.id, l.name
      ORDER BY l.name
    `;

    console.log(`Total products: ${productCount.rows[0].count}`);
    console.log(`Total location-product relationships: ${locationProductCount.rows[0].count}`);
    console.log("\nProducts per location:");
    locationStats.rows.forEach((row: any) => {
      console.log(`- ${row.name}: ${row.product_count} products`);
    });
  } catch (error) {
    console.error("Error running verification:", error);
  }

  await pool.end();
  
  console.log("\n✅ Migration process completed!");
  console.log("\nNext steps:");
  console.log("1. Run 'bun dev' to test the application");
  console.log("2. Run 'bun tsx scripts/compare-menus.ts' to verify menus match");
}

// Run the migration
executeMigration().catch(console.error);