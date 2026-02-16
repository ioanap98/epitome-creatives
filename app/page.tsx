'use client'

import { useEffect } from 'react';
import HomepageHero from '@/components/homepage-hero';
import HomepageServices from '@/components/homepage-services';
import PositioningSection from '@/components/positioning-section';
import ProcessSection from '@/components/process-section';
import IdealForSection from '@/components/ideal-for-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import Header from '@/components/navbar';


export default function HomePage() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Epitome Creatives",
      "image": "https://www.epitomecreatives.com/logo.png",
      "url": "https://www.epitomecreatives.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      },
      "description": "Epitome Creatives is a UK-based product photography studio and web design agency specialising in clean, minimalist, high-converting visuals for small product-based brands. We work with skincare, lifestyle, supplements, and fashion brands to deliver standout digital content and websites.",
      "priceRange": "££",
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "sameAs": [
        "https://www.instagram.com/epitome.creatives"
      ]
    });
    document.head.appendChild(script);
  }, []);



  return (
    <>
      <Header />
      <HomepageHero />
      <HomepageServices />
      <PositioningSection />
      <ProcessSection />
      <IdealForSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
