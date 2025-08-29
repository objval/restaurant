import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client for middleware
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false
    }
  }
)

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip maintenance check for maintenance panel and its sub-routes
  if (pathname.startsWith('/maintenance')) {
    return NextResponse.next()
  }

  // Skip for API routes and static files
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  try {
    // Check maintenance mode status
    const { data: maintenanceData } = await supabase
      .from('maintenance_mode')
      .select('enabled')
      .single()

    if (maintenanceData?.enabled) {
      // Rewrite to maintenance page if not already there
      if (pathname !== '/maintenance-active') {
        return NextResponse.rewrite(new URL('/maintenance-active', request.url))
      }
    }
  } catch (error) {
    console.error('Middleware maintenance check error:', error)
    // If there's an error checking maintenance mode, allow normal access
  }
  
  // Handle admin routes
  if (pathname.startsWith('/admin')) {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      return NextResponse.next()
    }
    
    // If accessing /admin exactly, redirect to login
    if (pathname === '/admin' || pathname === '/admin/') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // For other admin routes, check authentication
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session && pathname !== '/admin/login') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  // For all other routes, just continue
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ]
}