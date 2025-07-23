"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackToTopProps {
  threshold?: number
  className?: string
  locationTheme?: {
    primary: string
    secondary: string
    accent: string
  }
}

export function BackToTop({ threshold = 300, className, locationTheme }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300",
        "w-12 h-12 md:w-14 md:h-14 p-0",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
        className
      )}
      style={{
        backgroundColor: locationTheme?.primary || "#000",
        borderColor: locationTheme?.primary || "#000"
      }}
      aria-label="Volver arriba"
    >
      <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
    </Button>
  )
}