"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase-menu"
import { Package, AlertCircle, TrendingUp, DollarSign } from "lucide-react"

interface QuickStatsProps {
  location: 'arbol' | '1898' | 'capriccio'
}

export function QuickStats({ location }: QuickStatsProps) {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    outOfStock: 0,
    avgPrice: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    
    const fetchStats = async () => {
      if (!mounted) return
      
      setLoading(true)
      const table = `menu_${location}` as const
      
      try {
        // Get total and active products
        const { data: products, error } = await supabase
          .from(table)
          .select('active, stock_status, price')
        
        if (error) throw error
        
        if (!mounted) return
        
        const totalProducts = products?.length || 0
        const activeProducts = products?.filter(p => p.active).length || 0
        const outOfStock = products?.filter(p => p.stock_status === 'out_of_stock').length || 0
        const avgPrice = products?.length 
          ? products.reduce((sum, p) => sum + Number(p.price), 0) / products.length 
          : 0
        
        setStats({
          totalProducts,
          activeProducts,
          outOfStock,
          avgPrice
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }
    
    fetchStats()
    
    return () => {
      mounted = false
    }
  }, [location])

  const statCards = [
    {
      label: 'Total Productos',
      value: stats.totalProducts,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Productos Activos',
      value: stats.activeProducts,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Sin Stock',
      value: stats.outOfStock,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      label: 'Precio Promedio',
      value: `$${(stats.avgPrice / 1000).toFixed(0)}k`,
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  if (loading) {
    return (
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
            <div className="h-8 bg-gray-200 rounded w-16" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={cn("p-3 rounded-lg", stat.bgColor)}>
                <Icon className={cn("h-6 w-6", stat.color)} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}