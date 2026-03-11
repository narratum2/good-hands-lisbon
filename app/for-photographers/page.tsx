import { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Users, Clock, Shield, MapPin, MessageCircle, CalendarCheck, Aperture, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Photographers — Beauty Teams On-Demand in Lisbon | Good Hands',
  description: 'Photographers: get vetted hair and makeup artists for your shoots in Lisbon, Cascais, and Sintra. We coordinate your beauty team so you can focus on shooting. Trusted by editorial, wedding, and brand photographers.',
  keywords: 'makeup artist Lisbon photoshoot, beauty team photographer Lisbon, MUA wedding photographer Portugal, editorial makeup artist Lisbon, hair makeup team photoshoot, photographer beauty services Lisbon, find makeup artist Lisbon, photoshoot hair stylist Portugal',
  alternates: { canonical: '/for-photographers' },
  openGraph: {
    title: 'For Photographers — Beauty Teams On-Demand in Lisbon',
    description: 'Vetted hair and makeup artists for your Lisbon shoots. We handle coordination so you focus on the camera.',
    type: 'website',
  },
}

export default function ForPhotographersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-ink">
        <div className="container-custom max-w-5xl py-20 md:py-32 lg:py-40">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-6">
            For Photographers &amp; Creative Teams
          </p>
          <h1
            className="font-serif text-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Your Lisbon Beauty Team, Handled.
          </h1>
          <p className="text-porcelain/80 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            You found the location. You booked the model. Now you need reliable hair and
            makeup — in a city you may not know. We coordinate vetted beauty professionals
            for editorial, wedding, lifestyle, and brand shoots across Lisbon, Cascais,
            and Sintra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="btn-gold">
              Request a Beauty Team
            </Link>
            <Link
              href="/premium/photoshoots#packages"
              className="btn-primary border border-white/30 hover:bg-white/10"
            >
              View Photoshoot Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-12 text-center">
              The Problem Every Photographer Knows
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-shell rounded-lg">
                <Clock className="w-8 h-8 text-gold mb-5" />
                <h3 className="text-xl font-semibold text-ink mb-3">Last-Minute Scramble</h3>
                <p className="text-harbor leading-relaxed">
                  You're shooting in Lisbon next week and your usual MUA can't travel.
                  Instagram DMs go unanswered. Google results are a gamble.
                </p>
              </div>
              <div className="p-8 bg-shell rounded-lg">
                <Shield className="w-8 h-8 text-gold mb-5" />
                <h3 className="text-xl font-semibold text-ink mb-3">Quality Uncertainty</h3>
                <p className="text-harbor leading-relaxed">
                  Portfolios can be retouched. Reviews can be fake. You won't know if the
                  artist can handle camera lighting, coastal wind, or set protocols until
                  it's too late.
                </p>
              </div>
              <div className="p-8 bg-shell rounded-lg">
                <MessageCircle className="w-8 h-8 text-gold mb-5" />
                <h3 className="text-xl font-semibold text-ink mb-3">Language &amp; Logistics</h3>
                <p className="text-harbor leading-relaxed">
                  Coordinating in a foreign city, managing Portuguese-speaking artists,
                  navigating payment, arranging transport to remote locations — it adds up
                  fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-4 text-center">
              One Message. Full Beauty Team. Done.
            </h2>
            <p className="text-harbor text-lg text-center mb-14 max-w-2xl mx-auto">
              Here's how it works — from brief to shoot day.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: CalendarCheck,
                  step: '01',
                  title: 'Tell Us Your Shoot',
                  desc: 'Date, location, style, headcount. We need 5 days notice (2 weeks for peak season).',
                },
                {
                  icon: Users,
                  step: '02',
                  title: 'We Assemble Your Team',
                  desc: 'We match you with camera-experienced artists from our vetted network of 150+ professionals. They understand set protocols, creative direction, and what photographs well.',
                },
                {
                  icon: Aperture,
                  step: '03',
                  title: 'Direct Coordination',
                  desc: 'Your artist connects with you (or your production manager) to review mood boards, reference images, and timing. We handle the logistics.',
                },
                {
                  icon: Star,
                  step: '04',
                  title: 'Shoot Day',
                  desc: 'Team arrives on-location, ready. Touch-ups throughout. You focus on the camera. We handle the rest.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-gold/30 font-serif text-5xl font-light absolute -top-2 right-4">
                    {item.step}
                  </span>
                  <item.icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-ink mb-3">{item.title}</h3>
                  <p className="text-harbor text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-12 text-center">
              Who We Work With
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Wedding Photographers',
                  desc: 'Destination weddings in Sintra palaces, Lisbon rooftops, Algarve beaches. Bridal + bridal party styling. Trial coordination. Day-of presence.',
                },
                {
                  title: 'Editorial & Fashion',
                  desc: 'Magazine editorials, lookbooks, brand campaigns. Multi-look changes. Full understanding of creative direction and set hierarchy.',
                },
                {
                  title: 'Lifestyle & Content',
                  desc: 'Influencer shoots, content creation, personal branding. Natural, camera-ready looks. Instagram-first aesthetic.',
                },
                {
                  title: 'Corporate & Headshots',
                  desc: 'Executive portraits, team photos, employer branding. Polished, professional styling for corporate standards.',
                },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-harbor/15 rounded-lg">
                  <h3 className="text-lg font-semibold text-ink mb-3 font-serif">{item.title}</h3>
                  <p className="text-harbor text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Photographers Choose Us */}
      <section className="section-padding bg-ink">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-12 text-center">
              Why Photographers Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Camera-Trained Artists',
                  desc: 'Every artist in our network understands color theory for photography, products that don\'t flash back, and techniques that hold under studio and natural light.',
                },
                {
                  title: 'We Speak Your Language',
                  desc: 'Our team speaks English, Portuguese, French, and Spanish. We translate creative briefs, coordinate schedules, and handle all vendor communication.',
                },
                {
                  title: 'Coast-Proof Guarantee',
                  desc: 'Lisbon\'s coast is windy. We use waterproof, humidity-resistant products and styling techniques tested for Cabo da Roca, Guincho, and Cascais.',
                },
              ].map((item) => (
                <div key={item.title} className="p-8 border border-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-porcelain/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-porcelain">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-12 text-center">
              Where We Cover
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                'Lisbon (Chiado, Alfama, Belem, Principe Real, Baixa, Avenida)',
                'Cascais & Guincho Beach',
                'Sintra (palaces, gardens, Cabo da Roca)',
                'Setubal & Arrabida',
                'Ericeira',
                'Algarve (on request, 48h notice)',
              ].map((loc) => (
                <div key={loc} className="flex items-start gap-3 py-3 border-b border-harbor/15">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-ink">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-4 text-center">
              Pricing
            </h2>
            <p className="text-harbor text-center mb-12 max-w-xl mx-auto">
              Transparent rates. No hidden fees. Travel within Greater Lisbon included.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-shell rounded-lg flex flex-col">
                <h3 className="text-2xl font-serif text-ink mb-2">Single Artist</h3>
                <p className="text-3xl font-serif text-gold mb-4">From &euro;300</p>
                <p className="text-harbor text-sm leading-relaxed mb-6 flex-1">
                  1 hair OR makeup artist, 90 min on-location, touch-ups included.
                </p>
                <Link href="/book" className="btn-primary w-full text-center">
                  Book Single Artist
                </Link>
              </div>

              <div className="p-8 bg-ink text-white rounded-lg relative flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif mb-2">Full Team</h3>
                <p className="text-3xl font-serif text-gold mb-4">From &euro;500</p>
                <p className="text-porcelain/80 text-sm leading-relaxed mb-6 flex-1">
                  Hair AND makeup, 2.5h on-location, unlimited touch-ups,
                  pre-shoot consult.
                </p>
                <Link href="/book" className="btn-gold w-full text-center">
                  Book Full Team
                </Link>
              </div>

              <div className="p-8 bg-shell rounded-lg flex flex-col">
                <h3 className="text-2xl font-serif text-ink mb-2">Production Scale</h3>
                <p className="text-3xl font-serif text-gold mb-4">Custom</p>
                <p className="text-harbor text-sm leading-relaxed mb-6 flex-1">
                  Multiple artists, multi-day, multi-location. Editorial,
                  campaigns, fashion weeks.
                </p>
                <Link href="/book" className="btn-primary w-full text-center">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <blockquote
              className="font-serif text-ink mb-8 leading-relaxed"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
            >
              &ldquo;We've worked with Good Hands on three editorial shoots in Lisbon.
              The artists show up on time, understand creative direction, and the styling
              holds up all day — even at Cabo da Roca in January.&rdquo;
            </blockquote>
            <p className="text-harbor text-sm uppercase tracking-widest">
              Editorial Photographer, London
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-serif mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15 }}
            >
              Your Next Lisbon Shoot Deserves the Right Team
            </h2>
            <p className="text-xl text-porcelain/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project. We'll match you with the perfect beauty
              professionals within 24 hours.
            </p>
            <Link href="/book" className="btn-gold text-lg">
              Request a Beauty Team
            </Link>
            <p className="mt-8 text-porcelain/60 text-sm">
              Or email us directly:{' '}
              <a
                href="mailto:hello@beautysalonlisbon.com"
                className="text-gold hover:underline"
              >
                hello@beautysalonlisbon.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photographer Beauty Team Services — Good Hands',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
              url: 'https://beautysalonlisbon.com',
            },
            description: 'On-demand vetted hair and makeup artists for photographers shooting in Lisbon, Cascais, and Sintra. Editorial, wedding, lifestyle, and brand shoots.',
            areaServed: {
              '@type': 'Place',
              name: 'Lisbon, Portugal',
            },
            audience: {
              '@type': 'Audience',
              audienceType: 'Photographers, Creative Directors, Production Teams',
            },
            serviceType: 'Hair and Makeup for Photoshoots',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beautysalonlisbon.com' },
              { '@type': 'ListItem', position: 2, name: 'For Photographers', item: 'https://beautysalonlisbon.com/for-photographers' },
            ],
          }),
        }}
      />
    </div>
  )
}
