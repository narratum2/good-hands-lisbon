import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import ConditionalNavbar from '@/components/ConditionalNavbar'
import ConditionalFooter from '@/components/ConditionalFooter'
import ConditionalGrain from '@/components/ConditionalGrain'
import ConditionalAIDiscovery from '@/components/ConditionalAIDiscovery'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { BookingModalProvider } from '@/components/BookingModalProvider'
import ConditionalSmartAssistant from '@/components/ConditionalSmartAssistant'
import OptimizationProvider from '@/components/OptimizationProvider'
import { getOrganizationSchema, SEO_TEMPLATES } from '@/lib/seo-config'

// Configure Inter font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Configure Playfair Display font
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: SEO_TEMPLATES.home.title,
  description: SEO_TEMPLATES.home.description,
  keywords: SEO_TEMPLATES.home.keywords,
  verification: {
    google: 'saJIT9Mt8gKXpi-hAQjMVDMxV5_kqdn8_z6YUqZ-ZrY',
  },
  metadataBase: new URL('https://beautysalonlisbon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beautysalonlisbon.com',
    siteName: 'Good Hands',
    title: SEO_TEMPLATES.home.title,
    description: SEO_TEMPLATES.home.description,
    images: [
      {
        url: 'https://beautysalonlisbon.com/api/og',
        width: 1200,
        height: 630,
        alt: 'Good Hands Luxury Beauty Concierge Lisbon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TEMPLATES.home.title,
    description: SEO_TEMPLATES.home.description,
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'ai-content-declaration': 'Human-curated service information with AI-enhanced descriptions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/brand-assets/logo/logo-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/brand-assets/logo/logo-icon.svg" />
        {/* Organization Schema - Centralized from lib/seo-config.ts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Book Luxury Beauty Services in Lisbon with Good Hands',
              description: 'Step-by-step guide to booking curated beauty services through Good Hands concierge',
              totalTime: 'PT10M',
              step: [
                {
                  '@type': 'HowToStep',
                  position: 1,
                  name: 'Describe Your Needs',
                  text: 'Tell us about your desired service, style preferences, location, and any specific requirements',
                  url: 'https://beautysalonlisbon.com#search',
                },
                {
                  '@type': 'HowToStep',
                  position: 2,
                  name: 'Get Personalized Match',
                  text: 'Our concierge reviews your preferences and matches you with the perfect professional from our vetted network of 150+ specialists',
                  url: 'https://beautysalonlisbon.com/about',
                },
                {
                  '@type': 'HowToStep',
                  position: 3,
                  name: 'Book & Confirm',
                  text: 'Choose your preferred date and time. We handle all coordination and send you confirmation details',
                  url: 'https://beautysalonlisbon.com/services',
                },
                {
                  '@type': 'HowToStep',
                  position: 4,
                  name: 'Enjoy Your Experience',
                  text: 'Arrive at your appointment and enjoy your personalized beauty service with complete confidence',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Analytics - G-ZGDMVGP040
            Enhanced Measurement: Enabled
            Stream: Good-Hands (12289898409)
            Property: beautysalonlisbon.com
        */}
        {/* Microsoft Clarity for heatmaps and session recordings */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nqx8yz9m2i");
          `}
        </Script>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-ZGDMVGP040" />
        <OptimizationProvider />
        <BookingModalProvider>
          {/* Skip to main content - Accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold focus:text-ink focus:rounded focus:shadow-xl"
          >
            Skip to main content
          </a>
          <ConditionalAIDiscovery />
          <ConditionalSmartAssistant />
          <ConditionalGrain />
          <ConditionalNavbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <ConditionalFooter />
          <Analytics />
        </BookingModalProvider>
        {process.env.NEXT_PUBLIC_INTERCOM_APP_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.intercomSettings = {
                  api_base: "https://api-iam.intercom.io",
                  app_id: "${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}"
                };
                (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}

