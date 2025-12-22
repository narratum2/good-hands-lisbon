/**
 * CENTRALIZED SEO & SCHEMA CONFIGURATION
 * Single source of truth for all SEO data, structured data, and metadata
 * 
 * WHY THIS EXISTS:
 * - Prevents inconsistencies across pages
 * - Easy to update globally
 * - Type-safe with TypeScript
 * - Reusable across components
 * 
 * Created: October 13, 2025
 */

// ===== CORE BUSINESS INFO =====
export const BUSINESS_INFO = {
  name: 'Good Hands',
  legalName: 'Good Hands Lisbon, Lda.',
  slogan: 'Your Personal Beauty Concierge in Lisbon',
  foundedYear: 2024,
  
  // Contact
  email: 'hello@beautysalonlisbon.com',
  phone: '+351-XXX-XXX-XXX', // TODO: Add real phone
  
  // URLs - PRODUCTION DOMAIN
  baseUrl: 'https://beautysalonlisbon.com',
  domain: 'beautysalonlisbon.com',
  
  // Location
  city: 'Lisbon',
  country: 'Portugal',
  countryCode: 'PT',
  coordinates: {
    latitude: '38.7223',
    longitude: '-9.1393',
  },
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/goodhands',
    twitter: 'https://x.com/goodhands',
    telegram: 'https://t.me/goodhands',
    facebook: 'https://facebook.com/goodhands',
    linkedin: 'https://linkedin.com/company/goodhands',
  },
  
  // Business Stats (update regularly)
  stats: {
    professionals: '150+',
    neighborhoods: 8,
    avgRating: 4.9,
    reviewCount: 127,
    clientsServed: '500+',
  },
  
  // Logo & Images
  logo: '/brand-assets/logo/logo-icon.svg',
  heroImage: '/brand-images/hero-salon-interior.png',
  ogImage: '/brand-assets/social/og-image.jpg',
} as const

// ===== SERVICE AREAS =====
export const SERVICE_AREAS = [
  { name: 'Lisbon', type: 'City', wikiUrl: 'https://en.wikipedia.org/wiki/Lisbon' },
  { name: 'Chiado', type: 'Neighborhood', slug: 'chiado' },
  { name: 'Príncipe Real', type: 'Neighborhood', slug: 'principe-real' },
  { name: 'Alfama', type: 'Neighborhood', slug: 'alfama' },
  { name: 'Belém', type: 'Neighborhood', slug: 'belem' },
  { name: 'Baixa', type: 'Neighborhood', slug: 'baixa' },
  { name: 'Avenida da Liberdade', type: 'Neighborhood', slug: 'avenida' },
  { name: 'Bairro Alto', type: 'Neighborhood', slug: 'bairro-alto' },
  { name: 'Cais do Sodré', type: 'Neighborhood', slug: 'cais-do-sodre' },
  { name: 'Cascais', type: 'City', slug: 'cascais' },
  { name: 'Sintra', type: 'City', slug: 'sintra' },
] as const

// ===== SERVICE CATEGORIES =====
export const SERVICE_CATEGORIES = [
  {
    name: 'Premium Hair Styling',
    slug: 'hair',
    description: 'Expert hair colorists and stylists matched to your style preferences',
    priceFrom: 105,
    services: ['Precision Cut', 'Color & Highlights', 'Balayage', 'Blowout & Styling'],
  },
  {
    name: 'Luxury Spa Treatments',
    slug: 'spa',
    description: 'Curated massage and facial treatments',
    priceFrom: 95,
    services: ['Swedish Massage', 'Deep Tissue', 'Aromatherapy', 'Hot Stone'],
  },
  {
    name: 'Professional Makeup',
    slug: 'makeup',
    description: 'Special occasion and bridal makeup artists',
    priceFrom: 85,
    services: ['Event Makeup', 'Bridal Makeup', 'Makeup Lesson'],
  },
  {
    name: 'Nail Care',
    slug: 'nails',
    description: 'Premium manicure and pedicure services',
    priceFrom: 50,
    services: ['Gel Manicure', 'Luxury Pedicure', 'Nail Art'],
  },
  {
    name: 'Skincare',
    slug: 'skincare',
    description: 'Advanced facial treatments and skin therapy',
    priceFrom: 130,
    services: ['Signature Facial', 'Anti-Aging Treatment', 'Deep Cleanse'],
  },
] as const

// ===== PREMIUM EXPERIENCES =====
export const PREMIUM_EXPERIENCES = [
  {
    name: 'Wedding Beauty Packages',
    slug: 'weddings',
    description: 'Complete bridal beauty journey from trial to wedding day',
    priceFrom: 800,
  },
  {
    name: 'Wellness Retreats',
    slug: 'retreats',
    description: 'Multi-day rejuvenation in Sintra or Cascais',
    priceFrom: 1200,
  },
  {
    name: 'Corporate Wellness',
    slug: 'corporate',
    description: 'Team building through beauty and wellness',
    priceFrom: 500,
  },
  {
    name: 'Coastal Photoshoots',
    slug: 'photoshoots',
    description: 'Professional beauty styling for your seaside photo session',
    priceFrom: 300,
  },
  {
    name: 'Good Hands Membership',
    slug: 'membership',
    description: 'Exclusive access and priority booking year-round',
    priceFrom: 200,
    recurring: 'monthly',
  },
] as const

