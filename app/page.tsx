"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MapPin, CheckCircle, XCircle, AlertCircle, Navigation } from "lucide-react"
import { type LocationData, findNearestLocation } from "@/lib/locations"
import { getLocationsWithHours } from "@/lib/supabase-locations"
import { getLocationPreference, shouldShowConfirmation, saveLocationPreference } from "@/lib/storage"
import { ReturningCustomerFlow } from "@/components/returning-customer-flow"
import { ProfessionalLocationPicker } from "@/components/professional-location-picker"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function LocationSelector() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [savedLocationId, setSavedLocationId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDetecting, setIsDetecting] = useState(false)
  const [nearestLocation, setNearestLocation] = useState<LocationData | null>(null)
  const [loadingLocationId, setLoadingLocationId] = useState<string | null>(null)
  const [locations, setLocations] = useState<LocationData[]>([])
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch locations from Supabase
        const locationData = await getLocationsWithHours()
        setLocations(locationData)
        
        const saved = getLocationPreference()
        if (saved && shouldShowConfirmation()) {
          setSavedLocationId(saved)
          setShowConfirmation(true)
        }
      } catch (error) {
        console.error('Error loading locations:', error)
        toast({
          title: "Error",
          description: "No se pudieron cargar las ubicaciones",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    loadData()
  }, [toast])

  const showToast = (title: string, description: string, variant: "default" | "destructive" = "default", icon?: React.ReactNode) => {
    toast({
      title,
      description: (
        <div className="flex items-center gap-2">
          {icon}
          {description}
        </div>
      ),
      variant,
    })
  }

  const handleLocationSelect = (location: LocationData) => {
    setLoadingLocationId(location.id)
    saveLocationPreference(location.id)

    showToast(
      "¡Excelente elección!",
      `Preparando tu experiencia en ${location.name}...`,
      "default",
      <CheckCircle className="w-4 h-4 text-green-500" />
    )

    // Simulate loading time for better UX
    setTimeout(() => {
      router.push(location.path)
    }, 1500)
  }

  const handleConfirmSavedLocation = () => {
    if (savedLocationId) {
      const location = locations.find((loc) => loc.id === savedLocationId)
      if (location) {
        handleLocationSelect(location)
      }
    }
  }

  const handleGeolocation = () => {
    if (!("geolocation" in navigator)) {
      showToast(
        "Geolocalización no disponible",
        "Tu navegador no soporta geolocalización. Por favor selecciona tu ubicación manualmente.",
        "destructive",
        <XCircle className="w-4 h-4 text-red-500" />
      )
      return
    }

    try {
      setIsDetecting(true)
      showToast(
        "Detectando ubicación...",
        "Buscando el restaurante más cercano a ti",
        "default",
        <Navigation className="w-4 h-4 text-blue-500 animate-pulse" />
      )

      navigator.geolocation.getCurrentPosition(
        (position) => {
          try {
            const { latitude, longitude } = position.coords
            const nearest = findNearestLocation(latitude, longitude)
            setNearestLocation(nearest)
            setIsDetecting(false)

            showToast(
              "¡Ubicación detectada!",
              `${nearest.name} está más cerca de ti. Redirigiendo...`,
              "default",
              <MapPin className="w-4 h-4 text-green-500" />
            )

            setTimeout(() => {
              handleLocationSelect(nearest)
            }, 2500)
          } catch {
            setIsDetecting(false)
            showToast(
              "Error procesando ubicación",
              "Hubo un problema al procesar tu ubicación. Por favor selecciona manualmente.",
              "destructive",
              <AlertCircle className="w-4 h-4 text-red-500" />
            )
          }
        },
        (error) => {
          setIsDetecting(false)

          let errorTitle = "Error de ubicación"
          let errorDescription = "No se pudo detectar tu ubicación. Por favor selecciona manualmente."
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorTitle = "Permisos denegados"
              errorDescription = "Has denegado el acceso a tu ubicación. Puedes habilitarlo en la configuración de tu navegador o seleccionar manualmente."
              break
            case error.POSITION_UNAVAILABLE:
              errorTitle = "Ubicación no disponible"
              errorDescription = "No se pudo obtener tu ubicación actual. Verifica que tienes GPS habilitado o selecciona manualmente."
              break
            case error.TIMEOUT:
              errorTitle = "Tiempo agotado"
              errorDescription = "La detección de ubicación está tardando demasiado. Por favor intenta de nuevo o selecciona manualmente."
              break
          }
          
          showToast(
            errorTitle,
            errorDescription,
            "destructive",
            <AlertCircle className="w-4 h-4 text-red-500" />
          )
        },
        {
          enableHighAccuracy: false,
          timeout: 15000,
          maximumAge: 600000,
        },
      )
    } catch {
      setIsDetecting(false)
      showToast(
        "Error inesperado",
        "Ocurrió un error inesperado al intentar obtener tu ubicación. Por favor selecciona manualmente.",
        "destructive",
        <XCircle className="w-4 h-4 text-red-500" />
      )
    }
  }

  const handleSmartGeolocation = () => {
    if (!("geolocation" in navigator)) {
      showToast(
        "Geolocalización no disponible",
        "Tu navegador no soporta geolocalización.",
        "destructive",
        <XCircle className="w-4 h-4 text-red-500" />
      )
      setShowConfirmation(false)
      return
    }

    try {
      showToast(
        "Verificando ubicación...",
        "Comparando con tu ubicación guardada",
        "default",
        <Navigation className="w-4 h-4 text-blue-500 animate-pulse" />
      )

      navigator.geolocation.getCurrentPosition(
        (position) => {
          try {
            const { latitude, longitude } = position.coords
            const nearestLocation = findNearestLocation(latitude, longitude)

            if (nearestLocation.id !== savedLocationId) {
              toast({
                title: "Nueva ubicación detectada",
                description: (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {`${nearestLocation.name} está más cerca de ti ahora.`}
                  </div>
                ),
                action: (
                  <ToastAction
                    altText="Actualizar ubicación preferida"
                    onClick={() => {
                      saveLocationPreference(nearestLocation.id)
                      showToast(
                        "¡Actualizado!",
                        `${nearestLocation.name} es ahora tu ubicación preferida`,
                        "default",
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )
                    }}
                  >
                    Actualizar
                  </ToastAction>
                ),
              })
            }

            handleLocationSelect(nearestLocation)
          } catch {
            setShowConfirmation(false)
            showToast(
              "Error procesando ubicación",
              "Hubo un problema al procesar tu ubicación. Usando tu preferencia guardada.",
              "destructive",
              <AlertCircle className="w-4 h-4 text-red-500" />
            )
          }
        },
        () => {
          setShowConfirmation(false)
          
          showToast(
            "Error de ubicación",
            "No se pudo detectar tu ubicación. Usando tu preferencia guardada.",
            "destructive",
            <AlertCircle className="w-4 h-4 text-red-500" />
          )
        },
        {
          enableHighAccuracy: false,
          timeout: 15000,
          maximumAge: 600000,
        },
      )
    } catch {
      setShowConfirmation(false)
      showToast(
        "Error inesperado",
        "Ocurrió un error inesperado. Usando tu preferencia guardada.",
        "destructive",
        <XCircle className="w-4 h-4 text-red-500" />
      )
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Preparando tu experiencia gastronómica...</p>
        </div>
      </div>
    )
  }

  if (showConfirmation && savedLocationId) {
    return (
      <ReturningCustomerFlow
        savedLocationId={savedLocationId}
        locations={locations}
        onConfirmAction={handleConfirmSavedLocation}
        onGeolocationAction={handleSmartGeolocation}
        onShowAllAction={() => setShowConfirmation(false)}
      />
    )
  }

  return (
    <div className="min-h-screen">
      {/* Professional Location Picker */}
      <ProfessionalLocationPicker
        locations={locations}
        onLocationSelectAction={handleLocationSelect}
        onGeolocationAction={handleGeolocation}
        isDetecting={isDetecting}
        nearestLocation={nearestLocation}
        loadingLocationId={loadingLocationId}
      />
    </div>
  )
}
