"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Loader2, Sparkles } from "lucide-react"

interface HeroSectionProps {
  onGeolocation: () => void
  isDetecting: boolean
  nearestLocation: { name: string } | null
}

export function HeroSection({ onGeolocation, isDetecting, nearestLocation }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
  }, [heroImages.length])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt="Ambiente del restaurante"
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Enhanced dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
          {/* Additional overlay for extra contrast on mobile */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wide text-sm md:text-base">EXPERIENCIAS PREMIUM</span>
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block">Elige tu</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Restaurante
            </span>
            <span className="block md:hidden text-2xl font-normal text-gray-200 mt-2">Perfecto</span>
            <span className="hidden md:block">Perfecto</span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            <span className="md:hidden">Tres ubicaciones únicas. Encuentra la tuya.</span>
            <span className="hidden md:block">
              Tres restaurantes únicos, cada uno diseñado para ofrecer momentos inolvidables. Descubre tu destino
              culinario ideal.
            </span>
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <Button
            onClick={onGeolocation}
            disabled={isDetecting}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 w-full max-w-sm md:max-w-none md:w-auto"
          >
            {isDetecting ? (
              <>
                <Loader2 className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 animate-spin" />
                <span className="md:hidden">Encontrando...</span>
                <span className="hidden md:inline">Encontrando tu ubicación perfecta...</span>
              </>
            ) : (
              <>
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                <span className="md:hidden">Encuentra mi Restaurante</span>
                <span className="hidden md:inline">Encuentra mi Restaurante Perfecto</span>
              </>
            )}
          </Button>

          {nearestLocation && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-green-500/90 backdrop-blur-sm text-white px-4 md:px-8 py-3 md:py-4 rounded-full inline-block shadow-xl max-w-sm md:max-w-none">
                <p className="text-sm md:text-lg font-semibold">
                  <span className="md:hidden">🎯 {nearestLocation.name} es perfecto!</span>
                  <span className="hidden md:inline">
                    🎯 ¡{nearestLocation.name} es perfecto para ti! Redirigiendo en unos momentos...
                  </span>
                </p>
              </div>
            </div>
          )}

          <p className="text-gray-300 text-sm md:text-lg px-4 md:px-0">
            <span className="md:hidden">O explora las 3 ubicaciones abajo ↓</span>
            <span className="hidden md:block">O desplázate hacia abajo para explorar las tres ubicaciones únicas</span>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Mobile scroll hint */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/70">
          <div className="text-xs mb-1">Desliza para ver opciones</div>
          <div className="w-8 h-1 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
