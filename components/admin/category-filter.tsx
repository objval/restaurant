"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase-menu"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Layers } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  location: 'arbol' | '1898' | 'capriccio'
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Array<{ id: string; name: string; slug: string; icon: string | null }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    
    const fetchCategories = async () => {
      if (!mounted) return
      
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .eq('active', true)
          .order('display_order')
        
        if (error) throw error
        
        if (mounted) {
          setCategories(data || [])
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }
    
    fetchCategories()
    
    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Layers className="h-5 w-5 text-gray-600" />
          <h3 className="font-medium text-gray-900">Categorías</h3>
        </div>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Layers className="h-5 w-5 text-gray-600" />
        <h3 className="font-medium text-gray-900">Categorías</h3>
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex gap-2 pb-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('all')}
            className={cn(
              "flex-shrink-0",
              selectedCategory === 'all' && "ring-2 ring-offset-1"
            )}
          >
            Todos
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.slug ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.slug)}
              className={cn(
                "flex-shrink-0 gap-1",
                selectedCategory === category.slug && "ring-2 ring-offset-1"
              )}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}