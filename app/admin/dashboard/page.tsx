"use client"

import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase-menu"
import { toggleProductStock, toggleProductActive } from "../actions"
import { LocationSwitcher } from "@/components/admin/location-switcher"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Plus, Package, DollarSign, Search, X, AlertCircle, 
  ShoppingBag, Edit, MoreVertical, Trash,
  TrendingDown, TrendingUp, Loader2, ChevronLeft, ChevronRight 
} from "lucide-react"
import { toast } from "sonner"
import { useDebounce } from "@/lib/hooks/use-debounce"
import { ProductEditDialog } from "@/components/admin/product-edit-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { User } from "@supabase/supabase-js"

// Memoized Stats Component
const StatsCards = memo(({ stats }: { stats: any }) => {
  const cards = [
    {
      label: 'Total Productos',
      value: stats.totalProducts,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: null
    },
    {
      label: 'Sin Stock',
      value: stats.outOfStock,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      trend: stats.outOfStock > 0 ? 'up' : null,
      trendColor: 'text-red-500'
    },
    {
      label: 'Inactivos',
      value: stats.inactive,
      icon: ShoppingBag,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      trend: null
    },
    {
      label: 'Precio Promedio',
      value: `$${(stats.avgPrice / 1000).toFixed(0)}k`,
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: null
    }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600">{card.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  {card.trend && (
                    <span className={`text-xs ${card.trendColor || 'text-gray-500'}`}>
                      {card.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    </span>
                  )}
                </div>
              </div>
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <Icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})
StatsCards.displayName = 'StatsCards'

