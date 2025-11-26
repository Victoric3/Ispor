@echo off
echo Creating directories...
if not exist "assets\images\people" mkdir "assets\images\people"
if not exist "assets\images\people\award winners" mkdir "assets\images\people\award winners"
if not exist "assets\videos" mkdir "assets\videos"

echo.
echo === Downloading Leadership Team Images ===
curl -L "https://drive.google.com/uc?export=download&id=1qk6C2xAcQPlVef1T-7ECdzAiCn2GwSmJ" -o "assets\images\people\favour-chinemeogo-augustine.jpg"
curl -L "https://drive.google.com/uc?export=download&id=13tR7mz_UkixFxwUhHKTe-r7pSKKQKviH" -o "assets\images\people\idogwu-oge-luciana.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1EyJUtEolI5oG8fKNbgIcQFqngtYi63if" -o "assets\images\people\genevieve-akajiobi-somtochukwu.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1RZDANGKvM5JRP_1q6D8CjMPPIHCfjnV1" -o "assets\images\people\eze-pascal-chisom.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1GdW84dkeT4SgRGq3vqeQvzJmyiiHyC-3" -o "assets\images\people\okwudili-favour-chinagorom.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1cHvlXXMw2fRmOw_BvOfpYg38DHWPIVNS" -o "assets\images\people\kama-favour-ijeoma.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1DeBz8U0IQ6GJXPP69c5XckQdBGJ323Da" -o "assets\images\people\sunday-james-ebenezer.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1kF8B7Y6qof545PbpOlacDjBdgCY6Lxzi" -o "assets\images\people\okafor-pleasant-ucheomachukwu.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1WX4vtpz19eiR7viJbE1q-4xVTueWtmBh" -o "assets\images\people\okoli-jennifer-ujunwa.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1o5a6pIN2XP2dvTltEyoVqC0AM5xngg0Z" -o "assets\images\people\ali-sarah-ifeoma.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1N99VFV4DppZl8VAlC8ozwFIaI_pmvAsp" -o "assets\images\people\nwinyinya-ifeoma-precious.jpg"
curl -L "https://drive.google.com/uc?export=download&id=16KDbCzRB3fufJ_CIAT35AjOuhpiMel83" -o "assets\images\people\ferdinand-joy-chidimma.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1ulL9r6v8rnZI98zX97syDhewUqx8p-ru" -o "assets\images\people\ogunjobi-bamidele-victor.jpg"
curl -L "https://drive.google.com/uc?export=download&id=18UGS4kP1BUKLOpNc2vyHFzrmT4Ko4bmj" -o "assets\images\people\ojukwu-chisom-yvonne.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1m4qg13juOHbVErwvNTgDJRkrvt6seIp2" -o "assets\images\people\okwor-victor-oluchukwu.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1vYGwKpAjVawNvwpkPgaSfwKCX2p5qJWl" -o "assets\images\people\anaelechi-shalom-ebubechi.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1Lnk-7OnUMMHBRK57TQbzCTf865gQqE32" -o "assets\images\people\chukwuma-adaobi-maryann.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1eKuXcBXQHK8UM8ItSCAOX6cF7tcsGK1T" -o "assets\images\people\obeleagu-chukwuka-brandon.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1PPYRRdqSkAVIlf6OXIonJjRBr4fvp5i4" -o "assets\images\people\nzekeeh-chidera-nancy.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1FAax5BdtlZwVVuF9CAobJUgWDXlvmC90" -o "assets\images\people\ibezim-precious-ugochinyere.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1yL2hrxQK4jgdoWYE6nP91c26k7jAcr5o" -o "assets\images\people\chinwuba-tobechukwu-daniel.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1l4hKX5B0RIYq0itb1kX345r5yiYWw7Cn" -o "assets\images\people\odigbo-ezinne-anthonete.jpg"

echo.
echo === Downloading Award Winners Images ===
curl -L "https://drive.google.com/uc?export=download&id=1tCL6gE-CfJbODIMGirBMwnhapYGMvsIK" -o "assets\images\people\egwuonwu-emmanuella-chiamaka.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1e3UbViaIgmFTqEEjmpZJmKQvIFqlGFr8" -o "assets\images\people\ohia-favour-amarachi.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1mMKz1vw9DLIfGYe5WOXCFLLBqmBG2PH8" -o "assets\images\people\onah-prisca-chibundu.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1Mzr4jkrXq7qXCBN1ksSYtCxOZBnz9J7A" -o "assets\images\people\nnadozie-amarachi-jessica.jpg"
curl -L "https://drive.google.com/uc?export=download&id=1x8AXfoDzLLUSc14WFC4L2v6ZpdCR2Abf" -o "assets\images\people\agada-isaac.jpg"

echo.
echo === Downloading Hero Video ===
curl -L "https://drive.google.com/uc?export=download&id=1JoKXzY8L5t5xGdImqMSkFJIJC7dBpo2l" -o "assets\videos\hero-video.mp4"

echo.
echo === Download Complete! ===
echo Check assets\images\people\ for all downloaded images
pause
