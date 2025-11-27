"use client"

import { useState } from "react"
import Image from "next/image"
import type { LocationData } from "@/lib/locations"
import { MapPin, Wifi, Car, Trees, Music2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getLocationBlurPlaceholder, IMAGE_SIZES } from "@/lib/image-utils"
import { calculateOpenStatus } from "@/hooks/use-open-status"

interface MobileLocationPickerProps {
  locations: LocationData[]
  onSelectLocationAction: (location: LocationData) => void
  onUseGeolocationAction: () => void
}

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "WiFi Gratis": Wifi,
  "Estacionamiento": Car,
  "Terraza": Trees,
  "Música en Vivo": Music2,
}

export function MobileLocationPicker({ locations, onSelectLocationAction, onUseGeolocationAction }: MobileLocationPickerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const getFeatureIcon = (feature: string) => {
    const Icon = featureIcons[feature]
    return Icon ? <Icon className="w-3 h-3" /> : null
  }

  // Get open status using centralized function
  const getChileanTimeAndStatus = (location: LocationData) => {
    return calculateOpenStatus(location)
  }

  return (
    <div className="h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-stone-50 via-orange-50 to-amber-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content - fills entire screen */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Compact Header - fixed height */}
        <header className="px-4 py-3 flex-shrink-0">
          <h1 className="text-xl font-black text-gray-900">Elige tu Experiencia</h1>
          <p className="text-[10px] text-gray-600 font-medium">Toca para seleccionar</p>
        </header>

        {/* Cards Container - flex-1 to fill remaining space */}
        <div className="flex-1 px-4 flex flex-col justify-center">
          <div className="flex flex-col gap-3">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => {
                  setSelectedId(location.id)
                  setTimeout(() => onSelectLocationAction(location), 200)
                }}
                className={cn(
                  "relative rounded-2xl overflow-hidden transition-all duration-200 group",
                  selectedId === location.id ? "scale-[0.97] opacity-90" : "active:scale-[0.98]",
                  "shadow-lg hover:shadow-xl",
                  "h-[calc((100vh-180px)/3)]", // Dynamic height to fit exactly 3 cards
                  "max-h-[200px]" // Max height for larger screens
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {/* Skeleton background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse transition-opacity duration-500 ${
                    loadedImages.has(location.id) ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <Image 
                    src={location.images.hero} 
                    alt={location.name}
                    fill
                    className={`object-cover transition-opacity duration-700 ${
                      loadedImages.has(location.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                    quality={85}
                    sizes={IMAGE_SIZES.mobile}
                    placeholder="blur"
                    blurDataURL={getLocationBlurPlaceholder(location.id)}
                    onLoad={() => {
                      setLoadedImages(prev => new Set([...prev, location.id]))
                    }}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Accent Gradient */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(to right, transparent 70%, ${location.theme.primary})`
                  }}
                />

                {/* Content Overlay - simplified */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    <div className="text-left">
                      <h3 className="text-xl font-black text-white drop-shadow-md">{location.name}</h3>
                      <span 
                        className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${location.theme.primary}40`,
                          color: 'white',
                          borderColor: `${location.theme.primary}60`,
                          borderWidth: '1px',
                          borderStyle: 'solid'
                        }}
                      >
                        {location.concept}
                      </span>
                    </div>
                    
                    {/* Feature Icons - smaller */}
                    <div className="flex gap-1">
                      {location.features.slice(0, 2).map((feature) => {
                        const icon = getFeatureIcon(feature)
                        return icon ? (
                          <div 
                            key={feature}
                            className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white"
                          >
                            {icon}
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>

                  {/* Bottom Section - compressed */}
                  <div className="space-y-2">
                    {/* Atmosphere tags - inline */}
                    <div className="flex gap-1.5">
                      {location.atmosphere.slice(0, 2).map((atm) => (
                        <span 
                          key={atm}
                          className="px-2 py-1 rounded-lg text-[10px] font-medium bg-white/15 backdrop-blur-sm text-white"
                        >
                          {atm}
                        </span>
                      ))}
                      {(() => {
                        const { isOpen, displayText } = getChileanTimeAndStatus(location)
                        return (
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-sm ${
                            isOpen ? 'bg-green-500/25' : 'bg-red-500/25'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                            }`} />
                            <span className={`text-[10px] font-semibold ${
                              isOpen ? 'text-green-300' : 'text-red-300'
                            }`}>{displayText}</span>
                          </div>
                        )
                      })()}
                    </div>
                    
                    {/* Dishes and Specialties - combined row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[11px] text-white/90 font-medium">
                          {location.specialties[0]}
                        </span>
                      </div>
                      
                      {/* Mini dish previews */}
                      <div className="flex -space-x-2">
                        {location.menuHighlights.slice(0, 3).map((dish, idx) => (
                          <div 
                            key={dish.id}
                            className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30"
                            style={{ zIndex: 3 - idx }}
                          >
                            <Image 
                              src={dish.image}
                              alt={dish.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Fixed Footer - smaller */}
        <footer className="px-4 pb-4 pt-2 flex-shrink-0">
          <Button 
            onClick={onUseGeolocationAction}
            className="w-full h-12 bg-black/85 backdrop-blur-sm hover:bg-black text-white font-semibold rounded-xl shadow-xl transition-all active:scale-[0.98]"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Encontrar el más cercano
          </Button>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 7s;
        }

        .animation-delay-4000 {
          animation-delay: 14s;
        }
      `}} />
    </div>
  )
}