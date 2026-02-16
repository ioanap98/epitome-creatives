'use client'

import Header from '@/components/navbar'
import PortfolioHero from '@/components/portfolio-hero'
import ApproachSection from '@/components/approach-section'
import PortfolioServices from '@/components/portfolio-services'
import PortfolioGrid from '@/components/portfolio-section'
import FeaturedWork from '@/components/featured-work'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioHero />
      
      <PortfolioServices />

      {/* Portfolio Grid */}
      <PortfolioGrid />
      <ApproachSection />

      {/* Featured Work */}
      <FeaturedWork />
      
      <ContactSection />
      <Footer />
    </>
  )
}
