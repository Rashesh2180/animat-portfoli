import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StickyImageSection from '@/components/StickyImageSection'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import MySkillsSection from '@/components/MySkillsSection'
import MarqueeSection from '@/components/MarqueeSection'
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import AiToolsSection from '@/components/AiToolsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 transition-colors duration-300">
      <Header />
      <Hero />


      <SkillsSection />
      <ExperienceSection />

      {/* Fast Development AI Tools */}
      <AiToolsSection />

      {/* Experience Timeline */}


      {/* Who We Are Section */}
      {/* <WhoWeAreSection /> */}


      {/* Infinite Scrolling Marquee */}
      <MarqueeSection />

      {/* Featured Projects with Sticky Scroll */}
      <FeaturedProjectsSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Contact Form Details */}
      <ContactSection />

    </main>
  )
}
