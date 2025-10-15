'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, MessageCircle, Globe, CheckCircle } from 'lucide-react'

const problems = [
  {
    Icon: Clock,
    problem: 'Hours wasted researching',
    solution: 'We have vetted 150+ professionals personally',
  },
  {
    Icon: MessageCircle,
    problem: 'Conflicting reviews everywhere',
    solution: 'Expert matching based on your exact needs',
  },
  {
    Icon: Globe,
    problem: 'Language barriers',
    solution: 'Book in English, perfect Portuguese communication',
  },
  {
    Icon: CheckCircle,
    problem: 'Unreliable bookings',
    solution: 'Confirmed appointments with real follow-up',
  },
]

export default function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-ink">
            Stop Gambling With Your Beauty
          </h2>
          <p className="text-xl text-harbor mb-6 leading-relaxed">
            You have spent hours scrolling Instagram. Read contradicting reviews. Worried about making an expensive mistake.
          </p>
          <p className="text-2xl font-serif text-gold">
            There is a better way.
          </p>
        </motion.div>

        {/* Problem/Solution Grid - Clean with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {problems.map((item, index) => {
            const IconComponent = item.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-shell rounded-lg p-8 border border-gray-light/20 hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-gold" />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-harbor uppercase tracking-wider mb-1">The Problem</p>
                    <p className="text-lg font-medium text-ink">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gold uppercase tracking-wider mb-1">Our Solution</p>
                    <p className="text-base text-harbor leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* How It Works CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gold/5 via-shell to-gold/5 border-2 border-gold/20 rounded-lg p-10 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-serif mb-4 text-ink">
            How It Works
          </h3>
          <p className="text-lg text-harbor mb-6 leading-relaxed">
            We have spent years building relationships with Lisbon&apos;s best beauty professionals. 
            We know who is brilliant with <span className="text-gold font-medium">color</span>, 
            who specializes in <span className="text-gold font-medium">curly hair</span>, 
            who has the lightest touch for <span className="text-gold font-medium">facials</span>.
          </p>
          <p className="text-base text-harbor mb-8">
            Tell us what you need → We match you perfectly → We handle all coordination → You show up and relax
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="btn-gold text-lg px-10 py-4"
            >
              Book Your Service
            </a>
            <Link
              href="/how-it-works"
              className="btn-secondary text-lg px-10 py-4"
            >
              See Our Process
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
