import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface DatabaseLocation {
  id: string
  slug: string
  name: string
  concept: string
  address: string
  phone: string
  email: string
  coordinates: { lat: number; lng: number }
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
  long_description: string
  price_range: string
  features: string[]
  specialties: string[]
  atmosphere: string[]
  social_media: {
    instagram?: string
    facebook?: string
    twitter?: string
    whatsapp?: string
  }
  stats: {
    yearsOpen: number
    dishes: number
    chefs: number
    awards: number
  }
  social_proof: {
    reviews: number
    googleRating: number
  }
  active: boolean
  display_order: number
}

export interface BusinessHour {
  id: string
  location_id: string
  day_of_week: number
  open_time: string | null
  close_time: string | null
  is_closed: boolean
}

export interface Promotion {
  id: string
  location_id: string
  title: string
  subtitle: string
  schedule: string
  color: string
  active: boolean
  display_order: number
}

export interface MenuHighlight {
  id: string
  location_id: string
  name: string
  description: string
  price: string
  image_url: string
  active: boolean
  display_order: number
}

export async function getLocationsWithHours() {
  try {
    // Fetch locations
    const { data: locations, error: locError } = await supabase
      .from('locations')
      .select('*')
      .eq('active', true)
      .order('display_order')
    
    if (locError) throw locError
    if (!locations) return []

    // Fetch business hours for all locations
    const locationIds = locations.map(l => l.id)
    const { data: businessHours, error: bhError } = await supabase
      .from('business_hours')
      .select('*')
      .in('location_id', locationIds)
      .order('day_of_week')
    
    if (bhError) throw bhError

    // Fetch promotions
    const { data: promotions, error: promError } = await supabase
      .from('promotions')
      .select('*')
      .in('location_id', locationIds)
      .eq('active', true)
      .order('display_order')
    
    if (promError) throw promError

    // Fetch menu highlights (featured products)
    const { data: menuHighlights, error: mhError } = await supabase
      .from('menu_highlights')
      .select('*')
      .in('location_id', locationIds)
      .eq('active', true)
      .eq('featured', true)  // Only fetch featured items for destacados
      .order('display_order')
      .limit(3)  // Limit to 3 featured items per location
    
    if (mhError) throw mhError

    // Map the data to match the LocationData interface
    return locations.map(location => {
      const locationHours = businessHours?.filter(h => h.location_id === location.id) || []
      const locationPromotions = promotions?.filter(p => p.location_id === location.id) || []
      const locationHighlights = menuHighlights?.filter(h => h.location_id === location.id) || []

      // Format hours object
      const hoursObj = formatBusinessHours(locationHours)

      return {
        id: location.slug,
        name: location.name,
        concept: location.concept,
        path: `/${location.slug}`,
        coordinates: location.coordinates,
        theme: location.theme,
        images: location.images,
        description: location.description,
        longDescription: location.long_description,
        hours: hoursObj,
        specialties: location.specialties,
        atmosphere: location.atmosphere,
        priceRange: location.price_range,
        contact: {
          phone: location.phone,
          address: location.address,
          email: location.email
        },
        features: location.features,
        menuHighlights: locationHighlights.map(h => ({
          id: h.id,
          name: h.name,
          description: h.description || '',
          price: h.price || '',
          image: h.image_url || ''
        })),
        stats: location.stats,
        socialProof: location.social_proof,
        socialMedia: location.social_media,
        promotions: locationPromotions.map(p => ({
          title: p.title,
          subtitle: p.subtitle || '',
          schedule: p.schedule || '',
          color: p.color || ''
        }))
      }
    })
  } catch (error) {
    console.error('Error fetching locations with hours:', error)
    // Return empty array or could throw error based on your error handling strategy
    return []
  }
}

function formatBusinessHours(hours: BusinessHour[]) {
  const daysMap: { [key: number]: string } = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
  }

  const formatted: any = {}
  
  // Individual day hours
  hours.forEach(hour => {
    const dayName = daysMap[hour.day_of_week]
    if (hour.is_closed || !hour.open_time || !hour.close_time) {
      formatted[dayName] = 'CERRADO'
    } else {
      formatted[dayName] = `${formatTime(hour.open_time)} - ${formatTime(hour.close_time)}`
    }
  })

  // Generate weekdays and weekends summary
  const weekdayHours = hours.filter(h => h.day_of_week >= 1 && h.day_of_week <= 5)
  const weekendHours = hours.filter(h => h.day_of_week === 0 || h.day_of_week === 6)

  formatted.weekdays = summarizeHours(weekdayHours, [1, 2, 3, 4, 5])
  formatted.weekends = summarizeHours(weekendHours, [6, 0])

  return formatted
}

function formatTime(time: string): string {
  // Convert from HH:MM:SS to HH:MM
  return time.substring(0, 5)
}

function summarizeHours(hours: BusinessHour[], dayOrder: number[]): string {
  const groups: { [key: string]: number[] } = {}
  
  dayOrder.forEach(dayNum => {
    const hour = hours.find(h => h.day_of_week === dayNum)
    if (!hour) return
    
    const timeStr = hour.is_closed || !hour.open_time || !hour.close_time
      ? 'CERRADO'
      : `${formatTime(hour.open_time)} - ${formatTime(hour.close_time)}`
    
    if (!groups[timeStr]) {
      groups[timeStr] = []
    }
    groups[timeStr].push(dayNum)
  })

  const dayAbbr: { [key: number]: string } = {
    0: 'Dom',
    1: 'Lun',
    2: 'Mar',
    3: 'Mié',
    4: 'Jue',
    5: 'Vie',
    6: 'Sáb'
  }

  return Object.entries(groups)
    .map(([timeStr, days]) => {
      const dayRange = formatDayRange(days, dayAbbr)
      return `${dayRange}: ${timeStr}`
    })
    .join(' | ')
}

function formatDayRange(days: number[], dayAbbr: { [key: number]: string }): string {
  if (days.length === 0) return ''
  if (days.length === 1) return dayAbbr[days[0]]
  
  // Check if consecutive
  const sorted = [...days].sort((a, b) => a - b)
  let isConsecutive = true
  for (let i = 1; i < sorted.length; i++) {
    // Handle Sunday (0) to Monday (1) case
    const expected = sorted[i - 1] === 6 && sorted[i] === 0 ? 0 : sorted[i - 1] + 1
    if (sorted[i] !== expected && sorted[i] !== 0) {
      isConsecutive = false
      break
    }
  }
  
  if (isConsecutive && days.length > 2) {
    return `${dayAbbr[sorted[0]]}-${dayAbbr[sorted[sorted.length - 1]]}`
  }
  
  return sorted.map(d => dayAbbr[d]).join(', ')
}

// Helper function to check if a location is currently open
export async function isLocationOpen(locationId: string): Promise<boolean> {
  try {
    const now = new Date()
    const dayOfWeek = now.getDay()
    const currentTime = now.toTimeString().substring(0, 5) // HH:MM format

    const { data, error } = await supabase
      .from('business_hours')
      .select('open_time, close_time, is_closed')
      .eq('location_id', locationId)
      .eq('day_of_week', dayOfWeek)
      .single()

    if (error || !data || data.is_closed || !data.open_time || !data.close_time) {
      return false
    }

    // Simple time comparison (doesn't handle overnight hours)
    return currentTime >= data.open_time && currentTime <= data.close_time
  } catch {
    return false
  }
}