"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface InstagramPost {
  id: string
  image: string
  likes: number
  comments: number
  caption: string
}

interface InstagramFeedProps {
  locationData: {
    theme: {
      primary: string
      secondary: string
      accent: string
      background: string
    }
    images: {
      gallery?: string[]
      interior: string
      signature: string
      ambiance: string
    }
    socialMedia?: {
      instagram?: string
    }
  }
}

export function InstagramFeed({ locationData }: InstagramFeedProps) {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  // Create mock Instagram posts from gallery images with stable values
  const posts: InstagramPost[] = [
    locationData.images.interior,
    locationData.images.signature, 
    locationData.images.ambiance,
    ...(locationData.images.gallery?.slice(0, 3) || [])
  ].filter(Boolean).slice(0, 6).map((image, index) => ({
    id: `post-${index}`,
    image,
    likes: [342, 486, 273, 521, 189, 437][index] || 250, // Stable predefined values
    comments: [28, 45, 19, 52, 14, 38][index] || 25,
    caption: [
      "Momentos únicos en nuestro restaurante",
      "Sabores que conquistan paladares",
      "El lugar perfecto para compartir",
      "Experiencias gastronómicas inolvidables",
      "Donde cada plato cuenta una historia",
      "Tradición y sabor en cada bocado"
    ][index] || "Momentos únicos en nuestro restaurante"
  }))

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8" style={{ color: locationData.theme.primary }} />
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: locationData.theme.primary }}>
              @{locationData.socialMedia?.instagram?.split('/').pop() || 'nuestrorestaurante'}
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Síguenos en Instagram para descubrir más momentos especiales
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              onClick={() => locationData.socialMedia?.instagram && window.open(locationData.socialMedia.instagram, '_blank')}
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className={cn(
                "absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300",
                hoveredPost === post.id ? "opacity-100" : "opacity-0"
              )}>
                <div className="text-white text-center">
                  <div className="flex items-center justify-center gap-6 mb-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6 fill-white" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 fill-white" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm px-4 line-clamp-2">{post.caption}</p>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-4 h-4 text-gray-800" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        {locationData.socialMedia?.instagram && (
          <div className="text-center mt-12">
            <button
              onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)`,
              }}
            >
              <Instagram className="w-5 h-5" />
              Seguir en Instagram
            </button>
          </div>
        )}
      </div>
    </section>
  )
}