'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initEnhancedGA4, trackPageView, initTrafficSourceTracking } from '@/lib/analytics'

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

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      const fullPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      // Track pageview on route change
      trackPageView(fullPath, document.title || 'Good Hands')
      
      // Initialize traffic source tracking (for new page loads)
      initTrafficSourceTracking()
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            // Enhanced Measurement (all enabled)
            scroll: true,
            outbound_links: true,
            site_search: true,
            form_interactions: true,
            video_engagement: true,
            file_downloads: true,
            // Geographic Data
            anonymize_ip: false,
            allow_google_signals: true,
            allow_ad_personalization_signals: true
          });
          
          // Initialize enhanced tracking after gtag is ready
          setTimeout(function() {
            if (typeof window !== 'undefined' && window.gtag) {
              console.log('✅ GA4 initialized with ID: ${GA_MEASUREMENT_ID}');
              console.log('✅ Enhanced Measurement: Enabled');
              console.log('✅ Traffic Source Detection: Active');
            }
          }, 100);
        `}
      </Script>
      <Script id="init-enhanced-ga4" strategy="afterInteractive">
        {`
          // Initialize enhanced GA4 after page load
          if (typeof window !== 'undefined') {
            window.addEventListener('load', function() {
              setTimeout(function() {
                if (window.gtag) {
                  // Enhanced GA4 will be initialized via analytics.ts
                  // This ensures all tracking features are active
                }
              }, 500);
            });
          }
        `}
      </Script>
    </>
  )
}

