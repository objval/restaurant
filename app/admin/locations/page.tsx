"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase-locations"
import { supabase as supabaseAuth } from "@/lib/supabase-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Clock, MapPin, Save, Loader2, Calendar, FileText } from "lucide-react"
import type { User } from "@supabase/supabase-js"

interface BusinessHour {
  id: string
  location_id: string
  day_of_week: number
  open_time: string | null
  close_time: string | null
  is_closed: boolean
  original?: BusinessHour // Track original state for comparison
}

interface Location {
  id: string
  slug: string
  name: string
  concept: string
  address: string
  phone: string
  email: string
  description: string
  long_description: string
  active: boolean
}

const DAYS_OF_WEEK = [
  { id: 1, name: 'Lunes', abbr: 'Lun' },
  { id: 2, name: 'Martes', abbr: 'Mar' },
  { id: 3, name: 'Miércoles', abbr: 'Mié' },
  { id: 4, name: 'Jueves', abbr: 'Jue' },
  { id: 5, name: 'Viernes', abbr: 'Vie' },
  { id: 6, name: 'Sábado', abbr: 'Sáb' },
  { id: 0, name: 'Domingo', abbr: 'Dom' }
]

export default function LocationsAdmin() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [locations, setLocations] = useState<Location[]>([])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [originalLocation, setOriginalLocation] = useState<Location | null>(null)
  const [businessHours, setBusinessHours] = useState<BusinessHour[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [savingLocation, setSavingLocation] = useState(false)
  const [savingBiography, setSavingBiography] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabaseAuth.auth.getUser()
        if (!user) {
          router.push('/admin/login')
        } else {
          setUser(user)
          fetchLocations()
        }
      } catch (error) {
        console.error('Auth error:', error)
        router.push('/admin/login')
      }
    }
    checkAuth()
  }, [router])

  const fetchLocations = async () => {
    try {
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .order('display_order')

      if (error) throw error
      setLocations(data || [])
      
      if (data && data.length > 0) {
        setSelectedLocation(data[0])
        setOriginalLocation({ ...data[0] })
        fetchBusinessHours(data[0].id)
      }
    } catch (error) {
      console.error('Error fetching locations:', error)
      toast.error('Error al cargar ubicaciones')
    } finally {
      setLoading(false)
    }
  }

  const fetchBusinessHours = async (locationId: string) => {
    try {
      const { data, error } = await supabase
        .from('business_hours')
        .select('*')
        .eq('location_id', locationId)
        .order('day_of_week')

      if (error) throw error
      
      // Format times from HH:MM:SS to HH:MM for display in input fields
      // and store original state for comparison
      const formattedData = (data || []).map(hour => {
        const formattedHour = {
          ...hour,
          open_time: hour.open_time ? hour.open_time.substring(0, 5) : null,
          close_time: hour.close_time ? hour.close_time.substring(0, 5) : null,
          original: {
            open_time: hour.open_time ? hour.open_time.substring(0, 5) : null,
            close_time: hour.close_time ? hour.close_time.substring(0, 5) : null,
            is_closed: hour.is_closed
          }
        }
        return formattedHour
      })
      
      setBusinessHours(formattedData)
    } catch (error) {
      console.error('Error fetching business hours:', error)
      toast.error('Error al cargar horarios')
    }
  }

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    setOriginalLocation({ ...location }) // Store original state for comparison
    fetchBusinessHours(location.id)
  }

  const handleHourChange = (dayOfWeek: number, field: 'open_time' | 'close_time' | 'is_closed', value: any) => {
    setBusinessHours(prev => prev.map(hour => {
      if (hour.day_of_week === dayOfWeek) {
        if (field === 'is_closed') {
          return { 
            ...hour, 
            is_closed: value,
            open_time: value ? null : hour.open_time,
            close_time: value ? null : hour.close_time
          }
        }
        return { ...hour, [field]: value }
      }
      return hour
    }))
  }

  const saveBusinessHours = async () => {
    if (!selectedLocation) return

    setSaving(true)
    try {
      let updateCount = 0
      let errorCount = 0
      
      // Only update hours that have changed
      const changedHours = businessHours.filter(hour => {
        if (!hour.original) return false // Should always have original after fetch
        const hasChanged = (
          hour.open_time !== hour.original.open_time ||
          hour.close_time !== hour.original.close_time ||
          hour.is_closed !== hour.original.is_closed
        )
        if (hasChanged) {
          const dayName = DAYS_OF_WEEK.find(d => d.id === hour.day_of_week)?.name || `Day ${hour.day_of_week}`
          console.log(`${dayName} has changed:`, {
            from: hour.original,
            to: { open_time: hour.open_time, close_time: hour.close_time, is_closed: hour.is_closed }
          })
        }
        return hasChanged
      })
      
      if (changedHours.length === 0) {
        toast.info('No hay cambios para guardar')
        setSaving(false)
        return
      }
      
      console.log(`Updating ${changedHours.length} changed hours out of ${businessHours.length} total`)
      
      for (const hour of changedHours) {
        // Ensure time format is HH:MM:SS for PostgreSQL TIME type
        const formatTime = (time: string | null) => {
          if (!time) return null
          // If already in HH:MM:SS format, return as is
          if (time.match(/^\d{2}:\d{2}:\d{2}$/)) return time
          // If in HH:MM format, add :00 for seconds
          if (time.match(/^\d{2}:\d{2}$/)) return `${time}:00`
          return time
        }
        
        const updateData = {
          open_time: hour.is_closed ? null : formatTime(hour.open_time),
          close_time: hour.is_closed ? null : formatTime(hour.close_time),
          is_closed: hour.is_closed,
          updated_at: new Date().toISOString()
        }
        
        const dayName = DAYS_OF_WEEK.find(d => d.id === hour.day_of_week)?.name || `Day ${hour.day_of_week}`
        console.log(`Updating ${dayName}:`, updateData)
        
        const { error } = await supabase
          .from('business_hours')
          .update(updateData)
          .eq('id', hour.id)
          .select()

        if (error) {
          console.error(`Error updating ${dayName}:`, error)
          errorCount++
        } else {
          updateCount++
        }
      }

      if (errorCount > 0) {
        toast.error(`Error al guardar ${errorCount} horarios`)
      } else {
        toast.success(`${updateCount} ${updateCount === 1 ? 'horario actualizado' : 'horarios actualizados'}`)
        // Refresh the data to ensure UI is in sync
        fetchBusinessHours(selectedLocation.id)
      }
    } catch (error) {
      console.error('Error saving business hours:', error)
      toast.error('Error al guardar horarios')
    } finally {
      setSaving(false)
    }
  }

  const saveLocationInfo = async () => {
    if (!selectedLocation || !originalLocation) return

    setSavingLocation(true)
    try {
      // Check what fields have changed
      const changes: Record<string, any> = {}
      let hasChanges = false
      
      const fieldsToCheck: (keyof Location)[] = ['address', 'phone', 'email', 'active']
      
      for (const field of fieldsToCheck) {
        if (selectedLocation[field] !== originalLocation[field]) {
          changes[field] = selectedLocation[field]
          hasChanges = true
        }
      }
      
      if (!hasChanges) {
        toast.info('No hay cambios para guardar')
        setSavingLocation(false)
        return
      }
      
      const { error } = await supabase
        .from('locations')
        .update({ 
          ...changes,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedLocation.id)

      if (error) throw error
      
      // Update original state to match saved state
      setOriginalLocation({ ...selectedLocation })
      setLocations(prev => prev.map(loc => 
        loc.id === selectedLocation.id ? selectedLocation : loc
      ))
      
      toast.success('Información del local actualizada')
    } catch (error) {
      console.error('Error updating location:', error)
      toast.error('Error al actualizar información')
    } finally {
      setSavingLocation(false)
    }
  }

  const saveBiography = async () => {
    if (!selectedLocation || !originalLocation) return

    setSavingBiography(true)
    try {
      // Check if biography fields have changed
      const hasChanges = 
        selectedLocation.description !== originalLocation.description ||
        selectedLocation.long_description !== originalLocation.long_description
      
      if (!hasChanges) {
        toast.info('No hay cambios para guardar')
        setSavingBiography(false)
        return
      }
      
      const { error } = await supabase
        .from('locations')
        .update({ 
          description: selectedLocation.description,
          long_description: selectedLocation.long_description,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedLocation.id)

      if (error) throw error
      
      // Update original state to match saved state
      setOriginalLocation({ ...selectedLocation })
      setLocations(prev => prev.map(loc => 
        loc.id === selectedLocation.id ? selectedLocation : loc
      ))
      
      toast.success('Historia y descripción actualizadas')
    } catch (error) {
      console.error('Error updating biography:', error)
      toast.error('Error al actualizar historia')
    } finally {
      setSavingBiography(false)
    }
  }

  if (!user || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-gray-600" />
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Ubicaciones</h1>
          <p className="text-gray-600 mt-2">Administra los horarios y información de cada sucursal</p>
        </div>

        {/* Location Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {locations.map(location => (
            <Card 
              key={location.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedLocation?.id === location.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handleLocationSelect(location)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  <div className={`w-3 h-3 rounded-full ${location.active ? 'bg-green-500' : 'bg-gray-400'}`} />
                </div>
                <p className="text-sm text-gray-600">{location.concept}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{location.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedLocation && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {DAYS_OF_WEEK.map(day => {
                  const hour = businessHours.find(h => h.day_of_week === day.id)
                  if (!hour) return null

                  return (
                    <div key={day.id} className="flex items-center gap-4">
                      <div className="w-24 font-medium text-sm">{day.name}</div>
                      
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={hour.is_closed}
                          onCheckedChange={(checked) => handleHourChange(day.id, 'is_closed', checked)}
                        />
                        <span className="text-sm text-gray-600 w-16">
                          {hour.is_closed ? 'Cerrado' : 'Abierto'}
                        </span>
                      </div>

                      {!hour.is_closed && (
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            type="time"
                            value={hour.open_time || ''}
                            onChange={(e) => handleHourChange(day.id, 'open_time', e.target.value)}
                            className="w-32"
                          />
                          <span className="text-gray-500">-</span>
                          <Input
                            type="time"
                            value={hour.close_time || ''}
                            onChange={(e) => handleHourChange(day.id, 'close_time', e.target.value)}
                            className="w-32"
                          />
                        </div>
                      )}
                    </div>
                  )
                })}

                <div className="pt-4 border-t">
                  <Button 
                    onClick={saveBusinessHours}
                    disabled={saving}
                    className="w-full"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Horarios
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Información del Local
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    value={selectedLocation.address || ''}
                    onChange={(e) => setSelectedLocation(prev => 
                      prev ? { ...prev, address: e.target.value } : null
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={selectedLocation.phone || ''}
                    onChange={(e) => setSelectedLocation(prev => 
                      prev ? { ...prev, phone: e.target.value } : null
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={selectedLocation.email || ''}
                    onChange={(e) => setSelectedLocation(prev => 
                      prev ? { ...prev, email: e.target.value } : null
                    )}
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <Label htmlFor="active" className="text-base">Local Activo</Label>
                  <Switch
                    id="active"
                    checked={selectedLocation.active}
                    onCheckedChange={(checked) => setSelectedLocation(prev => 
                      prev ? { ...prev, active: checked } : null
                    )}
                  />
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    onClick={saveLocationInfo}
                    disabled={savingLocation}
                    className="w-full"
                  >
                    {savingLocation ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Información
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Biography/Story Section */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Historia y Descripción
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description">Descripción Corta</Label>
                  <Textarea
                    id="description"
                    className="min-h-[80px]"
                    value={selectedLocation.description || ''}
                    onChange={(e) => setSelectedLocation(prev => 
                      prev ? { ...prev, description: e.target.value } : null
                    )}
                    placeholder="Descripción breve que aparece en las tarjetas..."
                  />
                </div>

                <div>
                  <Label htmlFor="long_description">Nuestra Historia</Label>
                  <Textarea
                    id="long_description"
                    className="min-h-[200px]"
                    value={selectedLocation.long_description || ''}
                    onChange={(e) => setSelectedLocation(prev => 
                      prev ? { ...prev, long_description: e.target.value } : null
                    )}
                    placeholder="Historia completa del restaurante..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Este texto aparece en la sección &quot;Un poco de nosotros&quot; en la página del restaurante.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    onClick={saveBiography}
                    disabled={savingBiography}
                    className="w-full"
                  >
                    {savingBiography ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Historia
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Special Hours Section (placeholder for future) */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Horarios Especiales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Próximamente podrás configurar horarios especiales para días festivos y eventos.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}