import { betterAuth } from "better-auth";
import { Pool } from "@neondatabase/serverless";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/neon-serverless";

// Create a connection pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    // Disable social providers for admin panel
  },
  trustedOrigins: [
    process.env.NEXTAUTH_URL || "http://localhost:3000",
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieName: "restaurant-admin-session",
  },
  user: {
    modelName: "admin_users",
    fields: {
      email: "email",
      password: "password_hash",
      name: "name",
    },
  },
  account: {
    accountLinking: {
      enabled: false,
    },
  },
  rateLimit: {
    window: 10 * 60 * 1000, // 10 minutes
    max: 10, // 10 requests per window
  },
});

export const {
  handlers: { GET, POST },
  auth: authClient,
} = auth;