"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, MessageCircle, Heart, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ReservationModal } from "@/components/reservation-modal"
import { ContactModal } from "@/components/contact-modal"
import { AboutUsProfessional } from "@/components/about-us-professional"
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
  }, [locationData])

  // Auto-cycling gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % locationData.images.gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [locationData.images.gallery.length])





  const handleBackToLocations = () => {
    router.push("/")
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

      {/* Ultra Modern Featured Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>

        <div className="container mx-auto px-4 relative z-10">
          {/* Epic Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-dashed animate-pulse" 
                 style={{ borderColor: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}15` }}>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping" style={{ backgroundColor: locationData.theme.accent }}></div>
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wider" style={{ color: locationData.theme.accent }}>
                LO MÁS POPULAR ✨
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-ping delay-300" style={{ backgroundColor: locationData.theme.accent }}></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight leading-none relative px-2">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                PRODUCTOS
              </span>
              <br />
              <span className="bg-gradient-to-r bg-clip-text text-transparent" 
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 50%, ${locationData.theme.secondary} 100%)` 
                    }}>
                DESTACADOS
              </span>
              {/* Decorative elements - responsive */}
              <div className="absolute -top-2 -right-1 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full animate-bounce" 
                   style={{ backgroundColor: locationData.theme.accent }}></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full animate-bounce delay-500" 
                   style={{ backgroundColor: locationData.theme.primary }}></div>
            </h2>
            
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed mb-4 sm:mb-6">
                🔥 Los platos más queridos por nuestros clientes
              </p>
              <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full animate-pulse" 
                   style={{ backgroundColor: locationData.theme.accent }}></div>
            </div>
          </div>

          {/* Revolutionary Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {locationData.menuHighlights.map((item, index) => (
              <Link key={item.id} href={`/${locationData.id}/menu`}>
                <div className={`group cursor-pointer animate-fade-in ${
                  index === 1 ? 'md:col-span-2 lg:col-span-1 lg:scale-105 lg:-mt-4 lg:mb-4' : ''
                }`} 
                style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Main product card with enhanced design */}
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:-rotate-1 hover:scale-[1.02] sm:group-hover:scale-105">
                    
                    {/* Floating badges */}
                    <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 flex flex-col gap-2">
                      {index === 0 && (
                        <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                          <span className="animate-bounce text-xs sm:text-sm">🔥</span>
                          <span className="hidden sm:inline">MÁS POPULAR</span>
                          <span className="sm:hidden">POPULAR</span>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold shadow-lg">
                          <span className="animate-spin text-xs sm:text-sm">⭐</span>
                          <span className="hidden sm:inline">CHEF&apos;S CHOICE</span>
                          <span className="sm:hidden">CHEF</span>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-xs font-bold shadow-lg">
                          <span className="animate-bounce text-xs sm:text-sm">💚</span>
                          <span className="hidden sm:inline">FAVORITO</span>
                          <span className="sm:hidden">FAV</span>
                        </div>
                      )}
                    </div>

                    {/* Heart button with enhanced animation */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        toast({
                          title: "❤️ ¡Añadido a favoritos!",
                          description: `${item.name} se ha guardado en tus platos favoritos`,
                        })
                      }}
                      className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 sm:hover:scale-125 shadow-lg touch-manipulation"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                    </button>

                    {/* Epic image container */}
                    <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 sm:group-hover:scale-125 sm:group-hover:rotate-2 transition-all duration-1000"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Hover overlay with glassmorphism */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      
                      {/* Price tag with epic design */}
                      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6">
                        <div className="relative">
                          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-black text-lg sm:text-2xl shadow-2xl group-hover:scale-110 sm:group-hover:scale-125 sm:group-hover:-rotate-3 transition-all duration-500 border-2 border-white/50"
                               style={{ color: locationData.theme.primary }}>
                            {item.price}
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                               style={{ backgroundColor: locationData.theme.primary }}></div>
                        </div>
                      </div>

                      {/* Floating action button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 sm:translate-y-8 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur-lg px-4 py-2 sm:px-8 sm:py-4 rounded-full font-bold text-gray-800 shadow-2xl flex items-center gap-2 sm:gap-3 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 border border-white/50">
                          <Menu className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-500" />
                          <span className="text-sm sm:text-lg">Ver en Menú</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced content section */}
                    <div className="p-4 sm:p-6 lg:p-8 relative">
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-4 sm:right-6 lg:right-8 w-8 sm:w-12 lg:w-16 h-1 rounded-full"
                           style={{ backgroundColor: locationData.theme.accent }}></div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="font-black text-lg sm:text-xl lg:text-2xl leading-tight group-hover:text-opacity-80 transition-colors line-clamp-2"
                            style={{ color: locationData.theme.primary }}>
                          {item.name}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg line-clamp-3">
                          {item.description || 'Delicioso plato preparado con ingredientes frescos de primera calidad por nuestros chefs expertos'}
                        </p>

                        {/* Epic price display */}
                        <div className="flex items-center justify-between pt-2 sm:pt-4">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight" style={{ color: locationData.theme.primary }}>
                            <span className="text-lg sm:text-xl lg:text-2xl">$</span>
                            {Math.floor(Number.parseInt(item.price.replace(/[^0-9]/g, "")) / 1000)}.
                            <span className="text-lg sm:text-xl lg:text-2xl">
                              {(Number.parseInt(item.price.replace(/[^0-9]/g, "")) % 1000).toString().padStart(3, "0")}
                            </span>
                          </div>
                          
                          {/* Rating stars */}
                          <div className="flex gap-0.5 sm:gap-1">
                            {[1,2,3,4,5].map((star) => (
                              <div key={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400 text-xs sm:text-sm lg:text-base">
                                ⭐
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                          {['🌱 Fresco', '🏆 Premium', '👨‍🍳 Artesanal'].map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 border-2 touch-manipulation"
                              style={{ 
                                backgroundColor: `${locationData.theme.accent}15`,
                                borderColor: `${locationData.theme.accent}30`,
                                color: locationData.theme.accent
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Epic Call to Action */}
          <div className="text-center px-2">
            <div className="relative max-w-4xl mx-auto">
              {/* Background card with gradient */}
              <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-200 relative overflow-hidden">
                
                {/* Floating elements - responsive */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full animate-bounce delay-300" 
                     style={{ backgroundColor: locationData.theme.accent }}></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full animate-bounce delay-700" 
                     style={{ backgroundColor: locationData.theme.primary }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r bg-clip-text text-transparent" 
                        style={{ 
                          backgroundImage: `linear-gradient(135deg, ${locationData.theme.primary} 0%, ${locationData.theme.accent} 100%)` 
                        }}>
                      ¿Te gustó lo que viste?
                    </h3>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl animate-bounce"
                         style={{ backgroundColor: `${locationData.theme.accent}20`, color: locationData.theme.accent }}>
                      😋
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium px-4">
                    Descubre nuestro menú completo con más de <strong>100+ platos únicos</strong> preparados por nuestros chefs expertos
                  </p>
                  
                  <div className="flex flex-col gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
                    <Link href={`/${locationData.id}/menu`} className="w-full">
                      <Button 
                        size="lg"
                        className="w-full px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 group relative overflow-hidden touch-manipulation min-h-[48px] sm:min-h-[52px]"
                        style={{
                          backgroundColor: locationData.theme.primary,
                          color: 'white',
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                        <Menu className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">Ver Menú Completo</span>
                      </Button>
                    </Link>
                    
                    <Button 
                      onClick={() => setIsReservationOpen(true)}
                      variant="outline"
                      size="lg"
                      className="w-full px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 group border-2 relative overflow-hidden touch-manipulation min-h-[48px] sm:min-h-[52px]"
                      style={{
                        borderColor: locationData.theme.primary,
                        color: locationData.theme.primary,
                        backgroundColor: 'white'
                      }}
                    >
                      {/* Hover fill effect */}
                      <div className="absolute inset-0 transition-transform duration-300 scale-0 group-hover:scale-100 rounded-xl"
                           style={{ backgroundColor: locationData.theme.primary }}></div>
                      <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce relative z-10 transition-colors group-hover:text-white" />
                      <span className="relative z-10 transition-colors group-hover:text-white">Reservar Mesa</span>
                    </Button>
                  </div>
                  
                  {/* Testimonial quote */}
                  <div className="mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-6 bg-gray-100 rounded-xl sm:rounded-2xl max-w-2xl mx-auto border-l-4" 
                       style={{ borderColor: locationData.theme.accent }}>
                    <p className="text-sm sm:text-base lg:text-lg italic text-gray-700 mb-2 leading-relaxed">
                      &ldquo;La mejor experiencia gastronómica de la ciudad. ¡Cada plato es una obra de arte!&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: locationData.theme.primary }}>
                      ⭐⭐⭐⭐⭐ - María González, cliente frecuente
                    </p>
                  </div>
                </div>
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
