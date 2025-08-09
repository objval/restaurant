import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Handle admin routes
  if (pathname.startsWith('/admin')) {
    // For now, we'll handle auth checks client-side to avoid Edge Runtime issues
    // The middleware will just handle basic routing
    
    // If accessing /admin exactly, redirect to dashboard
    if (pathname === '/admin' || pathname === '/admin/') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
  }
  
  // For all other routes, just continue
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all admin routes
    '/admin/:path*',
  ]
}