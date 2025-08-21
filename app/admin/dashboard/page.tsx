"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase-menu"
import { LocationSwitcher } from "@/components/admin/location-switcher"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Package, DollarSign, AlertCircle, ShoppingBag, 
  TrendingUp, TrendingDown, Loader2, Clock, Users,
  MapPin, Calendar, ArrowRight, Activity, Star,
  BarChart3, PieChart, Eye, ExternalLink
} from "lucide-react"
import { toast } from "sonner"
import type { User } from "@supabase/supabase-js"

// Quick action card component
function QuickActionCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  color 
}: { 
  title: string
  description: string
  icon: any
  href: string
  color: string 
}) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-all cursor-pointer group">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            <div className={`p-3 rounded-lg ${color} group-hover:scale-110 transition-transform`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [currentLocation, setCurrentLocation] = useState<'arbol' | '1898' | 'capriccio'>('arbol')
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inactive: 0,
    avgPrice: 0,
    lowStockCount: 0,
    categoriesCount: 0,
    todayViews: 0,
    weeklyViews: 0,
    popularProducts: [] as any[],
    recentActivity: [] as any[],
    categoryBreakdown: [] as any[]
  })

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
          router.push('/admin/login')
        } else {
          setUser(user)
          fetchDashboardData()
        }
      } catch (error) {
        console.error('Auth error:', error)
        router.push('/admin/login')
      }
    }
    checkAuth()
  }, [router])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Fetch products stats
      const { data: products, error: productsError } = await supabase
        .from(`menu_${currentLocation}`)
        .select(`
          *,
          categories!inner(
            id,
            name
          )
        `)
      
      if (productsError) throw productsError
      
      // Fetch categories
      const { data: categories, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .eq('location', currentLocation)
      
      if (categoriesError) throw categoriesError
      
      // Calculate stats
      const totalProducts = products?.length || 0
      const outOfStock = products?.filter(p => p.stock_status === 'out_of_stock').length || 0
      const inactive = products?.filter(p => !p.active).length || 0
      const avgPrice = products?.reduce((sum, p) => sum + Number(p.price), 0) / (totalProducts || 1) || 0
      
      // Get category breakdown
      const categoryBreakdown = categories?.map(cat => ({
        name: cat.name,
        count: products?.filter(p => p.categories?.id === cat.id).length || 0,
        percentage: ((products?.filter(p => p.categories?.id === cat.id).length || 0) / (totalProducts || 1) * 100).toFixed(1)
      })).sort((a, b) => b.count - a.count) || []
      
      // Get popular products (mock data - you could track actual views)
      const popularProducts = products
        ?.filter(p => p.active && p.stock_status !== 'out_of_stock')
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map(p => ({
          name: p.name,
          category: p.categories?.name,
          price: p.price,
          views: Math.floor(Math.random() * 100) + 20
        })) || []
      
      // Recent activity (mock data - you could track actual changes)
      const activities = [
        { action: 'Producto actualizado', item: 'Pizza Margherita', time: '5 min', icon: Package },
        { action: 'Stock agotado', item: 'Lasagna Bolognese', time: '15 min', icon: AlertCircle },
        { action: 'Nuevo pedido', item: 'Mesa #12', time: '30 min', icon: ShoppingBag },
        { action: 'Categoría agregada', item: 'Bebidas Especiales', time: '1 hora', icon: Layers },
        { action: 'Horario actualizado', item: 'Viernes', time: '2 horas', icon: Clock }
      ]
      
      setStats({
        totalProducts,
        outOfStock,
        inactive,
        avgPrice,
        lowStockCount: outOfStock,
        categoriesCount: categories?.length || 0,
        todayViews: Math.floor(Math.random() * 500) + 100,
        weeklyViews: Math.floor(Math.random() * 3500) + 1000,
        popularProducts,
        recentActivity: activities,
        categoryBreakdown
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Error al cargar datos del dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user) {
      fetchDashboardData()
    }
  }, [currentLocation])

  if (!user || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-gray-600" />
          <p className="text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Resumen general del restaurante</p>
        </div>
        
        {/* Location Switcher */}
        <LocationSwitcher 
          currentLocation={currentLocation}
          onLocationChange={setCurrentLocation}
        />
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Productos Activos</p>
                  <p className="text-3xl font-bold mt-1">
                    {stats.totalProducts - stats.inactive}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    de {stats.totalProducts} totales
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-blue-100">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sin Stock</p>
                  <p className="text-3xl font-bold mt-1 text-red-600">
                    {stats.outOfStock}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    requieren atención
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-red-100">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Precio Promedio</p>
                  <p className="text-3xl font-bold mt-1">
                    ${(stats.avgPrice / 1000).toFixed(0)}k
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    por producto
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Vistas Hoy</p>
                  <p className="text-3xl font-bold mt-1">
                    {stats.todayViews}
                  </p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% vs ayer
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-purple-100">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickActionCard
              title="Gestionar Productos"
              description="Agregar, editar o eliminar"
              icon={Package}
              href="/admin/products"
              color="bg-blue-500"
            />
            <QuickActionCard
              title="Gestionar Categorías"
              description="Organizar el menú"
              icon={Layers}
              href="/admin/categories"
              color="bg-purple-500"
            />
            <QuickActionCard
              title="Horarios y Ubicaciones"
              description="Actualizar información"
              icon={MapPin}
              href="/admin/locations"
              color="bg-green-500"
            />
            <QuickActionCard
              title="Ver Sitio Web"
              description="Vista previa pública"
              icon={ExternalLink}
              href="/"
              color="bg-orange-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Popular Products */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Productos Populares
                </span>
                <Link href="/admin/products">
                  <Button variant="ghost" size="sm">
                    Ver todos
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.popularProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        ${Math.floor(Number(product.price) / 1000)}.{(Number(product.price) % 1000).toString().padStart(3, '0')}
                      </p>
                      <p className="text-xs text-gray-500">{product.views} vistas</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Distribución por Categoría
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.categoryBreakdown.slice(0, 5).map((cat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{cat.name}</span>
                      <span className="text-sm text-gray-600">{cat.count} ({cat.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <Icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.item}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Import Layers icon that was missing
import { Layers } from "lucide-react"