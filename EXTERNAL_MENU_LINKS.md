# External Menu Links Implementation

## Overview
Menu links for **Capriccio Bistro** now redirect to the external fu.do menu URL instead of internal Next.js routes. Other locations (Árbol and 1898) continue to use internal menu pages.

## External Menu URLs

### Location-Specific URLs
- **Capriccio Bistro**: `https://menu.fu.do/capricciobistro/qr-menu` ✅ **External fu.do**
- **Café Restaurant El Árbol**: Internal menu (`/arbol/menu`)
- **Beer Bar 1898**: Internal menu (`/1898/menu`)

## Implementation Details

### 1. Location Data Structure (`lib/locations.ts` & `lib/supabase-locations.ts`)
Added `menuLink?: string` property to the `LocationData` interface. Only Capriccio has this property set:

```typescript
export interface LocationData {
  // ... existing properties
  menuLink?: string  // External menu URL (fu.do) - only set for Capriccio
}

// In supabase-locations.ts
menuLink: location.slug === 'capriccio' ? 'https://menu.fu.do/capricciobistro/qr-menu' : undefined,
```

### 2. Updated Components

#### Featured Products Carousel (`components/featured-products-fan.tsx`)
- **Change**: Converted Next.js `Link` to standard `<a>` tag
- **Behavior**: Opens external menu in new tab
- **Code Pattern**:
  ```typescript
  <a 
    href={locationData.menuLink || `/${locationData.id}/menu`}
    target="_blank"
    rel="noopener noreferrer"
  >
  ```

#### Location Footer (`components/location-footer.tsx`)
- **Change**: Menu link now opens external URL
- **Behavior**: "Menú" link opens fu.do in new tab
- **Fallback**: Internal route if `menuLink` not defined

#### Location Selector (`components/location-selector-client.tsx`)
- **Change**: Updated `handleLocationSelect` and `handleConfirmSavedLocation`
- **Behavior**: When user confirms location, opens external menu
- **Logic**:
  ```typescript
  if (location.menuLink) {
    window.open(location.menuLink, '_blank', 'noopener,noreferrer')
  } else {
    router.push(location.path)  // Fallback to internal route
  }
  ```

#### Location Page Client (`app/[location]/LocationPageClient.tsx`)
- **Changes**: Updated 4 menu link instances
  1. Hero section "Ver Menú" button
  2. Menu highlights grid (clicking product cards)
  3. "Ver Menú Completo" CTA button in features section
- **Behavior**: All menu CTAs open external fu.do menu
- **Removed**: Next.js `Link` import (no longer needed)

## Navigation Pattern

### Capriccio Bistro (External Menu via fu.do)
The following user actions open the external fu.do menu for Capriccio:
- ✅ Clicking "Ver Menú" in hero section
- ✅ Clicking "Ver Menú Completo" CTA
- ✅ Clicking menu highlight product cards
- ✅ Clicking "Menú" in location footer
- ✅ Confirming location selection in first-time flow

### Árbol & 1898 (Internal Menu Pages)
These locations continue to use internal Next.js routes:
- Navigate to `/arbol/menu` or `/1898/menu`
- Full menu functionality with filters, categories, etc.

## Technical Benefits

1. **Hybrid Approach**: Capriccio uses external menu, others use internal - best of both worlds
2. **Better UX for Capriccio**: Users can keep the main site open while browsing the fu.do menu
3. **Menu Platform Integration**: Leverages fu.do's specialized menu features for Capriccio
4. **Maintained Internal Menus**: Árbol and 1898 keep full-featured internal menu pages
5. **SEO**: Opens in new tab for Capriccio, preserving user's place on main site

## Fallback Behavior

All components include fallback logic:
```typescript
locationData.menuLink || `/${locationData.id}/menu`
```

This ensures:
- **Capriccio**: `menuLink` is defined → Opens external fu.do menu in new tab
- **Árbol & 1898**: `menuLink` is undefined → Falls back to internal route (`/arbol/menu`, `/1898/menu`)

## Testing Checklist

### Capriccio (External fu.do menu)
- [ ] Featured products carousel menu link
- [ ] Location footer menu link
- [ ] Location selector confirmation flow
- [ ] Hero section "Ver Menú" button
- [ ] Menu highlights product cards
- [ ] "Ver Menú Completo" CTA button
- [ ] Opens in new tab with fu.do URL

### Árbol & 1898 (Internal menu)
- [ ] All menu CTAs navigate to internal `/[location]/menu` route
- [ ] Menu filters and categories work correctly
- [ ] Product details and modals function properly

## Files Modified

1. `lib/locations.ts` - Added `menuLink` property and URLs
2. `components/featured-products-fan.tsx` - External link implementation
3. `components/location-footer.tsx` - External link implementation
4. `components/location-selector-client.tsx` - External link on selection
5. `app/[location]/LocationPageClient.tsx` - 4 menu link updates

## Notes

- All external links use `target="_blank"` and `rel="noopener noreferrer"` for security
- No breaking changes to existing functionality
- Internal menu routes (`/[location]/menu`) still exist but are not actively linked
- Can be deprecated in future if no longer needed
