const fs = require('fs');
const path = require('path');

// Read the menu file
const menuPath = path.join(__dirname, '../lib/menu-1898.ts');
let content = fs.readFileSync(menuPath, 'utf8');

// Remove the invalid properties using regex
// Remove "spicy": false,
content = content.replace(/\s*"spicy":\s*false,\n/g, '');
// Remove "vegetarian": false,
content = content.replace(/\s*"vegetarian":\s*false,\n/g, '');
// Remove "featured": false,
content = content.replace(/\s*"featured":\s*false,?\n/g, '');
// Remove "featured": false without comma
content = content.replace(/\s*"featured":\s*false\n/g, '');

// Write back the fixed content
fs.writeFileSync(menuPath, content);

console.log('Fixed menu-1898.ts by removing invalid properties');

// Count how many items were fixed
const originalMatches = fs.readFileSync(menuPath + '.backup', 'utf8').match(/"spicy":/g);
const fixedContent = fs.readFileSync(menuPath, 'utf8');
const remainingMatches = fixedContent.match(/"spicy":/g);

console.log(`Removed properties from ${originalMatches ? originalMatches.length : 0} items`);
console.log(`Remaining "spicy" properties: ${remainingMatches ? remainingMatches.length : 0}`);