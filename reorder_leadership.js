const fs = require('fs');
const path = require('path');

// Read the file with UTF-16LE encoding
const filePath = path.join(__dirname, 'temp_past_team.html');

console.log('Reading file...');
const content = fs.readFileSync(filePath, 'utf16le');

console.log(`File size: ${content.length} characters`);

// Search for Dominic
const searchTerm = 'dominic';
const lowerContent = content.toLowerCase();
const idx = lowerContent.indexOf(searchTerm);

if (idx !== -1) {
    console.log(`\nFound '${searchTerm}' at position ${idx}`);
    console.log('\nContext around the match:');
    console.log('='.repeat(80));
    const start = Math.max(0, idx - 500);
    const end = Math.min(content.length, idx + 500);
    console.log(content.substring(start, end));
    console.log('='.repeat(80));
    
    // Try to find the structure pattern
    // Look for card/div patterns that might contain team members
    const contextStart = Math.max(0, idx - 2000);
    const contextEnd = Math.min(content.length, idx + 2000);
    const largeContext = content.substring(contextStart, contextEnd);
    
    // Look for div or section tags that might define a team member card
    const cardPatternMatch = largeContext.match(/<div[^>]*class="[^"]*(?:card|member|team|person)[^"]*"[^>]*>[\s\S]*?dominic[\s\S]*?<\/div>/i);
    
    if (cardPatternMatch) {
        console.log('\n\nPossible card structure found:');
        console.log('='.repeat(80));
        console.log(cardPatternMatch[0].substring(0, 1000));
        console.log('='.repeat(80));
    }
} else {
    console.log(`\n'${searchTerm}' not found in the file`);
}

// Also search for common section markers
console.log('\nSearching for leadership section markers...');
const markers = ['leadership', 'team', 'president', 'executive', 'our team', 'our leadership'];

markers.forEach(marker => {
    const markerIdx = lowerContent.indexOf(marker.toLowerCase());
    if (markerIdx !== -1) {
        console.log(`\nFound '${marker}' at position ${markerIdx}`);
    }
});
