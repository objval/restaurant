"use client"

import Image from "next/image"
import { 
  MessageCircle, Instagram, Facebook, Twitter, Calendar,
  Star, Utensils, Navigation
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LocationData } from "@/lib/locations"

interface LocationFooterCompactProps {
  locationData: LocationData
  isCurrentlyOpen: boolean
  onReservationAction: () => void
}

export function LocationFooterCompact({ 
  locationData, 
  isCurrentlyOpen,
  onReservationAction
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

  return (
    <footer className="py-8 sm:py-12 relative" style={{ backgroundColor: '#1e293b' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Centered Logo */}
          <div className="text-center mb-8">
            {locationData.logoUrl ? (
              <div className="relative inline-block">
                <Image
                  src={locationData.logoUrl}
                  alt={locationData.name}
                  width={locationData.id === '1898' ? 200 : 160}
                  height={locationData.id === '1898' ? 80 : 64}
                  className="w-auto h-auto max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] opacity-90"
                  style={{
                    filter: locationData.id === '1898' 
                      ? 'invert(1) drop-shadow(0 6px 12px rgba(255,255,255,0.3)) drop-shadow(0 3px 6px rgba(255,255,255,0.2))'
                      : 'drop-shadow(0 6px 12px rgba(255,255,255,0.4)) drop-shadow(0 3px 6px rgba(255,255,255,0.3)) brightness(1.3) contrast(0.8)',
                  }}
                  unoptimized
                />
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-25"
                  style={{
                    background: `radial-gradient(circle, ${locationData.theme.accent} 0%, transparent 70%)`,
                  }}
                />
              </div>
            ) : (
              <div className="inline-block">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl mx-auto"
                  style={{ backgroundColor: locationData.theme.primary }}
                >
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-black text-xl sm:text-2xl text-white mt-3">
                  {locationData.name}
                </h3>
              </div>
            )}
            <p className="text-sm text-gray-400 mt-2">{locationData.concept}</p>
          </div>

          {/* Status & Rating - Centered */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isCurrentlyOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className={`text-sm font-medium ${isCurrentlyOpen ? 'text-green-400' : 'text-red-400'}`}>
                {isCurrentlyOpen ? 'Abierto Ahora' : 'Cerrado'}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-white">{locationData.socialProof.googleRating}</span>
              <span className="text-gray-400 text-sm">({locationData.socialProof.reviews}+ reseñas)</span>
            </div>
          </div>

          {/* Quick Actions - Modern Pills */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button
              onClick={onReservationAction}
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden touch-manipulation"
              style={{ 
                backgroundColor: locationData.theme.primary,
                color: 'white'
              }}
            >
              <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Reservar Mesa
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105 group bg-green-600 hover:bg-green-700 text-white touch-manipulation"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:bounce transition-transform" />
              WhatsApp
            </Button>
            
            <Button
              onClick={handleDirections}
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105 group border-2 touch-manipulation"
              style={{ 
                borderColor: '#64748b',
                color: '#64748b',
                backgroundColor: 'white'
              }}
            >
              <Navigation className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
              Ubicación
            </Button>
          </div>

          {/* Bottom Info - Ultra Compact */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-600">
            
            {/* Left: Location Info */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>{locationData.contact.address}</span>
              <span>•</span>
              <span>{locationData.contact.phone}</span>
            </div>
            
            {/* Right: Social & Copyright */}
            <div className="flex items-center gap-4">
              {/* Social Media - Minimal */}
              <div className="flex items-center gap-3">
                {locationData.socialMedia?.instagram && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10"
                  >
                    <Instagram className="w-4 h-4" />
                  </button>
                )}
                {locationData.socialMedia?.facebook && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.facebook, '_blank')}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                )}
                {locationData.socialMedia?.twitter && (
                  <button
                    onClick={() => window.open(locationData.socialMedia?.twitter, '_blank')}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <span className="text-gray-500 text-xs">
                © {new Date().getFullYear()} {locationData.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}