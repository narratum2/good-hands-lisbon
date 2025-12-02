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
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container-custom max-w-6xl">
        {/* Header - Centered with proper contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16 max-w-4xl mx-auto"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif mb-5 font-light"
            style={{ 
              color: 'var(--black)',
              letterSpacing: '-0.02em'
            }}
          >
            Stop Gambling With Your Beauty
          </h2>
          <p 
            className="text-lg md:text-xl mb-5 leading-relaxed font-light"
            style={{ color: 'var(--gray-dark)' }}
          >
            You have spent hours scrolling Instagram. Read contradicting reviews. Worried about making an expensive mistake.
          </p>
          <p 
            className="text-xl md:text-2xl font-serif"
            style={{ color: 'var(--gold)' }}
          >
            There is a better way.
          </p>
        </motion.div>

        {/* Problem/Solution Grid - Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto mb-14 md:mb-16">
          {problems.map((item, index) => {
            const IconComponent = item.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 md:p-8 transition-all duration-300 h-full"
                style={{ 
                  backgroundColor: 'var(--off-white)',
                  border: '1px solid var(--gray-light)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(184, 152, 95, 0.12)' }}
                >
                  <IconComponent 
                    className="w-5 h-5" 
                    style={{ color: 'var(--gold)' }}
                  />
                </div>
                <div className="space-y-3">
                  {/* Problem */}
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ 
                        letterSpacing: '0.1em',
                        color: 'var(--gray-medium)'
                      }}
                    >
                      The Problem
                    </p>
                    <p 
                      className="text-base md:text-lg font-medium"
                      style={{ color: 'var(--black)' }}
                    >
                      {item.problem}
                    </p>
                  </div>
                  {/* Solution */}
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ 
                        letterSpacing: '0.1em',
                        color: 'var(--gold)'
                      }}
                    >
                      Our Solution
                    </p>
                    <p 
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: 'var(--gray-dark)' }}
                    >
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* How It Works CTA - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 md:p-10 max-w-4xl mx-auto text-center"
          style={{ 
            backgroundColor: 'var(--off-white)',
            border: '2px solid rgba(184, 152, 95, 0.25)'
          }}
        >
          <h3 
            className="text-2xl md:text-3xl font-serif mb-4 font-light"
            style={{ color: 'var(--black)' }}
          >
            How It Works
          </h3>
          <p 
            className="text-base md:text-lg mb-5 leading-relaxed"
            style={{ color: 'var(--gray-dark)' }}
          >
            We have spent years building relationships with Lisbon&apos;s best beauty professionals. 
            We know who is brilliant with <span style={{ color: 'var(--gold)', fontWeight: 500 }}>color</span>, 
            who specializes in <span style={{ color: 'var(--gold)', fontWeight: 500 }}>curly hair</span>, 
            who has the lightest touch for <span style={{ color: 'var(--gold)', fontWeight: 500 }}>facials</span>.
          </p>
          <p 
            className="text-sm md:text-base mb-7"
            style={{ color: 'var(--gray-medium)' }}
          >
            Tell us what you need → We match you perfectly → We handle all coordination → You show up and relax
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="btn-gold px-8 py-3.5"
            >
              Book Your Service
            </a>
            <Link
              href="/how-it-works"
              className="btn-secondary px-8 py-3.5"
            >
              See Our Process
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
