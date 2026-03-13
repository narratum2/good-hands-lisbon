/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization - Core Web Vitals (LCP)
  images: {
    domains: ['placehold.co'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Security Headers - Google loves secure sites
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://widget.intercom.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.clarity.ms https://api.intercom.io wss://nexus-websocket-a.intercom.io",
              "frame-src 'self' https://www.openstreetmap.org",
            ].join('; ')
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/brand-images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/brand-assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  
  // Redirects
  async redirects() {
    return [
      // www → non-www (permanent 301 for full SEO link equity)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.beautysalonlisbon.com' }],
        destination: 'https://beautysalonlisbon.com/:path*',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#booking',
        permanent: true,
      },
      {
        source: '/blog/summer-beauty-guide-lisbon',
        destination: '/journal/seasonal-beauty-guide-lisbon-climate-skin',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/journal/:slug*',
        permanent: true,
      },
      {
        source: '/journal/wedding-beauty-timeline',
        destination: '/journal/lisbon-wedding-beauty-timeline',
        permanent: true,
      },
      {
        source: '/journal/beauty-wellness-digital-nomads-lisbon',
        destination: '/journal/beauty-services-digital-nomads-lisbon',
        permanent: true,
      },
      {
        source: '/journal/mens-grooming-services-lisbon',
        destination: '/journal/mens-grooming-lisbon-guide',
        permanent: true,
      },
      {
        source: '/journal/lisbon-bridal-beauty-guide',
        destination: '/journal/bridal-beauty-guide-lisbon',
        permanent: true,
      },
    ]
  },

  // Don't fail build on prerender errors (client components with useSearchParams/usePathname)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

