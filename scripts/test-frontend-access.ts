import fetch from 'node-fetch';

async function testFrontendAccess() {
  console.log('🔍 Testing Frontend Menu Access...\n');
  
  const urls = [
    'http://localhost:3000/capriccio',
    'http://localhost:3000/capriccio/menu'
  ];
  
  for (const url of urls) {
    try {
      console.log(`Testing ${url}...`);
      const response = await fetch(url);
      
      if (response.ok) {
        const html = await response.text();
        
        // Check for key indicators
        const hasCapriccio = html.includes('Capriccio');
        const hasMenu = html.includes('menu') || html.includes('Menu');
        const hasPrices = html.includes('$');
        
        console.log(`  ✅ Status: ${response.status}`);
        console.log(`  ✅ Contains "Capriccio": ${hasCapriccio}`);
        console.log(`  ✅ Contains menu references: ${hasMenu}`);
        console.log(`  ✅ Contains prices: ${hasPrices}`);
        
        // Check for specific products if on menu page
        if (url.includes('/menu')) {
          const hasProducts = html.includes('Auguri') || html.includes('Ceviche');
          console.log(`  ✅ Contains products: ${hasProducts}`);
        }
      } else {
        console.log(`  ❌ Status: ${response.status}`);
      }
      console.log('');
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
      console.log('  ℹ️  Make sure the development server is running (bun dev)\n');
    }
  }
}

// Run the test
testFrontendAccess();