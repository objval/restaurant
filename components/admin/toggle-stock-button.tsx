"use client"

import { useState, useTransition } from "react"
import { Switch } from "@/components/ui/switch"
import { toggleProductStock } from "@/app/admin/actions"
import { toast } from "sonner"

interface ToggleStockButtonProps {
  productId: string
  currentStock: string
  location: 'arbol' | '1898' | 'capriccio'
  isOutOfStock: boolean
}

export function ToggleStockButton({ productId, currentStock, location, isOutOfStock }: ToggleStockButtonProps) {
  const [isPending, startTransition] = useTransition()
  const [optimisticStock, setOptimisticStock] = useState(isOutOfStock)

  const handleToggle = async (checked: boolean) => {
    console.log(`[ToggleStockButton] Toggling stock for ${productId}`)
    console.log(`[ToggleStockButton] Current: ${currentStock}, Checked: ${checked}`)
    
    // Optimistic update
    setOptimisticStock(!checked)
    
    startTransition(async () => {
      try {
        const result = await toggleProductStock(location, productId, currentStock)
        console.log(`[ToggleStockButton] Server response:`, result)
        
        if (result.success) {
          const newStock = result.data.stock_status
          toast.success(newStock === 'in_stock' ? 'Producto en stock' : 'Producto agotado')
          
          // Update local state to match server
          setOptimisticStock(newStock === 'out_of_stock')
        }
      } catch (error) {
        console.error(`[ToggleStockButton] Error:`, error)
        toast.error('Error al actualizar el stock')
        
        // Revert optimistic update
        setOptimisticStock(isOutOfStock)
      }
    })
  }

  return (
    <Switch
      checked={!optimisticStock}
      disabled={isPending}
      onCheckedChange={handleToggle}
      className="scale-90 data-[state=checked]:bg-green-600"
      onClick={(e) => e.stopPropagation()}
    />
  )
}