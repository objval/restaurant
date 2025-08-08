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
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0
  })

  // Update form when dialog opens with new product
  useEffect(() => {
    if (open && product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || 0
      })
    }
  }, [open, product])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!product) return
    
    setLoading(true)
    const table = `menu_${location}`
    
    try {
      const { error } = await supabase
        .from(table)
        .update({
          name: formData.name,
          description: formData.description,
          price: Number(formData.price)
        })
        .eq('id', product.id)
      
      if (error) throw error
      
      toast.success('Producto actualizado exitosamente')
      onSuccess()
      onOpenChange(false)
    } catch (error: any) {
      console.error('Error updating product:', error)
      toast.error(`Error al actualizar: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Editar Producto</DialogTitle>
            <DialogDescription>
              Modifica los detalles del producto
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
              <Label htmlFor="price">Precio</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                required
                min="0"
              />
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
              Guardar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}