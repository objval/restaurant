import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const response = NextResponse.next()

  // Create Supabase client for middleware
  const supabase = createMiddlewareClient({ req: request, res: response })

  // Skip maintenance check for maintenance panel and its sub-routes
  if (pathname.startsWith('/maintenance')) {
    return response
  }

  // Skip for API routes and static files
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.')
  ) {
    return response
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
      return response
    }

    // If accessing /admin exactly, redirect to login
    if (pathname === '/admin' || pathname === '/admin/') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // For other admin routes, let the client-side handle authentication
    // Remove server-side auth check that was causing the redirect loop
    console.log('[Middleware] Allowing admin route:', pathname)
  }

  // For all other routes, just continue
  return response
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