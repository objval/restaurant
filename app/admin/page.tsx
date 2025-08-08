"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase-menu"

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // User is signed in, redirect to dashboard
        router.push('/admin/dashboard')
      } else {
        // User is not signed in, redirect to login
        router.push('/admin/login')
      }
    }

    checkAuth()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
        <p className="text-gray-600">Verificando autenticación...</p>
      </div>
    </div>
  )
}