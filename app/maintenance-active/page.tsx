import { supabase } from "@/lib/supabase-singleton"
import { MaintenanceOverlay } from "@/components/maintenance-overlay"

export const revalidate = 60 // Revalidate every minute

async function getMaintenanceSettings() {
  const { data, error } = await supabase
    .from('maintenance_mode')
    .select('*')
    .single()
  
  if (error || !data) {
    return {
      enabled: true,
      title: 'Estamos en Mantenimiento',
      message: 'Estamos trabajando para mejorar tu experiencia. Volveremos pronto.',
      estimated_time: null,
      show_countdown: false,
      countdown_date: null,
      show_social_links: true,
      show_contact_info: true,
      custom_css: null
    }
  }
  
  return data
}

export default async function MaintenanceActivePage() {
  const settings = await getMaintenanceSettings()
  
  return <MaintenanceOverlay settings={settings} />
}