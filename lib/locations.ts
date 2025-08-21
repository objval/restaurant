export interface LocationData {
  id: string
  name: string
  concept: string
  path: string
  logoUrl?: string
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
    reviews: number
    googleRating: number
  }
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
    whatsapp?: string
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
    concept: "Café Restaurante",
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
      hero: "/arbol/1.jpg",
      interior: "/arbol/2.jpg",
      signature: "/arbol/torta.jpeg",
      ambiance: "/arbol/4.jpg",
      gallery: [
        "/arbol/1.jpg",
        "/arbol/2.jpg",
        "/arbol/3.jpg",
        "/arbol/4.jpg",
      ],
    },
    description: "El lugar perfecto para reuniones familiares y celebraciones especiales con elegancia y calidez.",
    longDescription:
      "En El Árbol Café Restaurante somos un espacio familiar y acogedor, creado con amor para que te sientas como en casa. Aquí, cada detalle ha sido pensado para brindar una experiencia cálida, cercana y llena de sabor.\n\nNos encanta ser el punto de encuentro para quienes buscan compartir un buen café, disfrutar de una rica comida o celebrar momentos especiales rodeados de cariño. Nuestro compromiso es entregarte atención personalizada, un ambiente tranquilo y esa sensación de hogar que tanto valoramos.",
    hours: {
      weekdays: "Lun-Mié: 11:00 - 22:30 | Jue-Vie: 11:00 - 23:30",
      weekends: "Sáb: 11:30 - 23:30 | Dom: CERRADO",
      monday: "11:00 - 22:30",
      tuesday: "11:00 - 22:30",
      wednesday: "11:00 - 22:30",
      thursday: "11:00 - 23:30",
      friday: "11:00 - 23:30",
      saturday: "11:30 - 23:30",
      sunday: "CERRADO",
    },
    specialties: ["Menús Familiares", "Mesas Grandes", "Menú Infantil", "Celebraciones"],
    atmosphere: ["Familiar", "Cálido", "Acogedor", "Celebraciones"],
    priceRange: "$$-$$$",
    contact: {
      phone: "+56942262266",
      address: "Manuel Rodríguez 792, Pitrufquén, Araucanía",
      email: "contacto@elarbol.cl",
    },
    features: ["Sillas para Niños", "Área de Juegos", "Menú Familiar", "Eventos Privados"],
    menuHighlights: [
      {
        id: "crudo",
        name: "Crudo",
        description: "Suave corte de res, cebolla morada, pepinillo y ají verde en brunoise, cilantro, gajos de limón, tostadas y salsa de sour cream de la casa.",
        price: "$11.900",
        image: "/arbol/crudo.jpg",
      },
      {
        id: "ceviche-salmon-camaron",
        name: "Ceviche de Salmón - Camarón",
        description: "Camarones, doble porción de Salmón, cebolla morada, manzanas verdes, paltas, pimentón, semilla de sésamo, cilantro, jengibre, sal, limón, merquén, leche de tigre. Lechuga, grisines de ajo y tostadas. ",
        price: "$13.900",
        image: "/arbol/ceviche.jpeg",
      },
      {
        id: "tomahawk-arbol",
        name: "Tomahawk El Árbol",
        description: "Tomahawk 700 grs Acompañado de tomates cherry glaseados, vegetales asados, papas a las finas hierbas y salsas de merkén & chimichurri ahumado. Maridaje recomendado: Cabernet Sauvignon Pajo Premier Cru, Viña La Quirigua (Valle de Cachapoal).",
        price: "$24.500",
        image: "/arbol/tomahawk.jpeg",
      },
    ],
    stats: {
      yearsOpen: 8,
      dishes: 45,
      chefs: 6,
      awards: 3,
      
    },
    socialProof: {
      reviews: 1247,
      googleRating: 4.7,
    },
    socialMedia: {
      instagram: "https://www.instagram.com/elarbol_cafe_restaurante",
      facebook: "https://www.facebook.com/p/Caf%C3%A9-Restaurante-El-%C3%81rbol-100057454611429/",
      whatsapp: "+56942262266",
    },
    promotions: [
      {
        title: "30% DESCUENTO",
        subtitle: "En pastas frescas",
        schedule: "Todos los sábados",
        color: "#2D5016",
      },
      {
        title: "2X EN CÓCTELES",
        subtitle: "Promoción especial",
        schedule: "Lunes a Viernes | 16:00 a 20:00hrs",
        color: "#D4AF37",
      },
      {
        title: "MENÚ EJECUTIVO",
        subtitle: "Entrada, plato principal y postre",
        schedule: "Lunes a Viernes | 12:00 a 15:30",
        color: "#F4E04D",
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
      hero: "/locations/1898.jpg",
      interior: "/locations/1898.jpg",
      signature: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop",
      ambiance: "/locations/1898.jpg",
      gallery: [
        "/1898/1.jpg",
        "/1898/2.jpg",
        "/1898/3.jpg",
        "/1898/evento1.jpg",
        "/1898/evento2.jpg",
        "/1898/evento3.jpg",
        "/1898/evento4.jpg"
      ],
    },
    description: "El lugar perfecto para una noche relajada con amigos, cervezas artesanales y ambiente de bar.",
    longDescription:
      "Nuestra historia comienza con un profundo amor por nuestra tierra y sus tradiciones. En Beer Bar 1898 llevamos con orgullo un nombre que no es casualidad: 1898 marca el año en que se fundó Pitrufquén, la ciudad que es nuestro hogar y a la que rendimos homenaje cada día. Nuestro bar nace con el deseo de rescatar ese espíritu local, arraigado en la historia y en la comunidad, y lo hacemos desde uno de los edificios más emblemáticos del centro: la antigua y querida estación de bomberos de Pitrufquén. Este lugar cargado de historia nos inspira a ofrecer una experiencia auténtica, donde cada cerveza, plato y sonrisa reflejan el valor de las raíces, la cercanía y el encuentro. Somos un bar familiar con alma local, creado para quienes disfrutan de los buenos momentos sin prisa, con sabor a historia y corazón sureño. Además, con orgullo somos pioneros como restobar colaborar con Djs y karaoke en la ciudad y pioneros en primer evento de motoqueros abriendo el camino para una nueva forma de disfrutar la noche en Pitrufquén.",
    hours: {
      weekdays: "Mar-Mié: 11:00 - 00:00 | Jue: 11:00 - 02:00 | Vie: 11:00 - 03:00",
      weekends: "Sáb: 11:00 - 02:00 | Dom: 11:00 - 22:00",
      monday: "CERRADO",
      tuesday: "11:00 - 00:00",
      wednesday: "11:00 - 00:00",
      thursday: "11:00 - 02:00",
      friday: "11:00 - 03:00",
      saturday: "11:00 - 02:00",
      sunday: "11:00 - 22:00",
    },
    specialties: ["Cervezas Artesanales", "Cócteles de Autor", "Música en Vivo"],
    atmosphere: ["Bar", "Nocturno", "Social", "Relajado"],
    priceRange: "$$-$$$",
    contact: {
      phone: "+56997180227",
      address: "Francisco Bilbao 539, Pitrufquén, Araucanía",
      email: "contacto@1898.cl",
    },
    features: ["Barra de Cervezas", "Música en Vivo", "Terraza", "Karaoke"],
    menuHighlights: [
      {
        id: "chorrillana-1898",
        name: "Chorrillana 1898",
        description: "Crujientes papas fritas con cubos de carne de res, pollo y longaniza, queso, huevos fritos y cebolla caramelizada",
        price: "$23.500",
        image: "/1898/chorrillana.jpeg",
      },
      {
        id: "pizza-1898",
        name: "Pizza 1898",
        description: "Vacuno, pollo, tocino, salame, chorizo y tomate - Especialidad de la casa",
        price: "$17.900",
        image: "/1898/pizza.jpeg",
      },
      {
        id: "churrasco-1898",
        name: "Churrasco 1898",
        description: "Carne de res, palta, tomate, lechuga, cebolla caramelizada y champiñones salteados",
        price: "$10.900",
        image: "/1898/churrasco.jpeg",
      },
    ],
    stats: {
      yearsOpen: 5,
      dishes: 38,
      chefs: 4,
      awards: 2,
    },
    socialProof: {
      reviews: 892,
      googleRating: 4.8,
    },
    socialMedia: {
      instagram: "https://www.instagram.com/beerbar1898",
      facebook: "https://www.facebook.com/1898beerbar",
      whatsapp: "+56997180227",
    },
    promotions: [
      {
        title: "COMBO HEINEKEN",
        subtitle: "Heineken + Completo italiano por $6.990",
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
      primary: "#B8860B", // Dark golden rod
      secondary: "#FFD700", // Gold
      accent: "#FFA500", // Orange gold
      background: "#FFFAF0", // Floral white with warm tint
      text: "#3D2914", // Dark brown
      overlay: "rgba(184, 134, 11, 0.85)",
    },
    images: {
      hero: "/locations/capriccio.jpg",
      interior: "/locations/capriccio.jpg",
      signature: "/capriccio/capriccio.jpeg",
      ambiance: "/locations/capriccio.jpg",
      gallery: [
        "/capriccio/1.jpg",
        "/capriccio/2.jpg",
        "/capriccio/3.jpg"
      ],
    },
    description: "Ambiente elegante y sofisticado, perfecto para cenas especiales y experiencias gastronómicas únicas.",
    longDescription:
      "Capriccio Bistró Bar & Tapas surge con el propósito de aportar innovación y sofisticación a la comuna de Pitrufquén, ofreciendo un espacio que combina la elegancia y estilo de un bar europeo con la esencia de lo local. Nuestra propuesta se basa en el uso de productos frescos y de origen local, valorando a los productores de la zona y generando oportunidades de empleo para la comunidad. Con una exclusiva coctelería de autor y una gastronomía diferenciada, buscamos entregar experiencias únicas que reflejen tanto modernidad como identidad local.",
    hours: {
      weekdays: "Mar-Mié: 17:00 - 00:30 | Jue: 17:00 - 02:30 | Vie: 17:00 - 03:30",
      weekends: "Sáb: 17:00 - 03:30 | Dom: CERRADO",
      monday: "CERRADO",
      tuesday: "17:00 - 00:30",
      wednesday: "17:00 - 00:30",
      thursday: "17:00 - 02:30",
      friday: "17:00 - 03:30",
      saturday: "17:00 - 03:30",
      sunday: "CERRADO",
    },
    specialties: ["Cocina de Autor", "Cócteles Premium", "Ambiente Ejecutivo"],
    atmosphere: ["Elegante", "Sofisticado", "Romántico", "Ejecutivo"],
    priceRange: "$$$-$$$$",
    contact: {
      phone: "+56930527291",
      address: "Av. Balmaceda 377, Pitrufquén, Araucanía",
      email: "reservas@capricciobistro.cl",
    },
    features: ["Carta de Vinos Premium", "Música Ambient", "Terraza VIP", "Servicio Valet"],
    menuHighlights: [
      {
        id: "tabla-fuego-brasa",
        name: "Tabla de Fuego y Brasa",
        description: "Costillar, pollo al rostro y cerdo sobre papas rústicas con chimichurri casero - Ideal para 4 personas",
        price: "$28.990",
        image: "/capriccio/fuego.jpg",
      },
      {
        id: "ceviche-pacifico",
        name: "Ceviche del Pacífico",
        description: "Cubos de atún fresco marinados al estilo leche de tigre con cítricos y chips de plátano verde",
        price: "$16.990",
        image: "/capriccio/ceviche.jpeg",
      },
      {
        id: "capriccio",
        name: "Capriccio",
        description: "Camarones ecuatorianos salteados con ají sobre patacón de plátano verde",
        price: "$7.990",
        image: "/capriccio/capriccio.jpeg",
      },
    ],
    stats: {
      yearsOpen: 12,
      dishes: 52,
      chefs: 8,
      awards: 5,
    },
    socialProof: {
      reviews: 2156,
      googleRating: 4.8,
    },
    socialMedia: {
      instagram: "https://www.instagram.com/capriccio.pitrufquen/",
      facebook: "https://www.facebook.com/capricciobistro",
      whatsapp: "+56930527291",
    },
    promotions: [
      {
        title: "JUEVES DE CHICAS",
        subtitle: "Promociones especiales",
        schedule: "Jueves | Desde apertura hasta cierre",
        color: "#FF7F50",
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
