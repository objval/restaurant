import { locations } from "@/lib/locations"
import LocationPageClient from "./LocationPageClient"

interface LocationPageProps {
  params: Promise<{ location: string }>
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params

  return <LocationPageClient location={location} />
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.id,
  }))
}
