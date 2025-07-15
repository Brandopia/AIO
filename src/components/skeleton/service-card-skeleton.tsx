
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function ServiceCardSkeleton() {
  return (
    <Card className="h-full">
      <CardContent className="p-0">
        <Skeleton className="h-48 md:h-56 w-full rounded-t-lg" />
        <div className="p-6 md:p-8 lg:p-10">
          <div className="flex items-start space-x-4 md:space-x-6 mb-5 md:mb-8">
            <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
            <div className="flex-1">
              <Skeleton className="h-7 w-3/4 mb-3" />
              <Skeleton className="h-5 w-full mb-2" />
              <Skeleton className="h-5 w-2/3" />
            </div>
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start">
                <Skeleton className="w-5 h-5 mr-4 mt-1 rounded-full flex-shrink-0" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
