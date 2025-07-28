const fs = require('fs');
const path = require('path');

// Function to parse price from string format to number
function parsePrice(priceStr) {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    // Remove $, dots and convert to number
    return parseInt(priceStr.replace(/[$.,]/g, ''));
}

// Function to normalize item names for comparison
function normalizeName(name) {
    return name.toLowerCase().trim()
        .replace(/\s+/g, ' ')
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n');
}

// Read menu files
function readMenuArbol() {
    const content = fs.readFileSync(path.join(__dirname, '../lib/menu-arbol.ts'), 'utf8');
    const items = [];
    
    // Use a more robust approach to parse TypeScript objects
    // Find all objects between { and }
    const objectRegex = /{\s*id:\s*"([^"]+)"[\s\S]*?}/g;
    let match;
    
    while ((match = objectRegex.exec(content)) !== null) {
        const objectStr = match[0];
        
        // Extract individual properties
        const idMatch = objectStr.match(/id:\s*"([^"]+)"/);
        const nameMatch = objectStr.match(/name:\s*"([^"]+)"/);
        const priceMatch = objectStr.match(/price:\s*(\d+)/);
        const categoryMatch = objectStr.match(/category:\s*"([^"]+)"/);
        
        if (idMatch && nameMatch && priceMatch && categoryMatch) {
            items.push({
                id: idMatch[1],
                name: nameMatch[1],
                price: parseInt(priceMatch[1]),
                category: categoryMatch[1]
            });
        }
    }
    
    return items;
}

function readMenuCapriccio() {
    const content = fs.readFileSync(path.join(__dirname, '../lib/menu-capriccio.ts'), 'utf8');
    const items = [];
    
    // Use a more robust approach to parse TypeScript objects
    const objectRegex = /{\s*id:\s*"([^"]+)"[\s\S]*?}/g;
    let match;
    
    while ((match = objectRegex.exec(content)) !== null) {
        const objectStr = match[0];
        
        // Extract individual properties
        const idMatch = objectStr.match(/id:\s*"([^"]+)"/);
        const nameMatch = objectStr.match(/name:\s*"([^"]+)"/);
        const priceMatch = objectStr.match(/price:\s*(\d+)/);
        const categoryMatch = objectStr.match(/category:\s*"([^"]+)"/);
        
        if (idMatch && nameMatch && priceMatch && categoryMatch) {
            items.push({
                id: idMatch[1],
                name: nameMatch[1],
                price: parseInt(priceMatch[1]),
                category: categoryMatch[1]
            });
        }
    }
    
    return items;
}

function readMenuScraped() {
    const content = fs.readFileSync(path.join(__dirname, '../lib/data/menu_scraped.json'), 'utf8');
    const data = JSON.parse(content);
    const items = [];
    
    // Flatten the structure
    if (data[0] && data[0].menu) {
        data[0].menu.forEach(category => {
            category.items.forEach(item => {
                items.push({
                    name: item.name,
                    price: parsePrice(item.price),
                    category: category.category,
                    description: item.description
                });
            });
        });
    }
    
    return items;
}

function readResultsCapriccio() {
    const content = fs.readFileSync(path.join(__dirname, '../lib/data/results(1).json'), 'utf8');
    const data = JSON.parse(content);
    const items = [];
    
    // Flatten the structure
    if (data[0] && data[0].menu) {
        data[0].menu.forEach(category => {
            category.items.forEach(item => {
                items.push({
                    name: item.name,
                    price: parsePrice(item.price),
                    category: category.category,
                    description: item.description
                });
            });
        });
    }
    
    return items;
}

// Compare menus
function compareMenus(menu1, menu1Name, menu2, menu2Name) {
    const report = {
        source1: menu1Name,
        source2: menu2Name,
        priceChanges: [],
        missingInSource1: [],
        missingInSource2: [],
        summary: {}
    };
    
    // Create maps for easier lookup
    const menu1Map = new Map();
    menu1.forEach(item => {
        menu1Map.set(normalizeName(item.name), item);
    });
    
    const menu2Map = new Map();
    menu2.forEach(item => {
        menu2Map.set(normalizeName(item.name), item);
    });
    
    // Check for price differences and missing items in menu2
    menu1Map.forEach((item1, normalizedName) => {
        const item2 = menu2Map.get(normalizedName);
        if (item2) {
            if (item1.price !== item2.price) {
                report.priceChanges.push({
                    name: item1.name,
                    priceIn1: item1.price,
                    priceIn2: item2.price,
                    difference: item2.price - item1.price,
                    percentChange: ((item2.price - item1.price) / item1.price * 100).toFixed(2) + '%'
                });
            }
        } else {
            report.missingInSource2.push({
                name: item1.name,
                price: item1.price,
                category: item1.category
            });
        }
    });
    
    // Check for items in menu2 but not in menu1
    menu2Map.forEach((item2, normalizedName) => {
        if (!menu1Map.has(normalizedName)) {
            report.missingInSource1.push({
                name: item2.name,
                price: item2.price,
                category: item2.category
            });
        }
    });
    
    // Summary statistics
    report.summary = {
        totalItemsIn1: menu1.length,
        totalItemsIn2: menu2.length,
        itemsWithPriceChanges: report.priceChanges.length,
        itemsMissingIn1: report.missingInSource1.length,
        itemsMissingIn2: report.missingInSource2.length,
        averagePriceChange: report.priceChanges.length > 0 
            ? (report.priceChanges.reduce((sum, item) => sum + item.difference, 0) / report.priceChanges.length).toFixed(0)
            : 0
    };
    
    return report;
}

