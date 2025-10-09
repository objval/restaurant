"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter } from "next/navigation"
import { MapPin, CheckCircle, XCircle, AlertCircle, Navigation } from "lucide-react"
import { type LocationData, findNearestLocation } from "@/lib/locations"
import { getLocationPreference, shouldShowConfirmation, saveLocationPreference } from "@/lib/storage"
import { ReturningCustomerFlowV2 } from "@/components/returning-customer-flow-v2"
import { ProfessionalLocationPickerV2 } from "@/components/professional-location-picker-v2"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

interface LocationSelectorClientProps {
  initialLocations: LocationData[]
}

export default function LocationSelectorClient({ initialLocations }: LocationSelectorClientProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [savedLocationId, setSavedLocationId] = useState<string | null>(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [nearestLocation, setNearestLocation] = useState<LocationData | null>(null)
  const [loadingLocationId, setLoadingLocationId] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const { toast } = useToast()

  // Use initialLocations from server
  const locations = initialLocations

  // Check for saved location immediately on mount to prevent flash
  useEffect(() => {
    const checkSavedLocation = () => {
      const saved = getLocationPreference()
      if (saved && shouldShowConfirmation()) {
        setSavedLocationId(saved)
        setShowConfirmation(true)
      }
      // Set loading to false after checking
      setIsLoading(false)
    }

    // Check immediately without delay to prevent flash
    checkSavedLocation()
  }, [])

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

    // Always navigate to location page when selecting from picker
    startTransition(() => {
      router.push(location.path)
    })
  }

  const handleConfirmSavedLocation = () => {
    if (savedLocationId) {
      const location = locations.find((loc) => loc.id === savedLocationId)
      if (location) {
        // When confirming saved location with "Ver el menú" button:
        // If menuLink exists, open it in new tab, otherwise navigate to location page
        if (location.menuLink) {
          window.open(location.menuLink, '_blank', 'noopener,noreferrer')
        } else {
          router.push(location.path)
        }
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

  // Show loading state while determining which component to render
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="text-center">
          {/* Cool animated loader */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl animate-pulse">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-bounce"></div>
              </div>
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-amber-400 rounded-full -translate-x-1/2 animate-pulse delay-300"></div>
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-orange-500 rounded-full -translate-y-1/2 animate-pulse delay-700"></div>
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-white rounded-full -translate-y-1/2 animate-pulse delay-1000"></div>
            </div>
          </div>

          <h1 className="text-2xl font-black text-white mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Experiencias Gastronómicas
          </h1>
          <p className="text-gray-400 text-sm animate-pulse">Preparando tu experiencia...</p>
        </div>
      </div>
    )
  }

  // Show returning customer flow if applicable
  if (showConfirmation && savedLocationId) {
    return (
      <ReturningCustomerFlowV2
        savedLocationId={savedLocationId}
        locations={locations}
        onConfirmAction={handleConfirmSavedLocation}
        onGeolocationAction={handleSmartGeolocation}
        onShowAllAction={() => setShowConfirmation(false)}
      />
    )
  }

  // Show location picker
  return (
    <div className="min-h-screen">
      <ProfessionalLocationPickerV2
        locations={locations}
        onLocationSelectAction={handleLocationSelect}
        onGeolocationAction={handleGeolocation}
        isDetecting={isDetecting}
        nearestLocation={nearestLocation}
        loadingLocationId={loadingLocationId || (isPending ? 'pending' : null)}
      />
    </div>
  )
}