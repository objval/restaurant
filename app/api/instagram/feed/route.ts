import { NextRequest, NextResponse } from 'next/server'
import { getInstagramFeed } from '@/lib/instagram-api'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get('token')
  
  if (!token) {
    return NextResponse.json({ error: 'No access token provided' }, { status: 400 })
  }

  try {
    const posts = await getInstagramFeed(token)
    
    // Cache for 1 hour
    return NextResponse.json(
      { posts },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
        }
      }
    )
  } catch (error) {
    console.error('Instagram API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram feed' },
      { status: 500 }
    )
  }
}