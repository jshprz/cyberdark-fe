param (
    [Parameter(Mandatory = $true, HelpMessage = "Specify the project root path. (This should work: './')")]
    [string]$ProjectRoot,
    [Parameter(Mandatory = $true, HelpMessage = "Specify the environment: dev or prod.")]
    [ValidateSet('dev', 'prod')]
    [string]$Env = 'prod',
    [Parameter(Mandatory = $true, HelpMessage = "Specify the remote host (e.g., 192.168.1.10).")]
    [string]$RemoteHost,
    [Parameter(Mandatory = $true, HelpMessage = "Specify the remote user.")]
    [string]$RemoteUser
)

$NgBuildFlags = if ($Env -eq 'prod') { '--configuration=production' } else { '--configuration=development' }

$RemoteDir     = '/var/www/smgn-cyber-fe/browser/'

# 1. BUILD
Write-Host "`n==> Installing deps & building Angular app ($Env) ..." -ForegroundColor Cyan
Push-Location $ProjectRoot

npm ci
if ($LASTEXITCODE) { throw "npm install failed." }

ng build $NgBuildFlags
if ($LASTEXITCODE) { throw "Angular build failed." }

Pop-Location

# Path to the build output
$BuildDir = Join-Path -Path $ProjectRoot -ChildPath "dist/smgn-cyber-fe/browser"

Write-Host "Build output directory: $BuildDir" -ForegroundColor Yellow
if (-not (Test-Path $BuildDir)) {
    throw "Build folder not found: $BuildDir"
}

# 2. DEPLOY VIA SCP
Write-Host "`n==> Deploying to $RemoteHost ..." -ForegroundColor Cyan

$sshTarget = "$RemoteUser@$RemoteHost"

ssh $sshTarget "mkdir -p $RemoteDir"

Get-ChildItem -Path $BuildDir | ForEach-Object {
    scp -r $_.FullName "${sshTarget}:$RemoteDir"
}

if ($LASTEXITCODE) { throw "SCP transfer failed." }

Write-Host "`n🎉  Deployment successful!" -ForegroundColor Green
