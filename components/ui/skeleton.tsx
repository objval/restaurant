import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded"
  animation?: "pulse" | "wave" | "none"
}

function Skeleton({
  className,
  variant = "rectangular",
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const baseClasses = "bg-muted"
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-md",
    rounded: "rounded-lg"
  }
  
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-shimmer",
    none: ""
  }
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      {...props}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton className="h-48 md:h-56 w-full" />
      <div className="p-4 md:p-5 space-y-3">
        <Skeleton variant="text" className="h-6 w-3/4" />
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-5/6" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton variant="text" className="h-4 w-20" />
          <Skeleton variant="text" className="h-4 w-16" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonMenuGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export { Skeleton }
