param(
    [Parameter(Mandatory = $true)]
    [string]$TargetDir
)

$ErrorActionPreference = "Stop"

$spacingMap = @(
    @{ px = '4px';   var = 'var(--ease-space-1)' }
    @{ px = '8px';   var = 'var(--ease-space-2)' }
    @{ px = '12px';  var = 'var(--ease-space-3)' }
    @{ px = '16px';  var = 'var(--ease-space-4)' }
    @{ px = '20px';  var = 'var(--ease-space-5)' }
    @{ px = '24px';  var = 'var(--ease-space-6)' }
    @{ px = '32px';  var = 'var(--ease-space-8)' }
    @{ px = '40px';  var = 'var(--ease-space-10)' }
    @{ px = '48px';  var = 'var(--ease-space-12)' }
    @{ px = '64px';  var = 'var(--ease-space-16)' }
)

$sortedMap = $spacingMap | Sort-Object { $_.px.Length } -Descending

$files = Get-ChildItem -Path $TargetDir -Recurse -Filter "*.css" | Where-Object {
    $_.Name -notmatch '^easemotion\.(css|min\.css)$' -and
    $_.Name -notmatch '^variables\.css$' -and
    $_.DirectoryName -notmatch '\\node_modules\\' -and
    $_.DirectoryName -notmatch '\\.git\\' -and
    $_.DirectoryName -notmatch '\\assets\\' -and
    $_.FullName -notmatch '[/\\]scss[/\\]'
}

$totalFiles = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    if ($content -notmatch '(padding|margin):\s*\d+px') { continue }

    $original = $content

    # Protect var() fallback px values
    $state = @{ counter = 0; protected = @{} }
    $content = [regex]::Replace($content, 'var\([^)]+?,\s*\d+px\)', {
        param($m)
        $key = "___PX_$($state.counter)___"
        $state.protected[$key] = $m.Value
        $state.counter++
        return $key
    })

    # Replace single-value padding/margin: Npx
    foreach ($m in $sortedMap) {
        $content = $content -replace "(?<![-\w])padding:\s*$($m.px)(?=[\s;}!])", "padding: $($m.var)"
        $content = $content -replace "(?<![-\w])margin:\s*$($m.px)(?=[\s;}!])", "margin: $($m.var)"
    }

    # Restore protected
    foreach ($key in $state.protected.Keys) {
        $content = $content -replace [regex]::Escape($key), $state.protected[$key]
    }

    if ($content -ne $original) {
        [IO.File]::WriteAllText($file.FullName, $content, [Text.UTF8Encoding]::new($false))
        $totalFiles++
    }
}

Write-Host "Done. Files modified: $totalFiles" -ForegroundColor Cyan
return $totalFiles
