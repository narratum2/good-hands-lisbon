import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Makeup Knowledge Base — Complete Guide to Professional Makeup in Lisbon | Good Hands',
  description: 'Comprehensive makeup knowledge base: techniques, trends, product recommendations, skin types, application tips, and expert advice. Your complete resource for makeup in Lisbon.',
  keywords: ['makeup guide', 'makeup techniques', 'makeup trends', 'makeup products', 'makeup tips', 'professional makeup', 'Lisbon makeup'],
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

const makeupFAQ = [
  {
    question: 'What is professional makeup?',
    answer: 'Professional makeup is the application of cosmetics by trained artists using industry-standard techniques and products. It includes color correction, contouring, highlighting, eye makeup, lip application, and setting techniques designed to look flawless in person and on camera.',
  },
  {
    question: 'What makes makeup look professional?',
    answer: 'Professional makeup requires: proper skin preparation and primer, color correction for uneven skin tone, foundation matching your exact skin tone and undertone, seamless blending of all products, contouring and highlighting for dimension, setting techniques for longevity, and products that photograph well without flashback.',
  },
  {
    question: 'How long does professional makeup last?',
    answer: 'Professional makeup can last 8-12 hours with proper application and setting. For special events like weddings, professional artists use long-wear formulas, setting sprays, and touch-up kits. Factors affecting longevity include skin type, weather conditions, and activity level.',
  },
  {
    question: 'What is bridal makeup?',
    answer: 'Bridal makeup is specialized wedding day makeup designed to last 12+ hours, photograph beautifully, and withstand emotions, tears, dancing, and kissing. It typically includes a trial session, long-wear formulas, photography-tested products, and a touch-up kit. Styles range from natural to glamorous based on the bride\'s preference.',
  },
  {
    question: 'What is editorial makeup?',
    answer: 'Editorial makeup is artistic, fashion-forward makeup for photoshoots, magazines, and creative projects. It emphasizes creativity, bold colors, graphic elements, and avant-garde techniques. Editorial makeup is designed to be photographed and often pushes creative boundaries beyond everyday wear.',
  },
  {
    question: 'What makeup techniques do professional artists use?',
    answer: 'Key techniques include: color correction (neutralizing discoloration), stippling (creating airbrushed texture), baking (setting under-eye concealer), contouring (sculpting facial features), cut crease (defining eye shape), winged eyeliner (elongating eyes), and ombre lips (gradient lip color).',
  },
  {
    question: 'How do I choose the right foundation shade?',
    answer: 'Match foundation to your jawline or neck, test in natural light, consider undertones (warm, cool, or neutral), test multiple shades side-by-side, and remember that foundation should match your body, not just your face. Professional artists use color-matching tools for precision.',
  },
  {
    question: 'What is the difference between natural and glam makeup?',
    answer: 'Natural makeup enhances features subtly with minimal products for a "no-makeup" look. Glam makeup is full-coverage with defined eyes, contoured features, and bold lips for a dramatic, camera-ready appearance. Professional artists can create any style from minimal to maximum.',
  },
  {
    question: 'Can professional makeup work for all skin types?',
    answer: 'Yes. Professional artists adapt techniques and products for oily, dry, combination, sensitive, and mature skin. They use appropriate primers, foundations, and setting techniques. Some artists specialize in specific skin types or conditions like acne, rosacea, or hyperpigmentation.',
  },
  {
    question: 'What products do professional makeup artists use?',
    answer: 'Professionals use high-quality brands like MAC, NARS, Bobbi Brown, Make Up For Ever, and Charlotte Tilbury. Key products include: color-correcting concealers, long-wear foundations, setting powders and sprays, professional eyeshadows and liners, and photography-safe highlighters.',
  },
  {
    question: 'How much does professional makeup cost in Lisbon?',
    answer: 'In Lisbon, professional makeup ranges from €70-€400+ depending on the service. Event makeup starts at €70-€85, bridal makeup from €150-€400 (includes trial), makeup lessons from €120-€200, and editorial makeup from €100-€600. Group services often offer discounts.',
  },
  {
    question: 'Do makeup artists provide the products?',
    answer: 'Professional makeup artists typically bring a complete kit with sanitized brushes and premium products. For lessons or consultations, you can use your products or theirs. Some artists charge extra for premium products or specific requests.',
  },
  {
    question: 'What should I do before my makeup appointment?',
    answer: 'Arrive with clean, moisturized skin. Avoid heavy creams or oils. Bring inspiration photos if desired. Communicate any allergies or skin sensitivities. For bridal makeup, complete your hair styling first. Arrive on time and allow 60-90 minutes for full application.',
  },
  {
    question: 'Can makeup artists do makeup for photoshoots?',
    answer: 'Yes. Editorial and fashion makeup artists specialize in photoshoots. They understand lighting, camera angles, and how makeup translates on camera. They use photography-safe products without SPF (to avoid flashback) and techniques that enhance features for photography.',
  },
  {
    question: 'What is a makeup trial session?',
    answer: 'A makeup trial is a practice session before your event, typically 60-90 minutes. The artist tests products, techniques, and styles to perfect your look. Trials are essential for bridal makeup and recommended for special events. Photos are taken for reference.',
  },
  {
    question: 'How do I find a good makeup artist in Lisbon?',
    answer: 'Look for: portfolio showcasing work similar to your desired style, positive reviews from previous clients, experience with your skin type and tone, availability for your date and location, clear pricing and package details, and professional certifications or training. Good Hands concierge matches you with vetted artists.',
  },
]

