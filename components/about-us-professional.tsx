"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Clock, MapPin, Phone, Users, Navigation,
  Sparkles, Heart, Instagram, Facebook, Twitter,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"

interface AboutUsProfessionalProps {
  locationData: LocationData
  isCurrentlyOpen: boolean
  onContactAction?: () => void
}

export function AboutUsProfessional({ 
  locationData, 
  isCurrentlyOpen,
  onContactAction 
}: AboutUsProfessionalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Gallery images - handle different amounts per location and avoid duplicates
  const galleryImages = (() => {
    const allImages = [
      locationData.images.interior,
      locationData.images.signature,
      locationData.images.ambiance,
      ...(locationData.images.gallery || [])
    ].filter(Boolean)

    // Remove duplicates by creating a Set and converting back to array
    const uniqueImages = Array.from(new Set(allImages))

    // Return appropriate number based on available images
    return uniqueImages.length > 6 ? uniqueImages.slice(0, 8) : uniqueImages
  })()

  // Values/Features - Use location-specific values or defaults
  const values = locationData.values && locationData.values.length > 0 
    ? locationData.values.map(value => {
        // Map icon names to Lucide icons
        const iconMap: { [key: string]: any } = {
          'Heart': Heart,
          'Users': Users,
          'Sparkles': Sparkles
        }
        return {
          ...value,
          icon: iconMap[value.icon] || Heart
        }
      })
    : [
        {
          icon: Heart,
          title: "Pasión Culinaria",
          description: "Cada plato es una obra de arte creada con amor y dedicación"
        },
        {
          icon: Users,
          title: "Ambiente Familiar",
          description: "Un espacio acogedor donde cada cliente es parte de nuestra familia"
        },
        {
          icon: Sparkles,
          title: "Ingredientes Premium",
          description: "Seleccionamos los mejores ingredientes locales y de temporada"
        }
      ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>

      <div className="container mx-auto px-4 relative z-10">
        {/* Epic Section Header - matching otros sections */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-dashed animate-pulse" 
               style={{ borderColor: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}15` }}>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping" style={{ backgroundColor: locationData.theme.accent }}></div>
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wider" style={{ color: locationData.theme.accent }}>
              NUESTRA HISTORIA ✨
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping delay-300" style={{ backgroundColor: locationData.theme.accent }}></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight leading-none relative px-2">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              CONÓCE
            </span>
            <span className="bg-gradient-to-r bg-clip-text text-transparent" 
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 50%, ${locationData.theme.secondary} 100%)` 
                  }}>
              NOS
            </span>
            {/* Decorative elements - matching otros sections */}
            <div className="absolute -top-2 -right-1 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full animate-bounce" 
                 style={{ backgroundColor: locationData.theme.accent }}></div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full animate-bounce delay-500" 
                 style={{ backgroundColor: locationData.theme.primary }}></div>
          </h2>
          
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-4 sm:mb-6">
              Una experiencia gastronómica única
            </p>
            <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full animate-pulse" 
                 style={{ backgroundColor: locationData.theme.accent }}></div>
          </div>
        </div>

        {/* Modern Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Left: Enhanced Image Gallery */}
          <div className="relative group">
            {/* Main Image with modern styling */}
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
              <Image
                src={galleryImages[activeImageIndex] || "/placeholder.svg"}
                alt="Restaurant"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Enhanced image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold mb-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {activeImageIndex + 1} de {galleryImages.length}
                    </p>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-bounce"
                         style={{ color: locationData.theme.accent }}>
                      📸
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300 touch-manipulation",
                          index === activeImageIndex 
                            ? "w-8 bg-white" 
                            : "w-2 bg-white/50 hover:bg-white/75"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    "relative h-16 sm:h-20 lg:h-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 touch-manipulation",
                    index === activeImageIndex 
                      ? "scale-95 ring-2 shadow-lg" 
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  )}
                  style={{ 
                    ...(index === activeImageIndex && {
                      boxShadow: `0 0 0 2px ${locationData.theme.accent}`
                    })
                  }}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Active indicator */}
                  {index === activeImageIndex && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full animate-pulse" 
                           style={{ backgroundColor: locationData.theme.accent }}></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Modern Story Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Story Text with modern card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] border border-white/50">
              <div className="relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-4 w-12 sm:w-16 h-1 rounded-full"
                     style={{ backgroundColor: locationData.theme.accent }}></div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 leading-tight" style={{ color: locationData.theme.primary }}>
                   Tradición y Sabor
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  {locationData.longDescription}
                </p>
                
                {/* Modern quote card */}
                {(locationData.chefQuote || locationData.chefName) && (
                  <div className="p-4 sm:p-6 bg-gray-100 rounded-xl sm:rounded-2xl border-l-4 relative overflow-hidden" 
                        style={{ borderLeftColor: locationData.theme.accent }}>
                    {/* Quote decoration */}
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: `${locationData.theme.accent}20`, color: locationData.theme.accent }}>
                      💬
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 italic mb-3 leading-relaxed">
                      &ldquo;{locationData.chefQuote || "Cada plato cuenta una historia, cada sabor evoca un recuerdo. Aquí no solo servimos comida, creamos experiencias memorables."}&rdquo;
                    </p>
                    <p className="text-sm font-bold" style={{ color: locationData.theme.primary }}>
                      — {locationData.chefName || "Chef Ejecutivo"}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modern Values Grid */}
            <div className="grid gap-3 sm:gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div 
                    key={index}
                    className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-white/50 hover:shadow-xl transition-all duration-500 group hover:scale-[1.02] relative overflow-hidden"
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl sm:rounded-2xl"
                         style={{ backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary}, ${locationData.theme.accent})` }}></div>
                    
                    <div 
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10"
                      style={{ backgroundColor: `${locationData.theme.primary}15`, border: `2px solid ${locationData.theme.primary}30` }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: locationData.theme.primary }} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-black text-base sm:text-lg mb-1 sm:mb-2" style={{ color: locationData.theme.primary }}>
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Modern Contact & Info Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-bounce delay-300" 
               style={{ backgroundColor: `${locationData.theme.accent}30` }}></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-bounce delay-700" 
               style={{ backgroundColor: `${locationData.theme.primary}30` }}></div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 leading-tight bg-gradient-to-r bg-clip-text text-transparent" 
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 100%)` 
                  }}>
                Visítanos y Vive la Experiencia
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group">
                  <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                       style={{ backgroundColor: `${locationData.theme.primary}15` }}>
                    <MapPin className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg" style={{ color: locationData.theme.primary }}>Ubicación</p>
                    <p className="text-gray-600 text-sm sm:text-base">{locationData.contact.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group">
                  <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                       style={{ backgroundColor: `${locationData.theme.primary}15` }}>
                    <Phone className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg" style={{ color: locationData.theme.primary }}>Teléfono</p>
                    <p className="text-gray-600 text-sm sm:text-base">{locationData.contact.phone}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group">
                  <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                       style={{ backgroundColor: `${locationData.theme.primary}15` }}>
                    <Clock className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg" style={{ color: locationData.theme.primary }}>Estado Actual</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${isCurrentlyOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                      <p className={`font-medium text-sm sm:text-base ${isCurrentlyOpen ? 'text-green-600' : 'text-red-600'}`}>
                        {isCurrentlyOpen ? 'Abierto Ahora' : 'Cerrado'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern CTA Buttons */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <Button
                  size="lg"
                  onClick={onContactAction}
                  className="w-full px-6 py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden touch-manipulation min-h-[48px]"
                  style={{
                    backgroundColor: locationData.theme.accent,
                    color: 'white'
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10">Contáctanos</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const address = encodeURIComponent(locationData.contact.address)
                    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
                  }}
                  className="w-full px-6 py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02] group border-2 relative overflow-hidden touch-manipulation min-h-[48px]"
                  style={{
                    borderColor: locationData.theme.primary,
                    color: locationData.theme.primary,
                    backgroundColor: 'white'
                  }}
                >
                  {/* Hover fill effect */}
                  <div className="absolute inset-0 transition-transform duration-300 scale-0 group-hover:scale-100 rounded-xl"
                       style={{ backgroundColor: locationData.theme.primary }}></div>
                  <Navigation className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform relative z-10 group-hover:text-white" />
                  <span className="relative z-10 group-hover:text-white">Cómo llegar</span>
                </Button>
              </div>
            </div>

            {/* Enhanced Schedule Grid */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-6 w-12 sm:w-16 h-1 rounded-full"
                   style={{ backgroundColor: locationData.theme.accent }}></div>
              
              <h4 className="font-black text-lg sm:text-xl lg:text-2xl mb-6" style={{ color: locationData.theme.primary }}>
                Horarios de Atención
              </h4>
              <div className="space-y-3 text-sm sm:text-base">
                {[
                  { key: 'sunday', label: 'Domingo' },
                  { key: 'monday', label: 'Lunes' },
                  { key: 'tuesday', label: 'Martes' },
                  { key: 'wednesday', label: 'Miércoles' },
                  { key: 'thursday', label: 'Jueves' },
                  { key: 'friday', label: 'Viernes' },
                  { key: 'saturday', label: 'Sábado' }
                ].map(({ key, label }) => {
                  const hours = locationData.hours[key as keyof typeof locationData.hours]
                  if (!hours) return null
                  
                  return (
                    <div key={key} className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/60 hover:bg-white transition-all duration-300 group">
                      <span className="text-gray-700 font-medium">{label}</span>
                      <span className="font-bold px-3 py-1 rounded-full text-sm" style={{ 
                        color: hours === 'CERRADO' ? '#EF4444' : 'white',
                        backgroundColor: hours === 'CERRADO' ? '#FEE2E2' : locationData.theme.primary
                      }}>
                        {hours}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Modern Social Media */}
        {locationData.socialMedia && (
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-bounce delay-500" 
                   style={{ backgroundColor: `${locationData.theme.accent}30` }}></div>
              
              <h4 className="font-black text-lg sm:text-xl mb-6" style={{ color: locationData.theme.primary }}>
                Síguenos en Redes Sociales
              </h4>
              <div className="flex justify-center gap-3 sm:gap-4">
                {locationData.socialMedia.instagram && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-2xl p-4 hover:scale-110 transition-all duration-300 group border-2 touch-manipulation shadow-lg hover:shadow-xl"
                    style={{
                      borderColor: locationData.theme.primary,
                      color: locationData.theme.primary
                    }}
                    onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                )}
                {locationData.socialMedia.facebook && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-2xl p-4 hover:scale-110 transition-all duration-300 group border-2 touch-manipulation shadow-lg hover:shadow-xl"
                    style={{
                      borderColor: locationData.theme.primary,
                      color: locationData.theme.primary
                    }}
                    onClick={() => window.open(locationData.socialMedia?.facebook, '_blank')}
                  >
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                )}
                {locationData.socialMedia.twitter && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-2xl p-4 hover:scale-110 transition-all duration-300 group border-2 touch-manipulation shadow-lg hover:shadow-xl"
                    style={{
                      borderColor: locationData.theme.primary,
                      color: locationData.theme.primary
                    }}
                    onClick={() => window.open(locationData.socialMedia?.twitter, '_blank')}
                  >
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}