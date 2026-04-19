'use client'

import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import CourseworkSection from '@/components/CourseworkSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <CourseworkSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
