import HeroModern from '@/components/HeroModern'
import SearchBar from '@/components/SearchBar'
import ValueProposition from '@/components/ValueProposition'
import Services from '@/components/Services'
import CategoriesRow from '@/components/CategoriesRow'
import ExperiencesPreview from '@/components/ExperiencesPreview'
import GuidesPreview from '@/components/GuidesPreview'
import JournalPreview from '@/components/JournalPreview'
import Lookbook from '@/components/Lookbook'
import FAQExpanded from '@/components/FAQExpanded'
import TestimonialsEnhanced from '@/components/TestimonialsEnhanced'
import FullWidthImageBreak from '@/components/FullWidthImageBreak'
import BookingForm from '@/components/BookingForm'
import ParallaxSection from '@/components/ParallaxSection'
import CuratedProducts from '@/components/CuratedProducts'

export default function Home() {
  return (
    <>
      <HeroModern />
      
      <ParallaxSection speed={0.15}>
        <ValueProposition />
      </ParallaxSection>
      
      <SearchBar />
      
      <ParallaxSection speed={0.1}>
        <Services />
      </ParallaxSection>
      
      {/* Visual Break - Full Width Image */}
      <FullWidthImageBreak
        image="/brand-images/salon-detail.png"
        alt="Luxury beauty salon in Lisbon"
        height="medium"
        parallax={true}
      />
      
      <CategoriesRow />
      
      <ParallaxSection speed={0.2}>
        <ExperiencesPreview />
      </ParallaxSection>
      
      <GuidesPreview />
      
      <ParallaxSection speed={0.15}>
        <JournalPreview />
      </ParallaxSection>
      
      <CuratedProducts />
      
      <Lookbook />
      
      {/* Enhanced Testimonials with Sage Background */}
      <TestimonialsEnhanced />
      
      <FAQExpanded />
      <BookingForm />
    </>
  )
}
