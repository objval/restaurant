"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { 
  Lock, Mail, Eye, EyeOff, Shield, AlertCircle, 
  LayoutDashboard, Store, Package, Users, Settings
} from "lucide-react"

export default function AdminLoginPage() {
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
    console.log('[Login] Starting login process')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      console.log('[Login] Auth response:', !!data.session, 'Error:', error)

      if (error || !data.session) {
        console.log('[Login] Authentication failed')
        toast({
          title: "Error de autenticación",
          description: "Credenciales incorrectas. Por favor, verifica tu email y contraseña.",
          variant: "destructive"
        })
        setLoading(false)
        return
      }

      console.log('[Login] Auth successful, checking admin role')
      // Check if user has admin role
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', data.session.user.id)
        .single()

      console.log('[Login] Profile check:', profile, 'Error:', profileError)

      if (profile?.role !== 'admin') {
        console.log('[Login] User is not admin, denying access')
        await supabase.auth.signOut()
        toast({
          title: "Acceso denegado",
          description: "No tienes permisos de administrador para acceder al panel.",
          variant: "destructive"
        })
        setLoading(false)
        return
      }

      console.log('[Login] Admin role confirmed, redirecting to dashboard')
      toast({
        title: "¡Bienvenido!",
        description: "Accediendo al panel de administración...",
      })

      // Don't set loading to false here - let the redirect happen
      router.push('/admin/dashboard')
    } catch (error) {
      console.error('[Login] Login error:', error)
      toast({
        title: "Error",
        description: "Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente.",
        variant: "destructive"
      })
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm shadow-2xl relative z-10">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <LayoutDashboard className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Panel Administrativo
          </h1>
          <p className="text-gray-600">
            Gestiona tu restaurante desde un solo lugar
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-4 gap-2 mb-6 p-4 bg-gray-50 rounded-lg">
          {[
            { icon: Store, label: "Locales" },
            { icon: Package, label: "Productos" },
            { icon: Users, label: "Clientes" },
            { icon: Settings, label: "Ajustes" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm mb-1">
                <item.icon className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3 mb-6">
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-purple-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-purple-900">Acceso Seguro</p>
              <p className="text-purple-700">Conexión cifrada con autenticación de dos factores disponible</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 mb-2 text-gray-700">
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
              className="w-full h-12 px-4 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <Label htmlFor="password" className="flex items-center gap-2 mb-2 text-gray-700">
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
                className="w-full h-12 px-4 pr-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-sm text-gray-600">Recordarme</span>
            </label>
            <button
              type="button"
              onClick={() => {
                toast({
                  title: "Recuperación de contraseña",
                  description: "Contacta al administrador del sistema para restablecer tu contraseña",
                })
              }}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg transition-all transform hover:scale-[1.02]"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Iniciando sesión...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5 mr-2" />
                Iniciar Sesión
              </>
            )}
          </Button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4 text-sm">
            <button
              type="button"
              onClick={() => router.push('/maintenance/login')}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Panel de Mantenimiento
            </button>
            <span className="text-gray-300">•</span>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Volver al sitio
            </button>
          </div>
        </div>
      </Card>

      {/* Version Badge */}
      <div className="absolute bottom-4 right-4 text-white/50 text-xs">
        v2.0.0 | Powered by Supabase
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}