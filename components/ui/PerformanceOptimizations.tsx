'use client'

import { useEffect, useState, useRef } from 'react'
import React from 'react'
import { LoadingSpinner } from './LoadingSpinner'

interface LazyLoadProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

export function LazyLoad({ 
  children, 
  fallback = <LoadingSpinner size="md" />, 
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, hasLoaded])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

// Image lazy loading component
interface LazyImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  priority?: boolean
}

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'landscape',
  priority = false 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }

  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${aspectClasses[aspectRatio]} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    )
  }

  return (
    <LazyLoad
      fallback={
        <div className={`${aspectClasses[aspectRatio]} ${className} bg-porcelain animate-pulse flex items-center justify-center`}>
          <LoadingSpinner size="sm" color="harbor" />
        </div>
      }
    >
      <img
        src={src}
        alt={alt}
        className={`${aspectClasses[aspectRatio]} ${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </LazyLoad>
  )
}

// Component lazy loading with dynamic imports
export function LazyComponent({ 
  importFunc, 
  fallback = <LoadingSpinner size="lg" />,
  ...props 
}: {
  importFunc: () => Promise<{ default: React.ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    importFunc()
      .then((module) => {
        setComponent(() => module.default)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [importFunc])

  if (error) {
    return (
      <div className="text-center p-8 text-harbor">
        <p>Failed to load component</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-gold hover:underline mt-2"
        >
          Retry
        </button>
      </div>
    )
  }

  if (isLoading || !Component) {
    return <>{fallback}</>
  }

  return <Component {...props} />
}

// Virtual scrolling for large lists
interface VirtualScrollProps {
  items: any[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: any, index: number) => React.ReactNode
  className?: string
}

export function VirtualScroll({ 
  items, 
  itemHeight, 
  containerHeight, 
  renderItem, 
  className = '' 
}: VirtualScrollProps) {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const visibleStart = Math.floor(scrollTop / itemHeight)
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  )

  const visibleItems = items.slice(visibleStart, visibleEnd)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${visibleStart * itemHeight}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) => (
            <div key={visibleStart + index} style={{ height: itemHeight }}>
              {renderItem(item, visibleStart + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Performance monitoring hook
export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    const start = performance.now()
    
    return () => {
      const end = performance.now()
      const duration = end - start
      
      if (duration > 16) { // More than one frame
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`)
      }
    }
  })
}

// Memo wrapper for expensive components
export function withMemo<T extends React.ComponentType<any>>(
  Component: T,
  areEqual?: (prevProps: React.ComponentProps<T>, nextProps: React.ComponentProps<T>) => boolean
) {
  return React.memo(Component, areEqual)
}

// Debounced input hook
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Throttled scroll hook
export function useThrottledScroll(callback: () => void, delay: number = 16) {
  const [isThrottled, setIsThrottled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isThrottled) {
        callback()
        setIsThrottled(true)
        setTimeout(() => setIsThrottled(false), delay)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [callback, delay, isThrottled])
}
