import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding Beauty Timeline for Lisbon — Complete Planning Guide | Good Hands',
  description: 'Complete 12-month wedding beauty timeline for destination weddings in Lisbon. From trials to the big day - your step-by-step guide to bridal beauty perfection.',
  keywords: 'lisbon wedding beauty, destination wedding timeline, bridal beauty lisbon, wedding hair makeup, wedding beauty planning',
  openGraph: {
    title: 'Wedding Beauty Timeline for Lisbon',
    description: 'Your complete guide to planning wedding beauty in Lisbon',
    type: 'article',
    publishedTime: '2025-01-13',
  }
}

export default function LisbonWeddingBeautyTimelineBlog() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/experience-bridal-beauty.png"
            alt="Wedding beauty timeline for Lisbon destination weddings"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom px-4">
          <p className="text-sm uppercase tracking-widest mb-2 text-gold">Wedding Beauty</p>
          <h1 className="text-3xl md:text-5xl font-serif mb-4 max-w-4xl mx-auto">
            Wedding Beauty Timeline for Lisbon
          </h1>
          <p className="text-sm text-porcelain/80">Published January 13, 2025 • 12 min read</p>
        </div>
      </section>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl prose prose-lg">
          <p className="lead">
            Destination wedding in Lisbon? Your beauty timeline needs to account for travel, climate, and local service quality. This guide ensures you look stunning on your wedding day.
          </p>

          <h2>12 Months Before: The Planning Phase</h2>
          
          <h3>Research & Book Your Beauty Concierge</h3>
          <p><strong>Task:</strong> Secure your beauty coordination team</p>
          <p><strong>Why now:</strong> Top professionals book 6-12 months ahead for wedding season (May-October)</p>
          
          <p><strong>What to do:</strong></p>
          <ul>
            <li>Research Lisbon wedding beauty standards</li>
            <li>Book consultation with beauty concierge</li>
            <li>Create your inspiration board (hair, makeup, nails)</li>
            <li>Discuss timeline and budget</li>
          </ul>

          <p><strong>Budget allocation:</strong></p>
          <ul>
            <li>Bridal services: €800-2,000</li>
            <li>Bridal party (4-6 people): €1,500-3,000</li>
            <li>Pre-wedding treatments: €500-1,000</li>
          </ul>

          <h2>6 Months Before: Trial Run #1</h2>
          
          <h3>First Hair & Makeup Trial</h3>
          <p><strong>When:</strong> 6 months out</p>
          <p><strong>Where:</strong> In Lisbon (combine with venue visit) or virtually</p>

          <p><strong>What to test:</strong></p>
          <ul>
            <li>2-3 hair styles</li>
            <li>2 makeup looks (natural vs. glam)</li>
            <li>Longevity (wear for 4-6 hours)</li>
            <li>Photography test (check photos indoors/outdoors)</li>
          </ul>

          <p><strong>Bring to trial:</strong></p>
          <ul>
            <li>Dress fabric swatch</li>
            <li>Jewelry you'll wear</li>
            <li>Veil or hair accessories</li>
            <li>Reference photos</li>
            <li>Your photographer (if possible)</li>
          </ul>

          <h2>4 Months Before: Skin Treatment Plan</h2>

          <h3>Start Your Facial Regiment</h3>
          <p><strong>Book series:</strong></p>
          <ul>
            <li>Monthly facials (4 total before wedding)</li>
            <li>Focus: Hydration, brightening, anti-aging</li>
            <li>Avoid aggressive treatments (peels, lasers) after this point</li>
          </ul>

          <p><strong>Recommended treatments in Lisbon:</strong></p>
          <ol>
            <li><strong>HydraFacial</strong> (€150): Deep cleanse + hydration</li>
            <li><strong>Microneedling</strong> (€200): Texture improvement</li>
            <li><strong>LED Therapy</strong> (€100): Collagen boost</li>
            <li><strong>Lymphatic Drainage</strong> (€120): De-puffing</li>
          </ol>

          <p><strong>At-home routine:</strong></p>
          <ul>
            <li>SPF 50+ daily (Lisbon sun is strong!)</li>
            <li>Vitamin C serum (morning)</li>
            <li>Retinol (evening, stop 1 month before)</li>
            <li>Weekly masks</li>
          </ul>

          <h2>3 Months Before: Hair Care Intensive</h2>

          <h3>Hair Health Boot Camp</h3>
          <p><strong>Color timeline:</strong></p>
          <ul>
            <li>Final major color change: NOW</li>
            <li>Touch-ups: 2 weeks before wedding</li>
            <li>Gloss/toner: 1 week before</li>
          </ul>

          <p><strong>Treatments to book:</strong></p>
          <ul>
            <li>Keratin or smoothing treatment (if planning)</li>
            <li>Deep conditioning sessions (monthly)</li>
            <li>Trim dead ends</li>
            <li>Test humidity protection products</li>
          </ul>

          <p><strong>For Lisbon's climate:</strong></p>
          <p>Lisbon can be humid near the Tagus River. If your wedding is May-September, prepare for:</p>
          <ul>
            <li>Anti-frizz serums</li>
            <li>Setting sprays (Elnett, Kenra)</li>
            <li>Bobby pins (lots!)</li>
            <li>Mini touch-up kit</li>
          </ul>

          <h2>2 Months Before: Trial Run #2</h2>

          <h3>Refined Hair & Makeup Trial</h3>
          <p><strong>Purpose:</strong> Perfect the final look</p>

          <p><strong>Changes from Trial #1:</strong></p>
          <ul>
            <li>Adjust based on feedback</li>
            <li>Test in similar lighting to venue</li>
            <li>Time the process (know exact duration)</li>
            <li>Photograph extensively</li>
            <li>Try on actual dress & veil</li>
          </ul>

          <p><strong>Document everything:</strong></p>
          <ul>
            <li>Photos from every angle</li>
            <li>List of products used</li>
            <li>Time breakdown</li>
            <li>What you loved/didn't love</li>
          </ul>

          <h2>Wedding Day: Hour-by-Hour Timeline</h2>

          <h3>For 4pm Wedding Ceremony</h3>

          <p><strong>7:00 AM - Wake Up</strong></p>
          <ul>
            <li>Light breakfast (avoid bloating)</li>
            <li>Start hydrating</li>
            <li>Take any vitamins/medications</li>
            <li>Shower & wash hair if needed</li>
          </ul>

          <p><strong>9:00 AM - Team Arrival</strong></p>
          <p>Beauty team sets up</p>

          <p><strong>9:15 AM - Hair Starts</strong></p>
          <ul>
            <li>Bride's hair: 1.5-2 hours</li>
            <li>While bride's hair dries: Start bridesmaids</li>
          </ul>

          <p><strong>10:45 AM - Makeup Begins</strong></p>
          <ul>
            <li>Bride's makeup: 1-1.5 hours</li>
            <li>Bridesmaids overlap</li>
          </ul>

          <p><strong>4:00 PM - Ceremony Time</strong></p>
          <p className="text-2xl font-serif text-gold">✨ You look absolutely perfect ✨</p>

          <h2>Lisbon-Specific Beauty Considerations</h2>

          <h3>Climate Challenges</h3>

          <p><strong>Summer Weddings (June-September):</strong></p>
          <ul>
            <li>Temperature: 25-35°C</li>
            <li>Humidity: Moderate-High near water</li>
            <li>Solutions: Waterproof everything, setting spray, oil-absorbing sheets</li>
          </ul>

          <p><strong>Spring/Fall (April-May, October):</strong></p>
          <ul>
            <li>Temperature: 15-25°C</li>
            <li>Ideal weather, less humidity</li>
            <li>Perfect for outdoor ceremonies</li>
          </ul>

          <h3>Best Wedding Venues & Their Beauty Needs</h3>

          <p><strong>Outdoor Venues (Quinta, Gardens):</strong></p>
          <ul>
            <li>Extra-hold hair products</li>
            <li>Waterproof makeup</li>
            <li>Sun protection</li>
            <li>Wind-resistant styles</li>
          </ul>

          <p><strong>Historic Buildings (Palaces, Monasteries):</strong></p>
          <ul>
            <li>Dramatic lighting</li>
            <li>Photo-ready makeup</li>
            <li>Elegant updos</li>
            <li>Classic beauty</li>
          </ul>

          <p><strong>Waterfront (Belém, Cascais):</strong></p>
          <ul>
            <li>Maximum hold products</li>
            <li>Ocean breeze preparation</li>
            <li>Luminous, dewy makeup</li>
            <li>Romantic waves</li>
          </ul>

          <h2>Common Wedding Beauty Mistakes to Avoid</h2>

          <h3>❌ DON'T:</h3>
          <ol>
            <li><strong>Try new products the week before</strong> - Risk of breakouts/reactions</li>
            <li><strong>Over-pluck eyebrows</strong> - They need time to grow</li>
            <li><strong>Get aggressive facial treatments</strong> - Redness takes time to fade</li>
            <li><strong>Skip makeup trial</strong> - Photos can look different than mirror</li>
            <li><strong>Forget about photos</strong> - What looks good in person might photograph differently</li>
            <li><strong>Neglect your neck & chest</strong> - Match makeup to dress</li>
            <li><strong>Go too bold or too nude</strong> - Find balance for photos</li>
            <li><strong>Rush the morning</strong> - Start early, allow buffer time</li>
          </ol>

          <h3>✅ DO:</h3>
          <ol>
            <li><strong>Bring reference photos</strong> - But trust your team's expertise</li>
            <li><strong>Test everything thoroughly</strong> - Including in different lighting</li>
            <li><strong>Communicate clearly</strong> - About style, comfort, concerns</li>
            <li><strong>Plan for touch-ups</strong> - Someone should hold emergency kit</li>
            <li><strong>Stay hydrated</strong> - Best beauty secret</li>
            <li><strong>Eat breakfast</strong> - Low blood sugar = fainting bride</li>
            <li><strong>Assign a coordinator</strong> - Someone to manage timeline</li>
            <li><strong>Enjoy the process</strong> - This is a special experience!</li>
          </ol>

          <h2>Why Use Good Hands for Your Wedding?</h2>

          <p>Planning beauty from abroad is stressful. We eliminate that stress.</p>

          <p><strong>What we provide:</strong></p>
          <ul>
            <li>✅ Personal beauty team matching</li>
            <li>✅ Coordinated trial sessions</li>
            <li>✅ Day-of timeline management</li>
            <li>✅ Quality guarantee</li>
            <li>✅ Multilingual support</li>
            <li>✅ Emergency backup plans</li>
            <li>✅ Local expert advice</li>
            <li>✅ Price transparency</li>
            <li>✅ One point of contact</li>
          </ul>

          <p className="text-xl font-serif">We've coordinated 100+ Lisbon weddings. Your beauty is in expert hands.</p>

          <div className="not-prose bg-gradient-to-br from-gold/10 via-shell to-porcelain p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-serif mb-4">Book Your Wedding Beauty Team</h3>
            <p className="text-harbor mb-6">
              Ready to look absolutely stunning on your Lisbon wedding day?
            </p>
            <Link href="/book" className="btn-gold">
              Start Planning Your Wedding Beauty
            </Link>
            <p className="text-sm text-harbor/70 mt-4">
              <strong>Bonus:</strong> Book your wedding package and receive complimentary rehearsal dinner beauty services, 20% off pre-wedding spa treatments, and next-day recovery spa session
            </p>
          </div>
        </div>
      </article>

      {/* Related Content */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/coastal-photoshoot-beauty-guide-lisbon" className="group bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">
                Coastal Photoshoot Beauty Guide
              </h3>
              <p className="text-harbor text-sm">
                Camera-ready hair & makeup for Lisbon's stunning coastal locations
              </p>
            </Link>

            <Link href="/experiences" className="group bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">
                Premium Wedding Packages
              </h3>
              <p className="text-harbor text-sm">
                Complete bridal beauty journey from trial to wedding day
              </p>
            </Link>
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
                item: 'https://goodhands.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Journal',
                item: 'https://goodhands.com/journal',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Wedding Beauty Timeline for Lisbon',
                item: 'https://goodhands.com/blog/lisbon-wedding-beauty-timeline',
              },
            ],
          }),
        }}
      />
    </div>
  )
}

