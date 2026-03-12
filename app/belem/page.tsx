import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NeighborhoodMap from '@/components/NeighborhoodMap'
import { Waves, Banknote, Castle, Palette, MapPin, Clock, MessageCircle, Home, Users, Heart, Landmark, Sparkles, TreePine, Ship } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Beauty Services in Belém Lisbon — Waterfront Salons & Local Spas | Good Hands',
  description: 'Belém beauty near Lisbon\'s iconic waterfront monuments. Peaceful salons, authentic Portuguese atmosphere, family-run businesses. Perfect before/after visiting Tower of Belém & Jerónimos Monastery.',
  keywords: ['belem beauty', 'belem salon', 'waterfront beauty lisbon', 'belem spa', 'torre de belem beauty', 'jeronimos beauty', 'peaceful salon lisbon'],
  alternates: {
    canonical: 'https://beautysalonlisbon.com/belem',
  },
}

export default function BelemPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/brand-images/neighborhood-guide-belem-hero.png" 
            alt="Belém riverside Lisbon - serene beauty and wellness experiences" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/80" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Belém</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Waterfront serenity meets authentic beauty experiences
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Lisbon&apos;s Cultural Waterfront</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Belém sits where the Tagus River meets the Atlantic Ocean, a historic waterfront district synonymous with Portugal&apos;s Age of Discovery. From here, navigators like Vasco da Gama departed to explore new worlds. Today, Belém remains expansive and open—wide riverside promenades, monumental architecture, and gardens that feel worlds away from central Lisbon&apos;s density.
            </p>
            
            <p>
              Unlike the compact neighborhoods of Alfama or Chiado, Belém spreads horizontally along the river. Iconic monuments—Jerónimos Monastery, Belém Tower, Padrão dos Descobrimentos—draw thousands of tourists daily, yet residential streets remain remarkably peaceful. Locals live here for the quality of life: proximity to green spaces, river views, fresh air, and community feel.
            </p>

            <p>
              For beauty services, Belém offers a refreshing alternative to downtown&apos;s bustle. Salons here cater primarily to Portuguese residents, not tourists. Expect authentic neighborhood atmospheres, professionals who know their regular clients by name, and prices 10-20% lower than central Lisbon. If you value tranquility and local authenticity over trendiness, Belém delivers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Belém */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Belém for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-4"><Waves className="w-10 h-10 text-gold" /></div>
              <h3 className="text-xl font-serif mb-3">Peaceful Atmosphere</h3>
              <p className="text-harbor">
                Escape central Lisbon&apos;s crowds. Belém&apos;s residential streets offer calm, unhurried beauty experiences with river breeze ambiance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="mb-4"><Home className="w-10 h-10 text-gold" /></div>
              <h3 className="text-xl font-serif mb-3">Authentic & Local</h3>
              <p className="text-harbor">
                Salons serve neighborhood residents, not tourists. You&apos;ll experience genuine Portuguese hospitality and local salon culture.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="mb-4"><Banknote className="w-10 h-10 text-gold" /></div>
              <h3 className="text-xl font-serif mb-3">Better Value</h3>
              <p className="text-harbor">
                Typically 10-20% less expensive than Chiado or Príncipe Real while maintaining excellent quality and service standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services in Belém</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Traditional Portuguese Salons</h3>
              <p className="text-harbor mb-3">
                Family-run establishments, many operating for decades. Stylists know traditional Portuguese techniques alongside modern trends. Expect warm personal service, unhurried appointments, and professionals who treat you like a neighbor, not a transaction.
              </p>
              <p className="text-sm text-gold">Pricing on request • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Neighborhood Nail Salons</h3>
              <p className="text-harbor mb-3">
                Small, intimate nail studios with regular clientele. Perfect for relaxed manicures and pedicures while enjoying genuine conversation. Less polished than trendy downtown spots, but often more skilled and attentive.
              </p>
              <p className="text-sm text-gold">Pricing on request • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Esthetics & Skincare</h3>
              <p className="text-harbor mb-3">
                Independent estheticians working in peaceful treatment rooms. Belém professionals often have long waiting lists of loyal clients who appreciate their skill and the neighborhood&apos;s tranquil setting for facials and treatments.
              </p>
              <p className="text-sm text-gold">Pricing on request • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Spa & Wellness Centers</h3>
              <p className="text-harbor mb-3">
                Several wellness centers near the waterfront offer massage, body treatments, and holistic services. The riverside location enhances relaxation—many treatment rooms have river or garden views.
              </p>
              <p className="text-sm text-gold">Pricing on request • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Belém Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect in Belém Salons</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Users className="w-5 h-5 text-gold flex-shrink-0" /> Generational Expertise</h3>
              <p className="text-harbor">
                Many Belém professionals learned from their mothers or mentors who&apos;ve worked in the neighborhood for 30+ years. They bring accumulated knowledge and traditional Portuguese beauty wisdom.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-gold flex-shrink-0" /> Unhurried Service</h3>
              <p className="text-harbor">
                Belém&apos;s pace is slower than central Lisbon. Appointments aren&apos;t rushed, conversation flows naturally, and there&apos;s time for coffee and genuine connection. European salon culture as it used to be everywhere.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-gold flex-shrink-0" /> Portuguese Atmosphere</h3>
              <p className="text-harbor">
                While professionals speak English, the salon atmosphere is authentically Portuguese. You might hear fado playing softly, smell traditional soap, and witness the warmth of neighborhood relationships.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Heart className="w-5 h-5 text-gold flex-shrink-0" /> Neighborhood Loyalty</h3>
              <p className="text-harbor">
                Belém clients are loyal—they&apos;ve been seeing the same stylist for years. This creates a referral-based business model where quality matters more than marketing. If you&apos;re accepted, you&apos;re in good hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Belém</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Public Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Tram 15:</strong> From Praça da Figueira/Comércio (25 min)</li>
                <li><strong>Train:</strong> Cascais line to Belém station</li>
                <li><strong>Buses:</strong> 727, 28, 729, 714 from various points</li>
                <li><strong>E-Tram (15E):</strong> Modern tram, frequent, comfortable</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Other Options</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Cycling:</strong> Dedicated bike path along river (beautiful ride)</li>
                <li><strong>Walking:</strong> 45 min from central Lisbon (scenic waterfront route)</li>
                <li><strong>Uber/Taxi:</strong> 10-15 min from downtown (€8-12)</li>
                <li><strong>Parking:</strong> Easier than central Lisbon, often free on residential streets</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>Pro Tip:</strong> Combine your beauty appointment with a morning at Belém&apos;s monuments, then have lunch at one of the riverside restaurants. Make a full day of it—the neighborhood rewards slower exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Belém Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Castle className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Jerónimos Monastery</h4>
                <p className="text-harbor text-sm">UNESCO World Heritage Site, magnificent Manueline architecture, Vasco da Gama&apos;s tomb</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Landmark className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Belém Tower (Torre de Belém)</h4>
                <p className="text-harbor text-sm">Iconic 16th-century fortress, symbol of Portugal&apos;s Age of Discovery</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Sparkles className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Pastéis de Belém</h4>
                <p className="text-harbor text-sm">Original pastéis de nata since 1837, secret recipe, long lines but worth it</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Palette className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">MAAT - Museum of Art, Architecture and Technology</h4>
                <p className="text-harbor text-sm">Stunning contemporary museum with riverside location and innovative exhibitions</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Landmark className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Padrão dos Descobrimentos</h4>
                <p className="text-harbor text-sm">Monument to Portuguese discoveries, rooftop viewing platform</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <TreePine className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Jardim da Praça do Império</h4>
                <p className="text-harbor text-sm">Beautiful formal gardens with fountain, perfect for post-salon relaxation</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Ship className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Doca de Santo Amaro</h4>
                <p className="text-harbor text-sm">Marina with restaurants, bars, and waterfront dining with sunset views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Belém</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2"><MapPin className="w-5 h-5 inline mr-1" /> Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations in Belém</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Belém Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Belém too far from central Lisbon?</h3>
              <p className="text-harbor">
                It&apos;s 6km from downtown—15 minutes by tram or train, 25 minutes by scenic Tram 15. The journey is part of the experience. If you&apos;re visiting Belém&apos;s monuments anyway, it&apos;s perfectly convenient.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do Belém salons speak English?</h3>
              <p className="text-harbor">
                Most professionals speak functional English, though it may not be as fluent as central Lisbon. Good Hands ensures communication won&apos;t be a barrier—we match you with English-speaking professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Belém salons as good as downtown?</h3>
              <p className="text-harbor">
                Quality is excellent—sometimes better. Belém professionals have loyal clientele precisely because of their skill. They may lack trendy aesthetics, but technical expertise is often superior due to experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I combine beauty services with sightseeing?</h3>
              <p className="text-harbor">
                Absolutely! This is Belém&apos;s advantage. Book a morning at monuments, lunch, then a 2pm beauty appointment. Or reverse: salon first, then explore when you look and feel your best. Make a full day of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <NeighborhoodMap neighborhood="Belém" />

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Book Your Belém Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with trusted beauty professionals in Lisbon&apos;s most peaceful waterfront neighborhood
          </p>
          <Link href="/book" className="btn-gold">Book Now</Link>
          <p className="text-sm text-porcelain/60 mt-6">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>
    </div>
  )
}
