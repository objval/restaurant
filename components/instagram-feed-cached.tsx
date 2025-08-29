"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Instagram, RefreshCw } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { ScrapedPost } from "@/lib/instagram-scraper"

interface InstagramFeedCachedProps {
  locationData: {
    id: string
    theme: {
      primary: string
      accent: string
    }
    socialMedia?: {
      instagram?: string
    }
  }
  initialPosts?: ScrapedPost[]
}

export function InstagramFeedCached({ locationData, initialPosts = [] }: InstagramFeedCachedProps) {
  const [posts, setPosts] = useState<ScrapedPost[]>(initialPosts)
  const [loading, setLoading] = useState(false)

  // Fetch cached posts from API
  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/instagram/cached?locationId=${locationData.id}`)
      const data = await response.json()
      if (data.posts && data.posts.length > 0) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.error('Failed to fetch cached posts:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // If no initial posts, fetch from cache
    if (initialPosts.length === 0) {
      fetchPosts()
    }
  }, [locationData.id])

  if (!posts.length && !loading) {
    return null // Don't show section if no posts
  }

  // Extract username from Instagram URL or use fallback
  const instagramUsername = locationData.socialMedia?.instagram
    ?.split('instagram.com/')[1]
    ?.split('/')[0]
    ?.replace('@', '') || 'restaurant'

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
              @{instagramUsername}
            </h2>
            <p className="text-gray-600 mb-6">
              Síguenos en Instagram para más delicias
            </p>
            <div className="flex justify-center gap-3">
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
              <Button
                variant="outline"
                onClick={fetchPosts}
                disabled={loading}
                className="rounded-full"
              >
                <RefreshCw className={`w-5 h-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Actualizar
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Loading State */}
        {loading && posts.length === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {posts.slice(0, 6).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden group cursor-pointer"
                  onClick={() => window.open(`https://instagram.com/p/${post.shortcode}`, '_blank')}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={post.is_video && post.thumbnail_url ? post.thumbnail_url : post.image_url}
                      alt={post.caption || 'Instagram post'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      unoptimized // Instagram URLs don't work with Next.js optimization
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="flex items-center gap-4 justify-center mb-2">
                          {post.likes !== undefined && (
                            <div className="flex items-center gap-1">
                              <Heart className="w-5 h-5 fill-white" />
                              <span className="font-semibold">
                                {post.likes > 999 ? `${(post.likes / 1000).toFixed(1)}k` : post.likes}
                              </span>
                            </div>
                          )}
                          {post.comments !== undefined && (
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-5 h-5 fill-white" />
                              <span className="font-semibold">{post.comments}</span>
                            </div>
                          )}
                        </div>
                        {post.caption && (
                          <p className="text-sm px-4 line-clamp-2">
                            {post.caption}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Video indicator */}
                    {post.is_video && (
                      <div className="absolute top-2 right-2 bg-black/50 rounded px-2 py-1">
                        <span className="text-white text-xs">▶ Video</span>
                      </div>
                    )}

                    {/* Timestamp */}
                    <div className="absolute bottom-2 left-2 bg-black/50 rounded px-2 py-1">
                      <span className="text-white text-xs">
                        {new Date(post.timestamp).toLocaleDateString('es-ES', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}