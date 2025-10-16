/**
 * AI-Powered Personalization Engine
 * Advanced customer experience optimization using machine learning principles
 */

export interface CustomerProfile {
  id: string
  preferences: {
    services: string[]
    neighborhoods: string[]
    timeSlots: string[]
    budget: 'budget' | 'mid-range' | 'premium' | 'luxury'
    style: 'classic' | 'trendy' | 'minimalist' | 'glamorous'
    occasion: 'everyday' | 'special' | 'professional' | 'wedding'
  }
  behavior: {
    bookingFrequency: number
    averageSpend: number
    preferredCommunication: 'email' | 'sms' | 'whatsapp' | 'phone'
    responseTime: number // hours
    seasonalPatterns: string[]
  }
  demographics: {
    age: string
    location: string
    occupation: string
    lifestyle: string
  }
}

export interface PersonalizationResult {
  recommendedServices: Array<{
    service: string
    confidence: number
    reasoning: string
    expectedSatisfaction: number
  }>
  optimalPricing: {
    suggested: number
    reasoning: string
    competitorComparison: string
  }
  bestTimeSlots: Array<{
    time: string
    availability: number
    preference: number
  }>
  personalizedMessaging: {
    greeting: string
    valueProposition: string
    callToAction: string
    followUp: string
  }
  upsellOpportunities: Array<{
    service: string
    probability: number
    reasoning: string
    timing: string
  }>
}

/**
 * Advanced Customer Profiling
 */
