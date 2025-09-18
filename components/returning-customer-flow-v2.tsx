"use client"

import { useState } from "react"
import Image from "next/image"
import { type LocationData } from "@/lib/locations"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Sparkles, Clock, ArrowRight, RefreshCw } from "lucide-react"
import { getLocationBlurPlaceholder, IMAGE_SIZES } from "@/lib/image-utils"
import { cn } from "@/lib/utils"

interface ReturningCustomerFlowProps {
  savedLocationId: string
  locations: LocationData[]
  onConfirmAction: () => void
  onGeolocationAction: () => void
  onShowAllAction: () => void
}

export function ReturningCustomerFlowV2({
  savedLocationId,
  locations,
  onConfirmAction,
  onGeolocationAction,
  onShowAllAction,
}: ReturningCustomerFlowProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const savedLocation = locations.find((loc) => loc.id === savedLocationId)
  
  // Time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Buenos días"
    if (hour < 19) return "Buenas tardes"
    return "Buenas noches"
  }

  // Get open status
  const getOpenStatus = () => {
    if (!savedLocation) return { isOpen: false, statusText: '' }
    
    try {
      const now = new Date()
      const chileanTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }))
      const hours = chileanTime.getHours()
      const minutes = chileanTime.getMinutes()
      const currentTimeInMinutes = hours * 60 + minutes
      const dayOfWeek = chileanTime.getDay()
      
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const todayName = days[dayOfWeek] as keyof typeof savedLocation.hours
      const todayHours = savedLocation.hours[todayName] || ''
      
      if (todayName === 'monday' || todayHours === 'CERRADO') {
        return { isOpen: false, statusText: 'Cerrado hoy' }
      }
      
      const hoursParts = todayHours.split(' - ')
      if (hoursParts.length === 2) {
        const [openHour, openMin] = hoursParts[0].split(':').map(Number)
        const [closeHour, closeMin] = hoursParts[1].split(':').map(Number)
        const openTime = openHour * 60 + openMin
        let closeTime = closeHour * 60 + closeMin
        
        if (closeTime < openTime) closeTime += 24 * 60
        
        let adjustedCurrentTime = currentTimeInMinutes
        if (hours < 4) adjustedCurrentTime += 24 * 60
        
        const isOpen = adjustedCurrentTime >= openTime && adjustedCurrentTime <= closeTime
        
        if (isOpen) {
          return { isOpen: true, statusText: `Abierto hasta ${hoursParts[1]}` }
        } else {
          return { isOpen: false, statusText: `Abre a las ${hoursParts[0]}` }
        }
      }
      
      return { isOpen: false, statusText: 'Cerrado' }
    } catch {
      return { isOpen: false, statusText: '' }
    }
  }

  if (!savedLocation) {
    onShowAllAction()
    return null
  }

  const { isOpen, statusText } = getOpenStatus()

  return (
    <div className="fixed inset-0 min-h-screen overflow-hidden">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0">
        {/* Skeleton loader */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse transition-opacity duration-500",
          imageLoaded && "opacity-0"
        )} />
        
        <Image
          src={savedLocation.images.hero}
          alt={savedLocation.name}
          fill
          className={cn(
            "object-cover transition-opacity duration-1000",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          priority
          quality={90}
          sizes={IMAGE_SIZES.hero}
          placeholder="blur"
          blurDataURL={getLocationBlurPlaceholder(savedLocation.id)}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Animated greeting */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-white/80 text-lg mb-4">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span>{getTimeBasedGreeting()}</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              ¡Bienvenido de vuelta!
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              La última vez visitaste
            </p>
            
            <h2 
              className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-2xl"
              style={{ 
                color: savedLocation.theme.accent,
                textShadow: '0 0 40px rgba(0,0,0,0.8)'
              }}
            >
              {savedLocation.name}
            </h2>

            {/* Location info */}
            <div className="inline-flex flex-col gap-2 text-white/80 text-sm bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-8">
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4" />
                <span>{savedLocation.contact.address}</span>
              </div>
              <div className={cn(
                "flex items-center gap-2 justify-center font-medium",
                isOpen ? "text-green-400" : "text-orange-400"
              )}>
                <Clock className="w-4 h-4" />
                <span>{statusText}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            {/* Primary CTA */}
            <Button
              size="lg"
              onClick={onConfirmAction}
              className={cn(
                "relative px-8 py-6 text-lg font-semibold rounded-full",
                "transition-all duration-300 hover:scale-105",
                "shadow-2xl border border-white/20"
              )}
              style={{
                background: `linear-gradient(135deg, ${savedLocation.theme.primary}, ${savedLocation.theme.accent})`,
                color: 'white'
              }}
            >
              <span className="flex items-center gap-2">
                Ver el menú
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>

            {/* Secondary Actions */}
            <div className="flex gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={onShowAllAction}
                className="px-6 py-6 text-white bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Cambiar ubicación
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={onGeolocationAction}
                className="px-6 py-6 text-white bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Más cercano
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}