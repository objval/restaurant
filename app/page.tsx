"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { type LocationData, locations, findNearestLocation } from "@/lib/locations"
import { getLocationPreference, shouldShowConfirmation, saveLocationPreference } from "@/lib/storage"
import { ReturningCustomerFlow } from "@/components/returning-customer-flow"
import { LocationCardDetailed } from "@/components/location-card-detailed"
import { HeroSection } from "@/components/hero-section"

export default function LocationSelector() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [savedLocationId, setSavedLocationId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDetecting, setIsDetecting] = useState(false)
  const [nearestLocation, setNearestLocation] = useState<LocationData | null>(null)
  const [loadingLocationId, setLoadingLocationId] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const saved = getLocationPreference()
    if (saved && shouldShowConfirmation()) {
      setSavedLocationId(saved)
      setShowConfirmation(true)
    }
    setIsLoading(false)
  }, [])

  const handleLocationSelect = (location: LocationData) => {
    setLoadingLocationId(location.id)
    saveLocationPreference(location.id)

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
      alert("La geolocalización no es compatible con tu navegador.")
      return
    }

    setIsDetecting(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const nearest = findNearestLocation(latitude, longitude)
        setNearestLocation(nearest)
        setIsDetecting(false)

        setTimeout(() => {
          handleLocationSelect(nearest)
        }, 2500)
      },
      (error) => {
        console.error("Error de geolocalización:", error)
        setIsDetecting(false)

        let errorMessage = "No se pudo detectar tu ubicación. Por favor selecciona manualmente."
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Acceso a ubicación denegado. Por favor habilita los servicios de ubicación e intenta de nuevo, o selecciona manualmente."
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Información de ubicación no disponible. Por favor selecciona manualmente."
            break
          case error.TIMEOUT:
            errorMessage = "Tiempo de espera agotado para obtener ubicación. Por favor selecciona manualmente."
            break
        }
        alert(errorMessage)
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 600000,
      },
    )
  }

  const handleSmartGeolocation = () => {
    if (!("geolocation" in navigator)) {
      alert("Geolocalización no compatible.")
      setShowConfirmation(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const nearestLocation = findNearestLocation(latitude, longitude)

        if (nearestLocation.id !== savedLocationId) {
          const confirmUpdate = confirm(
            `Encontramos que ${nearestLocation.name} está más cerca de ti ahora. ¿Actualizar tu ubicación preferida?`,
          )

          if (confirmUpdate) {
            saveLocationPreference(nearestLocation.id)
          }
        }

        handleLocationSelect(nearestLocation)
      },
      (error) => {
        console.error("Error de geolocalización:", error)
        setShowConfirmation(false)
        alert("No se pudo detectar tu ubicación. Por favor selecciona manualmente.")
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 600000,
      },
    )
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
        onConfirm={handleConfirmSavedLocation}
        onGeolocation={handleSmartGeolocation}
        onShowAll={() => setShowConfirmation(false)}
      />
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onGeolocation={handleGeolocation} isDetecting={isDetecting} nearestLocation={nearestLocation} />

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              <span className="md:hidden">Nuestras 3 Ubicaciones</span>
              <span className="hidden md:block">Tres Destinos Culinarios Únicos</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              <span className="md:hidden">Cada restaurante ofrece una experiencia única. Elige el tuyo.</span>
              <span className="hidden md:block">
                Cada ubicación cuenta su propia historia a través de ambientes cuidadosamente diseñados, ingredientes de
                origen local y platos únicos que celebran la esencia de su entorno.
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location) => (
              <LocationCardDetailed
                key={location.id}
                location={location}
                onSelect={handleLocationSelect}
                isNearest={nearestLocation?.id === location.id}
                isLoading={loadingLocationId === location.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            <span className="md:hidden">¿Indeciso?</span>
            <span className="hidden md:block">¿No puedes decidir?</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            <span className="md:hidden">Te ayudamos a encontrar tu lugar perfecto.</span>
            <span className="hidden md:block">
              Cada ubicación ofrece un ambiente único y un menú cuidadosamente curado. Permítenos ayudarte a encontrar
              tu experiencia gastronómica perfecta.
            </span>
          </p>
          <button
            onClick={handleGeolocation}
            disabled={isDetecting}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl w-full max-w-sm md:max-w-none md:w-auto"
          >
            <span className="md:hidden">{isDetecting ? "Buscando..." : "Encuentra mi lugar"}</span>
            <span className="hidden md:block">
              {isDetecting ? "Encontrando tu ubicación..." : "Encuentra mi lugar perfecto"}
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}
