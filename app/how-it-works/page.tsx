import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Good Hands Works — Lisbon Beauty Concierge Process',
  description: 'Discover how Good Hands connects you with vetted beauty professionals in Lisbon. From consultation to booking to your perfect experience.',
  keywords: 'how good hands works, lisbon beauty booking, concierge process, beauty matching service',
}

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/hero-salon-interior.png"
            alt="How Good Hands works - beauty concierge process"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="relative z-10 text-center text-white container-custom px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 max-w-4xl mx-auto">
            How Good Hands Works
          </h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-3xl mx-auto">
            From your first message to your perfect appointment, we handle everything
          </p>
        </div>
      </section>

      {/* The Simple Version */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">
            The Simple Version
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-8">
            It's Ridiculously Simple
          </h2>
          <p className="text-xl text-harbor leading-relaxed mb-12 max-w-3xl mx-auto">
            Tell us what you need. We match you with the perfect professional. You show up and enjoy. That's it.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-shell p-8 rounded-lg">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-serif mb-3">Tell Us What You Want</h3>
              <p className="text-harbor">
                Fill out our simple booking form or chat with us. Share your preferences, concerns, budget, location.
              </p>
            </div>

            <div className="bg-shell p-8 rounded-lg">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-serif mb-3">We Match You Perfectly</h3>
              <p className="text-harbor">
                Our team reviews your request and matches you with a vetted professional who's perfect for your needs.
              </p>
            </div>

            <div className="bg-shell p-8 rounded-lg">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-serif mb-3">Show Up & Enjoy</h3>
              <p className="text-harbor">
                We handle all communication, booking, and coordination. You just show up at the right time and place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Detailed Version */}
      <section className="section-padding bg-gradient-to-br from-sage/5 via-shell to-porcelain">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">
              The Detailed Version
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Here's What Actually Happens
            </h2>
            <p className="text-lg text-harbor max-w-2xl mx-auto">
              For those who want to understand the full process behind the magic
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">You Reach Out</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  Fill out our booking form, send us a message via chat, email, or Telegram. Tell us:
                </p>
                <ul className="space-y-2 text-harbor ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>What you need:</strong> Haircut, color, makeup, spa treatment, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Your preferences:</strong> Modern vs. traditional, specific techniques, style references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Your situation:</strong> First time in Lisbon? Specific event? Time constraints?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Location & timing:</strong> Where you're staying, when you're available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Budget:</strong> Approximate range you're comfortable with</span>
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg mt-4 text-sm text-harbor">
                  <strong>💡 Pro Tip:</strong> The more detail you share, the better we can match you. Don't hold back—we've heard it all!
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">We Review & Match</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  A real human on our concierge team reviews your request. We consider:
                </p>
                <ul className="space-y-2 text-harbor ml-6 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Technical match:</strong> Does the professional specialize in what you need?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Style alignment:</strong> Will their aesthetic match your preferences?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Communication fit:</strong> Do they speak your language fluently?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Personality match:</strong> Will you enjoy the experience together?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Logistics:</strong> Location convenience, timing, pricing</span>
                  </li>
                </ul>
                <p className="text-harbor leading-relaxed">
                  We typically shortlist 2-3 perfect matches from our vetted network. If none are ideal, we'll tell you honestly and suggest alternatives.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4 text-sm text-harbor">
                  <strong>⏱️ Response Time:</strong> Usually within 3-6 hours during business hours, 12-24 hours maximum
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">We Send You a Recommendation</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  You'll receive a personalized message with:
                </p>
                <ul className="space-y-2 text-harbor ml-6 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Our top match:</strong> Who they are, why we chose them for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Their background:</strong> Training, specialties, years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Portfolio examples:</strong> Photos of their work (when relevant)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Location & pricing:</strong> Exact address, service duration, total cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Available times:</strong> When they can fit you in</span>
                  </li>
                </ul>
                <p className="text-harbor leading-relaxed">
                  If you're not feeling it, no problem. We'll suggest someone else or adjust the approach.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">You Confirm</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  Simply reply "Yes, let's book it!" (or something similar). That's all you need to do.
                </p>
                <p className="text-harbor leading-relaxed">
                  We handle the rest: confirming with the professional, securing your time slot, sending you all the details.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                05
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">We Coordinate Everything</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  Behind the scenes, we:
                </p>
                <ul className="space-y-2 text-harbor ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>We coordinate your appointment with your chosen professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Communicate all your preferences and requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Translate if needed (Portuguese ↔ English)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Send you confirmation with all details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Add calendar invite if you want one</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                06
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">Pre-Appointment Prep</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  1-2 days before your appointment, we send you:
                </p>
                <ul className="space-y-2 text-harbor ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Directions:</strong> Exact address, Google Maps link, navigation tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Arrival guidance:</strong> How to find the entrance, parking/transport options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>What to expect:</strong> Duration, what to bring, any prep needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span><strong>Emergency contact:</strong> Our number in case anything comes up</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                07
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">Your Appointment Day</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  You show up. The professional knows exactly what you need (because we've briefed them). You enjoy a great experience.
                </p>
                <p className="text-harbor leading-relaxed">
                  If anything goes wrong (extremely rare), text or call us immediately. We'll fix it on the spot.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-xl">
                08
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-3">Follow-Up</h3>
                <p className="text-harbor mb-4 leading-relaxed">
                  After your appointment, we check in: How was it? Did we match you perfectly? Anything we should know?
                </p>
                <p className="text-harbor leading-relaxed">
                  Your feedback helps us improve and helps future clients find the right match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Your Fee */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-center">
            What's Included in Your Fee
          </h2>
          <p className="text-xl text-harbor text-center mb-12 max-w-2xl mx-auto">
            Our concierge fee is built into all pricing. Here's what you get for it:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-shell p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">✓ Expert Matching</h3>
              <p className="text-harbor text-sm">
                We review hundreds of professionals to find your perfect match based on style, technique, personality, and logistics
              </p>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">✓ All Communication</h3>
              <p className="text-harbor text-sm">
                We handle 100% of back-and-forth with the professional—booking, confirming, coordinating, translating
              </p>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">✓ Quality Guarantee</h3>
              <p className="text-harbor text-sm">
                Every professional is vetted, interviewed, and has proven track record. We stand behind every match
              </p>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">✓ Emergency Support</h3>
              <p className="text-harbor text-sm">
                Something goes wrong? Call us day-of and we'll fix it immediately—rebooking, refunds, or making it right
              </p>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">✓ Insider Knowledge</h3>
              <p className="text-harbor text-sm">
                We know Lisbon's beauty scene inside-out: who's best for what, seasonal availability, pricing insights
              </p>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">✓ Time Savings</h3>
              <p className="text-harbor text-sm">
                No research, no trial and error, no Google Translate struggles. You save hours of frustration
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 rounded-lg text-center">
            <p className="text-lg text-harbor mb-2">
              <strong>Bottom line:</strong> You pay for peace of mind and guaranteed results.
            </p>
            <p className="text-sm text-harbor/70">
              Most clients say it's worth it after their first perfect match
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I book the same professional again?</h3>
              <p className="text-harbor">
                Absolutely! If you loved them, let us know and we'll set up direct rebooking. Many clients become regulars with their matched professional.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">What if I need to reschedule?</h3>
              <p className="text-harbor">
                Just message us ASAP. We handle all rescheduling communication. Most professionals are flexible if given reasonable notice (24-48 hours).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Do you work with last-minute bookings?</h3>
              <p className="text-harbor">
                We try! Same-day is tough (but possible), next-day is usually doable. The more notice you give us, the better your options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">What if I'm not happy with the result?</h3>
              <p className="text-harbor">
                Tell us immediately. We'll work with the professional to make it right, or arrange a fix with someone else at no additional cost to you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Can I request a specific professional I found?</h3>
              <p className="text-harbor">
                Sure! If they're in our network, we'll book them for you and handle coordination. If they're not, we'll reach out and vet them first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Experience It?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 leading-relaxed">
            Tell us what you need, and we'll handle the rest. It's that simple.
          </p>
          <Link href="/book" className="btn-gold text-lg px-10 py-4 inline-block">
            Request Your First Experience
          </Link>
          <p className="text-sm text-porcelain/60 mt-6">
            Response time: 3-6 hours • No commitment until you confirm
          </p>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://goodhands.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'How It Works',
                item: 'https://goodhands.com/how-it-works',
              },
            ],
          }),
        }}
      />
    </div>
  )
}

