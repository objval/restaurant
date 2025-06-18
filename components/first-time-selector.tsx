"use client"

import { useState } from "react"
import { type LocationData, locations, findNearestLocation } from "@/lib/locations"
import { LocationCard } from "./location-card"
import { Button } from "@/components/ui/button"
import { MapPin, Loader2 } from "lucide-react"

interface FirstTimeSelectorProps {
  onLocationSelect: (location: LocationData) => void
}

export function FirstTimeSelector({ onLocationSelect }: FirstTimeSelectorProps) {
  const [isDetecting, setIsDetecting] = useState(false)
  const [nearestLocation, setNearestLocation] = useState<LocationData | null>(null)

  const handleGeolocation = () => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation is not supported by your browser.")
      return
    }

    setIsDetecting(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const nearest = findNearestLocation(latitude, longitude)
        setNearestLocation(nearest)
        setIsDetecting(false)

        // Show the nearest location for 2 seconds before redirecting
        setTimeout(() => {
          onLocationSelect(nearest)
        }, 2000)
      },
      (error) => {
        console.error("Geolocation error:", error)
        setIsDetecting(false)

        // More specific error messages
        let errorMessage = "Unable to detect your location. Please select manually."

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location services and try again, or select manually."
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable. Please select manually."
            break
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please select manually."
            break
          default:
            errorMessage = "Unable to detect your location. Please select manually."
            break
        }

        alert(errorMessage)
      },
      {
        enableHighAccuracy: false, // Changed to false for better compatibility
        timeout: 15000, // Increased timeout
        maximumAge: 600000, // 10 minutes
      },
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Choose Your Dining Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our three unique restaurant locations, each offering a distinct culinary journey inspired by their
            surroundings.
          </p>
        </div>

        <div className="mb-8 text-center">
          <Button
            onClick={handleGeolocation}
            disabled={isDetecting}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3"
          >
            {isDetecting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Finding your nearest location...
              </>
            ) : (
              <>
                <MapPin className="w-5 h-5 mr-2" />
                Find My Nearest Location
              </>
            )}
          </Button>

          {nearestLocation && (
            <div className="mt-4 p-4 bg-green-100 rounded-lg inline-block">
              <p className="text-green-800 font-medium">📍 {nearestLocation.name} is closest to you! Redirecting...</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onSelect={onLocationSelect}
              isNearest={nearestLocation?.id === location.id}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Can't decide? Each location offers a unique atmosphere and carefully curated menu.
          </p>
        </div>
      </div>
    </div>
  )
}
