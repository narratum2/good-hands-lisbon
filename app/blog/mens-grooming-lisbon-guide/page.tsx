import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Men\'s Grooming Services in Lisbon: Barbers, Spas & Skincare | Good Hands',
  description: 'Complete guide to men\'s grooming in Lisbon - traditional barbers, modern grooming lounges, spa treatments, and executive services.',
  keywords: 'mens grooming lisbon, barber lisbon, mens spa, executive grooming, mens skincare lisbon',
  openGraph: {
    title: 'Men\'s Grooming Guide for Lisbon',
    description: 'Premium grooming services for men in Lisbon',
    type: 'article',
    publishedTime: '2025-01-12',
  }
}

export default function MensGroomingBlog() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80"
            alt="Men's grooming in Lisbon"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom px-4">
          <p className="text-sm uppercase tracking-widest mb-2 text-gold">Men's Grooming</p>
          <h1 className="text-3xl md:text-5xl font-serif mb-4 max-w-4xl mx-auto">
            Men's Grooming Guide for Lisbon
          </h1>
          <p className="text-sm text-porcelain/80">Published January 12, 2025 • 7 min read</p>
        </div>
      </section>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl prose prose-lg">
          <p className="lead">
            Lisbon has evolved beyond basic haircuts. The city now offers premium grooming experiences—from traditional Portuguese barber culture to modern grooming lounges with executive services.
          </p>

          <h2>Traditional Barbers vs. Modern Grooming Lounges</h2>
          
          <h3>Traditional Portuguese Barbers</h3>
          <p>
            Old-school barbers who've been cutting hair for 30+ years. Straight-razor shaves with hot towels. Classic scissor cuts. No-frills, excellent work, very affordable (€15-25). Mostly Portuguese-speaking, cash-only.
          </p>
          <p><strong>Best for:</strong> Classic cuts, traditional shaves, local atmosphere</p>

          <h3>Modern Grooming Lounges</h3>
          <p>
            Contemporary spaces with English-speaking barbers trained in international styles. Modern cuts, beard sculpting, skincare treatments. Higher prices (€35-60) but premium experience, booking apps, English fluency.
          </p>
          <p><strong>Best for:</strong> Modern styles, business professionals, international clients</p>

          <h2>What's Available</h2>

          <h3>Haircuts & Styling</h3>
          <ul>
            <li><strong>Classic Cuts:</strong> Traditional scissor work, €20-40</li>
            <li><strong>Modern Styles:</strong> Fades, undercuts, textured cuts, €35-60</li>
            <li><strong>Hair Treatments:</strong> Scalp therapy, conditioning, €45-75</li>
          </ul>

          <h3>Shaving & Beard Care</h3>
          <ul>
            <li><strong>Traditional Shave:</strong> Straight razor, hot towels, €25-45</li>
            <li><strong>Beard Trim & Shape:</strong> Professional sculpting, €20-35</li>
            <li><strong>Full Beard Service:</strong> Trim, oil, balm application, €40-60</li>
          </ul>

          <h3>Skincare for Men</h3>
          <ul>
            <li><strong>Express Facial:</strong> 30-min deep cleanse, €50-70</li>
            <li><strong>Men's Facial:</strong> 60-min treatment, €80-120</li>
            <li><strong>Executive Package:</strong> Facial + massage, €150-200</li>
          </ul>

          <h3>Spa Treatments</h3>
          <ul>
            <li><strong>Sports Massage:</strong> Deep tissue, recovery-focused, €70-100</li>
            <li><strong>Manicure:</strong> Clean, buffed nails, €25-35</li>
            <li><strong>Pedicure:</strong> Often skipped but should not be, €35-50</li>
          </ul>

          <h2>Best Neighborhoods for Men's Grooming</h2>

          <h3>Chiado & Príncipe Real</h3>
          <p>
            Modern grooming lounges, upscale barbers, contemporary vibe. English-speaking, international clientele. Higher prices but premium service.
          </p>

          <h3>Baixa & Avenida</h3>
          <p>
            Mix of traditional and modern. Business-focused services near offices. Good for quick appointments between meetings.
          </p>

          <h3>Cascais</h3>
          <p>
            Beach-town relaxed but high-end. Many expats, excellent English. Spa culture strong here.
          </p>

          <h2>Executive Grooming Packages</h2>
          <p>
            For business travelers or important meetings, executive packages combine multiple services:
          </p>

          <h3>Express Executive (90 min, €150-200)</h3>
          <ul>
            <li>Modern haircut</li>
            <li>Beard trim & styling</li>
            <li>Express facial</li>
            <li>Neck & shoulder massage</li>
          </ul>

          <h3>Premium Day (3 hours, €300-400)</h3>
          <ul>
            <li>Haircut with consultation</li>
            <li>Traditional shave experience</li>
            <li>Full facial treatment</li>
            <li>Manicure & pedicure</li>
            <li>60-min massage</li>
          </ul>

          <h2>Corporate Grooming Services</h2>
          <p>
            Some grooming professionals offer corporate packages - coming to your office for team events or executive services. Popular for:
          </p>
          <ul>
            <li>Team building days</li>
            <li>Pre-conference prep</li>
            <li>Client entertainment</li>
            <li>Executive perks</li>
          </ul>

          <h2>Tips for First-Timers</h2>

          <h3>Booking</h3>
          <p>
            Book 2-3 days ahead for popular places. Many top barbers/lounges book out quickly, especially Fridays.
          </p>

          <h3>Communication</h3>
          <p>
            Bring a reference photo if possible. "Short on sides, longer on top" translates across languages, but pictures help.
          </p>

          <h3>Pricing</h3>
          <p>
            Traditional barbers: cash, no tips expected (but appreciated)
            <br />
            Modern lounges: cards accepted, 10% tip is becoming common
          </p>

          <h3>Products</h3>
          <p>
            Many places will try to sell you products. The recommendations are usually good - Portuguese men take grooming seriously and barbers know their products.
          </p>

          <h2>Good Hands Men's Grooming Services</h2>
          <p>
            We match you with grooming professionals based on what you're looking for:
          </p>
          <ul>
            <li><strong>Modern cuts:</strong> English-speaking, international-trained barbers</li>
            <li><strong>Traditional experience:</strong> Old-school Portuguese barbers</li>
            <li><strong>Executive services:</strong> Premium treatments for business professionals</li>
            <li><strong>Spa packages:</strong> Full grooming + wellness experiences</li>
          </ul>

          <p>
            We handle all communication, explain Portuguese barber culture, and match you with someone who understands what you want.
          </p>

          <div className="not-prose bg-sage/10 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-serif mb-4">Book Your Grooming Service</h3>
            <p className="text-harbor mb-6">
              Tell us what you need, and we'll match you with the perfect barber or grooming professional
            </p>
            <Link href="/book" className="btn-gold">
              Book Men's Grooming
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

