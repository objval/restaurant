"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Menu, Clock, MapPin, Mail, MessageCircle, Star } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReservationModal } from "@/components/reservation-modal"
import { ContactModal } from "@/components/contact-modal"
import type { LocationData } from "@/lib/locations"

interface LocationPageClientProps {
  locationData: LocationData
}

export default function LocationPageClient({ locationData }: LocationPageClientProps) {
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const router = useRouter()

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola! Me gustaría hacer una consulta sobre ${locationData.name}`)
    const phone = locationData.contact.phone.replace(/[^0-9]/g, "")
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  const handleBackToLocations = () => {
    router.push("/")
  }

  function getDarkerColor(color: string): string {
    const colorMap: { [key: string]: string } = {
      "#2D5016": "#1A3009", // Darker green
      "#D4AF37": "#B8941F", // Darker gold
      "#F4E04D": "#D4C43A", // Darker yellow (more readable)
      "#8B4513": "#6B340F", // Darker brown
    }
    return colorMap[color] || color
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: locationData.theme.background }}>
      {/* Hero Section - Enhanced with better text visibility */}
      <section className="relative h-[85vh] overflow-hidden" style={{ pointerEvents: 'auto' }}>
        <img
          src={locationData.images.hero || "/placeholder.svg"}
          alt={locationData.name}
          className="w-full h-full object-cover"
        />

        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Navigation */}
        <button
          onClick={handleBackToLocations}
          className="absolute top-6 left-6 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-all duration-300 flex items-center gap-2 z-20 border border-white/20 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Ubicaciones
        </button>

        {/* Hero Content - Enhanced text contrast */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <div className="max-w-4xl mx-auto px-4">
            {/* Restaurant name with enhanced visibility */}
            <h1
              className="text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-tight"
              style={{
                textShadow: "0 8px 32px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
                color: locationData.theme.accent,
                WebkitTextStroke: `2px ${locationData.theme.secondary}`,
              }}
            >
              {locationData.name.split(" ")[1]}
            </h1>
            <p
              className="text-2xl md:text-3xl text-white font-light mb-12 tracking-wide"
              style={{
                textShadow: "0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              {locationData.concept}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsReservationOpen(true)}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservar
              </Button>
              <Link href={`/${locationData.id}/menu`}>
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: locationData.theme.accent,
                    color: locationData.theme.text,
                    border: `2px solid ${locationData.theme.accent}`,
                  }}
                >
                  <Menu className="w-5 h-5 mr-2" />
                  Ver Menú
                </Button>
              </Link>
              <Button
                onClick={() => setIsContactOpen(true)}
                size="lg"
                className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 border-2 border-white/50 hover:border-white/70 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Promotions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: locationData.theme.primary }}>
              Promociones Especiales
            </h2>
            <p className="text-gray-600 text-lg">Descubre nuestras ofertas exclusivas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.promotions.map((promo: any, index: number) => (
              <div
                key={promo.title}
                className="relative overflow-hidden rounded-2xl group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ height: "200px" }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br"
                  style={{
                    background: `linear-gradient(135deg, ${getDarkerColor(promo.color)} 0%, ${getDarkerColor(promo.color)}DD 50%, ${getDarkerColor(promo.color)}BB 100%)`,
                  }}
                />

                <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm" />
                <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-white/20" />

                <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      PROMOCIÓN
                    </div>
                    <h3 className="text-xl font-bold mb-2 tracking-wide leading-tight text-white">{promo.title}</h3>
                    <p className="text-base font-medium mb-3 opacity-95">{promo.subtitle}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80 mb-2">{promo.schedule}</p>
                    <div className="w-full h-1 bg-white/20 rounded-full">
                      <div
                        className="h-full rounded-full transition-all duration-1000 group-hover:w-full bg-white/60"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Now just links to menu */}
      <section className="py-20" style={{ backgroundColor: locationData.theme.background }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: locationData.theme.primary }}>
              PRODUCTOS DESTACADOS
            </h2>
            <p className="text-xl text-gray-600">Los favoritos de nuestros clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationData.menuHighlights.map((item: any, index: number) => (
              <Link key={item.id} href={`/${locationData.id}/menu`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">4.{8 + index}</span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <div
                        className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-xl shadow-lg"
                        style={{ color: locationData.theme.primary }}
                      >
                        {item.price}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-gray-800 shadow-lg">
                        Ver en Menú
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-opacity-80 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: locationData.theme.primary }}>
                        ${(Number.parseInt(item.price.replace(/[^0-9]/g, "")) / 1000).toFixed(0)}.
                        {(Number.parseInt(item.price.replace(/[^0-9]/g, "")) % 1000).toString().padStart(3, "0")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={locationData.images.interior || "/placeholder.svg"}
                alt="Interior del restaurante"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                <img
                  src={locationData.images.signature || "/placeholder.svg"}
                  alt="Plato signature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: locationData.theme.primary }}>
                UN POCO DE NOSOTROS
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{locationData.longDescription}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  <div>
                    <div className="font-semibold">Horarios de Atención</div>
                    <div className="text-gray-600 text-sm">{locationData.hours.weekdays}</div>
                    <div className="text-gray-600 text-sm">{locationData.hours.weekends}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  <div>
                    <div className="font-semibold">Nuestra Ubicación</div>
                    <div className="text-gray-600 text-sm">{locationData.contact.address}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="rounded-full px-6 py-3"
                  style={{
                    backgroundColor: locationData.theme.primary,
                    borderColor: locationData.theme.primary,
                  }}
                >
                  Conócenos Más
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-3"
                  style={{
                    borderColor: locationData.theme.primary,
                    color: locationData.theme.primary,
                  }}
                >
                  Ver Galería
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized Info Footer */}
      <section className="py-16 text-white" style={{ backgroundColor: locationData.theme.primary }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: locationData.theme.accent }}>
              ¿LISTO PARA VISITARNOS?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Reserva tu mesa, contáctanos o chatea con nosotros por WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={() => setIsReservationOpen(true)}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8" style={{ color: locationData.theme.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: locationData.theme.accent }}>
                  RESERVAR MESA
                </h3>
                <p className="text-white/80 mb-4">Asegura tu lugar en nuestro restaurante</p>
                <div className="text-sm text-white/60">
                  <div>{locationData.contact.phone}</div>
                  <div>Disponible 24/7</div>
                </div>
              </div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={() => setIsContactOpen(true)}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" style={{ color: locationData.theme.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: locationData.theme.accent }}>
                  CONTÁCTANOS
                </h3>
                <p className="text-white/80 mb-4">Envíanos un mensaje o consulta</p>
                <div className="text-sm text-white/60">
                  <div>{locationData.contact.email}</div>
                  <div>Respuesta en 24hrs</div>
                </div>
              </div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={handleWhatsApp}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8" style={{ color: locationData.theme.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: locationData.theme.accent }}>
                  WHATSAPP
                </h3>
                <p className="text-white/80 mb-4">Chatea con nosotros al instante</p>
                <div className="text-sm text-white/60">
                  <div>Chat directo</div>
                  <div>Respuesta inmediata</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{locationData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{locationData.hours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        location={locationData}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} location={locationData} />

      {/* Bottom Navigation - Fixed Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Link
          href="/"
          className="bg-gray-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-gray-800/90 transition-all duration-300 flex items-center gap-2 shadow-2xl border border-white/20 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Ubicaciones
        </Link>
      </div>
    </div>
  )
}
