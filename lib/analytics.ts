/**
 * Google Analytics Event Tracking
 * Track user interactions for better insights
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

interface EventParams {
  [key: string]: string | number | boolean | undefined
}

// Declare gtag function
declare global {
  interface Window {
    gtag: (
      command: string,
      ...args: (string | Date | EventParams)[]
    ) => void
    dataLayer: unknown[]
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
  }
}

/**
 * Track page view
 */
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-ZGDMVGP040', {
      page_path: url,
      page_title: title,
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
  },

  stepCompleted: (step: number, stepName: string) => {
    trackEvent('booking_step_completed', {
      category: 'Booking',
      label: stepName,
      value: step,
    })
  },

  completed: (serviceType: string) => {
    trackEvent('booking_completed', {
      category: 'Booking',
      label: `Service: ${serviceType}`,
    })
  },
}

/**
 * Track content views
 */
export const trackContent = {
  service: (serviceName: string, category: string) => {
    trackEvent('service_viewed', {
      category: 'Content',
      label: serviceName,
      service_category: category,
    })
  },

  experience: (experienceName: string) => {
    trackEvent('experience_viewed', {
      category: 'Content',
      label: experienceName,
    })
  },

  neighborhood: (neighborhoodName: string) => {
    trackEvent('neighborhood_viewed', {
      category: 'Content',
      label: neighborhoodName,
    })
  },

  article: (articleTitle: string, category: string) => {
    trackEvent('blog_article_viewed', {
      category: 'Content',
      label: articleTitle,
      article_category: category,
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
    })
  },

  searchPerformed: (query: string, category?: string) => {
    trackEvent('search_performed', {
      category: 'Interaction',
      search_term: query,
      search_category: category || 'all',
    })
  },

  socialMediaClicked: (platform: string) => {
    trackEvent('social_media_clicked', {
      category: 'Interaction',
      label: platform,
    })
  },

  mapClicked: (neighborhood: string) => {
    trackEvent('map_clicked', {
      category: 'Interaction',
      label: neighborhood,
    })
  },

  contactMethod: (method: 'phone' | 'email') => {
    trackEvent(method === 'phone' ? 'phone_clicked' : 'email_clicked', {
      category: 'Contact',
      label: method,
    })
  },
}

/**
 * Track outbound links
 */
export const trackOutboundLink = (url: string, label: string) => {
  trackEvent('cta_clicked', {
    category: 'Outbound Link',
    label,
    url,
  })
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
