"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { LocationSwitcher } from "@/components/admin/location-switcher"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Package, DollarSign, AlertCircle,
  Loader2,
  MapPin, ArrowRight,
  ExternalLink
} from "lucide-react"
import { toast } from "sonner"
import type { User } from "@supabase/supabase-js"

// Quick action card component
function QuickActionCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  color,
  gradient
}: { 
  title: string
  description: string
  icon: any
  href: string
  color: string
  gradient?: string
}) {
  return (
    <Link href={href}>
      <Card className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden relative ${gradient}`}>
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform`}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function AdminDashboard() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [currentLocation, setCurrentLocation] = useState<'arbol' | '1898' | 'capriccio'>('arbol')
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inactive: 0,
    avgPrice: 0,
    outOfStockProducts: [] as any[]
  })

  const fetchDashboardData = async (location: string) => {
    try {
      setLoading(true)
      
      // Fetch products stats
      const { data: products, error: productsError } = await supabase
        .from(`menu_${location}`)
        .select('*')
      
      if (productsError) throw productsError
      
      // Fetch categories (shared across all locations)
      const { data: categories, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .eq('active', true)
        .order('display_order')
      
      if (categoriesError) throw categoriesError
      
      // Calculate stats
      const totalProducts = products?.length || 0
      const outOfStock = products?.filter(p => p.stock_status === 'out_of_stock').length || 0
      const inactive = products?.filter(p => !p.active).length || 0
      const avgPrice = products?.reduce((sum, p) => sum + Number(p.price), 0) / (totalProducts || 1) || 0
      
      // Get out of stock products for recent activity
      const outOfStockProducts = products
        ?.filter(p => p.stock_status === 'out_of_stock')
        .map(p => {
          const category = categories?.find(c => c.id === p.category_id)
          return {
            name: p.name,
            category: category?.name || 'Sin categoría',
            price: p.price
          }
        })
        .slice(0, 10) || [] // Show up to 10 out of stock items
      
      setStats({
        totalProducts,
        outOfStock,
        inactive,
        avgPrice,
        outOfStockProducts
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Error al cargar datos del dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDashboardData(currentLocation)
  }, [currentLocation])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
          <p className="text-muted-foreground font-medium">Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground">Resumen general del restaurante</p>
      </div>
        
        {/* Location Switcher */}
        <LocationSwitcher 
          currentLocation={currentLocation}
          onLocationChange={setCurrentLocation}
        />
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-primary/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Productos Activos</p>
                  <p className="text-3xl font-bold mt-2 text-foreground">
                    {stats.totalProducts - stats.inactive}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    de {stats.totalProducts} totales
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-destructive/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sin Stock</p>
                  <p className="text-3xl font-bold mt-2 text-destructive">
                    {stats.outOfStock}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    requieren atención
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-destructive/10 backdrop-blur-sm">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card/95 to-chart-2/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Precio Promedio</p>
                  <p className="text-3xl font-bold mt-2 text-foreground">
                    ${(stats.avgPrice / 1000).toFixed(0)}k
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    por producto
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-chart-2/10 backdrop-blur-sm">
                  <DollarSign className="h-6 w-6 text-chart-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
            <span className="h-1 w-8 bg-gradient-to-r from-primary to-chart-3 rounded-full"></span>
            Acciones Rápidas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickActionCard
              title="Gestionar Productos"
              description="Agregar, editar o eliminar"
              icon={Package}
              href="/admin/products"
              color="bg-primary/10 text-primary"
              gradient="bg-gradient-to-br from-card to-primary/5"
            />
            <QuickActionCard
              title="Gestionar Categorías"
              description="Organizar el menú"
              icon={Layers}
              href="/admin/categories"
              color="bg-chart-4/10 text-chart-4"
              gradient="bg-gradient-to-br from-card to-chart-4/5"
            />
            <QuickActionCard
              title="Horarios y Ubicaciones"
              description="Actualizar información"
              icon={MapPin}
              href="/admin/locations"
              color="bg-chart-2/10 text-chart-2"
              gradient="bg-gradient-to-br from-card to-chart-2/5"
            />
            <QuickActionCard
              title="Ver Sitio Web"
              description="Vista previa pública"
              icon={ExternalLink}
              href="/"
              color="bg-accent/10 text-accent-foreground"
              gradient="bg-gradient-to-br from-card to-accent/5"
            />
          </div>
        </div>
        
        {/* Out of Stock Products */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
            <span className="h-1 w-8 bg-gradient-to-r from-destructive to-chart-3 rounded-full"></span>
            Productos Sin Stock
          </h2>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-destructive/3">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-destructive/10">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <span className="text-lg">Requieren Atención Inmediata</span>
                </span>
                {stats.outOfStockProducts.length > 0 && (
                  <Badge variant="destructive" className="px-3 py-1">
                    {stats.outOfStockProducts.length} {stats.outOfStockProducts.length === 1 ? 'producto' : 'productos'}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats.outOfStockProducts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="inline-flex p-4 rounded-full bg-chart-2/10 mb-4">
                    <Package className="h-12 w-12 text-chart-2" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">¡Excelente! Todos los productos están en stock</p>
                  <p className="text-xs text-muted-foreground mt-1">El inventario está al día</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {stats.outOfStockProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card rounded-xl border border-destructive/20 hover:border-destructive/40 transition-colors">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-foreground">{product.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">
                          ${Math.floor(Number(product.price) / 1000)}.{(Number(product.price) % 1000).toString().padStart(3, '0')}
                        </p>
                        <Link href="/admin/products">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="mt-2 h-8 text-xs hover:bg-destructive/10 hover:text-destructive"
                          >
                            Gestionar
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

// Import Layers icon that was missing
import { Layers } from "lucide-react"