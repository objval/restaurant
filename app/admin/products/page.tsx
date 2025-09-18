"use client"

import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
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
  Loader2, ChevronLeft, ChevronRight,
  Download
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
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-card/95 to-muted/5 ${!isActive ? 'opacity-60' : ''}`}>
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
      <div className="absolute top-2 right-2 z-10">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-primary/10 rounded-full"
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
  const supabase = createClientComponentClient()
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
  // Adjusted to account for the "New Product" card on first page
  const baseItemsPerPage = 15
  const itemsPerPage = currentPage === 1 ? baseItemsPerPage - 1 : baseItemsPerPage
  
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
      
      // Fetch products
      const { data: productsData, error: productsError } = await supabase
        .from(`menu_${currentLocation}`)
        .select('*')
        .order('name')
      
      if (productsError) throw productsError
      
      // Fetch categories for this location
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .eq('location', currentLocation)
        .eq('active', true)
        .order('display_order')
      
      if (categoriesError) throw categoriesError
      
      // Format products with category names
      const formatted = (productsData || []).map(product => {
        const category = categoriesData?.find(c => c.id === product.category_id)
        return {
          ...product,
          category_name: category?.name || 'Sin categoría',
          category_id: product.category_id || null
        }
      })
      
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
    // Adjust for the "New Product" card on first page
    const offset = currentPage === 1 ? 0 : -1 // Account for the extra card on page 1
    const startIndex = (currentPage - 1) * baseItemsPerPage + offset
    const endIndex = startIndex + itemsPerPage
    return filteredAndSortedProducts.slice(startIndex, endIndex)
  }, [filteredAndSortedProducts, currentPage, itemsPerPage, baseItemsPerPage])

  const totalPages = Math.ceil((filteredAndSortedProducts.length + 1) / baseItemsPerPage) // +1 for the "New Product" card

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
          <p className="text-muted-foreground font-medium">Cargando productos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">Gestión de Productos</h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={exportProducts}
            className="rounded-full hover:bg-accent/10 hover:text-accent-foreground border-border/50"
          >
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          </div>
          
          {/* Location Switcher */}
          <LocationSwitcher 
            currentLocation={currentLocation}
            onLocationChange={setCurrentLocation}
          />
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-primary/5 backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Productos</p>
                  <p className="text-2xl font-bold mt-1 text-foreground">{stats.totalProducts}</p>
                </div>
                <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-destructive/5 backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sin Stock</p>
                  <p className="text-2xl font-bold mt-1 text-destructive">{stats.outOfStock}</p>
                </div>
                <div className="p-3 rounded-xl bg-destructive/10 backdrop-blur-sm">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-muted/10 backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Inactivos</p>
                  <p className="text-2xl font-bold mt-1 text-muted-foreground">{stats.inactive}</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/20 backdrop-blur-sm">
                  <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-chart-2/5 backdrop-blur-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Precio Promedio</p>
                  <p className="text-2xl font-bold mt-1 text-foreground">${(stats.avgPrice / 1000).toFixed(0)}k</p>
                </div>
                <div className="p-3 rounded-xl bg-chart-2/10 backdrop-blur-sm">
                  <DollarSign className="h-6 w-6 text-chart-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filters and Search */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-card/95 to-muted/5">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="pl-10 pr-10 border-border/50 focus:border-primary/50 bg-background/50"
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
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card/95 to-muted/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-primary to-chart-3 rounded-full"></span>
                Productos ({filteredAndSortedProducts.length})
              </h3>
              <p className="text-sm text-muted-foreground">
                {isMobile ? '15 por página' : '30 por página'}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <div className="p-4 rounded-full bg-primary/10 mx-auto w-fit mb-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
                <p className="text-muted-foreground font-medium">Cargando productos...</p>
              </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="p-4 rounded-full bg-muted/20 mx-auto w-fit mb-4">
                  <Package className="h-12 w-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground font-medium">No se encontraron productos</p>
                {(filterCategory !== 'all' || filterStatus !== 'all' || filterActive !== 'all' || searchQuery) && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 rounded-full hover:bg-primary/10 hover:text-primary"
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
                  {/* New Product Card */}
                  {currentPage === 1 && (
                    <Card 
                      className="border-2 border-dashed border-primary/30 hover:border-primary/50 bg-gradient-to-br from-card/50 to-primary/5 cursor-pointer hover:shadow-xl transition-all duration-300 group"
                      onClick={() => {
                        setEditingProduct(null)
                        setEditDialogOpen(true)
                      }}
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                          <Plus className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">Agregar Producto</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Haz clic para crear un nuevo producto
                        </p>
                      </CardContent>
                    </Card>
                  )}
                  
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
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50 pt-4">
                    <div className="text-sm text-muted-foreground">
                      Mostrando {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)} de {filteredAndSortedProducts.length} productos
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
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
                              className={`w-8 h-8 p-0 rounded-full ${
                                currentPage === pageNum 
                                  ? 'bg-gradient-to-r from-primary to-chart-3 text-white border-0 shadow-md' 
                                  : 'hover:bg-primary/10 hover:text-primary'
                              }`}
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
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
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