'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Wasted time on bad experiences',
    solution: 'We only work with vetted, top-rated professionals',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Overwhelming choices, no guidance',
    solution: 'Personal concierge matches you with the perfect fit',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    problem: 'Language barriers and miscommunication',
    solution: 'We handle all communication and ensure clarity',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Booking hassles and no-shows',
    solution: 'Seamless booking, confirmed appointments, guaranteed service',
  },
]

export default function ValueProposition() {
  return (
    <section className="section-padding bg-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Why Finding the Right Beauty Professional Is So Frustrating
          </h2>
          <p className="text-xl text-harbor max-w-3xl mx-auto mb-4">
            You spend hours researching, reading reviews, and taking risks on unknown professionals.
            Half the time, you end up disappointed.
          </p>
          <p className="text-2xl font-serif text-gold max-w-2xl mx-auto">
            We solve this. Good Hands is your expert beauty concierge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gold mb-4">{item.icon}</div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-harbor uppercase tracking-wide mb-1">The Problem:</p>
                  <p className="text-lg font-medium text-ink">{item.problem}</p>
                </div>
                <div>
                  <p className="text-sm text-gold uppercase tracking-wide mb-1">Our Solution:</p>
                  <p className="text-lg font-medium text-ink">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 relative z-10"
        >
          <div className="bg-gold/10 border-2 border-gold rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              What You Get With Good Hands
            </h3>
            <p className="text-lg text-harbor mb-6">
              Think of us as your insider friend who knows everyone in Lisbon's beauty scene.
              We handle the complexity. You get perfect results.
            </p>
            <ul className="text-left space-y-3 max-w-2xl mx-auto mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-harbor"><strong>Curated Matching:</strong> We know each professional's specialties, personality, and style</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-harbor"><strong>Quality Guarantee:</strong> Every professional is vetted and monitored for excellence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-harbor"><strong>White-Glove Service:</strong> We handle booking, communication, and follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-harbor"><strong>No Surprises:</strong> Transparent pricing, confirmed appointments, reliable service</span>
              </li>
            </ul>
            <a
              href="#booking"
              className="btn-primary text-lg"
            >
              Book Your First Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

