"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Clock, Star, Users, Utensils, Wine, ChevronRight, Loader2 } from "lucide-react"
import { type LocationData, locations } from "@/lib/locations"

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
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const heroImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&h=1080&fit=crop&q=80",
  ]

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
    }, 20000) // Changed from 12000 to 20000 (20 seconds) for even slower transition
    return () => clearInterval(interval)
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

    // Get theme class based on location
    const getThemeClass = (locationId: string) => {
      switch (locationId) {
        case 'location1': return 'theme-forest'
        case 'location2': return 'theme-brown'
        case 'location3': return 'theme-teal'
        default: return 'theme-forest'
      }
    }

    return (
      <Card 
        className={`location-card-glow ${getThemeClass(location.id)} group relative overflow-hidden transition-all duration-500 cursor-pointer ${
          isHovered ? 'transform scale-[1.02] shadow-2xl' : 'shadow-xl hover:shadow-2xl'
        } ${isLoading ? 'opacity-75' : ''}`}
        style={{ 
          background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))`,
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: isHovered ? `${location.theme.accent}` : `${location.theme.primary}60`,
          boxShadow: isHovered 
            ? `0 20px 40px ${location.theme.accent}30, 0 0 0 1px ${location.theme.accent}40, inset 0 0 0 1px ${location.theme.accent}20`
            : `0 10px 30px ${location.theme.primary}20, 0 0 0 1px ${location.theme.primary}30`
        }}
        onMouseEnter={() => setHoveredLocation(location.id)}
        onMouseLeave={() => setHoveredLocation(null)}
        onClick={() => onLocationSelectAction(location)}
      >
        {/* Glass morphism background with stronger theme tint */}
        <div 
          className="absolute inset-0 backdrop-blur-xl border-0"
          style={{
            background: `linear-gradient(135deg, ${location.theme.primary}12, ${location.theme.accent}08)`,
          }}
        />
        
        {/* Background Image with smooth overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <img
            src={location.images.hero}
            alt={location.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <div 
            className={`absolute inset-0 transition-all duration-700 ease-out ${
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
                className={`p-3 rounded-full backdrop-blur-sm border-2 transition-all duration-500 ${
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
                className="backdrop-blur-md bg-white/30 text-white border-white/40 shadow-lg"
              >
                {location.concept}
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span className="text-sm font-medium">4.8</span>
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
              <div className="flex items-center gap-2 text-white/80 text-sm bg-black/20 backdrop-blur-sm rounded-lg p-2">
                <MapPin className="w-4 h-4" />
                <span>{location.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm bg-black/20 backdrop-blur-sm rounded-lg p-2">
                <Clock className="w-4 h-4" />
                <span>{location.hours.weekdays}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-4">
              {location.specialties.slice(0, 3).map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/20 text-white border border-white/30 shadow-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className="flex items-center justify-between pt-4 backdrop-blur-sm rounded-lg p-3 -mx-3 border-t-2 transition-all duration-500"
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
              className={`transition-all duration-300 backdrop-blur-sm border-2 shadow-lg ${
                isLoading ? 'opacity-75' : isHovered ? 'scale-105 shadow-xl' : 'scale-100'
              }`}
              style={{ 
                backgroundColor: `${location.theme.accent}`,
                borderColor: `${location.theme.accent}`,
                boxShadow: `0 4px 20px ${location.theme.accent}40, 0 0 10px ${location.theme.accent}20`,
                color: 'white'
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Seleccionar
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </CardContent>

        {/* Enhanced Hover Effect Overlay with stronger theme color */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-all duration-500 ease-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(135deg, ${location.theme.accent}08, transparent, ${location.theme.primary}05)`
          }}
        />
        
        {/* Enhanced border glow effect on hover */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-all duration-500 ease-out rounded-lg ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            boxShadow: `inset 0 0 0 2px ${location.theme.accent}60, 0 0 30px ${location.theme.accent}30, 0 0 60px ${location.theme.accent}15`
          }}
        />
        
        {/* Additional theme-specific glow ring */}
        <div 
          className={`absolute inset-[-3px] pointer-events-none transition-all duration-500 ease-out rounded-lg ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(45deg, ${location.theme.accent}20, transparent, ${location.theme.accent}20)`,
            filter: 'blur(3px)'
          }}
        />
      </Card>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background with Mica Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[6000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Enhanced Mica Effect Overlay - More opaque */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-blur-[2px]" />
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
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg backdrop-blur-sm bg-black/20 rounded-lg p-4">
            Descubre tres experiencias culinarias únicas, cada una con su propio carácter y ambiente especial.
            Desde cenas familiares hasta encuentros casuales, encuentra tu lugar perfecto.
          </p>
          
          {/* Geolocation Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onGeolocationAction}
              disabled={isDetecting}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl disabled:opacity-75 backdrop-blur-sm border border-white/20"
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
              <p className="text-white/80 text-sm bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
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
        <div className="text-center mt-12 lg:mt-16 bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <p className="text-white/80 text-sm mb-4 drop-shadow-sm">
            ¿Necesitas ayuda para decidir? Todos nuestros restaurantes ofrecen experiencias excepcionales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              Reservas disponibles
            </Badge>
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              Eventos privados
            </Badge>
            <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
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
