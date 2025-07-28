"use client"

import Image from "next/image"
import { locations } from "@/lib/locations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight, Heart, Sparkles, ChefHat } from "lucide-react"
// import { useEffect, useState } from "react" // Not needed for current implementation

interface ReturningCustomerFlowProps {
  savedLocationId: string
  onConfirmAction: () => void
  onGeolocationAction: () => void
  onShowAllAction: () => void
}

export function ReturningCustomerFlow({
  savedLocationId,
  onConfirmAction,
  onGeolocationAction,
  onShowAllAction,
}: ReturningCustomerFlowProps) {
  const savedLocation = locations.find((loc) => loc.id === savedLocationId)
  
  // Time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "¡Buenos días!"
    if (hour < 19) return "¡Buenas tardes!"
    return "¡Buenas noches!"
  }

  if (!savedLocation) {
    onShowAllAction()
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl animate-pulse" />
      </div>
      
      <div className="max-w-3xl w-full relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-2xl font-medium text-orange-600 mb-2">{getTimeBasedGreeting()}</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            <Heart className="w-10 h-10 text-red-500 fill-current animate-bounce" />
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">¡Bienvenido de vuelta!</h1>
          <p className="text-xl text-gray-700">Recordamos tu lugar favorito</p>
        </div>

        <Card className="mb-8 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl border border-orange-100 animate-slide-up">
          <div
            className="relative h-56 bg-gradient-to-r overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${savedLocation.theme.primary}, ${savedLocation.theme.accent})`,
            }}
          >
            <Image
              src={savedLocation.images.hero || "/placeholder.svg"}
              alt={savedLocation.name}
              fill
              className="object-cover mix-blend-overlay hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">{savedLocation.name}</h2>
              <div className="flex items-center gap-3">
                <p className="text-lg opacity-90">{savedLocation.concept}</p>
              </div>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Tu Última Visita
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-orange-600 mt-0.5" />
                    <span className="text-sm">{savedLocation.contact.address}</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                    <Clock className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium">{savedLocation.hours.weekdays}</div>
                      <div className="text-xs text-gray-500 mt-1">{savedLocation.hours.weekends}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-orange-500" />
                  Lo Que Más Te Gustó
                </h3>
                <div className="flex flex-wrap gap-2">
                  {savedLocation.specialties.slice(0, 3).map((specialty, index) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md animate-fade-in"
                      style={{
                        backgroundColor: `${savedLocation.theme.primary}15`,
                        color: savedLocation.theme.primary,
                        borderWidth: '1px',
                        borderColor: `${savedLocation.theme.primary}30`,
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold">{savedLocation.socialProof.reviews.toLocaleString()} visitantes satisfechos</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <Button
                onClick={onConfirmAction}
                className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
                style={{
                  backgroundColor: savedLocation.theme.primary,
                  borderColor: savedLocation.theme.primary,
                }}
              >
                <span>Sí, llévame a {savedLocation.name}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button 
                onClick={onGeolocationAction} 
                variant="outline" 
                className="w-full h-12 rounded-xl border-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
              >
                <MapPin className="w-5 h-5 mr-2 text-orange-600 group-hover:animate-bounce" />
                <span className="text-gray-700">Buscar mi ubicación más cercana</span>
              </Button>

              <Button 
                onClick={onShowAllAction} 
                variant="ghost" 
                className="w-full h-10 text-gray-600 hover:text-gray-800 hover:bg-orange-50/50 transition-all duration-200"
              >
                Ver todas las ubicaciones
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-gray-600 animate-fade-in" style={{ animationDelay: '300ms' }}>
          ¿Te mudaste? Te ayudamos a encontrar tu nuevo lugar favorito.
        </p>
      </div>
    </div>
  )
}