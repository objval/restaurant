"use client"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className = "", 
  sizes = "100vw",
  priority = false 
}: ResponsiveImageProps) {
  // Generate WebP version path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  
  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
      />
      <source
        srcSet={src}
        type={src.endsWith('.png') ? 'image/png' : 'image/jpeg'}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />
    </picture>
  )
}