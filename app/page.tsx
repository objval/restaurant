import { Suspense } from "react"
import { getLocationsWithHours } from "@/lib/supabase-locations"
import LocationSelectorClient from "@/components/location-selector-client"
import LocationSelectorSkeleton from "@/components/location-selector-skeleton"

// Revalidate every 5 minutes for fresh data
export const revalidate = 300

// Generate static page at build time for instant loading
export const dynamic = 'force-static'

// Server Component - fetches data on the server
export default async function LocationSelector() {
  // Fetch locations on the server - no loading state needed
  const locations = await getLocationsWithHours()
  
  return (
    <Suspense fallback={<LocationSelectorSkeleton />}>
      <LocationSelectorClient initialLocations={locations} />
    </Suspense>
  )
}