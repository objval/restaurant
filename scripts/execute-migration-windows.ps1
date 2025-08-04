# Restaurant Menu Migration Script for Windows PowerShell
# This script executes the complete menu migration to Neon PostgreSQL

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Restaurant Menu Database Migration" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Load environment variables from .env.local
$envFile = ".env.local"
if (Test-Path $envFile) {
    $envVars = Get-Content $envFile | Where-Object { $_ -match '^[^#].*=' }
    foreach ($var in $envVars) {
        $name, $value = $var -split '=', 2
        $value = $value.Trim('"')
        [System.Environment]::SetEnvironmentVariable($name, $value, "Process")
    }
}

$databaseUrl = [System.Environment]::GetEnvironmentVariable("DATABASE_URL", "Process")

if (-not $databaseUrl) {
    Write-Host "ERROR: DATABASE_URL not found in .env.local" -ForegroundColor Red
    exit 1
}

Write-Host "Database connection established." -ForegroundColor Green
Write-Host ""

# Check if psql is available
$psqlPath = Get-Command psql -ErrorAction SilentlyContinue

if ($psqlPath) {
    Write-Host "PostgreSQL client (psql) found." -ForegroundColor Green
    Write-Host ""
    
    # Execute migration
    Write-Host "Executing complete migration..." -ForegroundColor Yellow
    & psql $databaseUrl -f "scripts\complete-migration.sql"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Migration completed successfully!" -ForegroundColor Green
        Write-Host ""
        
        # Run verification
        Write-Host "Running verification queries..." -ForegroundColor Yellow
        & psql $databaseUrl -f "scripts\verify-migration.sql"
    } else {
        Write-Host ""
        Write-Host "Migration failed!" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "PostgreSQL client (psql) not found." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternative options to complete the migration:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Install PostgreSQL client tools from:" -ForegroundColor White
    Write-Host "   https://www.postgresql.org/download/windows/" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Use Neon Console (Web-based):" -ForegroundColor White
    Write-Host "   https://console.neon.tech/app/projects/ancient-darkness-66047211" -ForegroundColor Gray
    Write-Host "   - Go to SQL Editor" -ForegroundColor Gray
    Write-Host "   - Copy contents of scripts\complete-migration.sql" -ForegroundColor Gray
    Write-Host "   - Paste and execute" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Use a PostgreSQL GUI client like pgAdmin or DBeaver" -ForegroundColor White
    Write-Host ""
    Write-Host "Connection string:" -ForegroundColor White
    Write-Host $databaseUrl -ForegroundColor Gray
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")