// Main execution
console.log('Reading menu files...\n');

const menuArbol = readMenuArbol();
const menuScraped = readMenuScraped();
const menuCapriccio = readMenuCapriccio();
const resultsCapriccio = readResultsCapriccio();

console.log(`Found ${menuArbol.length} items in menu-arbol.ts`);
console.log(`Found ${menuScraped.length} items in menu_scraped.json`);
console.log(`Found ${menuCapriccio.length} items in menu-capriccio.ts`);
console.log(`Found ${resultsCapriccio.length} items in results(1).json\n`);

// Compare Arbol menu
const arbolComparison = compareMenus(menuArbol, 'menu-arbol.ts', menuScraped, 'menu_scraped.json');

// Compare Capriccio menu
const capriccioComparison = compareMenus(menuCapriccio, 'menu-capriccio.ts', resultsCapriccio, 'results(1).json');

// Generate detailed report
const fullReport = {
    generatedAt: new Date().toISOString(),
    comparisons: {
        arbol: arbolComparison,
        capriccio: capriccioComparison
    }
};

// Save report to file
fs.writeFileSync(
    path.join(__dirname, 'menu-comparison-detailed-report.json'),
    JSON.stringify(fullReport, null, 2)
);

// Print report
console.log('=== MENU COMPARISON REPORT ===\n');

console.log('--- EL ÁRBOL COMPARISON ---');
console.log(`Comparing menu-arbol.ts vs menu_scraped.json\n`);

console.log('Summary:');
console.log(`- Total items in menu-arbol.ts: ${arbolComparison.summary.totalItemsIn1}`);
console.log(`- Total items in menu_scraped.json: ${arbolComparison.summary.totalItemsIn2}`);
console.log(`- Items with price changes: ${arbolComparison.summary.itemsWithPriceChanges}`);
console.log(`- Items missing in menu-arbol.ts: ${arbolComparison.summary.itemsMissingIn1}`);
console.log(`- Items missing in menu_scraped.json: ${arbolComparison.summary.itemsMissingIn2}`);
console.log(`- Average price change: $${arbolComparison.summary.averagePriceChange}\n`);

if (arbolComparison.priceChanges.length > 0) {
    console.log('Price Changes:');
    arbolComparison.priceChanges.forEach(item => {
        console.log(`- ${item.name}: $${item.priceIn1} → $${item.priceIn2} (${item.difference > 0 ? '+' : ''}$${item.difference}, ${item.percentChange})`);
    });
    console.log('');
}

if (arbolComparison.missingInSource2.length > 0) {
    console.log('Items in menu-arbol.ts but NOT in menu_scraped.json:');
    arbolComparison.missingInSource2.forEach(item => {
        console.log(`- ${item.name} ($${item.price}) [${item.category}]`);
    });
    console.log('');
}

if (arbolComparison.missingInSource1.length > 0) {
    console.log('Items in menu_scraped.json but NOT in menu-arbol.ts:');
    arbolComparison.missingInSource1.forEach(item => {
        console.log(`- ${item.name} ($${item.price}) [${item.category}]`);
    });
    console.log('');
}

console.log('\n--- CAPRICCIO COMPARISON ---');
console.log(`Comparing menu-capriccio.ts vs results(1).json\n`);

console.log('Summary:');
console.log(`- Total items in menu-capriccio.ts: ${capriccioComparison.summary.totalItemsIn1}`);
console.log(`- Total items in results(1).json: ${capriccioComparison.summary.totalItemsIn2}`);
console.log(`- Items with price changes: ${capriccioComparison.summary.itemsWithPriceChanges}`);
console.log(`- Items missing in menu-capriccio.ts: ${capriccioComparison.summary.itemsMissingIn1}`);
console.log(`- Items missing in results(1).json: ${capriccioComparison.summary.itemsMissingIn2}`);
console.log(`- Average price change: $${capriccioComparison.summary.averagePriceChange}\n`);

if (capriccioComparison.priceChanges.length > 0) {
    console.log('Price Changes:');
    capriccioComparison.priceChanges.forEach(item => {
        console.log(`- ${item.name}: $${item.priceIn1} → $${item.priceIn2} (${item.difference > 0 ? '+' : ''}$${item.difference}, ${item.percentChange})`);
    });
    console.log('');
}

if (capriccioComparison.missingInSource2.length > 0) {
    console.log('Items in menu-capriccio.ts but NOT in results(1).json:');
    capriccioComparison.missingInSource2.forEach(item => {
        console.log(`- ${item.name} ($${item.price}) [${item.category}]`);
    });
    console.log('');
}

if (capriccioComparison.missingInSource1.length > 0) {
    console.log('Items in results(1).json but NOT in menu-capriccio.ts:');
    capriccioComparison.missingInSource1.forEach(item => {
        console.log(`- ${item.name} ($${item.price}) [${item.category}]`);
    });
    console.log('');
}

console.log('\nDetailed report saved to: menu-comparison-detailed-report.json');