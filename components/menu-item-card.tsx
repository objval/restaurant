"use client"

import { useState, useEffect, useRef } from "react"
import type { MenuItem } from "@/lib/menu-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, ChefHat, Flame, Leaf } from "lucide-react"

interface MenuItemCardProps {
  item: MenuItem
  onClick: () => void
  locationTheme: {
    primary: string
    secondary: string
    accent: string
  }
}

// Generate a blur data URL for placeholder
function generateBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (ctx) {
    // Create a gradient that roughly matches typical food images
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f3f4f6')
    gradient.addColorStop(0.5, '#e5e7eb')
    gradient.addColorStop(1, '#d1d5db')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
  return canvas.toDataURL()
}

export function MenuItemCard({ item, onClick, locationTheme }: MenuItemCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [blurDataUrl, setBlurDataUrl] = useState<string>('')

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Generate blur placeholder
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBlurDataUrl(generateBlurDataURL())
    }
  }, [])

  return (
    <Card
      ref={cardRef}
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden bg-white"
      onClick={onClick}
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        {/* Blur placeholder */}
        {!imageLoaded && blurDataUrl && (
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `url(${blurDataUrl})`,
              backgroundSize: 'cover',
              filter: 'blur(20px)',
              transform: 'scale(1.1)'
            }}
          />
        )}
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        
        {/* Main image with lazy loading */}
        {isInView && (
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg"
              setImageLoaded(true)
            }}
          />
        )}

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.chef_special && (
            <Badge className="bg-yellow-500 text-white shadow-lg text-xs">
              <ChefHat className="w-3 h-3 mr-1" />
              Especial del Chef
            </Badge>
          )}
          {item.popular && (
            <Badge className="bg-green-500 text-white shadow-lg text-xs">
              <Star className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          )}
          {item.seasonal && (
            <Badge className="bg-orange-500 text-white shadow-lg text-xs">
              <Leaf className="w-3 h-3 mr-1" />
              Seasonal
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <div
            className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-lg shadow-lg transition-transform group-hover:scale-105"
            style={{ color: locationTheme.primary }}
          >
            ${(item.price / 1000).toFixed(0)}.{(item.price % 1000).toString().padStart(3, "0")}
          </div>
        </div>

        {/* Spice level */}
        {item.spiceLevel && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {Array.from({ length: item.spiceLevel }, (_, i) => (
              <Flame key={i} className="w-4 h-4 text-red-500 fill-current drop-shadow-lg" />
            ))}
          </div>
        )}

        {/* Hover overlay with "View Details" */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-gray-800 shadow-lg">
            Ver Detalles
          </div>
        </div>
      </div>

      <CardContent className="p-4 md:p-5">
        <div className="mb-3">
          <h3 className="font-bold text-lg md:text-xl mb-2 line-clamp-1 group-hover:text-opacity-80 transition-colors">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm md:text-base line-clamp-2 leading-relaxed">{item.description}</p>
        </div>

        {/* Quick info */}
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            <span>{item.prepTime}</span>
          </div>
          {item.calories && <span>{item.calories} cal</span>}
        </div>

        {/* Dietary badges */}
        {item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.dietary.slice(0, 2).map((diet) => (
              <Badge key={diet} variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                {diet === "vegetarian" ? "Vegetariano" : diet === "vegan" ? "Vegano" : diet === "gluten-free" ? "Sin Gluten" : diet}
              </Badge>
            ))}
            {item.dietary.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{item.dietary.length - 2} más
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}