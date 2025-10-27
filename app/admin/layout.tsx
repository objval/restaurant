"use client"

import { usePathname, useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Toaster } from "sonner"
import { Package, BarChart3, FolderTree, MapPin, LogOut, Home, Settings, ImageIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  // Auth logic is now handled by middleware.

  return (
    <>
      {pathname === "/admin/login" ? (
        // For the login page, just render children without the main layout
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
      ) : (
        // For all other admin pages, render the full layout
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
                      <Link href="/admin/gallery">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`rounded-full hover:bg-primary/10 hover:text-primary ${
                            pathname === '/admin/gallery' ? 'bg-primary/10 text-primary' : ''
                          }`}
                        >
                          <ImageIcon className="h-4 w-4 md:mr-2" />
                          <span className="hidden md:inline">Galería</span>
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

                      <Link href="/admin/maintenance">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`rounded-full hover:bg-primary/10 hover:text-primary ${
                            pathname === '/admin/maintenance' ? 'bg-primary/10 text-primary' : ''
                          }`}
                        >
                          <Settings className="h-4 w-4 md:mr-2" />
                          <span className="hidden md:inline">Mantenimiento</span>
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
      )}
    </>
  )
}
