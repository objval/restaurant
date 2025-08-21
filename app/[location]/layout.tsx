import type React from "react"
import type { Metadata } from "next"
import { getLocationsWithHours } from "@/lib/supabase-locations"
import LocationClient from "./LocationClient"

// Force dynamic rendering for location pages to ensure fresh menu data
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface LocationLayoutProps {
  children: React.ReactNode
  params: Promise<{ location: string }>
}

export default async function LocationLayout({ children, params }: LocationLayoutProps) {
  return <LocationClient params={await params}>{children}</LocationClient>
}

// Generate metadata for each location
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params
  const locations = await getLocationsWithHours()
  const locationData = locations.find((loc) => loc.id === location)

  if (!locationData) {
    return {
      title: "Ubicación no encontrada",
      description: "La ubicación solicitada no existe.",
    }
  }

  return {
    title: `${locationData.name} | ${locationData.concept}`,
    description: `${locationData.description} Ubicado en ${locationData.contact.address}. ${locationData.longDescription}`,
    keywords: [
      locationData.name,
      locationData.concept,
      ...locationData.specialties,
      ...locationData.atmosphere,
      "restaurante Chile",
      "reservas",
      "gastronomía",
    ],
    openGraph: {
      title: `${locationData.name} | ${locationData.concept}`,
      description: locationData.description,
      type: "website",
      locale: "es_CL",
    },
    twitter: {
      card: "summary",
      title: `${locationData.name} | ${locationData.concept}`,
      description: locationData.description,
    },
    alternates: {
      canonical: `/${location}`,
    },
    other: {
      "restaurant:contact:phone_number": locationData.contact.phone,
      "restaurant:contact:email": locationData.contact.email,
      "restaurant:location:latitude": locationData.coordinates.lat.toString(),
      "restaurant:location:longitude": locationData.coordinates.lng.toString(),
      "restaurant:price_range": locationData.priceRange,
    },
  }
}

// Removed generateStaticParams to enable dynamic rendering
