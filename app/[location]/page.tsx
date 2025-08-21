import { getLocationsWithHours } from "@/lib/supabase-locations"
import LocationPageClient from "./LocationPageClient"
import { notFound } from "next/navigation"

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface LocationPageProps {
  params: Promise<{ location: string }>
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params
  
  // Fetch locations from Supabase
  const locations = await getLocationsWithHours()
  const locationData = locations.find((loc) => loc.id === location)

  if (!locationData) {
    notFound()
  }

  return <LocationPageClient locationData={locationData} />
}

// Removed generateStaticParams to enable dynamic rendering
