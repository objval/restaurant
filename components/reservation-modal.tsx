"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, User, X } from "lucide-react"
import type { LocationData } from "@/lib/locations"

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
  location: LocationData
}

export function ReservationModal({ isOpen, onClose, location }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    rut: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("¡Reserva enviada exitosamente! Te contactaremos pronto para confirmar.")
    setIsSubmitting(false)
    onClose()
    setFormData({
      fullName: "",
      rut: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: "",
    })
  }

  const timeSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Header with location theme */}
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
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-2">Hacer una Reserva</DialogTitle>
              <p className="text-white/90 text-lg">
                {location.name} - {location.concept}
              </p>
            </DialogHeader>

            <div className="flex items-center gap-4 mt-4 text-white/80">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{location.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{location.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5" style={{ color: location.theme.primary }} />
                Información Personal
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Nombre Completo *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Juan Pérez González"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="rut">RUT *</Label>
                  <Input
                    id="rut"
                    value={formData.rut}
                    onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                    placeholder="12.345.678-9"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" style={{ color: location.theme.primary }} />
                Detalles de la Reserva
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="date">Fecha *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="time">Hora *</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="guests">Número de Personas *</Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => setFormData({ ...formData, guests: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Personas" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "persona" : "personas"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <Label htmlFor="specialRequests">Solicitudes Especiales</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                placeholder="Alergias alimentarias, celebración especial, preferencias de mesa, etc."
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Important Notice */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Información Importante:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Las reservas están sujetas a disponibilidad</li>
                <li>• Te contactaremos dentro de 2 horas para confirmar</li>
                <li>• Para grupos de más de 8 personas, llama directamente</li>
                <li>• Política de cancelación: 24 horas de anticipación</li>
              </ul>
            </div>

            {/* Submit Button */}
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
                  Enviando Reserva...
                </div>
              ) : (
                "Confirmar Reserva"
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
