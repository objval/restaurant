import { NextRequest, NextResponse } from "next/server";
import { getLocationMenu } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const locationId = searchParams.get("location");
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (!locationId) {
      return NextResponse.json(
        { error: "Location ID is required" },
        { status: 400 }
      );
    }

    // Get menu items from database
    let menuItems = await getLocationMenu(locationId);

    // Filter by category if provided
    if (category) {
      menuItems = menuItems.filter(item => item.category === category);
    }

    // Search if query provided
    if (search) {
      const searchLower = search.toLowerCase();
      menuItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchLower))
      );
    }

    return NextResponse.json(menuItems);
  } catch (error) {
    console.error("Menu API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu" },
      { status: 500 }
    );
  }
}