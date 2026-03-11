export type ServiceCategory = 'hair' | 'nails' | 'skincare' | 'makeup' | 'wellness'

export const getBasePriceDisplay = (_category: ServiceCategory): string =>
  'Pricing on request'

export const FULL_PRICING_SENTENCE = 'Pricing depends on the service and professional. We provide a personalized quote after understanding your needs — no surprises, no hidden fees. Concierge service is always included.'

export const getNeighborhoodPrice = (
  _neighborhood: string,
  _category: ServiceCategory
): string => 'Pricing on request'

export const MEMBERSHIP_PRICES = {
  gold: 49,
  platinum: 99,
} as const
