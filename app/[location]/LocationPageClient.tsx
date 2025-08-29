"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Menu, Clock, MapPin, MessageCircle, Heart, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ReservationModal } from "@/components/reservation-modal"
import { ContactModal } from "@/components/contact-modal"
import { AboutUsProfessional } from "@/components/about-us-professional"
import { InstagramFeed } from "@/components/instagram-feed"
import { FloatingActions } from "@/components/floating-actions"
import { PromotionsSleek } from "@/components/promotions-sleek"
import { LocationFooterCompact } from "@/components/location-footer-compact"
import { useToast } from "@/hooks/use-toast"
import type { LocationData } from "@/lib/locations"

interface LocationPageClientProps {
  locationData: LocationData
}

export default function LocationPageClient({ locationData }: LocationPageClientProps) {
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(false)
  const router = useRouter()
  const { toast } = useToast()


  // Check if location is currently open
  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      // Use Chilean timezone
      const chileTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }))
      const currentDay = chileTime.getDay()
      const currentHour = chileTime.getHours()
      const currentMinute = chileTime.getMinutes()
      const currentTime = currentHour * 60 + currentMinute

      console.log(`[${locationData.name}] Checking if open:`)
      console.log(`  - Chile time: ${chileTime.toLocaleString('es-CL')}`)
      console.log(`  - Current day index: ${currentDay}`)
      console.log(`  - Current time (minutes): ${currentTime} (${Math.floor(currentTime/60)}:${String(currentTime%60).padStart(2,'0')})`)

      const dayMap: { [key: number]: keyof typeof locationData.hours } = {
        0: 'sunday',
        1: 'monday',
        2: 'tuesday',
        3: 'wednesday',
        4: 'thursday',
        5: 'friday',
        6: 'saturday'
      }

      const todayKey = dayMap[currentDay]
      const todayHours = locationData.hours[todayKey]

      console.log(`  - Today (${todayKey}): ${todayHours || 'CERRADO'}`)

      if (!todayHours || todayHours === 'CERRADO') {
        console.log(`  - Result: CLOSED (no hours or CERRADO)`)
        setIsCurrentlyOpen(false)
        return
      }

      // Parse hours like "11:00 - 03:00" (may cross midnight)
      const [openTime, closeTime] = todayHours.split(' - ').map(time => {
        const [hours, minutes] = time.split(':').map(Number)
        return hours * 60 + minutes
      })

      console.log(`  - Open time: ${Math.floor(openTime/60)}:${String(openTime%60).padStart(2,'0')} (${openTime} min)`)
      console.log(`  - Close time: ${Math.floor(closeTime/60)}:${String(closeTime%60).padStart(2,'0')} (${closeTime} min)`)

      let isOpen = false
      let adjustedCloseTime = closeTime
      let adjustedCurrentTime = currentTime
      
      // Handle times after midnight (e.g., closes at 03:00)
      if (closeTime < openTime) {
        adjustedCloseTime = closeTime + 24 * 60
        console.log(`  - Crosses midnight: adjusted close time to ${adjustedCloseTime} min`)
      }
      
      // Adjust current time if we're in the early morning hours
      if (currentHour < 4) { // After midnight
        adjustedCurrentTime = currentTime + 24 * 60
        console.log(`  - After midnight: adjusted current time to ${adjustedCurrentTime} min`)
      }
      
      isOpen = adjustedCurrentTime >= openTime && adjustedCurrentTime <= adjustedCloseTime
      console.log(`  - Checking if ${adjustedCurrentTime} >= ${openTime} AND ${adjustedCurrentTime} <= ${adjustedCloseTime}`)

      console.log(`  - Result: ${isOpen ? 'OPEN' : 'CLOSED'}`)
      setIsCurrentlyOpen(isOpen)
    }

    checkIfOpen()
    // Check every minute
    const interval = setInterval(checkIfOpen, 60000)
    return () => clearInterval(interval)
  }, [locationData.hours, locationData.name])

  // Auto-cycling gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % locationData.images.gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [locationData.images.gallery.length])


  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola! Me gustaría hacer una consulta sobre ${locationData.name}`)
    const phone = locationData.contact.phone.replace(/[^0-9]/g, "")
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }



  const handleBackToLocations = () => {
    router.push("/")
  }

  const isOpen = (hours: LocationData['hours']) => {
    // Get Chilean time
    const now = new Date()
    const chileTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }))
    const day = chileTime.getDay()
    const currentHours = chileTime.getHours()
    const currentMinutes = chileTime.getMinutes()
    const currentTimeInMinutes = currentHours * 60 + currentMinutes
    
    const dayMap: { [key: number]: keyof LocationData['hours'] } = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday'
    }
    
    const todaySchedule = hours[dayMap[day] as keyof LocationData['hours']]
    if (!todaySchedule || todaySchedule === 'CERRADO') return false
    
    // Parse time ranges like "11:00 - 22:30" or "11:00 - 03:00"
    const timeMatch = todaySchedule.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/)
    if (!timeMatch) return false
    
    const openHour = parseInt(timeMatch[1])
    const openMin = parseInt(timeMatch[2])
    const closeHour = parseInt(timeMatch[3])
    const closeMin = parseInt(timeMatch[4])
    
    const openTime = openHour * 60 + openMin
    let closeTime = closeHour * 60 + closeMin
    
    // Handle times after midnight (e.g., closes at 03:00)
    if (closeTime < openTime) {
      closeTime += 24 * 60
    }
    
    // Adjust current time if we're in the early morning hours
    let adjustedCurrentTime = currentTimeInMinutes
    if (currentHours < 4) { // After midnight
      adjustedCurrentTime += 24 * 60
    }
    
    return adjustedCurrentTime >= openTime && adjustedCurrentTime <= closeTime
  }



  return (
    <div className="min-h-screen" style={{ backgroundColor: locationData.theme.background }}>
      {/* Hero Section - Enhanced with interactive elements */}
      <section className="relative min-h-[600px] h-[85vh] max-h-[900px] overflow-hidden flex flex-col" style={{ pointerEvents: 'auto' }}>
        {/* Dynamic Background Gallery */}
        <div className="absolute inset-0">
          {locationData.images.gallery.map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${locationData.name} ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Professional Navigation Header */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex justify-between items-center p-6">
            <button
              onClick={handleBackToLocations}
              className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
              style={{ pointerEvents: 'auto' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver</span>
            </button>
            
            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Open/Closed indicator in header */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                isCurrentlyOpen
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isCurrentlyOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                }`} />
                <span>{isCurrentlyOpen ? 'Abierto' : 'Cerrado'}</span>
              </div>
              
              {/* Quick actions */}
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Contacto"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content with enhanced animations */}
        <div className="relative flex-1 flex items-center justify-center text-white text-center z-10 py-20 px-4">
          <div className="max-w-5xl mx-auto w-full space-y-6 sm:space-y-8">
            {/* Restaurant logo - larger and more prominent */}
            <div className="flex justify-center animate-fade-in transform hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>
              {locationData.logoUrl ? (
                <div className="relative">
                  <Image
                    src={locationData.logoUrl}
                    alt={locationData.name}
                    width={locationData.id === '1898' ? 500 : 400}
                    height={locationData.id === '1898' ? 200 : 160}
                    className="drop-shadow-2xl w-auto h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
                    style={{
                      filter: locationData.id === '1898' 
                        ? 'invert(1) drop-shadow(0 10px 40px rgba(255,255,255,0.3)) drop-shadow(0 6px 20px rgba(255,255,255,0.2)) drop-shadow(0 3px 10px rgba(255,255,255,0.1))'
                        : 'drop-shadow(0 10px 40px rgba(0,0,0,0.95)) drop-shadow(0 6px 20px rgba(0,0,0,0.85)) drop-shadow(0 3px 10px rgba(0,0,0,0.7))',
                    }}
                    unoptimized
                  />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 -z-10 blur-3xl opacity-30"
                    style={{
                      background: `radial-gradient(circle, ${locationData.theme.accent} 0%, transparent 70%)`,
                    }}
                  />
                </div>
              ) : (
                // Fallback to text for locations without logos
                <h1
                  className="text-5xl sm:text-7xl md:text-9xl font-bold leading-tight tracking-tight px-4"
                  style={{
                    textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 6px 20px rgba(0,0,0,0.85), 0 3px 10px rgba(0,0,0,0.7)",
                    color: locationData.theme.accent,
                    WebkitTextStroke: `2px ${locationData.theme.secondary}`,
                  }}
                >
                  {locationData.name}
                </h1>
              )}
            </div>


            {/* Streamlined CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
              <Link href={`/${locationData.id}/menu`} className="w-full sm:w-[200px]">
                <Button
                  size="lg"
                  className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 group w-full"
                >
                  <Menu className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Ver Menú
                </Button>
              </Link>
              <Button
                onClick={() => setIsReservationOpen(true)}
                size="lg"
                className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 group border border-white/20 w-full sm:w-[200px]"
              >
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:animate-bounce" />
                Reservar Mesa
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {locationData.images.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Sleek Promotions Section */}
      <PromotionsSleek 
        locationData={locationData} 
        onContactAction={() => setIsContactOpen(true)}
      />

      {/* Enhanced Featured Products Section */}
      <section className="py-20 relative" style={{ backgroundColor: locationData.theme.background }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2 font-semibold" style={{ backgroundColor: locationData.theme.accent, color: locationData.theme.text }}>
              Lo más popular
            </Badge>
            <h2 className="text-5xl font-bold mb-6 tracking-wide" style={{ color: locationData.theme.primary }}>
              PRODUCTOS DESTACADOS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los platos más queridos por nuestros clientes, preparados con ingredientes frescos y mucho amor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationData.menuHighlights.map((item, index) => (
              <Link key={item.id} href={`/${locationData.id}/menu`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 group hover:-translate-y-2 cursor-pointer animate-fade-in h-full flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />


                    {/* Enhanced price badge */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ color: locationData.theme.primary }}
                      >
                        {item.price}
                      </div>
                    </div>

                    {/* Popular badge for first item */}
                    {index === 2 && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        🔥 MÁS POPULAR
                      </div>
                    )}

                    {/* Hover overlay with improved animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Enhanced hover content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-gray-800 shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                        <Menu className="w-5 h-5" />
                        Ver en Menú Completo
                      </div>
                    </div>

                    {/* Heart like button */}
                    <button className="absolute top-4 left-4 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-bold text-xl group-hover:text-opacity-80 transition-colors line-clamp-2 min-h-[3.5rem] flex-1">
                        {item.name}
                      </h3>
                      {/* Chef's choice badge */}
                      {index === 1 && (
                        <Badge variant="outline" className="text-xs font-semibold flex-shrink-0 whitespace-nowrap" style={{ borderColor: locationData.theme.accent, color: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}10` }}>
                          Chef&apos;s Choice
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 min-h-[4.5rem] flex-grow">{item.description || 'Delicioso plato preparado con ingredientes frescos de primera calidad'}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-2xl font-bold" style={{ color: locationData.theme.primary }}>
                        ${Math.floor(Number.parseInt(item.price.replace(/[^0-9]/g, "")) / 1000)}.
                        {(Number.parseInt(item.price.replace(/[^0-9]/g, "")) % 1000).toString().padStart(3, "0")}
                      </div>
                      
                      {/* Quick add to favorites */}
                      <button 
                        onClick={(e) => {
                          e.preventDefault()
                          toast({
                            title: "❤️ ¡Añadido a favoritos!",
                            description: `${item.name} se ha guardado en tus platos favoritos`,
                          })
                        }}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group/btn"
                      >
                        <Heart className="w-5 h-5 text-gray-400 group-hover/btn:text-red-500 transition-colors duration-200" />
                      </button>
                    </div>

                    {/* Ingredients preview */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1">
                        {['Fresco', 'Orgánico', 'Local'].map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Enhanced call to action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4" style={{ color: locationData.theme.primary }}>
                ¿Te gustó lo que viste?
              </h3>
              <p className="text-gray-600 mb-6">
                Descubre nuestro menú completo con platos únicos preparados por nuestros chefs expertos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locationData.id}/menu`}>
                  <Button 
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105 group"
                    style={{
                      backgroundColor: locationData.theme.primary,
                      color: 'white',
                    }}
                  >
                    <Menu className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Ver Menú Completo
                  </Button>
                </Link>
                <Button 
                  onClick={() => setIsReservationOpen(true)}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    borderColor: locationData.theme.primary,
                    color: locationData.theme.primary,
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Reservar Mesa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Us Section */}
      <AboutUsProfessional 
        locationData={locationData} 
        isCurrentlyOpen={isCurrentlyOpen}
        onContactAction={() => setIsContactOpen(true)}
      />

      {/* Instagram Feed */}
      <InstagramFeed locationData={locationData} />

      {/* Floating Action Buttons */}
      <FloatingActions 
        locationData={locationData} 
        onReservationClick={() => setIsReservationOpen(true)}
      />




      {/* Compact Location Footer */}
      <LocationFooterCompact 
        locationData={locationData}
        isCurrentlyOpen={isCurrentlyOpen}
        onReservationAction={() => setIsReservationOpen(true)}
        onContactAction={() => setIsContactOpen(true)}
      />

      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        location={locationData}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} location={locationData} />
    </div>
  )
}
