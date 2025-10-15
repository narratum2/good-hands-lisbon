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
      
      {/* Final Booking CTA - Replaces inline form */}
      <section className="section-padding bg-gradient-to-r from-gold via-gold-dark to-gold text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Ready to Book Your Experience?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Let us match you with the perfect professional in just 4 quick steps
          </p>
          <Link href="/book" className="inline-block bg-white text-gold px-12 py-4 text-lg font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-xl">
            Start Booking Now →
          </Link>
          <p className="text-sm text-white/70 mt-6">
            Takes less than 2 minutes • Confirmation within 2 hours
          </p>
        </div>
      </section>
    </>
  )
}
