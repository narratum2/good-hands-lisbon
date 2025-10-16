/**
 * Advanced Image Optimization System
 * Next-generation image optimization for maximum performance
 */

export interface ImageOptimizationConfig {
  formats: ('webp' | 'avif' | 'jpeg' | 'png')[]
  qualities: {
    webp: number
    avif: number
    jpeg: number
    png: number
  }
  sizes: {
    mobile: number
    tablet: number
    desktop: number
    retina: number
  }
  lazyLoading: boolean
  blurPlaceholder: boolean
  priorityLoading: string[]
}

export const imageOptimizationConfig: ImageOptimizationConfig = {
  formats: ['avif', 'webp', 'jpeg'],
  qualities: {
    webp: 85,
    avif: 80,
    jpeg: 90,
    png: 95
  },
  sizes: {
    mobile: 480,
    tablet: 768,
    desktop: 1200,
    retina: 2400
  },
  lazyLoading: true,
  blurPlaceholder: true,
  priorityLoading: [
    '/brand-images/hero-beauty-lisbon.jpg',
    '/brand-images/experience-bridal-beauty.png',
    '/brand-assets/logo/logo-full.svg'
  ]
}

/**
 * Generate optimized image URLs for different formats and sizes
 */
export const generateOptimizedImageUrls = (
  originalUrl: string,
  width: number,
  height?: number
) => {
  const baseUrl = originalUrl.replace(/\.(jpg|jpeg|png|webp)$/, '')
  const extension = originalUrl.match(/\.(jpg|jpeg|png|webp)$/)?.[1] || 'jpg'
  
  const sizes = [
    { width: width, suffix: '' },
    { width: width * 2, suffix: '@2x' },
    { width: width * 3, suffix: '@3x' }
  ]
  
  return {
    avif: sizes.map(size => `${baseUrl}${size.suffix}.avif`),
    webp: sizes.map(size => `${baseUrl}${size.suffix}.webp`),
    fallback: sizes.map(size => `${baseUrl}${size.suffix}.${extension}`)
  }
}

/**
 * Advanced Image Component with optimization
 */
export const createOptimizedImage = (
  src: string,
  alt: string,
  width: number,
  height: number,
  priority: boolean = false,
  className?: string
) => {
  const optimizedUrls = generateOptimizedImageUrls(src, width, height)
  
  return {
    src,
    alt,
    width,
    height,
    priority,
    className,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality: 85,
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    formats: optimizedUrls
  }
}

/**
 * Image optimization utilities
 */
export const imageOptimizationUtils = {
  /**
   * Convert images to WebP format
   */
  convertToWebP: async (imageFile: File | Blob): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error('Failed to convert image to WebP'))
          }
        }, 'image/webp', 0.85)
      }
      
      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = URL.createObjectURL(imageFile)
    })
  },
  
  /**
   * Generate responsive image sizes
   */
  generateResponsiveSizes: (originalWidth: number, originalHeight: number) => {
    const aspectRatio = originalWidth / originalHeight
    
    return {
      mobile: { width: 480, height: Math.round(480 / aspectRatio) },
      tablet: { width: 768, height: Math.round(768 / aspectRatio) },
      desktop: { width: 1200, height: Math.round(1200 / aspectRatio) },
      retina: { width: 2400, height: Math.round(2400 / aspectRatio) }
    }
  },
  
  /**
   * Generate blur placeholder
   */
  generateBlurPlaceholder: (width: number = 10, height: number = 10): string => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
      // Create a simple gradient placeholder
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#f3f4f6')
      gradient.addColorStop(1, '#e5e7eb')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }
    
    return canvas.toDataURL('image/jpeg', 0.1)
  },
  
  /**
   * Preload critical images
   */
  preloadCriticalImages: (imageUrls: string[]) => {
    imageUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      document.head.appendChild(link)
    })
  }
}

/**
 * Performance monitoring for images
 */
