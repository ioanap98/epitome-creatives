export const metadata = {
  title: 'Product Photography | Portfolio & Services | Epitome Creatives',
  description: 'Professional product photography for e-commerce, skincare, supplements, fashion, and lifestyle brands. Explore our portfolio and see real client results.',
  keywords: [
    'product photography',
    'e-commerce photography',
    'skincare photography',
    'supplement photography',
    'fashion product photography',
    'lifestyle product photography',
    'portfolio',
    'Epitome Creatives'
  ],
  metadataBase: new URL('https://www.epitomecreatives.com'),
  authors: [{ name: 'Epitome Creatives', url: 'https://www.epitomecreatives.com' }],
  creator: 'Epitome Creatives',
  openGraph: {
    title: 'Product Photography | Portfolio & Services | Epitome Creatives',
    description: 'See our product photography portfolio and services for e-commerce and creative brands. Real results, real clients.',
    url: 'https://www.epitomecreatives.com/product-photography',
    siteName: 'Epitome Creatives',
    images: [
      {
        url: 'https://www.epitomecreatives.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Epitome Creatives Product Photography',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Photography | Portfolio & Services | Epitome Creatives',
    description: 'Professional product photography for brands in the UK and beyond. See our portfolio and results.',
    images: ['https://www.epitomecreatives.com/logo.png'],
  },
};
'use client'

import Header from '@/components/navbar'
import PortfolioHero from '@/components/portfolio-hero'
import ApproachSection from '@/components/approach-section'
import PortfolioServices from '@/components/portfolio-services'
import PortfolioGrid from '@/components/portfolio-section'
import FeaturedWork from '@/components/featured-work'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function ProductPhotographyPage() {
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
