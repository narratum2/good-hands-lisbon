import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would come from a database or CMS in production
const articles = {
  'portuguese-beauty-rituals': {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by',
    date: 'October 1, 2025',
    author: {
      name: 'Maria Silva',
      bio: 'Beauty historian and Good Hands editorial director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    category: 'Traditions',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=2000&q=80',
    content: `
      <div class="editorial-content">
        <p class="lead-paragraph">
          Long before the age of synthetic cosmetics and complex beauty routines, Portuguese women developed 
          skincare rituals using ingredients from their gardens and coastlines. These time-tested traditions 
          remain remarkably relevant today.
        </p>

        <h2>The Mediterranean Glow Secret</h2>
        <p>
          In the sun-drenched villages of Portugal, women have long understood the power of olive oil. 
          Not just for cooking—extra virgin olive oil has been the cornerstone of Portuguese beauty for 
          generations. Rich in vitamins E and K, it nourishes skin deeply while protecting against the 
          harsh Mediterranean sun.
        </p>

        <blockquote class="editorial-quote">
          "My grandmother used olive oil for everything—from removing makeup to conditioning her hair. 
          At 85, her skin was luminous." - Maria Silva
        </blockquote>

        <h2>Rose Water: The Timeless Tonic</h2>
        <p>
          Portuguese gardens overflow with roses, and their petals have been transformed into healing 
          tonics for centuries. Rose water balances pH, reduces inflammation, and provides natural 
          hydration—properties now confirmed by modern dermatology.
        </p>

        <h3>How to Use Rose Water Like a Portuguese Beauty</h3>
        <ul>
          <li>Spritz on clean skin morning and evening</li>
          <li>Mix with clay masks for added hydration</li>
          <li>Use as a refreshing midday pick-me-up</li>
          <li>Add to bathwater for a luxurious soak</li>
        </ul>

        <h2>Sea Salt Scrubs: Atlantic Beauty</h2>
        <p>
          Living beside the Atlantic Ocean inspired Portuguese women to harness the purifying power of 
          sea salt. Combined with local olive oil and lemon, these scrubs exfoliate while mineralizing 
          the skin. The tradition continues in Lisbon's best spas today.
        </p>

        <h2>Modern Applications of Ancient Wisdom</h2>
        <p>
          Today's top Portuguese skincare professionals blend these traditional ingredients with modern 
          techniques. At Good Hands, we connect you with estheticians who honor these rituals while 
          incorporating cutting-edge treatments.
        </p>

        <div class="cta-section">
          <h3>Experience Authentic Portuguese Beauty</h3>
          <p>
            Let us match you with skincare professionals who practice these timeless traditions. 
            Our concierge service ensures you get the authentic Portuguese beauty experience—
            no research required.
          </p>
          <a href="/#booking" class="btn-primary">Book Your Treatment</a>
        </div>
      </div>
    `,
    relatedArticles: ['summer-skincare-mediterranean', 'lisbon-hidden-gems', 'signature-scent-lisbon'],
  },
  'wedding-beauty-timeline': {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day',
    date: 'September 28, 2025',
    author: {
      name: 'Sofia Martins',
      bio: 'Bridal beauty specialist at Good Hands',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
    category: 'Weddings',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=2000&q=80',
    content: `
      <div class="editorial-content">
        <p class="lead-paragraph">
          Planning a wedding in Lisbon? Your beauty timeline starts six months before the big day. 
          As your personal beauty concierge, we've created the ultimate countdown to ensure you're 
          glowing on your wedding day.
        </p>

        <h2>6 Months Out: The Foundation</h2>
        <p>
          Start with a comprehensive skin consultation. Understanding your skin type, concerns, and 
          goals allows your esthetician to create a customized treatment plan. This is also the time 
          to trial hair and makeup looks.
        </p>

        <h3>6-Month Checklist</h3>
        <ul>
          <li>Professional skin analysis</li>
          <li>Begin customized facial treatments (monthly)</li>
          <li>Schedule hair coloring trial</li>
          <li>Start hair and nail strengthening treatments</li>
          <li>Consider body contouring or cellulite treatments</li>
        </ul>

        <h2>3 Months Out: Intensify and Refine</h2>
        <p>
          Increase treatment frequency. Your skin should be responding well to your routine by now. 
          This is when we fine-tune everything from your hair color to your skincare regimen.
        </p>

        <blockquote class="editorial-quote">
          "The secret to wedding day glow isn't a single treatment—it's consistent care over months. 
          That's why we start early." - Sofia Martins
        </blockquote>

        <h2>1 Month Out: Polish and Perfect</h2>
        <p>
          No major changes now! This month is about maintaining results and adding final touches. 
          Your last haircut should be 2-3 weeks before the wedding, giving it time to settle perfectly.
        </p>

        <h2>Wedding Week: The Final Countdown</h2>
        <p>
          Monday through Wednesday are for maintenance—facial, final nail shaping, eyebrow grooming. 
          Thursday and Friday should be relaxation only. Your wedding day appointments should feel 
          like pampering, not preparation.
        </p>

        <h3>Day-Of Timeline</h3>
        <div class="timeline">
          <p><strong>4-5 hours before:</strong> Hair styling begins</p>
          <p><strong>2-3 hours before:</strong> Makeup application</p>
          <p><strong>1 hour before:</strong> Final touch-ups and dress</p>
        </div>

        <div class="cta-section">
          <h3>Let Good Hands Handle Your Bridal Beauty</h3>
          <p>
            We coordinate every appointment, every treatment, and every professional. You focus on 
            being a bride—we'll make sure you're the most beautiful one Lisbon has ever seen.
          </p>
          <a href="/premium/weddings" class="btn-primary">Explore Wedding Packages</a>
        </div>
      </div>
    `,
    relatedArticles: ['portuguese-beauty-rituals', 'signature-scent-lisbon'],
  },
}

type ArticleSlug = keyof typeof articles

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const article = articles[params.slug as ArticleSlug]
  
  if (!article) {
    return {
      title: 'Article Not Found — Good Hands',
    }
  }

  return {
    title: `${article.title} — Good Hands Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as ArticleSlug]

  if (!article) {
    notFound()
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container-custom pb-16 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="px-3 py-1 bg-gold text-ink rounded-sm font-medium">
                {article.category}
              </span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-balance">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-porcelain/90 mb-6 text-balance">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Author Info */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-harbor/10">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={article.author.image}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-ink">{article.author.name}</p>
              <p className="text-sm text-harbor">{article.author.bio}</p>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {article.relatedArticles.slice(0, 3).map((slug) => {
              const related = articles[slug as ArticleSlug]
              if (!related) return null
              
              return (
                <Link
                  key={slug}
                  href={`/journal/${slug}`}
                  className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.heroImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider text-gold font-medium">
                      {related.category}
                    </span>
                    <h3 className="text-xl font-serif mt-2 mb-2 group-hover:text-gold transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-harbor">{related.readTime}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Experience Good Hands?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8">
            Let our concierge service match you with the perfect beauty professional. 
            No more guesswork, just perfect results.
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Your Service
          </Link>
        </div>
      </section>

      {/* JSON-LD for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: article.heroImage,
            datePublished: article.date,
            author: {
              '@type': 'Person',
              name: article.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Good Hands',
              logo: {
                '@type': 'ImageObject',
                url: 'https://goodhands.com/logo.png',
              },
            },
          }),
        }}
      />
    </div>
  )
}

