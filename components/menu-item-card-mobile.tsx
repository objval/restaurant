"use client"

import { useState } from "react"
import type { MenuItem } from "@/lib/menu-data"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, ChefHat, Flame, ChevronRight } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

interface MenuItemCardMobileProps {
  item: MenuItem
  onClick: () => void
  locationTheme: {
    primary: string
    secondary: string
    accent: string
  }
}

export function MenuItemCardMobile({ item, onClick, locationTheme }: MenuItemCardMobileProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card 
      className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm active:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex gap-3 p-3">
        {/* Image */}
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
          <OptimizedImage
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            sizes="96px"
          />
          
          {/* Badges overlay */}
          {(item.chef_special || item.popular) && (
            <div className="absolute top-1 left-1 flex flex-col gap-1">
              {item.chef_special && (
                <Badge className="bg-yellow-500 text-white text-[10px] px-1 py-0 h-5">
                  <ChefHat className="w-3 h-3" />
                </Badge>
              )}
              {item.popular && (
                <Badge className="bg-green-500 text-white text-[10px] px-1 py-0 h-5">
                  <Star className="w-3 h-3" />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base leading-tight text-gray-900 dark:text-gray-100 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-snug">
                {item.description}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
          </div>

          {/* Footer info */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{item.prepTime}</span>
              </div>
              {item.spiceLevel && (
                <div className="flex gap-0.5">
                  {Array.from({ length: item.spiceLevel }, (_, i) => (
                    <Flame key={i} className="w-3 h-3 text-red-500 fill-current" />
                  ))}
                </div>
              )}
            </div>
            
            {/* Price */}
            <div 
              className="font-bold text-lg"
              style={{ color: locationTheme.primary }}
            >
              ${(item.price / 1000).toFixed(0)}.{(item.price % 1000).toString().padStart(3, "0")}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}