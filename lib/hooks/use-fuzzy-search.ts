import { useMemo } from 'react'
import Fuse from 'fuse.js'
import type { MenuItem } from '@/lib/menu-data'

interface FuseOptions {
  keys: string[]
  threshold?: number
  includeScore?: boolean
  shouldSort?: boolean
  ignoreLocation?: boolean
  minMatchCharLength?: number
}

export function useFuzzySearch(
  items: MenuItem[],
  searchQuery: string,
  options: FuseOptions = {
    keys: ['name', 'description', 'ingredients'],
    threshold: 0.4,
    includeScore: true,
    shouldSort: true,
    ignoreLocation: true,
    minMatchCharLength: 2,
    // Limit results for better performance
    limit: 100
  }
) {
  const fuse = useMemo(
    () => new Fuse(items, options),
    [items, options] // Dependencies for Fuse instance
  )

  const results = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) {
      return items
    }

    const fuseResults = fuse.search(searchQuery)
    return fuseResults.map(result => result.item)
  }, [searchQuery, fuse, items])

  return results
}