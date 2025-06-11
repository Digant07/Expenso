# PowerShell script to remove comments from TypeScript/JavaScript files

# Define file extensions to process
$extensions = @("*.ts", "*.tsx", "*.js", "*.jsx", "*.json")

# Directories to exclude
$excludeDirs = @("node_modules", ".next", "dist", "build")

# Function to process a file
function Process-File {
    param (
        [string]$filePath
    )
    
    Write-Host "Processing: $filePath"
    
    # Read file content
    $content = Get-Content -Path $filePath -Raw
    
    # Remove single line comments (// ...)
    $content = $content -replace '//.*?$', '' -replace '^\s*//.*?$', '' -Replace '^\s+$', ''
    
    # Remove multi-line comments (/* ... */)
    $content = $content -replace '/\*[\s\S]*?\*/', ''
    
    # Remove JSDoc comments (/** ... */)
    $content = $content -replace '/\*\*[\s\S]*?\*/', ''
    
    # Remove empty lines (including ones that became empty after comment removal)
    $contentLines = $content -split "`n" | Where-Object { $_ -match '\S' }
    $content = $contentLines -join "`n"
    
    # Write the cleaned content back to the file
    Set-Content -Path $filePath -Value $content
}

# Main function to find and process files
function Process-Directory {
    param (
        [string]$directory
    )
    
    # Get all subdirectories except excluded ones
    $subDirs = Get-ChildItem -Path $directory -Directory | 
                Where-Object { $excludeDirs -notcontains $_.Name }
    
    # Process each subdirectory
    foreach ($dir in $subDirs) {
        Process-Directory -directory $dir.FullName
    }
    
    # Process files in the current directory
    foreach ($ext in $extensions) {
        $files = Get-ChildItem -Path $directory -Filter $ext -File
        foreach ($file in $files) {
            Process-File -filePath $file.FullName
        }
    }
}

# Start processing from the current directory
$currentDir = Get-Location
Write-Host "Starting to remove comments from files in: $currentDir"
Process-Directory -directory $currentDir

Write-Host "Comment removal complete!" 