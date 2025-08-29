import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"]
})

export const metadata: Metadata = {
  title: {
    default: "El Árbol • 1898 • Capriccio | Experiencias Gastronómicas en Pitrufquén",
    template: "%s | Restaurantes Pitrufquén",
  },
  description:
    "Tres restaurantes únicos en Pitrufquén, Araucanía. El Árbol: comida familiar cálida. 1898 Beer Bar: ambiente nocturno y cervezas artesanales. Capriccio Bistro: elegancia y sofisticación. Reservas disponibles.",
  keywords: [
    "restaurante Pitrufquén",
    "restaurantes Araucanía",
    "El Árbol restaurante familiar",
    "1898 Beer Bar",
    "Capriccio Bistro",
    "comida familiar Pitrufquén",
    "bar Pitrufquén",
    "cervezas artesanales",
    "gastronomía Araucanía",
    "reservas restaurante",
    "eventos privados",
    "karaoke Pitrufquén",
  ],
  authors: [{ name: "Grupo Gastronómico Pitrufquén" }],
  creator: "Grupo Gastronómico Pitrufquén",
  publisher: "Grupo Gastronómico Pitrufquén",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grupogastronomicomd.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://grupogastronomicomd.cl",
    siteName: "Restaurantes Pitrufquén",
    title: "El Árbol • 1898 • Capriccio | Restaurantes en Pitrufquén",
    description:
      "Tres experiencias gastronómicas únicas en Pitrufquén. El Árbol para reuniones familiares, 1898 Beer Bar para noches animadas, y Capriccio Bistro para ocasiones especiales. Reservas disponibles.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Restaurantes Pitrufquén - El Árbol, 1898, Capriccio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RestaurantesPitrufquen",
    creator: "@RestaurantesPitrufquen",
    title: "El Árbol • 1898 • Capriccio | Restaurantes en Pitrufquén",
    description: "Tres experiencias gastronómicas únicas en Pitrufquén, Araucanía. Desde comida familiar hasta bistro elegante.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "restaurant",
  classification: "business",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#2D5016",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Restaurantes Pitrufquén",
  },
  applicationName: "Restaurantes Pitrufquén",
  generator: "Next.js",
  abstract: "Tres restaurantes únicos en Pitrufquén: El Árbol (familiar), 1898 Beer Bar (nocturno), y Capriccio Bistro (elegante)",
  archives: [],
  assets: [],
  bookmarks: [],
  other: {
    "msapplication-TileColor": "#2D5016",
    "msapplication-config": "/browserconfig.xml",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#2D5016',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="CL-AR" />
        <meta name="geo.placename" content="Pitrufquén, Araucanía" />
        <meta name="geo.position" content="-38.985779;-72.639160" />
        <meta name="ICBM" content="-38.985779, -72.639160" />

        {/* Business Schema - El Árbol */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "El Árbol Café Restaurante",
              description: "Restaurante familiar con ambiente cálido y acogedor en Pitrufquén",
              url: "https://grupogastronomicomd.cl/arbol",
              telephone: "+56942262266",
              email: "contacto@elarbol.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Manuel Rodríguez 792",
                addressCountry: "CL",
                addressRegion: "Araucanía",
                addressLocality: "Pitrufquén",
              },
              servesCuisine: ["Chilean", "Family", "Traditional"],
              priceRange: "$$-$$$",
              acceptsReservations: true,
              openingHours: ["Tu-We 11:00-22:30", "Th-Fr 11:00-23:30", "Sa 11:30-23:30"],
              image: "/logo.png",
            }),
          }}
        />
        
        {/* Business Schema - 1898 Beer Bar */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarOrPub",
              name: "1898 Beer Bar",
              description: "Beer bar con ambiente relajado, cervezas artesanales y música en vivo",
              url: "https://grupogastronomicomd.cl/1898",
              telephone: "+56997180227",
              email: "contacto@1898.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Francisco Bilbao 539",
                addressCountry: "CL",
                addressRegion: "Araucanía",
                addressLocality: "Pitrufquén",
              },
              servesCuisine: ["Bar Food", "Chilean", "Pub"],
              priceRange: "$$-$$$",
              acceptsReservations: true,
              openingHours: ["Tu-We 11:00-00:00", "Th 11:00-02:00", "Fr 11:00-03:00", "Sa 11:00-02:00", "Su 11:00-22:00"],
              image: "/logo.png",
            }),
          }}
        />
        
        {/* Business Schema - Capriccio */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Capriccio Bistro Bar",
              description: "Bistro elegante con cocina de autor y ambiente sofisticado",
              url: "https://grupogastronomicomd.cl/capriccio",
              telephone: "+56930527291",
              email: "reservas@capricciobistro.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Balmaceda 377",
                addressCountry: "CL",
                addressRegion: "Araucanía",
                addressLocality: "Pitrufquén",
              },
              servesCuisine: ["Contemporary", "Bistro", "International"],
              priceRange: "$$$-$$$$",
              acceptsReservations: true,
              openingHours: ["Tu-We 11:00-00:00", "Th 11:00-02:00", "Fr 11:00-03:00", "Sa 11:00-02:00", "Su 11:00-22:00"],
              image: "/logo.png",
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
