"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Loader2 } from "lucide-react"
import type { User } from "@supabase/supabase-js"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClientComponentClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()

        if (!session) {
          router.replace("/admin/login")
        } else {
          // Verify admin role
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("user_id", session.user.id)
            .single()

          if (profile?.role !== "admin") {
            await supabase.auth.signOut()
            router.replace("/admin/login")
          } else {
            setUser(session.user)
            setLoading(false)
          }
        }
      } catch (error) {
        console.error("AuthGuard error:", error)
        router.replace("/admin/login")
      }
    }

    // Don't run auth check on the login page itself
    if (pathname !== "/admin/login") {
      checkSession()
    } else {
      setLoading(false)
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          router.replace("/admin/login")
        } else if (session) {
          setUser(session.user)
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase, pathname])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
          <p className="text-muted-foreground font-medium">
            Verificando autenticación...
          </p>
        </div>
      </div>
    )
  }

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  if (!user) {
    // This will be caught by the initial loading state and redirect
    return null
  }

  return <>{children}</>
}
