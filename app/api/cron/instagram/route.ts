import { NextResponse } from 'next/server'
// import { scrapeInstagramProfile, cacheInstagramPosts } from '@/lib/instagram-scraper'
// import { supabase } from '@/lib/supabase-singleton'

// This endpoint can be called manually or by external cron service
// Cron jobs are disabled on free Vercel plan - uncomment when upgraded
export async function GET() {
  // Return a simple message for now
  return NextResponse.json({
    success: true,
    message: 'Instagram sync disabled - cron jobs require Vercel Pro plan',
    timestamp: new Date().toISOString()
  })
  
  /* UNCOMMENT WHEN VERCEL PLAN IS UPGRADED:
  // Verify cron secret to prevent unauthorized calls
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Get all locations with Instagram usernames
    const { data: locations, error } = await supabase
      .from('locations')
      .select('id, slug, instagram_username')
      .not('instagram_username', 'is', null)
    
    if (error || !locations) {
      throw new Error('Failed to fetch locations')
    }

    const results = []
    
    // Scrape each location's Instagram
    for (const location of locations) {
      try {
        console.log(`Scraping Instagram for ${location.slug}...`)
        
        const posts = await scrapeInstagramProfile(location.instagram_username)
        
        if (posts.length > 0) {
          await cacheInstagramPosts(location.id, posts)
          results.push({
            location: location.slug,
            posts_scraped: posts.length,
            success: true
          })
        } else {
          results.push({
            location: location.slug,
            posts_scraped: 0,
            success: false,
            error: 'No posts found'
          })
        }
      } catch (error) {
        console.error(`Failed to scrape ${location.slug}:`, error)
        results.push({
          location: location.slug,
          posts_scraped: 0,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      results
    })
  } catch (error) {
    console.error('Cron job failed:', error)
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
  */
}

// Also support POST for manual triggers
export async function POST() {
  return GET()
}