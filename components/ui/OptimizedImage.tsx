'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder'> {
  fallbackSrc?: string
  showSkeleton?: boolean
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto'
  priority?: boolean
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  auto: '',
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/brand-images/placeholder.jpg',
  showSkeleton = true,
  aspectRatio = 'auto',
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(true)
    } else {
      setIsLoading(false)
    }
  }

  const aspectClass = aspectRatioClasses[aspectRatio]
  const containerClass = `relative overflow-hidden ${aspectClass} ${className}`

  return (
    <div className={containerClass}>
      {showSkeleton && isLoading && (
        <div className="absolute inset-0 bg-porcelain animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        <Image
          src={currentSrc}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-300"
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          sizes={
            aspectRatio === 'square' 
              ? '(max-width: 768px) 50vw, 25vw'
              : aspectRatio === 'portrait'
              ? '(max-width: 768px) 100vw, 50vw'
              : '(max-width: 768px) 100vw, 75vw'
          }
          quality={priority ? 90 : 75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          {...props}
        />
      </motion.div>
      
      {hasError && (
        <div className="absolute inset-0 bg-porcelain flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 text-harbor">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-harbor">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Convenience components for common use cases
export const HeroImage = (props: Omit<OptimizedImageProps, 'aspectRatio' | 'priority'>) => (
  <OptimizedImage aspectRatio="landscape" priority {...props} />
)

export const CardImage = (props: Omit<OptimizedImageProps, 'aspectRatio'>) => (
  <OptimizedImage aspectRatio="video" {...props} />
)

export const AvatarImage = (props: Omit<OptimizedImageProps, 'aspectRatio'>) => (
  <OptimizedImage aspectRatio="square" {...props} />
)

export const ArticleImage = (props: Omit<OptimizedImageProps, 'aspectRatio'>) => (
  <OptimizedImage aspectRatio="landscape" {...props} />
)



