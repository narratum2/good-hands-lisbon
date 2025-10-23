export interface Author {
  name: string
  bio: string
  avatar?: string
  social?: {
    instagram?: string
    twitter?: string
    linkedin?: string
  }
}

export type ArticleCategory = 
  | 'Traditions'
  | 'Weddings'
  | 'City Guide'
  | 'Skincare'
  | 'Nail Art'
  | 'Wellness'
  | 'Global Exploration'

export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: ArticleCategory
  author: Author
  readTime?: string
  tags?: string[]
  featured?: boolean
  published?: boolean
  seo?: {
    metaDescription?: string
    keywords?: string[]
    canonicalUrl?: string
  }
}

export interface ArticleMetadata {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  category: ArticleCategory
  author: Author
  readTime?: string
  featured?: boolean
}

export interface RelatedArticle extends ArticleMetadata {
  similarity?: number
}

// Form validation types
export interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  neighborhood: string
  date: string
  time: string
  message: string
}

export interface BookingFormStep {
  step: number
  title: string
  fields: (keyof BookingFormData)[]
  validation: (data: Partial<BookingFormData>) => boolean
}

// Service types
export interface Service {
  id: string
  name: string
  description: string
  category: string
  price: {
    min: number
    max: number
    currency: 'EUR'
  }
  duration: string
  image: string
  featured?: boolean
}

export interface Neighborhood {
  id: string
  name: string
  description: string
  image: string
  services: Service[]
  featured?: boolean
}

// SEO and metadata types
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonicalUrl?: string
  noindex?: boolean
}

export interface StructuredData {
  '@context': string
  '@type': string
  [key: string]: any
}



