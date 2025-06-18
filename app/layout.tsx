import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Capriccio Restaurants | Experiencias Gastronómicas Premium en Chile",
    template: "%s | Capriccio Restaurants",
  },
  description:
    "Descubre tres experiencias gastronómicas únicas en Chile. Desde la elegancia urbana de Lumière hasta la cocina costera de Marina. Reserva tu mesa y vive momentos inolvidables.",
  keywords: [
    "restaurante Chile",
    "gastronomía premium",
    "reservas restaurante",
    "cocina mediterránea",
    "mariscos frescos",
    "bistró Santiago",
    "experiencia culinaria",
    "cena romántica",
    "eventos privados",
    "menú degustación",
  ],
  authors: [{ name: "Capriccio Restaurants" }],
  creator: "Capriccio Restaurants",
  publisher: "Capriccio Restaurants",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://v0-restaurant-bice.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://v0-restaurant-bice.vercel.app",
    siteName: "Capriccio Restaurants",
    title: "Capriccio Restaurants | Experiencias Gastronómicas Premium",
    description:
      "Tres restaurantes únicos en Chile que celebran la excelencia culinaria. Desde la sofisticación urbana hasta el encanto costero, descubre tu experiencia gastronómica perfecta.",
  },
  twitter: {
    card: "summary",
    site: "@CapriccioChile",
    creator: "@CapriccioChile",
    title: "Capriccio Restaurants | Experiencias Gastronómicas Premium",
    description: "Tres restaurantes únicos en Chile. Descubre tu experiencia gastronómica perfecta.",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "restaurant",
  classification: "business",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2D5016" },
    { media: "(prefers-color-scheme: dark)", color: "#F4E04D" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2D5016",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Capriccio",
  },
  applicationName: "Capriccio Restaurants",
  generator: "Next.js",
  abstract: "Experiencias gastronómicas premium en tres ubicaciones únicas de Chile",
  archives: [],
  assets: [],
  bookmarks: [],
  other: {
    "msapplication-TileColor": "#2D5016",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="CL" />
        <meta name="geo.placename" content="Chile" />
        <meta name="geo.position" content="-33.4489;-70.6693" />
        <meta name="ICBM" content="-33.4489, -70.6693" />

        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Capriccio Restaurants",
              description: "Experiencias gastronómicas premium en Chile",
              url: "https://v0-restaurant-bice.vercel.app",
              telephone: "+56 2 2345 6789",
              email: "info@capriccio.cl",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CL",
                addressRegion: "Santiago",
                addressLocality: "Santiago",
              },
              servesCuisine: ["Mediterranean", "Seafood", "Contemporary"],
              priceRange: "$$$",
              acceptsReservations: true,
              hasMenu: "https://v0-restaurant-bice.vercel.app/menu",
              openingHours: ["Mo-Fr 07:00-23:00", "Sa-Su 08:00-24:00"],
              sameAs: [
                "https://www.instagram.com/capriccio_chile",
                "https://www.facebook.com/capriccio.chile",
                "https://twitter.com/CapriccioChile",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
