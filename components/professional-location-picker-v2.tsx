"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation, Loader2 } from "lucide-react"
import { type LocationData } from "@/lib/locations"
import { LocationCardProfessional } from "@/components/location-card-professional"
import { MobileLocationPicker } from "@/components/mobile-location-picker"
import { IMAGE_SIZES, BLUR_PLACEHOLDERS } from "@/lib/image-utils"

interface ProfessionalLocationPickerProps {
  locations: LocationData[]
  onLocationSelectAction: (location: LocationData) => void
  onGeolocationAction: () => void
  isDetecting: boolean
  nearestLocation: LocationData | null
  loadingLocationId: string | null
}

export function ProfessionalLocationPickerV2({ 
  locations,
  onLocationSelectAction, 
  onGeolocationAction, 
  isDetecting, 
  nearestLocation, 
  loadingLocationId 
}: ProfessionalLocationPickerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const heroImages = useMemo(() => [
    "/background/arbol.jpg",
    "/background/arbol_2.jpg",
    "/background/arbol_3.jpg",
    "/background/arbol_4.jpg",
    "/background/1898.jpg",
    "/background/capriccio.jpg",
    "/background/capriccio_2.jpg",
    "/background/capriccio_3.jpg",
  ], [])

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

  // Show mobile-optimized component on mobile devices
  if (isMobile) {
    return (
      <MobileLocationPicker
        locations={locations}
        onSelectLocationAction={onLocationSelectAction}
        onUseGeolocationAction={onGeolocationAction}
      />
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        {/* Background skeleton */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900" />
        
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[3s] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes={IMAGE_SIZES.hero}
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDERS.warm}
            />
          </div>
        ))}
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Experiencias
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Gastronómicas
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-2">
              Premium
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Descubre tres experiencias culinarias únicas, cada una con su propio carácter y ambiente especial.
          </p>
          
          {/* Geolocation Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onGeolocationAction}
              disabled={isDetecting}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl disabled:opacity-75 border border-white/20"
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
              <p className="text-white/70 text-sm bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm">
                Más cercano: <span className="font-semibold text-white">{nearestLocation.name}</span>
              </p>
            )}
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCardProfessional
              key={location.id}
              location={location}
              onSelect={onLocationSelectAction}
              isLoading={loadingLocationId === location.id}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
            <p className="text-white/70 text-sm mb-4">
              ¿Necesitas ayuda para decidir? Todos nuestros restaurantes ofrecen experiencias excepcionales
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur-sm">
                Reservas disponibles
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur-sm">
                Eventos privados
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur-sm">
                Menús especiales
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}