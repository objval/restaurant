import type React from "react"
import type { Metadata } from "next"
import { locations } from "@/lib/locations"

interface MenuLayoutProps {
  children: React.ReactNode
  params: Promise<{ location: string }>
}

export default async function MenuLayout({ children }: MenuLayoutProps) {
  return <>{children}</>
}

// Generate metadata for menu pages
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params
  const locationData = locations.find((loc) => loc.id === location)

  if (!locationData) {
    return {
      title: "Menú no encontrado",
      description: "El menú solicitado no existe.",
    }
  }

  const menuHighlights = locationData.menuHighlights.map((item) => item.name).join(", ")

  return {
    title: `Menú | ${locationData.name}`,
    description: `Descubre nuestro menú en ${locationData.name}. Especialidades: ${locationData.specialties.join(", ")}. Platos destacados: ${menuHighlights}. ${locationData.description}`,
    keywords: [
      "menú",
      locationData.name,
      ...locationData.specialties,
      ...locationData.menuHighlights.map((item) => item.name),
      "carta restaurante",
      "platos",
      "gastronomía Chile",
    ],
    openGraph: {
      title: `Menú | ${locationData.name}`,
      description: `Explora nuestro menú cuidadosamente curado en ${locationData.name}. ${locationData.description}`,
      type: "website",
      locale: "es_CL",
    },
    twitter: {
      card: "summary",
      title: `Menú | ${locationData.name}`,
      description: `Explora nuestro menú en ${locationData.name}`,
    },
    alternates: {
      canonical: `/${location}/menu`,
    },
  }
}
