import Hero from '../components/home/Hero'
import FeatureBar from '../components/home/FeatureBar'
import WhatsIncluded from '../components/home/WhatsIncluded'
import Benefits from '../components/home/Benefits'
import HowItWorksSection from '../components/home/HowItWorksSection'
import ApartmentLiving from '../components/home/ApartmentLiving'
import OurStory from '../components/home/OurStory'
import Testimonials from '../components/home/Testimonials'
import GalleryPreview from '../components/home/GalleryPreview'
import BlogPreview from '../components/home/BlogPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureBar />
      <WhatsIncluded />
      <Benefits />
      <HowItWorksSection />
      <ApartmentLiving />
      <OurStory />
      <Testimonials />
      <GalleryPreview />
      <BlogPreview />
    </>
  )
}
