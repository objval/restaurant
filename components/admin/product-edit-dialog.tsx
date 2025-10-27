"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
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
import { 
  Loader2, Package, DollarSign, ChefHat, 
  Clock, Flame, AlertTriangle, Leaf,
  Star, Sparkles, CalendarDays, Info
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

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
  const supabase = createClientComponentClient()
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
          .eq('location', location)
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
      <DialogContent className="sm:max-w-[700px] max-w-[95vw] max-h-[85vh] p-0 bg-gradient-to-br from-card via-card to-muted/10 border-border/50 flex flex-col overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-chart-3/5 flex-shrink-0">
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-chart-3/10">
              {product ? <Package className="h-4 sm:h-5 w-4 sm:w-5 text-primary" /> : <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />}
            </div>
            {product ? 'Editar Producto' : 'Nuevo Producto'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-sm">
            {product ? 'Modifica los detalles del producto' : 'Ingresa los detalles del nuevo producto'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="grid gap-4 sm:gap-6">
              {/* Basic Information Section */}
              <div className="space-y-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-card to-muted/5 border border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Información Básica
                </h3>
                
                <div className="grid gap-2 sm:gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Nombre del Producto <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="border-border/50 focus:border-primary/50 bg-background/50"
                      placeholder="Ej: Cerveza Artesanal IPA"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="description" className="text-sm font-medium">Descripción</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={2}
                      className="border-border/50 focus:border-primary/50 bg-background/50 resize-none"
                      placeholder="Describe el producto de manera atractiva..."
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Category Section */}
              <div className="space-y-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-card to-chart-2/5 border border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Precio y Categoría
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="price" className="text-sm font-medium">
                      Precio (CLP) <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="price"
                        type="text"
                        value={formData.price === 0 ? '' : formData.price}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '')
                          setFormData(prev => ({ ...prev, price: value ? Number(value) : 0 }))
                        }}
                        className="pl-10 border-border/50 focus:border-primary/50 bg-background/50"
                        placeholder="7990"
                        required
                      />
                    </div>
                    {formData.price > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Precio formateado: ${Math.floor(formData.price / 1000)}.{(formData.price % 1000).toString().padStart(3, '0')}
                      </p>
                    )}
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="category" className="text-sm font-medium">Categoría</Label>
                    <Select 
                      value={formData.category_id} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, category_id: value }))}
                    >
                      <SelectTrigger className="border-border/50 focus:border-primary/50 bg-background/50">
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
                </div>
              </div>
            
              {/* Ingredients & Allergens Section */}
              <div className="space-y-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-card to-destructive/3 border border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Ingredientes y Alérgenos
                </h3>
                
                <div className="grid gap-2 sm:gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="ingredients" className="text-sm font-medium flex items-center gap-2">
                      <ChefHat className="h-3 w-3" />
                      Ingredientes
                    </Label>
                    <Textarea
                      id="ingredients"
                      value={formData.ingredients}
                      onChange={(e) => setFormData(prev => ({ ...prev, ingredients: e.target.value }))}
                      placeholder="Ej: Base de licor, Cítricos, Especias mediterráneas"
                      rows={2}
                      className="border-border/50 focus:border-primary/50 bg-background/50 resize-none"
                    />
                    <p className="text-xs text-muted-foreground">Separa cada ingrediente con una coma</p>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="allergens" className="text-sm font-medium flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3 text-destructive" />
                      Alérgenos
                    </Label>
                    <Textarea
                      id="allergens"
                      value={formData.allergens}
                      onChange={(e) => setFormData(prev => ({ ...prev, allergens: e.target.value }))}
                      placeholder="Ej: Gluten, Lácteos, Frutos secos"
                      rows={2}
                      className="border-border/50 focus:border-destructive/50 bg-background/50 resize-none"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="dietary" className="text-sm font-medium flex items-center gap-2">
                      <Leaf className="h-3 w-3 text-green-600" />
                      Restricciones Dietéticas
                    </Label>
                    <Textarea
                      id="dietary"
                      value={formData.dietary}
                      onChange={(e) => setFormData(prev => ({ ...prev, dietary: e.target.value }))}
                      placeholder="Ej: Vegetariano, Vegano, Sin Gluten"
                      rows={2}
                      className="border-border/50 focus:border-green-600/50 bg-background/50 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details Section */}
              <div className="space-y-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-card to-chart-4/5 border border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Detalles Adicionales
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="prep_time" className="text-sm font-medium flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      Tiempo de Preparación
                    </Label>
                    <Input
                      id="prep_time"
                      value={formData.prep_time}
                      onChange={(e) => setFormData(prev => ({ ...prev, prep_time: e.target.value }))}
                      placeholder="Ej: 5-7 min"
                      className="border-border/50 focus:border-primary/50 bg-background/50"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="calories" className="text-sm font-medium">
                      Calorías
                    </Label>
                    <Input
                      id="calories"
                      type="text"
                      value={formData.calories}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '')
                        setFormData(prev => ({ ...prev, calories: value }))
                      }}
                      placeholder="Ej: 180"
                      className="border-border/50 focus:border-primary/50 bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="spice_level" className="text-sm font-medium flex items-center gap-2">
                    <Flame className="h-3 w-3 text-orange-500" />
                    Nivel de Picante
                  </Label>
                  <Select 
                    value={String(formData.spice_level)} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, spice_level: Number(value) }))}
                  >
                    <SelectTrigger className="border-border/50 focus:border-primary/50 bg-background/50">
                      <SelectValue placeholder="Selecciona nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">
                        <span className="flex items-center gap-2">
                          0 - Sin picante
                        </span>
                      </SelectItem>
                      <SelectItem value="1">
                        <span className="flex items-center gap-2">
                          🌶️ 1 - Muy suave
                        </span>
                      </SelectItem>
                      <SelectItem value="2">
                        <span className="flex items-center gap-2">
                          🌶️🌶️ 2 - Suave
                        </span>
                      </SelectItem>
                      <SelectItem value="3">
                        <span className="flex items-center gap-2">
                          🌶️🌶️🌶️ 3 - Medio
                        </span>
                      </SelectItem>
                      <SelectItem value="4">
                        <span className="flex items-center gap-2">
                          🌶️🌶️🌶️🌶️ 4 - Picante
                        </span>
                      </SelectItem>
                      <SelectItem value="5">
                        <span className="flex items-center gap-2">
                          🌶️🌶️🌶️🌶️🌶️ 5 - Muy picante
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Special Tags Section */}
              <div className="space-y-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-card to-primary/5 border border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Etiquetas Especiales
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer">
                    <Checkbox
                      id="chef_special"
                      checked={formData.chef_special}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, chef_special: checked as boolean }))
                      }
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label 
                      htmlFor="chef_special" 
                      className="text-sm font-medium cursor-pointer flex items-center gap-2 flex-1"
                    >
                      <ChefHat className="h-4 w-4 text-primary" />
                      Especial del Chef
                      <Badge variant="outline" className="ml-auto text-xs">
                        Destacado
                      </Badge>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-chart-3/5 transition-colors cursor-pointer">
                    <Checkbox
                      id="popular"
                      checked={formData.popular}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, popular: checked as boolean }))
                      }
                      className="data-[state=checked]:bg-chart-3 data-[state=checked]:border-chart-3"
                    />
                    <Label 
                      htmlFor="popular" 
                      className="text-sm font-medium cursor-pointer flex items-center gap-2 flex-1"
                    >
                      <Star className="h-4 w-4 text-chart-3" />
                      Popular
                      <Badge variant="outline" className="ml-auto text-xs">
                        Más vendido
                      </Badge>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-chart-2/5 transition-colors cursor-pointer">
                    <Checkbox
                      id="seasonal"
                      checked={formData.seasonal}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, seasonal: checked as boolean }))
                      }
                      className="data-[state=checked]:bg-chart-2 data-[state=checked]:border-chart-2"
                    />
                    <Label 
                      htmlFor="seasonal" 
                      className="text-sm font-medium cursor-pointer flex items-center gap-2 flex-1"
                    >
                      <CalendarDays className="h-4 w-4 text-chart-2" />
                      De Temporada
                      <Badge variant="outline" className="ml-auto text-xs">
                        Por tiempo limitado
                      </Badge>
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border/50 bg-muted/5 gap-2 flex-shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="rounded-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 text-sm sm:text-base"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-primary to-chart-3 text-white hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {product ? 'Guardar Cambios' : 'Crear Producto'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}