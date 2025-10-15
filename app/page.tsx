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
import BookingForm from '@/components/BookingForm'
import TrustSignals from '@/components/TrustSignals'

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
      
      <BookingForm />
    </>
  )
}
