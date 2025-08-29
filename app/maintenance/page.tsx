import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import MaintenancePanel from "./MaintenancePanel"

export default async function MaintenancePage() {
  const supabase = createServerComponentClient({ cookies })
  
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect('/maintenance/login')
  }
  
  // Check if user has admin role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('user_id', session.user.id)
    .single()
  
  if (profile?.role !== 'admin') {
    await supabase.auth.signOut()
    redirect('/maintenance/login')
  }
  
  return <MaintenancePanel userEmail={session.user.email || ''} />
}