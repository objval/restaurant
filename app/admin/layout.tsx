"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { supabase } from "@/lib/supabase-menu"
import { Toaster } from "sonner"
import { AdminNav } from "@/components/admin/admin-nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  
  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login")
        setIsAuthenticated(false)
      } else if (session && pathname === "/admin/login") {
        router.push("/admin/dashboard")
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(!!session)
      }
    }
    
    checkAuth()
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login")
        setIsAuthenticated(false)
      } else if (session && pathname === "/admin/login") {
        router.push("/admin/dashboard")
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(!!session)
      }
    })
    
    return () => subscription.unsubscribe()
  }, [pathname, router])
  
  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
          <p className="text-gray-600">Verificando autenticación...</p>
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
              background: '#fff',
              color: '#000',
              border: '1px solid #e5e7eb',
            },
          }}
        />
      </>
    )
  }
  
  // For other admin pages, show full layout with nav
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main className="p-4 md:p-6">
        {children}
      </main>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#000',
            border: '1px solid #e5e7eb',
          },
        }}
      />
    </div>
  )
}