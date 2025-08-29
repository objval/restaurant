// Script to create an admin user or update existing user to admin
// Run with: bun scripts/create-admin.ts email@example.com

import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function makeAdmin(email: string) {
  try {
    // First, check if user exists
    const { data: userData, error: userError } = await supabase.auth.admin.listUsers()
    
    if (userError) {
      console.error('Error fetching users:', userError)
      return
    }

    const user = userData.users.find(u => u.email === email)
    
    if (!user) {
      console.log(`User with email ${email} not found.`)
      console.log('Would you like to create a new admin user? (You need to sign up first through the app)')
      return
    }

    // Update or create profile with admin role
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        user_id: user.id,
        email: user.email,
        role: 'admin',
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      })
      .select()
      .single()

    if (error) {
      console.error('Error updating profile:', error)
      return
    }

    console.log(`✅ Successfully set ${email} as admin`)
    console.log('Profile:', data)
  } catch (error) {
    console.error('Unexpected error:', error)
  }
}

// Get email from command line argument
const email = process.argv[2]

if (!email) {
  console.log('Usage: bun scripts/create-admin.ts <email>')
  console.log('Example: bun scripts/create-admin.ts admin@restaurant.com')
  process.exit(1)
}

makeAdmin(email)