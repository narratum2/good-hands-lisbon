import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would eventually come from Notion API
const articles: { [key: string]: any } = {
  'portuguese-beauty-rituals': {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by.',
    content: `
      <p class="lead-paragraph">For centuries, Portuguese women have passed down beauty secrets through generations—rituals rooted in the Mediterranean landscape, using ingredients from olive groves, rose gardens, and Atlantic shores.</p>

      <h2>The Olive Oil Foundation</h2>
      <p>Long before luxury skincare brands discovered the power of olive oil, Portuguese grandmothers were using it as a daily beauty essential. Extra virgin olive oil, rich in antioxidants and vitamins, serves as a cleanser, moisturizer, and hair treatment.</p>

      <blockquote>"My grandmother taught me to massage warm olive oil into my scalp every Sunday. At 65, her hair is still thick and shiny." — Maria, Lisbon native</blockquote>

      <h3>Modern Application</h3>
      <p>Today's Portuguese beauty professionals have refined these traditions. At salons across Chiado and Príncipe Real, you'll find treatments combining cold-pressed olive oil with modern techniques—hot oil scalp massages that stimulate growth while deeply nourishing.</p>

      <h2>Rose Water Tonics</h2>
      <p>Portuguese rose water, distilled from blooms grown in the Alentejo region, has been a skincare staple since the 16th century. Its anti-inflammatory properties make it perfect for Lisbon's summer sun.</p>

      <p><strong>How to use it:</strong> After cleansing, mist rose water over your face. Follow with your regular moisturizer. The tonic balances pH and preps skin for better product absorption.</p>

      <h2>Sea Salt Scrubs</h2>
      <p>Living beside the Atlantic Ocean, Portuguese women discovered that sea salt mixed with olive oil creates the perfect body exfoliant. The minerals in Portuguese sea salt—harvested from salt pans in Aveiro and the Algarve—are particularly beneficial for skin health.</p>

      <h3>DIY Portuguese Salt Scrub</h3>
      <ul>
        <li>½ cup Portuguese sea salt (coarse)</li>
        <li>¼ cup extra virgin olive oil</li>
        <li>10 drops lavender essential oil</li>
        <li>Zest of 1 lemon</li>
      </ul>
      <p>Mix ingredients and use once weekly on damp skin before showering.</p>

      <h2>The Azulejo Facial Massage</h2>
      <p>Inspired by the flowing patterns of Portuguese azulejo tiles, this facial massage technique uses upward and outward strokes to promote lymphatic drainage and natural lifting. Several spas in Alfama now offer this signature treatment.</p>

      <h2>Modern Interpretations</h2>
      <p>Today's Portuguese beauty professionals honor these traditions while incorporating scientific advances. At Good Hands, we work with experts who blend ancestral wisdom with modern techniques—creating treatments that are both authentic and effective.</p>

      <div class="cta-box">
        <h3>Experience Portuguese Beauty Traditions</h3>
        <p>Book a consultation with one of our traditional beauty experts to learn which rituals work best for your skin and hair type.</p>
      </div>
    `,
    image: '/brand-images/service-makeup-application.png',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    authorBio: 'Maria is a beauty historian and consultant specializing in Portuguese traditional beauty practices.',
  },
  'wedding-beauty-timeline': {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day.',
    content: `
      <p class="lead-paragraph">Planning a wedding in Lisbon? Your beauty preparation timeline is just as important as choosing your venue. Here's your month-by-month guide to looking radiant on your big day.</p>

      <h2>6 Months Before: The Foundation</h2>
      <h3>Schedule Your Skin Consultation</h3>
      <p>Meet with a dermatologist or esthetician for a comprehensive skin analysis. This is when you'll develop your pre-wedding skincare routine.</p>

      <ul>
        <li><strong>Book facials:</strong> Schedule monthly treatments leading up to your wedding</li>
        <li><strong>Address concerns:</strong> Start treating acne, hyperpigmentation, or texture issues</li>
        <li><strong>Establish routine:</strong> Commit to a daily regimen that works for your skin</li>
      </ul>

      <h3>Research Hair & Makeup Artists</h3>
      <p>In Lisbon's competitive bridal market, top artists book 6-12 months in advance. Start researching and reach out for consultations.</p>

      <h2>4-5 Months Before: Trial Runs Begin</h2>
      <h3>Hair Styling Trial</h3>
      <p>Book your first hair trial. Bring inspiration photos, your veil or hair accessories, and photos of your dress neckline. Try at least 2-3 styles.</p>

      <blockquote>"The first trial is rarely the final look. Give yourself time to experiment and adjust." — Sofia, Bridal Hair Specialist</blockquote>

      <h3>Start Hair Treatments</h3>
      <p>If you're planning to color, highlight, or treat your hair, begin the process now. This allows time for adjustments and healthy hair recovery.</p>

      <h2>3 Months Before: Makeup Trial</h2>
      <h3>Your First Makeup Trial</h3>
      <p>Schedule this for mid-morning so you can wear the look all day and see how it photographs. Take photos in different lighting.</p>

      <p><strong>What to bring:</strong></p>
      <ul>
        <li>Inspiration photos (but be realistic)</li>
        <li>A photo of your dress</li>
        <li>Your jewelry if you've chosen it</li>
        <li>A white shirt (to avoid staining your clothes)</li>
      </ul>

      <h3>Nail Care Begins</h3>
      <p>Start regular manicures to strengthen nails and perfect your shape. If you bite your nails, now's the time to stop.</p>

      <h2>2 Months Before: Refinements</h2>
      <h3>Final Hair & Makeup Trials</h3>
      <p>This is your chance to refine any details. Consider booking a combined trial so you see the complete look together.</p>

      <h3>Body Treatments</h3>
      <p>Start any body treatments you're considering—fake tanning trials, body exfoliation, or toning treatments.</p>

      <h3>Teeth Whitening</h3>
      <p>If you're whitening your teeth, do it now. This allows time for any sensitivity to resolve before your wedding day.</p>

      <h2>1 Month Before: Final Prep</h2>
      <h3>Last Facial</h3>
      <p>Schedule your final facial 2-3 weeks before the wedding. <strong>Never</strong> try a new treatment this close to your wedding.</p>

      <h3>Waxing & Eyebrows</h3>
      <p>Get eyebrows shaped and any waxing done at least 1 week before the wedding to allow redness to subside.</p>

      <h3>Spray Tan Trial</h3>
      <p>If you're getting a spray tan, do a trial now to ensure you like the color and know how it will fade.</p>

      <h2>The Week Before</h2>
      <h3>Final Appointments</h3>
      <ul>
        <li><strong>Monday:</strong> Manicure (if you prefer a week-old look)</li>
        <li><strong>Tuesday:</strong> Any final waxing</li>
        <li><strong>Thursday:</strong> Hair treatment or gloss</li>
        <li><strong>Friday:</strong> Pedicure and fresh manicure</li>
        <li><strong>Saturday:</strong> Final spray tan (if doing one)</li>
      </ul>

      <h3>What NOT to Do</h3>
      <p class="warning">❌ No new skincare products<br>
      ❌ No extractions or aggressive treatments<br>
      ❌ No drastic hair color changes<br>
      ❌ No extreme diets (can affect your skin)</p>

      <h2>The Day Before</h2>
      <h3>Relaxation is Key</h3>
      <p>Get a good night's sleep. Drink plenty of water. Do a gentle face mask if you've been using one regularly. Avoid alcohol—it dehydrates skin.</p>

      <h3>Prepare Your Hair</h3>
      <p>Wash your hair the night before if that's what your stylist recommended. Some updos hold better on day-old hair.</p>

      <h2>Wedding Day Morning</h2>
      <h3>Skincare Routine</h3>
      <p>Stick to your usual routine. Apply a hydrating mask while you eat breakfast, then moisturize well. Let it absorb for 30 minutes before makeup begins.</p>

      <h3>Timeline Example</h3>
      <ul>
        <li><strong>8:00 AM:</strong> Beauty team arrives</li>
        <li><strong>8:30 AM:</strong> Bridesmaids begin</li>
        <li><strong>10:30 AM:</strong> Bride's hair starts</li>
        <li><strong>11:30 AM:</strong> Bride's makeup begins</li>
        <li><strong>12:30 PM:</strong> Final touches and photos</li>
      </ul>

      <div class="cta-box">
        <h3>Let Us Coordinate Your Wedding Beauty</h3>
        <p>Our wedding packages handle every detail of your beauty timeline, from first consultation to final touch-up. <a href="/#booking">Learn more about our wedding services →</a></p>
      </div>
    `,
    image: '/brand-images/blog-wedding-timeline.png',
    date: 'September 28, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    authorBio: 'Sofia is a bridal beauty specialist with over 10 years of experience coordinating weddings in Lisbon.',
  },
  'lisbon-hidden-gems': {
    title: "Lisbon's Hidden Beauty Gems",
    excerpt: "Under-the-radar salons and spas that locals treasure.",
    content: `
      <p class="lead-paragraph">Beyond the obvious luxury spas and well-known salons, Lisbon harbors secret beauty spots that locals guard jealously. After years of vetting hundreds of beauty professionals, we're sharing our favorite hidden gems.</p>

      <h2>Atelier das Flores (Príncipe Real)</h2>
      <p>Tucked in a converted 18th-century townhouse, this intimate salon specializes in organic color treatments using plant-based dyes. Owner Rita trained in Paris but returned to Lisbon to create something uniquely Portuguese.</p>

      <p><strong>What makes it special:</strong> Custom color formulations using Portuguese botanicals. No two clients get exactly the same shade.</p>

      <p><strong>Book for:</strong> Organic hair color, balayage using natural pigments<br>
      <strong>Price range:</strong> €€€<br>
      <strong>Must-know:</strong> Cash only, book 2-3 weeks ahead</p>

      <h2>Cabine Secreta (Alfama)</h2>
      <p>There's no sign on the door—you have to know which blue door to knock on in Alfama's winding streets. Inside, Maria Luísa practices traditional Portuguese facial massage techniques passed down through four generations.</p>

      <p><strong>Signature treatment:</strong> The "Azulejo Facial" uses movements inspired by traditional tile patterns to promote lymphatic drainage.</p>

      <p><strong>Book for:</strong> Facial treatments, face massage<br>
      <strong>Price range:</strong> €€<br>
      <strong>Must-know:</strong> Portuguese only, Maria's daughter translates for English speakers</p>

      <h2>Studio Mãos de Ouro (Chiado)</h2>
      <p>This nail salon above a vintage bookshop is where Lisbon's fashion insiders get their manicures. Catarina specializes in minimalist nail art and knows every client's aesthetic intimately.</p>

      <p><strong>What makes it special:</strong> Bespoke nail art that actually suits your lifestyle and style—not Instagram trends.</p>

      <p><strong>Book for:</strong> Manicures, pedicures, subtle nail art<br>
      <strong>Price range:</strong> €€<br>
      <strong>Must-know:</strong> Afternoon tea service while you wait for polish to dry</p>

      <h2>Casa da Beleza Antiga (Graça)</h2>
      <p>This family-run spot has operated since 1952. The vintage equipment and original tilework create an atmosphere unchanged by time, but the techniques are thoroughly modern.</p>

      <p><strong>Signature service:</strong> Hot oil hair treatments using recipes from the 1950s (they work).</p>

      <p><strong>Book for:</strong> Classic blowouts, hot oil treatments<br>
      <strong>Price range:</strong> €<br>
      <strong>Must-know:</strong> Go for the experience and the history</p>

      <h2>Hammam Lisboa (Mouraria)</h2>
      <p>Lisbon's only authentic Moroccan hammam, run by a family who moved from Marrakech. The traditional scrub-down is intense but leaves skin baby-soft.</p>

      <p><strong>What makes it special:</strong> Authentic black soap and kessa glove exfoliation followed by argan oil massage.</p>

      <p><strong>Book for:</strong> Hammam ritual, body scrubs<br>
      <strong>Price range:</strong> €€<br>
      <strong>Must-know:</strong> Bring old underwear—it gets wet</p>

      <h2>How to Book These Hidden Gems</h2>
      <p>Most don't have websites or online booking. Some don't even have phones. That's where we come in.</p>

      <p><strong>As your concierge, we:</strong></p>
      <ul>
        <li>Have direct relationships with every secret spot in Lisbon</li>
        <li>Can book you into places that normally don't accept new clients</li>
        <li>Brief you on expectations and etiquette for each unique spot</li>
        <li>Handle all communication (especially important where English isn't spoken)</li>
      </ul>

      <div class="cta-box">
        <h3>Access Lisbon's Secret Beauty World</h3>
        <p>Let us open doors to Lisbon's most exclusive and under-the-radar beauty experiences. <a href="/#booking">Book a consultation →</a></p>
      </div>
    `,
    image: '/brand-images/hero-salon-interior.png',
    date: 'September 25, 2025',
    category: 'City Guide',
    author: 'Good Hands Team',
    authorBio: 'Our team of beauty scouts discover and vet the best professionals across Lisbon.',
  }
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles[params.slug]
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Good Hands Journal`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <article className="pt-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      {/* Article Header */}
      <div className="bg-white">
        <div className="container-custom max-w-4xl py-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-wider text-gold font-medium">
              {article.category}
            </span>
            <span className="text-sm text-harbor">{article.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-harbor mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 pt-8 border-t border-harbor/20">
            <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-white font-bold">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-ink">{article.author}</p>
              <p className="text-sm text-harbor">{article.authorBio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-porcelain py-16">
        <div className="container-custom max-w-3xl">
          <div 
            className="editorial-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-white py-16">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-serif mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedArticle]) => (
                <Link
                  key={slug}
                  href={`/journal/${slug}`}
                  className="group block"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gold font-medium">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-xl font-serif mt-2 group-hover:text-gold transition-colors">
                    {relatedArticle.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink text-white py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Experience Lisbon's Beauty Scene?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us be your guide to the city's best beauty professionals
          </p>
          <Link href="/#booking" className="btn-primary bg-gold hover:bg-gold/90">
            Book Your Experience
          </Link>
        </div>
      </div>
    </article>
  )
}

// Generate static pages for all articles
export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}
