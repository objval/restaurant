"use client"

import { useState, useEffect, useCallback } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Upload, X, Loader2, Image as ImageIcon, 
  Trash2, Plus, GripVertical, Check, AlertCircle,
  Download, ExternalLink
} from "lucide-react"
import { toast } from "sonner"
import { uploadLocationImage, deleteLocationImage, getPublicUrl } from "@/lib/supabase-storage"
import { cn } from "@/lib/utils"

interface GalleryManagerProps {
  locationId: string
  locationName: string
}

interface GalleryImage {
  url: string
  order: number
  id?: string
}

export function GalleryManager({ locationId, locationName }: GalleryManagerProps) {
  const supabase = createClientComponentClient()
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [isDraggingFiles, setIsDraggingFiles] = useState(false)

  // Fetch current gallery images
  const fetchGallery = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('locations')
        .select('images')
        .eq('slug', locationId)
        .single()

      if (error) throw error

      if (data?.images?.gallery) {
        const galleryImages = data.images.gallery.map((url: string, index: number) => ({
          url,
          order: index,
          id: `${locationId}-${index}`
        }))
        setImages(galleryImages)
      }
    } catch (error) {
      console.error('Error fetching gallery:', error)
      toast.error('Error al cargar la galería')
    } finally {
      setLoading(false)
    }
  }, [locationId, supabase])

  useEffect(() => {
    fetchGallery()
  }, [fetchGallery])

  // Handle file upload
  const handleFileUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return

    setUploading(true)

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Upload to Supabase Storage with authenticated client
        const result = await uploadLocationImage(file, locationId, 'gallery', supabase)
        return result.publicUrl
      })

      const uploadedUrls = await Promise.all(uploadPromises)
      
      // Add new images to the array
      const newImages = uploadedUrls.map((url: string, index: number) => ({
        url,
        order: images.length + index,
        id: `${locationId}-${images.length + index}`
      }))

      const updatedImages = [...images, ...newImages]
      setImages(updatedImages)

      // Update database
      await updateGalleryInDatabase(updatedImages)

      toast.success(`${uploadedUrls.length} imagen(es) subida(s) exitosamente`)
    } catch (error) {
      console.error('Error uploading images:', error)
      toast.error('Error al subir las imágenes')
    } finally {
      setUploading(false)
    }
  }

  // Handle input file change
  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      await handleFileUpload(files)
      event.target.value = '' // Reset input
    }
  }

  // Handle drag & drop for file upload
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDraggingFiles(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingFiles(false)
  }

  const handleDragOverFiles = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDropFiles = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingFiles(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      await handleFileUpload(files)
    }
  }

  // Update gallery in database
  const updateGalleryInDatabase = async (updatedImages: GalleryImage[]) => {
    try {
      const { data: currentData, error: fetchError } = await supabase
        .from('locations')
        .select('images')
        .eq('slug', locationId)
        .single()

      if (fetchError) throw fetchError

      const galleryUrls = updatedImages.map(img => img.url)

      const { error } = await supabase
        .from('locations')
        .update({
          images: {
            ...currentData.images,
            gallery: galleryUrls
          }
        })
        .eq('slug', locationId)

      if (error) throw error
    } catch (error) {
      console.error('Error updating gallery:', error)
      throw error
    }
  }

  // Delete image
  const handleDeleteImage = async (index: number) => {
    if (!confirm('¿Estás seguro de eliminar esta imagen?')) return

    try {
      const imageToDelete = images[index]
      
      // Delete from storage if it's a Supabase URL
      if (imageToDelete.url.includes('supabase')) {
        await deleteLocationImage(imageToDelete.url)
      }

      // Remove from array
      const updatedImages = images.filter((_, i) => i !== index)
      setImages(updatedImages)

      // Update database
      await updateGalleryInDatabase(updatedImages)

      toast.success('Imagen eliminada')
    } catch (error) {
      console.error('Error deleting image:', error)
      toast.error('Error al eliminar la imagen')
    }
  }

  // Drag and drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return

    const updatedImages = [...images]
    const draggedImage = updatedImages[draggedIndex]
    
    updatedImages.splice(draggedIndex, 1)
    updatedImages.splice(index, 0, draggedImage)
    
    setImages(updatedImages)
    setDraggedIndex(index)
  }

  const handleDragEnd = async () => {
    if (draggedIndex === null) return
    
    // Update order in database
    try {
      await updateGalleryInDatabase(images)
      toast.success('Orden actualizado')
    } catch (error) {
      console.error('Error updating order:', error)
      toast.error('Error al actualizar el orden')
    }
    
    setDraggedIndex(null)
  }

  // Add image from URL
  const [urlInput, setUrlInput] = useState('')
  const handleAddFromUrl = async () => {
    if (!urlInput.trim()) return

    try {
      const newImage: GalleryImage = {
        url: urlInput.trim(),
        order: images.length,
        id: `${locationId}-${images.length}`
      }

      const updatedImages = [...images, newImage]
      setImages(updatedImages)

      await updateGalleryInDatabase(updatedImages)

      setUrlInput('')
      toast.success('Imagen agregada desde URL')
    } catch (error) {
      console.error('Error adding image from URL:', error)
      toast.error('Error al agregar la imagen')
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Galería de Fotos - {locationName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* File Upload */}
            <div className="flex-1">
              <Label htmlFor="gallery-upload" className="cursor-pointer">
                <div 
                  className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center transition-all",
                    isDraggingFiles 
                      ? "border-primary bg-primary/10 scale-105" 
                      : "border-gray-300 hover:border-primary hover:bg-primary/5"
                  )}
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOverFiles}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDropFiles}
                >
                  {uploading ? (
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      <p className="text-sm text-gray-600">Subiendo imágenes...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className={cn(
                        "w-8 h-8 transition-colors",
                        isDraggingFiles ? "text-primary" : "text-gray-400"
                      )} />
                      <p className="text-sm font-medium text-gray-700">
                        {isDraggingFiles ? '¡Suelta aquí!' : 'Haz clic para subir imágenes'}
                      </p>
                      <p className="text-xs text-gray-500">
                        o arrastra múltiples archivos aquí (PNG, JPG, WEBP)
                      </p>
                      <p className="text-xs font-semibold text-primary mt-1">
                        ✨ Soporta subida en batch
                      </p>
                    </div>
                  )}
                </div>
              </Label>
              <Input
                id="gallery-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleInputChange}
                className="hidden"
                disabled={uploading}
              />
            </div>
          </div>

          {/* URL Input */}
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="O pega una URL de imagen..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddFromUrl()}
            />
            <Button onClick={handleAddFromUrl} disabled={!urlInput.trim()}>
              <Plus className="w-4 h-4 mr-2" />
              Agregar
            </Button>
          </div>
        </div>

        {/* Images Grid */}
        {images.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <ImageIcon className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">No hay imágenes en la galería</p>
            <p className="text-sm text-gray-400 mt-1">
              Sube tu primera imagen para comenzar
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {images.length} imagen{images.length !== 1 ? 'es' : ''} en la galería
              </p>
              <p className="text-xs text-gray-500">
                Arrastra para reordenar
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragEnd={handleDragEnd}
                  className={cn(
                    "relative group cursor-move bg-gray-100 rounded-lg overflow-hidden border-2 transition-all",
                    draggedIndex === index 
                      ? "border-primary shadow-lg scale-105 opacity-50" 
                      : "border-transparent hover:border-gray-300"
                  )}
                >
                  {/* Drag Handle */}
                  <div className="absolute top-2 left-2 z-10 bg-black/50 backdrop-blur-sm rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <GripVertical className="w-4 h-4 text-white" />
                  </div>

                  {/* Order Badge */}
                  <div className="absolute top-2 right-2 z-10 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs text-white font-bold">{index + 1}</span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => window.open(image.url, '_blank')}
                      className="h-8 w-8"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleDeleteImage(index)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800 space-y-1">
            <p className="font-medium">Tips para mejores resultados:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>Usa imágenes de alta calidad (mínimo 1200x800px)</li>
              <li>Formato recomendado: WEBP o JPG</li>
              <li>La primera imagen se mostrará como destacada</li>
              <li>Arrastra las imágenes para cambiar el orden</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
