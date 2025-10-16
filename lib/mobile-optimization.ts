/**
 * Advanced Mobile Experience Optimization
 * Mobile-first design and performance optimization
 */

export interface MobileOptimizationConfig {
  viewport: {
    width: string
    initialScale: number
    maximumScale: number
    userScalable: boolean
  }
  touch: {
    targetSize: number
    spacing: number
    gestureSupport: boolean
  }
  performance: {
    imageOptimization: boolean
    lazyLoading: boolean
    criticalCSS: boolean
    serviceWorker: boolean
  }
  accessibility: {
    touchTargets: boolean
    screenReader: boolean
    voiceControl: boolean
    highContrast: boolean
  }
}

export const mobileOptimizationConfig: MobileOptimizationConfig = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  },
  touch: {
    targetSize: 44, // iOS minimum touch target size
    spacing: 8,
    gestureSupport: true
  },
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    criticalCSS: true,
    serviceWorker: true
  },
  accessibility: {
    touchTargets: true,
    screenReader: true,
    voiceControl: true,
    highContrast: true
  }
}

/**
 * Mobile Performance Optimization Strategies
 */
export const mobilePerformanceOptimization = {
  criticalRenderingPath: {
    name: 'Critical Rendering Path Optimization',
    strategies: [
      'Inline critical CSS for above-the-fold content',
      'Defer non-critical CSS and JavaScript',
      'Optimize font loading with font-display: swap',
      'Minimize render-blocking resources'
    ],
    expectedImprovement: '40-60% faster first paint on mobile'
  },
  
  imageOptimization: {
    name: 'Mobile Image Optimization',
    strategies: [
      'Serve appropriately sized images for mobile devices',
      'Use WebP and AVIF formats with fallbacks',
      'Implement progressive image loading',
      'Use responsive images with srcset'
    ],
    expectedImprovement: '70% reduction in image payload on mobile'
  },
  
  networkOptimization: {
    name: 'Mobile Network Optimization',
    strategies: [
      'Implement service worker for offline functionality',
      'Use resource hints for critical resources',
      'Optimize for 3G/4G networks',
      'Implement adaptive loading based on connection speed'
    ],
    expectedImprovement: '50% faster loading on slow networks'
  }
}

/**
 * Mobile UX Optimization Strategies
 */
export const mobileUXOptimization = {
  touchInterface: {
    name: 'Touch Interface Optimization',
    strategies: [
      'Ensure minimum 44px touch targets',
      'Implement proper touch feedback',
      'Use native mobile gestures',
      'Optimize for one-handed use'
    ],
    expectedImprovement: '25% improvement in mobile usability scores'
  },
  
  navigation: {
    name: 'Mobile Navigation Optimization',
    strategies: [
      'Implement hamburger menu for mobile',
      'Use bottom navigation for primary actions',
      'Implement swipe gestures for navigation',
      'Optimize for thumb-friendly navigation'
    ],
    expectedImprovement: '30% faster task completion on mobile'
  },
  
  forms: {
    name: 'Mobile Form Optimization',
    strategies: [
      'Use appropriate input types for mobile keyboards',
      'Implement single-column layouts',
      'Add input validation with visual feedback',
      'Optimize for voice input and autocomplete'
    ],
    expectedImprovement: '40% reduction in form abandonment on mobile'
  }
}

/**
 * Mobile-Specific Components
 */
