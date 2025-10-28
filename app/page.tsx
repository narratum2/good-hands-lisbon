import HeroModern from '@/components/HeroModern'
import SearchBar from '@/components/SearchBar'
import ValueProposition from '@/components/ValueProposition'
import Services from '@/components/Services'
import CategoriesRow from '@/components/CategoriesRow'
import ExperiencesPreview from '@/components/ExperiencesPreview'
import GuidesPreview from '@/components/GuidesPreview'
import JournalPreview from '@/components/JournalPreview'
import FAQExpanded from '@/components/FAQExpanded'
import TestimonialsEnhanced from '@/components/TestimonialsEnhanced'
import TrustSignals from '@/components/TrustSignals'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeroModern />
      
      {/* Trust Signals - Stats & Partner Badges */}
      <TrustSignals />
      
      {/* Simplified - No parallax for better performance and readability */}
      <ValueProposition />
      
      <SearchBar />
      
      <Services />
      
      <CategoriesRow />
      
      <ExperiencesPreview />
      
      <TestimonialsEnhanced />
      
      <GuidesPreview />
      
      <JournalPreview />
      
      <FAQExpanded />
      
      {/* Final CTA - Fixed High Contrast Design */}
      <section className="section-padding text-center" style={{ backgroundColor: 'var(--black)' }}>
        <div className="container-custom max-w-4xl">
          {/* Eyebrow */}
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-10 font-semibold"
            style={{ color: 'var(--gold)' }}
          >
            Ready to Book
          </p>
          
          {/* High Contrast Headline */}
          <h2 
            className="text-5xl md:text-7xl font-serif mb-10 font-light"
            style={{ 
              letterSpacing: '-0.02em',
              color: 'var(--off-white)'
            }}
          >
            Book Your Appointment
          </h2>
          
          {/* High Contrast Subheading */}
          <p 
            className="text-lg md:text-xl mb-16 leading-relaxed font-light max-w-2xl mx-auto"
            style={{ color: 'rgba(250, 250, 248, 0.85)' }}
          >
            Let us connect you with the perfect professional.
            <br />
            Seamless booking. Exceptional results.
          </p>
          
          {/* High Visibility CTA Button */}
          <Link 
            href="/book" 
            className="inline-block px-12 py-5 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--black)',
              letterSpacing: '0.2em'
            }}
          >
            Request Consultation
          </Link>
          
          {/* High Contrast Footer Text */}
          <p 
            className="text-xs mt-10 uppercase tracking-[0.2em] font-semibold"
            style={{ color: 'rgba(250, 250, 248, 0.5)' }}
          >
            Confirmation within 2 hours
          </p>
        </div>
      </section>
    </>
  )
}
