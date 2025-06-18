"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, MessageCircle, X } from "lucide-react"
import type { LocationData } from "@/lib/locations"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  location: LocationData
}

export function ContactModal({ isOpen, onClose, location }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("¡Mensaje enviado exitosamente! Te responderemos pronto.")
    setIsSubmitting(false)
    onClose()
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const subjects = [
    "Consulta General",
    "Reservas y Disponibilidad",
    "Eventos Privados",
    "Menú y Alergias",
    "Comentarios y Sugerencias",
    "Trabajo y Empleo",
    "Otro",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Header */}
          <div
            className="px-6 py-8 text-white relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${location.theme.primary}, ${location.theme.accent})`,
            }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>

            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-2">Contáctanos</DialogTitle>
              <p className="text-white/90 text-lg">{location.name} - Estamos aquí para ayudarte</p>
            </DialogHeader>
          </div>

          <div className="p-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: location.theme.primary }} />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-gray-600">{location.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: location.theme.primary }} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">{location.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: location.theme.primary }} />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-gray-600">{location.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Asunto *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="mt-1"
                  rows={5}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Tiempo de Respuesta</h4>
                    <p className="text-sm text-blue-700">
                      Respondemos todos los mensajes dentro de 24 horas. Para consultas urgentes, llámanos directamente
                      al {location.contact.phone}.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg font-semibold"
                style={{
                  backgroundColor: location.theme.primary,
                  borderColor: location.theme.primary,
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando Mensaje...
                  </div>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
