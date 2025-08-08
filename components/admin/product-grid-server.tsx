import { Suspense } from "react"
import { getProducts } from "@/app/admin/actions"
import { ProductCardServer } from "./product-card-server"
import { ProductFilters } from "./product-filters"
import { Button } from "@/components/ui/button"
import { Plus, Package, Loader2 } from "lucide-react"

interface ProductGridServerProps {
  location: 'arbol' | '1898' | 'capriccio'
  searchParams: {
    category?: string
    search?: string
    status?: 'all' | 'active' | 'inactive'
    stock?: 'all' | 'in_stock' | 'out_of_stock'
    sort?: 'name' | 'price_asc' | 'price_desc' | 'recent'
  }
}

async function ProductList({ location, searchParams }: ProductGridServerProps) {
  console.log(`[ProductGrid] Fetching products for ${location} with params:`, searchParams)
  
  const products = await getProducts(location)
  
  // Apply filters
  let filtered = [...products]
  
  // Category filter
  if (searchParams.category && searchParams.category !== 'all') {
    filtered = filtered.filter(p => {
      const categoryData = p as any
      return categoryData.category_slug === searchParams.category
    })
  }
  
  // Search filter
  if (searchParams.search) {
    const query = searchParams.search.toLowerCase()
    filtered = filtered.filter(p => 
      p.name?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query)
    )
  }
  
  // Status filter
  if (searchParams.status === 'active') {
    filtered = filtered.filter(p => p.active)
  } else if (searchParams.status === 'inactive') {
    filtered = filtered.filter(p => !p.active)
  }
  
  // Stock filter
  if (searchParams.stock === 'in_stock') {
    filtered = filtered.filter(p => p.stock_status === 'in_stock')
  } else if (searchParams.stock === 'out_of_stock') {
    filtered = filtered.filter(p => p.stock_status === 'out_of_stock')
  }
  
  // Sorting
  if (searchParams.sort === 'name') {
    filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
  } else if (searchParams.sort === 'price_asc') {
    filtered.sort((a, b) => Number(a.price) - Number(b.price))
  } else if (searchParams.sort === 'price_desc') {
    filtered.sort((a, b) => Number(b.price) - Number(a.price))
  } else if (searchParams.sort === 'recent') {
    filtered.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime())
  }
  
  console.log(`[ProductGrid] Filtered ${filtered.length} products from ${products.length} total`)
  
  if (filtered.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No se encontraron productos</p>
        <Button variant="outline" className="mt-4">
          <Plus className="h-4 w-4 mr-2" />
          Crear primer producto
        </Button>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map((product) => (
        <ProductCardServer
          key={product.id}
          product={product}
          location={location}
          onEdit={() => {}}
        />
      ))}
    </div>
  )
}

export function ProductGridServer({ location, searchParams }: ProductGridServerProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Productos
            </h3>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Producto
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-gray-200 px-6 py-4">
        <ProductFilters location={location} />
      </div>

      {/* Products List with Suspense */}
      <div className="p-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                <p className="text-gray-600">Cargando productos...</p>
              </div>
            </div>
          }
        >
          <ProductList location={location} searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}