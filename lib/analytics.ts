/**
 * Google Analytics 4 Comprehensive Tracking
 * Complete implementation for Good Hands beauty concierge
 * Measurement ID: G-ZGDMVGP040
 */

// Type definitions for GA events
export type EventNames =
  | 'page_view'
  | 'booking_started'
  | 'booking_completed'
  | 'booking_step_completed'
  | 'service_viewed'
  | 'experience_viewed'
  | 'neighborhood_viewed'
  | 'blog_article_viewed'
  | 'cta_clicked'
  | 'search_performed'
  | 'contact_attempted'
  | 'social_media_clicked'
  | 'map_clicked'
  | 'phone_clicked'
  | 'email_clicked'
  | 'exit_intent_shown'
  | 'exit_intent_closed'
  | 'exit_intent_cta_clicked'
  | 'sticky_cta_clicked'
  | 'email_capture_submitted'
  | 'email_capture_success'
  | 'ai_referral'
  | 'funnel_step'
  | 'conversion'
  | 'form_start'
  | 'form_submit'
  | 'location_view'
  | 'booking_intent'

interface EventParams {
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    gtag: (
      command: string,
      ...args: (string | Date | EventParams)[]
    ) => void
    dataLayer: unknown[]
  }
}

const GA_MEASUREMENT_ID = 'G-ZGDMVGP040'

/**
 * Traffic Source Detection
 * Automatically categorizes and tracks traffic sources
 */
export function detectTrafficSource() {
  if (typeof window === 'undefined') return null

  const referrer = document.referrer
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get('utm_source')

  // Check UTM parameters first (most accurate)
  if (utmSource) {
    return {
      type: 'campaign',
      source: utmSource,
      medium: urlParams.get('utm_medium') || 'unknown',
      campaign: urlParams.get('utm_campaign') || '',
      term: urlParams.get('utm_term') || '',
      content: urlParams.get('utm_content') || '',
    }
  }

  // AI Platform Detection
  const aiPlatforms = [
    { domains: ['chatgpt.com', 'chat.openai.com'], name: 'ChatGPT' },
    { domains: ['claude.ai', 'anthropic.com'], name: 'Claude' },
    { domains: ['perplexity.ai'], name: 'Perplexity' },
    { domains: ['gemini.google.com', 'bard.google.com'], name: 'Google Gemini' },
    { domains: ['bing.com/chat'], name: 'Bing Chat' },
    { domains: ['you.com'], name: 'You.com' },
    { domains: ['phind.com'], name: 'Phind' },
    { domains: ['character.ai'], name: 'Character.AI' },
  ]

  for (const platform of aiPlatforms) {
    if (platform.domains.some(domain => referrer.includes(domain))) {
      trackAIReferral(platform.name)
      return {
        type: 'ai',
        source: platform.name,
        platform: platform.name.toLowerCase().replace(/\s+/g, '_'),
      }
    }
  }

  // Social Media Detection
  const socialPlatforms = [
    { domains: ['instagram.com'], name: 'Instagram' },
    { domains: ['facebook.com', 'fb.com'], name: 'Facebook' },
    { domains: ['twitter.com', 'x.com'], name: 'Twitter/X' },
    { domains: ['linkedin.com'], name: 'LinkedIn' },
    { domains: ['pinterest.com'], name: 'Pinterest' },
    { domains: ['tiktok.com'], name: 'TikTok' },
    { domains: ['youtube.com', 'youtu.be'], name: 'YouTube' },
  ]

  for (const platform of socialPlatforms) {
    if (platform.domains.some(domain => referrer.includes(domain))) {
      return {
        type: 'social',
        source: platform.name,
        platform: platform.name.toLowerCase(),
      }
    }
  }

  // Search Engine Detection
  const searchEngines = [
    { domains: ['google.com', 'google.pt'], name: 'Google' },
    { domains: ['bing.com'], name: 'Bing' },
    { domains: ['yahoo.com'], name: 'Yahoo' },
    { domains: ['duckduckgo.com'], name: 'DuckDuckGo' },
    { domains: ['baidu.com'], name: 'Baidu' },
  ]

  for (const engine of searchEngines) {
    if (engine.domains.some(domain => referrer.includes(domain))) {
      const query = urlParams.get('q') || urlParams.get('query') || ''
      return {
        type: 'search',
        source: engine.name,
        engine: engine.name.toLowerCase(),
        query,
      }
    }
  }

  // Direct Traffic
  if (!referrer || referrer === window.location.origin) {
    return {
      type: 'direct',
      source: 'direct',
    }
  }

  // Other/Unknown
  try {
    const referrerDomain = new URL(referrer).hostname
    return {
      type: 'referral',
      source: referrerDomain,
    }
  } catch {
    return {
      type: 'unknown',
      source: 'unknown',
    }
  }
}

