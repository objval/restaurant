import { locations } from "@/lib/locations"
import LocationPageClient from "./LocationPageClient"
import { notFound } from "next/navigation"

interface LocationPageProps {
  params: Promise<{ location: string }>
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params
  const locationData = locations.find((loc) => loc.id === location)

  if (!locationData) {
    notFound()
  }

  return <LocationPageClient locationData={locationData} />
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.id,
  }))
}
