import Hero from '../components/home/Hero'
import FeatureBar from '../components/home/FeatureBar'
import WhatsIncluded from '../components/home/WhatsIncluded'
import UrbanGreens from '../components/home/UrbanGreens'
import Benefits from '../components/home/Benefits'
import HowItWorksSection from '../components/home/HowItWorksSection'
import VisionMission from '../components/home/VisionMission'
import ApartmentLiving from '../components/home/ApartmentLiving'
import RooftopOasis from '../components/home/RooftopOasis'
import LandGarden from '../components/home/LandGarden'
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
      <UrbanGreens />
      <Benefits />
      <HowItWorksSection />
      <VisionMission />
      <ApartmentLiving />
      <RooftopOasis />
      <LandGarden />
      <OurStory />
      <Testimonials />
      <GalleryPreview />
      <BlogPreview />
    </>
  )
}