/**
 * Track AI Platform Referral
 */
export function trackAIReferral(platformName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ai_referral', {
      ai_platform: platformName.toLowerCase().replace(/\s+/g, '_'),
      platform_name: platformName,
      traffic_type: 'ai',
    })
  }
}

/**
 * Initialize traffic source tracking on page load
 */
export function initTrafficSourceTracking() {
  if (typeof window === 'undefined') return

  const source = detectTrafficSource()
  if (source && typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'traffic_source', source)
    
    // Track initial traffic source event
    const { source: sourceName, ...sourceRest } = source
    window.gtag('event', 'traffic_source_detected', {
      traffic_type: source.type,
      traffic_source: sourceName || 'unknown',
      ...sourceRest,
    })
  }
}

/**
 * Send custom event to Google Analytics
 */
export const trackEvent = (eventName: EventNames, params?: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    })
    
    // Also send to Microsoft Clarity if available
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', eventName, params)
    }
  }
}

/**
 * Track page view
 */
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    })
    
    // Track traffic source with page view
    initTrafficSourceTracking()
  }
}

/**
 * Funnel Step Tracking
 * Complete 8-step sales funnel tracking
 */
export type FunnelStep =
  | 'landing_page_view'
  | 'browse_services'
  | 'view_service_detail'
  | 'view_location'
  | 'click_book_button'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'booking_complete'

export function trackFunnelStep(step: FunnelStep, additionalData?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    const source = detectTrafficSource()
    
    window.gtag('event', 'funnel_step', {
      funnel_step: step,
      step_name: step.replace(/_/g, ' '),
      page_location: window.location.href,
      page_path: window.location.pathname,
      traffic_type: source?.type || 'unknown',
      traffic_source: source?.source || 'unknown',
      timestamp: new Date().toISOString(),
      ...additionalData,
    })
  }
}

/**
 * Track Service View
 */
export function trackServiceView(serviceName: string, category: string) {
  trackEvent('service_viewed', {
    category: 'Content',
    label: serviceName,
    service_category: category,
    service_name: serviceName,
  })
  
  trackFunnelStep('view_service_detail', {
    service_name: serviceName,
    service_category: category,
  })
}

/**
 * Track Location View
 */
export function trackLocationView(locationName: string, neighborhood?: string) {
  trackEvent('location_view', {
    category: 'Content',
    label: locationName,
    location_name: locationName,
    neighborhood: neighborhood || '',
  })
  
  trackFunnelStep('view_location', {
    location_name: locationName,
    neighborhood: neighborhood || '',
  })
}

/**
 * Track Booking Intent (when user clicks book button)
 */
export function trackBookingIntent(serviceName?: string, location?: string) {
  trackEvent('booking_intent', {
    category: 'Conversion',
    label: 'Book Button Clicked',
    service_name: serviceName || '',
    location: location || '',
  })
  
  trackFunnelStep('click_book_button', {
    service_name: serviceName || '',
    location: location || '',
  })
}

/**
 * Track Form Start
 */
export function trackFormStart(formName: string, formType?: string) {
  trackEvent('form_start', {
    category: 'Form',
    label: `Form Started: ${formName}`,
    form_name: formName,
    form_type: formType || 'contact',
  })
  
  trackFunnelStep('contact_form_start', {
    form_name: formName,
    form_type: formType || 'contact',
  })
}

/**
 * Track Form Submit
 */
export function trackFormSubmit(
  formName: string,
  success: boolean,
  formType?: string,
  additionalData?: EventParams
) {
  trackEvent('form_submit', {
    category: 'Form',
    label: `Form Submitted: ${formName}`,
    form_name: formName,
    form_type: formType || 'contact',
    success,
    ...additionalData,
  })
  
  if (success) {
    trackFunnelStep('contact_form_submit', {
      form_name: formName,
      form_type: formType || 'contact',
      ...additionalData,
    })
  }
}

/**
 * Track Conversion
 */
export function trackConversion(
  conversionType: string,
  value?: number,
  currency: string = 'EUR'
) {
  trackEvent('conversion', {
    category: 'Conversion',
    label: conversionType,
    conversion_type: conversionType,
    value: value || 0,
    currency,
  })
  
  trackFunnelStep('booking_complete', {
    conversion_type: conversionType,
    value: value || 0,
    currency,
  })
}

