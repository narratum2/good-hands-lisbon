import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Heart, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Good Hands',
  description: 'We believe beauty should be a trusted experience, not a gamble. Discover the philosophy behind Lisbon\'s most discerning beauty concierge.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero - Brand Philosophy */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-shell via-porcelain to-white">
        <div className="container-custom max-w-5xl text-center py-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wider text-gold font-medium">Our Philosophy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-ink leading-tight">
            Beauty Should Not Be<br />
            <span className="text-gold">a Gamble</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-harbor leading-relaxed max-w-3xl mx-auto mb-12">
            Lisbon has incredible talent. Finding it should not take hours of research, crossed fingers, and hoping for the best. We know who is actually good, and we are here to make introductions.
          </p>

          <div className="inline-flex items-center gap-2 text-harbor/60 text-sm">
            <div className="w-12 h-px bg-gold"></div>
            <span>Est. 2024, Lisbon</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-harbor/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full"></div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Finding Beauty Services<br />Should Not Feel Like This
            </h2>
          </div>

          <div className="prose prose-lg max-w-3xl mx-auto mb-16 text-harbor">
            <p className="text-xl">
              You know the pattern: Three hours on Instagram. Conflicting reviews. A Portuguese website you cannot quite translate. The growing certainty that you are about to pay €150 for a haircut you might hate.
            </p>
            <p className="text-xl">
              It is exhausting. And it is why we exist.
            </p>
          </div>

          <div className="bg-ink text-white rounded-2xl p-10 md:p-16 text-center">
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
              Lisbon has world-class beauty professionals. The problem is not finding them on a map, it is knowing who is actually worth your time.
            </p>
            <p className="text-porcelain/70">That is what we do.</p>
          </div>
        </div>
      </section>

      {/* Our Solution - Brand Promise */}
      <section className="section-padding bg-gradient-to-br from-shell to-porcelain">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              We Know Everyone Worth Knowing
            </h2>
            <p className="text-xl text-harbor max-w-2xl mx-auto">
              Years of relationships. Personal testing. Honest assessments. When we recommend someone, it is because we would book them ourselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Sparkles className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">We Test Everyone</h3>
              <p className="text-harbor">
                Before anyone joins our network, we visit them. Try their services. Check their space. Talk to their clients. If we would not book them for ourselves or our closest friends, they do not make the cut. Most do not.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Heart className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">Then We Match You</h3>
              <p className="text-harbor">
                Sofia specializes in curly hair. Ricardo is brilliant with color but only works weekday mornings. Ana has the gentlest touch for sensitive skin. We know this because we have worked with them for years. Tell us what you need, and we will introduce you to the right person.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">If Something Goes Wrong</h3>
              <p className="text-harbor">
                It will not. But if it does, we handle it. No forms, no runaround. Just tell us what happened and we will make it right. Our reputation depends on your experience, so we do not mess around.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">We Handle Everything</h3>
              <p className="text-harbor">
                Booking, directions, translations, confirmations, reminders. All the coordination that usually eats up your afternoon. You tell us when and what you want. We arrange it. You show up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="section-padding bg-ink text-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">What We Actually Believe</h2>
          </div>

          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl leading-relaxed">
              Finding someone good should not require connections or three hours of research. Excellence should not be a secret. Quality should be the baseline, not a gamble.
            </p>
            <p className="text-xl leading-relaxed mt-6">
              We started Good Hands because we were tired of seeing people waste time and money on disappointing experiences. Lisbon has world-class talent. You just need to know where to look. Now you do.
            </p>
            <p className="text-xl leading-relaxed text-gold mt-8 font-serif italic">
              The beauty industry should not feel like roulette. It should feel like having a friend who knows everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Lisbon */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">Why Lisbon</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                A City That Deserves This Service
              </h2>
              <div className="space-y-4 text-lg text-harbor leading-relaxed">
                <p>
                  Lisbon is having a moment. Stylists from Paris, estheticians from Milan, makeup artists from London. The talent is here, and it is exceptional.
                </p>
                <p>
                  But unless you speak Portuguese and know someone who knows someone, good luck finding them. Instagram does not help when half the posts are in another language. Reviews do not help when you do not know what to look for.
                </p>
                <p>
                  We built Good Hands because we love this city and got tired of watching people struggle. Whether you've lived here for years or just arrived, you deserve access to the good stuff without spending your weekends doing detective work.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/brand-images/blog-lisbon-guide.png"
                  alt="Lisbon cityscape - Good Hands beauty concierge connecting you with top professionals"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-gold text-ink p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-serif font-bold">500+</div>
                <div className="text-sm">Vetted Professionals</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-serif font-bold text-gold">8</div>
                <div className="text-sm text-ink">Neighborhoods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            How We Are Different
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We Are Not a Marketplace</h3>
              <p className="text-harbor">
                Anyone with a credit card can get listed on a marketplace. Not here. We are curators. Every professional in our network earned their spot by actually being good at what they do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We Are Not Passive Tech</h3>
              <p className="text-harbor">
                Yes, we use AI. But a human reviews every booking, makes every match, 
                and follows up personally. Technology enables us—it does not replace us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We Do Not Scale at the Expense of Quality</h3>
              <p className="text-harbor">
                We could add 1,000 salons tomorrow. We will not. Growth is good; 
                quality dilution is not. We only expand when we can maintain our standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We Put Clients First, Not Commissions</h3>
              <p className="text-harbor">
                Our fee is included upfront. We never recommend based on who pays us more. 
                Your perfect match is our only metric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            Who Good Hands Is For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-serif mb-3">Travelers & Visitors</h3>
              <p className="text-harbor">
                You are in Lisbon for a week or a month. You want a great haircut, 
                not a research project. We handle everything before you land.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-serif mb-3">Expats & New Residents</h3>
              <p className="text-harbor">
                You just moved here. Finding a trusted hairstylist should not take six months 
                of trial and error. We are your instant beauty network.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-serif mb-3">Lisbon Locals</h3>
              <p className="text-harbor">
                Even if you live here, you don't know every great salon in every neighborhood. 
                We do. Let us introduce you to professionals you didn't know existed.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-ink via-harbor to-ink text-white rounded-lg p-10">
            <p className="text-2xl font-serif italic mb-4">
              If you value your time, appreciate quality, and believe beauty should be trusted—
              Good Hands was built for you.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-gold/10 via-shell to-porcelain">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-harbor mb-8 leading-relaxed">
            Join hundreds of clients who have stopped gambling with their beauty and started trusting Good Hands
          </p>
          <Link href="/#booking" className="btn-gold text-lg px-10 py-4 inline-block">
            Book Your First Experience
          </Link>
          <p className="text-sm text-harbor/60 mt-6">
            First-time clients: Share your preferences, we'll match you perfectly
          </p>
        </div>
      </section>
    </div>
  )
}
