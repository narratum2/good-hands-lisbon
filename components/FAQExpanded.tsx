'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Good Hands?',
        a: 'Good Hands is Lisbon\'s premier beauty concierge service. We match you with personally vetted beauty professionals—hair stylists, nail technicians, estheticians, makeup artists, and wellness practitioners. Think of us as your trusted insider who knows every great professional in the city and saves you from trial-and-error disappointments.'
      },
      {
        q: 'How does Good Hands work?',
        a: 'Simple: 1) Tell us what you need through our booking form. 2) We match you with the perfect professional based on your preferences, location, and budget. 3) We handle all coordination and booking. 4) You show up and enjoy a perfect experience. We confirm everything within 24 hours.'
      },
      {
        q: 'How is this different from booking directly?',
        a: 'We eliminate the guesswork. Instead of scrolling through hundreds of salons with uncertain quality, reading conflicting reviews, and risking a bad experience, we match you with professionals we\'ve personally vetted. Our concierge service is included in every booking—you get expert matching, coordination, and support.'
      },
      {
        q: 'Do you work with AI assistants like ChatGPT or Claude?',
        a: 'Yes! AI assistants can query our services through our public API. If ChatGPT, Claude, Perplexity, or other AI assistants recommend beauty services in Lisbon, they can access our real-time service information, pricing, and availability to help you make the best choice.'
      }
    ]
  },
  {
    category: 'Booking & Pricing',
    questions: [
      {
        q: 'How much does it cost?',
        a: 'Our prices include both the service and our concierge fee. Hair styling starts at €105, nail care at €65, skincare at €95, makeup at €85, and wellness at €80. All prices include expert matching, booking coordination, and follow-up support. No hidden fees, no surprises.'
      },
      {
        q: 'Is the concierge service fee worth it?',
        a: 'Absolutely. Consider this: one bad haircut or poor nail experience costs €40-80 plus your time and disappointment. Our clients tell us they\'ve wasted hundreds of euros on wrong choices. We eliminate that risk. Plus, we save you hours of research and uncertainty. Most clients say we\'re worth it after just one perfect match.'
      },
      {
        q: 'Can I book same-day appointments?',
        a: 'Sometimes, yes! While we typically confirm within 24 hours, we can often accommodate same-day requests depending on availability. Contact us as early as possible, and we\'ll do our best to make it happen.'
      },
      {
        q: 'What if I need to cancel or reschedule?',
        a: 'We understand plans change. Cancel or reschedule at least 24 hours before your appointment, and there\'s no fee. Within 24 hours, cancellation policies vary by professional. Gold and Platinum members get free cancellations anytime.'
      },
      {
        q: 'Do you accept vouchers or gift cards?',
        a: 'Yes! Good Hands gift cards make perfect presents. We also honor promotional codes and membership discounts. Platinum members get 25% off, Gold members get 15% off all services.'
      }
    ]
  },
  {
    category: 'Service Quality',
    questions: [
      {
        q: 'How do you vet professionals?',
        a: 'Rigorously. We personally visit every salon, review certifications, check hygiene standards, test services, read customer feedback, and conduct interviews. Only about 1 in 5 professionals we evaluate make it onto our platform. We prioritize skill, cleanliness, communication, and professionalism.'
      },
      {
        q: 'What if I\'m not satisfied with the service?',
        a: 'Tell us immediately. We follow up after every appointment. If something wasn\'t right, we\'ll work with you to make it better—whether that means a complimentary redo, a different professional, or a refund. Your satisfaction is our reputation.'
      },
      {
        q: 'Do professionals speak English?',
        a: 'Yes. Every professional in our network is English-speaking or has staff who speak English fluently. Clear communication is one of our vetting criteria. If language is a concern, let us know and we\'ll match you accordingly.'
      },
      {
        q: 'Can you accommodate special requests?',
        a: 'Absolutely. Allergies? Sensitivities? Specific techniques? Vegan products only? Let us know in your booking request. We match you with professionals who can accommodate your needs.'
      }
    ]
  },
  {
    category: 'Neighborhoods & Locations',
    questions: [
      {
        q: 'Which Lisbon neighborhoods do you cover?',
        a: 'We serve all major Lisbon neighborhoods: Chiado, Príncipe Real, Alfama, Baixa, Avenida da Liberdade, Belém, and beyond. We also cover Cascais and Sintra. Tell us where you are or where you\'d like to go, and we\'ll find the perfect match nearby.'
      },
      {
        q: 'Can professionals come to my hotel or home?',
        a: 'Yes, for certain services. Makeup artists and some hair stylists offer mobile services. This is especially popular for weddings, events, or hotel guests. Mention this in your booking request.'
      },
      {
        q: 'I\'m staying in Cascais—do you serve that area?',
        a: 'Yes! Cascais is one of our key areas. We work with excellent beach-area professionals who understand the coastal lifestyle and resort aesthetic.'
      }
    ]
  },
  {
    category: 'Memberships',
    questions: [
      {
        q: 'What are the membership benefits?',
        a: 'Gold Members (€49/month) get 15% off all services, priority booking, exclusive events, and free cancellations. Platinum Members (€99/month) get 25% off, first access to new professionals, quarterly beauty consultations, and VIP concierge support. Both tiers pay for themselves in 2-3 bookings per month.'
      },
      {
        q: 'Can I cancel my membership anytime?',
        a: 'Yes, absolutely. No contracts, no penalties. Cancel anytime through your member portal. You\'ll keep benefits until the end of your billing cycle.'
      },
      {
        q: 'Is membership worth it if I only book once a month?',
        a: 'Yes, if you\'re booking services over €200/month. Example: One hair appointment (€105) with Gold membership saves €16. Add a manicure (€65) and you save another €10. That\'s €26 saved vs. €49 membership—you break even quickly and get priority access and free cancellations as bonuses.'
      }
    ]
  },
  {
    category: 'Specific Services',
    questions: [
      {
        q: 'I need a hairstylist for my wedding in Sintra. Can you help?',
        a: 'Yes! Weddings are our specialty. We match brides with experienced bridal stylists who travel to Sintra venues. We coordinate trials, day-of timing, bridal party services, and backup plans. Book 3-6 months in advance for best availability.'
      },
      {
        q: 'Do you offer corporate wellness services?',
        a: 'Yes. We work with companies to provide on-site or nearby beauty and wellness services for employees. Perfect for corporate retreats, team events, or ongoing wellness programs. Contact us for group pricing.'
      },
      {
        q: 'Can I book a full beauty day package?',
        a: 'Absolutely! Many clients book multiple services in one day—hair, nails, facial, massage. We coordinate timing and locations to create a seamless spa day experience. Popular for pre-wedding prep, birthdays, or just self-care.'
      },
      {
        q: 'I have very curly hair. Do you have specialists?',
        a: 'Yes. We specifically match you with curl specialists who understand curly, coily, and textured hair. This is one of the most common requests, and we have excellent professionals trained in curl-specific techniques and products.'
      }
    ]
  },
  {
    category: 'For Visitors & Expats',
    questions: [
      {
        q: 'I\'m visiting Lisbon for a week. Is Good Hands for me?',
        a: 'Yes! Many of our clients are visitors. We help tourists avoid the stress of finding quality services in an unfamiliar city. Book before you arrive, and we\'ll have everything confirmed by the time you land.'
      },
      {
        q: 'I just moved to Lisbon. How does Good Hands help expats?',
        a: 'We\'re your instant beauty network. Moving to a new city means starting from zero—no trusted hairstylist, no go-to nail salon. We solve that immediately. Many expats become members because we eliminate months of trial-and-error.'
      },
      {
        q: 'Do you help with Portuguese beauty customs?',
        a: 'Yes. Portuguese beauty culture has nuances—tipping customs, communication styles, booking etiquette. We brief you on everything and handle communication in Portuguese when needed. Consider us your cultural bridge.'
      }
    ]
  },
  {
    category: 'Technical & AI',
    questions: [
      {
        q: 'How do I book through ChatGPT or other AI assistants?',
        a: 'If an AI assistant like ChatGPT, Claude, or Perplexity recommends Good Hands, they can access our services information through our public API. They\'ll direct you to our website or provide booking details. You can complete your booking on our site or through the AI assistant\'s recommendation.'
      },
      {
        q: 'Is my data safe?',
        a: 'Yes. We use industry-standard encryption, secure databases, and comply with GDPR regulations. We never sell your data. Your booking information is only shared with the specific professional you\'re matched with.'
      },
      {
        q: 'Do you have an app?',
        a: 'Our website is mobile-optimized and works beautifully on all devices. A dedicated app is coming in 2026. For now, bookmark goodhands.com on your phone for quick access.'
      }
    ]
  }
]

