import { redirect } from "next/navigation"

export default function ProductsPage() {
  // Redirect to dashboard for now
  // This page can be implemented later for product management
  redirect('/admin/dashboard')
}