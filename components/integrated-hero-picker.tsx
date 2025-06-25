"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Loader2, Sparkles, Users, Coffee, Beer, Clock, Star, ChevronDown } from "lucide-react"
import { type LocationData, locations } from "@/lib/locations"

interface IntegratedHeroPickerProps {
  onLocationSelect: (location: LocationData) => void
  onGeolocation: () => void
  isDetecting: boolean
  nearestLocation: LocationData | null
  loadingLocationId: string | null
}

export function IntegratedHeroPicker({ 
  onLocationSelect, 
  onGeolocation, 
  isDetecting, 
  nearestLocation, 
  loadingLocationId 
}: IntegratedHeroPickerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null)

  const heroImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&h=800&fit=crop",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getLocationIcon = (concept: string) => {
    switch (concept) {
      case "Cenas Familiares":
        return Users
      case "Comidas Casuales":
        return Coffee
      case "Noches de Cerveza":
        return Beer
      default:
        return Users
    }
  }

  const handleLocationHover = (location: LocationData) => {
    setSelectedLocation(location)
  }

  const handleLocationLeave = () => {
    setSelectedLocation(null)
  }

  const backgroundImage = selectedLocation 
    ? selectedLocation.images.hero 
    : heroImages[currentImageIndex]

  const overlayColor = selectedLocation
    ? selectedLocation.theme.overlay
    : "rgba(0, 0, 0, 0.7)"

  return (
    <div className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Ambiente del restaurante"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <div 
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{ backgroundColor: overlayColor }}
        />
      </div>

      {/* Content - Fixed height to prevent resizing */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 py-8">
        {/* Header - Fixed height section */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wide text-sm md:text-base">
              EXPERIENCIAS PREMIUM
            </span>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Elige tu</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Experiencia
            </span>
            <span className="block">Perfecta</span>
          </h1>

          {/* Fixed height container for dynamic content to prevent layout shift */}
          <div className="min-h-[80px] flex flex-col justify-center">
            {selectedLocation ? (
              <div className="transition-all duration-300 ease-in-out">
                <h2 className="text-xl md:text-2xl text-gray-200 mb-2 font-semibold">
                  {selectedLocation.name}
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                  {selectedLocation.description}
                </p>
              </div>
            ) : (
              <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto transition-all duration-300 ease-in-out">
                Tres ambientes únicos diseñados para diferentes momentos. 
                Pasa el cursor sobre cada opción para descubrir tu lugar ideal.
              </p>
            )}
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 max-w-4xl mx-auto">
          {locations.map((location) => {
            const IconComponent = getLocationIcon(location.concept)
            const isLoading = loadingLocationId === location.id
            const isNearest = nearestLocation?.id === location.id
            const isSelected = selectedLocation?.id === location.id

            return (
              <div
                key={location.id}
                className={`relative group cursor-pointer transition-all duration-300 ease-in-out transform ${
                  isSelected ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => handleLocationHover(location)}
                onMouseLeave={handleLocationLeave}
                onClick={() => onLocationSelect(location)}
              >
                <div 
                  className="bg-white/10 backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 ease-in-out hover:bg-white/20"
                  style={{ 
                    borderColor: isSelected ? location.theme.accent : 'rgba(255,255,255,0.2)',
                    borderWidth: isSelected ? '2px' : '1px'
                  }}
                >
                  {isNearest && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Más cerca
                    </div>
                  )}

                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
                    style={{ 
                      backgroundColor: isSelected ? location.theme.primary : 'rgba(255,255,255,0.15)'
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {location.name}
                  </h3>
                  
                  <p 
                    className="text-sm md:text-base font-medium mb-3 transition-colors duration-300"
                    style={{ 
                      color: isSelected ? location.theme.accent : '#fbbf24' 
                    }}
                  >
                    {location.concept}
                  </p>

                  <div className="space-y-2 text-xs md:text-sm text-gray-300">
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{location.hours.weekdays.split(': ')[1]}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{location.socialProof.rating} ({location.socialProof.reviews})</span>
                    </div>
                  </div>

                  {isLoading && (
                    <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
                        <p className="text-sm">Preparando experiencia...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Geolocation Button */}
        <div className="space-y-4">
          <Button
            onClick={onGeolocation}
            disabled={isDetecting}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 md:px-12 py-3 md:py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
          >
            {isDetecting ? (
              <>
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                Encontrando tu ubicación...
              </>
            ) : (
              <>
                <MapPin className="w-5 h-5 mr-3" />
                O encuentra automáticamente
              </>
            )}
          </Button>

          {nearestLocation && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-green-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full inline-block shadow-xl">
                <p className="text-lg font-semibold">
                  🎯 ¡{nearestLocation.name} está más cerca de ti!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Features - Fixed height to prevent layout shift */}
        <div className="mt-6 min-h-[60px] flex items-center justify-center">
          {selectedLocation && (
            <div className="animate-in slide-in-from-bottom-4 duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
                <h4 className="font-semibold mb-2 text-sm">Lo que te espera:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedLocation.specialties.slice(0, 3).map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 px-3 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center animate-bounce">
          <ChevronDown className="w-5 h-5 mb-1" />
          <div className="text-xs">Más detalles</div>
        </div>
      </div>
    </div>
  )
} 