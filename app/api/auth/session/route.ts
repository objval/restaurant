import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request);
    
    if (!session) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }
    
    return NextResponse.json({
      user: session.user,
      expires: session.expires,
    });
  } catch (error) {
    console.error("Session route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}