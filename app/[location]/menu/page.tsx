import { locations } from "@/lib/locations"
import { MenuPageClient } from "@/components/menu-page-client"
import { ArrowLeft, Utensils } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getMenuByLocation, getCategories, convertDBMenuItemToLocal } from "@/lib/supabase-menu"
import { menuCategories } from "@/lib/menu-data"

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface MenuPageProps {
  params: Promise<{ location: string }>
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { location } = await params
  const locationData = locations.find((loc) => loc.id === location)

  if (!locationData) {
    notFound()
  }

  // Try to fetch from Supabase, fall back to local data if not available
  let menuItems: any[] = []
  let availableCategories = menuCategories
  
  try {
    // Fetch menu items from Supabase
    console.log(`[${location}/menu] Attempting to fetch from Supabase...`)
    const dbMenuItems = await getMenuByLocation(location as 'arbol' | '1898' | 'capriccio')
    const dbCategories = await getCategories()
    
    // Convert database items to the format expected by components
    menuItems = dbMenuItems.map(item => convertDBMenuItemToLocal(item, dbCategories))
    
    // Convert database categories to menu category format and filter to only those with items
    const usedCategoryIds = new Set(dbMenuItems.map(item => item.category_id).filter(Boolean))
    availableCategories = dbCategories
      .filter(cat => usedCategoryIds.has(cat.id))
      .map(cat => ({
        id: cat.slug,
        name: cat.name,
        description: cat.description || '',
        icon: cat.icon || '🍽️'
      }))
      .sort((a, b) => {
        // Sort by display order if available
        const catA = dbCategories.find(c => c.slug === a.id)
        const catB = dbCategories.find(c => c.slug === b.id)
        return (catA?.display_order || 999) - (catB?.display_order || 999)
      })
    
    console.log(`[${location}/menu] Successfully loaded ${menuItems.length} items from Supabase with ${availableCategories.length} categories`)
  } catch (error) {
    // Fall back to local data if Supabase is not configured
    console.error(`[${location}/menu] Supabase error:`, error)
    console.log(`[${location}/menu] Falling back to local menu data`)
    const { menuData, getCategoriesWithItems } = await import('@/lib/menu-data')
    menuItems = menuData[location as keyof typeof menuData] || []
    availableCategories = getCategoriesWithItems(location)
    console.log(`[${location}/menu] Loaded ${menuItems.length} items from local data`)
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
      <MenuPageClient locationData={locationData} menuItems={menuItems} availableCategories={availableCategories} />
    </div>
  )
}

// Removed generateStaticParams to enable dynamic rendering
// Pages will be rendered on-demand to ensure fresh data
