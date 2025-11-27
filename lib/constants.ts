/**
 * Application constants
 * Centralized configuration values to avoid magic numbers
 */

// File upload limits
export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024 // 5MB
export const MAX_IMAGE_SIZE_MB = 5

// Cache settings
export const IMAGE_CACHE_TTL = 3600 // 1 hour in seconds

// Animation durations (ms)
export const GALLERY_AUTOPLAY_INTERVAL = 4000
export const PROMO_AUTOPLAY_INTERVAL = 5000
export const ANIMATION_DURATION_FAST = 200
export const ANIMATION_DURATION_NORMAL = 300
export const ANIMATION_DURATION_SLOW = 500

// Pagination
export const DEFAULT_PAGE_SIZE = 10
export const PRODUCTS_PER_PAGE = 12
export const INSTAGRAM_FEED_LIMIT = 6

// Instagram token settings
export const INSTAGRAM_TOKEN_EXPIRY_DAYS = 60

// Validation
export const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

// Chilean timezone
export const TIMEZONE_CHILE = 'America/Santiago'
