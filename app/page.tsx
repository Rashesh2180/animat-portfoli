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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 transition-colors duration-300">
      <Header />
      <Hero />
      
      {/* Sticky Image Section with Parallax Effect */}
      <StickyImageSection />
      
      {/* Who We Are Section */}
      <WhoWeAreSection />
      
      {/* My Skills Section */}
      <MySkillsSection />
      
      {/* Infinite Scrolling Marquee */}
      <MarqueeSection />

      {/* Featured Projects with Sticky Scroll */}
      <FeaturedProjectsSection />
      
      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Skills/Logos Grid */}
      <SkillsSection />

      {/* Experience Timeline */}
      <ExperienceSection />
    </main>
  )
}
