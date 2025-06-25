"use client"

import { Button } from "@/components/ui/button"
import { Clock, MapPin, Star, Phone, Award } from "lucide-react"
import { type LocationData } from "@/lib/locations"

interface LocationDetailsSectionProps {
  locations: LocationData[]
  onLocationSelect: (location: LocationData) => void
  loadingLocationId: string | null
}

export function LocationDetailsSection({ 
  locations, 
  onLocationSelect, 
  loadingLocationId 
}: LocationDetailsSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conoce Nuestras Ubicaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada restaurante diseñado para un momento diferente de tu día
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div 
              key={location.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={location.images.interior || "/placeholder.svg"}
                    alt={`Interior de ${location.name}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="font-semibold">{location.socialProof.rating}</span>
                      <span className="text-gray-300">({location.socialProof.reviews} reseñas)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{location.stats.awards} premios</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
                    style={{ backgroundColor: location.theme.primary }}
                  >
                    {location.concept}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {location.name}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {location.longDescription}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5" style={{ color: location.theme.primary }} />
                      <div>
                        <div className="font-medium">{location.hours.weekdays}</div>
                        <div className="text-sm text-gray-500">{location.hours.weekends}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5" style={{ color: location.theme.primary }} />
                      <div>
                        <div className="font-medium">{location.contact.address.split(',')[0]}</div>
                        <div className="text-sm text-gray-500">{location.contact.address.split(',').slice(1).join(',')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5" style={{ color: location.theme.primary }} />
                      <div className="font-medium">{location.contact.phone}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Especialidades:</div>
                      <div className="flex flex-wrap gap-2">
                        {location.specialties.slice(0, 3).map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: location.theme.secondary }}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Lo que incluye:</div>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs border"
                        style={{ 
                          borderColor: location.theme.primary,
                          color: location.theme.primary
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Menu Highlights */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">Platos destacados:</div>
                  <div className="grid gap-3">
                    {location.menuHighlights.slice(0, 2).map((dish, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <img
                          src={dish.image || "/placeholder.svg"}
                          alt={dish.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{dish.name}</div>
                          <div className="text-sm text-gray-600">{dish.description}</div>
                        </div>
                        <div 
                          className="font-bold"
                          style={{ color: location.theme.primary }}
                        >
                          {dish.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  onClick={() => onLocationSelect(location)}
                  disabled={loadingLocationId === location.id}
                  className="w-full md:w-auto text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: location.theme.primary,
                    boxShadow: `0 10px 25px ${location.theme.primary}25`
                  }}
                >
                  {loadingLocationId === location.id ? (
                    "Preparando experiencia..."
                  ) : (
                    `Visitar ${location.name}`
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 