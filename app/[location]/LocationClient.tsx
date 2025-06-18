"use client"

import type React from "react"
import { locations } from "@/lib/locations"
import { notFound } from "next/navigation"

interface LocationLayoutProps {
  children: React.ReactNode
  params: { location: string }
}

export default function LocationClient({ children, params }: LocationLayoutProps) {
  const locationData = locations.find((loc) => loc.id === params.location)

  if (!locationData) {
    notFound()
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: locationData.theme.background,
        color: locationData.theme.primary,
      }}
    >
      <style jsx global>{`
        :root {
          --location-primary: ${locationData.theme.primary};
          --location-secondary: ${locationData.theme.secondary};
          --location-accent: ${locationData.theme.accent};
          --location-background: ${locationData.theme.background};
        }
      `}</style>
      {children}
    </div>
  )
}
