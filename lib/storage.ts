export function saveLocationPreference(locationId: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("preferred-location", locationId)
    localStorage.setItem("last-visit", new Date().toISOString())
    const currentCount = getVisitCount()
    localStorage.setItem("visit-count", (currentCount + 1).toString())
  }
}

export function getLocationPreference(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("preferred-location")
  }
  return null
}

export function getVisitCount(): number {
  if (typeof window !== "undefined") {
    const count = localStorage.getItem("visit-count")
    return count ? Number.parseInt(count, 10) : 0
  }
  return 0
}

export function getLastVisit(): Date | null {
  if (typeof window !== "undefined") {
    const lastVisit = localStorage.getItem("last-visit")
    return lastVisit ? new Date(lastVisit) : null
  }
  return null
}

export function shouldShowConfirmation(): boolean {
  const visitCount = getVisitCount()
  const lastVisit = getLastVisit()

  if (!lastVisit || visitCount === 0) return false

  const daysSinceLastVisit = Math.floor((Date.now() - lastVisit.getTime()) / (1000 * 60 * 60 * 24))

  return visitCount > 0 && daysSinceLastVisit > 0
}
