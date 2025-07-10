import { BookWithUs } from "@/components/BookWithUsSection"
import { CTASection } from "@/components/CTASection"
import { ExclusivitySection } from "@/components/ExclusivitySection"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { MomentsSection } from "@/components/MomentsSection"
import { TravelBureauSection } from "@/components/TravelBureauSection"
import { TripTypesSection } from "@/components/TripTypeSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TravelBureauSection/>
      <ExclusivitySection/>
      <BookWithUs/>
      <TripTypesSection/>
      <MomentsSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}
