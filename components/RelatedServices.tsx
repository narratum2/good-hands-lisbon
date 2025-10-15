import Link from 'next/link'

interface RelatedService {
  title: string
  description: string
  href: string
  linkText: string
}

interface RelatedServicesProps {
  currentService: 'hair' | 'makeup' | 'nails' | 'skincare' | 'wellness'
}

const allServices: Record<string, RelatedService> = {
  hair: {
    title: 'Hair Styling',
    description: 'Expert haircuts, color, balayage, and treatments from Lisbon\'s top stylists.',
    href: '/services/hair',
    linkText: 'Explore Hair Services',
  },
  makeup: {
    title: 'Professional Makeup',
    description: 'Expert makeup application for events, weddings, photoshoots, and special occasions.',
    href: '/services/makeup',
    linkText: 'Explore Makeup Services',
  },
  nails: {
    title: 'Nail Care',
    description: 'Professional manicures, pedicures, gel polish, and nail art from hygiene-certified technicians.',
    href: '/services/nails',
    linkText: 'Explore Nail Services',
  },
  skincare: {
    title: 'Skincare & Facials',
    description: 'Customized facial treatments, HydraFacials, peels, and professional skincare guidance.',
    href: '/services/skincare',
    linkText: 'Explore Skincare Services',
  },
  wellness: {
    title: 'Wellness & Massage',
    description: 'Professional massage therapy, spa treatments, and holistic wellness services.',
    href: '/services/wellness',
    linkText: 'Explore Wellness Services',
  },
  weddings: {
    title: 'Wedding Beauty Packages',
    description: 'Complete bridal beauty coordination including hair, makeup, trials, and wedding day services.',
    href: '/premium/weddings',
    linkText: 'Explore Wedding Packages',
  },
  retreats: {
    title: 'Wellness Retreats',
    description: 'Multi-day rejuvenation packages in Sintra or Cascais with spa treatments and wellness experiences.',
    href: '/premium/retreats',
    linkText: 'Explore Retreat Packages',
  },
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  // Get related services based on current service
  const getRelatedServices = (): RelatedService[] => {
    switch (currentService) {
      case 'hair':
        return [
          allServices.makeup,
          allServices.skincare,
          allServices.nails,
          allServices.weddings,
        ]
      case 'makeup':
        return [
          allServices.hair,
          allServices.skincare,
          allServices.nails,
          allServices.weddings,
        ]
      case 'nails':
        return [
          allServices.hair,
          allServices.makeup,
          allServices.skincare,
          allServices.wellness,
        ]
      case 'skincare':
        return [
          allServices.hair,
          allServices.makeup,
          allServices.wellness,
          allServices.retreats,
        ]
      case 'wellness':
        return [
          allServices.skincare,
          allServices.hair,
          allServices.nails,
          allServices.retreats,
        ]
      default:
        return []
    }
  }

  const relatedServices = getRelatedServices()

  return (
    <section className="section-padding bg-shell">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
          Complete Your Beauty Experience
        </h2>
        <p className="text-center text-harbor text-lg mb-12 max-w-2xl mx-auto">
          Pair your service with complementary treatments for a complete transformation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-harbor text-sm mb-4">
                {service.description}
              </p>
              <span className="text-gold text-sm font-medium inline-flex items-center gap-2">
                {service.linkText}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

