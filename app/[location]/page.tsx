import { getLocationById, getMenuHighlights } from "@/lib/db"
import LocationPageClient from "./LocationPageClient"
import { notFound } from "next/navigation"

interface LocationPageProps {
  params: Promise<{ location: string }>
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params
  
  // Fetch location data from database
  const locationData = await getLocationById(location)
  if (!locationData) {
    notFound()
  }

  // Fetch menu highlights
  const menuHighlights = await getMenuHighlights(location)

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
    menuHighlights,
    stats: locationData.stats as any,
    socialProof: locationData.social_proof as any,
    socialMedia: locationData.social_media as any,
    promotions: locationData.promotions as any[],
  }

  return <LocationPageClient locationData={transformedLocation} />
}

// Dynamic rendering for database-driven content
export const dynamic = 'force-dynamic'
