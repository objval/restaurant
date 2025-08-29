import { supabase } from './supabase-singleton'

export interface ScrapedPost {
  id: string
  shortcode: string
  image_url: string
  caption?: string
  likes?: number
  comments?: number
  timestamp: string
  is_video: boolean
  video_url?: string
  thumbnail_url?: string
}

// Using a proxy service or Instagram's public data
export async function scrapeInstagramProfile(username: string): Promise<ScrapedPost[]> {
  try {
    // Option 1: Using RapidAPI Instagram scraper (reliable, requires API key)
    const response = await fetch(
      `https://instagram-scraper-api2.p.rapidapi.com/v1/user_posts?username_or_id_or_url=${username}&count=6`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
          'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to scrape Instagram')
    }

    const data = await response.json()
    
    // Transform to our format
    return data.data.items.map((item: any) => ({
      id: item.id,
      shortcode: item.code,
      image_url: item.image_versions2?.candidates?.[0]?.url || item.thumbnail_url,
      caption: item.caption?.text,
      likes: item.like_count,
      comments: item.comment_count,
      timestamp: new Date(item.taken_at * 1000).toISOString(),
      is_video: item.media_type === 2,
      video_url: item.video_versions?.[0]?.url,
      thumbnail_url: item.thumbnail_url
    }))
  } catch (error) {
    console.error('Scraping error:', error)
    
    // Option 2: Fallback to web scraping (less reliable but free)
    return scrapeWithPuppeteer(username)
  }
}

// Alternative: Puppeteer-based scraping (runs in Node.js)
async function scrapeWithPuppeteer(username: string): Promise<ScrapedPost[]> {
  // This would need to run in a Node.js environment, not edge runtime
  // Simplified example - would need puppeteer installed
  
  try {
    // Note: This is pseudo-code - actual implementation would need puppeteer
    const response = await fetch(`https://www.instagram.com/${username}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })
    
    const html = await response.text()
    
    // Extract JSON data from the HTML
    const jsonMatch = html.match(/window\._sharedData = ({.+?});/)?.[1]
    if (!jsonMatch) return []
    
    const sharedData = JSON.parse(jsonMatch)
    const posts = sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user?.edge_owner_to_timeline_media?.edges || []
    
    return posts.slice(0, 6).map((edge: any) => ({
      id: edge.node.id,
      shortcode: edge.node.shortcode,
      image_url: edge.node.display_url,
      caption: edge.node.edge_media_to_caption?.edges?.[0]?.node?.text,
      likes: edge.node.edge_liked_by?.count,
      comments: edge.node.edge_media_to_comment?.count,
      timestamp: new Date(edge.node.taken_at_timestamp * 1000).toISOString(),
      is_video: edge.node.is_video,
      video_url: edge.node.video_url,
      thumbnail_url: edge.node.thumbnail_src
    }))
  } catch (error) {
    console.error('Puppeteer scraping failed:', error)
    return []
  }
}

// Cache posts in Supabase
export async function cacheInstagramPosts(locationId: string, posts: ScrapedPost[]) {
  const { error } = await supabase
    .from('instagram_cache')
    .upsert({
      location_id: locationId,
      posts: posts,
      scraped_at: new Date().toISOString()
    })
    .eq('location_id', locationId)
  
  if (error) {
    console.error('Failed to cache posts:', error)
  }
}

// Get cached posts from database
export async function getCachedPosts(locationId: string): Promise<ScrapedPost[]> {
  const { data, error } = await supabase
    .from('instagram_cache')
    .select('posts, scraped_at')
    .eq('location_id', locationId)
    .single()
  
  if (error || !data) {
    return []
  }
  
  // Check if cache is fresh (less than 3 hours old)
  const scrapedAt = new Date(data.scraped_at)
  const hoursSinceScraped = (Date.now() - scrapedAt.getTime()) / (1000 * 60 * 60)
  
  if (hoursSinceScraped > 3) {
    // Cache is stale, return empty to trigger new scrape
    return []
  }
  
  return data.posts as ScrapedPost[]
}