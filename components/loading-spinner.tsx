"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
}

export function LoadingSpinner({ size = "md", color = "#CD853F" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-200`}
        style={{
          borderTopColor: color,
          borderRightColor: color,
        }}
      />
    </div>
  )
}
