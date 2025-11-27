"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Users, Star, Sparkles, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"

interface PromotionsProfessionalProps {
  locationData: LocationData
  onContactAction: () => void
}

export function PromotionsProfessional({ locationData, onContactAction }: PromotionsProfessionalProps) {
  const [activePromo, setActivePromo] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || !locationData.promotions?.length) return
    
    const interval = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % locationData.promotions.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, locationData.promotions])

  const handleWhatsApp = () => {
    const phone = locationData.contact.phone.replace(/\D/g, '')
    const message = encodeURIComponent('Hola, me gustaría consultar sobre las promociones disponibles')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  if (!locationData.promotions?.length) return null

  const promotions = locationData.promotions

  const nextPromo = () => {
    setIsAutoPlaying(false)
    setActivePromo((prev) => (prev + 1) % promotions.length)
  }

  const prevPromo = () => {
    setIsAutoPlaying(false)
    setActivePromo((prev) => (prev - 1 + promotions.length) % promotions.length)
  }

  const getPromoIcon = (index: number) => {
    const icons = [Calendar, Clock, Users, Star, Sparkles]
    const Icon = icons[index % icons.length]
    return <Icon className="w-5 h-5" />
  }

  const getPromoGradient = (index: number) => {
    const gradients = [
      'from-amber-600 to-orange-600',
      'from-purple-600 to-pink-600',
      'from-blue-600 to-cyan-600',
      'from-green-600 to-emerald-600',
      'from-red-600 to-rose-600'
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, ${locationData.theme.primary} 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, ${locationData.theme.accent} 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, ${locationData.theme.secondary} 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Promociones Exclusivas
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras ofertas especiales diseñadas para hacer tu experiencia aún más memorable
          </p>
        </div>

        {/* Main Promotion Carousel */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl">
              {promotions.map((promo, index) => (
                <Card
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    index === activePromo 
                      ? "opacity-100 translate-x-0 z-10" 
                      : index < activePromo 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  )}
                  style={{
                    background: `linear-gradient(135deg, ${promo.color || locationData.theme.primary} 0%, ${promo.color || locationData.theme.secondary} 100%)`
                  }}
                >
                  <div className="p-12 md:p-16 text-white h-full flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                            {getPromoIcon(index)}
                          </div>
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-1.5 text-sm font-semibold">
                            PROMOCIÓN ACTIVA
                          </Badge>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold mb-3">
                          {promo.title}
                        </h3>
                        
                        <p className="text-xl md:text-2xl opacity-95 mb-6">
                          {promo.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-2 text-lg opacity-90">
                          <Clock className="w-5 h-5" />
                          <span>{promo.schedule}</span>
                        </div>
                      </div>

                      {/* Large decorative element */}
                      <div className="hidden lg:block opacity-10">
                        <div className="text-[200px] font-bold leading-none">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Button
                        onClick={handleWhatsApp}
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Solicitar Promoción
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPromo}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Promoción anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextPromo}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Siguiente promoción"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
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
                    ? "w-12 bg-gradient-to-r " + getPromoGradient(index)
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir a promoción ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Promotions Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {promotions.slice(0, 3).map((promo, index) => (
            <Card
              key={index}
              className={cn(
                "group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
                "border-2 border-transparent hover:border-opacity-50"
              )}
              style={{
                borderColor: index === activePromo ? promo.color || locationData.theme.primary : 'transparent'
              }}
              onClick={() => {
                setActivePromo(index)
                setIsAutoPlaying(false)
              }}
            >
              <div 
                className="p-6 h-full bg-gradient-to-br text-white"
                style={{
                  background: `linear-gradient(135deg, ${promo.color || locationData.theme.primary}dd, ${promo.color || locationData.theme.secondary}dd)`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                    {getPromoIcon(index)}
                  </div>
                  {index === activePromo && (
                    <Badge className="bg-white/30 text-white text-xs">
                      VIENDO
                    </Badge>
                  )}
                </div>
                
                <h4 className="font-bold text-xl mb-2">
                  {promo.title}
                </h4>
                
                <p className="text-sm opacity-90 mb-4">
                  {promo.subtitle}
                </p>
                
                <div className="flex items-center gap-2 text-xs opacity-80">
                  <Clock className="w-4 h-4" />
                  <span>{promo.schedule}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Tienes preguntas sobre nuestras promociones?
          </p>
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
              Consultar por WhatsApp
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}