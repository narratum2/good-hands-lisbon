'use client'

import { motion } from 'framer-motion'
import { StarIcon } from './icons/CustomIcons'

const reviews = [
  {
    name: 'Sofia M.',
    location: 'Lisbon',
    serviceType: 'Bridal Beauty',
    rating: 5,
    text: 'Good Hands made my wedding day absolutely perfect. The coordination was flawless, and I felt like a queen.',
    initials: 'SM',
  },
  {
    name: 'James L.',
    location: 'London',
    serviceType: 'Hair Styling',
    rating: 5,
    text: 'Visiting Lisbon and needed a last-minute haircut. Good Hands connected me with an amazing stylist in Chiado. Professional and friendly!',
    initials: 'JL',
  },
  {
    name: 'Ana R.',
    location: 'Cascais',
    serviceType: 'Corporate Wellness',
    rating: 5,
    text: 'The corporate wellness package was exactly what our team needed. Highly recommend for any company event.',
    initials: 'AR',
  },
]

export default function TestimonialsEnhanced() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--off-white)' }}>
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
            Client Stories
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 font-light"
            style={{ 
              letterSpacing: '-0.02em',
              color: 'var(--black)'
            }}
          >
            What Our Clients Say
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto font-light"
            style={{ 
              lineHeight: '1.7',
              color: 'var(--gray-dark)'
            }}
          >
            Real experiences from people who trust Good Hands
          </p>
        </motion.div>

        {/* Cards Grid - Centered with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-white p-8 md:p-10 border border-gray-light hover:border-black transition-all duration-500 relative group flex flex-col h-full"
              style={{ minHeight: '320px' }}
            >
              {/* Quote Mark - Positioned Consistently */}
              <div 
                className="absolute top-6 left-6 text-6xl md:text-7xl font-serif leading-none select-none"
                style={{ color: 'rgba(184, 152, 95, 0.15)' }}
                aria-hidden="true"
              >
                "
              </div>
              
              {/* Review Text - Consistent Spacing */}
              <p 
                className="mb-6 leading-relaxed relative z-10 text-base md:text-lg font-light flex-grow pt-8"
                style={{ 
                  lineHeight: '1.75',
                  color: 'var(--gray-dark)'
                }}
              >
                "{review.text}"
              </p>
              
              {/* Rating Stars - Centered Alignment */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} size={16} color="var(--gold)" filled />
                ))}
              </div>
              
              {/* Author Info - Clean Alignment */}
              <div 
                className="pt-5 flex items-center gap-4 mt-auto"
                style={{ borderTop: '1px solid var(--gray-light)' }}
              >
                {/* Avatar Circle */}
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(184, 152, 95, 0.12)' }}
                >
                  <span 
                    className="font-semibold text-sm"
                    style={{ color: 'var(--gold)' }}
                  >
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p 
                    className="font-semibold text-base mb-0.5"
                    style={{ color: 'var(--black)' }}
                  >
                    {review.name}
                  </p>
                  <p 
                    className="text-xs uppercase tracking-wider"
                    style={{ 
                      letterSpacing: '0.1em',
                      color: 'var(--gray-medium)'
                    }}
                  >
                    {review.serviceType}
                  </p>
                </div>
              </div>
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
          <p 
            className="mb-8 text-lg font-light"
            style={{ color: 'var(--gray-dark)' }}
          >
            Join hundreds of satisfied clients
          </p>
          <a 
            href="/book" 
            className="btn-primary inline-block"
          >
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}

