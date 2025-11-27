"use client"

import { useState, memo } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Users, Utensils, Wine, ChevronRight, Loader2 } from "lucide-react"
import { type LocationData } from "@/lib/locations"
import { getLocationBlurPlaceholder, IMAGE_SIZES } from "@/lib/image-utils"
import { cn } from "@/lib/utils"

interface LocationCardProfessionalProps {
  location: LocationData
  onSelect: (location: LocationData) => void
  isLoading?: boolean
}

// Memoized card component to prevent unnecessary re-renders
export const LocationCardProfessional = memo(function LocationCardProfessional({
  location,
  onSelect,
  isLoading = false
}: LocationCardProfessionalProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Get icon based on concept
  const getLocationIcon = (concept: string) => {
    if (concept.includes("Familiar")) return Users
    if (concept.includes("Casual")) return Utensils
    if (concept.includes("Cerveza") || concept.includes("Bar")) return Wine
    return Utensils
  }

  const Icon = getLocationIcon(location.concept)

  // Get current Chilean time and check if open
  const getOpenStatus = () => {
    try {
      const now = new Date()
      const chileanTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }))
      const hours = chileanTime.getHours()
      const minutes = chileanTime.getMinutes()
      const currentTimeInMinutes = hours * 60 + minutes
      const dayOfWeek = chileanTime.getDay()
      
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const todayName = days[dayOfWeek] as keyof typeof location.hours
      
      const todayHours = location.hours[todayName] || ''
      
      if (todayHours === 'CERRADO') {
        return { isOpen: false, displayText: 'CERRADO HOY', todayHours: 'CERRADO' }
      }
      
      const hoursParts = todayHours.split(' - ')
      if (hoursParts.length === 2) {
        const [openHour, openMin] = hoursParts[0].split(':').map(Number)
        const [closeHour, closeMin] = hoursParts[1].split(':').map(Number)
        const openMinutes = openHour * 60 + openMin
        const closeMinutes = closeHour * 60 + closeMin
        
        let isOpen = false
        
        if (closeMinutes < openMinutes) {
          // Lógica para horarios que cruzan la medianoche
          isOpen = currentTimeInMinutes >= openMinutes || currentTimeInMinutes < closeMinutes
        } else {
          // Horario normal
          isOpen = currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes
        }
        
        if (isOpen) {
          const closeTimeString = hoursParts[1]
          return {
            isOpen: true,
            displayText: `Abierto hasta ${closeTimeString}`,
            todayHours
          }
        }
      }
      
      return {
        isOpen: false,
        displayText: 'CERRADO AHORA',
        todayHours
      }
    } catch {
      return {
        isOpen: false,
        displayText: 'HORARIO NO DISPONIBLE',
        todayHours: ''
      }
    }
  }

  const { isOpen, displayText, todayHours } = getOpenStatus()

  return (
    <div 
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={cn(
          "group relative overflow-hidden cursor-pointer h-full",
          "transition-transform duration-300 ease-out",
          "border-2 bg-black/30 backdrop-blur-sm",
          isHovered && "transform scale-[1.02]",
          isLoading && "opacity-75"
        )}
        style={{
          borderColor: location.theme.primary + '40',
          boxShadow: `0 10px 30px ${location.theme.primary}15`
        }}
        onClick={() => onSelect(location)}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Skeleton loader */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse transition-opacity duration-500",
            imageLoaded && "opacity-0"
          )} />
          
          <Image
            src={location.images.hero}
            alt={location.name}
            fill
            className={cn(
              "object-cover transition-all duration-700",
              isHovered && "scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            priority
            quality={85}
            sizes={IMAGE_SIZES.card}
            placeholder="blur"
            blurDataURL={getLocationBlurPlaceholder(location.id)}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          
          {/* Hover accent overlay */}
          <div 
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              background: `linear-gradient(135deg, ${location.theme.accent}10, transparent)`
            }}
          />
        </div>

        <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[320px]">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className={cn(
                    "p-3 rounded-full border-2 transition-all duration-300",
                    isHovered && "scale-110 rotate-3"
                  )}
                  style={{ 
                    backgroundColor: `${location.theme.accent}30`,
                    borderColor: `${location.theme.accent}60`
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <Badge 
                  variant="secondary" 
                  className="bg-black/50 text-white border-white/30"
                >
                  {location.concept}
                </Badge>
              </div>
            </div>

            {/* Title and Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {location.name}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2">
                {location.description}
              </p>
            </div>

            {/* Location and Hours */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">{location.contact.address}</span>
              </div>
              
              <div className={cn(
                "flex items-center gap-2 text-sm rounded-lg px-2 py-1.5",
                isOpen 
                  ? "bg-green-500/20 text-green-100" 
                  : "bg-red-500/20 text-red-100"
              )}>
                <Clock className={cn("w-4 h-4", isOpen && "animate-pulse")} />
                <span className="font-medium">{displayText}</span>
                {!isOpen && todayHours !== 'CERRADO' && (
                  <span className="text-xs opacity-70">• {todayHours}</span>
                )}
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-1.5">
              {location.specialties.slice(0, 3).map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/90 backdrop-blur-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 space-y-3 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
              <Phone className="w-4 h-4" />
              <span>{location.contact.phone}</span>
            </div>
            
            <Button
              size="sm"
              className={cn(
                "w-full transition-all duration-300",
                !isOpen && "opacity-50 cursor-not-allowed"
              )}
              style={{ 
                backgroundColor: isOpen ? location.theme.accent : '#666',
                borderColor: isOpen ? location.theme.accent : '#666'
              }}
              disabled={isLoading || !isOpen}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  {isOpen ? 'Seleccionar' : 'Cerrado'}
                  {isOpen && <ChevronRight className="w-4 h-4 ml-1" />}
                </>
              )}
            </Button>
          </div>
        </CardContent>

        {/* Hover border effect - isolated layer */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              border: `2px solid ${location.theme.accent}`,
              boxShadow: `inset 0 0 20px ${location.theme.accent}20`
            }}
          />
        )}
      </Card>
    </div>
  )
})