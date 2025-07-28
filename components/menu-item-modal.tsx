"use client"

import type { MenuItem } from "@/lib/menu-data"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Clock, Flame, Star, ChefHat, Leaf } from "lucide-react"

interface MenuItemModalProps {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
  locationTheme: {
    primary: string
    secondary: string
    accent: string
  }
}

export function MenuItemModal({ item, isOpen, onClose, locationTheme }: MenuItemModalProps) {
  if (!item) return null

  const spiceIcons = Array.from({ length: 5 }, (_, i) => (
    <Flame
      key={i}
      className={`w-4 h-4 ${i < (item.spiceLevel || 0) ? "text-red-500 fill-current" : "text-gray-300"}`}
    />
  ))

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 z-10"
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            <DialogHeader>
              <div className="flex items-start justify-between pr-8">
                <div className="flex-1">
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">{item.name}</DialogTitle>
                  <DialogDescription className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </DialogDescription>
                </div>
                <div className="text-right">
                  <div
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: locationTheme.primary }}
                  >
                    ${(item.price / 1000).toFixed(0)}.{(item.price % 1000).toString().padStart(3, "0")}
                  </div>
                </div>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.chef_special && (
                  <Badge className="bg-yellow-500 text-white">
                    <ChefHat className="w-3 h-3 mr-1" />
                    Especial del Chef
                  </Badge>
                )}
                {item.popular && (
                  <Badge className="bg-green-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                {item.seasonal && (
                  <Badge className="bg-orange-500 text-white">
                    <Leaf className="w-3 h-3 mr-1" />
                    Seasonal
                  </Badge>
                )}
              </div>
            </DialogHeader>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <div>
                  <span className="text-sm font-medium">Tiempo de Prep.</span>
                  <div className="text-sm text-gray-600">{item.prepTime}</div>
                </div>
              </div>
              {item.calories && (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">C</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Calorías</span>
                    <div className="text-sm text-gray-600">{item.calories}</div>
                  </div>
                </div>
              )}
              {item.spiceLevel && (
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-500" />
                  <div>
                    <span className="text-sm font-medium">Nivel de Picante</span>
                    <div className="flex gap-1 mt-1">{spiceIcons}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-6 rounded" style={{ backgroundColor: locationTheme.primary }} />
                Ingredientes
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient) => (
                  <Badge key={ingredient} variant="outline" className="text-sm py-1">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Dietary & Allergens */}
            <div className="grid md:grid-cols-2 gap-6">
              {item.dietary.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-700 flex items-center gap-2">
                    <div className="w-2 h-6 rounded bg-green-500" />
                    Opciones Dietéticas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((diet) => (
                      <Badge key={diet} className="bg-green-100 text-green-800 border-green-200">
                        {diet}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {item.allergens.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-700 flex items-center gap-2">
                    <div className="w-2 h-6 rounded bg-red-500" />
                    Contiene Alérgenos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.allergens.map((allergen) => (
                      <Badge key={allergen} className="bg-red-100 text-red-800 border-red-200">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Note */}
            <div className="pt-4 border-t text-center">
              <p className="text-sm text-gray-500">
                Por favor informa a tu mesero sobre cualquier alergia o restricción dietética
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