export const imagePerformanceMonitoring = {
  /**
   * Track image loading performance
   */
  trackImageLoad: (imageUrl: string, loadTime: number, format: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'image_load', {
        event_category: 'Performance',
        image_url: imageUrl,
        load_time: loadTime,
        format: format,
        custom_parameter_1: 'optimized'
      })
    }
  },
  
  /**
   * Monitor Core Web Vitals for images
   */
  monitorImageLCP: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if ((entry as any).element && ((entry as any).element as any).tagName === 'IMG') {
            const img = (entry as any).element as HTMLImageElement
            console.log('LCP Image:', {
              src: img.src,
              loadTime: entry.startTime,
              size: (entry as any).transferSize
            })
          }
        })
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }
  }
}

/**
 * Image optimization recommendations
 */
export const getImageOptimizationRecommendations = (currentMetrics: any) => {
  const recommendations = []
  
  if (currentMetrics.imageSize > 1000000) { // > 1MB
    recommendations.push({
      priority: 'critical',
      title: 'Convert images to WebP/AVIF',
      description: 'Reduce image file sizes by 60-80%',
      implementation: [
        'Convert all images to WebP format',
        'Add AVIF format for modern browsers',
        'Implement progressive loading',
        'Use appropriate quality settings'
      ],
      expectedImprovement: '60-80% size reduction'
    })
  }
  
  if (currentMetrics.imageCount > 20) {
    recommendations.push({
      priority: 'high',
      title: 'Implement lazy loading',
      description: 'Load images only when needed',
      implementation: [
        'Use intersection observer for lazy loading',
        'Implement blur placeholders',
        'Preload critical images',
        'Optimize loading priority'
      ],
      expectedImprovement: '50% faster initial page load'
    })
  }
  
  if (currentMetrics.lcp > 2.5) {
    recommendations.push({
      priority: 'critical',
      title: 'Optimize LCP images',
      description: 'Improve Largest Contentful Paint',
      implementation: [
        'Preload hero images',
        'Use optimal image formats',
        'Implement responsive images',
        'Add blur placeholders'
      ],
      expectedImprovement: '2-3x faster LCP'
    })
  }
  
  return recommendations
}

/**
 * Automatic image optimization pipeline
 */
export const imageOptimizationPipeline = {
  /**
   * Process uploaded images
   */
  processUploadedImage: async (file: File | Blob): Promise<{
    webp: Blob
    avif: Blob
    optimized: Blob
  }> => {
    // Convert to WebP
    const webp = await imageOptimizationUtils.convertToWebP(file)
    
    // Generate optimized version
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    return new Promise((resolve, reject) => {
      img.onload = () => {
        // Calculate optimal size
        const maxWidth = 1200
        const maxHeight = 800
        
        let { width, height } = img
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width
          width = maxWidth
        }
        
        if (height > maxHeight) {
          width = (width * maxHeight) / height
          height = maxHeight
        }
        
        canvas.width = width
        canvas.height = height
        
        ctx?.drawImage(img, 0, 0, width, height)
        
        canvas.toBlob((optimized) => {
          if (optimized) {
            resolve({
              webp,
              avif: webp, // Placeholder - would need actual AVIF conversion
              optimized
            })
          } else {
            reject(new Error('Failed to optimize image'))
          }
        }, 'image/jpeg', 0.85)
      }
      
      img.src = URL.createObjectURL(file)
    })
  },
  
  /**
   * Batch optimize existing images
   */
  batchOptimizeImages: async (imageUrls: string[]) => {
    const results = []
    
    for (const url of imageUrls) {
      try {
        const response = await fetch(url)
        const blob = await response.blob()
        const optimized = await imageOptimizationPipeline.processUploadedImage(blob)
        results.push({ url, optimized })
      } catch (error) {
        console.error(`Failed to optimize image: ${url}`, error)
      }
    }
    
    return results
  }
}
