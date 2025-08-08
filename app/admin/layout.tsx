"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { supabase } from "@/lib/supabase-menu"
import { Toaster } from "sonner"
import type { User } from "@supabase/supabase-js"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check initial auth state
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user && pathname !== "/admin/login") {
          router.push("/admin/login")
        } else if (user && pathname === "/admin/login") {
          router.push("/admin/dashboard")
        }
        
        setUser(user)
      } catch (error) {
        console.error("Auth error:", error)
        if (pathname !== "/admin/login") {
          router.push("/admin/login")
        }
      } finally {
        setLoading(false)
      }
    }

    checkAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login")
      } else if (session && pathname === "/admin/login") {
        router.push("/admin/dashboard")
      }
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [pathname, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

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