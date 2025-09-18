"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Toaster } from "sonner"
import { Package, BarChart3, FolderTree, MapPin, LogOut, Home, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const supabase = createClientComponentClient()
  
  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      console.log('[Admin Layout] Checking auth, pathname:', pathname)
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        console.log('[Admin Layout] Session:', !!session, 'Error:', sessionError)

        if (!session && pathname !== "/admin/login") {
          console.log('[Admin Layout] No session, redirecting to login')
          router.push("/admin/login")
          setIsAuthenticated(false)
        } else if (session && pathname === "/admin/login") {
          console.log('[Admin Layout] Has session on login page, checking admin role')
          // Verify admin role before redirecting
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', session.user.id)
            .single()

          console.log('[Admin Layout] Profile:', profile, 'Error:', profileError)

          if (profile?.role === 'admin') {
            console.log('[Admin Layout] Admin role confirmed, redirecting to dashboard')
            router.push("/admin/dashboard")
            setIsAuthenticated(true)
          } else {
            console.log('[Admin Layout] Not admin role, signing out')
            await supabase.auth.signOut()
            setIsAuthenticated(false)
          }
        } else {
          console.log('[Admin Layout] Setting auth state:', !!session)
          setIsAuthenticated(!!session)
        }
      } catch (error) {
        console.error('[Admin Layout] Auth check error:', error)
        setIsAuthenticated(false)
        if (pathname !== "/admin/login") {
          router.push("/admin/login")
        }
      }
    }

    checkAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('[Admin Layout] Auth state change:', event, !!session, 'pathname:', pathname)
      try {
        if (!session && pathname !== "/admin/login") {
          console.log('[Admin Layout] Auth change: No session, redirecting to login')
          router.push("/admin/login")
          setIsAuthenticated(false)
        } else if (session && pathname === "/admin/login") {
          console.log('[Admin Layout] Auth change: Has session on login page, checking admin role')
          // Verify admin role before redirecting
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', session.user.id)
            .single()

          console.log('[Admin Layout] Auth change: Profile:', profile, 'Error:', profileError)

          if (profile?.role === 'admin') {
            console.log('[Admin Layout] Auth change: Admin role confirmed, redirecting to dashboard')
            router.push("/admin/dashboard")
            setIsAuthenticated(true)
          } else {
            console.log('[Admin Layout] Auth change: Not admin role, signing out')
            await supabase.auth.signOut()
            setIsAuthenticated(false)
          }
        } else {
          console.log('[Admin Layout] Auth change: Setting auth state:', !!session)
          setIsAuthenticated(!!session)
        }
      } catch (error) {
        console.error('[Admin Layout] Auth state change error:', error)
        setIsAuthenticated(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [pathname, router, supabase.auth])
  
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }
  
  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
          <p className="text-muted-foreground font-medium">Verificando autenticación...</p>
        </div>
      </div>
    )
  }
  
  // For login page, don't show admin nav
  if (pathname === "/admin/login") {
    return (
      <>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
            },
          }}
        />
      </>
    )
  }
  
  // For other admin pages, show full layout with nav
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 via-background to-accent/10">
      {/* Floating Navigation Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-4 py-3 max-w-7xl">
          <div className="bg-card/80 backdrop-blur-xl rounded-full shadow-lg border border-border/50 px-6 md:px-8 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Logo and Navigation */}
              <div className="flex items-center gap-2 md:gap-6">
                {/* Logo */}
                <Link href="/admin/dashboard" className="flex items-center gap-3 mr-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary to-chart-3 shadow-lg">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <span className="hidden md:inline text-lg font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
                    Admin Panel
                  </span>
                </Link>
                
                {/* Navigation Items */}
                <nav className="flex items-center gap-1 md:gap-2">
                  <Link href="/admin/dashboard">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`rounded-full hover:bg-primary/10 hover:text-primary ${
                        pathname === '/admin/dashboard' ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <Home className="h-4 w-4 md:mr-2" />
                      <span className="hidden md:inline">Dashboard</span>
                    </Button>
                  </Link>
                  
                  <Link href="/admin/products">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`rounded-full hover:bg-primary/10 hover:text-primary ${
                        pathname === '/admin/products' ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <Package className="h-4 w-4 md:mr-2" />
                      <span className="hidden md:inline">Productos</span>
                    </Button>
                  </Link>
                  
                  <Link href="/admin/categories">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`rounded-full hover:bg-primary/10 hover:text-primary ${
                        pathname === '/admin/categories' ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <FolderTree className="h-4 w-4 md:mr-2" />
                      <span className="hidden md:inline">Categorías</span>
                    </Button>
                  </Link>
                  
                  <Link href="/admin/locations">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`rounded-full hover:bg-primary/10 hover:text-primary ${
                        pathname === '/admin/locations' ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <MapPin className="h-4 w-4 md:mr-2" />
                      <span className="hidden md:inline">Ubicaciones</span>
                    </Button>
                  </Link>
                </nav>
              </div>
              
              {/* Right side - User actions */}
              <div className="flex items-center gap-2">
                <Link href="/" target="_blank">
                  <Button variant="ghost" size="sm" className="rounded-full hover:bg-accent/10 hover:text-accent-foreground">
                    <Home className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Ver Sitio</span>
                  </Button>
                </Link>
                
                <Button 
                  onClick={handleLogout}
                  variant="ghost" 
                  size="sm" 
                  className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--card)',
            color: 'var(--card-foreground)',
            border: '1px solid var(--border)',
          },
        }}
      />
    </div>
  )
}