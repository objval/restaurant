import type React from "react"
import type { Metadata } from "next"
import { locations } from "@/lib/locations"
import LocationClient from "./LocationClient"

interface LocationLayoutProps {
  children: React.ReactNode
  params: Promise<{ location: string }>
}

export default async function LocationLayout({ children, params }: LocationLayoutProps) {
  const { location } = await params

  return <LocationClient params={await params} children={children} />
}

// Generate metadata for each location
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params
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

// Generate static params for all locations
export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.id,
  }))
}
