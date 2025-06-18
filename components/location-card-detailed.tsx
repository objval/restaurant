"use client"

import { useState } from "react"
import type { LocationData } from "@/lib/locations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star, Users, Utensils, Wine } from "lucide-react"
import { LoadingSpinner } from "./loading-spinner"

interface LocationCardDetailedProps {
  location: LocationData
  onSelect: (location: LocationData) => void
  isNearest?: boolean
  isLoading?: boolean
}

export function LocationCardDetailed({
  location,
  onSelect,
  isNearest = false,
  isLoading = false,
}: LocationCardDetailedProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleSelect = () => {
    if (isLoading) return
    onSelect(location)
  }

  return (
    <Card className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden bg-white">
      {isNearest && (
        <div className="absolute top-4 right-4 z-20 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          📍 Nearest
        </div>
      )}

      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <LoadingSpinner color={location.theme.primary} />
          </div>
        )}
        <img
          src={location.images.hero || "/placeholder.svg"}
          alt={location.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          style={{
            background: `linear-gradient(to top, ${location.theme.primary}CC, ${location.theme.primary}40, transparent)`,
          }}
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
          <p className="text-sm opacity-90 font-medium">{location.concept}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {location.priceRange}
            </Badge>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{location.description}</p>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <div className="text-xs">
              <div>{location.hours.weekdays}</div>
              <div>{location.hours.weekends}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Downtown</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {location.specialties.slice(0, 3).map((specialty) => (
              <Badge
                key={specialty}
                variant="outline"
                style={{
                  borderColor: location.theme.primary,
                  color: location.theme.primary,
                }}
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expandable Details */}
        {showDetails && (
          <div className="mb-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                Menu Highlights
              </h4>
              <div className="space-y-2">
                {location.menuHighlights.slice(0, 2).map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-sm font-bold" style={{ color: location.theme.primary }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Atmosphere
              </h4>
              <div className="flex flex-wrap gap-1">
                {location.atmosphere.map((mood) => (
                  <Badge key={mood} variant="secondary" className="text-xs">
                    {mood}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Wine className="w-4 h-4" />
                Features
              </h4>
              <div className="flex flex-wrap gap-1">
                {location.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          <Button onClick={() => setShowDetails(!showDetails)} variant="outline" className="w-full">
            {showDetails ? "Show Less" : "Show More Details"}
          </Button>

          <Button
            onClick={handleSelect}
            disabled={isLoading}
            className="w-full h-12 text-lg font-medium relative overflow-hidden"
            style={{
              backgroundColor: isLoading ? "#gray-400" : location.theme.primary,
              borderColor: location.theme.primary,
            }}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <LoadingSpinner size="sm" color="white" />
                <span>Loading...</span>
              </div>
            ) : (
              <>
                <span>Visit {location.name}</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${location.theme.accent}, transparent)`,
                  }}
                />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
