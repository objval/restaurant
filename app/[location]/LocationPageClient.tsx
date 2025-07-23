"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Menu, Clock, MapPin, Mail, MessageCircle, Star, Heart, Share2, Camera, Award, Users, ChefHat, Utensils, Phone, Instagram, Facebook, Twitter, Navigation, Wifi, Music, Sparkles, Zap, Globe, Palette, Coffee, Wine, PartyPopper, Headphones, Volume2, X } from "lucide-react"
import Link from "next/link"
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
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(1247)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [showAmbientControls, setShowAmbientControls] = useState(false)
  const [showVirtualTour, setShowVirtualTour] = useState(false)
  const [showAIRecommendations, setShowAIRecommendations] = useState(false)
  const [userPreferences, setUserPreferences] = useState({
    spiceLevel: 'medio',
    dietaryRestrictions: [],
    budget: '$$',
    occasion: 'casual'
  })
  const [showMoodLighting, setShowMoodLighting] = useState(false)
  const [currentMood, setCurrentMood] = useState('cozy')
  const [showInteractiveMenu, setShowInteractiveMenu] = useState(false)
  const [showSocialFeed, setShowSocialFeed] = useState(false)
  const [showOrderTracking, setShowOrderTracking] = useState(false)
  const [orderStatus, setOrderStatus] = useState('idle')
  const [showLiveStats, setShowLiveStats] = useState(false)
  const [realTimeData, setRealTimeData] = useState({
    currentDiners: 38,
    waitTime: 12,
    popularDish: 'Asado Familiar',
    chefRecommendation: 'Risotto de Trufa'
  })
  const router = useRouter()
  const { toast } = useToast()

  // Mock playlist for ambient music
  const playlist = [
    { name: 'Ambient Jazz', duration: '3:24' },
    { name: 'Cozy Cafe', duration: '4:12' },
    { name: 'Evening Lounge', duration: '3:58' },
    { name: 'Dinner Romance', duration: '4:45' }
  ]

  // Mock AI recommendations
  const aiRecommendations = [
    {
      dish: 'Asado Familiar',
      reason: 'Perfecto para tu grupo de 4 personas',
      confidence: 95,
      price: '$45.990',
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=300&h=200&fit=crop'
    },
    {
      dish: 'Risotto de Trufa',
      reason: 'Basado en tus preferencias gourmet',
      confidence: 88,
      price: '$26.990',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop'
    }
  ]

  // Mock social feed
  const socialFeed = [
    {
      user: 'María José',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&auto=format',
      content: '¡Increíble experiencia! El asado familiar es espectacular 🔥',
      time: '2 min',
      likes: 24,
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=150&h=150&fit=crop'
    },
    {
      user: 'Carlos M.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&auto=format',
      content: 'El ambiente es perfecto para una cena familiar 👨‍👩‍👧‍👦',
      time: '5 min',
      likes: 18,
      image: null
    }
  ]

  // Auto-cycling gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % locationData.images.gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [locationData.images.gallery.length])

  // Real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        currentDiners: Math.floor(Math.random() * 20) + 30,
        waitTime: Math.floor(Math.random() * 15) + 5,
      }))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  // Music player controls
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSongIndex((prev) => (prev + 1) % playlist.length)
      }, 4000) // Change song every 4 seconds for demo
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying)
    toast({
      title: isPlaying ? "🎵 Música pausada" : "🎵 Reproduciendo ambiente",
      description: isPlaying ? "Música de ambiente pausada" : `Reproduciendo: ${playlist[currentSongIndex].name}`,
    })
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    toast({
      title: "🔊 Volumen ajustado",
      description: `Volumen: ${Math.round(newVolume * 100)}%`,
    })
  }

  const handleMoodLightingChange = (mood: string) => {
    setCurrentMood(mood)
    toast({
      title: "✨ Iluminación cambiada",
      description: `Ambiente: ${mood}`,
    })
  }

  const handleAIRecommendation = (dish: any) => {
    toast({
      title: "🤖 Recomendación de IA",
      description: `${dish.dish} - ${dish.reason}`,
    })
  }

  const handleOrderTracking = () => {
    setOrderStatus('preparing')
    toast({
      title: "📋 Pedido registrado",
      description: "Tu pedido está siendo preparado. Tiempo estimado: 25 min",
    })
  }

  const handleVirtualTour = () => {
    setShowVirtualTour(true)
    toast({
      title: "🚀 Tour virtual iniciado",
      description: "Explora nuestro restaurante en 360°",
    })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola! Me gustaría hacer una consulta sobre ${locationData.name}`)
    const phone = locationData.contact.phone.replace(/[^0-9]/g, "")
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${locationData.name} - ${locationData.concept}`,
          text: locationData.description,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        toast({
          title: "¡Enlace copiado!",
          description: "El enlace se ha copiado al portapapeles",
        })
      }
    } catch (error) {
      console.log('Error sharing:', error)
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
    toast({
      title: isLiked ? "💔 Quitado de favoritos" : "❤️ ¡Añadido a favoritos!",
      description: isLiked ? "Has quitado este restaurante de tus favoritos" : "¡Gracias por añadir este restaurante a tus favoritos!",
    })
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
      {/* Hero Section - Enhanced with interactive elements */}
      <section className="relative h-[85vh] overflow-hidden" style={{ pointerEvents: 'auto' }}>
        {/* Dynamic Background Gallery */}
        <div className="absolute inset-0">
          {locationData.images.gallery.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${locationData.name} ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Enhanced overlay with breathing effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 bg-black/40" />

        {/* Enhanced Navigation Bar */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
          <button
            onClick={handleBackToLocations}
            className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-all duration-300 flex items-center gap-2 border border-white/20 cursor-pointer hover:scale-105"
            style={{ pointerEvents: 'auto' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Ubicaciones
          </button>
          
          {/* Interactive action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleLike}
              className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 ${
                isLiked ? 'bg-red-500/80 text-white' : 'bg-black/30 text-white hover:bg-black/40'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/40 transition-all duration-300 border border-white/20 hover:scale-110"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowGallery(true)}
              className="p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/40 transition-all duration-300 border border-white/20 hover:scale-110"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Content with enhanced animations */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            {/* Restaurant name with enhanced visibility */}
            <div className="space-y-4">
              <h1
                className="text-6xl md:text-8xl font-bold leading-tight tracking-tight animate-fade-in"
                style={{
                  textShadow: "0 8px 32px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
                  color: locationData.theme.accent,
                  WebkitTextStroke: `2px ${locationData.theme.secondary}`,
                  animationDelay: '0.2s',
                  // Special styling for different locations
                  ...(locationData.id === '1898' && {
                    fontSize: '8rem',
                    fontWeight: '900',
                    letterSpacing: '0.05em',
                    transform: 'scale(1.1)',
                  }),
                }}
              >
                {locationData.name.includes(" ") ? locationData.name.split(" ")[1] || locationData.name : locationData.name}
              </h1>
              <p
                className="text-2xl md:text-3xl text-white font-light tracking-wide animate-fade-in"
                style={{
                  textShadow: "0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
                  animationDelay: '0.4s'
                }}
              >
                {locationData.concept}
              </p>
            </div>

            {/* Social proof and ratings */}
            <div className="flex justify-center items-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-lg">{locationData.socialProof.rating}</span>
                <span className="text-sm opacity-80">({locationData.socialProof.reviews} reseñas)</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                <span className="font-bold text-lg">{likeCount.toLocaleString()}</span>
                <span className="text-sm opacity-80">likes</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons with better animations */}
            <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => setIsReservationOpen(true)}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Reservar Mesa
              </Button>
              <Link href={`/${locationData.id}/menu`}>
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    backgroundColor: locationData.theme.accent,
                    color: locationData.theme.text,
                    border: `2px solid ${locationData.theme.accent}`,
                    textShadow: locationData.id === 'arbol' ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
                    fontWeight: locationData.id === '1898' ? 'bold' : 'semibold',
                    letterSpacing: locationData.id === '1898' ? '0.5px' : 'normal',
                  }}
                >
                  <Menu className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Ver Menú
                </Button>
              </Link>
              <Button
                onClick={() => setIsContactOpen(true)}
                size="lg"
                className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 border-2 border-white/50 hover:border-white/70 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
              >
                <Award className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Eventos Especiales
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
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

      {/* Statistics Section - New addition */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                <Award className="w-8 h-8" style={{ color: locationData.theme.primary }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: locationData.theme.primary }}>
                {locationData.stats.yearsOpen}+
              </div>
              <div className="text-gray-600 font-medium">Años de experiencia</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                <Utensils className="w-8 h-8" style={{ color: locationData.theme.primary }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: locationData.theme.primary }}>
                {locationData.stats.dishes}+
              </div>
              <div className="text-gray-600 font-medium">Platos únicos</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                <ChefHat className="w-8 h-8" style={{ color: locationData.theme.primary }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: locationData.theme.primary }}>
                {locationData.stats.chefs}
              </div>
              <div className="text-gray-600 font-medium">Chefs expertos</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                <Users className="w-8 h-8" style={{ color: locationData.theme.primary }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: locationData.theme.primary }}>
                {locationData.socialProof.reviews.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Clientes felices</div>
            </div>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.promotions.map((promo: any, index: number) => (
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
            {locationData.menuHighlights.map((item: any, index: number) => (
              <Link key={item.id} href={`/${locationData.id}/menu`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 group hover:-translate-y-2 cursor-pointer animate-fade-in h-[500px] flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Enhanced rating badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">4.{8 + index}</span>
                      <span className="text-xs text-gray-500">★★★★★</span>
                    </div>

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
                    {index === 0 && (
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
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-opacity-80 transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      {/* Chef's choice badge */}
                      {index === 1 && (
                        <Badge variant="outline" className="text-xs font-semibold" style={{ borderColor: locationData.theme.accent, color: locationData.theme.accent, backgroundColor: `${locationData.theme.accent}10` }}>
                          Chef's Choice
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">{item.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-2xl font-bold" style={{ color: locationData.theme.primary }}>
                        ${(Number.parseInt(item.price.replace(/[^0-9]/g, "")) / 1000).toFixed(0)}.
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
                Descubre nuestro menú completo con más de {locationData.stats.dishes} platos únicos preparados por nuestros {locationData.stats.chefs} chefs expertos
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
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${locationData.theme.primary.replace('#', '%23')}' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Main image with hover effects */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-700">
                <img
                  src={locationData.images.interior || "/placeholder.svg"}
                  alt="Interior del restaurante"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating signature dish */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <img
                  src={locationData.images.signature || "/placeholder.svg"}
                  alt="Plato signature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-1 left-1 right-1 text-center">
                  <span className="text-white text-xs font-bold drop-shadow-lg">Signature</span>
                </div>
              </div>

              {/* Floating awards badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-4 h-4" style={{ color: locationData.theme.accent }} />
                <span className="text-sm font-bold" style={{ color: locationData.theme.primary }}>
                  {locationData.stats.awards} Premios
                </span>
              </div>
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
                <p className="text-gray-600 leading-relaxed">
                  Con más de {locationData.stats.yearsOpen} años de experiencia, nos hemos convertido en el lugar preferido de 
                  {locationData.socialProof.reviews.toLocaleString()} familias que confían en nosotros para sus momentos especiales.
                </p>
              </div>

              {/* Enhanced info cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${locationData.theme.primary}20` }}>
                    <Clock className="w-6 h-6 group-hover:animate-pulse" style={{ color: locationData.theme.primary }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">Horarios de Atención</div>
                    <div className="text-gray-600">{locationData.hours.weekdays}</div>
                    <div className="text-gray-600">{locationData.hours.weekends}</div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    Abierto ahora
                  </Badge>
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
                    onClick={() => {
                      const address = encodeURIComponent(locationData.contact.address)
                      window.open(`https://maps.google.com/?q=${address}`, '_blank')
                    }}
                    className="hover:scale-105 transition-transform duration-200"
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
                    onClick={() => window.open(`tel:${locationData.contact.phone}`, '_self')}
                    className="hover:scale-105 transition-transform duration-200"
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
                <Button
                  onClick={() => setShowGallery(true)}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-4 group"
                  style={{
                    borderColor: locationData.theme.primary,
                    color: locationData.theme.primary,
                  }}
                >
                  <Camera className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Ver Galería
                </Button>
              </div>

              {/* Social media links */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">Síguenos en redes sociales:</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform duration-200">
                    <Instagram className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform duration-200">
                    <Facebook className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 hover:scale-110 transition-transform duration-200">
                    <Twitter className="w-5 h-5" style={{ color: locationData.theme.primary }} />
                  </Button>
                </div>
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
    </div>
  )
}
