import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/auth";

// Routes that require authentication
const protectedRoutes = ["/admin", "/api/admin"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if the route needs protection
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  
  if (isProtectedRoute) {
    const session = await getSession(request);
    
    if (!session) {
      // Redirect to login for admin pages
      if (path.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      
      // Return 401 for API routes
      if (path.startsWith("/api/admin")) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
};