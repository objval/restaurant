import { getLocations } from "@/lib/db"
import LocationSelector from "./location-selector-client"

export default async function LocationSelectorWrapper() {
  // Fetch locations from database
  const dbLocations = await getLocations()
  
  // Transform database locations to match LocationData interface
  const transformedLocations = dbLocations.map(loc => ({
    id: loc.id,
    name: loc.name,
    concept: loc.concept,
    path: loc.path,
    coordinates: loc.coordinates as { lat: number; lng: number },
    theme: loc.theme as any,
    images: loc.images as any,
    description: loc.description,
    longDescription: loc.long_description,
    hours: loc.hours as any,
    specialties: loc.specialties,
    atmosphere: loc.atmosphere,
    priceRange: loc.price_range,
    contact: loc.contact as any,
    features: loc.features,
    menuHighlights: [], // Not needed for location selector
    stats: loc.stats as any,
    socialProof: loc.social_proof as any,
    socialMedia: loc.social_media as any,
    promotions: loc.promotions as any[],
  }))
  
  return <LocationSelector locations={transformedLocations} />
}