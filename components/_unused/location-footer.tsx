"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  MapPin, Clock, Phone, Mail, MessageCircle,
  Instagram, Facebook, Twitter, Calendar,
  ArrowRight, Star, Utensils,
  Wine, Navigation
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"

interface LocationFooterProps {
  locationData: LocationData
  isCurrentlyOpen: boolean
  onReservationAction: () => void
  onContactAction: () => void
}

export function LocationFooter({ 
  locationData, 
  isCurrentlyOpen,
  onReservationAction,
  onContactAction 
}: LocationFooterProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleWhatsApp = () => {
    const phone = locationData.contact.phone.replace(/\D/g, '')
    const message = encodeURIComponent(`Hola ${locationData.name}, me gustaría hacer una consulta`)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  const handleDirections = () => {
    const address = encodeURIComponent(locationData.contact.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${locationData.contact.phone}`
  }

  // Get today's hours
  const today = new Date()
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const todayName = dayNames[today.getDay()] as keyof typeof locationData.hours
  const todayHours = locationData.hours[todayName]

  const contactCards = [
    {
      icon: Calendar,
      title: "RESERVAR MESA",
      subtitle: "Asegura tu lugar en nuestro restaurante",
      detail: locationData.contact.phone,
      subDetail: "Disponible 24/7",
      action: onReservationAction,
      color: locationData.theme.primary
    },
    {
      icon: Mail,
      title: "CONTÁCTANOS",
      subtitle: "Envíanos un mensaje o consulta",
      detail: locationData.contact.email,
      subDetail: "Respuesta en 24hrs",
      action: onContactAction,
      color: locationData.theme.accent
    },
    {
      icon: MessageCircle,
      title: "WHATSAPP",
      subtitle: "Chatea con nosotros al instante",
      detail: "Chat directo",
      subDetail: "Respuesta inmediata",
      action: handleWhatsApp,
      color: "#25D366"
    }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Section */}
      <section 
        className="py-20 relative"
        style={{ 
          background: `linear-gradient(135deg, ${locationData.theme.primary}dd, ${locationData.theme.secondary || locationData.theme.accent}dd)`
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              ¿LISTO PARA VISITARNOS?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Reserva tu mesa, contáctanos o chatea con nosotros por WhatsApp
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Card
                  key={index}
                  className={cn(
                    "relative overflow-hidden cursor-pointer transition-all duration-500",
                    "bg-white/10 backdrop-blur-md border-white/20",
                    "hover:bg-white/20 hover:scale-105 hover:shadow-2xl",
                    hoveredCard === index && "ring-2 ring-white/50"
                  )}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={card.action}
                >
                  <div className="p-8 text-center text-white">
                    <div 
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:rotate-12"
                      style={{ 
                        backgroundColor: hoveredCard === index ? `${card.color}30` : 'rgba(255,255,255,0.2)'
                      }}
                    >
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-yellow-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-white/90 mb-4">
                      {card.subtitle}
                    </p>
                    
                    <div className="space-y-1">
                      <p className="font-semibold text-lg">{card.detail}</p>
                      <p className="text-sm text-white/70">{card.subDetail}</p>
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-white/70">
                      <span className="text-sm">Click para {card.title.toLowerCase()}</span>
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Location & Hours Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-white">
            {/* Location Info */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <MapPin className="w-12 h-12 text-yellow-300 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                <p className="text-white/90">{locationData.contact.address}</p>
                <Button
                  variant="link"
                  className="text-yellow-300 hover:text-yellow-200 p-0 h-auto mt-2"
                  onClick={handleDirections}
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Ver en Google Maps
                </Button>
              </div>
            </div>

            {/* Hours Info */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <Clock className="w-12 h-12 text-yellow-300 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1">Horario de Hoy</h4>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-sm font-semibold",
                    isCurrentlyOpen 
                      ? "bg-green-500/30 text-green-300" 
                      : "bg-red-500/30 text-red-300"
                  )}>
                    {isCurrentlyOpen ? "ABIERTO" : "CERRADO"}
                  </span>
                  <span className="text-white/90">{todayHours}</span>
                </div>
                <Link
                  href={`/${locationData.id}#horarios`}
                  className="text-yellow-300 hover:text-yellow-200 text-sm mt-2 inline-block"
                >
                  Ver horario completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div 
        className="py-8 relative"
        style={{ backgroundColor: locationData.theme.primary }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Brand */}
            <div className="flex items-center gap-4">
              {locationData.logoUrl ? (
                <Image
                  src={locationData.logoUrl}
                  alt={locationData.name}
                  width={50}
                  height={50}
                  className="rounded-full bg-white p-1"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="text-white">
                <h3 className="font-bold text-lg">{locationData.name}</h3>
                <p className="text-white/70 text-sm">{locationData.concept}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <a 
                href={locationData.menuLink || `/${locationData.id}/menu`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Wine className="w-4 h-4" />
                Menú
              </a>
              <button onClick={onReservationAction} className="hover:text-white transition-colors flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Reservar
              </button>
              <button onClick={handleCall} className="hover:text-white transition-colors flex items-center gap-1">
                <Phone className="w-4 h-4" />
                Llamar
              </button>
            </div>

            {/* Social Media */}
            {locationData.socialMedia && (
              <div className="flex items-center gap-4">
                {locationData.socialMedia.instagram && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                )}
                {locationData.socialMedia.facebook && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.facebook, '_blank')}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                )}
                {locationData.socialMedia.twitter && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.twitter, '_blank')}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </button>
                )}
              </div>
            )}
          </div>

          <Separator className="my-6 bg-white/20" />

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© {new Date().getFullYear()} {locationData.name}. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white/80 transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:text-white/80 transition-colors">
                Términos
              </Link>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>{locationData.socialProof.googleRating}</span>
                <span className="text-white/40">({locationData.socialProof.reviews}+ reseñas)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}