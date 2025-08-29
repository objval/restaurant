"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Clock, Phone, Mail, Instagram, Facebook, Twitter,
  AlertTriangle, Coffee, ChefHat, Utensils
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface MaintenanceSettings {
  enabled: boolean
  title: string
  message: string
  estimated_time?: string | null
  show_countdown: boolean
  countdown_date?: string | null
  show_social_links: boolean
  show_contact_info: boolean
  custom_css?: string | null
}

interface MaintenanceOverlayProps {
  settings: MaintenanceSettings
}

export function MaintenanceOverlay({ settings }: MaintenanceOverlayProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    if (!settings.show_countdown || !settings.countdown_date) return

    const calculateTimeLeft = () => {
      const difference = new Date(settings.countdown_date!).getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft(null)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [settings.countdown_date, settings.show_countdown])

  // Restaurant contact info (you can make this dynamic from locations)
  const contactInfo = {
    phone: "+1 234 567 8900",
    email: "info@restaurant.com",
    instagram: "https://instagram.com/restaurant",
    facebook: "https://facebook.com/restaurant",
    twitter: "https://twitter.com/restaurant"
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Custom CSS */}
      {settings.custom_css && (
        <style dangerouslySetInnerHTML={{ __html: settings.custom_css }} />
      )}

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0">
          {/* Floating Food Icons */}
          <div className="absolute top-10 left-10 animate-float opacity-20">
            <Coffee className="w-24 h-24 text-orange-400" />
          </div>
          <div className="absolute top-20 right-20 animate-float-delayed opacity-20">
            <ChefHat className="w-32 h-32 text-red-400" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float opacity-20">
            <Utensils className="w-28 h-28 text-orange-400" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float-delayed opacity-20">
            <Coffee className="w-20 h-20 text-red-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <Card className="max-w-2xl w-full p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-full p-6">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            {settings.title}
          </h1>

          {/* Message */}
          <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
            {settings.message}
          </p>

          {/* Estimated Time */}
          {settings.estimated_time && (
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-orange-800 font-medium">
                  Tiempo estimado: {settings.estimated_time}
                </span>
              </div>
            </div>
          )}

          {/* Countdown Timer */}
          {settings.show_countdown && settings.countdown_date && timeLeft && (
            <div className="mb-8">
              <p className="text-center text-gray-600 mb-4">Volveremos en:</p>
              <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
                {[
                  { value: timeLeft.days, label: 'Días' },
                  { value: timeLeft.hours, label: 'Horas' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Seg' }
                ].map((item, index) => (
                  <Card key={index} className="p-3 md:p-4 text-center bg-gradient-to-br from-orange-50 to-red-50">
                    <div className="text-2xl md:text-3xl font-bold text-orange-600">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 mt-1">
                      {item.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Info */}
          {settings.show_contact_info && (
            <div className="border-t pt-6 mb-6">
              <p className="text-center text-gray-600 mb-4">
                ¿Necesitas contactarnos? Estamos aquí para ayudarte:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                  className="group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  {contactInfo.phone}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                  className="group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Enviar Email
                </Button>
              </div>
            </div>
          )}

          {/* Social Links */}
          {settings.show_social_links && (
            <div className="flex justify-center gap-4 pt-6 border-t">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full hover:bg-orange-100"
                onClick={() => window.open(contactInfo.instagram, '_blank')}
              >
                <Instagram className="w-6 h-6 text-orange-600" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full hover:bg-orange-100"
                onClick={() => window.open(contactInfo.facebook, '_blank')}
              >
                <Facebook className="w-6 h-6 text-orange-600" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full hover:bg-orange-100"
                onClick={() => window.open(contactInfo.twitter, '_blank')}
              >
                <Twitter className="w-6 h-6 text-orange-600" />
              </Button>
            </div>
          )}

          {/* Fun Message */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              Mientras tanto, ¿por qué no planeas tu próxima visita? 🍽️
            </p>
          </div>
        </Card>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  )
}