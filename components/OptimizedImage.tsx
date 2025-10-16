'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { imageOptimizationConfig, generateOptimizedImageUrls } from '@/lib/image-optimization'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadTime, setLoadTime] = useState<number | null>(null)
  const [format, setFormat] = useState<string>('unknown')

  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      // Preload critical images
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    }
  }, [src, priority])

  const handleLoad = () => {
    const endTime = performance.now()
    setLoadTime(endTime)
    setIsLoaded(true)
    setFormat(src.split('.').pop() || 'unknown')
    
    // Track performance
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'image_load', {
        event_category: 'Performance',
        image_url: src,
        load_time: endTime,
        format: format,
        optimized: true
      })
    }
    
    onLoad?.()
  }

  const handleError = () => {
    console.error(`Failed to load image: ${src}`)
    onError?.()
  }

  // Generate optimized URLs for different formats
  const optimizedUrls = generateOptimizedImageUrls(src, width, height)
  
  // Default blur placeholder
  const defaultBlurDataURL = blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Performance indicator (development only) */}
      {process.env.NODE_ENV === 'development' && loadTime && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {loadTime.toFixed(0)}ms ({format})
        </div>
      )}
    </div>
  )
}

/**
 * Hero Image Component with advanced optimization
 */
interface HeroImageProps extends Omit<OptimizedImageProps, 'priority'> {
  title?: string
  subtitle?: string
  overlay?: boolean
}

export function HeroImage({
  src,
  alt,
  width,
  height,
  title,
  subtitle,
  overlay = true,
  className,
  ...props
}: HeroImageProps) {
  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={true}
        className="w-full h-full object-cover"
        {...props}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="max-w-4xl px-6">
            {title && (
              <h1 className="text-4xl md:text-6xl font-serif mb-4">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Responsive Image Gallery Component
 */
interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    width: number
    height: number
  }>
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
}

export function ImageGallery({ 
  images, 
  columns = 3, 
  gap = 'md' 
}: ImageGalleryProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }
  
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  }

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      ))}
    </div>
  )
}

/**
 * Lazy Loading Image Component
 */
interface LazyImageProps extends OptimizedImageProps {
  threshold?: number
  rootMargin?: string
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  threshold = 0.1,
  rootMargin = '50px',
  className,
  ...props
}: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(ref)

    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return (
    <div ref={setRef} className={className}>
      {isVisible ? (
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...props}
        />
      ) : (
        <div 
          className="bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  )
}

