import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product' | 'service'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  canonical?: string
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/api/og',
    url = 'https://goodhands.com',
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
    noindex = false,
    canonical,
  } = config

  const fullTitle = title.includes('Good Hands') ? title : `${title} — Good Hands`
  const fullUrl = canonical || url

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: type === 'product' || type === 'service' ? 'website' : type,
      url: fullUrl,
      siteName: 'Good Hands',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Good Hands',
    description: 'AI-first beauty concierge for Lisbon and beyond',
    url: 'https://goodhands.com',
    logo: 'https://goodhands.com/brand-assets/logo/logo-primary.svg',
    sameAs: [
      'https://instagram.com/goodhandslisbon',
      'https://x.com/goodhandslisbon',
      'https://t.me/goodhandslisbon',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
    areaServed: [
      'Chiado',
      'Príncipe Real',
      'Baixa',
      'Avenida da Liberdade',
      'Alfama',
      'Belém',
      'Sintra',
      'Cascais',
    ],
    serviceType: 'Beauty Concierge Service',
    priceRange: '€€€',
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed: string
  price?: string
  availability?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: {
      '@type': 'City',
      name: service.areaServed,
    },
    ...(service.price && { offers: { '@type': 'Offer', price: service.price } }),
    ...(service.availability && { availability: service.availability }),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  authorBio?: string
  url: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
    author: {
      '@type': 'Person',
      name: article.author,
      ...(article.authorBio && { description: article.authorBio }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Good Hands',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goodhands.com/brand-assets/logo/logo-primary.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    ...(article.tags && { keywords: article.tags.join(', ') }),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Good Hands',
    description: 'Premium beauty concierge service in Lisbon',
    url: 'https://goodhands.com',
    telephone: '+351-XXX-XXX-XXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.7223',
      longitude: '-9.1393',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '€€€',
    serviceArea: {
      '@type': 'City',
      name: 'Lisbon',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beauty Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Styling',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Facial Treatments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Makeup Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nail Art',
          },
        },
      ],
    },
  }
}

// SEO utility functions
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://goodhands.com'
  return `${baseUrl}${path}`
}

export function generateOGImageUrl(title: string, description?: string): string {
  const params = new URLSearchParams({
    title: title,
    ...(description && { description }),
  })
  return `/api/og?${params.toString()}`
}

export function generateSitemapUrl(): string {
  return 'https://goodhands.com/sitemap.xml'
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${generateSitemapUrl()}`
}

// Meta tags for specific pages
export const PAGE_SEO_CONFIGS = {
  home: {
    title: 'Good Hands — Beauty Concierge for Lisbon & Beyond',
    description: 'Curated beauty experiences in Lisbon\'s most elegant neighborhoods. Premium services, expert guidance, and boutique-level care.',
    keywords: ['beauty concierge', 'Lisbon beauty', 'premium beauty services', 'beauty experiences', 'wedding beauty', 'corporate beauty'],
  },
  about: {
    title: 'About Good Hands — Lisbon\'s Premier Beauty Concierge Service',
    description: 'Meet the team behind Lisbon\'s most trusted beauty concierge. We match you with vetted professionals for hair, spa, makeup, and wellness.',
    keywords: ['about good hands', 'beauty concierge team', 'Lisbon beauty experts', 'beauty matching service'],
  },
  services: {
    title: 'Beauty Services — Hair, Spa, Makeup & Wellness in Lisbon',
    description: 'Discover our curated selection of premium beauty services across Lisbon. From hair styling to wellness treatments, we match you with the best professionals.',
    keywords: ['beauty services Lisbon', 'hair salon Lisbon', 'spa treatments Lisbon', 'makeup artist Lisbon'],
  },
  journal: {
    title: 'Journal — Beauty Insights & Lisbon City Guides',
    description: 'Beauty insights, Lisbon city guides, expert advice, and editorial stories from the Good Hands team.',
    keywords: ['beauty blog', 'Lisbon beauty guide', 'beauty tips', 'city guide Lisbon'],
  },
} as const
