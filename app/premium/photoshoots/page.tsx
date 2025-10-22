import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coastal Photoshoot Beauty Services — Good Hands',
  description: 'Professional hair and makeup for your coastal photoshoot in Lisbon, Cascais, Sintra, and Cabo da Roca. Camera-ready styling that lasts.',
}

export default function PhotoshootsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/experience-bridal-beauty.png"
            alt="Coastal photoshoot hair and makeup Lisbon"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="relative z-10 container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Coastal Photoshoot Beauty
            </h1>
            <p className="text-xl md:text-2xl text-porcelain/90 mb-8">
              Camera-ready hair and makeup for your seaside session. We come to you—Cascais, Sintra, Cabo da Roca, anywhere along the coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-primary">
                Book Your Photoshoot Styling
              </Link>
              <Link href="#packages" className="btn-secondary">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8">
              You Hired a Great Photographer. Now Look the Part.
            </h2>
            <div className="prose prose-lg max-w-none text-harbor">
              <p>
                You're spending good money on a professional photoshoot. The location is stunning—dramatic cliffs at Cabo da Roca, golden beaches in Cascais, fairy-tale gardens in Sintra. Your photographer knows what they're doing.
              </p>
              <p>
                But here's the thing: Camera lighting is different from real life. Wind ruins hair. Makeup that looks natural in person disappears on camera. And you can't exactly fix it between shots when you're on a cliff at sunset.
              </p>
              <p>
                We send professional hair and makeup artists to your location. They know how to style for cameras, wind, and coastal humidity. They stay for touch-ups. Your photos look incredible, and you feel confident the whole time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Why This Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">📸 Camera-Ready Makeup</h3>
                <p className="text-harbor">
                  What looks good in person often looks flat on camera. We use professional products and techniques that photograph beautifully—no flashback, no shine, just you looking your best.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">🌊 Coastal-Proof Styling</h3>
                <p className="text-harbor">
                  Wind, humidity, salt air—the coast is beautiful but harsh. We use waterproof, long-lasting products and styling techniques that hold up. Your hair stays perfect from first shot to last.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">✨ Touch-Ups Between Shots</h3>
                <p className="text-harbor">
                  We don't just style you and leave. Your artist stays nearby for quick touch-ups—fixing flyaways, refreshing lipstick, adjusting as lighting changes. You're camera-ready the whole session.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">🚗 We Come to You</h3>
                <p className="text-harbor">
                  No need to get styled in Lisbon and drive 45 minutes to Cascais worrying about your hair. We meet you at your location—hotel, Airbnb, or directly at the shoot site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Photoshoot Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Solo Essential */}
              <div className="bg-shell p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Solo Essential</h3>
                <p className="text-3xl font-serif text-gold mb-4">€300</p>
                <p className="text-harbor mb-6">Perfect for individual portraits or couple's shoots</p>
                <ul className="space-y-3 text-harbor mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Hair styling OR makeup (your choice)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>90 minutes on-location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>One touch-up session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Waterproof, camera-ready products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Coordination with photographer</span>
                  </li>
                </ul>
                <Link href="/book" className="btn-primary w-full">
                  Book Essential
                </Link>
              </div>

              {/* Full Glam */}
              <div className="bg-ink text-white p-8 rounded-lg relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-ink text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif mb-4">Full Glam</h3>
                <p className="text-3xl font-serif text-gold mb-4">€500</p>
                <p className="text-porcelain/80 mb-6">Complete hair and makeup, perfect for editorials</p>
                <ul className="space-y-3 text-porcelain/90 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Full hair styling AND makeup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>2.5 hours on-location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Unlimited touch-ups throughout shoot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Style adjustments for different looks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Professional product kit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Pre-shoot consultation</span>
                  </li>
                </ul>
                <Link href="/book" className="btn-primary w-full">
                  Book Full Glam
                </Link>
              </div>

              {/* Group/Multi-Look */}
              <div className="bg-shell p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Multi-Look</h3>
                <p className="text-3xl font-serif text-gold mb-4">€800</p>
                <p className="text-harbor mb-6">Multiple people or outfit changes</p>
                <ul className="space-y-3 text-harbor mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>2-3 people styled (hair & makeup)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>OR multiple look changes for one person</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>4 hours on-location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Full styling team (2 artists)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Continuous touch-ups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span>Pre-shoot planning call</span>
                  </li>
                </ul>
                <Link href="/book" className="btn-primary w-full">
                  Book Multi-Look
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-harbor">
                All packages include concierge coordination with your photographer.  
                <br />
                Travel to Cascais, Sintra, or Cabo da Roca included. Other locations: ask us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="section-padding bg-porcelain">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Where We Shoot
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-3">Cascais & Guincho Beach</h3>
                <p className="text-harbor">
                  Golden sand, dramatic waves, charming town backdrop. The wind here is real—we use products that hold. Best for sunset shoots (golden hour is unmatched). 30 minutes from Lisbon.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-3">Cabo da Roca</h3>
                <p className="text-harbor">
                  The westernmost point of Europe. Dramatic cliffs, endless ocean, moody skies. Windy and wild—we specialize in windswept-but-polished styling. Incredible for editorial shoots. 40 minutes from Lisbon.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-3">Sintra Palaces & Gardens</h3>
                <p className="text-harbor">
                  Fairy-tale architecture, lush gardens, romantic pathways. More protected from wind, so intricate hairstyles work here. Perfect for dreamy, romantic shoots. Quinta da Regaleira is particularly magical. 35 minutes from Lisbon.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-3">Belém & Tagus River</h3>
                <p className="text-harbor">
                  Historic monuments, waterfront promenades, urban elegance. Less dramatic than the coast but stunning architecture. Good for lifestyle and fashion shoots. 15 minutes from central Lisbon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              How It Works
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">You Book</h3>
                  <p className="text-harbor">
                    Tell us your shoot date, location, and what you're going for. We need at least 5 days' notice (2 weeks for peak season—May to October).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">We Match You</h3>
                  <p className="text-harbor">
                    We assign an artist who specializes in photoshoot styling. They'll reach out to discuss your vision, check reference photos, and coordinate timing with your photographer.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Shoot Day</h3>
                  <p className="text-harbor">
                    Your artist arrives at your location (hotel, Airbnb, or shoot site) 90 minutes before the photographer. Hair and makeup done on-site. They stay for touch-ups throughout your session.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Perfect Photos</h3>
                  <p className="text-harbor">
                    You look incredible. Your photographer gets the shots. Nothing to worry about except enjoying the session. We'll follow up a few days later to see how everything went.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">How far in advance should I book?</h3>
                <p className="text-harbor">
                  At least 5 days. For summer (May-October), we recommend 2 weeks—those are our busiest months. Last-minute bookings sometimes work, but we can't guarantee artist availability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Do you coordinate with my photographer?</h3>
                <p className="text-harbor">
                  Yes. We'll connect with your photographer beforehand to confirm timing, location, and any special requirements. On shoot day, your artist works around the photographer's schedule.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">What if weather ruins the shoot?</h3>
                <p className="text-harbor">
                  If your photographer reschedules due to weather, we'll reschedule too at no extra charge (based on artist availability). If you cancel within 48 hours, there's a 50% fee. Weather cancellations don't count against this.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Can you do early morning shoots?</h3>
                <p className="text-harbor">
                  Yes. Sunrise shoots are popular (amazing light, fewer tourists). We'll adjust timing so you're ready when the photographer needs you. Early morning bookings sometimes have a €50 surcharge depending on location and artist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">What products do you use?</h3>
                <p className="text-harbor">
                  Professional, camera-ready brands—MAC, NARS, Bobbi Brown for makeup. High-hold, humidity-resistant products for hair. Everything is waterproof, sweat-proof, and designed to last all day in coastal conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Do you work with fashion brands and editorial teams?</h3>
                <p className="text-harbor">
                  Yes. We regularly work with fashion shoots, brand campaigns, and editorial projects. We understand set protocols and work efficiently with creative teams. Contact us for commercial rates and multi-day bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
                Book Your Photoshoot Styling
              </h2>
              <p className="text-xl text-harbor">
                Camera-ready hair and makeup. We come to your location. You look incredible.
              </p>
            </div>
            <div className="text-center">
              <Link 
                href="/book?service=wedding" 
                className="btn-gold text-lg"
              >
                Book Photoshoot Beauty Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Your Photographer Is Worth It. So Is Your Styling.
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            You're investing in professional photos. Make sure you look as good as the location.
          </p>
          <Link href="/book" className="btn-primary">
            Book Photoshoot Beauty Services
          </Link>
        </div>
      </section>
    </div>
  )
}

