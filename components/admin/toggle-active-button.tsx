"use client"

import { useState, useTransition } from "react"
import { Switch } from "@/components/ui/switch"
import { toggleProductActive } from "@/app/admin/actions"
import { toast } from "sonner"

interface ToggleActiveButtonProps {
  productId: string
  currentActive: boolean
  location: 'arbol' | '1898' | 'capriccio'
}

export function ToggleActiveButton({ productId, currentActive, location }: ToggleActiveButtonProps) {
  const [isPending, startTransition] = useTransition()
  const [optimisticActive, setOptimisticActive] = useState(currentActive)

  const handleToggle = async (checked: boolean) => {
    console.log(`[ToggleActiveButton] Toggling active for ${productId}`)
    console.log(`[ToggleActiveButton] Current: ${currentActive}, Checked: ${checked}`)
    
    // Optimistic update
    setOptimisticActive(checked)
    
    startTransition(async () => {
      try {
        const result = await toggleProductActive(location, productId, currentActive)
        console.log(`[ToggleActiveButton] Server response:`, result)
        
        if (result.success) {
          const newActive = result.data.active
          toast.success(newActive ? 'Producto activado' : 'Producto desactivado')
          
          // Update local state to match server
          setOptimisticActive(newActive ?? false)
        }
      } catch (error) {
        console.error(`[ToggleActiveButton] Error:`, error)
        toast.error('Error al actualizar el estado')
        
        // Revert optimistic update
        setOptimisticActive(currentActive)
      }
    })
  }

  return (
    <Switch
      checked={optimisticActive}
      disabled={isPending}
      onCheckedChange={handleToggle}
      className="scale-90"
      onClick={(e) => e.stopPropagation()}
    />
  )
}