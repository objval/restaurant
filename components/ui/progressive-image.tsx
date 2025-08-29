"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProgressiveImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  onLoadComplete?: () => void
  placeholderColor?: string
  blurDataURL?: string
}

export function ProgressiveImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  priority = false,
  quality = 85,
  onLoadComplete,
  placeholderColor = "bg-gradient-to-br from-gray-200 to-gray-300",
  blurDataURL
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Fallback for error state
  if (hasError) {
    return (
      <div 
        className={cn(
          "animate-pulse bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center",
          className
        )}
        style={{
          ...(fill ? { position: 'absolute', inset: 0 } : { width, height })
        }}
      >
        <div className="text-gray-500 text-center p-4">
          <svg 
            className="w-12 h-12 mx-auto mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <p className="text-xs">No se pudo cargar la imagen</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Skeleton loader with shimmer effect - only show while loading */}
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 animate-pulse z-10",
            placeholderColor
          )}
          style={{
            ...(fill ? {} : { width, height })
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Actual image with fade-in effect */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn(
          "transition-opacity duration-700",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        priority={priority}
        quality={quality}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        style={{
          objectFit: 'cover'
        }}
        onLoad={() => {
          setIsLoading(false)
          onLoadComplete?.()
        }}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
      />
    </div>
  )
}