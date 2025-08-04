# PowerShell script to split the migration file into manageable batches

$inputFile = "scripts/complete-migration.sql"
$content = Get-Content $inputFile -Raw

# Split by INSERT statements
$statements = @()
$currentStatement = @()
$inStatement = $false

$content -split "`r?`n" | ForEach-Object {
    $line = $_
    if ($line -match '^INSERT INTO') {
        if ($currentStatement.Count -gt 0 -and $inStatement) {
            $statements += ($currentStatement -join "`n")
        }
        $currentStatement = @($line)
        $inStatement = $true
    } elseif ($inStatement) {
        $currentStatement += $line
        if ($line -match '^updated_at = CURRENT_TIMESTAMP;$') {
            $statements += ($currentStatement -join "`n")
            $currentStatement = @()
            $inStatement = $false
        }
    }
}

# Add last statement if exists
if ($currentStatement.Count -gt 0 -and $inStatement) {
    $statements += ($currentStatement -join "`n")
}

Write-Host "Found $($statements.Count) SQL statements"

# Separate products and location_products statements
$productStatements = @()
$locationProductStatements = @()

foreach ($stmt in $statements) {
    if ($stmt -match 'INSERT INTO products') {
        $productStatements += $stmt
    } elseif ($stmt -match 'INSERT INTO location_products') {
        $locationProductStatements += $stmt
    }
}

Write-Host "Products statements: $($productStatements.Count)"
Write-Host "Location_products statements: $($locationProductStatements.Count)"

# Create product batches
$batchSize = 25
$batchNum = 1

for ($i = 0; $i -lt $productStatements.Count; $i += $batchSize) {
    $end = [Math]::Min($i + $batchSize - 1, $productStatements.Count - 1)
    $batch = $productStatements[$i..$end]
    $filename = "batch_products_{0:D3}.sql" -f $batchNum
    
    $batch -join "`n`n" | Out-File -FilePath $filename -Encoding UTF8
    Write-Host "Created $filename with $($batch.Count) statements"
    $batchNum++
}

# Create location_products batches
$batchNum = 1
for ($i = 0; $i -lt $locationProductStatements.Count; $i += $batchSize) {
    $end = [Math]::Min($i + $batchSize - 1, $locationProductStatements.Count - 1)
    $batch = $locationProductStatements[$i..$end]
    $filename = "batch_location_products_{0:D3}.sql" -f $batchNum
    
    $batch -join "`n`n" | Out-File -FilePath $filename -Encoding UTF8
    Write-Host "Created $filename with $($batch.Count) statements"
    $batchNum++
}

Write-Host "Batch files created successfully!"