# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

Note: This project uses pnpm as the package manager. A bun.lock file is also present but pnpm is the primary package manager.

## Architecture Overview

This is a **Next.js 15** restaurant showcase application using the App Router pattern. The architecture follows a multi-location restaurant system with dynamic routing and client-side location preferences.

### Core Flow
1. **Initial Visit**: Users land on the location selector page (`app/page.tsx`)
2. **Location Selection**: Users can manually select or use geolocation to find the nearest restaurant
3. **Restaurant Experience**: Each location has its own themed landing page and menu
4. **Persistence**: Location preferences are saved in localStorage for returning visitors

### Key Architectural Decisions

- **Dynamic Routes**: `app/[location]/` handles different restaurant locations
- **Client-Side State**: Location preferences and returning customer flow use localStorage
- **Component Library**: Extensive use of shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Type Safety**: Full TypeScript with strict mode enabled

## Data Structure

### Location Data (`lib/locations.ts`)
Each restaurant location contains:
- Unique ID, name, and concept
- Coordinates for geolocation features
- Custom theme colors
- Image galleries
- Business hours and contact info
- Menu highlights
- Social proof stats

### Menu Data (`menu_scraped.json`)
- Category-based organization
- Item details: name, price, description
- Shared across all locations (currently)

## Component Patterns

### UI Components (`components/ui/`)
- All shadcn/ui components with Radix UI primitives
- Use CSS variables for theming (e.g., `--primary`, `--background`)
- Components use `cn()` utility for className merging

### Feature Components
- `LocationSelector`: Main entry point with geolocation
- `ReturningCustomerFlow`: Handles repeat visitors
- `ProfessionalLocationPicker`: Location selection UI
- `MenuDisplay`: Renders categorized menu items

## Important Implementation Details

1. **Geolocation**: The app requests browser location to suggest nearest restaurant
2. **Toast Notifications**: User feedback via toast component for actions
3. **Responsive Design**: Mobile-first with Tailwind breakpoints
4. **Image Handling**: Next.js Image component with unoptimized flag (dev mode)
5. **Form Validation**: Uses react-hook-form with Zod schemas

## Testing

No test framework is currently configured. The project has no test files outside of node_modules.

## Build Configuration

- **TypeScript**: Strict mode with path alias `@/*`
- **ESLint**: Configured but errors ignored during build
- **Next.js**: Build errors for TypeScript/ESLint are suppressed