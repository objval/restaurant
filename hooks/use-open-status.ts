/**
 * Hook for calculating restaurant open/closed status based on Chilean time
 * Centralizes the open status logic used across multiple components
 */

import { useMemo } from 'react'
import { TIMEZONE_CHILE } from '@/lib/constants'
import type { LocationData } from '@/lib/locations'

export interface OpenStatus {
  isOpen: boolean
  displayText: string
  todayHours: string
}

const DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const

/**
 * Get the current Chilean time
 */
function getChileanTime(): Date {
  const now = new Date()
  return new Date(now.toLocaleString("en-US", { timeZone: TIMEZONE_CHILE }))
}

/**
 * Calculate if a location is currently open based on its hours
 */
export function calculateOpenStatus(location: LocationData): OpenStatus {
  try {
    const chileanTime = getChileanTime()
    const hours = chileanTime.getHours()
    const minutes = chileanTime.getMinutes()
    const currentTimeInMinutes = hours * 60 + minutes
    const dayOfWeek = chileanTime.getDay()
    
    const todayName = DAYS_OF_WEEK[dayOfWeek] as keyof typeof location.hours
    
    // Get hours from the location data
    const todayHours = location.hours[todayName] || ''
    
    if (todayHours === 'CERRADO') {
      return { isOpen: false, displayText: 'CERRADO', todayHours: 'CERRADO' }
    }
    
    // Parse opening hours
    const hoursParts = todayHours.split(' - ')
    if (hoursParts.length === 2) {
      const [openHour, openMin] = hoursParts[0].split(':').map(Number)
      const [closeHour, closeMin] = hoursParts[1].split(':').map(Number)
      
      const openMinutes = openHour * 60 + openMin
      const closeMinutes = closeHour * 60 + closeMin
      
      let isOpen = false
      
      // Handle hours that cross midnight (e.g., closes at 00:30)
      if (closeMinutes < openMinutes) {
        // Open if:
        // 1. It's late evening (after opening) OR
        // 2. It's early morning (before closing)
        isOpen = currentTimeInMinutes >= openMinutes || currentTimeInMinutes < closeMinutes
      } else {
        // Normal hours (e.g., 11:00 to 23:00)
        isOpen = currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes
      }
      
      if (isOpen) {
        return {
          isOpen: true,
          displayText: `Abierto hasta ${hoursParts[1]}`,
          todayHours
        }
      }
    }
    
    return {
      isOpen: false,
      displayText: 'Cerrado',
      todayHours
    }
  } catch {
    return {
      isOpen: false,
      displayText: 'Horario no disponible',
      todayHours: ''
    }
  }
}

/**
 * React hook for getting open status with memoization
 * Re-calculates when location changes
 */
export function useOpenStatus(location: LocationData): OpenStatus {
  return useMemo(() => calculateOpenStatus(location), [location])
}

/**
 * Get simple open/closed status (for simpler components)
 */
export function useIsOpen(location: LocationData): boolean {
  const status = useOpenStatus(location)
  return status.isOpen
}

export default useOpenStatus
