export interface InstagramPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  username: string
}

export async function getInstagramFeed(accessToken: string, limit = 6): Promise<InstagramPost[]> {
  try {
    // Fetch user's media
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,username&limit=${limit}&access_token=${accessToken}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram feed')
    }
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error('Instagram API error:', error)
    return []
  }
}

// Long-lived token refresh (tokens last 60 days, refresh before expiry)
export async function refreshAccessToken(accessToken: string): Promise<string> {
  const response = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`
  )
  
  const data = await response.json()
  return data.access_token
}

// Store tokens in Supabase for each location
export async function storeInstagramToken(locationId: string, accessToken: string, expiresIn: number) {
  // Store in a secure table in Supabase
  // You'll need to create an instagram_tokens table
  const expiresAt = new Date(Date.now() + expiresIn * 1000)
  
  // This would be a Supabase call
  // await supabase.from('instagram_tokens').upsert({
  //   location_id: locationId,
  //   access_token: accessToken,
  //   expires_at: expiresAt
  // })
}