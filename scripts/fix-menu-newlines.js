const fs = require('fs');
const path = require('path');

// Read the menu file
const menuPath = path.join(__dirname, '../lib/menu-1898.ts');
let content = fs.readFileSync(menuPath, 'utf8');

// Fix the incorrect literal \n in the file
content = content.replace(/\\n/g, '\n');

// Write the fixed content
fs.writeFileSync(menuPath, content, 'utf8');
console.log('Fixed newline issues!');