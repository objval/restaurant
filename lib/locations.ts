export interface LocationData {
  id: string
  name: string
  concept: string
  path: string
  coordinates: {
    lat: number
    lng: number
  }
  theme: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    overlay: string
  }
  images: {
    hero: string
    interior: string
    signature: string
    ambiance: string
    gallery: string[]
  }
  description: string
  longDescription: string
  hours: {
    weekdays: string
    weekends: string
  }
  specialties: string[]
  atmosphere: string[]
  priceRange: string
  contact: {
    phone: string
    address: string
    email: string
  }
  features: string[]
  menuHighlights: {
    id: string // Added ID for better URL handling
    name: string
    description: string
    price: string
    image: string
  }[]
  stats: {
    yearsOpen: number
    dishes: number
    chefs: number
    awards: number
  }
  socialProof: {
    rating: number
    reviews: number
    googleRating: number
  }
  promotions: {
    title: string
    subtitle: string
    schedule: string
    color: string
  }[]
}

export const locations: LocationData[] = [
  {
    id: "location1",
    name: "El Árbol",
    concept: "Comida Familiar",
    path: "/location1",
    coordinates: { lat: -38.985779, lng: -72.639160 },
    theme: {
      primary: "#2D5016", // Deep forest green
      secondary: "#D4AF37", // Gold
      accent: "#F4E04D", // Bright yellow
      background: "#FEFDF8", // Cream white
      text: "#1A1A1A", // Almost black
      overlay: "rgba(45, 80, 22, 0.85)", // Green with transparency
    },
    images: {
      hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      interior: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      signature: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      ambiance: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      ],
    },
    description: "El lugar perfecto para reuniones familiares y celebraciones especiales con elegancia y calidez.",
    longDescription:
      "El Árbol es el destino ideal para crear memorias familiares inolvidables. Con espacios amplios, menús para todas las edades y un ambiente cálido y acogedor, cada cena se convierte en una celebración especial.",
    hours: {
      weekdays: "Lun-Vie: 7:00 - 23:00",
      weekends: "Sáb-Dom: 8:00 - 24:00",
    },
    specialties: ["Menús Familiares", "Mesas Grandes", "Menú Infantil", "Celebraciones"],
    atmosphere: ["Familiar", "Cálido", "Acogedor", "Celebraciones"],
    priceRange: "$$-$$$",
    contact: {
      phone: "+56 2 2345 6789",
      address: "Manuel Rodríguez 792, Pitrufquén, Araucanía",
      email: "contacto@elarbol.cl",
    },
    features: ["Sillas para Niños", "Área de Juegos", "Menú Familiar", "Eventos Privados"],
    menuHighlights: [
      {
        id: "asado-familiar",
        name: "Asado Familiar",
        description: "Carne premium para compartir con guarniciones variadas",
        price: "$45.990",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&h=400&fit=crop",
      },
      {
        id: "risotto-trufa",
        name: "Risotto de Trufa",
        description: "Arroz carnaroli con trufa negra y parmesano envejecido",
        price: "$26.990",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=400&fit=crop",
      },
      {
        id: "menu-infantil",
        name: "Menú Infantil",
        description: "Platos especiales diseñados para los más pequeños",
        price: "$12.990",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop",
      },
    ],
    stats: {
      yearsOpen: 8,
      dishes: 45,
      chefs: 6,
      awards: 3,
    },
    socialProof: {
      rating: 4.8,
      reviews: 1247,
      googleRating: 4.7,
    },
    promotions: [
      {
        title: "DOMINGO FAMILIAR",
        subtitle: "15% descuento familias",
        schedule: "Domingos | 12:00 a 18:00hrs",
        color: "#2D5016",
      },
      {
        title: "MENÚ INFANTIL",
        subtitle: "Gratis con adulto",
        schedule: "Todos los días",
        color: "#D4AF37",
      },
      {
        title: "CUMPLEAÑOS",
        subtitle: "Torta gratis",
        schedule: "Reservas especiales",
        color: "#F4E04D",
      },
      {
        title: "ALMUERZO FAMILIAR",
        subtitle: "Menú especial de mediodía",
        schedule: "Lunes a Viernes | 12:00 a 16:00hrs",
        color: "#8B4513",
      },
    ],
  },
  {
    id: "location2",
    name: "1898",
    concept: "Beer Bar",
    path: "/location2",
    coordinates: { lat: -39.0089, lng: -72.6412 },
    theme: {
      primary: "#8B4513", // Saddle brown
      secondary: "#DEB887", // Burlywood
      accent: "#FF6B35", // Orange red
      background: "#FFF8F0", // Floral white
      text: "#2F1B14", // Dark brown
      overlay: "rgba(139, 69, 19, 0.8)",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop",
      interior: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      signature: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      ambiance: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      ],
    },
    description: "El lugar perfecto para una noche relajada con amigos, cervezas artesanales y ambiente de bar.",
    longDescription:
      "1898 es el spot perfecto para desenrollarse después del trabajo o disfrutar una noche con amigos. Con una selección de cervezas artesanales, cócteles creativos y picoteos deliciosos, es el lugar ideal para socializar.",
    hours: {
      weekdays: "Lun-Vie: 16:00 - 02:00",
      weekends: "Sáb-Dom: 14:00 - 03:00",
    },
    specialties: ["Cervezas Artesanales", "Cócteles de Autor", "Tapas", "Música en Vivo"],
    atmosphere: ["Bar", "Nocturno", "Social", "Relajado"],
    priceRange: "$$-$$$",
    contact: {
      phone: "+56 2 3456 7890",
      address: "Calle Arturo Prat 456, Pitrufquén, Araucanía",
      email: "contacto@1898.cl",
    },
    features: ["Barra de Cervezas", "Música en Vivo", "Terraza", "Karaoke"],
    menuHighlights: [
      {
        id: "tabla-quesos",
        name: "Tabla de Quesos",
        description: "Selección de quesos artesanales con acompañamientos",
        price: "$19.990",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=400&fit=crop",
      },
      {
        id: "alitas-bbq",
        name: "Alitas BBQ",
        description: "Alitas de pollo con salsa barbacoa casera",
        price: "$16.990",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&h=400&fit=crop",
      },
      {
        id: "fish-chips",
        name: "Fish & Chips",
        description: "Pescado rebozado con papas fritas artesanales",
        price: "$22.990",
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=400&fit=crop",
      },
    ],
    stats: {
      yearsOpen: 5,
      dishes: 38,
      chefs: 4,
      awards: 2,
    },
    socialProof: {
      rating: 4.9,
      reviews: 892,
      googleRating: 4.8,
    },
    promotions: [
      {
        title: "HAPPY HOUR",
        subtitle: "2x1 en cervezas",
        schedule: "Lunes a Viernes | 17:00 a 20:00hrs",
        color: "#8B4513",
      },
      {
        title: "NOCHE DE KARAOKE",
        subtitle: "Micrófono abierto",
        schedule: "Jueves | 21:00 a 01:00hrs",
        color: "#FF6B35",
      },
      {
        title: "WEEKEND VIBES",
        subtitle: "DJ sets en vivo",
        schedule: "Viernes y Sábados | 22:00 a 02:00hrs",
        color: "#DEB887",
      },
    ],
  },
  {
    id: "location3",
    name: "Capriccio",
    concept: "Bistro Bar",
    path: "/location3",
    coordinates: { lat: -39.0098, lng: -72.6398 },
    theme: {
      primary: "#1B4B5A", // Dark teal
      secondary: "#4A90A4", // Steel blue
      accent: "#FF7F50", // Coral
      background: "#F8FDFF", // Alice blue
      text: "#0F2027", // Very dark blue
      overlay: "rgba(27, 75, 90, 0.85)",
    },
    images: {
      hero: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&h=800&fit=crop",
      interior: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop",
      signature: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
      ambiance: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
      ],
    },
    description: "Ambiente elegante y sofisticado, perfecto para cenas especiales y experiencias gastronómicas únicas.",
    longDescription:
      "Capriccio combina la elegancia de un bistro europeo con la sofisticación de un bar moderno. Ideal para cenas románticas, reuniones de negocios o cualquier ocasión especial que requiera un toque de distinción.",
    hours: {
      weekdays: "Lun-Vie: 12:00 - 01:00",
      weekends: "Sáb-Dom: 11:00 - 02:00",
    },
    specialties: ["Cocina de Autor", "Cócteles Premium", "Vinos Seleccionados", "Ambiente Ejecutivo"],
    atmosphere: ["Elegante", "Sofisticado", "Romántico", "Ejecutivo"],
    priceRange: "$$$-$$$$",
    contact: {
      phone: "+56 2 4567 8901",
      address: "Av. Alemania 789, Pitrufquén, Araucanía",
      email: "reservas@capricciobistro.cl",
    },
    features: ["Carta de Vinos Premium", "Música Ambient", "Terraza VIP", "Servicio Valet"],
    menuHighlights: [
      {
        id: "beef-wellington",
        name: "Beef Wellington",
        description: "Filete de res envuelto en masa hojaldre con foie gras",
        price: "$42.990",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=400&fit=crop",
      },
      {
        id: "salmon-glaciado",
        name: "Salmón Glaciado",
        description: "Salmón lacado en miel y soja con vegetales asiáticos",
        price: "$34.990",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&h=400&fit=crop",
      },
      {
        id: "risotto-mariscos",
        name: "Risotto de Mariscos",
        description: "Arroz cremoso con mariscos frescos y azafrán",
        price: "$28.990",
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=400&fit=crop",
      },
    ],
    stats: {
      yearsOpen: 12,
      dishes: 52,
      chefs: 8,
      awards: 5,
    },
    socialProof: {
      rating: 4.9,
      reviews: 2156,
      googleRating: 4.8,
    },
    promotions: [
      {
        title: "AFTER OFFICE",
        subtitle: "Cócteles premium",
        schedule: "Lunes a Viernes | 18:00 a 20:00hrs",
        color: "#1B4B5A",
      },
      {
        title: "CENA ROMÁNTICA",
        subtitle: "Mesa VIP con vista",
        schedule: "Viernes y Sábados | 20:00 a 23:00hrs",
        color: "#FF7F50",
      },
      {
        title: "WINE TASTING",
        subtitle: "Degustación de vinos",
        schedule: "Jueves | 19:00 a 21:00hrs",
        color: "#4A90A4",
      },
    ],
  },
]

// Haversine formula to calculate distance between coordinates
export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export function findNearestLocation(userLat: number, userLng: number): LocationData {
  let nearest = locations[0]
  let minDistance = Number.POSITIVE_INFINITY

  for (const location of locations) {
    const distance = getDistance(userLat, userLng, location.coordinates.lat, location.coordinates.lng)
    if (distance < minDistance) {
      minDistance = distance
      nearest = location
    }
  }

  return nearest
}
