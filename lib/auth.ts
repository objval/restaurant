import type { SupabaseClient } from "@supabase/supabase-js";

// This function is designed for server-side usage.
// It centralizes the logic for checking if a user has the 'admin' role.

/**
 * Checks if a user has the 'admin' role.
 * @param supabase The Supabase client instance. In middleware, this must be passed.
 * @param userId The ID of the user to check.
 * @returns {Promise<boolean>} True if the user is an admin, false otherwise.
 */
export async function isAdmin(
  supabase: SupabaseClient,
  userId: string
): Promise<boolean> {
  try {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", userId)
      .single();

    if (error) {
      // It's common for a profile not to exist, so we don't log every error.
      // console.error("Error fetching profile for admin check:", error.message);
      return false;
    }

    return profile?.role === "admin";
  } catch (error: any) {
    console.error("Unexpected error in isAdmin check:", error.message);
    return false;
  }
}
