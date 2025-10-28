import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, Users, Calendar, Shield, TrendingUp } from 'lucide-react'
import { BuildingIcon, CelebrationIcon, TargetIcon, TrophyIcon, CameraIcon, GiftIcon, BriefcaseIcon, ChartIcon, ClockIcon, Handshake, LocationIcon } from '@/components/icons/CustomIcons'

export const metadata: Metadata = {
  title: 'Corporate Beauty Services Lisbon — Team Wellness, Executive Grooming | Good Hands',
  description: 'Professional beauty services for corporate teams in Lisbon. Executive grooming, team wellness packages, on-site services, employee benefits. Trusted by leading companies.',
  keywords: 'corporate beauty services, executive grooming, team wellness, company benefits, professional appearance, corporate packages lisbon',
}

const services = [
  {
    title: 'Executive Grooming',
    description: 'Regular beauty maintenance for executives and professionals',
    icon: Briefcase,
    features: [
      'Monthly grooming subscriptions',
      'Priority booking for busy schedules',
      'Consistent quality professionals',
      'Pre-meeting quick services',
      'Expense reporting integration',
    ],
    pricing: 'From €150/month per person',
    ideal: 'C-suite, executives, client-facing professionals',
  },
  {
    title: 'Media & Presentation Ready',
    description: 'Look camera-ready for important meetings and presentations',
    icon: Sparkles,
    features: [
      'Hair styling before presentations',
      'Makeup for video calls & conferences',
      'Quick touch-ups between meetings',
      'Professional headshot preparation',
      'TV/media appearance services',
    ],
    pricing: 'From €95 per session',
    ideal: 'Speakers, executives, media professionals',
  },
  {
    title: 'Team Wellness Packages',
    description: 'Beauty and wellness as employee benefits',
    icon: Users,
    features: [
      'Monthly team spa days',
      'Quarterly wellness retreats',
      'On-site chair massage',
      'Stress-relief treatments',
      'Team building through self-care',
    ],
    pricing: 'From €50 per person',
    ideal: 'HR departments, team managers',
  },
  {
    title: 'On-Site Corporate Services',
    description: 'We bring professional services to your office',
    icon: Calendar,
    features: [
      'Express haircuts at the office',
      'Manicure stations during lunch',
      'Massage therapy rooms',
      'Wellness consultation sessions',
      'Product demonstrations',
    ],
    pricing: 'Custom quotes for volume',
    ideal: 'Tech companies, large offices, coworking spaces',
  },
]

const useCases = [
  {
    scenario: 'Tech Startup',
    challenge: 'Team of 30 needs monthly wellness perks',
    solution: 'On-site massage every Friday, quarterly spa day, executive grooming subscriptions for leadership',
    result: '40% increase in employee satisfaction scores',
  },
  {
    scenario: 'Law Firm',
    challenge: 'Partners need consistent professional appearance',
    solution: 'Monthly executive grooming packages, priority booking, pre-trial preparation services',
    result: 'Saved 15+ hours monthly in scheduling coordination',
  },
  {
    scenario: 'Media Agency',
    challenge: 'Teams frequently need camera-ready appearance',
    solution: 'Retainer for on-demand makeup, hair styling, emergency touch-up services',
    result: 'Always prepared for last-minute client presentations',
  },
  {
    scenario: 'Consulting Firm',
    challenge: 'Traveling consultants need services across Lisbon',
    solution: 'Network access in all neighborhoods, mobile booking, expense integration',
    result: 'Seamless professional appearance maintenance',
  },
]