// Memoized Product Card Component
const ProductCard = memo(({ 
  product, 
  onToggleStock, 
  onToggleActive, 
  onEdit, 
  onDelete 
}: any) => {
  const [updating, setUpdating] = useState(false)
  const isOutOfStock = product.stock_status === 'out_of_stock'
  const isActive = product.active ?? true

  const handleStock = useCallback(async () => {
    if (updating) return
    setUpdating(true)
    await onToggleStock(product.id, product.stock_status || 'in_stock')
    setUpdating(false)
  }, [updating, onToggleStock, product.id, product.stock_status])

  const handleActive = useCallback(async () => {
    if (updating) return
    setUpdating(true)
    await onToggleActive(product.id, isActive)
    setUpdating(false)
  }, [updating, onToggleActive, product.id, isActive])

  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-md ${!isActive ? 'opacity-60' : ''}`}>
      {/* Status badges */}
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        {isOutOfStock && (
          <Badge variant="destructive" className="text-xs">Sin Stock</Badge>
        )}
        {!isActive && (
          <Badge variant="secondary" className="text-xs">Inactivo</Badge>
        )}
      </div>
      
      {/* Menu button - Fixed z-index and portal rendering */}
      <div className="absolute top-2 right-2">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="z-50">
            <DropdownMenuItem onClick={() => onEdit(product)}>
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600 focus:text-red-600"
              onClick={() => onDelete(product.id)}
            >
              <Trash className="mr-2 h-4 w-4" />
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <CardHeader className="pb-3 pt-12">
        <h4 className="font-semibold text-base line-clamp-1 pr-8">{product.name}</h4>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description || 'Sin descripción'}
        </p>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-400" />
            <span className="font-bold text-lg">
              ${Math.floor(Number(product.price) / 1000)}.{(Number(product.price) % 1000).toString().padStart(3, '0')}
            </span>
          </div>
          {product.category_name && (
            <Badge variant="outline" className="text-xs">
              {product.category_name}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-3 bg-gray-50/50">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-gray-400" />
            <Switch
              checked={!isOutOfStock}
              disabled={updating}
              onCheckedChange={handleStock}
              className="scale-90 data-[state=checked]:bg-green-600"
            />
            <span className="text-xs text-gray-600">
              {isOutOfStock ? 'Agotado' : 'En Stock'}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Activo</span>
            <Switch
              checked={isActive}
              disabled={updating}
              onCheckedChange={handleActive}
              className="scale-90"
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
})
ProductCard.displayName = 'ProductCard'

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [currentLocation, setCurrentLocation] = useState<'arbol' | '1898' | 'capriccio'>('arbol')
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_stock' | 'out_of_stock'>('all')
  const [filterActive, setFilterActive] = useState<'all' | 'active' | 'inactive'>('all')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'stock'>('name')
  const [stats, setStats] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inactive: 0,
    avgPrice: 0
  })
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const itemsPerPage = isMobile ? 15 : 30
  
  const debouncedSearch = useDebounce(searchQuery, 300)
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Check auth only once
  useEffect(() => {
    if (!isInitialized) {
      const checkAuth = async () => {
        try {
          const { data: { user } } = await supabase.auth.getUser()
          if (!user) {
            router.push('/admin/login')
          } else {
            setUser(user)
            setIsInitialized(true)
          }
        } catch (error) {
          console.error('Auth error:', error)
          router.push('/admin/login')
        }
      }
      checkAuth()
    }
  }, [isInitialized, router])

  // Optimized fetch with caching
  const fetchProducts = useCallback(async () => {
    if (!isInitialized) return
    
    setLoading(true)
    
    try {
      const table = `menu_${currentLocation}_with_categories` as const
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('name')
      
      if (error) throw error
      
      setProducts(data || [])
      
      // Calculate stats
      if (data && data.length > 0) {
        const totalProducts = data.length
        const outOfStock = data.filter((p: any) => p.stock_status === 'out_of_stock').length
        const inactive = data.filter((p: any) => !p.active).length
        const avgPrice = data.reduce((sum: number, p: any) => sum + Number(p.price), 0) / data.length
        
        setStats({
          totalProducts,
          outOfStock,
          inactive,
          avgPrice
        })
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      toast.error('Error al cargar productos')
    } finally {
      setLoading(false)
    }
  }, [currentLocation, isInitialized])

  // Fetch products when location changes
  useEffect(() => {
    if (isInitialized) {
      fetchProducts()
    }
  }, [fetchProducts, isInitialized])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearch, filterStatus, filterActive, sortBy, currentLocation])

  // Optimized filtering and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products]
    
    // Apply search filter
    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase()
      filtered = filtered.filter(product => 
        product.name?.toLowerCase().includes(query) || 
        product.description?.toLowerCase().includes(query) ||
        product.category_name?.toLowerCase().includes(query)
      )
    }
    
    // Apply stock filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(product => 
        filterStatus === 'in_stock' 
          ? product.stock_status !== 'out_of_stock'
          : product.stock_status === 'out_of_stock'
      )
    }
    
    // Apply active filter
    if (filterActive !== 'all') {
      filtered = filtered.filter(product => 
        filterActive === 'active' ? product.active : !product.active
      )
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return Number(b.price) - Number(a.price)
        case 'stock':
          return (a.stock_status === 'out_of_stock' ? 1 : 0) - (b.stock_status === 'out_of_stock' ? 1 : 0)
        default:
          return a.name.localeCompare(b.name)
      }
    })
    
    return filtered
  }, [products, debouncedSearch, filterStatus, filterActive, sortBy])

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredAndSortedProducts.slice(startIndex, endIndex)
  }, [filteredAndSortedProducts, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage)

  // Optimized handlers with batch updates
  const handleToggleStock = useCallback(async (productId: string, currentStock: string) => {
    const newStock = currentStock === 'in_stock' ? 'out_of_stock' : 'in_stock'
    
    // Optimistic update
    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, stock_status: newStock } : p
    ))
    
    try {
      // Use server action instead of direct Supabase call
      const result = await toggleProductStock(currentLocation, productId, currentStock)
      
      if (!result.success) throw new Error('Failed to update stock')
      
      toast.success(newStock === 'in_stock' ? 'Producto en stock' : 'Producto agotado')
      
      // Update stats
      setStats(prev => ({
        ...prev,
        outOfStock: prev.outOfStock + (newStock === 'out_of_stock' ? 1 : -1)
      }))
    } catch (error: any) {
      console.error('Error updating stock:', error)
      toast.error(`Error al actualizar stock`)
      // Revert on error
      setProducts(prev => prev.map(p => 
        p.id === productId ? { ...p, stock_status: currentStock } : p
      ))
    }
  }, [currentLocation])

  const handleToggleActive = useCallback(async (productId: string, currentActive: boolean) => {
    const table = `menu_${currentLocation}` as const
    const newActive = !currentActive
    
    // Optimistic update
    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, active: newActive } : p
    ))
    
    try {
      // Use server action instead of direct Supabase call
      const result = await toggleProductActive(currentLocation, productId, currentActive)
      
      if (!result.success) throw new Error('Failed to update active status')
      
      toast.success(newActive ? 'Producto activado' : 'Producto desactivado')
      
      // Update stats
      setStats(prev => ({
        ...prev,
        inactive: prev.inactive + (newActive ? -1 : 1)
      }))
    } catch (error: any) {
      console.error('Error updating active:', error)
      toast.error(`Error al actualizar estado`)
      // Revert on error
      setProducts(prev => prev.map(p => 
        p.id === productId ? { ...p, active: currentActive } : p
      ))
    }
  }, [currentLocation])

  const handleEdit = useCallback((product: any) => {
    setEditingProduct(product)
    setEditDialogOpen(true)
  }, [])

  const handleDelete = useCallback(async (productId: string) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return
    
    try {
      const { error } = await supabase
  .from(`menu_${currentLocation}`)
        .delete()
        .eq('id', productId)
      
      if (error) throw error
      
      toast.success('Producto eliminado')
      setProducts(prev => prev.filter(p => p.id !== productId))
    } catch (error: any) {
      console.error('Error deleting product:', error)
      toast.error(`Error al eliminar`)
    }
  }, [currentLocation])

  if (!user || !isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-gray-600" />
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Location Switcher */}
        <LocationSwitcher 
          currentLocation={currentLocation}
          onLocationChange={setCurrentLocation}
        />
        
        {/* Stats Cards */}
        <div className="mt-6">
          <StatsCards stats={stats} />
        </div>
        
        {/* Filters and Search Bar */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="pl-10 pr-10 h-12"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            
            {/* Filters */}
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Stock" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todo Stock</SelectItem>
                  <SelectItem value="in_stock">En Stock</SelectItem>
                  <SelectItem value="out_of_stock">Sin Stock</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterActive} onValueChange={(value: any) => setFilterActive(value)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Activos</SelectItem>
                  <SelectItem value="inactive">Inactivos</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Ordenar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre</SelectItem>
                  <SelectItem value="price">Precio</SelectItem>
                  <SelectItem value="stock">Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Productos ({filteredAndSortedProducts.length})
              </h3>
              <Button 
                size="sm" 
                className="gap-2"
                onClick={() => {
                  setEditingProduct(null)
                  setEditDialogOpen(true)
                }}
              >
                <Plus className="h-4 w-4" />
                Nuevo
              </Button>
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-gray-600 mx-auto" />
                <p className="text-gray-600 mt-4">Cargando...</p>
              </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No se encontraron productos</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onToggleStock={handleToggleStock}
                      onToggleActive={handleToggleActive}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-6 flex items-center justify-between border-t pt-4">
                    <div className="text-sm text-gray-600">
                      Mostrando {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)} de {filteredAndSortedProducts.length} productos
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                      </Button>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum
                          if (totalPages <= 5) {
                            pageNum = i + 1
                          } else if (currentPage <= 3) {
                            pageNum = i + 1
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i
                          } else {
                            pageNum = currentPage - 2 + i
                          }
                          
                          return (
                            <Button
                              key={pageNum}
                              variant={currentPage === pageNum ? "default" : "outline"}
                              size="sm"
                              className="w-8 h-8 p-0"
                              onClick={() => setCurrentPage(pageNum)}
                            >
                              {pageNum}
                            </Button>
                          )
                        })}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Siguiente
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      <ProductEditDialog
        product={editingProduct}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSuccess={fetchProducts}
        location={currentLocation}
      />
    </div>
  )
}