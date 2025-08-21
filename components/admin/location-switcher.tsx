"use client"

import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface LocationSwitcherProps {
  currentLocation: 'arbol' | '1898' | 'capriccio'
  onLocationChange: (location: 'arbol' | '1898' | 'capriccio') => void
}

const locations = [
  { id: 'arbol' as const, name: 'El Árbol', color: 'from-green-500 to-green-600', dot: 'bg-green-500' },
  { id: '1898' as const, name: '1898 Beer Bar', color: 'from-amber-500 to-orange-600', dot: 'bg-amber-500' },
  { id: 'capriccio' as const, name: 'Capriccio', color: 'from-purple-500 to-purple-600', dot: 'bg-purple-500' },
]

export function LocationSwitcher({ currentLocation, onLocationChange }: LocationSwitcherProps) {
  return (
    <div className="relative mb-8">
      {/* Glass card container */}
      <div className="bg-card/50 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50 p-6 bg-gradient-to-br from-card via-card to-muted/20">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-chart-3/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Ubicación</h2>
        </div>
        
        {/* Location pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {locations.map((location) => {
            const isActive = currentLocation === location.id
            
            return (
              <button
                key={location.id}
                onClick={() => onLocationChange(location.id)}
                className={cn(
                  "relative group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300",
                  isActive ? [
                    "bg-gradient-to-r text-white shadow-lg scale-105",
                    location.color,
                    "ring-2 ring-offset-2 ring-offset-background",
                    location.id === 'arbol' && "ring-green-500/50",
                    location.id === '1898' && "ring-amber-500/50", 
                    location.id === 'capriccio' && "ring-purple-500/50"
                  ] : [
                    "bg-card hover:bg-muted/50 text-foreground",
                    "border border-border hover:border-primary/50",
                    "hover:shadow-md hover:scale-102"
                  ]
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 flex items-center justify-center">
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </div>
                )}
                
                {/* Location dot */}
                <div className={cn(
                  "w-3 h-3 rounded-full transition-transform",
                  location.dot,
                  isActive ? "scale-125" : "group-hover:scale-110"
                )} />
                
                {/* Location name */}
                <span className={cn(
                  "font-semibold text-sm",
                  !isActive && "group-hover:text-primary"
                )}>
                  {location.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}