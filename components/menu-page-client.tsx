"use client"

import { useState, useMemo } from "react"
import type { LocationData } from "@/lib/locations"
import { type MenuItem, type MenuCategory, menuCategories } from "@/lib/menu-data"
import { useDebounce } from "@/lib/hooks/use-debounce"
import { useFuzzySearch } from "@/lib/hooks/use-fuzzy-search"
import { MenuItemCard } from "@/components/menu-item-card"
import { MenuItemModal } from "@/components/menu-item-modal"
import { MenuFilters } from "@/components/menu-filters"
import { BackToTop } from "@/components/ui/back-to-top"
import { Utensils, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuPageClientProps {
  locationData: LocationData
  menuItems: MenuItem[]
  availableCategories: MenuCategory[]
}

export function MenuPageClient({ locationData, menuItems, availableCategories }: MenuPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  
  // Calculate max price from menu items
  const maxPrice = useMemo(() => {
    return Math.max(...menuItems.map(item => item.price))
  }, [menuItems])
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice])
  
  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300)
  
  // Apply fuzzy search to menu items only when debounced query changes
  const fuzzySearchResults = useFuzzySearch(menuItems, debouncedSearchQuery)

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const handleDietaryFilterToggle = (filter: string) => {
    setDietaryFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const filteredItems = useMemo(() => {
    // Start with fuzzy search results if searching, otherwise all items
    const searchResults = debouncedSearchQuery ? fuzzySearchResults : menuItems
    
    return searchResults.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false
      }

      // Dietary filters
      if (dietaryFilters.length > 0) {
        const hasMatchingDietary = dietaryFilters.some((filter) => item.dietary.includes(filter))
        if (!hasMatchingDietary) {
          return false
        }
      }
      
      // Price range filter
      if (item.price < priceRange[0] || item.price > priceRange[1]) {
        return false
      }

      return true
    })
  }, [fuzzySearchResults, menuItems, selectedCategory, debouncedSearchQuery, dietaryFilters, priceRange])

  const groupedItems = useMemo(() => {
    if (selectedCategory === "all") {
      // Group by category when showing all
      const grouped: Record<string, MenuItem[]> = {}
      filteredItems.forEach((item) => {
        if (!grouped[item.category]) {
          grouped[item.category] = []
        }
        grouped[item.category].push(item)
      })
      return grouped
    } else {
      // Return single group when filtering by category
      return { [selectedCategory]: filteredItems }
    }
  }, [filteredItems, selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <MenuFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              dietaryFilters={dietaryFilters}
              onDietaryFilterToggle={handleDietaryFilterToggle}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              maxPrice={maxPrice}
              locationTheme={locationData.theme}
              availableCategories={availableCategories}
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="lg:col-span-3">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {filteredItems.length} {filteredItems.length === 1 ? "Plato" : "Platos"} Encontrados
              </h2>
              {(searchQuery || selectedCategory !== "all" || dietaryFilters.length > 0) && (
                <p className="text-gray-600 mt-1">
                  {searchQuery && `Buscando "${searchQuery}"`}
                  {selectedCategory !== "all" &&
                    ` en ${menuCategories.find((cat) => cat.id === selectedCategory)?.name}`}
                  {dietaryFilters.length > 0 && ` con opciones ${dietaryFilters.join(", ")}`}
                </p>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-md"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-md"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16 md:py-20">
              <Utensils className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-2">No se encontraron platos</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Intenta ajustar tus filtros o términos de búsqueda para descubrir más opciones deliciosas.
              </p>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {Object.entries(groupedItems).map(([categoryId, items]) => {
                const category = menuCategories.find((cat) => cat.id === categoryId)
                if (items.length === 0) return null

                return (
                  <div key={categoryId}>
                    {selectedCategory === "all" && category && (
                      <div className="mb-6 md:mb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl md:text-3xl">{category.icon}</span>
                          <div>
                            <h2
                              className="text-2xl md:text-3xl font-bold"
                              style={{ color: locationData.theme.primary }}
                            >
                              {category.name}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className={
                        viewMode === "grid"
                          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
                          : "space-y-4"
                      }
                    >
                      {items.map((item) => (
                        <MenuItemCard
                          key={item.id}
                          item={item}
                          onClick={() => handleItemClick(item)}
                          locationTheme={locationData.theme}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Menu Item Modal */}
      <MenuItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        locationTheme={locationData.theme}
      />
      
      {/* Back to Top Button */}
      <BackToTop locationTheme={locationData.theme} />
    </div>
  )
}
