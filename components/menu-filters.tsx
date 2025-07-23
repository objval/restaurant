"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { type MenuCategory } from "@/lib/menu-data"
import { Search, Filter, X, Sparkles } from "lucide-react"

interface MenuFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  dietaryFilters: string[]
  onDietaryFilterToggle: (filter: string) => void
  locationTheme: {
    primary: string
    secondary: string
    accent: string
  }
  availableCategories: MenuCategory[]
}

const dietaryOptions = [
  { value: "vegetarian", label: "Vegetariano" },
  { value: "vegan", label: "Vegano" },
  { value: "gluten-free", label: "Sin Gluten" }
]

export function MenuFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  dietaryFilters,
  onDietaryFilterToggle,
  locationTheme,
  availableCategories,
}: MenuFiltersProps) {
  const clearAllFilters = () => {
    onCategoryChange("all")
    onSearchChange("")
    dietaryFilters.forEach((filter) => onDietaryFilterToggle(filter))
  }

  const hasActiveFilters = selectedCategory !== "all" || searchQuery || dietaryFilters.length > 0

  return (
    <div className="space-y-6 bg-white rounded-lg p-4 md:p-6 shadow-lg border">
      {/* Header */}
      <div className="flex items-center gap-2 pb-4 border-b">
        <Filter className="w-5 h-5" style={{ color: locationTheme.primary }} />
        <h3 className="font-bold text-lg">Filtrar Menú</h3>
        {hasActiveFilters && (
          <Badge variant="secondary" className="ml-auto">
            Activo
          </Badge>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Buscar platos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-11 text-base border-2 focus:border-opacity-50"
          style={
            {
              borderColor: searchQuery ? locationTheme.primary : undefined,
              "--tw-ring-color": locationTheme.primary,
            } as any
          }
        />
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" style={{ color: locationTheme.accent }} />
          Categorías
        </h4>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => onCategoryChange("all")}
            className="w-full justify-start text-left h-auto py-3 px-4"
            style={
              selectedCategory === "all"
                ? {
                    backgroundColor: locationTheme.primary,
                    borderColor: locationTheme.primary,
                  }
                : {}
            }
          >
            <span className="mr-3 flex-shrink-0">🍽️</span>
            <div className="min-w-0 flex-1">
              <div className="font-medium truncate">Todos los Platos</div>
              <div className="text-xs opacity-75 truncate">Ver menú completo</div>
            </div>
          </Button>
          {availableCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className="w-full justify-start text-left h-auto py-3 px-4"
              style={
                selectedCategory === category.id
                  ? {
                      backgroundColor: locationTheme.primary,
                      borderColor: locationTheme.primary,
                    }
                  : {}
              }
            >
              <span className="mr-3 text-lg flex-shrink-0">{category.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="font-medium truncate">{category.name}</div>
                <div className="text-xs opacity-75 truncate">{category.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Dietary Filters */}
      <div>
        <h4 className="font-semibold text-base mb-3">Preferencias Alimentarias</h4>
        <div className="space-y-2">
          {dietaryOptions.map((option) => (
            <Badge
              key={option.value}
              variant={dietaryFilters.includes(option.value) ? "default" : "outline"}
              className="cursor-pointer px-3 py-2 text-sm w-full justify-center hover:shadow-md transition-shadow"
              onClick={() => onDietaryFilterToggle(option.value)}
              style={
                dietaryFilters.includes(option.value)
                  ? {
                      backgroundColor: locationTheme.accent,
                      borderColor: locationTheme.accent,
                    }
                  : {}
              }
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          onClick={clearAllFilters}
          className="w-full text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-300"
        >
          <X className="w-4 h-4 mr-2" />
          Limpiar filtros
        </Button>
      )}
    </div>
  )
}
