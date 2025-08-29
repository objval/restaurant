import { NextRequest, NextResponse } from 'next/server'
import { getCachedPosts, scrapeInstagramProfile, cacheInstagramPosts } from '@/lib/instagram-scraper'
import { supabase } from '@/lib/supabase-singleton'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const locationId = searchParams.get('locationId')
  
  if (!locationId) {
    return NextResponse.json({ error: 'Location ID required' }, { status: 400 })
  }

  try {
    // First, try to get cached posts
    let posts = await getCachedPosts(locationId)
    
    // If no cached posts or cache is stale, trigger a new scrape
    if (posts.length === 0) {
      // Get location's Instagram username
      const { data: location } = await supabase
        .from('locations')
        .select('instagram_username')
        .eq('id', locationId)
        .single()
      
      if (location?.instagram_username) {
        // Scrape fresh data
        posts = await scrapeInstagramProfile(location.instagram_username)
        
        // Cache the new posts
        if (posts.length > 0) {
          await cacheInstagramPosts(locationId, posts)
        }
      }
    }
    
    return NextResponse.json(
      { posts },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600'
        }
      }
    )
  } catch (error) {
    console.error('Failed to get Instagram posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    )
  }
}