import { ToggleActiveButton } from "./toggle-active-button"
import { ToggleStockButton } from "./toggle-stock-button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, MoreVertical, Trash, Package, DollarSign } from "lucide-react"
import type { Tables } from "@/lib/database.types"

type MenuItem = Tables<'menu_arbol'> | Tables<'menu_1898'> | Tables<'menu_capriccio'>

interface ProductCardServerProps {
  product: MenuItem
  location: 'arbol' | '1898' | 'capriccio'
  onEdit: (product: MenuItem) => void
}

export function ProductCardServer({ product, location }: ProductCardServerProps) {
  const isOutOfStock = product.stock_status === 'out_of_stock'
  const isActive = product.active ?? true

  return (
    <Card className={`relative overflow-hidden transition-all ${!isActive ? 'opacity-60' : ''}`}>
      {/* Status badges */}
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        {isOutOfStock && (
          <Badge variant="destructive" className="text-xs">
            Sin Stock
          </Badge>
        )}
        {!isActive && (
          <Badge variant="secondary" className="text-xs">
            Inactivo
          </Badge>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-8">
            <h4 className="font-semibold text-base line-clamp-2">{product.name}</h4>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {product.description || 'Sin descripción'}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-400" />
            <span className="font-bold text-lg">
              ${(Number(product.price) / 1000).toFixed(0)}.{(Number(product.price) % 1000).toString().padStart(3, '0')}
            </span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-3">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-gray-400" />
            <ToggleStockButton
              productId={product.id}
              currentStock={product.stock_status || 'in_stock'}
              location={location}
              isOutOfStock={isOutOfStock}
            />
            <span className="text-xs text-gray-600">
              {isOutOfStock ? 'Agotado' : 'En Stock'}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Activo</span>
            <ToggleActiveButton
              productId={product.id}
              currentActive={isActive}
              location={location}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}