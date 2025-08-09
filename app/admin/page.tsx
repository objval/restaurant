import { redirect } from "next/navigation"

export default function AdminPage() {
  // This page is only reached if middleware allows it (user is authenticated)
  // Middleware will redirect to /admin/dashboard automatically
  // This is a fallback in case middleware doesn't redirect
  redirect('/admin/dashboard')
}