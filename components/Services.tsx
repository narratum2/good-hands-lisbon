'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Premium Hair Styling',
    description: 'We match you with Lisbon\'s best hair colorists and stylists—no more trial and error',
    image: '/brand-images/category-hair-styling.png',
    price: 'From €105',
    priceNote: 'Includes concierge service',
    duration: '90 min',
    href: '/services?category=hair',
  },
  {
    title: 'Luxury Nail Care',
    description: 'Perfectly curated nail technicians who understand exactly what you want',
    image: '/brand-images/category-makeup.png',
    price: 'From €60',
    priceNote: 'Includes concierge service',
    duration: '60 min',
    href: '/services?category=nails',
  },
  {
    title: 'Advanced Skincare',
    description: 'We connect you with skincare experts who truly understand your skin',
    image: '/brand-images/service-facial-treatment.png',
    price: 'From €125',
    priceNote: 'Includes concierge service',
    duration: '75 min',
    href: '/services?category=skincare',
  },
  {
    title: 'Professional Makeup',
    description: 'Your personal beauty concierge finds the perfect makeup artist for your event',
    image: '/brand-images/service-makeup-application.png',
    price: 'From €92',
    priceNote: 'Includes concierge service',
    duration: '45 min',
    href: '/services?category=makeup',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-medium font-semibold mb-6">
            Our Services
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 font-light" style={{ letterSpacing: '-0.02em' }}>
            Stop Wasting Time on the Wrong Professionals
          </h2>
          <p className="text-gray-dark text-lg md:text-xl max-w-3xl mx-auto font-light" style={{ lineHeight: '1.7' }}>
            We've vetted hundreds of beauty professionals so you don't have to. Our concierge service ensures perfect matches—every single time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link
                href={service.href}
                className="service-card group block bg-white border border-gray-light overflow-hidden focus-visible-ring"
              >
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-800 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 font-light group-hover:text-gold transition-colors duration-400" style={{ letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-dark mb-6 text-base leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-light">
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-black text-xl">{service.price}</span>
                      <span className="text-sm text-gray-medium uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>{service.duration}</span>
                    </div>
                    <span className="text-gold group-hover:translate-x-2 transition-transform inline-block text-2xl duration-400">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link href="/services" className="btn-primary">
            Discover All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

