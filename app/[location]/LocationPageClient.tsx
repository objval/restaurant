"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Menu, Clock, MapPin, Mail, MessageCircle, Heart, Phone, Instagram, Facebook, Twitter, Navigation, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ReservationModal } from "@/components/reservation-modal"
import { ContactModal } from "@/components/contact-modal"
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

      {/* Enhanced Promotions Section with better animations */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjFmNWY5IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2 font-semibold" style={{ backgroundColor: locationData.theme.primary, color: 'white' }}>
              ¡Ofertas Especiales!
            </Badge>
            <h2 className="text-5xl font-bold mb-6" style={{ color: locationData.theme.primary }}>
              Promociones Exclusivas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras ofertas especiales diseñadas para hacer tu experiencia aún más memorable
            </p>
          </div>

          <div className={`grid gap-6 ${
            locationData.promotions.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto' 
              : locationData.promotions.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto'
              : locationData.promotions.length === 3
              ? 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {locationData.promotions.map((promo, index) => (
              <div
                key={promo.title}
                className="relative overflow-hidden rounded-2xl group cursor-pointer hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 animate-fade-in"
                style={{ 
                  height: "220px",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${getDarkerColor(promo.color)} 0%, ${getDarkerColor(promo.color)}DD 50%, ${getDarkerColor(promo.color)}BB 100%)`,
                  }}
                />

                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-white/20 group-hover:animate-pulse" />
                <div className="absolute top-1/2 right-0 w-20 h-20 rounded-full bg-white/5 transform translate-x-10 group-hover:translate-x-8 transition-transform duration-700" />

                <div className="relative z-10 p-5 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3 group-hover:bg-white/30 transition-colors duration-300">
                      <Star className="w-3 h-3 mr-1" />
                      PROMOCIÓN
                    </div>
                    <h3 className="text-xl font-bold mb-2 tracking-wide leading-tight text-white group-hover:scale-105 transition-transform duration-300">
                      {promo.title}
                    </h3>
                    <p className="text-base font-medium mb-4 opacity-95 group-hover:opacity-100 transition-opacity duration-300">
                      {promo.subtitle}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {promo.schedule}
                    </p>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 group-hover:w-full bg-white/60"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Call to action for promotions */}
          <div className="text-center mt-12">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: locationData.theme.accent,
                color: locationData.theme.text,
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Consultar sobre promociones
            </Button>
          </div>
        </div>
      </section>

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
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 group hover:-translate-y-2 cursor-pointer animate-fade-in min-h-[500px] flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                      <h3 className="font-bold text-xl mb-2 group-hover:text-opacity-80 transition-colors line-clamp-1 flex-1">
                        {item.name}
                      </h3>
                      {/* Chef's choice badge */}
                      {index === 1 && (
                        <Badge variant="outline" className="text-xs font-semibold flex-shrink-0 whitespace-nowrap" style={{ borderColor: locationData.theme.accent, color: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}10` }}>
                          Chef&apos;s Choice
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-1">{item.description}</p>

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
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1">
                        {['Fresco', 'Orgánico', 'Local'].map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
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

      {/* Enhanced About Us Section with parallax effect */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${locationData.theme.primary.replace('#', '%23')}' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Main image with hover effects */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-700 h-96">
                <Image
                  src={locationData.images.interior || "/placeholder.svg"}
                  alt="Interior del restaurante"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating signature dish */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Image
                  src={locationData.images.signature || "/placeholder.svg"}
                  alt="Plato signature"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-1 left-1 right-1 text-center">
                
                </div>
              </div>

              {/* Floating awards badge */}
            
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-4 text-lg px-4 py-2 font-semibold" style={{ backgroundColor: locationData.theme.primary, color: 'white' }}>
                  Nuestra Historia
                </Badge>
                <h2 className="text-4xl font-bold mb-6" style={{ color: locationData.theme.primary }}>
                  UN POCO DE NOSOTROS
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{locationData.longDescription}</p>
              </div>

              {/* Enhanced info cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                    <Clock className="w-6 h-6 group-hover:animate-pulse" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">Horarios de Atención</div>
                    <div className="text-gray-600 text-sm space-y-1">
                      {locationData.hours.monday === "CERRADO" && <div>Lun: CERRADO</div>}
                      {locationData.hours.tuesday && <div>Mar: {locationData.hours.tuesday}</div>}
                      {locationData.hours.wednesday && <div>Mié: {locationData.hours.wednesday}</div>}
                      {locationData.hours.thursday && <div>Jue: {locationData.hours.thursday}</div>}
                      {locationData.hours.friday && <div>Vie: {locationData.hours.friday}</div>}
                      {locationData.hours.saturday && <div>Sáb: {locationData.hours.saturday}</div>}
                      {locationData.hours.sunday && <div>Dom: {locationData.hours.sunday}</div>}
                    </div>
                  </div>
                  {isCurrentlyOpen && (
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      Abierto ahora
                    </Badge>
                  )}
                  {!isCurrentlyOpen && (
                    <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                      Cerrado
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                    <MapPin className="w-6 h-6 group-hover:animate-bounce" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">Nuestra Ubicación</div>
                    <div className="text-gray-600">{locationData.contact.address}</div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      let mapsUrl = ''
                      switch(locationData.id) {
                        case 'capriccio':
                          mapsUrl = 'https://maps.app.goo.gl/Cjpd8gBy6kDrFHFU7'
                          break
                        case 'arbol':
                          mapsUrl = 'https://maps.app.goo.gl/7vLJMPsTbQ1sFKzP8'
                          break
                        case '1898':
                          mapsUrl = 'https://maps.app.goo.gl/Qc6ytj3fngZLx8yr9'
                          break
                        default:
                          const address = encodeURIComponent(locationData.contact.address)
                          mapsUrl = `https://maps.google.com/?q=${address}`
                      }
                      window.open(mapsUrl, '_blank')
                    }}
                    className="hover:scale-105 transition-transform duration-200 relative z-10"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Cómo llegar
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                    <Phone className="w-6 h-6 group-hover:animate-pulse" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">Contacto Directo</div>
                    <div className="text-gray-600">{locationData.contact.phone}</div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(`tel:${locationData.contact.phone}`, '_self')
                    }}
                    className="hover:scale-105 transition-transform duration-200 relative z-10"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Llamar
                  </Button>
                </div>
              </div>

              {/* Enhanced action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  size="lg"
                  className="rounded-full px-8 py-4 group"
                  style={{
                    backgroundColor: locationData.theme.primary,
                    borderColor: locationData.theme.primary,
                  }}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Conócenos Más
                </Button>
              </div>

              {/* Social media links */}
              {locationData.socialMedia && (
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3">Síguenos en redes sociales:</p>
                  <div className="flex gap-3">
                    {locationData.socialMedia.instagram && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-2 hover:scale-110 transition-transform duration-200"
                        onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                      >
                        <Instagram className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                      </Button>
                    )}
                    {locationData.socialMedia.facebook && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-2 hover:scale-110 transition-transform duration-200"
                        onClick={() => window.open(locationData.socialMedia?.facebook, '_blank')}
                      >
                        <Facebook className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                      </Button>
                    )}
                    {locationData.socialMedia.twitter && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-2 hover:scale-110 transition-transform duration-200"
                        onClick={() => window.open(locationData.socialMedia?.twitter, '_blank')}
                      >
                        <Twitter className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                      </Button>
                    )}
                  </div>
                </div>
              )}
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

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 hover:scale-110"
        aria-label="Chat por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