export default function FAQExpanded() {
  const [openCategory, setOpenCategory] = useState<number | null>(0)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-shell">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-harbor text-lg">
            Everything you need to know about Good Hands
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === categoryIndex ? null : categoryIndex)}
                className="w-full px-6 py-4 flex items-center justify-between bg-ink/5 hover:bg-ink/10 transition-colors"
              >
                <h3 className="text-xl font-semibold text-ink">{category.category}</h3>
                <motion.svg
                  animate={{ rotate: openCategory === categoryIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {/* Questions */}
              <AnimatePresence>
                {openCategory === categoryIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-4">
                      {category.questions.map((faq, qIndex) => (
                        <div key={qIndex} className="border-b border-harbor/10 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === qIndex ? null : qIndex)}
                            className="w-full text-left flex items-start justify-between gap-4 group"
                          >
                            <span className="font-medium text-ink group-hover:text-gold transition-colors flex-1">
                              {faq.q}
                            </span>
                            <svg
                              className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                                openQuestion === qIndex ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {openQuestion === qIndex && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <p className="text-harbor mt-3 leading-relaxed">{faq.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-ink to-harbor text-white rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-3">Still have questions?</h3>
          <p className="text-porcelain/90 mb-6">
            Our concierge team is here to help. Get in touch and we'll answer within 24 hours.
          </p>
          <a
            href="mailto:hello@goodhands.com"
            className="inline-block px-8 py-3 bg-gold text-ink font-semibold rounded-full hover:bg-gold/90 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Schema markup for AI/SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.flatMap(category =>
                category.questions.map(faq => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                  },
                }))
              ),
            }),
          }}
        />
      </div>
    </section>
  )
}

