"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Menu, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"
import { useToast } from "@/hooks/use-toast"

interface FeaturedProductsFanProps {
  locationData: LocationData
}

export function FeaturedProductsFan({ locationData }: FeaturedProductsFanProps) {
  const [activeIndex, setActiveIndex] = useState(1) // Start with middle card active
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Detect mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      setIsExpanded(!isExpanded)
    } else {
      setActiveIndex(index)
      setIsExpanded(true)
    }
  }

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + locationData.menuHighlights.length) % locationData.menuHighlights.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % locationData.menuHighlights.length)
  }

  const getBadgeInfo = (index: number) => {
    const badges = [
      { gradient: "from-red-500 to-orange-500", icon: "🔥", label: "MÁS POPULAR", shortLabel: "POPULAR" },
      { gradient: "from-purple-500 to-pink-500", icon: "⭐", label: "CHEF'S CHOICE", shortLabel: "CHEF" },
      { gradient: "from-green-500 to-teal-500", icon: "💚", label: "FAVORITO", shortLabel: "FAV" }
    ]
    return badges[index] || badges[0]
  }

  // Calculate card positions for fan effect
  const getCardStyle = (index: number) => {
    const totalCards = locationData.menuHighlights.length
    const activePos = activeIndex
    const relativePos = (index - activePos + totalCards) % totalCards
    
    if (!isExpanded && !isMobile) {
      // Stacked view - cards behind each other
      return {
        transform: `translateX(${(index - 1) * 20}px) translateY(${(index - 1) * 5}px) rotate(${(index - 1) * 2}deg) scale(${1 - Math.abs(index - 1) * 0.05})`,
        zIndex: totalCards - Math.abs(index - 1),
        opacity: 1,
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }

    if (isMobile) {
      // Mobile carousel view
      const offset = relativePos === 0 ? 0 : relativePos === 1 ? 1 : -1
      return {
        transform: `translateX(${offset * 105}%) scale(${relativePos === 0 ? 1 : 0.85})`,
        zIndex: relativePos === 0 ? 10 : 5,
        opacity: relativePos <= 1 || relativePos === totalCards - 1 ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }

    // Desktop fan view
    const positions = [
      { x: 0, y: 0, rotate: 0, scale: 1.05, z: 10 }, // Center (active)
      { x: -320, y: 30, rotate: -8, scale: 0.9, z: 8 }, // Left
      { x: 320, y: 30, rotate: 8, scale: 0.9, z: 8 }, // Right
    ]

    const pos = positions[relativePos] || { x: 0, y: 100, rotate: 0, scale: 0.8, z: 1 }
    
    return {
      transform: `translateX(${pos.x}px) translateY(${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
      zIndex: pos.z,
      opacity: relativePos <= 2 ? 1 : 0,
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      filter: relativePos === 0 ? 'none' : 'brightness(0.9)'
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full" 
             style={{ backgroundColor: locationData.theme.primary }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" 
             style={{ backgroundColor: locationData.theme.accent }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-dashed animate-pulse" 
               style={{ borderColor: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}15` }}>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping" style={{ backgroundColor: locationData.theme.accent }}></div>
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wider" style={{ color: locationData.theme.accent }}>
              LO MÁS POPULAR ✨
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping delay-300" style={{ backgroundColor: locationData.theme.accent }}></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 tracking-tight leading-none relative px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              PRODUCTOS
            </span>
            {" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent" 
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 50%, ${locationData.theme.secondary} 100%)` 
                  }}>
              DESTACADOS
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
            🔥 Los platos más queridos por nuestros clientes
          </p>
        </div>

        {/* Fan Cards Container */}
        <div className="relative" ref={containerRef}>
          {/* Controls for desktop */}
          {!isMobile && isExpanded && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all hover:scale-110"
                style={{ color: locationData.theme.primary }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all hover:scale-110"
                style={{ color: locationData.theme.primary }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Cards Container with proper height */}
          <div className={cn(
            "relative mx-auto transition-all duration-700",
            isMobile ? "h-[520px] sm:h-[580px]" : (isExpanded ? "h-[600px] lg:h-[650px]" : "h-[550px]"),
            isMobile ? "max-w-[350px] sm:max-w-[400px]" : "max-w-6xl"
          )}>
            {/* Instruction text for desktop */}
            {!isMobile && !isExpanded && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg animate-pulse">
                  <span className="text-sm font-semibold text-gray-700">
                    👆 Click para expandir
                  </span>
                </div>
              </div>
            )}

            {/* Product Cards */}
            {locationData.menuHighlights.map((item, index) => {
              const badge = getBadgeInfo(index)
              const isActive = index === activeIndex
              
              return (
                <div
                  key={item.id}
                  className={cn(
                    "absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer",
                    "w-[300px] sm:w-[350px] lg:w-[380px]",
                    "transition-all duration-700"
                  )}
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl",
                    "hover:shadow-3xl transition-all duration-500",
                    isActive && "ring-4 ring-offset-2",
                    !isMobile && isExpanded && !isActive && "hover:scale-105"
                  )}
                  style={{ 
                    boxShadow: isActive ? `0 20px 40px ${locationData.theme.primary}30` : undefined,
                    borderColor: isActive ? locationData.theme.primary : undefined
                  }}>
                    {/* Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                      <div className={cn(
                        "flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r text-white rounded-full text-xs font-bold shadow-lg",
                        badge.gradient,
                        isActive && "animate-pulse"
                      )}>
                        <span className="text-sm">{badge.icon}</span>
                        <span className="hidden sm:inline">{badge.label}</span>
                        <span className="sm:hidden">{badge.shortLabel}</span>
                      </div>
                    </div>

                    {/* Heart button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        toast({
                          title: "❤️ ¡Añadido a favoritos!",
                          description: `${item.name} se ha guardado en tus platos favoritos`,
                        })
                      }}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <Heart className="w-4 h-4" />
                    </button>

                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className={cn(
                          "object-cover transition-all duration-1000",
                          isActive && "scale-110"
                        )}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Hover overlay */}
                      {isActive && (
                        <Link href={`/${locationData.id}/menu`}>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/95 backdrop-blur-lg px-6 py-3 rounded-full font-bold text-gray-800 shadow-2xl flex items-center gap-2">
                              <Menu className="w-5 h-5" />
                              <span>Ver en Menú</span>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-black text-lg sm:text-xl mb-2 line-clamp-1"
                          style={{ color: locationData.theme.primary }}>
                        {item.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {item.description || 'Delicioso plato preparado con ingredientes frescos'}
                      </p>

                      {/* Price and rating */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-black" style={{ color: locationData.theme.primary }}>
                          {item.price}
                        </div>
                        
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map((star) => (
                            <span key={star} className="text-yellow-400 text-sm">⭐</span>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {['🌱 Fresco', '🏆 Premium', '👨‍🍳 Artesanal'].map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 rounded-full text-xs font-semibold border"
                            style={{ 
                              backgroundColor: `${locationData.theme.accent}15`,
                              borderColor: `${locationData.theme.accent}30`,
                              color: locationData.theme.accent
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile swipe indicators */}
          {isMobile && (
            <div className="flex justify-center gap-2 mt-6">
              {locationData.menuHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-8" : "w-2"
                  )}
                  style={{
                    backgroundColor: index === activeIndex 
                      ? locationData.theme.primary 
                      : '#d1d5db'
                  }}
                />
              ))}
            </div>
          )}

          {/* Mobile swipe hint */}
          {isMobile && (
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">
                ← Desliza para ver más →
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link href={`/${locationData.id}/menu`}>
            <button 
              className="px-8 py-4 text-white font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: locationData.theme.primary,
                boxShadow: `0 10px 25px ${locationData.theme.primary}30`
              }}
            >
              <Menu className="inline-block w-5 h-5 mr-2" />
              Ver Menú Completo
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}