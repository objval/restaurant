export default function LocationSelectorSkeleton() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background skeleton */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900 animate-pulse" />
      
      {/* Content skeleton */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Header skeleton */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="h-16 md:h-20 lg:h-24 w-3/4 bg-white/20 rounded-lg mx-auto mb-6 animate-pulse" />
          <div className="h-6 md:h-8 w-2/3 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-12 w-48 bg-orange-500/50 rounded-full mx-auto animate-pulse" />
        </div>

        {/* Cards skeleton */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[320px] bg-black/30 rounded-lg animate-pulse">
              <div className="h-full flex flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="h-8 w-24 bg-white/20 rounded" />
                  <div className="h-6 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                </div>
                <div className="h-10 bg-white/10 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}