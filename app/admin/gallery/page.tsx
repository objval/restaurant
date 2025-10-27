"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User } from "@supabase/supabase-js"
import { AdminHeader } from "@/components/admin/admin-header"
import { LocationSwitcher } from "@/components/admin/location-switcher"
import { GalleryManager } from "@/components/admin/gallery-manager"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Upload, Settings, Loader2 } from "lucide-react"
import { initializeStorageBucket } from "@/lib/supabase-storage"

const LOCATION_NAMES = {
  arbol: "El Árbol",
  "1898": "Beer Bar 1898",
  capriccio: "Capriccio"
} as const

export default function GalleryManagementPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [currentLocation, setCurrentLocation] = useState<'arbol' | '1898' | 'capriccio'>('arbol')
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin/login')
        return
      }
      setUser(session.user)
      setLoading(false)
      
      // Initialize storage buckets
      await initializeStorageBucket()
    }
    checkAuth()
  }, [supabase, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent mb-2">
            Gestión de Galería
          </h1>
          <p className="text-muted-foreground">
            Administra las fotos de tus ubicaciones
          </p>
        </div>

        {/* Location Switcher */}
        <div className="mb-6">
          <LocationSwitcher 
            currentLocation={currentLocation}
            onLocationChange={(loc) => setCurrentLocation(loc as typeof currentLocation)}
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="gallery" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Galería
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Imágenes Destacadas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-6">
            <GalleryManager 
              locationId={currentLocation}
              locationName={LOCATION_NAMES[currentLocation]}
            />
          </TabsContent>

          <TabsContent value="featured" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Imágenes Destacadas</CardTitle>
                <CardDescription>
                  Gestiona las imágenes principales de la ubicación (Hero, Interior, Signature, Ambiance)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <FeaturedImageUpload 
                    locationId={currentLocation}
                    type="hero"
                    title="Imagen Hero"
                    description="Imagen principal de la página"
                  />
                  <FeaturedImageUpload 
                    locationId={currentLocation}
                    type="interior"
                    title="Interior"
                    description="Foto del interior del restaurante"
                  />
                  <FeaturedImageUpload 
                    locationId={currentLocation}
                    type="signature"
                    title="Plato Signature"
                    description="Imagen del plato emblema"
                  />
                  <FeaturedImageUpload 
                    locationId={currentLocation}
                    type="ambiance"
                    title="Ambiente"
                    description="Foto del ambiente general"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="mt-8 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Settings className="w-5 h-5" />
              Guía Rápida
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-800 space-y-3">
            <div>
              <h4 className="font-semibold mb-1">📸 Galería</h4>
              <p className="text-blue-700">
                Sube múltiples fotos que se mostrarán en la sección "Conócenos" de cada ubicación.
                La primera imagen será la destacada.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">🎯 Imágenes Destacadas</h4>
              <p className="text-blue-700">
                Estas son las imágenes principales que se usan en diferentes secciones:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-blue-600 ml-4">
                <li><strong>Hero:</strong> Banner principal de la página</li>
                <li><strong>Interior:</strong> Sección "Sobre Nosotros"</li>
                <li><strong>Signature:</strong> Plato destacado</li>
                <li><strong>Ambiance:</strong> Ambiente y decoración</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">💡 Recomendaciones</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-600 ml-4">
                <li>Formato recomendado: WEBP o JPG optimizado</li>
                <li>Tamaño máximo: 5MB por imagen</li>
                <li>Resolución mínima: 1200x800px para mejor calidad</li>
                <li>Mantén un estilo consistente entre fotos</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Component for featured image upload
function FeaturedImageUpload({ 
  locationId, 
  type, 
  title, 
  description 
}: { 
  locationId: string
  type: string
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-400" />
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Próximamente: Upload individual de imágenes destacadas
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
