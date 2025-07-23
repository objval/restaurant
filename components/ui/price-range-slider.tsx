"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface PriceRangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onValueChange: (value: [number, number]) => void
  step?: number
  formatPrice?: (price: number) => string
  className?: string
}

export function PriceRangeSlider({
  min,
  max,
  value,
  onValueChange,
  step = 100,
  formatPrice = (price) => `$${(price / 1000).toFixed(0)}.${(price % 1000).toString().padStart(3, "0")}`,
  className,
}: PriceRangeSliderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        value={value}
        onValueChange={onValueChange}
        max={max}
        min={min}
        step={step}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-white shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-white shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>{formatPrice(value[0])}</span>
        <span className="text-xs text-gray-400">-</span>
        <span>{formatPrice(value[1])}</span>
      </div>
    </div>
  )
}