import { NextRequest, NextResponse } from "next/server";
import { getLocations, getMenuHighlights } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    // Get locations from database
    const locations = await getLocations();
    
    // Transform to match the existing LocationData interface
    const transformedLocations = await Promise.all(
      locations.map(async (loc) => {
        const menuHighlights = await getMenuHighlights(loc.id);
        
        return {
          id: loc.id,
          name: loc.name,
          concept: loc.concept,
          path: loc.path,
          coordinates: loc.coordinates,
          theme: loc.theme,
          images: loc.images,
          description: loc.description,
          longDescription: loc.long_description,
          hours: loc.hours,
          specialties: loc.specialties,
          atmosphere: loc.atmosphere,
          priceRange: loc.price_range,
          contact: loc.contact,
          features: loc.features,
          menuHighlights,
          stats: loc.stats,
          socialProof: loc.social_proof,
          socialMedia: loc.social_media,
          promotions: loc.promotions,
        };
      })
    );

    return NextResponse.json(transformedLocations);
  } catch (error) {
    console.error("Locations API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}