export const generateCustomerProfile = (bookingHistory: any[], demographics: any): CustomerProfile => {
  const serviceFrequency = bookingHistory.reduce((acc, booking) => {
    acc[booking.service] = (acc[booking.service] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const neighborhoodFrequency = bookingHistory.reduce((acc, booking) => {
    acc[booking.neighborhood] = (acc[booking.neighborhood] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const avgSpend = bookingHistory.reduce((sum, booking) => sum + (booking.price || 0), 0) / bookingHistory.length
  
  return {
    id: demographics.id || 'anonymous',
    preferences: {
      services: Object.keys(serviceFrequency).sort((a, b) => serviceFrequency[b] - serviceFrequency[a]),
      neighborhoods: Object.keys(neighborhoodFrequency).sort((a, b) => neighborhoodFrequency[b] - neighborhoodFrequency[a]),
      timeSlots: extractPreferredTimeSlots(bookingHistory),
      budget: categorizeBudget(avgSpend),
      style: inferStyle(bookingHistory, demographics),
      occasion: inferOccasion(bookingHistory)
    },
    behavior: {
      bookingFrequency: bookingHistory.length,
      averageSpend: avgSpend,
      preferredCommunication: inferCommunicationPreference(bookingHistory),
      responseTime: calculateAverageResponseTime(bookingHistory),
      seasonalPatterns: extractSeasonalPatterns(bookingHistory)
    },
    demographics: {
      age: demographics.age || 'unknown',
      location: demographics.location || 'unknown',
      occupation: demographics.occupation || 'unknown',
      lifestyle: inferLifestyle(demographics, avgSpend)
    }
  }
}

/**
 * AI-Powered Service Recommendations
 */
export const getPersonalizedRecommendations = (profile: CustomerProfile): PersonalizationResult => {
  const serviceRecommendations = generateServiceRecommendations(profile)
  const pricingOptimization = calculateOptimalPricing(profile)
  const timeSlotOptimization = optimizeTimeSlots(profile)
  const messagingPersonalization = createPersonalizedMessaging(profile)
  const upsellAnalysis = analyzeUpsellOpportunities(profile)
  
  return {
    recommendedServices: serviceRecommendations,
    optimalPricing: pricingOptimization,
    bestTimeSlots: timeSlotOptimization,
    personalizedMessaging: messagingPersonalization,
    upsellOpportunities: upsellAnalysis
  }
}

/**
 * Dynamic Content Personalization
 */
export const personalizeWebsiteContent = (profile: CustomerProfile) => {
  return {
    heroMessage: generatePersonalizedHero(profile),
    serviceHighlights: getRelevantServices(profile),
    testimonials: getRelevantTestimonials(profile),
    neighborhoodFocus: profile.preferences.neighborhoods[0] || 'chiado',
    pricingTier: profile.preferences.budget,
    ctaOptimization: optimizeCallToAction(profile)
  }
}

/**
 * Advanced Behavioral Triggers
 */
export const getBehavioralTriggers = (profile: CustomerProfile, currentBehavior: any) => {
  const triggers = []
  
  // High-value customer retention
  if (profile.behavior.averageSpend > 150 && profile.behavior.bookingFrequency > 3) {
    triggers.push({
      type: 'vip_retention',
      message: 'Exclusive VIP treatment - priority booking and complimentary consultation',
      action: 'offer_vip_package',
      urgency: 'medium'
    })
  }
  
  // Re-engagement for dormant customers
  if (profile.behavior.bookingFrequency > 1 && currentBehavior.daysSinceLastBooking > 90) {
    triggers.push({
      type: 'reengagement',
      message: 'We miss you! Special welcome-back offer with 20% off your next service',
      action: 'send_reengagement_offer',
      urgency: 'high'
    })
  }
  
  // Upsell opportunity
  if (profile.preferences.services.length === 1 && profile.behavior.averageSpend < 100) {
    triggers.push({
      type: 'upsell',
      message: 'Complete your beauty routine - add nail care for the perfect look',
      action: 'suggest_complementary_service',
      urgency: 'low'
    })
  }
  
  return triggers
}

// Helper functions for personalization algorithms
const extractPreferredTimeSlots = (bookings: any[]): string[] => {
  const timeSlots = bookings.map(booking => {
    const hour = new Date(booking.date + ' ' + booking.time).getHours()
    if (hour < 12) return 'morning'
    if (hour < 17) return 'afternoon'
    return 'evening'
  })
  
  const frequency = timeSlots.reduce((acc, slot) => {
    acc[slot] = (acc[slot] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a])
}

const categorizeBudget = (avgSpend: number): 'budget' | 'mid-range' | 'premium' | 'luxury' => {
  if (avgSpend < 50) return 'budget'
  if (avgSpend < 100) return 'mid-range'
  if (avgSpend < 200) return 'premium'
  return 'luxury'
}

const inferStyle = (bookings: any[], demographics: any): 'classic' | 'trendy' | 'minimalist' | 'glamorous' => {
  // AI logic to infer style based on service choices and demographics
  const serviceTypes = bookings.map(b => b.service)
  
  if (serviceTypes.includes('wedding') || serviceTypes.includes('photoshoot')) return 'glamorous'
  if (serviceTypes.includes('wellness') && serviceTypes.length > 2) return 'trendy'
  if (serviceTypes.length === 1 && serviceTypes[0] === 'hair') return 'classic'
  
  return 'minimalist'
}

const inferOccasion = (bookings: any[]): 'everyday' | 'special' | 'professional' | 'wedding' => {
  if (bookings.some(b => b.service === 'wedding')) return 'wedding'
  if (bookings.some(b => b.service === 'photoshoot')) return 'special'
  if (bookings.length > 4) return 'everyday'
  return 'professional'
}

const inferCommunicationPreference = (bookings: any[]): 'email' | 'sms' | 'whatsapp' | 'phone' => {
  // Analyze communication patterns from booking data
  // Default to email for now, but could be enhanced with actual communication data
  return 'email'
}

const calculateAverageResponseTime = (bookings: any[]): number => {
  // Calculate average time between inquiry and booking
  // Simplified for now
  return 2 // hours
}

const extractSeasonalPatterns = (bookings: any[]): string[] => {
  const months = bookings.map(booking => {
    const month = new Date(booking.date).getMonth()
    if (month >= 2 && month <= 4) return 'spring'
    if (month >= 5 && month <= 7) return 'summer'
    if (month >= 8 && month <= 10) return 'fall'
    return 'winter'
  })
  
  return [...new Set(months)]
}

const inferLifestyle = (demographics: any, avgSpend: number): string => {
  if (avgSpend > 150) return 'luxury'
  if (demographics.occupation?.includes('executive') || demographics.occupation?.includes('manager')) return 'professional'
  return 'casual'
}

const generateServiceRecommendations = (profile: CustomerProfile) => {
  const allServices = ['hair', 'nails', 'wellness', 'wedding', 'photoshoot']
  const recommendations: Array<{
    service: string
    confidence: number
    reasoning: string
    expectedSatisfaction: number
  }> = []
  
  allServices.forEach(service => {
    let confidence = 0.3 // base confidence
    let reasoning = 'Popular service in your area'
    let expectedSatisfaction = 0.7
    
    // Increase confidence for services they've used before
    if (profile.preferences.services.includes(service)) {
      confidence += 0.4
      reasoning = 'Based on your previous bookings'
      expectedSatisfaction = 0.9
    }
    
    // Style-based recommendations
    if (profile.preferences.style === 'glamorous' && (service === 'wedding' || service === 'photoshoot')) {
      confidence += 0.3
      reasoning = 'Perfect match for your glamorous style'
    }
    
    // Occasion-based recommendations
    if (profile.preferences.occasion === 'special' && service === 'photoshoot') {
      confidence += 0.3
      reasoning = 'Ideal for special occasions'
    }
    
    if (confidence > 0.5) {
      recommendations.push({
        service,
        confidence: Math.min(confidence, 1.0),
        reasoning,
        expectedSatisfaction
      })
    }
  })
  
  return recommendations.sort((a, b) => b.confidence - a.confidence)
}

const calculateOptimalPricing = (profile: CustomerProfile) => {
  const basePricing = {
    'budget': 0.9,
    'mid-range': 1.0,
    'premium': 1.2,
    'luxury': 1.5
  }
  
  const multiplier = basePricing[profile.preferences.budget]
  const basePrice = 80
  const suggested = Math.round(basePrice * multiplier)
  
  return {
    suggested,
    reasoning: `Optimized for your ${profile.preferences.budget} budget preference`,
    competitorComparison: '15% below luxury competitors, 20% above budget options'
  }
}

const optimizeTimeSlots = (profile: CustomerProfile) => {
  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
  
  return timeSlots.map(time => ({
    time,
    availability: Math.random(), // Would be real availability data
    preference: profile.preferences.timeSlots.includes(time.split(':')[0] < '12' ? 'morning' : 'afternoon') ? 0.8 : 0.3
  })).sort((a, b) => b.preference - a.preference)
}

const createPersonalizedMessaging = (profile: CustomerProfile) => {
  const styleMessages = {
    'classic': 'Timeless elegance for every occasion',
    'trendy': 'Latest trends and innovative techniques',
    'minimalist': 'Clean, sophisticated beauty',
    'glamorous': 'Red-carpet ready perfection'
  }
  
  const budgetMessages = {
    'budget': 'Exceptional value without compromise',
    'mid-range': 'Premium quality at accessible prices',
    'premium': 'Luxury experience with personalized attention',
    'luxury': 'Ultimate luxury and exclusivity'
  }
  
  return {
    greeting: `Welcome back, ${profile.demographics.occupation || 'beauty enthusiast'}!`,
    valueProposition: styleMessages[profile.preferences.style],
    callToAction: `Book your ${profile.preferences.services[0] || 'preferred'} service today`,
    followUp: budgetMessages[profile.preferences.budget]
  }
}

const analyzeUpsellOpportunities = (profile: CustomerProfile) => {
  const opportunities = []
  
  // Service expansion
  if (profile.preferences.services.length < 3) {
    const unusedServices = ['hair', 'nails', 'wellness', 'wedding', 'photoshoot']
      .filter(s => !profile.preferences.services.includes(s))
    
    unusedServices.forEach(service => {
      opportunities.push({
        service,
        probability: 0.4,
        reasoning: 'Complete your beauty routine',
        timing: 'after_current_service'
      })
    })
  }
  
  // Premium upgrade
  if (profile.preferences.budget !== 'luxury' && profile.behavior.averageSpend > 100) {
    opportunities.push({
      service: 'luxury_package',
      probability: 0.6,
      reasoning: 'Ready for the ultimate luxury experience',
      timing: 'next_booking'
    })
  }
  
  return opportunities
}

const generatePersonalizedHero = (profile: CustomerProfile): string => {
  const occasions = {
    'everyday': 'your daily beauty routine',
    'special': 'your special moments',
    'professional': 'your professional image',
    'wedding': 'your perfect wedding day'
  }
  
  return `Luxury beauty services crafted for ${occasions[profile.preferences.occasion] || 'your unique style'}`
}

const getRelevantServices = (profile: CustomerProfile) => {
  return profile.preferences.services.length > 0 
    ? profile.preferences.services.slice(0, 3)
    : ['hair', 'nails', 'wellness']
}

const getRelevantTestimonials = (profile: CustomerProfile) => {
  // Return testimonials that match customer's style and preferences
  // This would integrate with a testimonials database
  return []
}

const optimizeCallToAction = (profile: CustomerProfile): string => {
  const ctas = {
    'budget': 'Book Now - Starting from €45',
    'mid-range': 'Reserve Your Appointment',
    'premium': 'Experience Luxury Beauty',
    'luxury': 'Book Your Exclusive Session'
  }
  
  return ctas[profile.preferences.budget]
}
