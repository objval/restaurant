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
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
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
    id: "arbol",
    name: "El Árbol",
    concept: "Comida Familiar",
    path: "/arbol",
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
      "En El Árbol Café Restaurante somos un espacio familiar y acogedor, creado con amor para que te sientas como en casa. Aquí, cada detalle ha sido pensado para brindar una experiencia cálida, cercana y llena de sabor.\n\nNos encanta ser el punto de encuentro para quienes buscan compartir un buen café, disfrutar de una rica comida o celebrar momentos especiales rodeados de cariño. Nuestro compromiso es entregarte atención personalizada, un ambiente tranquilo y esa sensación de hogar que tanto valoramos.",
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
        id: "anticuchos-parrilleros",
        name: "Anticuchos Parrilleros",
        description: "Anticuchos grillados de res, cerdo y longaniza Llanquihue de 1000 grs, con tomates cherry glaseados, papas a las finas hierbas y chimichurri",
        price: "$26.500",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop",
      },
      {
        id: "plateada-braseada",
        name: "Plateada braseada con pastelera de choclo",
        description: "Plateada de la zona, en cocción lenta con cerveza artesanal ámbar",
        price: "$16.500",
        image: "https://images.unsplash.com/photo-1588347818036-558601350947?w=500&h=400&fit=crop",
      },
      {
        id: "risotto-di-mare",
        name: "Risotto Di Mare",
        description: "Arroz arbóreo con camarones, champiñones y tomate cherry",
        price: "$12.500",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=400&fit=crop",
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
    id: "1898",
    name: "1898",
    concept: "Beer Bar",
    path: "/1898",
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
      "Somos un bar familiar con alma local y espíritu relajado. En Beer Bar 1898 creemos que no hay nada mejor que compartir una buena cerveza, buena comida y buenas conversaciones en un ambiente cálido y cercano.\n\nAbrimos nuestras puertas para ofrecerte un espacio cómodo, con atención amable, cervezas bien tiradas y una carta pensada para disfrutar entre amigos, en pareja o en familia. Aquí no hay prisa: solo ganas de pasarlo bien, reír, relajarse y volver.",
    hours: {
      weekdays: "Mar-Mié: 11:00 - 00:30 | Jue: 11:00 - 02:00 | Vie: 11:00 - 03:00",
      weekends: "Sáb: 11:00 - 02:00 | Dom: 11:00 - 22:00",
      monday: "CERRADO",
      tuesday: "11:00 - 00:30",
      wednesday: "11:00 - 00:30",
      thursday: "11:00 - 02:00",
      friday: "11:00 - 03:00",
      saturday: "11:00 - 02:00",
      sunday: "11:00 - 22:00",
    },
    specialties: ["Cervezas Artesanales", "Cócteles de Autor", "Música en Vivo"],
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
        id: "tabla-pichanga",
        name: "Tabla grande Pichanga",
        description: "Salteado de res, pollo y longaniza ahumada, con palta, tomate, cebolla perla, pepinillos, aceitunas, queso mantecoso con cama de papas fritas",
        price: "$24.500",
        image: "https://images.unsplash.com/photo-1626083022539-0df938e30e84?w=500&h=400&fit=crop",
      },
      {
        id: "hamburguesa-golosa",
        name: "Hamburguesa Golosa",
        description: "Lechuga, tomate, pepinillo, hamburguesa, tocino, queso cheddar, cebolla caramelizada y huevo",
        price: "$8.900",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
      },
      {
        id: "papas-bravas",
        name: "Papas Bravas c/ salsa picante",
        description: "Papas salteadas con base de salsa bechamel, pasta de ají ahumado, merquén, parmesano y tocino bacon",
        price: "$9.900",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop",
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
        title: "PROMOCIONES 2X",
        subtitle: "2 tragos con 20% descuento",
        schedule: "Martes a Viernes | 16:00 a 21:00hrs",
        color: "#8B4513",
      },
      {
        title: "NOCHE DE KARAOKE",
        subtitle: "Shot de tequila gratis por participar",
        schedule: "Viernes y Sábados | Desde 20:30hrs",
        color: "#FF6B35",
      },
      {
        title: "HAPPY HOUR HEINEKEN",
        subtitle: "2x1 en shop Heineken",
        schedule: "Martes a Viernes | 16:00 a 21:00hrs",
        color: "#00A652",
      },
      {
        title: "TRAGOS ESPECIALES 2X",
        subtitle: "Margarita, Caipirinha, Mojito, Pisco Sour y más",
        schedule: "Martes a Viernes | 16:00 a 21:00hrs",
        color: "#DEB887",
      },
    ],
  },
  {
    id: "capriccio",
    name: "Capriccio",
    concept: "Bistro Bar",
    path: "/capriccio",
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
