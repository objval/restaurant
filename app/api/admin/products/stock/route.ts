import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getSession } from "@/lib/auth/auth";

export async function PATCH(request: NextRequest) {
  const session = await getSession(request);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { productId, locationId, outOfStock } = await request.json();

    if (!productId || !locationId || outOfStock === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update stock status
    await sql`
      UPDATE location_products 
      SET out_of_stock = ${outOfStock}, updated_at = CURRENT_TIMESTAMP
      WHERE product_id = ${productId} AND location_id = ${locationId}
    `;

    // Log action
    await sql`
      INSERT INTO audit_log (user_id, action, table_name, record_id, new_values)
      VALUES (
        ${session.user.id}, 
        'update_stock', 
        'location_products', 
        ${`${locationId}-${productId}`},
        ${JSON.stringify({ out_of_stock: outOfStock })}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update stock error:", error);
    return NextResponse.json(
      { error: "Failed to update stock status" },
      { status: 500 }
    );
  }
}