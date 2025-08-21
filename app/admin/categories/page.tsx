"use client"

import { useState, useEffect, useCallback } from "react"
import { supabase } from "@/lib/supabase-menu"
import { LocationSwitcher } from "@/components/admin/location-switcher"
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
import { 
  Edit, Plus, Layers, GripVertical, Save, Trash2, 
  AlertCircle, Package, ChevronUp, ChevronDown,
  Eye, Loader2, ArrowUpDown
} from "lucide-react"
import { toast } from "sonner"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

interface Category {
  id: string
  slug: string
  name: string
  description: string | null
  icon: string | null
  display_order: number | null
  active: boolean | null
  location: string
  created_at: string | null
  updated_at: string | null
  product_count?: number
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [currentLocation, setCurrentLocation] = useState<'arbol' | '1898' | 'capriccio'>('arbol')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [showEmpty, setShowEmpty] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    icon: '',
    display_order: 0,
    active: true
  })

  // Fetch categories with product count
  const fetchCategories = useCallback(async () => {
    setLoading(true)
    try {
      // First get categories for this location
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .eq('location', currentLocation)
        .order('display_order')
      
      if (categoriesError) throw categoriesError
      
      // Then get product counts
      const { data: productsData, error: productsError } = await supabase
        .from(`menu_${currentLocation}`)
        .select('category_id')
      
      if (productsError) throw productsError
      
      // Count products per category
      const productCounts = productsData?.reduce((acc, product) => {
        if (product.category_id) {
          acc[product.category_id] = (acc[product.category_id] || 0) + 1
        }
        return acc
      }, {} as Record<string, number>) || {}
      
      // Merge product counts with categories and add location
      const categoriesWithCounts = (categoriesData || []).map(cat => ({
        ...cat,
        location: currentLocation,
        product_count: productCounts[cat.id] || 0
      }))
      
      setCategories(categoriesWithCounts)
    } catch (error) {
      console.error('Error fetching categories:', error)
      toast.error('Error al cargar categorías')
    } finally {
      setLoading(false)
    }
  }, [currentLocation])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

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
      slug: category.slug.replace(`_${currentLocation}`, ''), // Remove location suffix for editing
      description: category.description || '',
      icon: category.icon || '',
      display_order: category.display_order || 0,
      active: category.active ?? true
    })
    setIsCreateDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingCategory(null)
    const maxOrder = Math.max(...categories.map(c => c.display_order || 0), 0)
    setFormData({
      name: '',
      slug: '',
      description: '',
      icon: '🍽️',
      display_order: maxOrder + 1,
      active: true
    })
    setIsCreateDialogOpen(true)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const slug = formData.slug || generateSlug(formData.name)
      const finalSlug = `${slug}_${currentLocation}` // Add location suffix
      
      if (editingCategory) {
        // Update existing category
        const { error } = await supabase
          .from('categories')
          .update({
            name: formData.name,
            slug: finalSlug,
            description: formData.description || null,
            icon: formData.icon || null,
            display_order: formData.display_order,
            active: formData.active,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingCategory.id)
          .eq('location', currentLocation) // Ensure we're updating the right location's category
        
        if (error) throw error
        toast.success('Categoría actualizada exitosamente')
      } else {
        // Create new category
        const { error } = await supabase
          .from('categories')
          .insert({
            name: formData.name,
            slug: finalSlug,
            description: formData.description || null,
            icon: formData.icon || '🍽️',
            display_order: formData.display_order,
            active: formData.active,
            location: currentLocation
          })
        
        if (error) throw error
        toast.success('Categoría creada exitosamente')
      }
      
      fetchCategories()
      setIsCreateDialogOpen(false)
      setEditingCategory(null)
    } catch (error: any) {
      console.error('Error saving category:', error)
      if (error.message?.includes('duplicate')) {
        toast.error('Ya existe una categoría con ese nombre')
      } else if (error.message?.includes('permission')) {
        toast.error('No tienes permisos para realizar esta acción')
      } else {
        toast.error(`Error al guardar: ${error.message}`)
      }
    } finally {
      setSaving(false)
    }
  }

  const handleToggleActive = async (category: Category) => {
    try {
      const { error } = await supabase
        .from('categories')
        .update({ active: !category.active })
        .eq('id', category.id)
      
      if (error) throw error
      
      // Optimistic update
      setCategories(prev => prev.map(c => 
        c.id === category.id ? { ...c, active: !c.active } : c
      ))
      
      toast.success(category.active ? 'Categoría desactivada' : 'Categoría activada')
    } catch (error: any) {
      console.error('Error toggling category:', error)
      toast.error('Error al actualizar categoría')
      fetchCategories() // Revert on error
    }
  }

  const handleDelete = async (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId)
    if (!category) return
    
    if (category.product_count && category.product_count > 0) {
      toast.error(`No se puede eliminar: Esta categoría tiene ${category.product_count} productos`)
      setDeleteConfirmId(null)
      return
    }
    
    try {
      // Delete the category
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', categoryId)
        .eq('location', currentLocation)
      
      if (error) {
        console.error('Delete error details:', error)
        throw error
      }
      
      toast.success('Categoría eliminada correctamente')
      setDeleteConfirmId(null)
      await fetchCategories()
    } catch (error: any) {
      console.error('Error deleting category:', error)
      if (error.code === '23503') {
        toast.error('No se puede eliminar: Esta categoría tiene productos asociados')
      } else if (error.message?.includes('permission')) {
        toast.error('No tienes permisos para eliminar categorías')
      } else {
        toast.error(`Error al eliminar: ${error.message || 'Error desconocido'}`)
      }
      setDeleteConfirmId(null)
    }
  }

  const handleDragEnd = async (result: any) => {
    if (!result.destination) return
    
    const items = Array.from(categories)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    
    // Update display_order for all affected items
    const updatedItems = items.map((item, index) => ({
      ...item,
      display_order: index
    }))
    
    setCategories(updatedItems)
    
    // Save new order to database
    try {
      const updates = updatedItems.map(item => 
        supabase
          .from('categories')
          .update({ display_order: item.display_order })
          .eq('id', item.id)
      )
      
      await Promise.all(updates)
      toast.success('Orden actualizado')
    } catch (error) {
      console.error('Error updating order:', error)
      toast.error('Error al actualizar orden')
      fetchCategories() // Revert on error
    }
  }

  const moveCategory = async (categoryId: string, direction: 'up' | 'down') => {
    const index = categories.findIndex(c => c.id === categoryId)
    if (index === -1) return
    
    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= categories.length) return
    
    const items = [...categories]
    const [movedItem] = items.splice(index, 1)
    items.splice(newIndex, 0, movedItem)
    
    // Update display_order
    const updatedItems = items.map((item, idx) => ({
      ...item,
      display_order: idx
    }))
    
    setCategories(updatedItems)
    
    // Save to database
    try {
      await Promise.all([
        supabase
          .from('categories')
          .update({ display_order: updatedItems[index].display_order })
          .eq('id', updatedItems[index].id),
        supabase
          .from('categories')
          .update({ display_order: updatedItems[newIndex].display_order })
          .eq('id', updatedItems[newIndex].id)
      ])
    } catch (error) {
      console.error('Error updating order:', error)
      fetchCategories()
    }
  }

  // Filter categories based on showEmpty
  const displayedCategories = showEmpty ? categories : categories.filter(c => c.product_count && c.product_count > 0)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
          <p className="text-muted-foreground font-medium">Cargando categorías...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Gestión de Categorías
          </h1>
          <Button 
            onClick={handleCreate}
            className="rounded-full bg-gradient-to-r from-primary to-chart-3 text-white hover:shadow-lg hover:scale-105 transition-all"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nueva Categoría
          </Button>
        </div>
        
        {/* Location Switcher */}
        <LocationSwitcher 
          currentLocation={currentLocation}
          onLocationChange={setCurrentLocation}
        />
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card/95 to-primary/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Categorías</p>
                <p className="text-2xl font-bold mt-1">{categories.length}</p>
              </div>
              <div className="p-3 rounded-xl bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card/95 to-chart-2/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Activas</p>
                <p className="text-2xl font-bold mt-1 text-chart-2">
                  {categories.filter(c => c.active).length}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-chart-2/10">
                <Eye className="h-6 w-6 text-chart-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card/95 to-destructive/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sin Productos</p>
                <p className="text-2xl font-bold mt-1 text-destructive">
                  {categories.filter(c => !c.product_count || c.product_count === 0).length}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Filter Toggle */}
      <Card className="mb-6 border-0 shadow-lg bg-gradient-to-br from-card/95 to-muted/5">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Switch
                checked={showEmpty}
                onCheckedChange={setShowEmpty}
              />
              <Label className="cursor-pointer" onClick={() => setShowEmpty(!showEmpty)}>
                Mostrar categorías vacías
              </Label>
            </div>
            <Badge variant="outline" className="px-3">
              {displayedCategories.length} categorías visibles
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      {/* Categories List with Drag and Drop */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card/95 to-muted/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpDown className="h-5 w-5" />
            Categorías del Menú
            <Badge variant="secondary" className="ml-auto">
              Arrastra para reordenar
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="categories">
              {(provided) => (
                <div 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="divide-y divide-border"
                >
                  {displayedCategories.map((category, index) => (
                    <Draggable 
                      key={category.id} 
                      draggableId={category.id} 
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`p-4 transition-all ${
                            snapshot.isDragging 
                              ? 'bg-primary/10 shadow-lg' 
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {/* Drag Handle */}
                            <div {...provided.dragHandleProps}>
                              <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                            </div>
                            
                            {/* Icon */}
                            <div className="text-2xl flex-shrink-0">
                              {category.icon || '📁'}
                            </div>
                            
                            {/* Category Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-semibold">{category.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {category.slug.replace(`_${currentLocation}`, '')}
                                </Badge>
                                {!category.active && (
                                  <Badge variant="secondary" className="text-xs">
                                    Inactiva
                                  </Badge>
                                )}
                                {category.product_count === 0 && (
                                  <Badge variant="destructive" className="text-xs">
                                    Sin productos
                                  </Badge>
                                )}
                                {category.product_count && category.product_count > 0 && (
                                  <Badge className="text-xs bg-chart-2/10 text-chart-2 hover:bg-chart-2/20">
                                    <Package className="h-3 w-3 mr-1" />
                                    {category.product_count} productos
                                  </Badge>
                                )}
                              </div>
                              {category.description && (
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                                  {category.description}
                                </p>
                              )}
                            </div>
                            
                            {/* Mobile Order Controls */}
                            <div className="flex sm:hidden flex-col gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => moveCategory(category.id, 'up')}
                                disabled={index === 0}
                              >
                                <ChevronUp className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => moveCategory(category.id, 'down')}
                                disabled={index === displayedCategories.length - 1}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            {/* Actions */}
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={category.active ?? true}
                                onCheckedChange={() => handleToggleActive(category)}
                              />
                              
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit(category)}
                                className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              
                              {deleteConfirmId === category.id ? (
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDelete(category.id)}
                                    className="h-8 text-xs"
                                  >
                                    Confirmar
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setDeleteConfirmId(null)}
                                    className="h-8 text-xs"
                                  >
                                    Cancelar
                                  </Button>
                                </div>
                              ) : (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => setDeleteConfirmId(category.id)}
                                  className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
                                  disabled={!!category.product_count && category.product_count > 0}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          
          {displayedCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex p-4 rounded-full bg-muted/20 mb-4">
                <Layers className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">
                {showEmpty ? 'No hay categorías creadas' : 'Todas las categorías tienen productos'}
              </p>
              {!showEmpty && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => setShowEmpty(true)}
                >
                  Mostrar todas las categorías
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
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
                  className="border-border/50 focus:border-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="icon">Icono</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  placeholder="Ej: 🍕"
                  className="border-border/50 focus:border-primary/50"
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
                className="border-border/50 focus:border-primary/50"
              />
              <p className="text-xs text-muted-foreground">
                Se agregará automáticamente el sufijo &quot;_{currentLocation}&quot;
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe esta categoría..."
                rows={3}
                className="border-border/50 focus:border-primary/50 resize-none"
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-br from-card to-muted/5">
              <div>
                <p className="font-medium">Categoría Activa</p>
                <p className="text-sm text-muted-foreground">Los productos de esta categoría serán visibles</p>
              </div>
              <Switch
                checked={formData.active}
                onCheckedChange={(checked) => setFormData({...formData, active: checked})}
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsCreateDialogOpen(false)}
              disabled={saving}
              className="rounded-full"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSave}
              disabled={saving}
              className="rounded-full bg-gradient-to-r from-primary to-chart-3 text-white hover:shadow-lg"
            >
              {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog for mobile */}
      <Dialog open={!!deleteConfirmId && window.innerWidth < 640} onOpenChange={() => setDeleteConfirmId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar esta categoría? Esta acción no se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
              Cancelar
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
            >
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}