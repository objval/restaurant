"use client"

import { useState, useEffect } from "react"
import { Users, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TableAvailabilityProps {
  locationId: string
  locationName: string
  className?: string
}

interface AvailabilityData {
  availableTables: number
  totalTables: number
  waitTime: number
  nextAvailable: string
  status: "available" | "limited" | "busy" | "full"
}

// Simulate real-time data fetching
function getRandomAvailability(): AvailabilityData {
  const hour = new Date().getHours()
  const isLunchTime = hour >= 12 && hour <= 14
  const isDinnerTime = hour >= 19 && hour <= 22
  const isPeakTime = isLunchTime || isDinnerTime
  
  const totalTables = 20
  const baseAvailable = isPeakTime ? Math.floor(Math.random() * 5) : Math.floor(Math.random() * 15) + 5
  const availableTables = Math.max(0, Math.min(totalTables, baseAvailable))
  
  const occupancyRate = 1 - (availableTables / totalTables)
  let status: AvailabilityData["status"] = "available"
  let waitTime = 0
  
  if (occupancyRate >= 0.9) {
    status = "full"
    waitTime = Math.floor(Math.random() * 30) + 30
  } else if (occupancyRate >= 0.7) {
    status = "busy"
    waitTime = Math.floor(Math.random() * 20) + 10
  } else if (occupancyRate >= 0.5) {
    status = "limited"
    waitTime = Math.floor(Math.random() * 10) + 5
  }
  
  const nextAvailable = new Date(Date.now() + waitTime * 60000).toLocaleTimeString('es-CL', {
    hour: '2-digit',
    minute: '2-digit'
  })
  
  return {
    availableTables,
    totalTables,
    waitTime,
    nextAvailable,
    status
  }
}

export function TableAvailability({ locationId, locationName, className }: TableAvailabilityProps) {
  const [availability, setAvailability] = useState<AvailabilityData>(getRandomAvailability())
  const [isUpdating, setIsUpdating] = useState(false)

  // Simulate real-time updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true)
      setTimeout(() => {
        setAvailability(getRandomAvailability())
        setIsUpdating(false)
      }, 500)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const statusConfig = {
    available: {
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      icon: CheckCircle,
      text: "Mesas disponibles"
    },
    limited: {
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      icon: AlertCircle,
      text: "Disponibilidad limitada"
    },
    busy: {
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      badge: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      icon: Clock,
      text: "Ocupado"
    },
    full: {
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      icon: Users,
      text: "Completo"
    }
  }

  const config = statusConfig[availability.status]
  const Icon = config.icon

  return (
    <Card className={cn(
      "p-4 md:p-6 transition-all duration-300",
      config.bgColor,
      config.borderColor,
      "border-2",
      isUpdating && "opacity-70",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Disponibilidad en Tiempo Real
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{locationName}</p>
        </div>
        <Badge className={cn("text-xs", config.badge)}>
          <Icon className="w-3 h-3 mr-1" />
          {config.text}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Mesas disponibles</span>
          <span className={cn("font-bold text-lg", config.color)}>
            {availability.availableTables} / {availability.totalTables}
          </span>
        </div>
        
        {availability.waitTime > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Tiempo de espera</span>
            <span className="font-medium">~{availability.waitTime} min</span>
          </div>
        )}
        
        {availability.status !== "available" && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Próxima disponible</span>
            <span className="font-medium">{availability.nextAvailable}</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            Actualizado hace menos de 1 min
          </div>
          <Button
            size="sm"
            variant={availability.status === "available" ? "default" : "secondary"}
            className="text-xs"
          >
            {availability.status === "available" ? "Reservar ahora" : "Unirse a lista de espera"}
          </Button>
        </div>
      </div>
    </Card>
  )
}