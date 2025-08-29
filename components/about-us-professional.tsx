"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Clock, MapPin, Phone, Users, Navigation,
  Sparkles, Heart, Instagram, Facebook, Twitter,
  ArrowRight, Quote
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

  // Gallery images
  const galleryImages = [
    locationData.images.interior,
    locationData.images.signature,
    locationData.images.ambiance,
    ...(locationData.images.gallery || [])
  ].filter(Boolean).slice(0, 4)

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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${locationData.theme.primary}20 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, ${locationData.theme.accent}20 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            className="mb-4 text-lg px-6 py-2 font-semibold animate-fade-in"
            style={{ 
              backgroundColor: `${locationData.theme.primary}10`,
              color: locationData.theme.primary,
              border: `2px solid ${locationData.theme.primary}30`
            }}
          >
            Nuestra Historia
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" 
              style={{ color: locationData.theme.primary }}>
            CONÓCENOS
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más que un restaurante, somos una experiencia gastronómica que celebra 
            la tradición y la innovación en cada plato
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={galleryImages[activeImageIndex] || "/placeholder.svg"}
                alt="Restaurant"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Image overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium mb-2">Imagen {activeImageIndex + 1} de {galleryImages.length}</p>
                  <div className="flex gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          index === activeImageIndex 
                            ? "bg-white w-8" 
                            : "bg-white/50 hover:bg-white/75"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    "relative h-24 rounded-lg overflow-hidden transition-all duration-300",
                    index === activeImageIndex 
                      ? "scale-95 ring-2" 
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
                </button>
              ))}
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="space-y-8">
            {/* Story Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: locationData.theme.primary }}>
                {locationData.stats.yearsOpen} Años de Tradición y Sabor
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {locationData.longDescription}
              </p>
              
              {/* Quote - Use location-specific or default */}
              {(locationData.chefQuote || locationData.chefName) && (
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-l-4" 
                      style={{ borderLeftColor: locationData.theme.accent }}>
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-gray-300 rotate-180 shrink-0" />
                    <div>
                      <p className="text-gray-600 italic mb-3">
                        &ldquo;{locationData.chefQuote || "Cada plato cuenta una historia, cada sabor evoca un recuerdo. Aquí no solo servimos comida, creamos experiencias memorables."}&rdquo;
                      </p>
                      <p className="font-semibold" style={{ color: locationData.theme.primary }}>
                        — {locationData.chefName || "Chef Ejecutivo"}
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Values Grid */}
            <div className="grid gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div 
                      className="p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${locationData.theme.primary}10` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: locationData.theme.primary }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: locationData.theme.primary }}>
                Visítanos y Vive la Experiencia
              </h3>
              
              <div className="space-y-4 mb-6">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" style={{ color: locationData.theme.primary }} />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-gray-600">{locationData.contact.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 shrink-0" style={{ color: locationData.theme.primary }} />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-gray-600">{locationData.contact.phone}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 shrink-0" style={{ color: locationData.theme.primary }} />
                  <div>
                    <p className="font-semibold">Horario de Hoy</p>
                    <p className="text-gray-600">
                      {isCurrentlyOpen ? (
                        <span className="text-green-600 font-medium">Abierto Ahora</span>
                      ) : (
                        <span className="text-red-600 font-medium">Cerrado</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={onContactAction}
                  className="group"
                  style={{
                    backgroundColor: locationData.theme.accent,
                    color: 'white'
                  }}
                >
                  Contáctanos
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const address = encodeURIComponent(locationData.contact.address)
                    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
                  }}
                  className="group"
                  style={{
                    borderColor: locationData.theme.primary,
                    color: locationData.theme.primary
                  }}
                >
                  <Navigation className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                  Cómo llegar
                </Button>
              </div>
            </div>

            {/* Schedule Grid */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-lg mb-4">Horarios de Atención</h4>
              <div className="space-y-2 text-sm">
                {/* Individual days in Spanish */}
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
                    <div key={key} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-medium" style={{ 
                        color: hours === 'CERRADO' ? '#EF4444' : locationData.theme.primary 
                      }}>
                        {hours}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* Social Media */}
        {locationData.socialMedia && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Síguenos en nuestras redes sociales</p>
            <div className="flex justify-center gap-4">
              {locationData.socialMedia.instagram && (
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full p-3 hover:scale-110 transition-transform"
                  onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                >
                  <Instagram className="w-6 h-6" style={{ color: locationData.theme.primary }} />
                </Button>
              )}
              {locationData.socialMedia.facebook && (
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full p-3 hover:scale-110 transition-transform"
                  onClick={() => window.open(locationData.socialMedia?.facebook, '_blank')}
                >
                  <Facebook className="w-6 h-6" style={{ color: locationData.theme.primary }} />
                </Button>
              )}
              {locationData.socialMedia.twitter && (
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full p-3 hover:scale-110 transition-transform"
                  onClick={() => window.open(locationData.socialMedia?.twitter, '_blank')}
                >
                  <Twitter className="w-6 h-6" style={{ color: locationData.theme.primary }} />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}