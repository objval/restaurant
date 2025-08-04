import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getSession } from "@/lib/auth/auth";

export async function PATCH(request: NextRequest) {
  const session = await getSession(request);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { productId, locationId, isAvailable } = await request.json();

    if (!productId || !locationId || isAvailable === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update availability
    await sql`
      UPDATE location_products 
      SET is_available = ${isAvailable}, updated_at = CURRENT_TIMESTAMP
      WHERE product_id = ${productId} AND location_id = ${locationId}
    `;

    // Log action
    await sql`
      INSERT INTO audit_log (user_id, action, table_name, record_id, new_values)
      VALUES (
        ${session.user.id}, 
        'update_availability', 
        'location_products', 
        ${`${locationId}-${productId}`},
        ${JSON.stringify({ is_available: isAvailable })}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update availability error:", error);
    return NextResponse.json(
      { error: "Failed to update availability" },
      { status: 500 }
    );
  }
}