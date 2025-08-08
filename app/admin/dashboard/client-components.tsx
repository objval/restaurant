"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { LocationSwitcher } from "@/components/admin/location-switcher"
import { CategoryFilter } from "@/components/admin/category-filter"
import { QuickStats } from "@/components/admin/quick-stats"

export function LocationSwitcherClient({ initialLocation }: { initialLocation: 'arbol' | '1898' | 'capriccio' }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const handleLocationChange = (newLocation: 'arbol' | '1898' | 'capriccio') => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('location', newLocation)
    console.log(`[LocationSwitcher] Changing to ${newLocation}`)
    router.push(`${pathname}?${params.toString()}`)
  }
  
  return (
    <LocationSwitcher
      currentLocation={initialLocation}
      onLocationChange={handleLocationChange}
    />
  )
}

export function CategoryFilterClient({ 
  selectedCategory, 
  location
}: { 
  selectedCategory: string
  location: 'arbol' | '1898' | 'capriccio'
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    console.log(`[CategoryFilter] Changing to ${category}`)
    router.push(`${pathname}?${params.toString()}`)
  }
  
  return (
    <CategoryFilter
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange}
      location={location}
    />
  )
}

export function QuickStatsClient({ 
  location
}: { 
  location: 'arbol' | '1898' | 'capriccio'
}) {
  return <QuickStats location={location} />
}