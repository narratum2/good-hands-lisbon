'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import CuratedProducts from '@/components/CuratedProducts'

const services = [
  {
    category: 'Hair Styling',
    slug: 'hair',
    services: [
      { name: 'Precision Cut', price: 'On Request', duration: '60 min' },
      { name: 'Color & Highlights', price: 'On Request', duration: '120 min' },
      { name: 'Balayage', price: 'On Request', duration: '180 min' },
      { name: 'Blowout & Styling', price: 'On Request', duration: '45 min' },
      { name: 'Treatment & Repair', price: 'On Request', duration: '60 min' },
      { name: 'Photoshoot Hair Styling', price: 'On Request', duration: '75 min' },
    ],
    image: '/brand-images/ai-generated/service-hair-styling.jpg',
  },
  {
    category: 'Eyebrows & Lashes',
    slug: 'eyebrows',
    services: [
      { name: 'Brow Shaping & Design', price: 'On Request', duration: '30 min' },
      { name: 'Brow Lamination', price: 'On Request', duration: '60 min' },
      { name: 'Brow Tinting', price: 'On Request', duration: '20 min' },
      { name: 'Lash Lift & Tint', price: 'On Request', duration: '60 min' },
      { name: 'Lash Extensions', price: 'On Request', duration: '90 min' },
      { name: 'Microblading Consultation', price: 'On Request', duration: '30 min' },
    ],
    image: '/brand-images/ai-generated/service-makeup.jpg',
  },
  {
    category: 'Nail Care',
    slug: 'nails',
    services: [
      { name: 'Classic Manicure', price: 'On Request', duration: '45 min' },
      { name: 'Gel Manicure', price: 'On Request', duration: '60 min' },
      { name: 'Luxury Pedicure', price: 'On Request', duration: '75 min' },
      { name: 'Nail Art', price: 'On Request', duration: '30 min' },
      { name: 'Extensions', price: 'On Request', duration: '90 min' },
    ],
    image: '/brand-images/ai-generated/service-nails.jpg',
  },
  {
    category: 'Skincare',
    slug: 'skincare',
    services: [
      { name: 'Signature Facial', price: 'On Request', duration: '75 min' },
      { name: 'Anti-Aging Treatment', price: 'On Request', duration: '90 min' },
      { name: 'Deep Cleanse', price: 'On Request', duration: '60 min' },
      { name: 'Microdermabrasion', price: 'On Request', duration: '60 min' },
      { name: 'LED Light Therapy', price: 'On Request', duration: '45 min' },
    ],
    image: '/brand-images/ai-generated/service-facial-spa.jpg',
  },
  {
    category: 'Makeup',
    slug: 'makeup',
    services: [
      { name: 'Event Makeup', price: 'On Request', duration: '45 min' },
      { name: 'Bridal Makeup', price: 'On Request', duration: '90 min' },
      { name: 'Makeup Lesson', price: 'On Request', duration: '90 min' },
      { name: 'Beauty Consultation', price: 'On Request', duration: '60 min' },
      { name: 'Photoshoot & Editorial Makeup', price: 'On Request', duration: '60 min' },
    ],
    image: '/brand-images/ai-generated/service-makeup.jpg',
  },
  {
    category: 'Wellness',
    slug: 'wellness',
    services: [
      { name: 'Swedish Massage', price: 'On Request', duration: '60 min' },
      { name: 'Deep Tissue', price: 'On Request', duration: '75 min' },
      { name: 'Aromatherapy', price: 'On Request', duration: '60 min' },
      { name: 'Hot Stone', price: 'On Request', duration: '90 min' },
    ],
    image: '/brand-images/ai-generated/service-wellness.jpg',
  },
  {
    category: 'Education & Workshops',
    slug: 'education',
    services: [
      { name: 'Personal Makeup Masterclass', price: 'On Request', duration: '2-3 hours' },
      { name: 'Skincare Routine Workshop', price: 'On Request', duration: '90 min' },
      { name: 'Bridal Beauty Workshop', price: 'On Request', duration: '3 hours' },
      { name: 'Group Beauty Class', price: 'On Request', duration: '2 hours' },
      { name: 'One-on-One Tutorial', price: 'On Request', duration: '60-90 min' },
    ],
    image: '/brand-images/ai-generated/service-makeup.jpg',
  },
]

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredServices, setFilteredServices] = useState(services)

  // Initialize from URL parameters
  useEffect(() => {
    const q = searchParams.get('q') || ''
    const category = searchParams.get('category') || 'all'
    setSearchTerm(q)
    setSelectedCategory(category)
  }, [searchParams])

  // Filter services based on search and category
  useEffect(() => {
    let filtered = services

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(cat => cat.slug === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      
      // List of location terms to ignore (since all services are in Lisbon)
      const locationTerms = ['lisbon', 'lisboa', 'portugal', 'porto', 'cascais', 'sintra']
      const isLocationSearch = locationTerms.some(loc => term.includes(loc))
      
      // If searching for location only, show all results
      // Otherwise filter by category or service name
      if (!isLocationSearch) {
        filtered = filtered.filter(cat => 
          cat.category.toLowerCase().includes(term) ||
          cat.services.some(service => service.name.toLowerCase().includes(term))
        )
      }
    }

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    window.history.pushState({}, '', '/services')
  }
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/ai-generated/hero-salon-interior.jpg"
            alt="Beauty services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Premium beauty experiences with expert concierge matching
          </p>
          
          {/* Quick scannable highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl">✓</span>
              <span>Vetted professionals only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl">✓</span>
              <span>All prices include concierge</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl">✓</span>
              <span>We match you perfectly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-harbor" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white md:w-48"
              >
                <option value="all">All Categories</option>
                <option value="hair">Hair Styling</option>
                <option value="eyebrows">Eyebrows & Lashes</option>
                <option value="nails">Nail Care</option>
                <option value="skincare">Skincare</option>
                <option value="makeup">Makeup</option>
                <option value="wellness">Wellness</option>
                <option value="education">Education & Workshops</option>
              </select>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 text-harbor hover:text-ink transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory !== 'all') && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                    Category: {services.find(s => s.slug === selectedCategory)?.category}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <section className="section-padding bg-white">
          <div className="container-custom text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-3xl font-serif mb-4">No Services Found</h2>
            <p className="text-harbor mb-6">
              We couldn't find any services matching your search. Try different keywords or browse all services.
            </p>
            <button onClick={clearFilters} className="btn-gold">
              Discover All Services
            </button>
          </div>
        </section>
      ) : (
        filteredServices.map((category, idx) => (
        <section
          key={category.category}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-shell'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.category}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                <h2 className="text-4xl font-serif mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-start border-b border-harbor/10 pb-4"
                    >
                      <div>
                        <h3 className="font-medium text-lg">{service.name}</h3>
                        <p className="text-sm text-harbor">{service.duration}</p>
                        <p className="text-xs text-gold mt-1">Includes concierge service</p>
                      </div>
                      <span className="text-gold font-medium whitespace-nowrap ml-4">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )))}

      {/* Photoshoot Services Highlight */}
      <section className="section-padding bg-gradient-to-br from-gold/5 via-shell to-porcelain">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-gold mb-4">
              <span className="text-2xl">📸</span>
              <span className="text-sm uppercase tracking-wider font-medium">Creative Productions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Professional Photoshoot Services
            </h2>
            <p className="text-xl text-harbor max-w-2xl mx-auto">
              From intimate portraits to spectacular editorial productions — we coordinate beauty, styling, and logistics for your vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif mb-3">Editorial & Fashion</h3>
              <p className="text-harbor text-sm mb-4">
                High-fashion editorial shoots with professional hair and makeup artists experienced in magazine-quality production.
              </p>
              <ul className="space-y-2 text-xs text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Magazine & lookbook shoots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Fashion brand campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Runway show preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif mb-3">Lifestyle & Equestrian</h3>
              <p className="text-harbor text-sm mb-4">
                Unique outdoor productions including equestrian shoots with models on horseback in Portugal's stunning countryside.
              </p>
              <ul className="space-y-2 text-xs text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Model + horse productions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Vineyard & estate shoots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Beach & coastal locations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif mb-3">Content Creation</h3>
              <p className="text-harbor text-sm mb-4">
                For influencers, creators, and brands — camera-ready beauty that translates perfectly to digital platforms.
              </p>
              <ul className="space-y-2 text-xs text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Instagram & TikTok content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Personal branding sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Professional headshots</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif mb-4">Tell Us Your Vision</h3>
            <p className="text-harbor mb-6">
              We coordinate complete productions — from beauty professionals to location logistics.
              Describe your creative vision and we'll make it happen.
            </p>
            <Link href="/book" className="btn-gold inline-block">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Makeup Education Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-gold mb-4">
              <span className="text-2xl">✨</span>
              <span className="text-sm uppercase tracking-wider font-medium">Learn & Grow</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Makeup Education & Workshops
            </h2>
            <p className="text-xl text-harbor max-w-2xl mx-auto">
              Master the art of makeup with personalized learning experiences from Lisbon's top beauty professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-shell p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4">One-on-One Masterclasses</h3>
              <p className="text-harbor mb-4">
                Personalized makeup education tailored to your skill level, face shape, and lifestyle. Learn techniques you'll use every day.
              </p>
              <ul className="space-y-3 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Everyday Essentials:</strong> Master your daily routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Special Occasions:</strong> Evening & event looks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Skincare + Makeup:</strong> Complete beauty education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Product Guidance:</strong> Build your perfect kit</span>
                </li>
              </ul>
            </div>

            <div className="bg-shell p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4">Group Workshops</h3>
              <p className="text-harbor mb-4">
                Perfect for bridal parties, corporate teams, or friends who want to learn together in a fun, social setting.
              </p>
              <ul className="space-y-3 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Bridal Party Workshop:</strong> Get wedding-ready together</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Corporate Events:</strong> Team bonding with beauty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Friends Day Out:</strong> Learn and celebrate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span><strong>Hen Parties:</strong> Memorable pre-wedding fun</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/book" className="btn-gold inline-block">
              Request Your Learning Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Products */}
      <CuratedProducts />

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Tell us your preferences and we&apos;ll curate the perfect professional for you within 24 hours
          </p>
          <Link href="/book" className="btn-gold">
            Request Consultation
          </Link>
        </div>
      </section>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Beauty Services',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
            },
            areaServed: 'Lisbon, Portugal',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Beauty Services',
              itemListElement: services.flatMap((cat) =>
                cat.services.map((service) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    category: cat.category,
                  },
                }))
              ),
            },
          }),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://goodhands.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://goodhands.com/services',
              },
            ],
          }),
        }}
      />
    </div>
  )
}

