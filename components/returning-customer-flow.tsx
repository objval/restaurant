"use client"

import { locations } from "@/lib/locations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight, Heart } from "lucide-react"

interface ReturningCustomerFlowProps {
  savedLocationId: string
  onConfirm: () => void
  onGeolocation: () => void
  onShowAll: () => void
}

export function ReturningCustomerFlow({
  savedLocationId,
  onConfirm,
  onGeolocation,
  onShowAll,
}: ReturningCustomerFlowProps) {
  const savedLocation = locations.find((loc) => loc.id === savedLocationId)

  if (!savedLocation) {
    onShowAll()
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome back!</h1>
          <p className="text-xl text-gray-600">We remember your favorite dining spot</p>
        </div>

        <Card className="mb-8 overflow-hidden shadow-2xl">
          <div
            className="relative h-48 bg-gradient-to-r"
            style={{
              background: `linear-gradient(135deg, ${savedLocation.theme.primary}, ${savedLocation.theme.accent})`,
            }}
          >
            <img
              src={savedLocation.images.hero || "/placeholder.svg"}
              alt={savedLocation.name}
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">{savedLocation.name}</h2>
              <p className="text-lg opacity-90">{savedLocation.concept}</p>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Your Last Experience</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{savedLocation.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <div className="text-sm">
                      <div>{savedLocation.hours.weekdays}</div>
                      <div className="text-xs text-gray-400">{savedLocation.hours.weekends}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">What You Loved</h3>
                <div className="flex flex-wrap gap-2">
                  {savedLocation.specialties.slice(0, 3).map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `${savedLocation.theme.primary}20`,
                        color: savedLocation.theme.primary,
                      }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={onConfirm}
                className="w-full h-14 text-lg font-semibold rounded-xl"
                style={{
                  backgroundColor: savedLocation.theme.primary,
                  borderColor: savedLocation.theme.primary,
                }}
              >
                <span>Yes, take me back to {savedLocation.name}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button onClick={onGeolocation} variant="outline" className="w-full h-12 rounded-xl border-2">
                <MapPin className="w-5 h-5 mr-2" />
                Find my nearest location now
              </Button>

              <Button onClick={onShowAll} variant="ghost" className="w-full h-10">
                Explore all locations instead
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-gray-500">
          Moved to a different area? We'll help you discover your new favorite spot.
        </p>
      </div>
    </div>
  )
}
