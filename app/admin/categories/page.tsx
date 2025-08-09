"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Plus, Layers, GripVertical, Save } from "lucide-react"
import type { Tables } from "@/lib/database.types"

type Category = Tables<'categories'>

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    icon: '',
    display_order: 0,
    active: true
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order')
    
    if (!error) {
      setCategories(data || [])
    }
    setLoading(false)
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      icon: category.icon || '',
      display_order: category.display_order || 0,
      active: category.active ?? true
    })
    setIsCreateDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingCategory(null)
    setFormData({
      name: '',
      slug: '',
      description: '',
      icon: '🍽️',
      display_order: categories.length,
      active: true
    })
    setIsCreateDialogOpen(true)
  }

  const handleSave = async () => {
    if (editingCategory) {
      // Update existing category
      const { error } = await supabase
        .from('categories')
        .update({
          ...formData,
          slug: formData.slug || generateSlug(formData.name)
        })
        .eq('id', editingCategory.id)
      
      if (!error) {
        fetchCategories()
        setIsCreateDialogOpen(false)
      }
    } else {
      // Create new category
      const { error } = await supabase
        .from('categories')
        .insert({
          ...formData,
          slug: formData.slug || generateSlug(formData.name)
        })
      
      if (!error) {
        fetchCategories()
        setIsCreateDialogOpen(false)
      }
    }
  }

  const handleToggleActive = async (category: Category) => {
    const { error } = await supabase
      .from('categories')
      .update({ active: !category.active })
      .eq('id', category.id)
    
    if (!error) {
      fetchCategories()
    }
  }

  const handleUpdateOrder = async (categoryId: string, newOrder: number) => {
    const { error } = await supabase
      .from('categories')
      .update({ display_order: newOrder })
      .eq('id', categoryId)
    
    if (!error) {
      fetchCategories()
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-5xl">
        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                <CardTitle className="text-lg sm:text-xl">Gestión de Categorías</CardTitle>
              </div>
              <Button onClick={handleCreate} size="sm" className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Categoría
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="divide-y">
              {categories.map((category) => (
                <div key={category.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col gap-4">
                    {/* Main content row */}
                    <div className="flex items-start gap-3">
                      <GripVertical className="h-5 w-5 text-gray-400 cursor-move mt-1 hidden sm:block" />
                      
                      <div className="text-2xl flex-shrink-0">{category.icon}</div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold truncate">{category.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {category.slug}
                          </Badge>
                          {!category.active && (
                            <Badge variant="secondary" className="text-xs">
                              Inactivo
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {category.description || 'Sin descripción'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Controls row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pl-9 sm:pl-12">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Orden:</span>
                        <Input
                          type="number"
                          value={category.display_order || 0}
                          onChange={(e) => handleUpdateOrder(category.id, Number(e.target.value))}
                          className="w-14 h-8 text-center text-sm"
                        />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={category.active ?? true}
                          onCheckedChange={() => handleToggleActive(category)}
                        />
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(category)}
                          className="h-8 w-8"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingCategory ? 'Editar Categoría' : 'Nueva Categoría'}
            </DialogTitle>
            <DialogDescription>
              {editingCategory 
                ? 'Modifica los detalles de la categoría'
                : 'Crea una nueva categoría para organizar los productos'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej: Pizzas"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="icon">Icono</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  placeholder="Ej: 🍕"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                placeholder="Se genera automáticamente"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe esta categoría..."
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Categoría Activa</p>
                <p className="text-sm text-gray-500">Los productos de esta categoría serán visibles</p>
              </div>
              <Switch
                checked={formData.active}
                onCheckedChange={(checked) => setFormData({...formData, active: checked})}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}