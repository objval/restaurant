"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MessageCircle, Gift, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { PROMO_AUTOPLAY_INTERVAL } from "@/lib/constants"
import type { LocationData } from "@/lib/locations"
import { motion, AnimatePresence } from "framer-motion"

interface PromotionsSleekProps {
  locationData: LocationData
}

export function PromotionsSleek({ locationData }: PromotionsSleekProps) {
  const [activePromo, setActivePromo] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const promotions = locationData.promotions || []
  const hasMultiplePromos = promotions.length > 1

  // Auto-advance only if multiple promotions
  useEffect(() => {
    if (!isAutoPlaying || promotions.length <= 1) return
    
    const interval = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % promotions.length)
    }, PROMO_AUTOPLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isAutoPlaying, promotions.length])

  const handleWhatsApp = () => {
    const phone = locationData.contact.phone.replace(/\D/g, '')
    const message = encodeURIComponent('Hola, me gustaría consultar sobre las promociones disponibles')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  if (!promotions.length) return null

  const getPromoIcon = (index: number) => {
    const icons = [Calendar, Gift, Star]
    const Icon = icons[index % icons.length]
    return <Icon className="w-6 h-6" />
  }

  // Single promotion layout
  if (promotions.length === 1) {
    const promo = promotions[0]
    return (
      <section className="py-16 sm:py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>

        <div className="container mx-auto px-4 relative z-10">
          {/* Epic Section Header - matching productos destacados */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-dashed animate-pulse" 
                 style={{ borderColor: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}15` }}>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping" style={{ backgroundColor: locationData.theme.accent }}></div>
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wider" style={{ color: locationData.theme.accent }}>
                OFERTA ESPECIAL ✨
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping delay-300" style={{ backgroundColor: locationData.theme.accent }}></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight leading-none relative px-2">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                PROMOCIÓN
              </span>
              <br />
              <span className="bg-gradient-to-r bg-clip-text text-transparent" 
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 50%, ${locationData.theme.secondary} 100%)` 
                    }}>
                EXCLUSIVA
              </span>
              {/* Decorative elements - matching productos destacados */}
              <div className="absolute -top-2 -right-1 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full animate-bounce" 
                   style={{ backgroundColor: locationData.theme.accent }}></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full animate-bounce delay-500" 
                   style={{ backgroundColor: locationData.theme.primary }}></div>
            </h2>
            
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-4 sm:mb-6">
                🎁 Ofertas especiales preparadas para ti
              </p>
              <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full animate-pulse" 
                   style={{ backgroundColor: locationData.theme.accent }}></div>
            </div>
          </div>

          {/* Compact Promo Card */}
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl group hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
              <div 
                className="p-6 sm:p-8 lg:p-10 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${promo.color || locationData.theme.primary}, ${promo.color || locationData.theme.accent})`
                }}
              >
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-bounce delay-500" 
                     style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-bounce delay-1000" 
                     style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}></div>
                
                {/* Background icon */}
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-5">
                  <Gift className="w-full h-full" />
                </div>
                
                <div className="relative z-10 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          {getPromoIcon(0)}
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 leading-tight">
                        {promo.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-95 leading-relaxed">
                        {promo.subtitle}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-4 sm:mb-6 text-sm sm:text-base">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{promo.schedule}</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <Button
                        onClick={handleWhatsApp}
                        size="lg"
                        className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 touch-manipulation min-h-[44px]"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Solicitar Promoción
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Multiple promotions layout
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>

      <div className="container mx-auto px-4 relative z-10">
        {/* Epic Section Header - matching productos destacados */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-dashed animate-pulse" 
               style={{ borderColor: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}15` }}>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping" style={{ backgroundColor: locationData.theme.accent }}></div>
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wider" style={{ color: locationData.theme.accent }}>
              OFERTAS ESPECIALES ✨
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping delay-300" style={{ backgroundColor: locationData.theme.accent }}></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight leading-none relative px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              PROMOCIONES
            </span>
            <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent" 
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 50%, ${locationData.theme.secondary} 100%)` 
                  }}>
              EXCLUSIVAS
            </span>
            {/* Decorative elements - matching productos destacados */}
            <div className="absolute -top-2 -right-1 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full animate-bounce" 
                 style={{ backgroundColor: locationData.theme.accent }}></div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full animate-bounce delay-500" 
                 style={{ backgroundColor: locationData.theme.primary }}></div>
          </h2>
          
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-4 sm:mb-6">
              🎁 Ofertas especiales preparadas para ti
            </p>
            <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full animate-pulse" 
                 style={{ backgroundColor: locationData.theme.accent }}></div>
          </div>
        </div>

        {/* Compact Carousel for 2-3 promotions */}
        {promotions.length <= 3 ? (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePromo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 sm:mb-8"
                >
                  <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl group hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
                    <div 
                      className="p-6 sm:p-8 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${promotions[activePromo].color || locationData.theme.primary}, ${promotions[activePromo].color || locationData.theme.accent})`
                      }}
                    >
                      {/* Floating decorative elements */}
                      <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-bounce delay-500" 
                           style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-bounce delay-1000" 
                           style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}></div>
                      
                      {/* Background icon */}
                      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-5">
                        <Gift className="w-full h-full" />
                      </div>
                      
                      <div className="relative z-10 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                {getPromoIcon(activePromo)}
                              </div>
                              <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                                {activePromo + 1} DE {promotions.length}
                              </div>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 leading-tight">
                              {promotions[activePromo].title}
                            </h3>
                            
                            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-95 leading-relaxed">
                              {promotions[activePromo].subtitle}
                            </p>
                            
                            <div className="flex items-center gap-2 mb-4 sm:mb-6 text-sm sm:text-base">
                              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>{promotions[activePromo].schedule}</span>
                            </div>
                          </div>
                          
                          {/* CTA */}
                          <div className="flex-shrink-0">
                            <Button
                              onClick={handleWhatsApp}
                              size="lg"
                              className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 touch-manipulation min-h-[44px]"
                            >
                              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                              Solicitar Promoción
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Thumbnail Cards */}
              <div className={cn(
                "grid gap-3 sm:gap-4",
                promotions.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"
              )}>
                {promotions.map((promo, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg",
                      "transform hover:-translate-y-1 touch-manipulation",
                      index === activePromo && "ring-2 shadow-xl"
                    )}
                    style={{
                      boxShadow: index === activePromo ? `0 0 0 2px ${promo.color || locationData.theme.primary}` : 'none'
                    }}
                    onClick={() => {
                      setActivePromo(index)
                      setIsAutoPlaying(false)
                    }}
                  >
                    <div 
                      className="p-3 sm:p-4 h-full min-h-[80px] sm:min-h-[100px]"
                      style={{
                        background: index === activePromo 
                          ? `linear-gradient(135deg, ${promo.color || locationData.theme.primary}, ${promo.color || locationData.theme.accent})`
                          : `linear-gradient(135deg, ${promo.color || locationData.theme.primary}99, ${promo.color || locationData.theme.accent}99)`
                      }}
                    >
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                            {getPromoIcon(index)}
                          </div>
                          {index === activePromo && (
                            <div className="px-2 py-1 bg-white/30 rounded-full text-xs font-semibold">
                              VIENDO
                            </div>
                          )}
                        </div>
                        
                        <h4 className="font-bold text-sm sm:text-base mb-1 line-clamp-1">
                          {promo.title}
                        </h4>
                        
                        <p className="text-xs sm:text-sm opacity-90 line-clamp-2 mb-2">
                          {promo.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-1 text-xs opacity-80">
                          <Clock className="w-3 h-3" />
                          <span className="line-clamp-1">{promo.schedule}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Progress dots */}
              {hasMultiplePromos && (
                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                  {promotions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActivePromo(index)
                        setIsAutoPlaying(false)
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300 touch-manipulation",
                        index === activePromo 
                          ? "w-6 sm:w-8" 
                          : "w-2 hover:bg-gray-400"
                      )}
                      style={{
                        backgroundColor: index === activePromo 
                          ? locationData.theme.primary 
                          : '#d1d5db'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}

      </div>
    </section>
  )
}