import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Belém Beauty Guide — Good Hands',
  description: 'Luxury beauty services in historic Belém. Riverside elegance meets Portuguese heritage along the Tagus.',
  keywords: ['belem beauty', 'belem spa', 'riverside lisbon salon', 'historic belem wellness'],
}

export default function BelemPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=2000&q=80" 
            alt="Belém Lisbon" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Belém</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Where Portuguese heritage meets riverside serenity
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Lisbon&apos;s Historic Waterfront</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Belém is where Lisbon meets history, grandeur, and the Tagus River. This riverside district launched Portugal&apos;s Age of Discovery—from here, explorers set sail for unknown worlds. Today, Belém combines UNESCO World Heritage monuments with waterfront parks, museums, and a more relaxed pace than central Lisbon.
            </p>
            
            <p>
              The neighborhood stretches along the river for over 2 kilometers, anchored by the Jerónimos Monastery and Belém Tower. Wide promenades, expansive gardens, and river breezes create an open, airy atmosphere. It&apos;s where Lisbon families spend Sunday afternoons and tourists queue for pastéis de nata.
            </p>

            <p>
              For beauty services, Belém offers a unique proposition: combine cultural sightseeing with luxury pampering. Spa experiences here emphasize relaxation and escape—treatments with river views, wellness centers in historic buildings, and a slower, more indulgent pace. Perfect for those wanting beauty as part of a full-day Belém experience.
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
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-serif mb-3">Riverside Serenity</h3>
              <p className="text-harbor">
                Spa treatments with Tagus River views. The waterfront location adds natural tranquility to every beauty experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-serif mb-3">Historic Settings</h3>
              <p className="text-harbor">
                Beauty services in buildings with Portuguese heritage. Experience wellness in spaces that honor Lisbon&apos;s architectural legacy.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-serif mb-3">Full-Day Experiences</h3>
              <p className="text-harbor">
                Combine beauty appointments with monuments, museums, and riverside walks. Make a complete day of your Belém visit.
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
              <h3 className="text-xl font-semibold mb-2">Luxury Spa Experiences</h3>
              <p className="text-harbor mb-3">
                Belém&apos;s spas prioritize comprehensive wellness. Expect extended treatment times, luxurious facilities, and holistic approaches. Many offer packages combining massage, facials, and hydrotherapy. Some spa spaces overlook the river—treatments with a view.
              </p>
              <p className="text-sm text-gold">From €95 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Couples & Group Services</h3>
              <p className="text-harbor mb-3">
                Belém is popular for couples&apos; spa days and group celebrations. Many wellness centers offer dual treatment rooms, friend packages, and private spa areas. Perfect for anniversaries, pre-wedding pampering, or girlfriend getaway days.
              </p>
              <p className="text-sm text-gold">From €180/couple • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Natural & Organic Treatments</h3>
              <p className="text-harbor mb-3">
                Belém&apos;s wellness centers emphasize natural Portuguese ingredients—sea minerals from the Atlantic, olive oil from Alentejo, herbs from local gardens. Treatments feel connected to Portugal&apos;s landscape and traditions.
              </p>
              <p className="text-sm text-gold">From €85 • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Post-Sightseeing Treatments</h3>
              <p className="text-harbor mb-3">
                After walking Belém&apos;s monuments, treat tired feet to luxury pedicures or soothe legs with therapeutic massage. Many visitors schedule afternoon spa appointments following morning cultural tours.
              </p>
              <p className="text-sm text-gold">From €60 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Belém Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect in Belém Wellness Centers</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🧘 Extended Time</h3>
              <p className="text-harbor">
                Belém appointments run longer than downtown salons. Expect thorough consultations, extended massage times, and no sense of rushing. This is where you come to truly disconnect.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🌅 Natural Light & Views</h3>
              <p className="text-harbor">
                Many treatment rooms feature windows overlooking the Tagus. Natural light, river breezes (in outdoor spaces), and connection to the waterfront enhance the wellness experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🍃 Holistic Philosophy</h3>
              <p className="text-harbor">
                Belém wellness centers often integrate Portuguese healing traditions—aromatherapy with local herbs, thalassotherapy using Atlantic seawater, treatments inspired by ancestral practices.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">👥 Perfect for Couples</h3>
              <p className="text-harbor">
                More couple-friendly than Chiado&apos;s individual-focused salons. Many spaces designed for shared experiences—dual massage rooms, couples&apos; relaxation areas, romantic post-treatment spaces.
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
                <li><strong>Tram 15E:</strong> From Praça da Figueira or Cais do Sodré (~25 min)</li>
                <li><strong>Train:</strong> Cascais line to Belém station</li>
                <li><strong>Buses:</strong> 714, 727, 728, 729, 751</li>
                <li><strong>River ferry:</strong> From Trafaria (scenic route)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">By Car & Bike</h3>
              <ul className="space-y-3 text-harbor">
                <li>20-30 minutes from downtown by car</li>
                <li>Ample parking near monuments (paid)</li>
                <li>Bike path along entire waterfront</li>
                <li>Uber/taxi readily available (€10-15 from center)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Schedule spa appointments for late afternoon (4pm-6pm) after visiting monuments. Morning tours, lunch at a riverside restaurant, then wellness treatments as the day winds down. Perfect rhythm for a complete Belém day.
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
              <span className="text-2xl">🏰</span>
              <div>
                <h4 className="font-semibold mb-1">Jerónimos Monastery</h4>
                <p className="text-harbor text-sm">UNESCO World Heritage masterpiece of Manueline architecture, Portugal&apos;s most visited monument</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🗼</span>
              <div>
                <h4 className="font-semibold mb-1">Belém Tower</h4>
                <p className="text-harbor text-sm">Iconic fortified tower from 1519, symbol of Portugal&apos;s Age of Discovery</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🥐</span>
              <div>
                <h4 className="font-semibold mb-1">Pastéis de Belém</h4>
                <p className="text-harbor text-sm">Original pastéis de nata since 1837 using secret monastery recipe (expect queues)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🎨</span>
              <div>
                <h4 className="font-semibold mb-1">MAAT - Museum of Art, Architecture and Technology</h4>
                <p className="text-harbor text-sm">Stunning contemporary museum with riverside terrace and innovative exhibitions</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🚢</span>
              <div>
                <h4 className="font-semibold mb-1">Monument to the Discoveries</h4>
                <p className="text-harbor text-sm">Dramatic monument honoring Portuguese explorers, climb to top for panoramic views</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Darwin&apos;s Café</h4>
                <p className="text-harbor text-sm">Modern riverside restaurant with terrace dining and contemporary Portuguese cuisine</p>
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
                <p className="text-lg mb-2">📍 Interactive Map</p>
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
                It&apos;s 6km west of Baixa—about 25 minutes by tram or 20 by car. Most visitors spend half or full days in Belém anyway for the monuments, so beauty appointments integrate seamlessly into sightseeing plans.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Belém spas more expensive?</h3>
              <p className="text-harbor">
                Slightly higher than Baixa but comparable to Chiado. Treatments run 10-15% more due to longer appointment times, luxury facilities, and waterfront locations. The extended experience justifies the premium.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I do Belém monuments and a spa in one day?</h3>
              <p className="text-harbor">
                Absolutely—that&apos;s the perfect Belém day! Morning monuments and museums (3-4 hours), leisurely riverside lunch (1-2 hours), afternoon spa treatments (2-3 hours). You&apos;ll leave relaxed and culturally enriched.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is Belém good for couples&apos; spa days?</h3>
              <p className="text-harbor">
                Belém is Lisbon&apos;s best neighborhood for couples&apos; wellness. More romantic atmosphere than downtown, better facilities for shared experiences, and the riverside setting creates natural ambiance. Many couples celebrate anniversaries here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Belém Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us create your perfect Belém day—culture, cuisine, and wellness by the Tagus
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