export const mobileComponents = {
  /**
   * Mobile-optimized button component
   */
  createMobileButton: (props: {
    text: string
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
  }) => {
    const baseClasses = 'touch-manipulation select-none'
    const sizeClasses = {
      small: 'min-h-[36px] px-3 py-2 text-sm',
      medium: 'min-h-[44px] px-4 py-3 text-base',
      large: 'min-h-[48px] px-6 py-4 text-lg'
    }
    const variantClasses = {
      primary: 'bg-gold text-ink hover:bg-gold-dark active:bg-gold-dark',
      secondary: 'bg-ink text-white hover:bg-harbor active:bg-harbor',
      outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-ink active:bg-gold-dark'
    }
    const widthClasses = props.fullWidth ? 'w-full' : ''
    
    return {
      className: `${baseClasses} ${sizeClasses[props.size || 'medium']} ${variantClasses[props.variant || 'primary']} ${widthClasses} rounded-lg font-medium transition-all duration-200 active:scale-95`,
      onClick: props.onClick,
      children: props.text,
      role: 'button',
      tabIndex: 0
    }
  },
  
  /**
   * Mobile-optimized input component
   */
  createMobileInput: (props: {
    type?: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time'
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    required?: boolean
    autoComplete?: string
  }) => {
    return {
      type: props.type || 'text',
      placeholder: props.placeholder,
      value: props.value || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => props.onChange?.(e.target.value),
      required: props.required,
      autoComplete: props.autoComplete,
      className: 'w-full min-h-[44px] px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent touch-manipulation',
      inputMode: props.type === 'tel' ? 'tel' : props.type === 'number' ? 'numeric' : 'text'
    }
  },
  
  /**
   * Mobile-optimized navigation
   */
  createMobileNavigation: (items: Array<{
    label: string
    href: string
    icon?: string
  }>) => {
    return {
      className: 'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2',
      items: items.map((item, index) => ({
        ...item,
        className: `flex flex-col items-center justify-center min-h-[44px] px-2 py-1 text-xs font-medium text-harbor hover:text-gold active:text-gold touch-manipulation ${index === 0 ? 'text-gold' : ''}`
      }))
    }
  }
}

/**
 * Mobile Performance Monitoring
 */
export const mobilePerformanceMonitoring = {
  /**
   * Monitor mobile-specific performance metrics
   */
  monitorMobilePerformance: () => {
    if (typeof window === 'undefined') return
    
    // Monitor touch response time
    let touchStartTime = 0
    document.addEventListener('touchstart', () => {
      touchStartTime = performance.now()
    })
    
    document.addEventListener('touchend', () => {
      const touchEndTime = performance.now()
      const touchResponseTime = touchEndTime - touchStartTime
      
      if (touchResponseTime > 100) { // More than 100ms
        console.warn(`Slow touch response: ${touchResponseTime.toFixed(0)}ms`)
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'mobile_performance', {
            event_category: 'Performance',
            event_label: 'Touch Response Time',
            value: Math.round(touchResponseTime)
          })
        }
      }
    })
    
    // Monitor mobile-specific Core Web Vitals
    mobilePerformanceMonitoring.monitorMobileCoreWebVitals()
    
    // Monitor mobile network conditions
    mobilePerformanceMonitoring.monitorMobileNetwork()
  },
  
  /**
   * Monitor mobile-specific Core Web Vitals
   */
  monitorMobileCoreWebVitals: () => {
    if (typeof window === 'undefined') return
    
    // Monitor LCP with mobile-specific thresholds
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime
          const isMobile = window.innerWidth < 768
          
          if (isMobile) {
            const mobileThreshold = 2500 // 2.5s for mobile
            const status = lcp <= mobileThreshold ? 'good' : 'needs-improvement'
            
            if ((window as any).gtag) {
              (window as any).gtag('event', 'mobile_core_web_vital', {
                event_category: 'Mobile Performance',
                event_label: 'LCP',
                value: Math.round(lcp),
                custom_parameter_1: status
              })
            }
          }
        }
      })
    }).observe({ entryTypes: ['largest-contentful-paint'] })
  },
  
  /**
   * Monitor mobile network conditions
   */
  monitorMobileNetwork: () => {
    if (typeof window === 'undefined' || !('connection' in navigator)) return
    
    const connection = (navigator as any).connection
    
    const networkInfo = {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    }
    
    if ((window as any).gtag) {
      (window as any).gtag('event', 'mobile_network_info', {
        event_category: 'Mobile Performance',
        effective_type: networkInfo.effectiveType,
        downlink: networkInfo.downlink,
        rtt: networkInfo.rtt,
        save_data: networkInfo.saveData
      })
    }
    
    // Adjust loading strategy based on network conditions
    if (networkInfo.effectiveType === 'slow-2g' || networkInfo.effectiveType === '2g') {
      mobilePerformanceMonitoring.enableLowBandwidthMode()
    }
  },
  
  /**
   * Enable low bandwidth mode for slow connections
   */
  enableLowBandwidthMode: () => {
    // Disable non-critical features
    const nonCriticalElements = document.querySelectorAll('[data-non-critical]')
    nonCriticalElements.forEach(element => {
      (element as HTMLElement).style.display = 'none'
    })
    
    // Enable aggressive image lazy loading
    const images = document.querySelectorAll('img[data-lazy]')
    images.forEach(img => {
      img.setAttribute('loading', 'lazy')
    })
    
    console.log('📱 Low bandwidth mode enabled for mobile')
  }
}

