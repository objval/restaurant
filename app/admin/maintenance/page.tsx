import MaintenancePanel from "./MaintenancePanel"

export default async function MaintenancePage() {
  // The user is guaranteed to be an authenticated admin by the middleware.
  // No need to fetch session or check roles here.
  return <MaintenancePanel />
}