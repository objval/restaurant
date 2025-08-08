"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface LocationSwitcherProps {
  currentLocation: 'arbol' | '1898' | 'capriccio'
  onLocationChange: (location: 'arbol' | '1898' | 'capriccio') => void
}

const locations = [
  { id: 'arbol' as const, name: 'El Árbol', color: 'bg-green-500' },
  { id: '1898' as const, name: '1898 Beer Bar', color: 'bg-amber-600' },
  { id: 'capriccio' as const, name: 'Capriccio', color: 'bg-purple-600' },
]

export function LocationSwitcher({ currentLocation, onLocationChange }: LocationSwitcherProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Ubicación</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {locations.map((location) => (
          <Button
            key={location.id}
            variant={currentLocation === location.id ? "default" : "outline"}
            className={cn(
              "relative h-auto py-3 px-4 flex flex-col items-center gap-1 transition-all",
              currentLocation === location.id && "ring-2 ring-offset-2"
            )}
            onClick={() => onLocationChange(location.id)}
          >
            <div className={cn(
              "w-3 h-3 rounded-full",
              location.color
            )} />
            <span className="font-medium">{location.name}</span>
            {currentLocation === location.id && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}