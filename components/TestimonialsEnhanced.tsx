'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Sofia M.',
    location: 'Lisbon',
    serviceType: 'Bridal Beauty',
    rating: 5,
    text: 'Good Hands made my wedding day absolutely perfect. The coordination was flawless, and I felt like a queen.',
    avatar: '👰',
  },
  {
    name: 'James L.',
    location: 'London',
    serviceType: 'Hair Styling',
    rating: 5,
    text: 'Visiting Lisbon and needed a last-minute haircut. Good Hands connected me with an amazing stylist in Chiado. Professional and friendly!',
    avatar: '👨',
  },
  {
    name: 'Ana R.',
    location: 'Cascais',
    serviceType: 'Corporate Wellness',
    rating: 5,
    text: 'The corporate wellness package was exactly what our team needed. Highly recommend for any company event.',
    avatar: '👩',
  },
]

export default function TestimonialsEnhanced() {
  return (
    <section className="section-padding bg-gradient-to-b from-shell via-sage-light to-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-ink">
            Loved by Our Clients
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto">
            Real experiences from people who trust Good Hands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-shadow relative"
            >
              {/* Large Quote Mark */}
              <div className="absolute top-6 left-6 text-6xl text-gold/20 font-serif leading-none">
                "
              </div>

              {/* Avatar Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center text-3xl mb-4 relative z-10">
                {review.avatar}
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + i * 0.1 }}
                    className="text-gold text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-ink/90 mb-6 leading-relaxed relative z-10">
                {review.text}
              </p>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                  {review.serviceType}
                </span>
              </div>

              {/* Attribution */}
              <div className="border-t border-ink/10 pt-4">
                <p className="font-semibold text-ink">{review.name}</p>
                <div className="flex items-center gap-2 text-sm text-harbor mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{review.location}</span>
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-harbor mb-4">
            Join hundreds of satisfied clients
          </p>
          <a href="/book" className="btn-gold">
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}

