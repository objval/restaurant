"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useTransition } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SearchBarOptimized } from "./search-bar-optimized"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface ProductFiltersProps {
  location: 'arbol' | '1898' | 'capriccio'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProductFilters(_props: ProductFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  
  // Get current filter values
  const currentStatus = searchParams.get('status') || 'all'
  const currentStock = searchParams.get('stock') || 'all'
  const currentSort = searchParams.get('sort') || 'name'
  const currentSearch = searchParams.get('search') || ''
  
  // Update URL params
  const updateParams = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value === 'all' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    
    console.log(`[ProductFilters] Updating ${key} to ${value}`)
    
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`)
    })
  }, [pathname, router, searchParams])
  
  // Clear all filters
  const clearFilters = useCallback(() => {
    console.log('[ProductFilters] Clearing all filters')
    startTransition(() => {
      router.push(pathname)
    })
  }, [pathname, router])
  
  // Count active filters
  const activeFilters = [
    currentStatus !== 'all' && 'status',
    currentStock !== 'all' && 'stock',
    currentSearch && 'search',
  ].filter(Boolean).length
  
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <SearchBarOptimized
        onSearch={(query) => updateParams('search', query)}
        placeholder="Buscar por nombre o descripción..."
      />
      
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3">
        {/* Status Filter */}
        <Select
          value={currentStatus}
          onValueChange={(value) => updateParams('status', value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Activos</SelectItem>
            <SelectItem value="inactive">Inactivos</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Stock Filter */}
        <Select
          value={currentStock}
          onValueChange={(value) => updateParams('stock', value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Stock" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todo Stock</SelectItem>
            <SelectItem value="in_stock">En Stock</SelectItem>
            <SelectItem value="out_of_stock">Agotado</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Sort Options */}
        <Select
          value={currentSort}
          onValueChange={(value) => updateParams('sort', value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Nombre A-Z</SelectItem>
            <SelectItem value="price_asc">Precio ↑</SelectItem>
            <SelectItem value="price_desc">Precio ↓</SelectItem>
            <SelectItem value="recent">Más reciente</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Clear Filters */}
        {activeFilters > 0 && (
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={clearFilters}
          >
            <X className="h-3 w-3 mr-1" />
            Limpiar filtros ({activeFilters})
          </Badge>
        )}
      </div>
      
      {/* Loading indicator */}
      {isPending && (
        <div className="text-sm text-gray-500">
          Actualizando filtros...
        </div>
      )}
    </div>
  )
}