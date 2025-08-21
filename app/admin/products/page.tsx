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
  TrendingDown, TrendingUp, Loader2, ChevronLeft, ChevronRight,
  Filter, Download, Upload, BarChart3
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
      
      {/* Menu button */}
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
              onCheckedChange={handleStock}
              disabled={updating}
              className="data-[state=checked]:bg-green-500"
            />
            <span className="text-xs text-gray-600">Stock</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-gray-400" />
            <Switch
              checked={isActive}
              onCheckedChange={handleActive}
              disabled={updating}
            />
            <span className="text-xs text-gray-600">Activo</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
})
ProductCard.displayName = 'ProductCard'

export default function ProductsPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [currentLocation, setCurrentLocation] = useState<'arbol' | '1898' | 'capriccio'>('arbol')
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_stock' | 'out_of_stock'>('all')
  const [filterActive, setFilterActive] = useState<'all' | 'active' | 'inactive'>('all')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'stock' | 'category'>('name')
  
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

  // Fetch products and categories
  const fetchProducts = useCallback(async () => {
    if (!currentLocation) return
    
    try {
      setLoading(true)
      
      // Fetch products with categories
      const { data: productsData, error: productsError } = await supabase
        .from(`menu_${currentLocation}`)
        .select(`
          *,
          categories!inner(
            id,
            name,
            display_order
          )
        `)
        .order('name')
      
      if (productsError) throw productsError
      
      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .eq('location', currentLocation)
        .order('display_order')
      
      if (categoriesError) throw categoriesError
      
      // Format products
      const formatted = (productsData || []).map(product => ({
        ...product,
        category_name: product.categories?.name || 'Sin categoría',
        category_id: product.categories?.id || null
      }))
      
      setProducts(formatted)
      setCategories(categoriesData || [])
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
  }, [debouncedSearch, filterStatus, filterActive, filterCategory, sortBy, currentLocation])

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
    
    // Apply category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.category_id === filterCategory)
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
        case 'category':
          return a.category_name.localeCompare(b.category_name)
        default:
          return a.name.localeCompare(b.name)
      }
    })
    
    return filtered
  }, [products, debouncedSearch, filterStatus, filterActive, filterCategory, sortBy])

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredAndSortedProducts.slice(startIndex, endIndex)
  }, [filteredAndSortedProducts, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage)

  // Stats
  const stats = useMemo(() => {
    const totalProducts = products.length
    const outOfStock = products.filter(p => p.stock_status === 'out_of_stock').length
    const inactive = products.filter(p => !p.active).length
    const avgPrice = products.reduce((sum, p) => sum + Number(p.price), 0) / (totalProducts || 1)
    
    const categoryStats = categories.map(cat => ({
      name: cat.name,
      count: products.filter(p => p.category_id === cat.id).length
    }))
    
    return { totalProducts, outOfStock, inactive, avgPrice, categoryStats }
  }, [products, categories])

  // Handlers
  const handleToggleStock = useCallback(async (productId: string, currentStock: string) => {
    const newStock = currentStock === 'in_stock' ? 'out_of_stock' : 'in_stock'
    
    // Optimistic update
    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, stock_status: newStock } : p
    ))
    
    try {
      const result = await toggleProductStock(currentLocation, productId, currentStock)
      if (!result.success) throw new Error('Failed to update stock')
      toast.success(newStock === 'in_stock' ? 'Producto en stock' : 'Producto agotado')
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
    const newActive = !currentActive
    
    // Optimistic update
    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, active: newActive } : p
    ))
    
    try {
      const result = await toggleProductActive(currentLocation, productId, currentActive)
      if (!result.success) throw new Error('Failed to update active status')
      toast.success(newActive ? 'Producto activado' : 'Producto desactivado')
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

  const exportProducts = useCallback(() => {
    const csv = [
      ['Nombre', 'Descripción', 'Precio', 'Categoría', 'Stock', 'Activo'],
      ...filteredAndSortedProducts.map(p => [
        p.name,
        p.description || '',
        `$${(Number(p.price) / 1000).toFixed(3)}`,
        p.category_name,
        p.stock_status === 'out_of_stock' ? 'Sin Stock' : 'En Stock',
        p.active ? 'Sí' : 'No'
      ])
    ].map(row => row.join(',')).join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `productos-${currentLocation}-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Productos exportados')
  }, [filteredAndSortedProducts, currentLocation])

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
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Gestión de Productos</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={exportProducts}>
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <Button 
                size="sm" 
                onClick={() => {
                  setEditingProduct(null)
                  setEditDialogOpen(true)
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Producto
              </Button>
            </div>
          </div>
          
          {/* Location Switcher */}
          <LocationSwitcher 
            currentLocation={currentLocation}
            onLocationChange={setCurrentLocation}
          />
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Productos</p>
                  <p className="text-2xl font-bold">{stats.totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sin Stock</p>
                  <p className="text-2xl font-bold text-red-600">{stats.outOfStock}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Inactivos</p>
                  <p className="text-2xl font-bold text-gray-600">{stats.inactive}</p>
                </div>
                <ShoppingBag className="h-8 w-8 text-gray-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Precio Promedio</p>
                  <p className="text-2xl font-bold">${(stats.avgPrice / 1000).toFixed(0)}k</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="pl-10 pr-10"
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
              <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-full lg:w-[150px]">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name} ({stats.categoryStats.find(s => s.name === cat.name)?.count || 0})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
                  <SelectTrigger className="w-full lg:w-[140px]">
                    <SelectValue placeholder="Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todo Stock</SelectItem>
                    <SelectItem value="in_stock">En Stock</SelectItem>
                    <SelectItem value="out_of_stock">Sin Stock</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterActive} onValueChange={(value: any) => setFilterActive(value)}>
                  <SelectTrigger className="w-full lg:w-[140px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Activos</SelectItem>
                    <SelectItem value="inactive">Inactivos</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                  <SelectTrigger className="w-full lg:w-[140px]">
                    <SelectValue placeholder="Ordenar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nombre</SelectItem>
                    <SelectItem value="price">Precio</SelectItem>
                    <SelectItem value="stock">Stock</SelectItem>
                    <SelectItem value="category">Categoría</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Active filters display */}
            {(filterCategory !== 'all' || filterStatus !== 'all' || filterActive !== 'all' || searchQuery) && (
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="text-sm text-gray-600">Filtros activos:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Búsqueda: {searchQuery}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                  </Badge>
                )}
                {filterCategory !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    {categories.find(c => c.id === filterCategory)?.name}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilterCategory('all')} />
                  </Badge>
                )}
                {filterStatus !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    {filterStatus === 'in_stock' ? 'En Stock' : 'Sin Stock'}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilterStatus('all')} />
                  </Badge>
                )}
                {filterActive !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    {filterActive === 'active' ? 'Activos' : 'Inactivos'}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setFilterActive('all')} />
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Products Grid */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Productos ({filteredAndSortedProducts.length})
              </h3>
              <p className="text-sm text-gray-600">
                {isMobile ? '15 por página' : '30 por página'}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-gray-600 mx-auto" />
                <p className="text-gray-600 mt-4">Cargando productos...</p>
              </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No se encontraron productos</p>
                {(filterCategory !== 'all' || filterStatus !== 'all' || filterActive !== 'all' || searchQuery) && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('')
                      setFilterCategory('all')
                      setFilterStatus('all')
                      setFilterActive('all')
                    }}
                  >
                    Limpiar filtros
                  </Button>
                )}
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
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4">
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
                        <span className="hidden sm:inline">Anterior</span>
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
                        <span className="hidden sm:inline">Siguiente</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
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