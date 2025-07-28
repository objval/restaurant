"use client"

import { useRef } from "react"
import type { MenuItem } from "@/lib/menu-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Coffee, Beer, Pizza, Sandwich, Utensils, Salad, IceCream, Star, ChefHat, Flame, Leaf, Wine, GlassWater } from "lucide-react"

interface MenuItemCardProps {
  item: MenuItem
  onClick: () => void
  locationTheme: {
    primary: string
    secondary: string
    accent: string
  }
}

// Mapeo de categorías a iconos
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  beers: Beer,
  cocktails: Wine,
  spirits: Wine,
  beverages: GlassWater,
  coffee: Coffee,
  pizzas: Pizza,
  sandwiches: Sandwich,
  mains: Utensils,
  appetizers: Utensils,
  salads: Salad,
  desserts: IceCream,
  'hot-dogs': Sandwich,
  sides: Utensils
}

// Colores de fondo para categorías
const categoryColors: Record<string, string> = {
  beers: "#FEF3C7", // Amarillo claro
  cocktails: "#FCE7F3", // Rosa claro
  spirits: "#F3E8FF", // Púrpura claro
  beverages: "#E0F2FE", // Azul claro
  coffee: "#F3E8DC", // Café claro
  pizzas: "#FEE2E2", // Rojo claro
  sandwiches: "#FED7AA", // Naranja claro
  mains: "#D1FAE5", // Verde claro
  appetizers: "#FFE4E6", // Rosa suave
  salads: "#D9F99D", // Verde lima
  desserts: "#FBBF24", // Amarillo dorado
  'hot-dogs': "#FEF3C7", // Amarillo
  sides: "#E5E7EB" // Gris claro
}

export function MenuItemCard({ item, onClick, locationTheme }: MenuItemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const CategoryIcon = categoryIcons[item.category] || Utensils
  const categoryBgColor = categoryColors[item.category] || "#F3F4F6"
  
  // Calcular el nivel de picante
  const spiceIcons = item.spiceLevel ? Array.from({ length: item.spiceLevel }, (_, i) => (
    <Flame key={i} className="w-3 h-3 text-red-500 fill-current" />
  )) : null

  return (
    <Card
      ref={cardRef}
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden bg-white border-2 hover:border-opacity-50"
      style={{ borderColor: `${locationTheme.primary}20` }}
      onClick={onClick}
    >
      {/* Barra superior de categoría */}
      <div 
        className="h-2 w-full"
        style={{ backgroundColor: locationTheme.primary }}
      />
      
      <CardContent className="p-0">
        {/* Header con icono de categoría */}
        <div 
          className="p-4 pb-3"
          style={{ backgroundColor: categoryBgColor }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <div 
                className="p-2.5 rounded-lg bg-white shadow-sm"
                style={{ color: locationTheme.primary }}
              >
                <CategoryIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg md:text-xl line-clamp-2 leading-tight text-gray-900 mb-1">
                  {item.name}
                </h3>
                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {item.popular && (
                    <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  {item.chef_special && (
                    <Badge className="bg-yellow-500 text-white text-xs px-2 py-0.5">
                      <ChefHat className="w-3 h-3 mr-1" />
                      Chef
                    </Badge>
                  )}
                  {item.vegetarian && (
                    <Badge className="bg-green-600 text-white text-xs px-2 py-0.5">
                      <Leaf className="w-3 h-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {spiceIcons && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5 border-red-300">
                      <div className="flex gap-0.5">{spiceIcons}</div>
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Precio destacado */}
            <div className="text-right">
              <div
                className="font-bold text-xl md:text-2xl"
                style={{ color: locationTheme.primary }}
              >
                ${(item.price / 1000).toFixed(0)}.{(item.price % 1000).toString().padStart(3, "0")}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="p-4 pt-3">
          <p className="text-gray-600 text-sm md:text-base line-clamp-2 leading-relaxed mb-3">
            {item.description || "Delicioso plato preparado con los mejores ingredientes."}
          </p>
          
          {/* Información adicional */}
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span>{item.prepTime}</span>
              </div>
              {item.calories && (
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-blue-600">C</span>
                  </div>
                  <span>{item.calories} cal</span>
                </div>
              )}
            </div>
            
            {/* Indicador de ingredientes */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="text-xs text-gray-400">
                {item.ingredients.length} ingredientes
              </div>
            )}
          </div>
        </div>
        
        {/* Footer con hover effect */}
        <div 
          className="h-1 w-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: locationTheme.accent }}
        />
      </CardContent>
    </Card>
  )
}