/**
 * Mobile Accessibility Optimization
 */
export const mobileAccessibilityOptimization = {
  /**
   * Optimize touch targets for accessibility
   */
  optimizeTouchTargets: () => {
    if (typeof window === 'undefined') return
    
    const touchElements = document.querySelectorAll('button, a, input, select, textarea')
    
    touchElements.forEach(element => {
      const rect = element.getBoundingClientRect()
      const minSize = 44 // iOS minimum touch target size
      
      if (rect.width < minSize || rect.height < minSize) {
        element.classList.add('touch-target-optimized')
        
        // Add visual indicator for small touch targets
        if (process.env.NODE_ENV === 'development') {
          (element as HTMLElement).style.outline = '2px dashed red'
          console.warn(`Small touch target detected: ${element.tagName}`, rect)
        }
      }
    })
  },
  
  /**
   * Optimize for screen readers on mobile
   */
  optimizeScreenReaderSupport: () => {
    if (typeof window === 'undefined') return
    
    // Add screen reader announcements for dynamic content
    const srAnnouncementElement = document.createElement('div')
    srAnnouncementElement.setAttribute('aria-live', 'polite')
    srAnnouncementElement.setAttribute('aria-atomic', 'true')
    srAnnouncementElement.className = 'sr-only'
    srAnnouncementElement.id = 'screen-reader-announcements'
    if (document.body) {
      document.body.appendChild(srAnnouncementElement)
    }
    
    // Function to announce to screen readers
    (window as any).announceToScreenReader = (message: string) => {
      const announcement = document.getElementById('screen-reader-announcements')
      if (announcement) {
        announcement.textContent = message
      }
    }
  },
  
  /**
   * Optimize for voice control
   */
  optimizeVoiceControl: () => {
    if (typeof window === 'undefined') return
    
    // Add voice control labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input')
    
    interactiveElements.forEach(element => {
      const label = element.getAttribute('aria-label') || element.textContent || 'interactive element'
      
      if (!element.getAttribute('aria-label')) {
        element.setAttribute('aria-label', label)
      }
    })
  }
}

/**
 * Mobile-Specific SEO Optimization
 */
export const mobileSEOOptimization = {
  /**
   * Optimize mobile-specific meta tags
   */
  generateMobileMetaTags: () => {
    return {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Good Hands Beauty',
      'format-detection': 'telephone=no',
      'theme-color': '#D4AF37'
    }
  },
  
  /**
   * Generate mobile-specific structured data
   */
  generateMobileStructuredData: () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Good Hands Beauty Concierge',
      description: 'Luxury beauty services in Lisbon, Portugal',
      url: 'https://goodhands.com',
      telephone: '+351-XXX-XXX-XXX',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lisbon, Portugal',
        addressLocality: 'Lisbon',
        addressCountry: 'PT'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '38.7223',
        longitude: '-9.1393'
      },
      openingHours: 'Mo-Fr 09:00-18:00, Sa 09:00-16:00',
      priceRange: '€€€',
      acceptsReservations: true,
      hasMap: 'https://maps.google.com/?q=Lisbon,Portugal'
    }
  }
}

/**
 * Mobile Optimization Checklist
 */
export const mobileOptimizationChecklist = {
  performance: [
    'Optimize images for mobile devices',
    'Implement critical CSS inlining',
    'Use service worker for offline functionality',
    'Minimize JavaScript bundle size',
    'Optimize for 3G/4G networks'
  ],
  
  ux: [
    'Ensure 44px minimum touch targets',
    'Implement touch-friendly navigation',
    'Optimize forms for mobile input',
    'Use appropriate mobile gestures',
    'Test on various device sizes'
  ],
  
  accessibility: [
    'Optimize touch targets for accessibility',
    'Implement screen reader support',
    'Add voice control compatibility',
    'Test with mobile assistive technologies',
    'Ensure keyboard navigation works'
  ],
  
  seo: [
    'Implement mobile-specific meta tags',
    'Use mobile-friendly structured data',
    'Optimize for mobile search results',
    'Implement AMP if beneficial',
    'Test mobile search visibility'
  ]
}
