"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  LogOut,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { supabase } from "@/lib/supabase-menu"
import { toast } from "sonner"

const navItems = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard
  },
  {
    href: "/admin/products",
    label: "Productos",
    icon: Package
  },
  {
    href: "/admin/categories",
    label: "Categorías",
    icon: Layers
  }
]

export function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleSignOut = async () => {
    setIsLoggingOut(true)
    try {
      await supabase.auth.signOut()
      toast.success("Sesión cerrada exitosamente")
      router.push("/admin/login")
    } catch (error) {
      console.error("Error signing out:", error)
      toast.error("Error al cerrar sesión")
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center gap-6">
          <Link href="/admin/dashboard" className="text-xl font-bold">
            Panel Admin
          </Link>
          
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          disabled={isLoggingOut}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          {isLoggingOut ? "Cerrando..." : "Cerrar Sesión"}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <Link href="/admin/dashboard" className="text-lg font-bold">
            Panel Admin
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white border-b shadow-lg">
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
              
              <hr className="my-2" />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                disabled={isLoggingOut}
                className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {isLoggingOut ? "Cerrando..." : "Cerrar Sesión"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}