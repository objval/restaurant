import { getLocationById, getLocationMenu, getCategoriesWithItems } from "@/lib/db"
import { MenuPageClient } from "@/components/menu-page-client"
import { ArrowLeft, Utensils } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface MenuPageProps {
  params: Promise<{ location: string }>
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { location } = await params
  
  // Fetch location data from database
  const locationData = await getLocationById(location)
  if (!locationData) {
    notFound()
  }

  // Transform database location to match LocationData interface
  const transformedLocation = {
    id: locationData.id,
    name: locationData.name,
    concept: locationData.concept,
    path: locationData.path,
    coordinates: locationData.coordinates as { lat: number; lng: number },
    theme: locationData.theme as any,
    images: locationData.images as any,
    description: locationData.description,
    longDescription: locationData.long_description,
    hours: locationData.hours as any,
    specialties: locationData.specialties,
    atmosphere: locationData.atmosphere,
    priceRange: locationData.price_range,
    contact: locationData.contact as any,
    features: locationData.features,
    menuHighlights: [], // Will be fetched separately if needed
    stats: locationData.stats as any,
    socialProof: locationData.social_proof as any,
    socialMedia: locationData.social_media as any,
    promotions: locationData.promotions as any[],
  }

  // Fetch menu items and categories from database
  const menuItems = await getLocationMenu(location)
  const availableCategories = await getCategoriesWithItems(location)

  return (
    <div className="min-h-screen" style={{ backgroundColor: locationData.theme.background }}>
      {/* Desktop Header - Hidden on mobile */}
      <div
        className="hidden md:block relative py-16 px-4"
        style={{
          background: `linear-gradient(135deg, ${locationData.theme.primary}, ${locationData.theme.accent})`,
        }}
      >
        <div className="container mx-auto">
          <Link
            href={`/${location}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a {locationData.name}
          </Link>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Menú</h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">
              Descubre nuestros platos cuidadosamente elaborados, hechos con los mejores ingredientes y pasión por la
              excelencia culinaria.
            </p>
          </div>
        </div>
      </div>

      {/* Client Component for Interactive Menu */}
      <MenuPageClient locationData={transformedLocation} menuItems={menuItems} availableCategories={availableCategories} />
    </div>
  )
}

// Dynamic rendering for database-driven content
export const dynamic = 'force-dynamic'
