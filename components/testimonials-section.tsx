"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  name: string
  avatar?: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

interface TestimonialsSectionProps {
  locationData: {
    theme: {
      primary: string
      secondary: string
      accent: string
      background: string
      text: string
    }
    socialProof: {
      reviews: number
      googleRating: number
    }
  }
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    rating: 5,
    comment: "Excelente ambiente y comida deliciosa. El servicio fue impecable y los precios muy razonables. Definitivamente volveré.",
    date: "Hace 2 semanas",
    verified: true
  },
  {
    id: "2", 
    name: "Carlos Rodríguez",
    rating: 5,
    comment: "Los mejores tragos de la ciudad. La atención del personal es excepcional y el ambiente es perfecto para una noche con amigos.",
    date: "Hace 1 mes",
    verified: true
  },
  {
    id: "3",
    name: "Ana Silva",
    rating: 5,
    comment: "Un lugar mágico con una propuesta gastronómica única. Cada plato es una experiencia inolvidable.",
    date: "Hace 3 semanas",
    verified: true
  }
]

export function TestimonialsSection({ locationData }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${locationData.theme.primary}20 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, ${locationData.theme.accent}20 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-8 h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: locationData.theme.primary }}>
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="flex items-center justify-center gap-4 text-lg text-gray-600">
            <span className="font-bold text-2xl" style={{ color: locationData.theme.primary }}>
              {locationData.socialProof.googleRating}
            </span>
            <span>de calificación en Google</span>
            <span className="text-gray-400">•</span>
            <span>
              <span className="font-bold" style={{ color: locationData.theme.primary }}>
                {locationData.socialProof.reviews}+
              </span> reseñas
            </span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 transform",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0 z-10" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <CardContent className="p-8 md:p-12">
                  <Quote className="w-12 h-12 mb-6 opacity-20" style={{ color: locationData.theme.primary }} />
                  
                  <p className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback style={{ backgroundColor: locationData.theme.primary, color: 'white' }}>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{testimonial.date}</span>
                          {testimonial.verified && (
                            <>
                              <span>•</span>
                              <span className="text-green-600">✓ Verificado</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "w-8 bg-opacity-100" 
                    : "bg-opacity-30 hover:bg-opacity-50"
                )}
                style={{ backgroundColor: locationData.theme.primary }}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: locationData.theme.primary,
              color: locationData.theme.primary
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Ver todas las reseñas en Google
          </button>
        </div>
      </div>
    </section>
  )
}