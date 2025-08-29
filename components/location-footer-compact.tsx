"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  MapPin, Clock, Phone, Mail, MessageCircle,
  Instagram, Facebook, Twitter, Calendar,
  Star, Utensils, Navigation
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"

interface LocationFooterCompactProps {
  locationData: LocationData
  isCurrentlyOpen: boolean
  onReservationAction: () => void
  onContactAction: () => void
}

export function LocationFooterCompact({ 
  locationData, 
  isCurrentlyOpen,
  onReservationAction,
  onContactAction 
}: LocationFooterCompactProps) {

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

  return (
    <footer 
      className="py-12 border-t"
      style={{ 
        backgroundColor: `${locationData.theme.primary}08`,
        borderTopColor: `${locationData.theme.primary}20`
      }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - Logo and Quick Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            {/* Logo & Brand */}
            <div className="flex items-center gap-4">
              {locationData.logoUrl ? (
                <Image
                  src={locationData.logoUrl}
                  alt={locationData.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                  style={{ backgroundColor: 'white', padding: '2px' }}
                />
              ) : (
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: locationData.theme.primary }}
                >
                  <Utensils className="w-6 h-6 text-white" />
                </div>
              )}
              <div>
                <h3 className="font-bold text-xl" style={{ color: locationData.theme.primary }}>
                  {locationData.name}
                </h3>
                <p className="text-sm text-gray-600">{locationData.concept}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={onReservationAction}
                className="px-4 py-2 rounded-full font-medium"
                style={{ 
                  backgroundColor: locationData.theme.primary,
                  color: 'white'
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Reservar Mesa
              </Button>
              <Button
                onClick={onContactAction}
                variant="outline"
                className="px-4 py-2 rounded-full font-medium"
                style={{ 
                  borderColor: locationData.theme.primary,
                  color: locationData.theme.primary
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="px-4 py-2 rounded-full font-medium bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 shrink-0" style={{ color: locationData.theme.primary }} />
              <div>
                <h4 className="font-semibold mb-1">Ubicación</h4>
                <p className="text-sm text-gray-600 mb-2">{locationData.contact.address}</p>
                <button
                  onClick={handleDirections}
                  className="text-sm font-medium hover:underline"
                  style={{ color: locationData.theme.accent }}
                >
                  Ver en Google Maps →
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 shrink-0" style={{ color: locationData.theme.primary }} />
              <div>
                <h4 className="font-semibold mb-1">Horario de Hoy</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-xs font-medium",
                    isCurrentlyOpen 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  )}>
                    {isCurrentlyOpen ? "ABIERTO" : "CERRADO"}
                  </span>
                  <span className="text-sm text-gray-600">{todayHours}</span>
                </div>
                <Link
                  href={`/${locationData.id}#horarios`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: locationData.theme.accent }}
                >
                  Ver horario completo →
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 shrink-0" style={{ color: locationData.theme.primary }} />
              <div>
                <h4 className="font-semibold mb-1">Contacto</h4>
                <button
                  onClick={handleCall}
                  className="text-sm text-gray-600 hover:underline block mb-1"
                >
                  {locationData.contact.phone}
                </button>
                <p className="text-sm text-gray-600">
                  {locationData.contact.email}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t" style={{ borderTopColor: `${locationData.theme.primary}20` }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Quick Links */}
              <div className="flex items-center gap-6 text-sm">
                <Link 
                  href={`/${locationData.id}/menu`} 
                  className="hover:underline"
                  style={{ color: locationData.theme.primary }}
                >
                  Menú
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-500 hover:text-gray-700"
                >
                  Privacidad
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-500 hover:text-gray-700"
                >
                  Términos
                </Link>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{locationData.socialProof.googleRating}</span>
                  <span className="text-gray-500">({locationData.socialProof.reviews}+ reseñas)</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                {locationData.socialMedia?.instagram && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </button>
                )}
                {locationData.socialMedia?.facebook && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.facebook, '_blank')}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                )}
                {locationData.socialMedia?.twitter && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.twitter, '_blank')}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Copyright */}
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} {locationData.name}. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}