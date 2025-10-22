'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  fcp?: number
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    const metrics: PerformanceMetrics = {}

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element }
      metrics.lcp = lastEntry.startTime
      
      console.log('LCP:', metrics.lcp)
      // Send to analytics service
      sendMetric('lcp', metrics.lcp)
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime
        metrics.fid = fid
        
        console.log('FID:', metrics.fid)
        sendMetric('fid', metrics.fid)
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          metrics.cls = clsValue
          
          console.log('CLS:', metrics.cls)
          sendMetric('cls', metrics.cls)
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      console.log('TTFB:', metrics.ttfb)
      sendMetric('ttfb', metrics.ttfb)
    }

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime
          console.log('FCP:', metrics.fcp)
          sendMetric('fcp', metrics.fcp)
        }
      })
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Cleanup observers after 30 seconds
    const cleanup = setTimeout(() => {
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      fcpObserver.disconnect()
    }, 30000)

    return () => {
      clearTimeout(cleanup)
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      fcpObserver.disconnect()
    }
  }, [])

  return null
}

// Send metrics to analytics service
function sendMetric(metric: string, value: number) {
  // Example: Send to Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric, {
      custom_map: { metric_dimension: metric },
      metric_value: value,
      non_interaction: true,
    })
  }

  // Example: Send to custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric,
        value,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    }).catch(console.error)
  }
}

// Utility function to measure custom performance
export function measurePerformance(name: string, fn: () => void | Promise<void>) {
  const start = performance.now()
  
  const result = fn()
  
  if (result instanceof Promise) {
    return result.finally(() => {
      const end = performance.now()
      const duration = end - start
      console.log(`${name} took ${duration.toFixed(2)}ms`)
      sendMetric(`custom_${name.toLowerCase()}`, duration)
    })
  } else {
    const end = performance.now()
    const duration = end - start
    console.log(`${name} took ${duration.toFixed(2)}ms`)
    sendMetric(`custom_${name.toLowerCase()}`, duration)
    return result
  }
}

// Hook for measuring component render performance
export function useRenderPerformance(componentName: string) {
  useEffect(() => {
    const start = performance.now()
    
    return () => {
      const end = performance.now()
      const duration = end - start
      console.log(`${componentName} render took ${duration.toFixed(2)}ms`)
      sendMetric(`render_${componentName.toLowerCase()}`, duration)
    }
  })
}


