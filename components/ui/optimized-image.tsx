"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { FoodPlaceholder } from "./food-placeholder"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  onLoad?: () => void
  quality?: number
  sizes?: string
}

// Generate base64 blur placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f4f6" offset="20%" />
      <stop stop-color="#e5e7eb" offset="50%" />
      <stop stop-color="#d1d5db" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f4f6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="opacity" values="1;0.75;1" dur="1s" repeatCount="indefinite" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str)

const dataUrl = (w: number, h: number) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`

export function OptimizedImage({
  src,
  alt,
  width = 500,
  height = 400,
  className,
  priority = false,
  onLoad,
  quality = 85,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  // Show placeholder for errors
  if (hasError || !src) {
    return <FoodPlaceholder className={className} />
  }

  // Handle external images with Next.js Image component
  if (src.startsWith('http')) {
    return (
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={dataUrl(width, height)}
          className={cn(
            "duration-700 ease-in-out",
            isLoading
              ? "scale-105 blur-lg grayscale"
              : "scale-100 blur-0 grayscale-0",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={dataUrl(width, height)}
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-105 blur-lg grayscale"
            : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}