'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    icon: '😰',
    problem: 'Wasted time on bad experiences',
    solution: 'We only work with vetted, top-rated professionals',
  },
  {
    icon: '🤔',
    problem: 'Overwhelming choices, no guidance',
    solution: 'Personal concierge matches you with the perfect fit',
  },
  {
    icon: '❌',
    problem: 'Language barriers and miscommunication',
    solution: 'We handle all communication and ensure clarity',
  },
  {
    icon: '📅',
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
              <div className="text-4xl mb-4">{item.icon}</div>
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

