"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, X, Plus } from "lucide-react"
import type { Tables, TablesInsert } from "@/lib/database.types"

type MenuItem = Tables<'menu_arbol'> | Tables<'menu_1898'> | Tables<'menu_capriccio'>

interface ProductEditorProps {
  isOpen: boolean
  onClose: () => void
  product: MenuItem | null
  location: 'arbol' | '1898' | 'capriccio'
  onSave: () => void
  isCreating: boolean
}

export function ProductEditor({ isOpen, onClose, product, location, onSave, isCreating }: ProductEditorProps) {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<Tables<'categories'>[]>([])
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: 0,
    category_id: '',
    prep_time: '15 min',
    ingredients: [] as string[],
    dietary: [] as string[],
    allergens: [] as string[],
    spice_level: 0,
    calories: 0,
    active: true,
    stock_status: 'in_stock' as 'in_stock' | 'out_of_stock',
    popular: false,
    chef_special: false,
    seasonal: false,
  })
  const [newIngredient, setNewIngredient] = useState('')
  const [newDietary, setNewDietary] = useState('')
  const [newAllergen, setNewAllergen] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    if (product && !isCreating) {
      setFormData({
        name: product.name || '',
        slug: product.slug || '',
        description: product.description || '',
        price: Number(product.price) || 0,
        category_id: product.category_id || '',
        prep_time: product.prep_time || '15 min',
        ingredients: product.ingredients || [],
        dietary: product.dietary || [],
        allergens: product.allergens || [],
        spice_level: product.spice_level || 0,
        calories: product.calories || 0,
        active: product.active ?? true,
        stock_status: (product.stock_status as 'in_stock' | 'out_of_stock') || 'in_stock',
        popular: product.popular || false,
        chef_special: product.chef_special || false,
        seasonal: product.seasonal || false,
      })
    } else if (isCreating) {
      // Reset form for new product
      setFormData({
        name: '',
        slug: '',
        description: '',
        price: 0,
        category_id: '',
        prep_time: '15 min',
        ingredients: [],
        dietary: [],
        allergens: [],
        spice_level: 0,
        calories: 0,
        active: true,
        stock_status: 'in_stock',
        popular: false,
        chef_special: false,
        seasonal: false,
      })
    }
  }, [product, isCreating])

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .eq('active', true)
      .order('display_order')
    
    setCategories(data || [])
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleSave = async () => {
    setLoading(true)
    const table = `menu_${location}` as 'menu_arbol' | 'menu_1898' | 'menu_capriccio'

    try {
      if (isCreating) {
        // Create new product
        const newProduct: TablesInsert<typeof table> = {
          ...formData,
          slug: formData.slug || generateSlug(formData.name),
        }
        
        const { error } = await supabase
          .from(table)
          .insert(newProduct)
        
        if (error) throw error
      } else if (product) {
        // Update existing product
        const { error } = await supabase
          .from(table)
          .update(formData)
          .eq('id', product.id)
        
        if (error) throw error
      }
      
      onSave()
    } catch (error) {
      console.error('Error saving product:', error)
    } finally {
      setLoading(false)
    }
  }

  const addItem = (type: 'ingredients' | 'dietary' | 'allergens', value: string) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [type]: [...prev[type], value.trim()]
      }))
      
      if (type === 'ingredients') setNewIngredient('')
      if (type === 'dietary') setNewDietary('')
      if (type === 'allergens') setNewAllergen('')
    }
  }

  const removeItem = (type: 'ingredients' | 'dietary' | 'allergens', index: number) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isCreating ? 'Crear Nuevo Producto' : 'Editar Producto'}
          </DialogTitle>
          <DialogDescription>
            {isCreating 
              ? 'Complete los detalles del nuevo producto'
              : 'Modifique los detalles del producto'}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="general" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="details">Detalles</TabsTrigger>
            <TabsTrigger value="status">Estado</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del Producto *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej: Pizza Margherita"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Precio (CLP) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                  placeholder="Ej: 12990"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe el producto..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Categoría *</Label>
                <Select
                  value={formData.category_id}
                  onValueChange={(value) => setFormData({...formData, category_id: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prep_time">Tiempo de Preparación</Label>
                <Input
                  id="prep_time"
                  value={formData.prep_time}
                  onChange={(e) => setFormData({...formData, prep_time: e.target.value})}
                  placeholder="Ej: 15 min"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Ingredientes</Label>
              <div className="flex gap-2">
                <Input
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  placeholder="Agregar ingrediente"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addItem('ingredients', newIngredient)
                    }
                  }}
                />
                <Button
                  type="button"
                  size="icon"
                  onClick={() => addItem('ingredients', newIngredient)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.ingredients.map((item, i) => (
                  <Badge key={i} variant="secondary" className="gap-1">
                    {item}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeItem('ingredients', i)}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="calories">Calorías</Label>
                <Input
                  id="calories"
                  type="number"
                  value={formData.calories}
                  onChange={(e) => setFormData({...formData, calories: Number(e.target.value)})}
                  placeholder="Ej: 450"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spice">Nivel de Picante (0-5)</Label>
                <Input
                  id="spice"
                  type="number"
                  min="0"
                  max="5"
                  value={formData.spice_level}
                  onChange={(e) => setFormData({...formData, spice_level: Number(e.target.value)})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Opciones Dietéticas</Label>
              <div className="flex gap-2">
                <Input
                  value={newDietary}
                  onChange={(e) => setNewDietary(e.target.value)}
                  placeholder="Ej: vegetariano, vegano"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addItem('dietary', newDietary)
                    }
                  }}
                />
                <Button
                  type="button"
                  size="icon"
                  onClick={() => addItem('dietary', newDietary)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.dietary.map((item, i) => (
                  <Badge key={i} variant="outline" className="gap-1">
                    {item}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeItem('dietary', i)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="status" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Producto Activo</p>
                  <p className="text-sm text-gray-500">El producto será visible en el menú</p>
                </div>
                <Switch
                  checked={formData.active}
                  onCheckedChange={(checked) => setFormData({...formData, active: checked})}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">En Stock</p>
                  <p className="text-sm text-gray-500">Disponible para ordenar</p>
                </div>
                <Switch
                  checked={formData.stock_status === 'in_stock'}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, stock_status: checked ? 'in_stock' : 'out_of_stock'})
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Popular</p>
                  <p className="text-sm text-gray-500">Mostrar badge de popular</p>
                </div>
                <Switch
                  checked={formData.popular}
                  onCheckedChange={(checked) => setFormData({...formData, popular: checked})}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Especial del Chef</p>
                  <p className="text-sm text-gray-500">Recomendación del chef</p>
                </div>
                <Switch
                  checked={formData.chef_special}
                  onCheckedChange={(checked) => setFormData({...formData, chef_special: checked})}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">De Temporada</p>
                  <p className="text-sm text-gray-500">Producto de temporada</p>
                </div>
                <Switch
                  checked={formData.seasonal}
                  onCheckedChange={(checked) => setFormData({...formData, seasonal: checked})}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancelar
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Guardando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Guardar
              </div>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}