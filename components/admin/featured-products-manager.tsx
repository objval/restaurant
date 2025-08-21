"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase-locations"
import { Star, Search, X, Save, Loader2, Upload, Trash2, ImageIcon } from "lucide-react"

interface FeaturedProduct {
  id?: string
  location_id: string
  name: string
  description: string
  price: string
  image_url: string
  featured: boolean
  active: boolean
  display_order: number
}

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image_url?: string
  category: string
  category_name?: string
}

interface FeaturedProductsManagerProps {
  locationId: string
  locationSlug: string
  locationName: string
}

export function FeaturedProductsManager({ locationId, locationSlug, locationName }: FeaturedProductsManagerProps) {
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isSelectDialogOpen, setIsSelectDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSlot, setSelectedSlot] = useState<number>(0)
  const [uploadingImage, setUploadingImage] = useState<number | null>(null)

  useEffect(() => {
    fetchFeaturedProducts()
    fetchMenuItems()
  }, [locationId])

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_highlights')
        .select('*')
        .eq('location_id', locationId)
        .eq('featured', true)
        .order('display_order')

      if (error) throw error

      // Ensure we have 3 slots (fill with empty if needed)
      const products: FeaturedProduct[] = []
      for (let i = 0; i < 3; i++) {
        if (data && data[i]) {
          products.push(data[i])
        } else {
          products.push({
            location_id: locationId,
            name: '',
            description: '',
            price: '',
            image_url: '',
            featured: true,
            active: true,
            display_order: i
          })
        }
      }
      setFeaturedProducts(products)
    } catch (error) {
      console.error('Error fetching featured products:', error)
      toast.error("No se pudieron cargar los productos destacados")
    } finally {
      setLoading(false)
    }
  }

  const fetchMenuItems = async () => {
    try {
      // Fetch from the location-specific menu table
      const tableName = `menu_${locationSlug}_with_categories`
      const { data, error } = await supabase
        .from(tableName)
        .select('id, name, description, price, image_url, category:category_name')
        .order('category_name')
        .order('name')

      if (error) throw error
      
      // Map the data to match our interface
      const mappedItems = (data || []).map(item => ({
        ...item,
        category: item.category || '',
        image_url: item.image_url || ''
      }))
      
      setMenuItems(mappedItems)
    } catch (error) {
      console.error('Error fetching menu items:', error)
      // Fallback to empty array if table doesn't exist
      setMenuItems([])
    }
  }

  const handleSelectMenuItem = (item: MenuItem) => {
    const newProduct: FeaturedProduct = {
      location_id: locationId,
      name: item.name,
      description: item.description || '',
      price: `$${item.price.toLocaleString('es-CL')}`,
      image_url: item.image_url || '',
      featured: true,
      active: true,
      display_order: selectedSlot
    }

    setFeaturedProducts(prev => {
      const updated = [...prev]
      updated[selectedSlot] = newProduct
      return updated
    })

    setIsSelectDialogOpen(false)
    toast.success(`${item.name} ha sido agregado como destacado`)
  }

  const handleRemoveProduct = (index: number) => {
    setFeaturedProducts(prev => {
      const updated = [...prev]
      updated[index] = {
        location_id: locationId,
        name: '',
        description: '',
        price: '',
        image_url: '',
        featured: true,
        active: true,
        display_order: index
      }
      return updated
    })
  }

  const handleManualEdit = (index: number, field: keyof FeaturedProduct, value: any) => {
    setFeaturedProducts(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const handleImageUpload = async (index: number, file: File) => {
    setUploadingImage(index)
    
    try {
      // Validate file
      if (!file.type.startsWith('image/')) {
        toast.error('Por favor selecciona una imagen válida')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error('La imagen debe ser menor a 5MB')
        return
      }

      // Generate unique filename
      const timestamp = Date.now()
      const fileName = `featured/${locationSlug}/${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) throw error

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName)

      // Update the product with the new image URL
      handleManualEdit(index, 'image_url', publicUrl)
      toast.success('Imagen subida exitosamente')
    } catch (error) {
      console.error('Error uploading image:', error)
      toast.error('Error al subir la imagen')
    } finally {
      setUploadingImage(null)
    }
  }

  const saveFeaturedProducts = async () => {
    setSaving(true)
    try {
      // First, delete all existing featured products for this location
      const { error: deleteError } = await supabase
        .from('menu_highlights')
        .delete()
        .eq('location_id', locationId)
        .eq('featured', true)

      if (deleteError) throw deleteError

      // Filter out empty slots and prepare data
      const productsToSave = featuredProducts
        .filter(p => p.name && p.price)
        .map((p, index) => ({
          location_id: locationId,
          slug: p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''), // Generate slug from name
          name: p.name,
          description: p.description || '',
          price: p.price,
          image_url: p.image_url || '',
          featured: true,
          active: true,
          display_order: index
        }))

      // Insert new featured products
      if (productsToSave.length > 0) {
        const { error: insertError } = await supabase
          .from('menu_highlights')
          .insert(productsToSave)

        if (insertError) throw insertError
      }

      toast.success("Productos destacados actualizados correctamente")

      // Refresh the data
      fetchFeaturedProducts()
    } catch (error) {
      console.error('Error saving featured products:', error)
      toast.error("No se pudieron guardar los productos destacados")
    } finally {
      setSaving(false)
    }
  }

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b">
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Productos Destacados - {locationName}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Selecciona hasta 3 productos del menú o ingresa manualmente
          </p>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-gradient-to-br from-card to-muted/5">
                {/* Image Section - More prominent */}
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                  {product.image_url ? (
                    <>
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.jpg'
                        }}
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleManualEdit(index, 'image_url', '')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleImageUpload(index, file)
                          }}
                          disabled={uploadingImage === index}
                        />
                        <div className="text-center">
                          {uploadingImage === index ? (
                            <Loader2 className="h-12 w-12 animate-spin text-gray-400 mx-auto" />
                          ) : (
                            <>
                              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">Subir imagen</p>
                            </>
                          )}
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/10">Posición {index + 1}</Badge>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedSlot(index)
                          setIsSelectDialogOpen(true)
                        }}
                      >
                        <Search className="h-4 w-4 mr-1" />
                        Buscar
                      </Button>
                      {product.name && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveProduct(index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs">Nombre del Producto</Label>
                      <Input
                        value={product.name}
                        onChange={(e) => handleManualEdit(index, 'name', e.target.value)}
                        placeholder="Ej: Pizza Margherita"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label className="text-xs">Precio</Label>
                      <Input
                        value={product.price}
                        onChange={(e) => handleManualEdit(index, 'price', e.target.value)}
                        placeholder="$12.900"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label className="text-xs">Descripción</Label>
                      <Textarea
                        value={product.description}
                        onChange={(e) => handleManualEdit(index, 'description', e.target.value)}
                        placeholder="Descripción breve..."
                        rows={2}
                        className="mt-1 resize-none"
                      />
                    </div>

                    {product.image_url && (
                      <div>
                        <Label className="text-xs">URL de Imagen</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            value={product.image_url}
                            onChange={(e) => handleManualEdit(index, 'image_url', e.target.value)}
                            placeholder="URL de la imagen"
                            className="text-xs"
                          />
                          <label>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) handleImageUpload(index, file)
                              }}
                              disabled={uploadingImage === index}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              disabled={uploadingImage === index}
                              asChild
                            >
                              <span>
                                {uploadingImage === index ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <ImageIcon className="h-4 w-4" />
                                )}
                              </span>
                            </Button>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <Button
              onClick={saveFeaturedProducts}
              disabled={saving}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
            >
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Guardando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Productos Destacados
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Menu Selection Dialog */}
      <Dialog open={isSelectDialogOpen} onOpenChange={setIsSelectDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Seleccionar Producto del Menú</DialogTitle>
            <DialogDescription>
              Busca y selecciona un producto del menú de {locationName}
            </DialogDescription>
          </DialogHeader>

          <div className="sticky top-0 bg-background z-10 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              {filteredMenuItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  {searchQuery ? "No se encontraron productos" : "No hay productos en el menú"}
                </div>
              ) : (
                filteredMenuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectMenuItem(item)}
                    className="w-full text-left p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="secondary">
                            ${item.price.toLocaleString('es-CL')}
                          </Badge>
                          <span className="text-xs text-gray-500">{item.category}</span>
                        </div>
                      </div>
                      {item.image_url && (
                        <div className="ml-4 w-16 h-16 rounded overflow-hidden">
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}