export default function MakeupKnowledgeBasePage() {
  return (
    <div className="pt-20 bg-white">
      <div className="container-custom max-w-5xl py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Makeup Knowledge Base
          </h1>
          <p className="text-xl text-harbor max-w-3xl mx-auto leading-relaxed">
            Complete guide to professional makeup: techniques, trends, products, application tips, and expert advice. 
            Your comprehensive resource for all things makeup in Lisbon.
          </p>
          <p className="text-sm text-harbor/70 mt-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {/* Comprehensive FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Frequently Asked Questions About Makeup
          </h2>
          <div className="space-y-8">
            {makeupFAQ.map((faq, index) => (
              <article
                key={index}
                className="border-b border-gray-light pb-8 last:border-b-0"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="text-xl md:text-2xl font-semibold mb-4 text-ink"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  className="text-harbor leading-relaxed"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Makeup Types & Styles */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Types of Professional Makeup
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-shell p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Bridal Makeup</h3>
              <p className="text-harbor mb-3">
                Wedding day makeup designed for longevity and photography. Includes trial session, long-wear formulas, 
                and touch-up kits. Styles range from natural to glamorous.
              </p>
              <ul className="text-harbor text-sm space-y-1">
                <li>• Trial session included</li>
                <li>• 12+ hour longevity</li>
                <li>• Photography-optimized</li>
                <li>• On-location service</li>
              </ul>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Event Makeup</h3>
              <p className="text-harbor mb-3">
                Professional makeup for parties, dinners, galas, or special occasions. Tailored to your style, 
                event type, and outfit. 8-10 hour wear.
              </p>
              <ul className="text-harbor text-sm space-y-1">
                <li>• Customized to occasion</li>
                <li>• 8-10 hour wear</li>
                <li>• Touch-up kit included</li>
                <li>• Flexible scheduling</li>
              </ul>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Editorial Makeup</h3>
              <p className="text-harbor mb-3">
                Creative, fashion-forward makeup for photoshoots, magazines, and artistic projects. Bold colors, 
                graphic elements, and avant-garde techniques.
              </p>
              <ul className="text-harbor text-sm space-y-1">
                <li>• Creative and artistic</li>
                <li>• Photography-focused</li>
                <li>• Collaborative process</li>
                <li>• Portfolio-worthy looks</li>
              </ul>
            </div>

            <div className="bg-shell p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Makeup Lessons</h3>
              <p className="text-harbor mb-3">
                Personalized instruction to learn professional techniques. Covers color matching, application methods, 
                product recommendations, and face-specific tips.
              </p>
              <ul className="text-harbor text-sm space-y-1">
                <li>• Hands-on learning</li>
                <li>• Product recommendations</li>
                <li>• Take-home guide</li>
                <li>• Video recording option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Techniques */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Essential Professional Makeup Techniques
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Color Correction</h3>
              <p className="text-harbor">
                Using complementary colors to neutralize discoloration. Green cancels redness, peach/orange cancels 
                dark circles, yellow cancels purple, and lavender cancels yellow. Applied before foundation for seamless coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contouring & Highlighting</h3>
              <p className="text-harbor">
                Creating dimension by shadowing (contouring) and illuminating (highlighting) specific areas. 
                Defines cheekbones, jawline, nose, and creates the illusion of higher cheekbones and a more defined face shape.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Baking</h3>
              <p className="text-harbor">
                Applying setting powder heavily and letting it sit for 5-10 minutes before brushing off. 
                Creates flawless, crease-free under-eye area and sets makeup for maximum longevity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cut Crease</h3>
              <p className="text-harbor">
                Defining the crease of the eyelid with a sharp line, creating depth and drama. Popular in glam 
                and editorial looks. Requires precise application and blending.
              </p>
            </div>
          </div>
        </section>

        {/* Products & Brands */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Professional Makeup Products
          </h2>
          <div className="bg-shell p-8 rounded-lg">
            <p className="text-harbor mb-6">
              Professional makeup artists use high-quality, long-wear products from trusted brands:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Foundation Brands</h3>
                <ul className="text-harbor space-y-1 text-sm">
                  <li>• MAC Cosmetics Studio Fix</li>
                  <li>• NARS Natural Radiant Longwear</li>
                  <li>• Make Up For Ever HD Foundation</li>
                  <li>• Estée Lauder Double Wear</li>
                  <li>• Fenty Beauty Pro Filt'r</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Eye & Lip Products</h3>
                <ul className="text-harbor space-y-1 text-sm">
                  <li>• Urban Decay Eyeshadows</li>
                  <li>• Anastasia Beverly Hills Brow Products</li>
                  <li>• Stila Liquid Liners</li>
                  <li>• Charlotte Tilbury Lipsticks</li>
                  <li>• Pat McGrath Labs Palettes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gold/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-serif mb-4">
            Ready for Professional Makeup?
          </h2>
          <p className="text-harbor mb-6">
            Let Good Hands match you with Lisbon's top makeup artists. Expert matching, portfolio-vetted professionals, 
            premium products, and seamless booking.
          </p>
          <a
            href="/book"
            className="btn-primary inline-block"
          >
            Request Makeup Service
          </a>
        </section>

        {/* Structured Data - FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: makeupFAQ.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        {/* Structured Data - Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Makeup Knowledge Base — Complete Guide to Professional Makeup',
              description: 'Comprehensive makeup knowledge base covering techniques, trends, products, and expert advice.',
              author: {
                '@type': 'Organization',
                name: 'Good Hands',
                url: 'https://goodhands.com',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Good Hands',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://goodhands.com/brand-assets/logo/logo-primary.svg',
                },
              },
              datePublished: new Date().toISOString(),
              dateModified: new Date().toISOString(),
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://goodhands.com/makeup-knowledge-base',
              },
            }),
          }}
        />
      </div>
    </div>
  )
}

