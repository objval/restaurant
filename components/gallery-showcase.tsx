"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2 } from "lucide-react"
import type { LocationData } from "@/lib/locations"

interface GalleryShowcaseProps {
  locationData: LocationData
  images?: string[]
}

export function GalleryShowcase({ locationData, images }: GalleryShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryImages = images || locationData.images.gallery || []

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)
    }
  }

  const handleDownload = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${locationData.name}-gallery-${selectedImage}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  const handleShare = async () => {
    if (selectedImage === null) return
    
    const imageUrl = galleryImages[selectedImage]
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${locationData.name} - Galería`,
          text: `Mira esta foto de ${locationData.name}`,
          url: imageUrl,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(imageUrl)
      alert('¡Link copiado al portapapeles!')
    }
  }

  if (!galleryImages || galleryImages.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-2xl">
        <p className="text-gray-500">No hay imágenes en la galería</p>
      </div>
    )
  }

  return (
    <>
      {/* Mosaic Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.slice(0, 12).map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500",
              // Special sizing for first few images
              index === 0 && "md:col-span-2 md:row-span-2",
              index === 5 && "lg:col-span-2"
            )}
            style={{
              height: index === 0 ? '400px' : '200px',
            }}
            onClick={() => openLightbox(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${locationData.name} - Imagen ${index + 1}`}
              fill
              className={cn(
                "object-cover transition-all duration-700",
                hoveredIndex === index && "scale-110 brightness-75"
              )}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            
            {/* Overlay with info */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300",
              hoveredIndex === index && "opacity-100"
            )}>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {index + 1} de {galleryImages.length}
                  </span>
                  <ZoomIn className="w-5 h-5 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div 
              className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, transparent 50%, ${locationData.theme.accent} 50%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Show more indicator if there are more images */}
      {galleryImages.length > 12 && (
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => openLightbox(12)}
            className="rounded-full px-8"
            style={{
              borderColor: locationData.theme.primary,
              color: locationData.theme.primary,
            }}
          >
            Ver todas las {galleryImages.length} fotos
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-7xl h-[90vh] p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">Galería de Imágenes</DialogTitle>
          
          {selectedImage !== null && (
            <div className="relative w-full h-full flex flex-col">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl">{locationData.name}</h3>
                    <p className="text-sm text-white/70">
                      Imagen {selectedImage + 1} de {galleryImages.length}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDownload(galleryImages[selectedImage])}
                      className="text-white hover:bg-white/20"
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleShare}
                      className="text-white hover:bg-white/20"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeLightbox}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative flex-1 flex items-center justify-center p-4 sm:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src={galleryImages[selectedImage] || "/placeholder.svg"}
                    alt={`${locationData.name} - Imagen ${selectedImage + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300",
                        selectedImage === index 
                          ? "border-white scale-110" 
                          : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyboard Navigation Hint */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 text-sm hidden sm:block">
                Usa ← → para navegar
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
