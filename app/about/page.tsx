import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Heart, Shield, Users } from 'lucide-react'
import SocialMedia from '@/components/SocialMedia'

export const metadata: Metadata = {
  title: 'About Good Hands — Lisbon\'s Premier Beauty Concierge Service',
  description: 'Meet the team behind Lisbon\'s most trusted beauty concierge. We match you with vetted professionals for hair, spa, makeup, and wellness. No trial-and-error—just perfect experiences every time.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Apple-style Hero - Full Screen */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-shell to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/60" />
        </div>
        
        <div className="relative z-10 text-center container-custom px-4 max-w-5xl">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-ink leading-tight">
              Beauty Should Be
              <br />
              <span className="text-gold">Trusted</span>
            </h1>
            <p className="text-xl md:text-2xl text-harbor max-w-3xl mx-auto mb-12 leading-relaxed">
              We built Good Hands because finding exceptional beauty services in Lisbon 
              shouldn&apos;t be a challenge.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Link href="/book" className="btn-gold text-lg px-12 py-4 inline-block">
                Experience the Difference
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-harbor/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Statement - Scroll Triggered */}
      <section className="section-padding bg-white relative">
        <div className="container-custom max-w-4xl text-center">
          <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-ink">
              We realized the problem wasn&apos;t a lack of talent
            </h2>
            <p className="text-2xl text-harbor leading-relaxed mb-12">
              It was the impossibility of finding them with confidence.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Visual Story - Split Screen */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 transform translate-x-8" data-scroll-trigger>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                The Problem
              </h2>
              <div className="space-y-6 text-lg text-harbor leading-relaxed">
                <p>Three hours scrolling through Instagram.</p>
                <p>Fifteen reviews that contradict each other.</p>
                <p>A growing sense you&apos;re about to make an expensive mistake.</p>
                <p className="text-xl text-ink font-medium">Again.</p>
              </div>
            </div>
            <div className="opacity-0 transform translate-x-8" data-scroll-trigger data-delay="0.2s">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/brand-images/hero-salon-interior.png"
                  alt="Frustrated person researching beauty services"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-ink/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Full Width */}
      <section className="section-padding bg-gradient-to-r from-gold/5 via-white to-gold/5">
        <div className="container-custom max-w-4xl text-center">
          <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-ink">
              There is a better way.
            </h2>
            <p className="text-2xl text-harbor mb-12 leading-relaxed">
              We are that friend who knows everyone.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.1s">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-3">Vetted</h3>
                <p className="text-harbor">Every professional tested by us personally</p>
              </div>
              
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-3">Matched</h3>
                <p className="text-harbor">Perfect pairing based on your exact needs</p>
              </div>
              
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.3s">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-3">Coordinated</h3>
                <p className="text-harbor">We handle everything. You just show up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brand-images/hero-salon-interior.png"
            alt="Good Hands story"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 container-custom max-w-4xl text-center px-4">
          <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              Our Story
            </h2>
            
            <div className="space-y-12 text-lg leading-relaxed">
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
                <p className="text-2xl mb-6">
                  We started Good Hands after one too many beauty disasters.
                </p>
                <p className="text-white/80">
                  Moving to Lisbon, we discovered incredible talent everywhere—but finding it? 
                  Nearly impossible without local connections.
                </p>
              </div>
              
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.4s">
                <p className="text-white/80">
                  So we spent two years building relationships. Testing every salon. 
                  Meeting every talented professional. Learning who excels at what.
                </p>
              </div>
              
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.6s">
                <p className="text-2xl text-gold">
                  Now we share that knowledge with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Interactive Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16 opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              What We Believe
            </h2>
            <p className="text-xl text-harbor">
              Our core values guide every recommendation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-lg hover:bg-shell transition-all duration-300 opacity-0 transform translate-y-8" data-scroll-trigger>
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Sparkles className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Excellence should be accessible</h3>
              <p className="text-harbor leading-relaxed">
                Not hidden behind insider networks or language barriers. 
                Quality beauty services should be available to everyone in Lisbon.
              </p>
            </div>

            <div className="group p-8 rounded-lg hover:bg-shell transition-all duration-300 opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.1s">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Trust is earned through transparency</h3>
              <p className="text-harbor leading-relaxed">
                Not marketing promises. We test every professional personally 
                and stand behind every recommendation.
              </p>
            </div>

            <div className="group p-8 rounded-lg hover:bg-shell transition-all duration-300 opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Beauty is personal</h3>
              <p className="text-harbor leading-relaxed">
                Matching matters more than marketing. We listen to what you need 
                and connect you with someone who truly gets it.
              </p>
            </div>

            <div className="group p-8 rounded-lg hover:bg-shell transition-all duration-300 opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.3s">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Your time is valuable</h3>
              <p className="text-harbor leading-relaxed">
                Research shouldn&apos;t be your second job. We&apos;ve done the work 
                so you can focus on what matters to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lisbon - Large Text Block */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl text-center">
          <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              Why Lisbon Deserves This Service
            </h2>
            
            <div className="text-left space-y-8 text-lg text-harbor leading-relaxed">
              <p className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.1s">
                Lisbon is experiencing a renaissance. World-class talent is pouring into the city—hair stylists 
                from Paris, estheticians from Milan, makeup artists from London. The quality is here.
              </p>
              
              <p className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
                But if you don&apos;t speak Portuguese, don&apos;t have local connections, or just moved here? 
                You&apos;d never know where to find them. That&apos;s the problem we solve.
              </p>
              
              <p className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.3s">
                We&apos;re locals who love this city and want everyone—residents, expats, visitors—to experience 
                the best of Lisbon&apos;s beauty scene without the frustration of figuring it out alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Visual Impact */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
              <div className="text-5xl md:text-6xl font-serif text-gold mb-2">150+</div>
              <p className="text-harbor">Vetted Professionals</p>
            </div>
            
            <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.1s">
              <div className="text-5xl md:text-6xl font-serif text-gold mb-2">8</div>
              <p className="text-harbor">Neighborhoods</p>
            </div>
            
            <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
              <div className="text-5xl md:text-6xl font-serif text-gold mb-2">500+</div>
              <p className="text-harbor">Happy Clients</p>
            </div>
            
            <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.3s">
              <div className="text-5xl md:text-6xl font-serif text-gold mb-2">4.9</div>
              <p className="text-harbor">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different - Large Statement */}
      <section className="section-padding bg-gradient-to-b from-ink to-ink/90 text-white">
        <div className="container-custom max-w-4xl text-center">
          <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">
              How We&apos;re Different
            </h2>
            
            <div className="space-y-16">
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.1s">
                <h3 className="text-3xl font-serif mb-6 text-gold">We&apos;re Not a Marketplace</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  We don&apos;t list everyone who pays us. We&apos;re curators, not a directory. 
                  Every professional earns their place through quality, not a subscription fee.
                </p>
              </div>
              
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
                <h3 className="text-3xl font-serif mb-6 text-gold">We&apos;re Not Passive Tech</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Yes, we use AI. But a human reviews every booking, makes every match, 
                  and follows up personally. Technology enables us—it doesn&apos;t replace us.
                </p>
              </div>
              
              <div className="opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.3s">
                <h3 className="text-3xl font-serif mb-6 text-gold">We Put Clients First</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Our fee is included upfront. We never recommend based on who pays us more. 
                  Your perfect match is our only metric.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve - Visual Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16 opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Who Good Hands Is For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group opacity-0 transform translate-y-8" data-scroll-trigger>
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="text-2xl font-serif mb-4">Travelers</h3>
              <p className="text-harbor leading-relaxed">
                In Lisbon for a week or month? Want a great experience, not a research project. 
                We handle everything before you land.
              </p>
            </div>

            <div className="text-center group opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.1s">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🏠</div>
              <h3 className="text-2xl font-serif mb-4">New Residents</h3>
              <p className="text-harbor leading-relaxed">
                Just moved here? Finding trusted professionals shouldn&apos;t take six months 
                of trial and error. We&apos;re your instant beauty network.
              </p>
            </div>

            <div className="text-center group opacity-0 transform translate-y-8" data-scroll-trigger data-delay="0.2s">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">⭐</div>
              <h3 className="text-2xl font-serif mb-4">Lisbon Locals</h3>
              <p className="text-harbor leading-relaxed">
                Even locals don&apos;t know every great salon in every neighborhood. 
                We do. Let us introduce you to professionals you didn&apos;t know existed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Impact */}
      <section className="section-padding bg-gradient-to-r from-gold via-gold-dark to-gold text-white">
        <div className="container-custom max-w-3xl text-center">
          <div className="opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Experience the Difference
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join hundreds of clients who&apos;ve stopped gambling with their beauty 
              and started trusting Good Hands
            </p>
            <Link href="/book" className="inline-block bg-white text-gold px-12 py-4 text-lg font-semibold rounded hover:bg-white/90 transition-colors">
              Book Your First Experience
            </Link>
            <p className="text-sm text-white/70 mt-6">
              First-time clients: Share your preferences, we&apos;ll match you perfectly
            </p>
          </div>
        </div>
      </section>

      {/* Social Media - Single Section */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center opacity-0 transform translate-y-8" data-scroll-trigger>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Connect With Us</h2>
            <p className="text-harbor text-lg mb-8">
              Follow our journey and discover beauty insights from Lisbon
            </p>
            <SocialMedia />
          </div>
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
                item: 'https://good-hands-apualr0k5-narratums-projects.vercel.app',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About Us',
                item: 'https://good-hands-apualr0k5-narratums-projects.vercel.app/about',
              },
            ],
          }),
        }}
      />

      {/* Scroll Animation Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || '0s';
                    entry.target.style.transitionDelay = delay;
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                  }
                });
              }, observerOptions);

              document.querySelectorAll('[data-scroll-trigger]').forEach(function(el) {
                el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                observer.observe(el);
              });
            });
          `,
        }}
      />
    </div>
  )
}