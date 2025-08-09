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
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface ProductEditDialogProps {
  product: any | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
  location: 'arbol' | '1898' | 'capriccio'
}

export function ProductEditDialog({ 
  product, 
  open, 
  onOpenChange, 
  onSuccess,
  location 
}: ProductEditDialogProps) {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<any[]>([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category_id: '',
    ingredients: '',
    allergens: '',
    dietary: '',
    spice_level: 0,
    prep_time: '',
    calories: '',
    chef_special: false,
    popular: false,
    seasonal: false
  })

  // Fetch categories when dialog opens
  useEffect(() => {
    if (open) {
      const fetchCategories = async () => {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .eq('active', true)
          .order('display_order')
        
        if (error) {
          console.error('Error fetching categories:', error)
        }
        setCategories(data || [])
      }
      fetchCategories()

      if (product) {
        setFormData({
          name: product.name || '',
          description: product.description || '',
          price: product.price || 0,
          category_id: product.category_id || '',
          ingredients: product.ingredients ? product.ingredients.join(', ') : '',
          allergens: product.allergens ? product.allergens.join(', ') : '',
          dietary: product.dietary ? product.dietary.join(', ') : '',
          spice_level: product.spice_level || 0,
          prep_time: product.prep_time || '',
          calories: product.calories || '',
          chef_special: product.chef_special || false,
          popular: product.popular || false,
          seasonal: product.seasonal || false
        })
      } else {
        // Reset form for new product
        setFormData({
          name: '',
          description: '',
          price: 0,
          category_id: '',
          ingredients: '',
          allergens: '',
          dietary: '',
          spice_level: 0,
          prep_time: '',
          calories: '',
          chef_special: false,
          popular: false,
          seasonal: false
        })
      }
    }
  }, [open, product, location])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setLoading(true)
    const table = `menu_${location}` as 'menu_arbol' | 'menu_1898' | 'menu_capriccio'
    
    try {
      if (product) {
        // Update existing product
        const { error } = await supabase
          .from(table)
          .update({
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
            category_id: formData.category_id || null,
            ingredients: formData.ingredients ? formData.ingredients.split(',').map(i => i.trim()).filter(Boolean) : null,
            allergens: formData.allergens ? formData.allergens.split(',').map(i => i.trim()).filter(Boolean) : null,
            dietary: formData.dietary ? formData.dietary.split(',').map(i => i.trim()).filter(Boolean) : null,
            spice_level: formData.spice_level || null,
            prep_time: formData.prep_time || null,
            calories: formData.calories ? Number(formData.calories) : null,
            chef_special: formData.chef_special,
            popular: formData.popular,
            seasonal: formData.seasonal,
            display_order: 0
          })
          .eq('id', product.id)
        
        if (error) throw error
        toast.success('Producto actualizado exitosamente')
      } else {
        // Create new product
        // Generate slug from name
        const slug = formData.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')

        const { error } = await supabase
          .from(table)
          .insert({
            slug: slug,
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
            category_id: formData.category_id || null,
            ingredients: formData.ingredients ? formData.ingredients.split(',').map(i => i.trim()).filter(Boolean) : null,
            allergens: formData.allergens ? formData.allergens.split(',').map(i => i.trim()).filter(Boolean) : null,
            dietary: formData.dietary ? formData.dietary.split(',').map(i => i.trim()).filter(Boolean) : null,
            spice_level: formData.spice_level || null,
            prep_time: formData.prep_time || null,
            calories: formData.calories ? Number(formData.calories) : null,
            chef_special: formData.chef_special,
            popular: formData.popular,
            seasonal: formData.seasonal,
            active: true,
            stock_status: 'in_stock',
            display_order: 0
          })
        
        if (error) throw error
        toast.success('Producto creado exitosamente')
      }
      
      onSuccess()
      onOpenChange(false)
    } catch (error: any) {
      console.error('Error saving product:', error)
      toast.error(`Error al ${product ? 'actualizar' : 'crear'}: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{product ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
            <DialogDescription>
              {product ? 'Modifica los detalles del producto' : 'Ingresa los detalles del nuevo producto'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Categoría</Label>
              <Select 
                value={formData.category_id} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, category_id: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="price">Precio (CLP)</Label>
              <Input
                id="price"
                type="text"
                value={formData.price === 0 ? '' : formData.price}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '')
                  setFormData(prev => ({ ...prev, price: value ? Number(value) : 0 }))
                }}
                placeholder="Ej: 7990"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="ingredients">Ingredientes (separados por coma)</Label>
              <Textarea
                id="ingredients"
                value={formData.ingredients}
                onChange={(e) => setFormData(prev => ({ ...prev, ingredients: e.target.value }))}
                placeholder="Ej: Base de licor, Cítricos, Especias mediterráneas"
                rows={2}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="allergens">Alérgenos (separados por coma)</Label>
              <Textarea
                id="allergens"
                value={formData.allergens}
                onChange={(e) => setFormData(prev => ({ ...prev, allergens: e.target.value }))}
                placeholder="Ej: Gluten, Lácteos, Frutos secos"
                rows={2}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="dietary">Restricciones Dietéticas (separadas por coma)</Label>
              <Textarea
                id="dietary"
                value={formData.dietary}
                onChange={(e) => setFormData(prev => ({ ...prev, dietary: e.target.value }))}
                placeholder="Ej: Vegetariano, Vegano, Sin Gluten"
                rows={2}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="prep_time">Tiempo de Preparación</Label>
                <Input
                  id="prep_time"
                  value={formData.prep_time}
                  onChange={(e) => setFormData(prev => ({ ...prev, prep_time: e.target.value }))}
                  placeholder="Ej: 5-7 min"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="calories">Calorías</Label>
                <Input
                  id="calories"
                  type="text"
                  value={formData.calories}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '')
                    setFormData(prev => ({ ...prev, calories: value }))
                  }}
                  placeholder="Ej: 180"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="spice_level">Nivel de Picante (0-5)</Label>
              <Select 
                value={String(formData.spice_level)} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, spice_level: Number(value) }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 - Sin picante</SelectItem>
                  <SelectItem value="1">1 - Muy suave</SelectItem>
                  <SelectItem value="2">2 - Suave</SelectItem>
                  <SelectItem value="3">3 - Medio</SelectItem>
                  <SelectItem value="4">4 - Picante</SelectItem>
                  <SelectItem value="5">5 - Muy picante</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="chef_special"
                  checked={formData.chef_special}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, chef_special: checked as boolean }))
                  }
                />
                <Label 
                  htmlFor="chef_special" 
                  className="text-sm font-normal cursor-pointer"
                >
                  Especial del Chef
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="popular"
                  checked={formData.popular}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, popular: checked as boolean }))
                  }
                />
                <Label 
                  htmlFor="popular" 
                  className="text-sm font-normal cursor-pointer"
                >
                  Popular
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="seasonal"
                  checked={formData.seasonal}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, seasonal: checked as boolean }))
                  }
                />
                <Label 
                  htmlFor="seasonal" 
                  className="text-sm font-normal cursor-pointer"
                >
                  De Temporada
                </Label>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {product ? 'Guardar' : 'Crear'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}