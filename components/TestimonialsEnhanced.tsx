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
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-medium font-semibold mb-6">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 font-light" style={{ letterSpacing: '-0.02em' }}>
            What Our Clients Say
          </h2>
          <p className="text-gray-dark text-lg md:text-xl max-w-2xl mx-auto font-light" style={{ lineHeight: '1.7' }}>
            Real experiences from people who trust Good Hands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 md:p-12 border border-gray-light hover:border-black transition-all duration-500 relative group"
            >
              {/* Quote Mark */}
              <div className="absolute top-8 left-8 text-7xl md:text-8xl text-gold/15 font-serif leading-none">
                "
              </div>
              
              {/* Review Text */}
              <p className="text-gray-dark mb-8 leading-relaxed relative z-10 text-lg md:text-xl font-light" style={{ lineHeight: '1.7' }}>
                {review.text}
              </p>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} size={16} color="var(--gold)" filled />
                ))}
              </div>
              
              {/* Author Info */}
              <div className="border-t border-gray-light pt-6 flex items-center gap-4">
                {/* Avatar Circle with Initials - NO EMOJIS */}
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-semibold text-sm">{review.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-black text-base mb-1">{review.name}</p>
                  <p className="text-gray-medium text-sm uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>
                    {review.serviceType}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-gray-dark mb-8 text-lg font-light">
            Join hundreds of satisfied clients
          </p>
          <a href="/book" className="btn-primary">
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}

