import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import * as bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "your-secret-key-here-change-this-in-production"
);

const COOKIE_NAME = "restaurant-admin-session";
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface Session {
  user: AdminUser;
  expires: Date;
}

// Create JWT token
async function createToken(user: AdminUser): Promise<string> {
  const expires = new Date(Date.now() + SESSION_DURATION);
  
  return await new SignJWT({ 
    user,
    expires: expires.toISOString()
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(JWT_SECRET);
}

// Verify JWT token
async function verifyToken(token: string): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      user: payload.user as AdminUser,
      expires: new Date(payload.expires as string)
    };
  } catch (error) {
    return null;
  }
}

// Login function
export async function login(email: string, password: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
  try {
    // Get user from database
    const { rows } = await sql`
      SELECT id, email, password_hash, name, role 
      FROM admin_users 
      WHERE email = ${email} AND is_active = true
      LIMIT 1
    `;

    if (rows.length === 0) {
      return { success: false, error: "Invalid credentials" };
    }

    const user = rows[0];
    
    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return { success: false, error: "Invalid credentials" };
    }

    // Update last login
    await sql`
      UPDATE admin_users 
      SET last_login = CURRENT_TIMESTAMP 
      WHERE id = ${user.id}
    `;

    const adminUser: AdminUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    return { success: true, user: adminUser };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "An error occurred during login" };
  }
}

// Get current session
export async function getSession(request?: NextRequest): Promise<Session | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

// Create session (set cookie)
export async function createSession(user: AdminUser): Promise<void> {
  const token = await createToken(user);
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION / 1000, // Convert to seconds
    path: "/",
  });
}

// Destroy session (logout)
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// Middleware to protect routes
export async function requireAuth(request: NextRequest): Promise<Session | NextResponse> {
  const session = await getSession(request);
  
  if (!session) {
    // Redirect to login if accessing admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    // Return 401 for API routes
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  return session;
}

// Check if user is authenticated (for client components)
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session !== null;
}