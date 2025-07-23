"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import type { LocationData } from "@/lib/locations"
import { type MenuItem, type MenuCategory, menuCategories } from "@/lib/menu-data"
import { MenuItemCardMobile } from "@/components/menu-item-card-mobile"
import { MenuItemModal } from "@/components/menu-item-modal"
import { BackToTop } from "@/components/ui/back-to-top"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, X, Menu, ChevronRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MenuPageMobileProps {
  locationData: LocationData
  menuItems: MenuItem[]
  availableCategories: MenuCategory[]
}

export function MenuPageMobile({ locationData, menuItems, availableCategories }: MenuPageMobileProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter items
  const filteredItems = useMemo(() => {
    let filtered = menuItems

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.ingredients.some((ing) => ing.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [menuItems, selectedCategory, searchQuery])

  // Group items by category
  const groupedItems = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {}
    
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = []
      }
      groups[item.category].push(item)
    })
    
    return groups
  }, [filteredItems])

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setIsFilterOpen(false)
  }

  const activeFiltersCount = selectedCategory !== "all" ? 1 : 0

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  const selectedCategoryName = selectedCategory === "all" 
    ? "Todos" 
    : availableCategories.find(cat => cat.id === selectedCategory)?.name || "Todos"

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Fixed Header with gradient */}
      <div 
        className="fixed top-0 left-0 right-0 z-40 border-b shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${locationData.theme.primary}, ${locationData.theme.accent})`,
        }}
      >
        <div className="px-4 py-3">
          {/* Header with title */}
          {!showSearch && (
            <div className="mb-3">
              <h1 className="text-xl font-bold text-white">Menú de {locationData.name}</h1>
              <p className="text-sm text-white/70">{filteredItems.length} platos disponibles</p>
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <Link href={`/${locationData.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              
              {/* Search or Menu Toggle */}
              <div className="flex-1 flex items-center gap-2">
                {showSearch ? (
                  <div className="flex-1 flex items-center gap-2 animate-in slide-in-from-right duration-200">
                    <Input
                      ref={searchInputRef}
                      type="search"
                      placeholder="Buscar platos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/60 focus:bg-white/30"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setShowSearch(false)
                        setSearchQuery("")
                      }}
                      className="text-white hover:bg-white/20 flex-shrink-0"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                      <SheetTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="gap-2 text-white hover:bg-white/20 border-white/20"
                        >
                          <Menu className="h-4 w-4" />
                          <span className="font-medium">{selectedCategoryName}</span>
                          {activeFiltersCount > 0 && (
                            <Badge 
                              variant="secondary" 
                              className="ml-1 h-5 px-1 text-xs"
                              style={{ backgroundColor: locationData.theme.accent, color: locationData.theme.text }}
                            >
                              {activeFiltersCount}
                            </Badge>
                          )}
                        </Button>
                      </SheetTrigger>
                  <SheetContent side="left" className="w-[85%] max-w-sm p-0">
                    <SheetHeader className="p-6 border-b">
                      <SheetTitle className="text-xl">Categorías</SheetTitle>
                      <SheetDescription>
                        Selecciona una categoría para filtrar el menú
                      </SheetDescription>
                    </SheetHeader>
                    <div className="h-full flex flex-col">
                      <div className="flex-1 overflow-y-auto">
                        <div className="p-4 space-y-1">
                          <button
                            onClick={() => handleCategoryChange("all")}
                            className={cn(
                              "w-full text-left p-4 rounded-lg transition-colors flex items-center justify-between",
                              selectedCategory === "all" 
                                ? "bg-gray-100 dark:bg-gray-700" 
                                : "hover:bg-gray-50 dark:hover:bg-gray-800"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">🍽️</span>
                              <span className="font-medium">Todos los Platos</span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </button>
                          {availableCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => handleCategoryChange(category.id)}
                              className={cn(
                                "w-full text-left p-4 rounded-lg transition-colors flex items-center justify-between",
                                selectedCategory === category.id 
                                  ? "bg-gray-100 dark:bg-gray-700" 
                                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{category.icon}</span>
                                <span className="font-medium">{category.name}</span>
                              </div>
                              <ChevronRight className="h-5 w-5 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                    </Sheet>
                  </>
                )}
              </div>
            </div>
            
            {/* Search button - always visible when not searching */}
            {!showSearch && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="text-white hover:bg-white/20 flex-shrink-0"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content with padding for fixed header */}
      <div className="pt-32 pb-20">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No se encontraron platos
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Intenta buscar con otros términos o cambia la categoría
            </p>
          </div>
        ) : (
          <div className="px-4 py-4 space-y-6">
            {selectedCategory === "all" ? (
              // Show by categories
              Object.entries(groupedItems).map(([categoryId, items]) => {
                const category = menuCategories.find((cat) => cat.id === categoryId)
                if (items.length === 0) return null

                return (
                  <div key={categoryId}>
                    <div className="mb-4">
                      <h2 className="text-lg font-bold flex items-center gap-2">
                        <span>{category?.icon}</span>
                        <span style={{ color: locationData.theme.primary }}>{category?.name}</span>
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {items.map((item) => (
                        <MenuItemCardMobile
                          key={item.id}
                          item={item}
                          onClick={() => handleItemClick(item)}
                          locationTheme={locationData.theme}
                        />
                      ))}
                    </div>
                  </div>
                )
              })
            ) : (
              // Show flat list
              <div className="grid grid-cols-1 gap-3">
                {filteredItems.map((item) => (
                  <MenuItemCardMobile
                    key={item.id}
                    item={item}
                    onClick={() => handleItemClick(item)}
                    locationTheme={locationData.theme}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Menu Item Modal */}
      <MenuItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedItem(null)
        }}
        locationTheme={locationData.theme}
      />

      {/* Back to Top */}
      <BackToTop />
    </div>
  )
}