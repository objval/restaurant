"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Toaster } from "sonner"
import { Package, BarChart3, FolderTree, MapPin, LogOut, Home, Settings, ImageIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const navItems = [
    { href: "/admin/dashboard", icon: Home, label: "Dashboard" },
    { href: "/admin/products", icon: Package, label: "Productos" },
    { href: "/admin/categories", icon: FolderTree, label: "Categorías" },
    { href: "/admin/gallery", icon: ImageIcon, label: "Galería" },
    { href: "/admin/locations", icon: MapPin, label: "Ubicaciones" },
    { href: "/admin/maintenance", icon: Settings, label: "Mantenimiento" },
  ]

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
              <div className="bg-card/80 backdrop-blur-xl rounded-2xl md:rounded-full shadow-lg border border-border/50 px-4 md:px-8 py-3">
                <div className="flex items-center justify-between">
                  {/* Left side - Logo */}
                  <Link href="/admin/dashboard" className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-primary to-chart-3 shadow-lg">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-base md:text-lg font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
                      Admin Panel
                    </span>
                  </Link>
                  
                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      return (
                        <Link key={item.href} href={item.href}>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className={`rounded-full hover:bg-primary/10 hover:text-primary transition-all ${
                              isActive ? 'bg-primary/10 text-primary' : ''
                            }`}
                          >
                            <Icon className="h-4 w-4 mr-2" />
                            <span className="text-sm">{item.label}</span>
                          </Button>
                        </Link>
                      )
                    })}
                  </nav>
                  
                  {/* Right side - Actions */}
                  <div className="flex items-center gap-2">
                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-2">
                      <Link href="/" target="_blank">
                        <Button variant="ghost" size="sm" className="rounded-full hover:bg-accent/10 hover:text-accent-foreground">
                          <Home className="h-4 w-4 mr-2" />
                          <span>Ver Sitio</span>
                        </Button>
                      </Link>
                      
                      <Button 
                        onClick={handleLogout}
                        variant="ghost" 
                        size="sm" 
                        className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Salir</span>
                      </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                      <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="sm" className="rounded-full">
                          <Menu className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                        <SheetHeader>
                          <SheetTitle className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-gradient-to-br from-primary to-chart-3">
                              <BarChart3 className="h-4 w-4 text-white" />
                            </div>
                            Admin Panel
                          </SheetTitle>
                        </SheetHeader>
                        
                        <div className="mt-8 flex flex-col gap-2">
                          {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href
                            return (
                              <Link 
                                key={item.href} 
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <Button 
                                  variant="ghost" 
                                  className={`w-full justify-start rounded-lg hover:bg-primary/10 hover:text-primary transition-all ${
                                    isActive ? 'bg-primary/10 text-primary' : ''
                                  }`}
                                >
                                  <Icon className="h-5 w-5 mr-3" />
                                  <span className="text-base">{item.label}</span>
                                </Button>
                              </Link>
                            )
                          })}
                          
                          <div className="my-4 border-t border-border" />
                          
                          <Link href="/" target="_blank">
                            <Button 
                              variant="ghost" 
                              className="w-full justify-start rounded-lg hover:bg-accent/10"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Home className="h-5 w-5 mr-3" />
                              <span className="text-base">Ver Sitio Web</span>
                            </Button>
                          </Link>
                          
                          <Button 
                            onClick={() => {
                              handleLogout()
                              setMobileMenuOpen(false)
                            }}
                            variant="ghost" 
                            className="w-full justify-start rounded-lg hover:bg-destructive/10 hover:text-destructive"
                          >
                            <LogOut className="h-5 w-5 mr-3" />
                            <span className="text-base">Cerrar Sesión</span>
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
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
