import HeroModern from '@/components/HeroModern'
import SearchBar from '@/components/SearchBar'
import ValueProposition from '@/components/ValueProposition'
import Services from '@/components/Services'
import ExperiencesPreview from '@/components/ExperiencesPreview'
import GuidesPreview from '@/components/GuidesPreview'
import Lookbook from '@/components/Lookbook'
import TestimonialsEnhanced from '@/components/TestimonialsEnhanced'
import TrustSignals from '@/components/TrustSignals'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeroModern />

      <TrustSignals />

      <ValueProposition />

      <SearchBar />

      <Services />

      <ExperiencesPreview />

      <TestimonialsEnhanced />

      {/* <Lookbook /> — hidden until content is ready */}

      <GuidesPreview />

      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Ready to Book?</h2>
          <p className="text-porcelain/80 text-lg mb-8">
            Tell us what you need and we&apos;ll match you with the perfect professional within 24 hours.
          </p>
          <Link href="/book" className="btn-gold text-lg">
            Request a Booking
          </Link>
        </div>
      </section>
    </>
  )
}
