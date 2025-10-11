import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avenida da Liberdade Beauty Guide — Good Hands',
  description: 'Ultra-luxury beauty on Lisbon&apos;s grandest boulevard. Premium spas, designer salons, and five-star hotel services.',
  keywords: ['avenida liberdade beauty', 'luxury lisbon spa', 'five star salon lisbon', 'premium beauty portugal'],
}

export default function AvenidaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=2000&q=80" 
            alt="Avenida da Liberdade" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Avenida da Liberdade</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Where luxury fashion meets world-class beauty
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Lisbon&apos;s Grand Boulevard</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Avenida da Liberdade is Lisbon&apos;s answer to the Champs-Élysées—a magnificent tree-lined boulevard stretching 1.5 kilometers from Restauradores to Praça Marquês de Pombal. Built in 1879, this grand avenue epitomizes European elegance with its wide sidewalks, fountains, and Art Deco buildings.
            </p>
            
            <p>
              Today, Avenida is Lisbon&apos;s luxury axis. International fashion houses (Louis Vuitton, Prada, Burberry) occupy street-level boutiques. Five-star hotels (Tivoli, Four Seasons Ritz, Avenida Palace) tower above. And hidden within these establishments are some of Portugal&apos;s most exceptional beauty and wellness spaces.
            </p>

            <p>
              For beauty services, Avenida represents the pinnacle of luxury. This is where you find hotel spas with international reputations, salons using exclusive product lines, and professionals trained at the world&apos;s best academies. Expect impeccable service, premium pricing, and an atmosphere of refined sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Avenida */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Avenida for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-serif mb-3">Five-Star Standards</h3>
              <p className="text-harbor">
                Hotel spas and premium salons with international luxury standards. The highest service levels in Lisbon, bar none.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-serif mb-3">International Expertise</h3>
              <p className="text-harbor">
                Professionals trained in Paris, London, New York. Many are transplants from international luxury markets who chose Lisbon.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-serif mb-3">Exclusive Products</h3>
              <p className="text-harbor">
                Access to premium brands not available elsewhere in Lisbon. La Mer, Valmont, Augustinus Bader, ESPA, and other luxury lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services on Avenida</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Five-Star Hotel Spas</h3>
              <p className="text-harbor mb-3">
                The Four Seasons Ritz Peninsula Spa by ESPA and Tivoli Spa set Lisbon&apos;s luxury wellness standards. Expect signature treatments, thermal experiences, private suites, and the kind of service that makes you feel like royalty. These aren&apos;t just spas—they&apos;re destinations.
              </p>
              <p className="text-sm text-gold">From €150 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Designer Hair Salons</h3>
              <p className="text-harbor mb-3">
                International salon brands and Portuguese upscale establishments. Advanced color correction, celebrity-level styling, keratin systems, and luxury hair extensions. These stylists work with Lisbon&apos;s elite and visiting celebrities.
              </p>
              <p className="text-sm text-gold">From €120 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Medical Aesthetics</h3>
              <p className="text-harbor mb-3">
                Avenida hosts Lisbon&apos;s premier medical aesthetic clinics—dermatologists, plastic surgeons, and medical spas offering injectables, laser treatments, and advanced skincare. All with medical credentials and luxury clinic environments.
              </p>
              <p className="text-sm text-gold">Consultation required • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">VIP Personal Services</h3>
              <p className="text-harbor mb-3">
                Private beauty services in hotel suites or homes. Mobile hair stylists, makeup artists, and aestheticians for high-profile clients, weddings, or those preferring ultimate privacy and convenience.
              </p>
              <p className="text-sm text-gold">From €200 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Avenida Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect on Avenida</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🥂 Luxury Amenities</h3>
              <p className="text-harbor">
                Champagne service, luxury lounges, premium robes and slippers, gourmet refreshments, and impeccable attention to every detail. The experience rivals top international spa destinations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🔒 Privacy & Discretion</h3>
              <p className="text-harbor">
                Private treatment rooms, discreet entrances, and professional confidentiality. Avenida spas understand high-profile clients—celebrities, executives, and those who value absolute privacy.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🎯 Personalization</h3>
              <p className="text-harbor">
                Bespoke treatments tailored to your specific needs. Consultations with specialists, custom product blending, and services designed around your goals—not just menu items.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">⏱️ Extended Appointments</h3>
              <p className="text-harbor">
                No rushing. Appointments include consultation time, treatment time, and relaxation time. A 90-minute massage truly takes 90 minutes—plus before and after care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Avenida da Liberdade</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Public Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Metro:</strong> Avenida (Blue Line), Restauradores (Blue), Marquês de Pombal (Yellow & Blue)</li>
                <li><strong>Buses:</strong> 736, 744, 783 run along Avenida</li>
                <li><strong>Elevador da Glória:</strong> Funicular from Restauradores</li>
                <li><strong>Walking:</strong> 10 min from Rossio, 15 from Príncipe Real</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">By Car & Valet</h3>
              <ul className="space-y-3 text-harbor">
                <li>Uber/taxi drops at hotel entrances</li>
                <li>Five-star hotels offer valet parking</li>
                <li>Public parking: El Corte Inglés, Marquês de Pombal</li>
                <li>Most luxury venues validate parking</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> If staying at an Avenida hotel, book spa appointments through your concierge for potential guest discounts and priority booking. Many hotels offer half-day or full-day spa packages that include multiple treatments at better value than à la carte.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Avenida Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🛍️</span>
              <div>
                <h4 className="font-semibold mb-1">Luxury Shopping</h4>
                <p className="text-harbor text-sm">International fashion houses line the boulevard—Louis Vuitton, Gucci, Prada, Burberry</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏨</span>
              <div>
                <h4 className="font-semibold mb-1">Five-Star Hotels</h4>
                <p className="text-harbor text-sm">Four Seasons Ritz, Tivoli Avenida, Avenida Palace—architectural landmarks with world-class service</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌳</span>
              <div>
                <h4 className="font-semibold mb-1">Jardim Amália Rodrigues</h4>
                <p className="text-harbor text-sm">Central garden promenade with fountains, sculptures, and shaded walking paths</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏛️</span>
              <div>
                <h4 className="font-semibold mb-1">El Corte Inglés</h4>
                <p className="text-harbor text-sm">Upscale department store with international brands, gourmet food hall, rooftop restaurant</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Michelin-Starred Dining</h4>
                <p className="text-harbor text-sm">Eleven (Michelin star), Varanda Restaurant, and numerous fine dining options</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🎭</span>
              <div>
                <h4 className="font-semibold mb-1">Teatro Tivoli BBVA</h4>
                <p className="text-harbor text-sm">Historic theater hosting musicals, concerts, and performances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Avenida da Liberdade</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations on Avenida</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Avenida Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Avenida significantly more expensive?</h3>
              <p className="text-harbor">
                Yes—expect 25-40% higher prices than Baixa and 15-20% higher than Chiado. However, you&apos;re accessing international luxury standards, exclusive products, and five-star hotel spas. The experience matches the premium pricing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do I need to be a hotel guest?</h3>
              <p className="text-harbor">
                No—most hotel spas welcome outside guests for treatments. Some offer day passes including spa access. Booking through Good Hands ensures acceptance even during busy periods.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What&apos;s the dress code?</h3>
              <p className="text-harbor">
                Smart casual at minimum. Avenida establishments maintain upscale atmospheres. You wouldn&apos;t wear gym clothes to the Ritz—same applies for beauty appointments. Think business casual or chic leisure wear.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">How far in advance should I book?</h3>
              <p className="text-harbor">
                2-4 weeks for Avenida&apos;s top professionals and hotel spas, especially weekends and holidays. Popular therapists book out months ahead. Good Hands can help navigate availability and sometimes access preferred time slots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Avenida Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Experience Lisbon&apos;s most luxurious beauty services on the city&apos;s grandest boulevard
          </p>
          <Link href="/#booking" className="btn-primary">Book Now</Link>
          <p className="text-sm text-porcelain/60 mt-6">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>
    </div>
  )
}
