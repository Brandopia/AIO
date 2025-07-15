
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  quality?: number
  lazy?: boolean
  placeholder?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  quality = 80,
  lazy = true,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPg=="
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!lazy) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [lazy])

  const getOptimizedSrc = (originalSrc: string) => {
    if (!originalSrc.includes('unsplash.com')) return originalSrc
    
    const params = new URLSearchParams()
    if (width) params.set('w', width.toString())
    if (height) params.set('h', height.toString())
    params.set('q', quality.toString())
    params.set('fm', 'webp')
    params.set('fit', 'crop')
    
    return `${originalSrc}?${params.toString()}`
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-200 text-gray-500",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)} style={{ width, height }}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className={cn("absolute inset-0 w-full h-full object-cover blur-sm scale-110", className)}
        />
      )}
      
      {isInView && (
        <img
          ref={imgRef}
          src={getOptimizedSrc(src)}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? "lazy" : "eager"}
        />
      )}
    </div>
  )
}
