"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Lock, Mail, Eye, EyeOff, Settings, AlertCircle } from "lucide-react"

export default function MaintenanceLoginPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { toast } = useToast()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error || !data.session) {
        toast({
          title: "Error de autenticación",
          description: "Credenciales incorrectas. Por favor, verifica tu email y contraseña.",
          variant: "destructive"
        })
        return
      }

      // Check if user has admin role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', data.session.user.id)
        .single()

      if (profile?.role !== 'admin') {
        await supabase.auth.signOut()
        toast({
          title: "Acceso denegado",
          description: "Las credenciales no corresponden a un administrador autorizado.",
          variant: "destructive"
        })
        return
      }

      toast({
        title: "Bienvenido",
        description: "Acceso autorizado al panel de mantenimiento",
      })
      
      router.push('/maintenance')
      router.refresh()
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: "Error",
        description: "Ocurrió un error al iniciar sesión",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Card className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm shadow-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Panel de Mantenimiento
          </h1>
          <p className="text-gray-600 mt-2">
            Acceso exclusivo para administradores
          </p>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold">Área restringida</p>
              <p>Solo personal autorizado puede acceder a este panel</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4" />
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@restaurant.com"
              required
              disabled={loading}
              className="w-full"
            />
          </div>

          {/* Password Field */}
          <div>
            <Label htmlFor="password" className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4" />
              Contraseña
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Verificando...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Acceder al Panel
              </>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-sm text-gray-500">
            ¿Olvidaste tu contraseña?
          </p>
          <button
            type="button"
            onClick={() => {
              toast({
                title: "Contacta al administrador",
                description: "Por seguridad, contacta al administrador del sistema para restablecer tu contraseña",
              })
            }}
            className="text-sm text-orange-600 hover:text-orange-700 font-medium mt-1"
          >
            Solicitar ayuda
          </button>
        </div>
      </Card>

      {/* Back to site link */}
      <div className="absolute top-4 left-4">
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="text-white hover:bg-white/10"
        >
          ← Volver al sitio
        </Button>
      </div>
    </div>
  )
}