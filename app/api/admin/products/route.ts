import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getSession } from "@/lib/auth/auth";

export async function GET(request: NextRequest) {
  // Check authentication
  const session = await getSession(request);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = request.nextUrl;
    const locationId = searchParams.get("location");
    const categoryId = searchParams.get("category");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = (page - 1) * limit;

    let query = sql`
      SELECT 
        p.*,
        lp.is_available,
        lp.custom_price,
        lp.out_of_stock,
        lp.display_order as location_display_order,
        c.name as category_name,
        c.slug as category_slug
      FROM products p
      LEFT JOIN location_products lp ON p.id = lp.product_id
      LEFT JOIN categories c ON lp.category_id = c.id
      WHERE 1=1
    `;

    // Add filters
    if (locationId) {
      query = sql`${query} AND lp.location_id = ${locationId}`;
    }
    if (categoryId) {
      query = sql`${query} AND lp.category_id = ${categoryId}`;
    }
    if (search) {
      query = sql`${query} AND (
        p.name ILIKE ${`%${search}%`} OR 
        p.description ILIKE ${`%${search}%`}
      )`;
    }

    // Add ordering and pagination
    query = sql`${query} ORDER BY c.display_order, lp.display_order, p.name LIMIT ${limit} OFFSET ${offset}`;

    const { rows: products } = await query;

    // Get total count
    let countQuery = sql`
      SELECT COUNT(DISTINCT p.id) as count
      FROM products p
      LEFT JOIN location_products lp ON p.id = lp.product_id
      WHERE 1=1
    `;

    if (locationId) {
      countQuery = sql`${countQuery} AND lp.location_id = ${locationId}`;
    }
    if (categoryId) {
      countQuery = sql`${countQuery} AND lp.category_id = ${categoryId}`;
    }
    if (search) {
      countQuery = sql`${countQuery} AND (
        p.name ILIKE ${`%${search}%`} OR 
        p.description ILIKE ${`%${search}%`}
      )`;
    }

    const { rows: countResult } = await countQuery;
    const totalCount = parseInt(countResult[0].count);

    return NextResponse.json({
      products,
      totalCount,
      page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    console.error("Admin products API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// Create new product
export async function POST(request: NextRequest) {
  const session = await getSession(request);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    
    // Insert product
    const { rows } = await sql`
      INSERT INTO products (
        name, description, base_price, image_url, prep_time,
        calories, spice_level, ingredients, allergens, dietary_tags,
        is_chef_special, is_popular, is_seasonal
      ) VALUES (
        ${data.name},
        ${data.description},
        ${data.base_price},
        ${data.image_url || null},
        ${data.prep_time || null},
        ${data.calories || null},
        ${data.spice_level || null},
        ${data.ingredients || []},
        ${data.allergens || []},
        ${data.dietary_tags || []},
        ${data.is_chef_special || false},
        ${data.is_popular || false},
        ${data.is_seasonal || false}
      )
      RETURNING *
    `;

    const product = rows[0];

    // If location and category provided, create relationship
    if (data.location_id && data.category_id) {
      await sql`
        INSERT INTO location_products (
          location_id, product_id, category_id, is_available
        ) VALUES (
          ${data.location_id},
          ${product.id},
          ${data.category_id},
          true
        )
      `;
    }

    // Log action
    await sql`
      INSERT INTO audit_log (user_id, action, table_name, record_id, new_values)
      VALUES (${session.user.id}, 'create', 'products', ${product.id}, ${JSON.stringify(product)})
    `;

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}