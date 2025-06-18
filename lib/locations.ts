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
    name: "Capriccio Lumière",
    concept: "Bistró Cotidiano",
    path: "/location1",
    coordinates: { lat: 40.7589, lng: -73.9851 },
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
    description: "Experiencia gastronómica cotidiana con elegancia y sofisticación en cada detalle.",
    longDescription:
      "Capriccio Lumière es donde lo cotidiano se convierte en algo especial. Un espacio atemporal que invita a compartir momentos genuinos alrededor de la mesa, con una propuesta gastronómica que cree en el poder de la buena comida para conectar a las personas.",
    hours: {
      weekdays: "Lun-Vie: 7:00 - 23:00",
      weekends: "Sáb-Dom: 8:00 - 24:00",
    },
    specialties: ["Brunch Artesanal", "Cócteles Signature", "Almuerzo Ejecutivo", "Cenas Íntimas"],
    atmosphere: ["Elegancia Cotidiana", "Ambiente Sofisticado", "Calidez Familiar", "Lujo Accesible"],
    priceRange: "$$-$$$",
    contact: {
      phone: "+56 2 2345 6789",
      address: "Av. Providencia 123, Santiago Centro, Santiago",
      email: "lumiere@capriccio.cl",
    },
    features: ["Bar Especializado", "Eventos Privados", "Terraza Jardín", "Música Ambiente"],
    menuHighlights: [
      {
        id: "benedict-lumiere",
        name: "Benedict Lumière",
        description: "Huevos pochados sobre brioche artesanal con salmón ahumado",
        price: "$18.990",
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
        id: "bife-ciudad",
        name: "Cordero Confitado",
        description: "Pierna de cordero con hierbas mediterráneas y vegetales asados",
        price: "$32.990",
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
        title: "EARLY LUNCH",
        subtitle: "15% de descuento",
        schedule: "Lunes a Viernes | 12:30 a 13:00hrs",
        color: "#2D5016",
      },
      {
        title: "HAPPY HOUR",
        subtitle: "2x1 en cócteles seleccionados",
        schedule: "Lunes a Sábados | 17:00 a 20:00hrs",
        color: "#D4AF37",
      },
      {
        title: "COPA GRATIS",
        subtitle: "Si sacas un 8 antes de las 8",
        schedule: "Solo miércoles | 17:00 - 20:00 hrs",
        color: "#F4E04D",
      },
      {
        title: "BRUNCH",
        subtitle: "Menú especial de fin de semana",
        schedule: "Sábados/Domingos | 10:00 a 17:00hrs",
        color: "#8B4513",
      },
    ],
  },
  {
    id: "location2",
    name: "Capriccio Giardino",
    concept: "Jardín Mediterráneo",
    path: "/location2",
    coordinates: { lat: 40.7831, lng: -73.9712 },
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
    description: "Sabores mediterráneos en un oasis urbano rodeado de naturaleza y tranquilidad.",
    longDescription:
      "Capriccio Giardino te transporta a la costa mediterránea con su ambiente natural y cocina fresca. Nuestro jardín interior y terraza crean el escenario perfecto para disfrutar de ingredientes orgánicos y preparaciones que celebran la simplicidad elegante.",
    hours: {
      weekdays: "Lun-Vie: 8:00 - 22:00",
      weekends: "Sáb-Dom: 9:00 - 23:00",
    },
    specialties: ["Cocina Mediterránea", "Ingredientes Orgánicos", "Terraza Jardín", "Vinos Naturales"],
    atmosphere: ["Oasis Natural", "Mediterráneo", "Relajado", "Orgánico"],
    priceRange: "$$$",
    contact: {
      phone: "+56 2 3456 7890",
      address: "Las Condes 456, Providencia, Santiago",
      email: "giardino@capriccio.cl",
    },
    features: ["Jardín Interior", "Terraza al Aire Libre", "Menú Vegano", "Catas de Aceite"],
    menuHighlights: [
      {
        id: "bruschetta-jardin",
        name: "Burrata Mediterránea",
        description: "Burrata fresca con tomates heritage y albahaca del jardín",
        price: "$16.990",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop",
      },
      {
        id: "salmon-hierbas",
        name: "Branzino al Limón",
        description: "Pescado mediterráneo con hierbas frescas y aceite de oliva",
        price: "$28.990",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop",
      },
      {
        id: "risotto-trufa",
        name: "Paella Valenciana",
        description: "Arroz bomba con mariscos frescos y azafrán auténtico",
        price: "$34.990",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500&h=400&fit=crop",
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
        title: "ALMUERZO JARDÍN",
        subtitle: "Menú mediterráneo",
        schedule: "Lunes a Viernes | 12:00 a 16:00hrs",
        color: "#8B4513",
      },
      {
        title: "APERITIVO",
        subtitle: "Tabla de quesos y vinos",
        schedule: "Todos los días | 18:00 a 21:00hrs",
        color: "#DEB887",
      },
      {
        title: "DOMINGO FAMILIAR",
        subtitle: "Paella para compartir",
        schedule: "Domingos | 13:00 a 18:00hrs",
        color: "#FF6B35",
      },
    ],
  },
  {
    id: "location3",
    name: "Capriccio Marina",
    concept: "Cocina Costera",
    path: "/location3",
    coordinates: { lat: 40.7282, lng: -73.9942 },
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
    description: "Mariscos frescos y vistas espectaculares en un ambiente costero sofisticado.",
    longDescription:
      "Capriccio Marina celebra los sabores del océano con una propuesta culinaria que honra la tradición marinera. Nuestras ventanas panorámicas y terraza ofrecen el escenario perfecto para disfrutar de mariscos frescos mientras contemplas el horizonte infinito.",
    hours: {
      weekdays: "Lun-Vie: 11:00 - 23:00",
      weekends: "Sáb-Dom: 10:00 - 24:00",
    },
    specialties: ["Mariscos Frescos", "Ceviches Autorales", "Vistas Panorámicas", "Coctelería Marina"],
    atmosphere: ["Vista al Mar", "Brisa Marina", "Elegancia Costera", "Atardeceres Únicos"],
    priceRange: "$$$-$$$$",
    contact: {
      phone: "+56 2 4567 8901",
      address: "Av. Costanera 789, Viña del Mar, Valparaíso",
      email: "marina@capriccio.cl",
    },
    features: ["Vista Panorámica", "Terraza Marina", "Bar de Ostras", "Música Jazz"],
    menuHighlights: [
      {
        id: "cioppino-costero",
        name: "Ceviche Nikkei",
        description: "Pescado del día con leche de tigre y toque oriental",
        price: "$22.990",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=400&fit=crop",
      },
      {
        id: "sandwich-centolla",
        name: "Langosta Thermidor",
        description: "Langosta gratinada con salsa cremosa y hierbas finas",
        price: "$45.990",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&h=400&fit=crop",
      },
      {
        id: "mar-tierra",
        name: "Parrillada Marina",
        description: "Selección de mariscos y pescados a la parrilla",
        price: "$38.990",
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
        title: "MARISCOS AL MEDIODÍA",
        subtitle: "Menú ejecutivo marino",
        schedule: "Lunes a Viernes | 12:00 a 15:00hrs",
        color: "#1B4B5A",
      },
      {
        title: "SUNSET COCKTAILS",
        subtitle: "Cócteles con vista al atardecer",
        schedule: "Todos los días | 18:00 a 20:00hrs",
        color: "#FF7F50",
      },
      {
        title: "NOCHE DE OSTRAS",
        subtitle: "Degustación de ostras frescas",
        schedule: "Viernes | 19:00 a 22:00hrs",
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
