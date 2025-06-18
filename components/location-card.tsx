"use client"

import type { LocationData } from "@/lib/locations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface LocationCardProps {
  location: LocationData
  onSelect: (location: LocationData) => void
  isNearest?: boolean
}

export function LocationCard({ location, onSelect, isNearest = false }: LocationCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
      {isNearest && (
        <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Nearest
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <img
          src={`/placeholder.svg?height=200&width=400`}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          style={{
            background: `linear-gradient(to top, ${location.theme.primary}CC, transparent)`,
          }}
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{location.name}</h3>
          <p className="text-sm opacity-90">{location.concept}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{location.description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{location.hours}</span>
          </div>
        </div>

        <Button
          onClick={() => onSelect(location)}
          className="w-full"
          style={{
            backgroundColor: location.theme.primary,
            borderColor: location.theme.primary,
          }}
        >
          Visit {location.name}
        </Button>
      </CardContent>
    </Card>
  )
}