/**
 * Track Outbound Link
 */
export function trackOutboundLink(
  destination: string,
  url: string,
  label?: string
) {
  trackEvent('cta_clicked', {
    category: 'Outbound Link',
    label: label || destination,
    destination,
    url,
    link_type: 'outbound',
  })
  
  // Also track as outbound click for enhanced measurement
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: label || destination,
      transport_type: 'beacon',
    })
  }
}

/**
 * Track booking funnel
 */
export const trackBooking = {
  started: () => {
    trackEvent('booking_started', {
      category: 'Booking',
      label: 'User started booking form',
    })
    trackFunnelStep('contact_form_start', { form_name: 'booking', form_type: 'booking' })
  },

  stepCompleted: (step: number, stepName: string) => {
    trackEvent('booking_step_completed', {
      category: 'Booking',
      label: stepName,
      value: step,
      step_number: step,
      step_name: stepName,
    })
  },

  completed: (serviceType: string, value?: number) => {
    trackEvent('booking_completed', {
      category: 'Booking',
      label: `Service: ${serviceType}`,
      service_type: serviceType,
    })
    trackConversion('booking', value, 'EUR')
  },
}

/**
 * Track content views
 */
export const trackContent = {
  service: (serviceName: string, category: string) => {
    trackServiceView(serviceName, category)
  },

  experience: (experienceName: string) => {
    trackEvent('experience_viewed', {
      category: 'Content',
      label: experienceName,
      experience_name: experienceName,
    })
    trackFunnelStep('view_service_detail', { experience_name: experienceName })
  },

  neighborhood: (neighborhoodName: string) => {
    trackLocationView(neighborhoodName)
  },

  article: (articleTitle: string, category: string) => {
    trackEvent('blog_article_viewed', {
      category: 'Content',
      label: articleTitle,
      article_category: category,
      article_title: articleTitle,
    })
  },
}

/**
 * Track user interactions
 */
export const trackInteraction = {
  ctaClicked: (ctaText: string, location: string) => {
    trackEvent('cta_clicked', {
      category: 'Interaction',
      label: ctaText,
      location,
      cta_text: ctaText,
    })
  },

  searchPerformed: (query: string, category?: string) => {
    trackEvent('search_performed', {
      category: 'Interaction',
      search_term: query,
      search_category: category || 'all',
    })
  },

  socialMediaClicked: (platform: string, url: string) => {
    trackEvent('social_media_clicked', {
      category: 'Interaction',
      label: platform,
      platform: platform.toLowerCase(),
    })
    trackOutboundLink(platform, url, `${platform} Social Link`)
  },

  mapClicked: (neighborhood: string) => {
    trackEvent('map_clicked', {
      category: 'Interaction',
      label: neighborhood,
      neighborhood,
    })
  },

  contactMethod: (method: 'phone' | 'email', value?: string) => {
    trackEvent(method === 'phone' ? 'phone_clicked' : 'email_clicked', {
      category: 'Contact',
      label: method,
      contact_method: method,
      contact_value: value || '',
    })
  },
}

/**
 * Track errors (for debugging)
 */
export const trackError = (errorMessage: string, errorLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: errorMessage,
      fatal: false,
      location: errorLocation,
    })
  }
}

/**
 * Initialize Enhanced GA4 Configuration
 * Sets up enhanced measurement and advanced tracking
 */
export function initEnhancedGA4() {
  if (typeof window === 'undefined' || !window.gtag) return

  // Enhanced Measurement Configuration
  window.gtag('config', GA_MEASUREMENT_ID, {
    // Enhanced Measurement (all enabled)
    send_page_view: true,
    scroll: true,
    outbound_links: true,
    site_search: true,
    form_interactions: true,
    video_engagement: true,
    file_downloads: true,
    
    // Geographic Data Collection
    anonymize_ip: false, // Set to false for accurate geographic data
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
  })

  // Track initial traffic source
  initTrafficSourceTracking()
  
  // Track landing page view as first funnel step
  trackFunnelStep('landing_page_view')
  
  // Track browse services if on services page
  if (window.location.pathname.includes('/services')) {
    trackFunnelStep('browse_services')
  }
}

// Initialize on module load (client-side only)
if (typeof window !== 'undefined') {
  // Wait for gtag to be available
  const checkGtag = setInterval(() => {
    if (typeof window.gtag !== 'undefined') {
      clearInterval(checkGtag)
      initEnhancedGA4()
    }
  }, 100)
  
  // Clear after 5 seconds if gtag never loads
  setTimeout(() => clearInterval(checkGtag), 5000)
}
