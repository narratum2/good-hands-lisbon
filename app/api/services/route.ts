/**
 * API Route: /api/services
 * 
 * Returns all available beauty services for Good Hands
 * AI-accessible endpoint for service discovery
 * 
 * Implements OpenAPI spec: GET /api/services
 */

import { NextResponse } from 'next/server'
import { SERVICE_CATEGORIES } from '@/lib/seo-config'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const category = searchParams.get('category')
  const priceRange = searchParams.get('priceRange')
  const neighborhood = searchParams.get('neighborhood')

  // Transform SERVICE_CATEGORIES into API response format
  let services = SERVICE_CATEGORIES.flatMap(cat => 
    cat.services.map(service => ({
      id: `${cat.slug}-${service.toLowerCase().replace(/\s+/g, '-')}`,
      name: service,
      category: cat.slug,
      categoryName: cat.name,
      description: cat.description,
      price: `${cat.priceFrom}+`,
      currency: 'EUR',
      duration: getDurationForService(service),
      includes: getIncludesForService(service),
      neighborhoods: getNeighborhoodsForCategory(cat.slug),
      popularFor: getPopularForService(service)
    }))
  )

  // Apply filters
  if (category && category !== 'all') {
    services = services.filter(s => s.category === category)
  }

  if (priceRange) {
    services = services.filter(s => matchesPriceRange(s.price, priceRange))
  }

  if (neighborhood) {
    services = services.filter(s => s.neighborhoods.includes(neighborhood))
  }

  return NextResponse.json({
    lastUpdated: new Date().toISOString(),
    totalResults: services.length,
    filters: {
      category: category || 'all',
      priceRange: priceRange || 'all',
      neighborhood: neighborhood || 'all'
    },
    services
  })
}

// Helper functions for service details
function getDurationForService(service: string): string {
  const durations: Record<string, string> = {
    'Precision Cut': '60-90 minutes',
    'Color & Highlights': '2-3 hours',
    'Balayage': '2.5-3 hours',
    'Blowout & Styling': '45-60 minutes',
    'Swedish Massage': '60-90 minutes',
    'Deep Tissue': '60-90 minutes',
    'Aromatherapy': '60-90 minutes',
    'Hot Stone': '90 minutes',
    'Event Makeup': '60-90 minutes',
    'Bridal Makeup': '90-120 minutes',
    'Makeup Lesson': '60 minutes',
    'Gel Manicure': '45-60 minutes',
    'Luxury Pedicure': '60-75 minutes',
    'Nail Art': '60-90 minutes',
    'Signature Facial': '60-75 minutes',
    'Anti-Aging Treatment': '75-90 minutes',
    'Deep Cleanse': '60 minutes'
  }
  return durations[service] || '60-90 minutes'
}

function getIncludesForService(service: string): string[] {
  const includes: Record<string, string[]> = {
    'Precision Cut': ['Consultation', 'Wash & condition', 'Style'],
    'Color & Highlights': ['Color consultation', 'Treatment mask', 'Blowout styling'],
    'Balayage': ['Color consultation', 'Hand-painted highlights', 'Toner', 'Style'],
    'Blowout & Styling': ['Wash', 'Heat protection', 'Professional styling'],
    'Swedish Massage': ['Full-body massage', 'Essential oils', 'Relaxation'],
    'Deep Tissue': ['Therapeutic massage', 'Targeted pressure', 'Muscle relief'],
    'Aromatherapy': ['Custom oil blend', 'Full-body massage', 'Relaxation'],
    'Hot Stone': ['Heated stones', 'Full-body massage', 'Deep relaxation'],
    'Event Makeup': ['Consultation', 'Application', 'Touch-up kit'],
    'Bridal Makeup': ['Trial session', 'Wedding day application', 'Touch-up kit', 'Lashes'],
    'Makeup Lesson': ['Personalized tutorial', 'Product recommendations', 'Take-home guide'],
    'Gel Manicure': ['Nail shaping', 'Cuticle care', 'Gel polish', '2-3 week wear'],
    'Luxury Pedicure': ['Foot soak', 'Exfoliation', 'Massage', 'Polish'],
    'Nail Art': ['Design consultation', 'Custom art', 'Gel top coat'],
    'Signature Facial': ['Cleanse', 'Exfoliation', 'Mask', 'Massage', 'Moisturize'],
    'Anti-Aging Treatment': ['Deep cleanse', 'Serum', 'Anti-aging mask', 'LED therapy'],
    'Deep Cleanse': ['Double cleanse', 'Steam', 'Extraction', 'Purifying mask']
  }
  return includes[service] || ['Professional service', 'Expert consultation']
}

function getNeighborhoodsForCategory(category: string): string[] {
  const neighborhoods: Record<string, string[]> = {
    'hair': ['chiado', 'principe-real', 'avenida', 'baixa'],
    'spa': ['chiado', 'principe-real', 'belem', 'cascais', 'sintra'],
    'makeup': ['chiado', 'principe-real', 'avenida'],
    'nails': ['chiado', 'principe-real', 'baixa', 'avenida'],
    'skincare': ['chiado', 'principe-real', 'avenida', 'cascais']
  }
  return neighborhoods[category] || ['chiado', 'principe-real']
}

function getPopularForService(service: string): string[] {
  const popular: Record<string, string[]> = {
    'Precision Cut': ['European techniques', 'Face-framing', 'Texture specialists'],
    'Color & Highlights': ['Blonde specialists', 'Balayage experts', 'Color correction'],
    'Balayage': ['Natural dimension', 'Low maintenance', 'Sun-kissed looks'],
    'Blowout & Styling': ['Special occasions', 'Professional meetings', 'Smooth finish'],
    'Swedish Massage': ['Relaxation', 'Stress relief', 'Full-body'],
    'Deep Tissue': ['Athletic recovery', 'Chronic pain', 'Laptop posture'],
    'Aromatherapy': ['Holistic wellness', 'Mental relaxation', 'Custom blends'],
    'Hot Stone': ['Deep relaxation', 'Muscle tension', 'Luxury experience'],
    'Event Makeup': ['Weddings', 'Photo shoots', 'Special occasions'],
    'Bridal Makeup': ['Destination weddings', 'Long-lasting', 'Photography-ready'],
    'Makeup Lesson': ['Skill building', 'Product knowledge', 'Personalized'],
    'Gel Manicure': ['Long-lasting', 'Professional appearance', 'Low maintenance'],
    'Luxury Pedicure': ['Relaxation', 'Foot health', 'Summer prep'],
    'Nail Art': ['Custom designs', 'Fashion-forward', 'Special occasions'],
    'Signature Facial': ['Skin health', 'Anti-aging', 'Glow'],
    'Anti-Aging Treatment': ['Fine lines', 'Firmness', 'Collagen boost'],
    'Deep Cleanse': ['Acne-prone skin', 'Pore refinement', 'Clarifying']
  }
  return popular[service] || ['Expert service', 'Professional results']
}

function matchesPriceRange(price: string, range: string): boolean {
  const priceNum = parseInt(price.replace('+', ''))
  
  switch (range) {
    case 'budget':
      return priceNum >= 50 && priceNum <= 80
    case 'moderate':
      return priceNum > 80 && priceNum <= 150
    case 'luxury':
      return priceNum > 150 && priceNum <= 250
    case 'ultra':
      return priceNum > 250
    default:
      return true
  }
}
