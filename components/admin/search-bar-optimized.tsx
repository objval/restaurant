"use client"

import { useState, useEffect, useCallback, useTransition } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDebounce } from "@/hooks/use-debounce"

interface SearchBarOptimizedProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBarOptimized({ onSearch, placeholder = "Buscar productos..." }: SearchBarOptimizedProps) {
  const [value, setValue] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const debouncedValue = useDebounce(value, 300)
  const [isPending, startTransition] = useTransition()

  // Call onSearch when debounced value changes
  useEffect(() => {
    console.log(`[SearchBar] Searching for: "${debouncedValue}"`)
    setIsSearching(true)
    
    startTransition(() => {
      onSearch(debouncedValue)
      setIsSearching(false)
    })
  }, [debouncedValue, onSearch])

  const handleClear = useCallback(() => {
    setValue("")
    onSearch("")
  }, [onSearch])

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
      
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-10 h-12 text-base"
      />
      
      {/* Loading indicator */}
      {(isSearching || isPending) && (
        <Loader2 className="absolute right-10 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
      )}
      
      {/* Clear button */}
      {value && !isSearching && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}