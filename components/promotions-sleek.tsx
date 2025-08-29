"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MessageCircle, ArrowRight, Sparkles, Gift, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"
import { motion, AnimatePresence } from "framer-motion"

interface PromotionsSleekProps {
  locationData: LocationData
  onContactAction: () => void
}

export function PromotionsSleek({ locationData, onContactAction }: PromotionsSleekProps) {
  const [activePromo, setActivePromo] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const promotions = locationData.promotions || []
  const hasMultiplePromos = promotions.length > 1

  // Auto-advance only if multiple promotions
  useEffect(() => {
    if (!isAutoPlaying || promotions.length <= 1) return
    
    const interval = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % promotions.length)
    }, 5000)

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
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Promoción Exclusiva
              </h2>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprovecha esta oferta especial diseñada para ti
            </p>
          </div>

          {/* Single Promo Card */}
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div 
                className="p-8 md:p-12 relative"
                style={{
                  background: `linear-gradient(135deg, ${promo.color || locationData.theme.primary}, ${promo.color || locationData.theme.accent})`
                }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <Gift className="w-full h-full" />
                </div>
                
                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      {getPromoIcon(0)}
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      DISPONIBLE AHORA
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {promo.title}
                  </h3>
                  
                  <p className="text-xl mb-6 opacity-95">
                    {promo.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-8 text-lg">
                    <Clock className="w-5 h-5" />
                    <span>{promo.schedule}</span>
                  </div>
                  
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar Promoción
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // Multiple promotions layout
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Promociones Exclusivas
            </h2>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras ofertas especiales diseñadas para hacer tu experiencia aún más memorable
          </p>
        </div>

        {/* Carousel for 2-3 promotions */}
        {promotions.length <= 3 ? (
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Main Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePromo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <Card className="overflow-hidden shadow-2xl">
                    <div 
                      className="p-8 md:p-12 relative min-h-[320px]"
                      style={{
                        background: `linear-gradient(135deg, ${promotions[activePromo].color || locationData.theme.primary}, ${promotions[activePromo].color || locationData.theme.accent})`
                      }}
                    >
                      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
                        <div className="relative w-full h-full">
                          {getPromoIcon(activePromo)}
                        </div>
                      </div>
                      
                      <div className="relative z-10 text-white max-w-3xl">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                            {getPromoIcon(activePromo)}
                          </div>
                          <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            PROMOCIÓN {activePromo + 1} DE {promotions.length}
                          </div>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                          {promotions[activePromo].title}
                        </h3>
                        
                        <p className="text-xl md:text-2xl mb-6 opacity-95">
                          {promotions[activePromo].subtitle}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-8 text-lg">
                          <Clock className="w-5 h-5" />
                          <span>{promotions[activePromo].schedule}</span>
                        </div>
                        
                        <Button
                          onClick={handleWhatsApp}
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Solicitar Promoción
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Thumbnail Cards */}
              <div className={cn(
                "grid gap-4",
                promotions.length === 2 ? "grid-cols-2" : "grid-cols-3"
              )}>
                {promotions.map((promo, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg",
                      "transform hover:-translate-y-1",
                      index === activePromo && "ring-2 shadow-xl"
                    )}
                    style={{
                      ringColor: index === activePromo ? promo.color || locationData.theme.primary : 'transparent'
                    }}
                    onClick={() => {
                      setActivePromo(index)
                      setIsAutoPlaying(false)
                    }}
                  >
                    <div 
                      className="p-4 h-full"
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
                        
                        <h4 className="font-bold text-lg mb-1 line-clamp-1">
                          {promo.title}
                        </h4>
                        
                        <p className="text-sm opacity-90 line-clamp-2 mb-2">
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
                <div className="flex justify-center gap-2 mt-6">
                  {promotions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActivePromo(index)
                        setIsAutoPlaying(false)
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        index === activePromo 
                          ? "w-8 bg-gradient-to-r from-gray-800 to-gray-600" 
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: locationData.theme.accent,
                color: 'white'
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar Promociones
            </Button>
            
            <Button
              onClick={onContactAction}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                borderColor: locationData.theme.primary,
                color: locationData.theme.primary
              }}
            >
              Más Información
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}