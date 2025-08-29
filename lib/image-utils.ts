// Utility functions for image optimization and placeholders

// Generic blur data URL for placeholder effect
export const BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAiIC8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM4ODgiIGZpbHRlcj0idXJsKCNiKSIgb3BhY2l0eT0iMC41IiAvPjwvc3ZnPg=="

// Color-specific blur placeholders
export const BLUR_PLACEHOLDERS = {
  warm: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiAvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmE4MDcyIiBmaWx0ZXI9InVybCgjYikiIG9wYWNpdHk9IjAuNiIgLz48L3N2Zz4=",
  forest: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiAvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjI4ODQ0IiBmaWx0ZXI9InVybCgjYikiIG9wYWNpdHk9IjAuNiIgLz48L3N2Zz4=",
  brown: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiAvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGI0NTEzIiBmaWx0ZXI9InVybCgjYikiIG9wYWNpdHk9IjAuNiIgLz48L3N2Zz4=",
  teal: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiAvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA4MDgwIiBmaWx0ZXI9InVybCgjYikiIG9wYWNpdHk9IjAuNiIgLz48L3N2Zz4="
}

// Get blur placeholder based on location ID
export function getLocationBlurPlaceholder(locationId: string): string {
  switch (locationId) {
    case 'arbol':
      return BLUR_PLACEHOLDERS.forest
    case '1898':
      return BLUR_PLACEHOLDERS.brown
    case 'capriccio':
      return BLUR_PLACEHOLDERS.teal
    default:
      return BLUR_PLACEHOLDERS.warm
  }
}

// Optimized sizes for responsive images
export const IMAGE_SIZES = {
  // For hero/background images
  hero: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw",
  
  // For card images in grid
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  
  // For mobile cards
  mobile: "(max-width: 640px) 100vw, 50vw",
  
  // For thumbnails
  thumbnail: "(max-width: 640px) 50vw, 25vw"
}