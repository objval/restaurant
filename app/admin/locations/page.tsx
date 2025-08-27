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
import { 
  Clock, MapPin, Save, Loader2, Calendar, FileText, Star, Upload, X, 
  Image as ImageIcon, Phone, Globe, Navigation, Building2,
  MessageSquare, TrendingUp, Eye, EyeOff, Settings
} from "lucide-react"
import type { User } from "@supabase/supabase-js"
import { FeaturedProductsManager } from "@/components/admin/featured-products-manager"

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
  logo_url?: string
  images?: {
    hero?: string
    signature?: string
    interior?: string
    ambiance?: string
    gallery?: string[]
  }
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
  const [uploadingLogo, setUploadingLogo] = useState(false)
  const [uploadingHero, setUploadingHero] = useState(false)
  const [uploadingSignature, setUploadingSignature] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabaseAuth.auth.getUser()
        if (!user) {
          router.push('/admin/login')
        } else {
          setUser(user)
          fetchLocations()
          // Initialize storage bucket on first load
          initializeStorageBucket()
        }
      } catch (error) {
        console.error('Auth error:', error)
        router.push('/admin/login')
      }
    }
    checkAuth()
  }, [router])

  const initializeStorageBucket = async () => {
    try {
      // Try to list files in the bucket to check if it exists
      // This is a safer approach than trying to create it
      const { error } = await supabase.storage
        .from('product-images')
        .list('', { limit: 1 })
      
      if (error && error.message.includes('not found')) {
        console.log('Storage bucket "product-images" not found. Please create it in Supabase dashboard:')
        console.log('1. Go to Storage in your Supabase dashboard')
        console.log('2. Create a new bucket named "product-images"')
        console.log('3. Set it as public')
        console.log('4. Set file size limit to 5MB')
        console.log('5. Allow image/png, image/jpeg, image/jpg, image/webp mime types')
        
        // Show a toast to the user
        toast.info('El bucket de imágenes necesita ser creado en Supabase')
      }
    } catch (error) {
      console.error('Error checking storage bucket:', error)
    }
  }

  const fetchLocations = async () => {
    try {
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .order('display_order')

      if (error) throw error
      const locationsWithImages = (data || []).map(loc => ({
        ...loc,
        images: loc.images || { hero: '', signature: '', interior: '', ambiance: '', gallery: [] }
      }))
      setLocations(locationsWithImages)
      
      if (locationsWithImages.length > 0) {
        setSelectedLocation(locationsWithImages[0])
        setOriginalLocation({ ...locationsWithImages[0] })
        fetchBusinessHours(locationsWithImages[0].id)
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

  const handleLogoUpload = async (file: File) => {
    if (!selectedLocation) return
    
    setUploadingLogo(true)
    try {
      // Validate file
      if (!file.type.startsWith('image/')) {
        toast.error('Por favor selecciona una imagen válida')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error('La imagen debe ser menor a 5MB')
        return
      }

      // Generate unique filename
      const timestamp = Date.now()
      const fileName = `logos/${selectedLocation.slug}/${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

      // Upload to Supabase Storage
      const { error } = await supabase.storage
        .from('product-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) throw error

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName)

      // Update the location with the new logo URL
      setSelectedLocation(prev => prev ? { ...prev, logo_url: publicUrl } : null)
      
      toast.success('Logo subido exitosamente')
    } catch (error) {
      console.error('Error uploading logo:', error)
      toast.error('Error al subir el logo')
    } finally {
      setUploadingLogo(false)
    }
  }

  const handleImageUpload = async (file: File, imageType: 'hero' | 'signature') => {
    if (!selectedLocation) return
    
    const setUploading = imageType === 'hero' ? setUploadingHero : setUploadingSignature
    setUploading(true)
    
    try {
      // Validate file
      if (!file.type.startsWith('image/')) {
        toast.error('Por favor selecciona una imagen válida')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error('La imagen debe ser menor a 5MB')
        return
      }

      // Generate unique filename
      const timestamp = Date.now()
      const fileName = `locations/${selectedLocation.slug}/${imageType}/${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

      // Upload to Supabase Storage
      const { error } = await supabase.storage
        .from('product-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) throw error

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName)

      // Update the location with the new image URL
      setSelectedLocation(prev => {
        if (!prev) return null
        return {
          ...prev,
          images: {
            ...prev.images,
            [imageType]: publicUrl
          }
        }
      })
      
      toast.success(`Imagen ${imageType === 'hero' ? 'principal' : 'destacada'} subida exitosamente`)
    } catch (error) {
      console.error(`Error uploading ${imageType} image:`, error)
      toast.error(`Error al subir la imagen ${imageType === 'hero' ? 'principal' : 'destacada'}`)
    } finally {
      setUploading(false)
    }
  }

  const saveBiography = async () => {
    if (!selectedLocation || !originalLocation) return

    setSavingBiography(true)
    try {
      // Check if biography fields have changed
      const hasChanges = 
        selectedLocation.description !== originalLocation.description ||
        selectedLocation.long_description !== originalLocation.long_description ||
        selectedLocation.logo_url !== originalLocation.logo_url ||
        JSON.stringify(selectedLocation.images) !== JSON.stringify(originalLocation.images)
      
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
          logo_url: selectedLocation.logo_url || null,
          images: selectedLocation.images || {},
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedLocation.id)

      if (error) throw error
      
      // Update original state to match saved state
      setOriginalLocation({ ...selectedLocation })
      setLocations(prev => prev.map(loc => 
        loc.id === selectedLocation.id ? selectedLocation : loc
      ))
      
      toast.success('Historia, descripción, logo e imágenes actualizados')
    } catch (error) {
      console.error('Error updating biography:', error)
      toast.error('Error al actualizar información')
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Professional Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Gestión de Ubicaciones
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                Administra los horarios, información y características de cada restaurante
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">{locations.length} Ubicaciones</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Location Selector with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {locations.map(location => {
            const locationConfig = {
              arbol: { 
                gradient: "from-green-600 to-emerald-600", 
                icon: "🌳", 
                bgColor: "bg-green-50 dark:bg-green-950/20",
                borderColor: "border-green-200 dark:border-green-800"
              },
              '1898': { 
                gradient: "from-amber-700 to-orange-600", 
                icon: "🍺", 
                bgColor: "bg-amber-50 dark:bg-amber-950/20",
                borderColor: "border-amber-200 dark:border-amber-800"
              },
              capriccio: { 
                gradient: "from-purple-600 to-pink-600", 
                icon: "🍷", 
                bgColor: "bg-purple-50 dark:bg-purple-950/20",
                borderColor: "border-purple-200 dark:border-purple-800"
              }
            }
            const config = locationConfig[location.id as keyof typeof locationConfig]
            
            return (
              <Card 
                key={location.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${
                  selectedLocation?.id === location.id 
                    ? `ring-2 ring-primary shadow-lg ${config?.borderColor}` 
                    : 'hover:border-primary/50'
                }`}
                onClick={() => handleLocationSelect(location)}
              >
                <CardHeader className={`pb-3 ${config?.bgColor}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`text-3xl p-2 rounded-lg bg-gradient-to-br ${config?.gradient} bg-opacity-10`}>
                        {config?.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">{location.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{location.concept}</p>
                      </div>
                    </div>
                    <Switch
                      checked={location.active}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => {
                        // Handle toggle
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Navigation className="h-4 w-4" />
                      <span className="truncate">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{location.phone}</span>
                    </div>
                    {businessHours.length > 0 && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className={`font-medium ${
                          businessHours.find(h => h.day_of_week === new Date().getDay())?.is_closed
                            ? 'text-red-500' 
                            : 'text-green-500'
                        }`}>
                          {businessHours.find(h => h.day_of_week === new Date().getDay())?.is_closed
                            ? 'Cerrado hoy'
                            : 'Abierto hoy'
                          }
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedLocation && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Business Hours - Enhanced Design */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 space-y-3 sm:space-y-4">
                {DAYS_OF_WEEK.map(day => {
                  const hour = businessHours.find(h => h.day_of_week === day.id)
                  if (!hour) return null

                  const isToday = new Date().getDay() === day.id
                  
                  return (
                    <div 
                      key={day.id} 
                      className={`p-3 rounded-lg transition-colors ${
                        isToday ? 'bg-primary/5 ring-1 ring-primary/20' : 'hover:bg-muted/50'
                      }`}
                    >
                      {/* Mobile Layout - Stacked */}
                      <div className="flex flex-col gap-3 sm:hidden">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                              isToday ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                            }`}>
                              {day.abbr}
                            </div>
                            <span className={`font-medium text-sm ${isToday ? 'text-primary' : ''}`}>
                              {day.name}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={!hour.is_closed}
                              onCheckedChange={(checked) => handleHourChange(day.id, 'is_closed', !checked)}
                              className="scale-90"
                            />
                            <span className={`text-xs font-medium ${
                              hour.is_closed ? 'text-red-500' : 'text-green-600'
                            }`}>
                              {hour.is_closed ? 'Cerrado' : 'Abierto'}
                            </span>
                          </div>
                        </div>
                        
                        {!hour.is_closed && (
                          <div className="flex items-center gap-2 pl-9">
                            <Input
                              type="time"
                              value={hour.open_time || ''}
                              onChange={(e) => handleHourChange(day.id, 'open_time', e.target.value)}
                              className="flex-1 min-w-0 text-sm h-9"
                            />
                            <span className="text-muted-foreground text-xs">—</span>
                            <Input
                              type="time"
                              value={hour.close_time || ''}
                              onChange={(e) => handleHourChange(day.id, 'close_time', e.target.value)}
                              className="flex-1 min-w-0 text-sm h-9"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Desktop Layout - Horizontal */}
                      <div className="hidden sm:flex sm:items-center sm:gap-4">
                        <div className="flex items-center gap-2 w-32">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            isToday ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            {day.abbr}
                          </div>
                          <span className={`font-medium text-sm ${isToday ? 'text-primary' : ''}`}>
                            {day.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={!hour.is_closed}
                            onCheckedChange={(checked) => handleHourChange(day.id, 'is_closed', !checked)}
                          />
                          <span className={`text-sm w-16 font-medium ${
                            hour.is_closed ? 'text-red-500' : 'text-green-600'
                          }`}>
                            {hour.is_closed ? 'Cerrado' : 'Abierto'}
                          </span>
                        </div>

                        {!hour.is_closed && (
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              type="time"
                              value={hour.open_time || ''}
                              onChange={(e) => handleHourChange(day.id, 'open_time', e.target.value)}
                              className="w-32 border-muted-foreground/20"
                            />
                            <span className="text-muted-foreground">—</span>
                            <Input
                              type="time"
                              value={hour.close_time || ''}
                              onChange={(e) => handleHourChange(day.id, 'close_time', e.target.value)}
                              className="w-32 border-muted-foreground/20"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                <div className="pt-4 border-t">
                  <Button 
                    onClick={saveBusinessHours}
                    disabled={saving}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
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

            {/* Location Information - Enhanced */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
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
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
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

            {/* Biography/Story Section - Enhanced */}
            <Card className="lg:col-span-2 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
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

                {/* Logo Upload Section */}
                <div className="space-y-2">
                  <Label>Logo del Restaurante</Label>
                  <div className="flex items-center gap-4">
                    {selectedLocation.logo_url ? (
                      <div className="relative">
                        <img 
                          src={selectedLocation.logo_url} 
                          alt={selectedLocation.name}
                          className="h-24 w-auto object-contain bg-gray-100 rounded p-2"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute -top-2 -right-2"
                          onClick={() => setSelectedLocation(prev => 
                            prev ? { ...prev, logo_url: undefined } : null
                          )}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="h-24 w-24 bg-gray-100 rounded flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex gap-2">
                        <label>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleLogoUpload(file)
                            }}
                            disabled={uploadingLogo}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            disabled={uploadingLogo}
                            asChild
                          >
                            <span>
                              {uploadingLogo ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Subiendo...
                                </>
                              ) : (
                                <>
                                  <Upload className="mr-2 h-4 w-4" />
                                  Subir Logo
                                </>
                              )}
                            </span>
                          </Button>
                        </label>
                        
                        {selectedLocation.logo_url && (
                          <Input
                            value={selectedLocation.logo_url}
                            onChange={(e) => setSelectedLocation(prev => 
                              prev ? { ...prev, logo_url: e.target.value } : null
                            )}
                            placeholder="URL del logo"
                            className="flex-1"
                          />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG o SVG con fondo transparente recomendado. Máximo 5MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hero Image Upload Section */}
                <div className="space-y-2 border-t pt-4">
                  <Label>Imagen Principal (Hero)</Label>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    {selectedLocation.images?.hero ? (
                      <div className="relative">
                        <img 
                          src={selectedLocation.images.hero} 
                          alt={`${selectedLocation.name} Hero`}
                          className="h-32 w-48 object-cover rounded border"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute -top-2 -right-2"
                          onClick={() => setSelectedLocation(prev => 
                            prev ? { ...prev, images: { ...prev.images, hero: '' } } : null
                          )}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="h-32 w-48 bg-gray-100 rounded border flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        <label>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleImageUpload(file, 'hero')
                            }}
                            disabled={uploadingHero}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            disabled={uploadingHero}
                            asChild
                          >
                            <span>
                              {uploadingHero ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Subiendo...
                                </>
                              ) : (
                                <>
                                  <Upload className="mr-2 h-4 w-4" />
                                  Subir Imagen Hero
                                </>
                              )}
                            </span>
                          </Button>
                        </label>
                        
                        {selectedLocation.images?.hero && (
                          <Input
                            value={selectedLocation.images.hero}
                            onChange={(e) => setSelectedLocation(prev => 
                              prev ? { ...prev, images: { ...prev.images, hero: e.target.value } } : null
                            )}
                            placeholder="URL de imagen hero"
                            className="flex-1"
                          />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Imagen principal que aparece en la página del restaurante. Recomendado: 1920x1080px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Signature Dish Image Upload Section */}
                <div className="space-y-2 border-t pt-4">
                  <Label>Plato Destacado (Signature)</Label>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    {selectedLocation.images?.signature ? (
                      <div className="relative">
                        <img 
                          src={selectedLocation.images.signature} 
                          alt={`${selectedLocation.name} Signature`}
                          className="h-32 w-32 object-cover rounded border"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute -top-2 -right-2"
                          onClick={() => setSelectedLocation(prev => 
                            prev ? { ...prev, images: { ...prev.images, signature: '' } } : null
                          )}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="h-32 w-32 bg-gray-100 rounded border flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        <label>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleImageUpload(file, 'signature')
                            }}
                            disabled={uploadingSignature}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            disabled={uploadingSignature}
                            asChild
                          >
                            <span>
                              {uploadingSignature ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Subiendo...
                                </>
                              ) : (
                                <>
                                  <Upload className="mr-2 h-4 w-4" />
                                  Subir Plato Destacado
                                </>
                              )}
                            </span>
                          </Button>
                        </label>
                        
                        {selectedLocation.images?.signature && (
                          <Input
                            value={selectedLocation.images.signature}
                            onChange={(e) => setSelectedLocation(prev => 
                              prev ? { ...prev, images: { ...prev.images, signature: e.target.value } } : null
                            )}
                            placeholder="URL del plato destacado"
                            className="flex-1"
                          />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Imagen del plato destacado en la sección &quot;Un poco de nosotros&quot;. Cuadrada recomendada.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    onClick={saveBiography}
                    disabled={savingBiography}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    {savingBiography ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Historia e Imágenes
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Products Section - New Component */}
            <div className="lg:col-span-2">
              <FeaturedProductsManager
                locationId={selectedLocation.id}
                locationSlug={selectedLocation.slug}
                locationName={selectedLocation.name}
              />
            </div>

            {/* Stats and Quick Actions */}
            <Card className="lg:col-span-2 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Estadísticas y Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Quick Stats */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Estado</p>
                        <p className="text-2xl font-bold text-green-600">
                          {selectedLocation?.active ? 'Activo' : 'Inactivo'}
                        </p>
                      </div>
                      <div className="p-3 rounded-full bg-green-500/10">
                        {selectedLocation?.active ? 
                          <Eye className="h-6 w-6 text-green-600" /> : 
                          <EyeOff className="h-6 w-6 text-gray-600" />
                        }
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Horarios</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {businessHours.filter(h => !h.is_closed).length}/7
                        </p>
                      </div>
                      <div className="p-3 rounded-full bg-blue-500/10">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Productos</p>
                        <p className="text-2xl font-bold text-purple-600">
                          Destacados
                        </p>
                      </div>
                      <div className="p-3 rounded-full bg-purple-500/10">
                        <Star className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Acciones Rápidas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Globe className="h-4 w-4" />
                      Ver Página Pública
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Gestionar Reseñas
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Horarios Especiales
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Settings className="h-4 w-4" />
                      Configuración Avanzada
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}