import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { isAdmin } from "@/lib/auth"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })
  const { pathname } = request.nextUrl

  // Skip checks for static files and specific routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.')
  ) {
    return response
  }

  // --- 1. Get Session ---
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // --- 2. Handle Maintenance Mode ---
  try {
    const { data: maintenanceData } = await supabase
      .from('maintenance_mode')
      .select('enabled')
      .single()

    if (maintenanceData?.enabled && pathname !== '/maintenance-active') {
      return NextResponse.rewrite(new URL('/maintenance-active', request.url))
    }
  } catch (error) {
    console.error('Middleware maintenance check error:', error)
    // Allow normal access if the check fails
  }

  // --- 3. Handle Admin Route Protection ---
  if (pathname.startsWith('/admin')) {
    const loginUrl = new URL('/admin/login', request.url)

    // If the user is not logged in, redirect to the login page,
    // unless they are already on the login page.
    if (!session && pathname !== '/admin/login') {
      return NextResponse.redirect(loginUrl)
    }

    // If the user IS logged in, handle role-based access
    if (session) {
      // If a logged-in user tries to access the login page, redirect them to the dashboard.
      if (pathname === '/admin/login') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))
      }

      const userIsAdmin = await isAdmin(supabase, session.user.id);
      if (!userIsAdmin) {
        await supabase.auth.signOut(); // Invalidate the session
        return NextResponse.redirect(loginUrl);
      }
    }
  }

  // --- 4. Allow Request to Proceed ---
  return response
}

// Configure which routes the middleware should run on.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
