@echo off
REM Restaurant Menu Migration Script for Windows
REM This script migrates all menu data from local files to Neon PostgreSQL

echo ========================================
echo Restaurant Menu Database Migration
echo ========================================
echo.
echo This script will migrate all menu data to the Neon PostgreSQL database.
echo.
echo Prerequisites:
echo 1. PostgreSQL client (psql) must be installed
echo 2. .env.local must contain valid DATABASE_URL
echo.
echo Press any key to continue or Ctrl+C to cancel...
pause > nul

REM Load environment variables from .env.local
for /f "delims=" %%x in (.env.local) do (
    echo %%x | findstr /r "^[^#]" > nul && set "%%x"
)

REM Check if DATABASE_URL is set
if "%DATABASE_URL%"=="" (
    echo ERROR: DATABASE_URL not found in .env.local
    exit /b 1
)

echo.
echo Starting migration...
echo.

REM Execute the migration SQL
echo Executing complete-migration.sql...
psql "%DATABASE_URL%" -f scripts\complete-migration.sql

if %errorlevel% equ 0 (
    echo.
    echo Migration completed successfully!
    echo.
    
    REM Run verification
    echo Running verification queries...
    psql "%DATABASE_URL%" -f scripts\verify-migration.sql
    
    echo.
    echo ========================================
    echo Migration Summary
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Run 'bun dev' to start the development server
    echo 2. Test all three restaurant locations
    echo 3. Verify menus match exactly with local files
    echo 4. Access admin panel at /login with:
    echo    Email: admin@restaurant.com
    echo    Password: [your ADMIN_SECRET_KEY from .env.local]
) else (
    echo.
    echo Migration failed!
    echo Please check the error messages above.
    exit /b 1
)

pause