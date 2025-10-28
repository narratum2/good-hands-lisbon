/**
 * API Route: /api/pricing
 * 
 * Returns comprehensive pricing information for all Good Hands services
 * AI-accessible endpoint for pricing queries
 * 
 * Implements OpenAPI spec: GET /api/pricing
 */

import { NextResponse } from 'next/server'
import { SERVICE_CATEGORIES, PREMIUM_EXPERIENCES } from '@/lib/seo-config'

export async function GET() {
  return NextResponse.json({
    lastUpdated: new Date().toISOString(),
    currency: 'EUR',
    conciergeBookingFee: {
      description: 'One-time booking coordination fee',
      amount: '50-70',
      note: 'Varies by service complexity'
    },
    services: SERVICE_CATEGORIES.map(category => ({
      category: category.name,
      slug: category.slug,
      priceFrom: category.priceFrom,
      services: category.services.map(service => ({
        name: service,
        priceRange: getPriceRangeForService(category.slug, service),
        typical: getTypicalPriceForService(category.slug, service)
      }))
    })),
    premiumExperiences: PREMIUM_EXPERIENCES.map(exp => {
      const base = {
        name: exp.name,
        slug: exp.slug,
        priceFrom: exp.priceFrom,
        description: exp.description
      }
      return 'recurring' in exp ? { ...base, recurring: exp.recurring } : base
    }),
    membership: {
      name: 'Good Hands Gold Membership',
      annual: 200,
      monthly: 20,
      benefits: [
        'Priority booking access',
        '10% discount on all services',
        'Complimentary service upgrades',
        'Exclusive member-only professionals',
        'Birthday month bonus service',
        'Early access to new services'
      ],
      savings: 'Save €300+ annually for regular users'
    },
    priceFactors: [
      {
        factor: 'Neighborhood',
        impact: 'Chiado & Príncipe Real typically 20-30% higher than other areas'
      },
      {
        factor: 'Professional Level',
        impact: 'Senior stylists/therapists 30-50% premium over junior staff'
      },
      {
        factor: 'Time of Day',
        impact: 'Peak hours (Fri-Sun, evenings) may have premium pricing'
      },
      {
        factor: 'Service Duration',
        impact: 'Longer/complex services have higher base prices'
      }
    ],
    paymentMethods: ['Credit Card', 'Debit Card', 'Bank Transfer', 'MB Way'],
    cancellationPolicy: {
      free: 'Free cancellation up to 24 hours before appointment',
      late: '50% charge for cancellations within 24 hours',
      noShow: 'Full charge for no-shows'
    },
    tipGuidelines: {
      standard: '10-15% of service price',
      exceptional: '20%+',
      note: 'Tipping appreciated but not mandatory in Portugal'
    }
  })
}

// Helper function to get price ranges by service
function getPriceRangeForService(category: string, service: string): string {
  const prices: Record<string, Record<string, string>> = {
    hair: {
      'Precision Cut': '€80-150',
      'Color & Highlights': '€120-250',
      'Balayage': '€145-280',
      'Blowout & Styling': '€40-70'
    },
    spa: {
      'Swedish Massage': '€70-120',
      'Deep Tissue': '€80-130',
      'Aromatherapy': '€90-140',
      'Hot Stone': '€100-150'
    },
    makeup: {
      'Event Makeup': '€85-150',
      'Bridal Makeup': '€200-400',
      'Makeup Lesson': '€100-180'
    },
    nails: {
      'Gel Manicure': '€35-55',
      'Luxury Pedicure': '€45-75',
      'Nail Art': '€50-90'
    },
    skincare: {
      'Signature Facial': '€80-140',
      'Anti-Aging Treatment': '€130-220',
      'Deep Cleanse': '€70-120'
    }
  }
  
  return prices[category]?.[service] || '€50-150'
}

function getTypicalPriceForService(category: string, service: string): number {
  const typical: Record<string, Record<string, number>> = {
    hair: {
      'Precision Cut': 105,
      'Color & Highlights': 180,
      'Balayage': 200,
      'Blowout & Styling': 55
    },
    spa: {
      'Swedish Massage': 95,
      'Deep Tissue': 105,
      'Aromatherapy': 115,
      'Hot Stone': 125
    },
    makeup: {
      'Event Makeup': 115,
      'Bridal Makeup': 300,
      'Makeup Lesson': 140
    },
    nails: {
      'Gel Manicure': 45,
      'Luxury Pedicure': 60,
      'Nail Art': 70
    },
    skincare: {
      'Signature Facial': 110,
      'Anti-Aging Treatment': 175,
      'Deep Cleanse': 95
    }
  }
  
  return typical[category]?.[service] || 100
}

