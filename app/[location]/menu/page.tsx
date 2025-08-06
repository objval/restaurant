import { locations } from "@/lib/locations"
import { menuData, getCategoriesWithItems } from "@/lib/menu-data"
import { MenuPageClient } from "@/components/menu-page-client"
import { ArrowLeft, Utensils } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface MenuPageProps {
  params: Promise<{ location: string }>
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { location } = await params
  const locationData = locations.find((loc) => loc.id === location)
  const menuItems = menuData[location as keyof typeof menuData] || []

  if (!locationData) {
    notFound()
  }

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
      <MenuPageClient locationData={locationData} menuItems={menuItems} availableCategories={getCategoriesWithItems(location)} />
    </div>
  )
}

// Generate static params for all location menus
export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.id,
  }))
}
