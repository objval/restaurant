"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { 
  Settings, Power, Clock, Calendar, Eye, EyeOff, 
  Save, RefreshCw, AlertTriangle, CheckCircle, LogOut, User
} from "lucide-react"

interface MaintenancePanelProps {
  userEmail: string
}

export default function MaintenancePanel({ userEmail }: MaintenancePanelProps) {
  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [settings, setSettings] = useState({
    enabled: false,
    title: 'Estamos en Mantenimiento',
    message: 'Estamos trabajando para mejorar tu experiencia. Volveremos pronto.',
    estimated_time: '',
    show_countdown: false,
    countdown_date: '',
    show_social_links: true,
    show_contact_info: true,
    custom_css: ''
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  // Fetch current settings
  useEffect(() => {
    fetchSettings()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/maintenance/login')
    router.refresh()
  }

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('maintenance_mode')
        .select('*')
        .single()

      if (error) throw error
      
      if (data) {
        setSettings({
          enabled: data.enabled,
          title: data.title,
          message: data.message,
          estimated_time: data.estimated_time || '',
          show_countdown: data.show_countdown,
          countdown_date: data.countdown_date ? new Date(data.countdown_date).toISOString().slice(0, 16) : '',
          show_social_links: data.show_social_links,
          show_contact_info: data.show_contact_info,
          custom_css: data.custom_css || ''
        })
      }
    } catch (error) {
      console.error('Error fetching settings:', error)
      toast({
        title: "Error",
        description: "No se pudieron cargar las configuraciones",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const saveSettings = async () => {
    setSaving(true)
    try {
      const { error } = await supabase
        .from('maintenance_mode')
        .update({
          ...settings,
          countdown_date: settings.show_countdown && settings.countdown_date 
            ? new Date(settings.countdown_date).toISOString() 
            : null,
          updated_at: new Date().toISOString()
        })
        .eq('id', (await supabase.from('maintenance_mode').select('id').single()).data?.id)

      if (error) throw error

      toast({
        title: "Guardado",
        description: settings.enabled 
          ? "Modo mantenimiento activado" 
          : "Configuraciones guardadas",
      })

      // Trigger revalidation of all pages
      await fetch('/api/revalidate', { method: 'POST' })
    } catch (error) {
      console.error('Error saving settings:', error)
      toast({
        title: "Error",
        description: "No se pudieron guardar las configuraciones",
        variant: "destructive"
      })
    } finally {
      setSaving(false)
    }
  }

  const toggleMaintenance = async () => {
    const newEnabled = !settings.enabled
    setSettings(prev => ({ ...prev, enabled: newEnabled }))
    
    try {
      const { error } = await supabase
        .from('maintenance_mode')
        .update({ 
          enabled: newEnabled,
          updated_at: new Date().toISOString()
        })
        .eq('id', (await supabase.from('maintenance_mode').select('id').single()).data?.id)

      if (error) throw error

      toast({
        title: newEnabled ? "Mantenimiento Activado" : "Mantenimiento Desactivado",
        description: newEnabled 
          ? "El sitio ahora está en modo mantenimiento" 
          : "El sitio está funcionando normalmente"
      })

      // Trigger revalidation
      await fetch('/api/revalidate', { method: 'POST' })
    } catch (error) {
      console.error('Error toggling maintenance:', error)
      setSettings(prev => ({ ...prev, enabled: !newEnabled }))
      toast({
        title: "Error",
        description: "No se pudo cambiar el estado",
        variant: "destructive"
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <RefreshCw className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* User Info Bar */}
        <div className="mb-4 flex justify-between items-center bg-white rounded-lg px-4 py-2 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{userEmail}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-gray-600 hover:text-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-900">
              Panel de Mantenimiento
            </h1>
          </div>
          
          {/* Quick Toggle */}
          <Card className={`p-4 ${settings.enabled ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Estado Actual</p>
                <p className={`font-bold ${settings.enabled ? 'text-red-600' : 'text-green-600'}`}>
                  {settings.enabled ? 'EN MANTENIMIENTO' : 'SITIO ACTIVO'}
                </p>
              </div>
              <Button
                onClick={toggleMaintenance}
                size="lg"
                variant={settings.enabled ? "destructive" : "default"}
                className="min-w-[120px]"
              >
                <Power className="w-4 h-4 mr-2" />
                {settings.enabled ? 'Desactivar' : 'Activar'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Settings */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Configuración del Mensaje
          </h2>
          
          <div className="space-y-6">
            {/* Title */}
            <div>
              <Label htmlFor="title">Título Principal</Label>
              <Input
                id="title"
                value={settings.title}
                onChange={(e) => setSettings(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Estamos en Mantenimiento"
                className="mt-2"
              />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={settings.message}
                onChange={(e) => setSettings(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Describe el motivo del mantenimiento..."
                className="mt-2"
                rows={4}
              />
            </div>

            {/* Estimated Time */}
            <div>
              <Label htmlFor="estimated">Tiempo Estimado (opcional)</Label>
              <Input
                id="estimated"
                value={settings.estimated_time}
                onChange={(e) => setSettings(prev => ({ ...prev, estimated_time: e.target.value }))}
                placeholder="ej: 2 horas, 30 minutos, etc."
                className="mt-2"
              />
            </div>

            {/* Countdown Timer */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Switch
                  checked={settings.show_countdown}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, show_countdown: checked }))}
                />
                <Label className="flex items-center gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  Mostrar cuenta regresiva
                </Label>
              </div>
              
              {settings.show_countdown && (
                <Input
                  type="datetime-local"
                  value={settings.countdown_date}
                  onChange={(e) => setSettings(prev => ({ ...prev, countdown_date: e.target.value }))}
                  className="ml-7"
                />
              )}
            </div>

            {/* Display Options */}
            <div className="space-y-3 pt-4 border-t">
              <h3 className="font-medium mb-2">Opciones de Visualización</h3>
              
              <div className="flex items-center gap-3">
                <Switch
                  checked={settings.show_social_links}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, show_social_links: checked }))}
                />
                <Label className="cursor-pointer">Mostrar enlaces de redes sociales</Label>
              </div>

              <div className="flex items-center gap-3">
                <Switch
                  checked={settings.show_contact_info}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, show_contact_info: checked }))}
                />
                <Label className="cursor-pointer">Mostrar información de contacto</Label>
              </div>
            </div>

            {/* Custom CSS */}
            <div>
              <Label htmlFor="css">CSS Personalizado (opcional)</Label>
              <Textarea
                id="css"
                value={settings.custom_css}
                onChange={(e) => setSettings(prev => ({ ...prev, custom_css: e.target.value }))}
                placeholder=".maintenance-page { background: linear-gradient(...); }"
                className="mt-2 font-mono text-sm"
                rows={4}
              />
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 justify-between">
          <Button
            variant="outline"
            onClick={() => setPreviewMode(!previewMode)}
          >
            {previewMode ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {previewMode ? 'Cerrar Vista Previa' : 'Vista Previa'}
          </Button>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={fetchSettings}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Recargar
            </Button>
            
            <Button
              onClick={saveSettings}
              disabled={saving}
            >
              {saving ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Guardar Cambios
            </Button>
          </div>
        </div>

        {/* Preview */}
        {previewMode && (
          <Card className="mt-6 p-6 bg-gray-900">
            <h3 className="text-white mb-4 text-sm font-medium">VISTA PREVIA:</h3>
            <div className="bg-white rounded-lg p-8 text-center">
              <h1 className="text-3xl font-bold mb-4">{settings.title}</h1>
              <p className="text-gray-600 mb-4">{settings.message}</p>
              {settings.estimated_time && (
                <p className="text-sm text-gray-500">
                  Tiempo estimado: {settings.estimated_time}
                </p>
              )}
              {settings.show_countdown && settings.countdown_date && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm text-gray-600">
                    Volveremos el: {new Date(settings.countdown_date).toLocaleString('es-ES')}
                  </p>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Status Indicator */}
        <Card className={`mt-6 p-4 ${settings.enabled ? 'bg-red-50' : 'bg-green-50'}`}>
          <div className="flex items-center gap-3">
            {settings.enabled ? (
              <>
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="text-red-800">
                  El modo mantenimiento está <strong>ACTIVO</strong>. 
                  Los visitantes verán la página de mantenimiento.
                </p>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">
                  El sitio está funcionando <strong>NORMALMENTE</strong>. 
                  Los visitantes pueden acceder a todas las páginas.
                </p>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}