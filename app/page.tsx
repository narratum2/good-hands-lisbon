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
      
      {/* Final Booking CTA - VOGUE SOPHISTICATION */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 font-light" style={{ letterSpacing: '-0.02em' }}>
            Book Your Appointment
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-14 leading-relaxed font-light max-w-2xl mx-auto">
            Let us connect you with the perfect professional. 
            Seamless booking. Exceptional results.
          </p>
          <Link href="/book" className="btn-gold inline-block">
            Reserve Your Time
          </Link>
          <p className="text-sm text-white/50 mt-8 uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
            Confirmation within 2 hours
          </p>
        </div>
      </section>
    </>
  )
}
