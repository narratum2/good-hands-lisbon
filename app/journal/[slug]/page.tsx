import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticle, getRelatedArticles, getAllArticles } from '@/lib/articles'
import ArticleContent from '@/components/ArticleContent'
import { Article, StructuredData } from '@/types/article'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticle(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found — Good Hands',
      description: 'The requested article could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const url = `https://beautysalonlisbon.com/journal/${article.slug}`
  const ogImage = article.image?.startsWith('http') ? article.image : `https://beautysalonlisbon.com${article.image || '/images/default-blog.jpg'}`

  return {
    title: `${article.title} — Good Hands Journal`,
    description: article.excerpt,
    keywords: article.tags?.join(', '),
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url,
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      siteName: 'Good Hands',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(params.slug, 3)

  // Generate structured data
  const structuredData: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image?.startsWith('http') ? article.image : `https://beautysalonlisbon.com${article.image || '/images/default-blog.jpg'}`,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name,
      description: article.author.bio,
      ...(article.author.social && {
        sameAs: Object.values(article.author.social).filter(Boolean)
      }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Good Hands',
      url: 'https://beautysalonlisbon.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://beautysalonlisbon.com/brand-assets/logo/logo-primary.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://beautysalonlisbon.com/journal/${article.slug}`,
    },
    ...(article.tags && {
      keywords: article.tags.join(', '),
    }),
  }

  return (
    <article className="pt-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      {/* Article Header */}
      <header className="bg-white">
        <div className="container-custom max-w-4xl py-12">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="text-xs uppercase tracking-wider text-gold font-medium">
              {article.category}
            </span>
            <span className="text-sm text-harbor">{article.date}</span>
            {article.readTime && (
              <>
                <span className="text-harbor">•</span>
                <span className="text-sm text-harbor">{article.readTime}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8" style={{ letterSpacing: '-0.02em', lineHeight: '1.1', color: 'var(--black)' }}>
            {article.title}
          </h1>
          
          <p className="text-xl font-light mb-8" style={{ lineHeight: '1.7', color: 'var(--gray-dark)', maxWidth: '65ch' }}>
            {article.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pt-8 border-t border-harbor/20">
            {article.author.avatar ? (
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-white font-bold text-lg"
                role="img"
                aria-label={`${article.author.name || 'Author'}'s avatar`}
              >
                {article.author.name?.charAt(0) || 'A'}
              </div>
            )}
            <div>
              <p className="font-semibold text-ink">{article.author.name}</p>
              <p className="text-sm text-harbor">{article.author.bio}</p>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-porcelain text-harbor text-sm rounded-full hover:bg-gold/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="bg-white py-16">
        <div className="container-custom" style={{ maxWidth: '680px' }}>
          <ArticleContent content={article.content} />

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-white rounded-lg border border-gold/20 shadow-sm">
            <h3 className="text-2xl font-serif text-ink mb-3">
              Try These Treatments
            </h3>
            <p className="text-harbor mb-4">
              We work with professionals who actually know these techniques.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-medium"
            >
              Book a Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16" aria-labelledby="related-articles">
        <div className="container-custom max-w-6xl">
            <h2 id="related-articles" className="text-3xl font-serif mb-8">
              Continue Reading
            </h2>
          <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/journal/${relatedArticle.slug}`}
                  className="group block focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-lg"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gold font-medium block mb-2">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-xl font-serif group-hover:text-gold transition-colors">
                    {relatedArticle.title}
                  </h3>
                  {relatedArticle.readTime && (
                    <span className="text-sm text-harbor mt-1 block">
                      {relatedArticle.readTime}
                    </span>
                  )}
                </Link>
              ))}
          </div>
        </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-ink text-white py-16" aria-labelledby="cta-heading">
        <div className="container-custom max-w-4xl text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Experience Lisbon's Beauty Scene?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us be your guide to the city's best beauty professionals
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-gold hover:bg-gold/90 text-ink font-semibold px-8 py-4 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
          >
            Request Your Experience
          </Link>
        </div>
      </section>
    </article>
  )
}

// Generate static pages for all articles at build time
export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }))
}

