/**
 * Review Schema Markup Helper
 * 
 * Generates structured data for customer reviews
 * Critical for AI trust signals and search visibility
 * 
 * Usage: Import and add to any page with reviews
 */

export interface Review {
  id: string
  author: {
    name: string
    image?: string
  }
  rating: 1 | 2 | 3 | 4 | 5
  reviewBody: string
  datePublished: string // ISO 8601 format: YYYY-MM-DD
  service?: string // e.g., "Hair Color", "Spa Treatment"
  location?: string // e.g., "Chiado", "Príncipe Real"
}

/**
 * Generate Review schema for a single review
 */
export function getReviewSchema(review: Review) {
  return {
    '@type': 'Review',
    '@id': `review-${review.id}`,
    author: {
      '@type': 'Person',
      name: review.author.name,
      ...(review.author.image && { image: review.author.image })
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    ...(review.service && { itemReviewed: {
      '@type': 'Service',
      name: review.service
    }}),
    publisher: {
      '@type': 'Organization',
      name: 'Good Hands'
    }
  }
}

/**
 * Generate AggregateRating schema from multiple reviews
 */
export function getAggregateRatingSchema(reviews: Review[]) {
  if (reviews.length === 0) {
    return null
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = totalRating / reviews.length

  return {
    '@type': 'AggregateRating',
    ratingValue: averageRating.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1
  }
}

/**
 * Generate complete Review schema markup for a page with multiple reviews
 */
export function getReviewsSchemaMarkup(reviews: Review[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...reviews.map(review => getReviewSchema(review)),
      ...(reviews.length > 0 ? [{
        '@type': 'Organization',
        '@id': 'https://beautysalonlisbon.com/#organization',
        name: 'Good Hands',
        aggregateRating: getAggregateRatingSchema(reviews)
      }] : [])
    ]
  }
}

/**
 * EXAMPLE REVIEWS (Template - Replace with real reviews)
 * 
 * NOTE: These are example reviews for demonstration.
 * Once you have real reviews, replace these with actual customer feedback.
 */
export const exampleReviews: Review[] = [
  {
    id: '001',
    author: { name: 'Sofia Martinez' },
    rating: 5,
    reviewBody: 'Good Hands made finding a great hair colorist in Lisbon so easy! I was visiting for a week and needed a touch-up. They matched me with a wonderful professional in Chiado who understood exactly what I wanted. The whole process was seamless, and I loved the results.',
    datePublished: '2024-09-15',
    service: 'Hair Color',
    location: 'Chiado'
  },
  {
    id: '002',
    author: { name: 'James Chen' },
    rating: 5,
    reviewBody: 'As an expat new to Lisbon, I was dreading finding a barber. Good Hands connected me with someone who speaks English and understands modern men\'s cuts. It\'s now my monthly spot. Worth every euro.',
    datePublished: '2024-10-03',
    service: 'Men\'s Haircut',
    location: 'Príncipe Real'
  },
  {
    id: '003',
    author: { name: 'Emma Thompson' },
    rating: 5,
    reviewBody: 'We used Good Hands for our destination wedding in Sintra. They coordinated hair and makeup for me and 5 bridesmaids. Everything ran perfectly on schedule, and we all looked amazing. The trial session beforehand gave me complete confidence for the big day.',
    datePublished: '2024-08-22',
    service: 'Bridal Beauty',
    location: 'Sintra'
  },
  {
    id: '004',
    author: { name: 'Maria Silva' },
    rating: 4,
    reviewBody: 'Great service overall. The massage therapist they recommended was excellent and exactly what I needed for my laptop-induced neck pain. Only minor issue was a small scheduling mix-up, but they handled it professionally and made it right.',
    datePublished: '2024-11-05',
    service: 'Therapeutic Massage',
    location: 'Chiado'
  },
  {
    id: '005',
    author: { name: 'Alessandro Rossi' },
    rating: 5,
    reviewBody: 'Ho usato Good Hands per trovare un servizio spa durante il mio viaggio di lavoro a Lisbona. Perfetto! Il massaggio era esattamente ciò di cui avevo bisogno dopo una settimana stressante. Highly recommend!',
    datePublished: '2024-10-18',
    service: 'Spa Treatment',
    location: 'Belém'
  }
]

/**
 * HOW TO USE:
 * 
 * 1. In any page component, import this file
 * 2. Add the schema to your page's <head> or component
 * 3. Replace example reviews with real reviews from your database
 * 
 * Example implementation:
 * 
 * ```tsx
 * import { getReviewsSchemaMarkup, exampleReviews } from '@/lib/review-schema'
 * 
 * export default function Page() {
 *   return (
 *     <>
 *       <script
 *         type="application/ld+json"
 *         dangerouslySetInnerHTML={{
 *           __html: JSON.stringify(getReviewsSchemaMarkup(exampleReviews))
 *         }}
 *       />
 *       <div>Your page content...</div>
 *     </>
 *   )
 * }
 * ```
 */

