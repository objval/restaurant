"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase-menu"
import { ProductCard } from "./product-card"
import { ProductEditor } from "./product-editor"
import { Button } from "@/components/ui/button"
import { Plus, Package } from "lucide-react"
import { toast } from "sonner"
import type { Tables } from "@/lib/database.types"

type MenuItem = Tables<'menu_arbol'> | Tables<'menu_1898'> | Tables<'menu_capriccio'>

interface ProductGridProps {
  location: 'arbol' | '1898' | 'capriccio'
  category: string
  searchQuery: string
}

export function ProductGrid({ location, category, searchQuery }: ProductGridProps) {
  const [products, setProducts] = useState<MenuItem[]>([])
  const [filteredProducts, setFilteredProducts] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const fetchProducts = async () => {
    setLoading(true)
    const table = `menu_${location}_with_categories` as const
    
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('category_display_order')
        .order('display_order')
        .order('name')
      
      if (error) throw error
      
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [location])

  useEffect(() => {
    let filtered = [...products]
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(p => {
        const categoryData = p as any
        return categoryData.category_slug === category
      })
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p => 
        p.name?.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      )
    }
    
    setFilteredProducts(filtered)
  }, [products, category, searchQuery])

  const handleToggleActive = async (productId: string, currentActive: boolean) => {
    // Optimistic update - update state immediately
    const newActiveStatus = !currentActive
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === productId ? { ...p, active: newActiveStatus } : p
      )
    )
    
    // Then update database
    const table = `menu_${location}` as const
    const { error } = await supabase
      .from(table)
      .update({ active: newActiveStatus })
      .eq('id', productId)
    
    if (error) {
      // Revert on error
      console.error('Error updating active status:', error)
      toast.error('Error al actualizar el estado')
      setProducts(prevProducts => 
        prevProducts.map(p => 
          p.id === productId ? { ...p, active: currentActive } : p
        )
      )
    } else {
      toast.success(newActiveStatus ? 'Producto activado' : 'Producto desactivado')
    }
  }

  const handleToggleStock = async (productId: string, currentStock: string) => {
    // Optimistic update - update state immediately
    const newStock = currentStock === 'in_stock' ? 'out_of_stock' : 'in_stock'
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === productId ? { ...p, stock_status: newStock } : p
      )
    )
    
    // Then update database
    const table = `menu_${location}` as const
    const { error } = await supabase
      .from(table)
      .update({ stock_status: newStock })
      .eq('id', productId)
    
    if (error) {
      // Revert on error
      console.error('Error updating stock status:', error)
      toast.error('Error al actualizar el stock')
      setProducts(prevProducts => 
        prevProducts.map(p => 
          p.id === productId ? { ...p, stock_status: currentStock } : p
        )
      )
    } else {
      toast.success(newStock === 'in_stock' ? 'Producto en stock' : 'Producto agotado')
    }
  }

  const handleEdit = (product: MenuItem) => {
    setSelectedProduct(product)
    setIsCreating(false)
    setIsEditorOpen(true)
  }

  const handleCreate = () => {
    setSelectedProduct(null)
    setIsCreating(true)
    setIsEditorOpen(true)
  }

  const handleSave = async () => {
    await fetchProducts()
    setIsEditorOpen(false)
    setSelectedProduct(null)
    setIsCreating(false)
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Productos ({filteredProducts.length})
              </h3>
            </div>
            <Button onClick={handleCreate} size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Nuevo Producto
            </Button>
          </div>
        </div>

        {/* Products List */}
        <div className="p-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No se encontraron productos</p>
              <Button onClick={handleCreate} variant="outline" className="mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Crear primer producto
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onToggleActive={handleToggleActive}
                  onToggleStock={handleToggleStock}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Editor Modal */}
      <ProductEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        product={selectedProduct}
        location={location}
        onSave={handleSave}
        isCreating={isCreating}
      />
    </>
  )
}