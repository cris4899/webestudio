$ErrorActionPreference = 'Continue'
$studyRoot = Split-Path $PSScriptRoot -Parent
$studyReport = @()
Get-ChildItem -LiteralPath (Join-Path $studyRoot 'solutions') -Recurse -Filter *.csproj | ForEach-Object {
    $studyProject = $_.FullName
    $studyRelative = $studyProject.Substring($studyRoot.Length + 1).Replace('\','/')
    $studyLog = Join-Path $studyRoot ('.study-cache/build-' + ($studyRelative -replace '[^a-zA-Z0-9]','-') + '.txt')
    & dotnet build $studyProject '-p:TargetFrameworks=net10.0-windows10.0.19041.0' '-f' 'net10.0-windows10.0.19041.0' '-v' 'minimal' *> $studyLog
    $studySuccess = $LASTEXITCODE -eq 0
    $studyReport += @{ project=$studyRelative; success=$studySuccess; target='net10.0-windows10.0.19041.0'; log=(Split-Path $studyLog -Leaf) }
    Write-Output (($studySuccess ? 'OK ' : 'ERROR ') + $studyRelative)
    $studyReport | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $studyRoot '.study-cache/build-report.json') -Encoding utf8
}
if ($studyReport.success -contains $false) { exit 1 }
