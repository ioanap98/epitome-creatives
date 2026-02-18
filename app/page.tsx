'use client'

import { useEffect } from 'react';
import HomepageHero from '@/components/homepage-hero';
import HomepageServices from '@/components/homepage-services';
import PositioningSection from '@/components/positioning-section';
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

      {/* Who We Work With Section - styled to match other sections */}
      <section
        className="py-24 bg-gray-50 border-b border-gray-100"
        aria-labelledby="who-we-work-with-title"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2
              id="who-we-work-with-title"
              className="text-4xl md:text-5xl font-light mb-4 text-black"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Who We Work With
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We specialise in helping small product-based brands and creatives elevate their online presence and convert more.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto mb-12">
            {[
              'Supplement brands',
              'Skincare & beauty brands',
              'Small Shopify stores',
              'Product-based startups',
              'Handmade product sellers',
              'Creatives (photographers, designers, consultants)'
            ].map((item, idx) => (
              <div
                key={item}
                className="flex items-start gap-3 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
                style={{ minHeight: 80 }}
              >
                <div className="rounded-full p-2 bg-gradient-to-tr from-pink-300 via-purple-400 to-blue-400 flex-shrink-0">
                  <div className="rounded-full bg-white p-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600"><path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <div className="text-base text-gray-700">{item}</div>
              </div>
            ))}
          </div>
          <div className="text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl font-light text-purple-600 mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              If you sell a product or present your work online, we help you look premium and build trust.
            </p>
          </div>
        </div>
      </section>

      {/* Free Brand Presence Blueprint Section */}
      <section
        className="py-24 bg-gray-50 border-b border-gray-100"
        aria-labelledby="blueprint-title"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="blueprint-title"
                className="text-4xl md:text-5xl font-light mb-4 text-black"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Free Brand Presence Blueprint (15 min)
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto mb-6" />
              <p className="text-gray-700 max-w-2xl mx-auto mb-3 text-lg">
                Launching or upgrading your brand? In a free 15-minute call, we’ll map the fastest path to a premium online presence.
              </p>
              <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-base">
                We’ll define the right visuals + website structure so you can launch with clarity and confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                'What product photos you need first (white background, lifestyle, reels)',
                'Website structure recommendation (pages + layout that sells)',
                'Platform guidance (Shopify vs custom / simple e-commerce)',
                'Launch plan: what to do first in 7–14 days',
                'Clear next steps + timeline',
              ].map((item, idx) => (
                <div
                  key={item}
                  className="relative p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all group flex flex-col items-center justify-center text-center"
                >
                  <span className="rounded-full p-2 bg-gradient-to-tr from-pink-300 via-purple-400 to-blue-400 mb-4">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600"><path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/hello-epitomecreatives/30min" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                    Book Your Free Blueprint Call
                  </button>
                </a>
                <a href="#contact" tabIndex={0}>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-10 px-6" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                    Start a Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PositioningSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