// ===== SEO TEMPLATES =====
export const SEO_TEMPLATES = {
  // Homepage
  home: {
    title: 'Good Hands — Luxury Beauty Concierge Lisbon | Vetted Professionals',
    description: 'Lisbon\'s premier luxury beauty concierge service. We match you with personally vetted hair stylists, spa therapists, and beauty professionals. Trusted by Four Seasons, Tivoli, and luxury hotels.',
    keywords: 'luxury beauty concierge Lisbon, beauty services Lisbon, hair stylist Lisbon, spa treatments Lisbon',
  },
  
  // Service pages
  services: {
    title: 'All Beauty Services — Hair, Spa, Makeup, Nails | Good Hands Lisbon',
    description: 'Browse our complete catalog of vetted beauty services in Lisbon. From precision haircuts to luxury spa treatments. Expert matching, perfect results.',
    keywords: 'lisbon beauty services, hair salon lisbon, spa lisbon, makeup artist lisbon',
  },
  
  // Experiences
  experiences: {
    title: 'Premium Beauty Experiences Lisbon — Weddings, Retreats, Corporate | Good Hands',
    description: 'Exclusive beauty packages for destination weddings, wellness retreats, corporate events, and photoshoots in Lisbon. Complete coordination, vetted professionals, perfect results guaranteed.',
    keywords: 'lisbon wedding beauty, wellness retreats, corporate beauty services',
  },
  
  // About
  about: {
    title: 'About Good Hands — Lisbon\'s Premier Beauty Concierge Service',
    description: 'Meet the team behind Lisbon\'s most trusted beauty concierge. We match you with vetted professionals for hair, spa, makeup, and wellness. No trial-and-error—just perfect experiences every time.',
    keywords: 'about good hands, beauty concierge team, lisbon beauty experts',
  },
  
  // How It Works
  howItWorks: {
    title: 'How Good Hands Works — Lisbon Beauty Concierge Process',
    description: 'Discover how Good Hands connects you with vetted beauty professionals in Lisbon. From consultation to booking to your perfect experience.',
    keywords: 'how good hands works, lisbon beauty booking, concierge process',
  },
  
  // Journal
  journal: {
    title: 'Beauty Journal — Expert Guides & Insights | Good Hands Lisbon',
    description: 'Expert beauty guides, neighborhood reviews, and insider tips for experiencing Lisbon\'s best hair, spa, and wellness services.',
    keywords: 'lisbon beauty blog, beauty guides, spa guides lisbon',
  },
} as const

// ===== HELPER FUNCTIONS =====

/**
 * Generate full URL from path
 */
export function getFullUrl(path: string = ''): string {
  return `${BUSINESS_INFO.baseUrl}${path}`
}

/**
 * Generate Organization Schema (for layout.tsx)
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${BUSINESS_INFO.baseUrl}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: ['Good Hands Lisbon', 'Good Hands Beauty Concierge', 'Good Hands Portugal'],
    description: SEO_TEMPLATES.home.description,
    url: BUSINESS_INFO.baseUrl,
    logo: getFullUrl(BUSINESS_INFO.logo),
    image: getFullUrl(BUSINESS_INFO.heroImage),
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: '€€€',
    foundingDate: BUSINESS_INFO.foundedYear.toString(),
    sameAs: Object.values(BUSINESS_INFO.social),
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.city,
      addressCountry: BUSINESS_INFO.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    areaServed: SERVICE_AREAS.map(area => ({
      '@type': area.type,
      name: area.name,
      ...(area.type === 'City' && 'wikiUrl' in area ? { '@id': area.wikiUrl } : {}),
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.stats.avgRating.toString(),
      reviewCount: BUSINESS_INFO.stats.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beauty Services',
      itemListElement: SERVICE_CATEGORIES.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          serviceType: service.name,
        },
        price: service.priceFrom.toString(),
        priceCurrency: 'EUR',
      })),
    },
    knowsAbout: [
      'Beauty Services',
      'Hair Styling',
      'Spa Treatments',
      'Makeup Artistry',
      'Concierge Services',
      'Luxury Hospitality',
      'Lisbon Tourism',
    ],
    slogan: BUSINESS_INFO.slogan,
  }
}

/**
 * Generate Breadcrumb Schema
 */
export function getBreadcrumbSchema(breadcrumbs: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: getFullUrl(crumb.path),
    })),
  }
}

/**
 * Generate Article Schema for blog posts
 */
export function getArticleSchema(article: {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  keywords?: string[]
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: getFullUrl(BUSINESS_INFO.logo),
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getFullUrl(article.path),
    },
    image: article.image || getFullUrl(BUSINESS_INFO.ogImage),
    keywords: article.keywords || [],
  }
}

/**
 * Generate Service Schema
 */
export function getServiceSchema(service: {
  name: string
  description: string
  priceFrom: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
    },
    areaServed: `${BUSINESS_INFO.city}, ${BUSINESS_INFO.country}`,
    description: service.description,
    offers: {
      '@type': 'Offer',
      price: service.priceFrom.toString(),
      priceCurrency: 'EUR',
    },
  }
}

// ===== EXPORT EVERYTHING =====
export default {
  BUSINESS_INFO,
  SERVICE_AREAS,
  SERVICE_CATEGORIES,
  PREMIUM_EXPERIENCES,
  SEO_TEMPLATES,
  getFullUrl,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getArticleSchema,
  getServiceSchema,
}

