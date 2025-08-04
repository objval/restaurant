import { NextRequest, NextResponse } from "next/server";
import { login, createSession } from "@/lib/auth/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    
    const result = await login(email, password);
    
    if (!result.success || !result.user) {
      return NextResponse.json(
        { error: result.error || "Login failed" },
        { status: 401 }
      );
    }
    
    // Create session
    await createSession(result.user);
    
    return NextResponse.json({
      success: true,
      user: result.user,
    });
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}