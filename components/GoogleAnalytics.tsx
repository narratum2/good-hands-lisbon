'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

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
    if (pathname) {
      // Track pageview on route change
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        })
      }
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

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
            send_page_view: true
          });
          console.log('GA4 initialized with ID: ${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

