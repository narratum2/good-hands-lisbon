import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Neighborhood Guides — Good Hands',
  description: 'Discover beauty experiences across Lisbon\'s most distinctive neighborhoods, from historic Chiado to coastal Cascais.',
}

const neighborhoods = [
  {
    name: 'Chiado',
    slug: 'chiado',
    description: 'Historic elegance meets modern luxury in Lisbon\'s most refined district',
    image: '/brand-images/neighborhood-guide-chiado-hero.png',
    highlights: ['Luxury salons', 'Historic spas', 'Art galleries'],
  },
  {
    name: 'Príncipe Real',
    slug: 'principe-real',
    description: 'Bohemian charm and cutting-edge style in the heart of the city',
    image: '/brand-images/neighborhood-guide-principe-real-hero.png',
    highlights: ['Boutique studios', 'Garden cafés', 'Design shops'],
  },
  {
    name: 'Baixa',
    slug: 'baixa',
    description: 'Grand boulevards and timeless beauty in downtown Lisbon',
    image: '/brand-images/neighborhood-guide-baixa-hero.png',
    highlights: ['Classic salons', 'Shopping districts', 'Historic venues'],
  },
  {
    name: 'Avenida da Liberdade',
    slug: 'avenida',
    description: 'Lisbon\'s Champs-Élysées with premium beauty destinations',
    image: '/brand-images/neighborhood-guide-avenida-hero.png',
    highlights: ['High-end spas', 'Luxury brands', 'Tree-lined avenues'],
  },
  {
    name: 'Alfama',
    slug: 'alfama',
    description: 'Ancient streets and authentic experiences in Lisbon\'s oldest quarter',
    image: '/brand-images/neighborhood-guide-alfama-hero.png',
    highlights: ['Traditional treatments', 'Fado music', 'Hidden gems'],
  },
  {
    name: 'Belém',
    slug: 'belem',
    description: 'Riverside beauty and historic grandeur by the Tagus',
    image: '/brand-images/neighborhood-guide-belem-hero.png',
    highlights: ['Waterfront spas', 'Cultural sites', 'Pastéis de Belém'],
  },
  {
    name: 'Sintra',
    slug: 'sintra',
    description: 'Romantic escapes and wellness retreats in the enchanted hills',
    image: '/brand-images/neighborhood-guide-sintra-hero.png',
    highlights: ['Mountain retreats', 'Palace views', 'Natural beauty'],
  },
  {
    name: 'Cascais',
    slug: 'cascais',
    description: 'Coastal elegance and resort-style pampering by the Atlantic',
    image: '/brand-images/neighborhood-guide-cascais-hero.png',
    highlights: ['Beach clubs', 'Marina life', 'Seafood dining'],
  },
]

export default function GuidesPage() {
  return (
    <div className="pt-20">
      {/* Hero - Boutique-inspired immersive design */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/ai-generated/lisbon-cityscape.jpg"
            alt="Lisbon neighborhood beauty guides - discover the best areas for luxury services"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <p className="uppercase tracking-[0.25em] text-white/80 text-sm mb-6 font-medium">
            Explore Lisbon
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white font-light tracking-tight">
            Neighborhood Guides
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Discover beauty across Lisbon&apos;s most distinctive districts
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Neighborhoods Grid - Boutique-inspired immersive cards */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-gold text-sm mb-4 font-medium">
              Our Favorite Destinations
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light">
              Handpicked neighborhoods for exceptional beauty
            </h2>
          </div>
          
          {/* Immersive grid - larger cards like boutique-homes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/${neighborhood.slug}`}
                className="group block overflow-hidden"
              >
                {/* Image container with overlay text */}
                <div className="relative h-80 lg:h-96 overflow-hidden rounded-sm">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay - always visible for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-2xl md:text-3xl font-serif text-white font-light tracking-tight">
                      {neighborhood.name}
                    </h3>
                  </div>
                </div>
                
                {/* Description below - clean boutique style */}
                <div className="pt-4 pb-2">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {neighborhood.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1.5 border border-gold/30 text-gold rounded-full transition-colors group-hover:bg-gold/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Boutique-inspired elegant section */}
      <section className="py-32 bg-[#0a0a0a] text-white text-center relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />
        </div>
        
        <div className="container-custom relative z-10">
          <p className="uppercase tracking-[0.25em] text-gold text-sm mb-6 font-medium">
            Personalized Service
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Let our beauty concierge help you find the perfect neighborhood and service
          </p>
          <Link 
            href="/book" 
            className="inline-block px-10 py-4 bg-white text-black text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-white transition-all duration-300"
          >
            Get Personalized Recommendations
          </Link>
        </div>
      </section>
    </div>
  )
}

