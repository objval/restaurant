"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, Calendar, X, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface FloatingActionsProps {
  locationData: {
    theme: {
      primary: string
      accent: string
    }
    contact: {
      phone: string
    }
  }
  onReservationClick: () => void
}

export function FloatingActions({ locationData, onReservationClick }: FloatingActionsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const phoneNumber = locationData.contact.phone.replace(/\D/g, '')
    const message = encodeURIComponent('Hola, me gustaría hacer una consulta')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${locationData.contact.phone}`
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Main FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 mb-3"
            >
              <button
                onClick={onReservationClick}
                className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{ color: locationData.theme.primary }}
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Reservar Mesa</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{ color: '#25D366' }}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </button>

              <button
                onClick={handleCall}
                className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{ color: locationData.theme.primary }}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Llamar</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110",
            isOpen ? "rotate-45" : ""
          )}
          style={{ backgroundColor: locationData.theme.accent }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Phone className="w-6 h-6 text-white animate-pulse" />
          )}
        </button>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ borderColor: locationData.theme.primary, borderWidth: '2px' }}
          >
            <ChevronUp className="w-5 h-5" style={{ color: locationData.theme.primary }} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}