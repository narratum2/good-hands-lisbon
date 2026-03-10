'use client'

import Script from 'next/script'
import { useEffect, Suspense } from 'react'
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

function GATracker({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      const fullPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      trackPageView(fullPath, document.title || 'Good Hands')
      initTrafficSourceTracking()
    }
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Suspense fallback={null}>
        <GATracker GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </Suspense>
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
            scroll: true,
            outbound_links: true,
            site_search: true,
            form_interactions: true,
            video_engagement: true,
            file_downloads: true,
            anonymize_ip: false,
            allow_google_signals: true,
            allow_ad_personalization_signals: true
          });
        `}
      </Script>
    </>
  )
}
