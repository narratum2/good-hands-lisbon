'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Premium Hair Styling',
    description: 'We match you with Lisbon\'s best hair colorists and stylists—no more trial and error',
    image: '/brand-images/ai-generated/service-hair-styling.jpg',
    price: 'From €105',
    priceNote: 'Includes concierge service',
    duration: '90 min',
    href: '/services?category=hair',
  },
  {
    title: 'Luxury Nail Care',
    description: 'Perfectly curated nail technicians who understand exactly what you want',
    image: '/brand-images/ai-generated/service-nails.jpg',
    price: 'From €60',
    priceNote: 'Includes concierge service',
    duration: '60 min',
    href: '/services?category=nails',
  },
  {
    title: 'Advanced Skincare',
    description: 'We connect you with skincare experts who truly understand your skin',
    image: '/brand-images/ai-generated/service-facial-spa.jpg',
    price: 'From €125',
    priceNote: 'Includes concierge service',
    duration: '75 min',
    href: '/services?category=skincare',
  },
  {
    title: 'Professional Makeup',
    description: 'Your personal beauty concierge finds the perfect makeup artist for your event',
    image: '/brand-images/ai-generated/service-makeup.jpg',
    price: 'From €92',
    priceNote: 'Includes concierge service',
    duration: '45 min',
    href: '/services?category=makeup',
  },
]

export default function Services() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container-custom">
        {/* Header - Perfectly Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p 
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Our Services
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 font-light"
            style={{ 
              letterSpacing: '-0.02em',
              color: 'var(--black)'
            }}
          >
            Discover Exceptional Beauty Services
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto font-light"
            style={{ 
              lineHeight: '1.7',
              color: 'var(--gray-dark)'
            }}
          >
            We've vetted hundreds of beauty professionals so you don't have to. Our concierge service ensures perfect matches—every single time.
          </p>
        </motion.div>

        {/* Services Grid - Consistent Card Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="h-full"
            >
              <Link
                href={service.href}
                className="service-card group block bg-white overflow-hidden focus-visible-ring h-full flex flex-col"
                style={{ border: '1px solid var(--gray-light)' }}
              >
                {/* Image Container - Fixed Height */}
                <div className="relative h-72 md:h-80 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Content - Consistent Padding */}
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <h3 
                    className="text-xl md:text-2xl font-serif mb-3 font-light group-hover:text-gold transition-colors duration-300"
                    style={{ 
                      letterSpacing: '-0.01em',
                      color: 'var(--black)'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="mb-5 text-base leading-relaxed flex-grow"
                    style={{ color: 'var(--gray-dark)' }}
                  >
                    {service.description}
                  </p>
                  {/* Price Row - Clean Alignment */}
                  <div 
                    className="flex justify-between items-center pt-5 mt-auto"
                    style={{ borderTop: '1px solid var(--gray-light)' }}
                  >
                    <div className="flex flex-col gap-1">
                      <span 
                        className="font-semibold text-lg"
                        style={{ color: 'var(--black)' }}
                      >
                        {service.price}
                      </span>
                      <span 
                        className="text-xs uppercase tracking-wider"
                        style={{ 
                          letterSpacing: '0.1em',
                          color: 'var(--gray-medium)'
                        }}
                      >
                        {service.duration}
                      </span>
                    </div>
                    <span 
                      className="group-hover:translate-x-2 transition-transform inline-block text-xl duration-300"
                      style={{ color: 'var(--gold)' }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link href="/services" className="btn-primary inline-block">
            Discover All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

