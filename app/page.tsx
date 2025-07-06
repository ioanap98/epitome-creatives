// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/ui/hero';
// import TickerTape from '@/components/tickertape_animation';
import PortfolioGrid from '@/components/portfolio-section';
import ServicesSection from '@/components/services-section';
import AboutSection from '@/components/about-section';
import WhyChooseUsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FeaturedWork from '@/components/featured-work';
import Header from '@/components/navbar';

export default function HomePage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // 1️⃣ Fetch the list of filenames from your API
  useEffect(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then((data: string[]) => {
        // 2️⃣ Build public URLs for each file
        setImages(data.map((f) => `/uploads/${f}`));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading…</p>;
  }

  if (images.length === 0) {
    return <p className="p-6 text-center">No images found.</p>;
  }

  return (
    <>
      <Header />
      <HeroSection images={images} />
      {/* <TickerTape /> */}
      <ServicesSection />
      <PortfolioGrid />
      <FeaturedWork />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      



    </>
  );
}
