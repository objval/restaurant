"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { type LocationData, locations, findNearestLocation } from "@/lib/locations"
import { getLocationPreference, shouldShowConfirmation, saveLocationPreference } from "@/lib/storage"
import { ReturningCustomerFlow } from "@/components/returning-customer-flow"
import { IntegratedHeroPicker } from "@/components/integrated-hero-picker"
import { LocationDetailsSection } from "@/components/location-details-section"

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
      {/* Integrated Hero with Location Picker */}
      <IntegratedHeroPicker
        onLocationSelect={handleLocationSelect}
        onGeolocation={handleGeolocation}
        isDetecting={isDetecting}
        nearestLocation={nearestLocation}
        loadingLocationId={loadingLocationId}
      />

      {/* Location Details Section */}
      <LocationDetailsSection
        locations={locations}
        onLocationSelect={handleLocationSelect}
        loadingLocationId={loadingLocationId}
      />

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para vivir la experiencia?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cada ubicación ofrece un ambiente único y un menú cuidadosamente curado. 
              Desde cenas familiares hasta noches casuales con amigos, tenemos el lugar perfecto para ti.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {locations.map((location) => (
                <div 
                  key={location.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <h4 
                    className="font-bold text-lg mb-2"
                    style={{ color: location.theme.accent }}
                  >
                    {location.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    {location.concept}
                  </p>
                  <div className="text-xs text-gray-400">
                    {location.hours.weekdays}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleGeolocation}
              disabled={isDetecting}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {isDetecting ? "Encontrando tu ubicación..." : "Encuentra tu lugar perfecto"}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
