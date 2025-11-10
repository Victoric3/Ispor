param(
  [switch]$Leaders,
  [switch]$Outreaches,
  [switch]$Publications
)

function Download-GDriveFile {
  param(
    [Parameter(Mandatory=$true)][string]$Id,
    [Parameter(Mandatory=$true)][string]$OutFile
  )
  $uri = "https://drive.google.com/uc?export=download&id=$Id"
  $outDir = [System.IO.Path]::GetDirectoryName($OutFile)
  if (!(Test-Path -LiteralPath $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }
  try {
    Invoke-WebRequest -Uri $uri -OutFile $OutFile -UseBasicParsing -ErrorAction Stop
    Write-Host "Downloaded: $OutFile" -ForegroundColor Green
  } catch {
    Write-Warning "Failed: $OutFile ($Id) -> $($_.Exception.Message)"
  }
}

function Test-CommandExists {
  param([Parameter(Mandatory=$true)][string]$Name)
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

function Download-GDriveFolder {
  param(
    [Parameter(Mandatory=$true)][string]$Id,
    [Parameter(Mandatory=$true)][string]$OutDir
  )
  if (!(Test-Path -LiteralPath $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }
  # Build a working command for gdown across environments
  $cmd = $null
  if (Test-CommandExists -Name 'gdown') {
    $cmd = "gdown --folder --id $Id -O `"$OutDir`""
  } elseif (Test-CommandExists -Name 'py') {
    $cmd = "py -m gdown --folder --id $Id -O `"$OutDir`""
  } elseif (Test-CommandExists -Name 'python') {
    $cmd = "python -m gdown --folder --id $Id -O `"$OutDir`""
  }

  if ($null -ne $cmd) {
    try {
      Write-Host "Running: $cmd" -ForegroundColor Cyan
      $proc = Start-Process powershell -ArgumentList "-NoProfile","-Command", $cmd -Wait -PassThru
      if ($proc.ExitCode -ne 0) { throw "gdown exited with code $($proc.ExitCode)" }
      Write-Host "Downloaded folder to $OutDir" -ForegroundColor Green
    } catch {
      Write-Warning "Failed to download folder ($Id) -> $($_.Exception.Message)"
    }
  } else {
    Write-Warning "gdown not found. Install it to enable Google Drive folder downloads: py -m pip install --user gdown"
  }
}

if ($Leaders) {
  $items = @(
    @{ Id = '1qk6C2xAcQPlVef1T-7ECdzAiCn2GwSmJ'; Out = 'assets/images/people/favour-chinemeogo-augustine.jpg' },
    @{ Id = '13tR7mz_UkixFxwUhHKTe-r7pSKKQKviH'; Out = 'assets/images/people/idogwu-oge-luciana.jpg' },
    @{ Id = '1EyJUtEolI5oG8fKNbgIcQFqngtYi63if'; Out = 'assets/images/people/genevieve-akajiobi-somtochukwu.jpg' },
    @{ Id = '1RZDANGKvM5JRP_1q6D8CjMPPIHCfjnV1'; Out = 'assets/images/people/eze-pascal-chisom.jpg' },
    @{ Id = '1GdW84dkeT4SgRGq3vqeQvzJmyiiHyC-3'; Out = 'assets/images/people/okwudili-favour-chinagorom.jpg' },
    @{ Id = '1cHvlXXMw2fRmOw_BvOfpYg38DHWPIVNS'; Out = 'assets/images/people/kama-favour-ijeoma.jpg' },
    @{ Id = '1DeBz8U0IQ6GJXPP69c5XckQdBGJ323Da'; Out = 'assets/images/people/sunday-james-ebenezer.jpg' },
    @{ Id = '1kF8B7Y6qof545PbpOlacDjBdgCY6Lxzi'; Out = 'assets/images/people/okafor-pleasant-ucheomachukwu.jpg' },
    @{ Id = '1WX4vtpz19eiR7viJbE1q-4xVTueWtmBh'; Out = 'assets/images/people/okoli-jennifer-ujunwa.jpg' },
    @{ Id = '1o5a6pIN2XP2dvTltEyoVqC0AM5xngg0Z'; Out = 'assets/images/people/ali-sarah-ifeoma.jpg' },
    @{ Id = '1N99VFV4DppZl8VAlC8ozwFIaI_pmvAsp'; Out = 'assets/images/people/nwinyinya-ifeoma-precious.jpg' },
    @{ Id = '16KDbCzRB3fufJ_CIAT35AjOuhpiMel83'; Out = 'assets/images/people/ferdinand-joy-chidimma.jpg' },
    @{ Id = '1ulL9r6v8rnZI98zX97syDhewUqx8p-ru'; Out = 'assets/images/people/ogunjobi-bamidele-victor.jpg' },
    @{ Id = '18UGS4kP1BUKLOpNc2vyHFzrmT4Ko4bmj'; Out = 'assets/images/people/ojukwu-chisom-yvonne.jpg' },
    @{ Id = '1m4qg13juOHbVErwvNTgDJRkrvt6seIp2'; Out = 'assets/images/people/okwor-victor-oluchukwu.jpg' },
    @{ Id = '1vYGwKpAjVawNvwpkPgaSfwKCX2p5qJWl'; Out = 'assets/images/people/anaelechi-shalom-ebubechi.jpg' },
    @{ Id = '1Lnk-7OnUMMHBRK57TQbzCTf865gQqE32'; Out = 'assets/images/people/chukwuma-adaobi-maryann.jpg' },
    @{ Id = '1eKuXcBXQHK8UM8ItSCAOX6cF7tcsGK1T'; Out = 'assets/images/people/obeleagu-chukwuka-brandon.jpg' },
    @{ Id = '1PPYRRdqSkAVIlf6OXIonJjRBr4fvp5i4'; Out = 'assets/images/people/nzekeeh-chidera-nancy.jpg' },
    @{ Id = '1FAax5BdtlZwVVuF9CAobJUgWDXlvmC90'; Out = 'assets/images/people/ibezim-precious-ugochinyere.jpg' },
    @{ Id = '1yL2hrxQK4jgdoWYE6nP91c26k7jAcr5o'; Out = 'assets/images/people/chinwuba-tobechukwu-daniel.jpg' },
    @{ Id = '1l4hKX5B0RIYq0itb1kX345r5yiYWw7Cn'; Out = 'assets/images/people/odigbo-ezinne-anthonete.jpg' }
  )
  foreach ($i in $items) { Download-GDriveFile -Id $i.Id -OutFile $i.Out }
}

if ($Publications) {
  # These appear to be Google Drive FOLDER IDs; use gdown if available
  $pubFolders = @(
    @{ Id = '10JlxJuCoxnyuPhkj7SXSqtFEeaR6L0qd'; OutDir = 'assets/publications/dzine-2025' },
    @{ Id = '1UrXjfL9_1ad2JdvMDdy4vMEemUwXW3e4'; OutDir = 'assets/publications/newsletter-2025-04' },
    @{ Id = '1Yz9HtNzTAaMtVGvctRryAIBaegYgpSuw'; OutDir = 'assets/publications/newsletter-2025-05' },
    @{ Id = '1FIyXaURpvvCBsx09gtZA5qN3HDd4qpbg'; OutDir = 'assets/publications/newsletter-2025-09' },
    @{ Id = '1n66smWOpWybUEYvyTruD1tGrwP44wXAx'; OutDir = 'assets/publications/health-digest-soft-drinks' }
  )
  foreach ($pf in $pubFolders) { Download-GDriveFolder -Id $pf.Id -OutDir $pf.OutDir }
}

if ($Outreaches) {
  # Outreach folders from IMAGE_DOWNLOAD_GUIDE.md
  $outreachFolders = @(
    @{ Id = '1ogdeiPliHoFfNBP-U0Cqh8xKB2v_kHWd'; OutDir = 'assets/images/outreaches/ispor1000' }, # ISPOR 1000 - Project Dent O'Clock
    @{ Id = '1DuViGepRKYCQkhJL0t5i2nBT6gGuzUMi'; OutDir = 'assets/images/outreaches/reproductive-health' }, # Reproductive Health Outreach
    @{ Id = '1Eu8SC9xqdJEpGk1ECoQ4YSWvwLL_2EXy'; OutDir = 'assets/images/outreaches/ibagwa-ani' }, # Community Outreach - IBAGWA-ANI
    @{ Id = '11_27EVGZjR4gxd5z4n7ftTKHSbPPq2_7'; OutDir = 'assets/images/outreaches/mental-health' }, # Mental Health Day Outreach
    @{ Id = '1dN9DyK07NkJ5ohXPdPbhN-MGg5SyVgQu'; OutDir = 'assets/images/outreaches/assemblies-god' }, # Vital Signs - Assemblies of God Church
    @{ Id = '1V4En_jAdSNoGPgwdKqOvLkclN5_w5Trf'; OutDir = 'assets/images/outreaches/health-walk' }  # Health Walk on Infectious Diseases
  )
  foreach ($of in $outreachFolders) { Download-GDriveFolder -Id $of.Id -OutDir $of.OutDir }

  # Single-file download for Vital Signs Outreach at UNN
  Download-GDriveFile -Id '1M9Rd6RqMp9hN2nhnFQGg2OrY_XinFf4x' -OutFile 'assets/images/outreaches/vital-signs-unn.jpg'
}

Write-Host "Done." -ForegroundColor Cyan
