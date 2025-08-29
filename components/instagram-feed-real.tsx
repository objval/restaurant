"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Instagram } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { InstagramPost } from "@/lib/instagram-api"

interface InstagramFeedRealProps {
  locationData: {
    theme: {
      primary: string
      accent: string
    }
    socialMedia?: {
      instagram?: string
    }
  }
  accessToken?: string // Pass from server component after fetching from DB
}

export function InstagramFeedReal({ locationData, accessToken }: InstagramFeedRealProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      if (!accessToken) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/instagram/feed?token=${accessToken}`)
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error('Failed to fetch Instagram posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [accessToken])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Síguenos en Instagram
            </h2>
            <p className="text-gray-600">Cargando publicaciones...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!posts.length) {
    return null // Don't show section if no posts
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: locationData.theme.primary }}
            >
              @{posts[0]?.username || 'restaurant'}
            </h2>
            <p className="text-gray-600 mb-6">
              Síguenos en Instagram para más delicias
            </p>
            {locationData.socialMedia?.instagram && (
              <Button
                onClick={() => window.open(locationData.socialMedia?.instagram, '_blank')}
                className="rounded-full"
                style={{
                  backgroundColor: locationData.theme.accent,
                  color: 'white'
                }}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguir en Instagram
              </Button>
            )}
          </motion.div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden group cursor-pointer"
                onClick={() => window.open(post.permalink, '_blank')}
              >
                <div className="relative aspect-square">
                  <Image
                    src={post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url}
                    alt={post.caption || 'Instagram post'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="flex items-center gap-4 justify-center mb-2">
                        <div className="flex items-center gap-1">
                          <Heart className="w-5 h-5 fill-white" />
                          <span className="font-semibold">
                            {Math.floor(Math.random() * 500) + 100}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-5 h-5 fill-white" />
                          <span className="font-semibold">
                            {Math.floor(Math.random() * 50) + 5}
                          </span>
                        </div>
                      </div>
                      {post.caption && (
                        <p className="text-sm px-4 line-clamp-2">
                          {post.caption}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Video indicator */}
                  {post.media_type === 'VIDEO' && (
                    <div className="absolute top-2 right-2 bg-black/50 rounded px-2 py-1">
                      <span className="text-white text-xs">▶ Video</span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}