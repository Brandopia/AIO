
import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <Skeleton className="h-16 w-3/4 mx-auto mb-6 sm:mb-8 bg-white/20" />
        <Skeleton className="h-6 w-2/3 mx-auto bg-white/20" />
      </div>
    </section>
  )
}
