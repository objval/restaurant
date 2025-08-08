"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase-menu"
import { AdminHeader } from "@/components/admin/admin-header"
import { LocationSwitcher } from "@/components/admin/location-switcher"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Package, DollarSign, Search, X, AlertCircle, ShoppingBag, Edit, MoreVertical, Trash } from "lucide-react"
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
import type { User } from "@supabase/supabase-js"

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
  const [stats, setStats] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inactive: 0,
    avgPrice: 0
  })
  
  const debouncedSearch = useDebounce(searchQuery, 300)

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

  // Fetch products with useCallback to prevent recreating function
  const fetchProducts = useCallback(async () => {
    if (!isInitialized) return
    
    setLoading(true)
    console.log(`Fetching products for ${currentLocation}`)
    
    try {
      const table = `menu_${currentLocation}_with_categories` as const
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('name')
      
      if (error) throw error
      
      console.log(`Loaded ${data?.length || 0} products`)
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

  // Filter products
  const filteredProducts = products.filter(product => {
    if (!debouncedSearch) return true
    
    const query = debouncedSearch.toLowerCase()
    return (
      product.name?.toLowerCase().includes(query) || 
      product.description?.toLowerCase().includes(query)
    )
  })

  // Handle toggle with error prevention
  const handleToggleStock = async (productId: string, currentStock: string) => {
    console.log('===== STOCK TOGGLE START =====')
    console.log('Product ID:', productId)
    console.log('Current Stock:', currentStock)
    console.log('Current Location:', currentLocation)
    
    // IMPORTANT: Update the base table, not the view
    const table = `menu_${currentLocation}` as const
    const newStock = currentStock === 'in_stock' ? 'out_of_stock' : 'in_stock'
    
    console.log('Table:', table)
    console.log('New Stock Status:', newStock)
    console.log('Products before update:', products.find(p => p.id === productId))
    
    // Optimistic update
    setProducts(prev => {
      const updated = prev.map(p => 
        p.id === productId ? { ...p, stock_status: newStock } : p
      )
      console.log('Optimistic update - Product after:', updated.find(p => p.id === productId))
      return updated
    })
    
    try {
      console.log('Sending update to Supabase...')
      console.log('Query:', `UPDATE ${table} SET stock_status = '${newStock}' WHERE id = '${productId}'`)
      
      // Update the base table directly
      const { data, error } = await supabase
        .from(table)
        .update({ stock_status: newStock })
        .eq('id', productId)
        .select()
        .single()
      
      console.log('Supabase response - Data:', data)
      console.log('Supabase response - Error:', error)
      
      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        throw error
      }
      
      console.log('✅ Stock update successful!')
      toast.success(newStock === 'in_stock' ? 'Producto en stock' : 'Producto agotado')
      
      // Verify the update by fetching from view
      const { data: verifyData } = await supabase
        .from(`${table}_with_categories`)
        .select('id, stock_status')
        .eq('id', productId)
        .single()
      
      console.log('Verification from view:', verifyData)
      
    } catch (error: any) {
      console.error('❌ Error updating stock:', error)
      toast.error(`Error al actualizar stock: ${error.message || 'Error desconocido'}`)
      
      // Revert on error
      console.log('Reverting to original stock:', currentStock)
      setProducts(prev => {
        const reverted = prev.map(p => 
          p.id === productId ? { ...p, stock_status: currentStock } : p
        )
        console.log('Reverted product:', reverted.find(p => p.id === productId))
        return reverted
      })
    }
    
    console.log('===== STOCK TOGGLE END =====')
  }

  const handleToggleActive = async (productId: string, currentActive: boolean) => {
    console.log('===== ACTIVE TOGGLE START =====')
    console.log('Product ID:', productId)
    console.log('Current Active:', currentActive)
    console.log('Current Location:', currentLocation)
    
    // IMPORTANT: Update the base table, not the view
    const table = `menu_${currentLocation}` as const
    const newActive = !currentActive
    
    console.log('Table:', table)
    console.log('New Active Status:', newActive)
    
    // Optimistic update
    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, active: newActive } : p
    ))
    
    try {
      console.log('Sending active update to Supabase...')
      
      const { data, error } = await supabase
        .from(table)
        .update({ active: newActive })
        .eq('id', productId)
        .select()
        .single()
      
      console.log('Supabase response - Data:', data)
      console.log('Supabase response - Error:', error)
      
      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        throw error
      }
      
      console.log('✅ Active update successful!')
      toast.success(newActive ? 'Producto activado' : 'Producto desactivado')
    } catch (error: any) {
      console.error('❌ Error updating active:', error)
      toast.error(`Error al actualizar estado: ${error.message || 'Error desconocido'}`)
      // Revert on error
      setProducts(prev => prev.map(p => 
        p.id === productId ? { ...p, active: currentActive } : p
      ))
    }
    
    console.log('===== ACTIVE TOGGLE END =====')
  }

  const handleEdit = (product: any) => {
    setEditingProduct(product)
    setEditDialogOpen(true)
  }

  const handleDelete = async (productId: string) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return
    
    const table = `menu_${currentLocation}`
    
    try {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', productId)
      
      if (error) throw error
      
      toast.success('Producto eliminado')
      fetchProducts()
    } catch (error: any) {
      console.error('Error deleting product:', error)
      toast.error(`Error al eliminar: ${error.message}`)
    }
  }

  if (!user || !isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={user} />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Location Switcher */}
        <LocationSwitcher 
          currentLocation={currentLocation}
          onLocationChange={setCurrentLocation}
        />
        
        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Productos</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalProducts}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sin Stock</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.outOfStock}</p>
              </div>
              <div className="p-3 rounded-lg bg-red-50">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Inactivos</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.inactive}</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <ShoppingBag className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Precio Promedio</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ${(stats.avgPrice / 1000).toFixed(0)}k
                </p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mt-6 relative">
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
        
        {/* Products Grid */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Productos ({filteredProducts.length})
              </h3>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Nuevo
              </Button>
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 mx-auto" />
                <p className="text-gray-600 mt-4">Cargando...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No se encontraron productos</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
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

// Enhanced Product Card Component
function ProductCard({ product, onToggleStock, onToggleActive, onEdit, onDelete }: any) {
  const [updating, setUpdating] = useState(false)
  const isOutOfStock = product.stock_status === 'out_of_stock'
  const isActive = product.active ?? true

  const handleStock = async () => {
    if (updating) return
    setUpdating(true)
    await onToggleStock(product.id, product.stock_status || 'in_stock')
    setUpdating(false)
  }

  const handleActive = async () => {
    if (updating) return
    setUpdating(true)
    await onToggleActive(product.id, isActive)
    setUpdating(false)
  }

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
      <div className="absolute top-2 right-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(product)}>
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600"
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
              ${(Number(product.price) / 1000).toFixed(0)}.{(Number(product.price) % 1000).toString().padStart(3, '0')}
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
}