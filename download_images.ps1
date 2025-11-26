# Download images from Google Drive for ISPOR-HEOR UNN Website
# This script downloads all leadership, award winners, and other images

# Function to download from Google Drive
function Download-GoogleDriveFile {
    param(
        [string]$FileId,
        [string]$DestPath
    )
    
    $url = "https://drive.google.com/uc?export=download&id=$FileId"
    Write-Host "Downloading to: $DestPath"
    
    try {
        curl -L -o "$DestPath" "$url"
        Write-Host "✓ Downloaded: $DestPath" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed: $DestPath" -ForegroundColor Red
    }
}

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "assets\images\people" | Out-Null
New-Item -ItemType Directory -Force -Path "assets\images\people\award winners" | Out-Null
New-Item -ItemType Directory -Force -Path "assets\videos" | Out-Null

Write-Host "`n=== Downloading Leadership Team Images ===" -ForegroundColor Cyan

# 2024/2025 Leadership Team
Download-GoogleDriveFile "1qk6C2xAcQPlVef1T-7ECdzAiCn2GwSmJ" "assets\images\people\favour-chinemeogo-augustine.jpg"
Download-GoogleDriveFile "13tR7mz_UkixFxwUhHKTe-r7pSKKQKviH" "assets\images\people\idogwu-oge-luciana.jpg"
Download-GoogleDriveFile "1EyJUtEolI5oG8fKNbgIcQFqngtYi63if" "assets\images\people\genevieve-akajiobi-somtochukwu.jpg"
Download-GoogleDriveFile "1RZDANGKvM5JRP_1q6D8CjMPPIHCfjnV1" "assets\images\people\eze-pascal-chisom.jpg"
Download-GoogleDriveFile "1GdW84dkeT4SgRGq3vqeQvzJmyiiHyC-3" "assets\images\people\okwudili-favour-chinagorom.jpg"
Download-GoogleDriveFile "1cHvlXXMw2fRmOw_BvOfpYg38DHWPIVNS" "assets\images\people\kama-favour-ijeoma.jpg"
Download-GoogleDriveFile "1DeBz8U0IQ6GJXPP69c5XckQdBGJ323Da" "assets\images\people\sunday-james-ebenezer.jpg"
Download-GoogleDriveFile "1kF8B7Y6qof545PbpOlacDjBdgCY6Lxzi" "assets\images\people\okafor-pleasant-ucheomachukwu.jpg"
Download-GoogleDriveFile "1WX4vtpz19eiR7viJbE1q-4xVTueWtmBh" "assets\images\people\okoli-jennifer-ujunwa.jpg"
Download-GoogleDriveFile "1o5a6pIN2XP2dvTltEyoVqC0AM5xngg0Z" "assets\images\people\ali-sarah-ifeoma.jpg"
Download-GoogleDriveFile "1N99VFV4DppZl8VAlC8ozwFIaI_pmvAsp" "assets\images\people\nwinyinya-ifeoma-precious.jpg"
Download-GoogleDriveFile "16KDbCzRB3fufJ_CIAT35AjOuhpiMel83" "assets\images\people\ferdinand-joy-chidimma.jpg"
Download-GoogleDriveFile "1ulL9r6v8rnZI98zX97syDhewUqx8p-ru" "assets\images\people\ogunjobi-bamidele-victor.jpg"
Download-GoogleDriveFile "18UGS4kP1BUKLOpNc2vyHFzrmT4Ko4bmj" "assets\images\people\ojukwu-chisom-yvonne.jpg"
Download-GoogleDriveFile "1m4qg13juOHbVErwvNTgDJRkrvt6seIp2" "assets\images\people\okwor-victor-oluchukwu.jpg"
Download-GoogleDriveFile "1vYGwKpAjVawNvwpkPgaSfwKCX2p5qJWl" "assets\images\people\anaelechi-shalom-ebubechi.jpg"
Download-GoogleDriveFile "1Lnk-7OnUMMHBRK57TQbzCTf865gQqE32" "assets\images\people\chukwuma-adaobi-maryann.jpg"
Download-GoogleDriveFile "1eKuXcBXQHK8UM8ItSCAOX6cF7tcsGK1T" "assets\images\people\obeleagu-chukwuka-brandon.jpg"
Download-GoogleDriveFile "1PPYRRdqSkAVIlf6OXIonJjRBr4fvp5i4" "assets\images\people\nzekeeh-chidera-nancy.jpg"
Download-GoogleDriveFile "1FAax5BdtlZwVVuF9CAobJUgWDXlvmC90" "assets\images\people\ibezim-precious-ugochinyere.jpg"
Download-GoogleDriveFile "1yL2hrxQK4jgdoWYE6nP91c26k7jAcr5o" "assets\images\people\chinwuba-tobechukwu-daniel.jpg"
Download-GoogleDriveFile "1l4hKX5B0RIYq0itb1kX345r5yiYWw7Cn" "assets\images\people\odigbo-ezinne-anthonete.jpg"

Write-Host "`n=== Downloading Award Winners Images ===" -ForegroundColor Cyan

# Most Active ISPORites Award Winners
Download-GoogleDriveFile "1tCL6gE-CfJbODIMGirBMwnhapYGMvsIK" "assets\images\people\egwuonwu-emmanuella-chiamaka.jpg"
Download-GoogleDriveFile "1e3UbViaIgmFTqEEjmpZJmKQvIFqlGFr8" "assets\images\people\ohia-favour-amarachi.jpg"
Download-GoogleDriveFile "1mMKz1vw9DLIfGYe5WOXCFLLBqmBG2PH8" "assets\images\people\onah-prisca-chibundu.jpg"
Download-GoogleDriveFile "1Mzr4jkrXq7qXCBN1ksSYtCxOZBnz9J7A" "assets\images\people\nnadozie-amarachi-jessica.jpg"
Download-GoogleDriveFile "1x8AXfoDzLLUSc14WFC4L2v6ZpdCR2Abf" "assets\images\people\agada-isaac.jpg"

Write-Host "`n=== Downloading Hero Video ===" -ForegroundColor Cyan

# Hero Video
Download-GoogleDriveFile "1JoKXzY8L5t5xGdImqMSkFJIJC7dBpo2l" "assets\videos\hero-video.mp4"

Write-Host "`n=== Download Complete! ===" -ForegroundColor Green
Write-Host "Total files downloaded to assets directory" -ForegroundColor Green