export default function CorporatePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/hero-salon-interior.png"
            alt="Corporate beauty services - professional team"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center container-custom px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Corporate Beauty Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Professional grooming and wellness packages for teams, executives, and companies in Lisbon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#packages" className="btn-gold text-lg px-10 py-4">
              View Packages
            </Link>
            <Link href="#contact" className="btn-secondary text-lg px-10 py-4" style={{ borderColor: 'white', color: 'white' }}>
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Corporate Services */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Why Companies Choose Good Hands
            </h2>
            <p className="text-xl text-harbor max-w-3xl mx-auto">
              Professional appearance matters. We make it effortless for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif mb-3">Vetted Professionals</h3>
              <p className="text-harbor">
                Every service provider is personally tested. Your team deserves the best.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif mb-3">Flexible Scheduling</h3>
              <p className="text-harbor">
                We work around your team&apos;s schedule. Before work, lunch breaks, after hours.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif mb-3">Simplified Billing</h3>
              <p className="text-harbor">
                One invoice. Usage tracking. Expense reporting integration. Easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="packages" className="section-padding bg-shell">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Corporate Service Packages
            </h2>
            <p className="text-xl text-harbor">
              Tailored solutions for every professional need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                      <p className="text-harbor">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-harbor">
                        <span className="text-gold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-harbor">Pricing</span>
                      <span className="text-lg font-semibold text-ink">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-harbor">Ideal for</span>
                      <span className="text-sm text-gold font-medium">{service.ideal}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-harbor mb-6">
              Need a custom package? We work with companies of all sizes.
            </p>
            <Link href="#contact" className="btn-gold text-lg px-10 py-4">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              How Companies Use Good Hands
            </h2>
            <p className="text-xl text-harbor">
              Real solutions for real business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-shell rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏢</span>
                  <h3 className="text-xl font-serif">{useCase.scenario}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-harbor uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-ink">{useCase.challenge}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gold uppercase tracking-wider mb-1">Our Solution</p>
                    <p className="text-ink">{useCase.solution}</p>
                  </div>
                  
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-harbor uppercase tracking-wider mb-1">Result</p>
                    <p className="text-ink font-medium">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl font-serif text-center mb-12">
            Corporate Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">🎯 Employee Retention</h3>
              <p className="text-harbor text-sm">
                Wellness benefits increase employee satisfaction and reduce turnover
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">💼 Professional Image</h3>
              <p className="text-harbor text-sm">
                Ensure your team always looks polished for client meetings
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">⏰ Time Savings</h3>
              <p className="text-harbor text-sm">
                We handle all coordination. Your team just shows up.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">📊 Usage Analytics</h3>
              <p className="text-harbor text-sm">
                Track utilization, spending, and employee satisfaction
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">🤝 No Contracts</h3>
              <p className="text-harbor text-sm">
                Flexible month-to-month arrangements. Scale up or down anytime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">🌍 Multi-Location</h3>
              <p className="text-harbor text-sm">
                Services available across all Lisbon neighborhoods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-harbor">
              Tell us about your company&apos;s needs and we&apos;ll create a custom package
            </p>
          </div>

          <form className="bg-shell rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name *</label>
                <input type="text" id="company" required className="input-field" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                <input type="text" id="name" required className="input-field" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" id="email" required className="input-field" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                <input type="tel" id="phone" className="input-field" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium mb-2">Team Size</label>
                <select id="teamSize" className="input-field">
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-2">Primary Interest</label>
                <select id="interest" className="input-field">
                  <option value="">Select service</option>
                  <option value="executive">Executive Grooming</option>
                  <option value="team">Team Wellness</option>
                  <option value="onsite">On-Site Services</option>
                  <option value="media">Media/Presentation</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your needs</label>
              <textarea id="message" rows={4} className="input-field resize-none" placeholder="What are you looking to achieve with corporate beauty services?"></textarea>
            </div>

            <button type="submit" className="w-full btn-gold text-lg py-4">
              Request Consultation
            </button>

            <p className="text-sm text-center text-harbor">
              We&apos;ll respond within 24 hours with a custom proposal
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-serif text-center mb-12">
            Corporate Services FAQ
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How does billing work?</h3>
              <p className="text-harbor">
                One monthly invoice covering all services. You can set budgets per employee, department, or company-wide. Detailed usage reports included.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What&apos;s the minimum commitment?</h3>
              <p className="text-harbor">
                No long-term contracts. Month-to-month arrangements. Cancel anytime with 30 days notice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Can employees book their own appointments?</h3>
              <p className="text-harbor">
                Yes! We provide a corporate portal where employees can book directly. You control budgets and approve services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Do you offer on-site services?</h3>
              <p className="text-harbor">
                Absolutely. We bring massage therapists, nail technicians, and hairstylists to your office. Popular for team events and monthly wellness days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What about last-minute bookings?</h3>
              <p className="text-harbor">
                Corporate clients get priority access. Need a haircut before a big presentation in 2 hours? We make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Elevate Your Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join leading Lisbon companies in providing world-class beauty and wellness benefits
          </p>
          <Link href="#contact" className="btn-gold text-lg px-12 py-4">
            Schedule Consultation
          </Link>
          <p className="text-sm text-white/60 mt-6">
            Companies we work with: Tech startups, Law firms, Consulting, Media agencies, Financial services
          </p>
        </div>
      </section>
    </div>
  )
}

