"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Clock, Users, Utensils, Wine, ChevronRight, Loader2 } from "lucide-react"
import { type LocationData, locations } from "@/lib/locations"
import { MobileLocationPicker } from "@/components/mobile-location-picker"

interface ProfessionalLocationPickerProps {
  onLocationSelectAction: (location: LocationData) => void
  onGeolocationAction: () => void
  isDetecting: boolean
  nearestLocation: LocationData | null
  loadingLocationId: string | null
}

export function ProfessionalLocationPicker({ 
  onLocationSelectAction, 
  onGeolocationAction, 
  isDetecting, 
  nearestLocation, 
  loadingLocationId 
}: ProfessionalLocationPickerProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const heroImages = useMemo(() => 
    isMobile 
      ? [
          "/background/arbol.jpg",
          "/background/1898.jpg",
          "/background/capriccio.jpg",
        ]
      : [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80",
          "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop&q=80",
          "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&h=1080&fit=crop&q=80",
        ]
  , [isMobile])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 20000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Preload location images for better performance
  useEffect(() => {
    locations.forEach((location) => {
      const img = new window.Image()
      img.src = `/locations/${location.id}.jpg`
    })
  }, [])

  const getLocationIcon = (concept: string) => {
    if (concept.includes("Familiar")) return Users
    if (concept.includes("Casual")) return Utensils
    if (concept.includes("Cerveza") || concept.includes("Bar")) return Wine
    return Utensils
  }

  const LocationCard = ({ location }: { location: LocationData }) => {
    const Icon = getLocationIcon(location.concept)
    const isHovered = hoveredLocation === location.id
    const isLoading = loadingLocationId === location.id

    // Get current Chilean time and check if open
    const getChileanTimeAndStatus = () => {
      try {
        // Get Chilean time (UTC-3 in summer, UTC-4 in winter)
        const now = new Date()
        const chileanTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Santiago"}))
        const hours = chileanTime.getHours()
        const minutes = chileanTime.getMinutes()
        const currentTimeInMinutes = hours * 60 + minutes
        const dayOfWeek = chileanTime.getDay()
      
      // Only log once per location on initial render
      if (typeof window !== 'undefined') {
        const w = window as Window & { loggedLocations?: Set<string> }
        if (!w.loggedLocations) {
          w.loggedLocations = new Set()
        }
        if (!w.loggedLocations.has(location.id)) {
          w.loggedLocations.add(location.id)
          console.log(`Chilean time for ${location.name}:`, chileanTime.toLocaleString('es-CL', {
            timeZone: 'America/Santiago',
            hour12: false
          }))
        }
      }
      
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const todayName = days[dayOfWeek] as keyof typeof location.hours
      
      // Get hours for the specific location
      let openTime = 0
      let closeTime = 0
      let isOpen = false
      let todayHours = ''
      
      // Get hours from the location data
      todayHours = location.hours[todayName] || ''
      
      if (todayName === 'monday' || todayHours === 'CERRADO') {
        return { isOpen: false, displayText: 'CERRADO HOY', todayHours: 'CERRADO' }
      }
      
      // Parse opening hours for all restaurants
      const hoursParts = todayHours.split(' - ')
      if (hoursParts.length === 2) {
        const [openHour, openMin] = hoursParts[0].split(':').map(Number)
        const [closeHour, closeMin] = hoursParts[1].split(':').map(Number)
        openTime = openHour * 60 + openMin
        closeTime = closeHour * 60 + closeMin
        
        // Handle times after midnight
        if (closeTime < openTime) {
          closeTime += 24 * 60
        }
        
        // Check if currently open
        let adjustedCurrentTime = currentTimeInMinutes
        if (hours < 4) { // After midnight
          adjustedCurrentTime += 24 * 60
        }
        
        isOpen = adjustedCurrentTime >= openTime && adjustedCurrentTime <= closeTime
      }
      
      if (isOpen) {
        // Extract the closing time directly from todayHours string
        const closeTimeString = todayHours.split(' - ')[1]
        return {
          isOpen: true,
          displayText: `Abierto hasta ${closeTimeString}`,
          todayHours
        }
      } else {
        return {
          isOpen: false,
          displayText: 'CERRADO AHORA',
          todayHours
        }
      }
      } catch (error) {
        console.error(`Error getting time status for ${location.name}:`, error)
        return {
          isOpen: false,
          displayText: 'HORARIO NO DISPONIBLE',
          todayHours: ''
        }
      }
    }
    
    const { isOpen, displayText, todayHours } = getChileanTimeAndStatus()

    // Get theme class based on location
    const getThemeClass = (locationId: string) => {
      switch (locationId) {
        case 'arbol': return 'theme-forest'
        case '1898': return 'theme-brown'
        case 'capriccio': return 'theme-teal'
        default: return 'theme-forest'
      }
    }

    return (
      <Card 
        className={`location-card-glow ${getThemeClass(location.id)} group relative overflow-hidden transition-all duration-300 cursor-pointer ${
          isHovered ? 'transform scale-[1.02] shadow-2xl' : 'shadow-xl hover:shadow-2xl'
        } ${isLoading ? 'opacity-75' : ''}`}
        style={{ 
          background: `rgba(0,0,0,0.05)`,
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: isHovered ? `${location.theme.accent}` : `${location.theme.primary}40`,
          boxShadow: isHovered 
            ? `0 20px 40px ${location.theme.accent}20, 0 0 0 1px ${location.theme.accent}30`
            : `0 10px 30px ${location.theme.primary}15, 0 0 0 1px ${location.theme.primary}20`
        }}
        onMouseEnter={() => setHoveredLocation(location.id)}
        onMouseLeave={() => setHoveredLocation(null)}
        onClick={() => onLocationSelectAction(location)}
      >
        {/* Glass morphism background with stronger theme tint */}
        <div 
          className="absolute inset-0 border-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${location.theme.primary}05, ${location.theme.accent}03)`,
          }}
        />
        
        {/* Background Image with smooth overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <img
            src={`/locations/${location.id}.jpg`}
            alt={location.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <div 
            className={`absolute inset-0 transition-opacity duration-300 ease-out ${
              isHovered 
                ? 'bg-gradient-to-t from-black/75 via-black/45 to-black/35' 
                : 'bg-gradient-to-t from-black/70 via-black/40 to-black/30'
            }`}
          />
          {/* Enhanced themed mica effect on cards */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3"
            style={{
              background: `linear-gradient(135deg, ${location.theme.accent}15, transparent, ${location.theme.primary}08)`
            }}
          />
        </div>

        {/* Content */}
        <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[300px]">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  isHovered ? 'scale-105 shadow-lg' : 'scale-100'
                }`}
                style={{ 
                  backgroundColor: `${location.theme.accent}25`,
                  borderColor: `${location.theme.accent}80`,
                  boxShadow: `0 8px 32px ${location.theme.accent}30, 0 0 20px ${location.theme.accent}20`
                }}
              >
                <Icon className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
              <Badge 
                variant="secondary" 
                className="bg-white/30 text-white border-white/40 shadow-lg"
              >
                {location.concept}
              </Badge>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex-1">
            <h3 className={`text-2xl font-bold text-white mb-2 drop-shadow-lg transition-all duration-500 ${
              isHovered ? 'text-white' : 'text-white/95'
            }`}>
              {location.name}
            </h3>
            <p className="text-white/90 text-sm mb-3 line-clamp-2 drop-shadow-sm">
              {location.description}
            </p>
            
            {/* Location Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-white/80 text-sm bg-black/20 rounded-lg p-2">
                <MapPin className="w-4 h-4" />
                <span>{location.contact.address}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm rounded-lg p-2 transition-all duration-300 ${
                isOpen 
                  ? 'bg-green-500/20 text-green-300' 
                  : 'bg-red-500/20 text-red-300'
              }`}>
                <Clock className={`w-4 h-4 ${isOpen ? 'animate-pulse' : ''}`} />
                <span className="font-medium">
                  {displayText}
                </span>
                {!isOpen && todayHours !== 'CERRADO' && (
                  <span className="text-xs opacity-80">
                    • {todayHours}
                  </span>
                )}
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-4">
              {location.specialties.slice(0, 3).map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 shadow-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className="flex items-center justify-between pt-4 rounded-lg p-3 -mx-3 border-t-2 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${location.theme.primary}15, ${location.theme.accent}10)`,
              borderTopColor: `${location.theme.accent}50`,
              boxShadow: `0 -2px 10px ${location.theme.accent}10`
            }}
          >
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{location.contact.phone}</span>
            </div>
            <Button
              size="sm"
              className={`transition-all duration-300 border-2 shadow-lg ${
                isLoading ? 'opacity-75' : isHovered && isOpen ? 'scale-105 shadow-xl' : 'scale-100'
              } ${!isOpen ? 'opacity-60' : ''}`}
              style={{ 
                backgroundColor: isOpen ? `${location.theme.accent}` : '#666',
                borderColor: isOpen ? `${location.theme.accent}` : '#666',
                boxShadow: isOpen ? `0 4px 20px ${location.theme.accent}40, 0 0 10px ${location.theme.accent}20` : 'none',
                color: 'white'
              }}
              disabled={isLoading || !isOpen}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : !isOpen ? (
                <>
                  Cerrado
                </>
              ) : (
                <>
                  Seleccionar
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </CardContent>

        {/* Combined Hover Effect Overlay */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-all duration-300 ease-out rounded-lg ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(135deg, ${location.theme.accent}08, transparent, ${location.theme.primary}05)`,
            boxShadow: isHovered ? `inset 0 0 0 2px ${location.theme.accent}60, 0 0 30px ${location.theme.accent}20` : 'none'
          }}
        />
      </Card>
    )
  }

  // Show mobile-optimized component on mobile devices
  if (isMobile) {
    return (
      <MobileLocationPicker
        onSelectLocationAction={onLocationSelectAction}
        onUseGeolocationAction={onGeolocationAction}
      />
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background with Mica Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Enhanced Mica Effect Overlay - More opaque */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
            Experiencias
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 drop-shadow-none">
              Gastronómicas
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-2 drop-shadow-lg">
              Premium
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg bg-black/20 rounded-lg p-4">
            Descubre tres experiencias culinarias únicas, cada una con su propio carácter y ambiente especial.
            Desde cenas familiares hasta encuentros casuales, encuentra tu lugar perfecto.
          </p>
          
          {/* Geolocation Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onGeolocationAction}
              disabled={isDetecting}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl disabled:opacity-75 border border-white/20"
            >
              {isDetecting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Detectando ubicación...
                </>
              ) : (
                <>
                  <Navigation className="w-5 h-5 mr-2" />
                  Encontrar el más cercano
                </>
              )}
            </Button>
            {nearestLocation && (
              <p className="text-white/80 text-sm bg-black/30 rounded-full px-4 py-2 border border-white/20">
                Más cercano: <span className="font-semibold">{nearestLocation.name}</span>
              </p>
            )}
          </div>
        </div>

        {/* Location Cards */}
        <div className={`grid gap-6 lg:gap-8 ${
          isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16 bg-black/20 rounded-2xl p-8 border border-white/20">
          <p className="text-white/80 text-sm mb-4 drop-shadow-sm">
            ¿Necesitas ayuda para decidir? Todos nuestros restaurantes ofrecen experiencias excepcionales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-300">
              Reservas disponibles
            </Badge>
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-300">
              Eventos privados
            </Badge>
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-300">
              Menús especiales
            </Badge>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
