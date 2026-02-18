import React from 'react'

export default function WebDesignPackagesV2() {
  return (
    <section className="py-16" aria-labelledby="web-design-packages-title">
      <div className="container mx-auto px-6">
        <h2 id="web-design-packages-title" className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2 text-center tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Packages</h2>
        <p className="text-sm text-gray-500 mb-10 text-center">Clear starting points. Final pricing depends on scope, pages, and integrations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Portfolio Website */}
          <article className="relative group rounded-xl bg-gradient-to-br from-purple-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl" aria-labelledby="portfolio-website-title">
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-70" />
            <h3 id="portfolio-website-title" className="font-semibold text-purple-800 text-lg mb-2 mt-1 tracking-tight">Portfolio Website <span className="text-gray-500 font-normal">— from £500</span></h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1 mt-1">
              <li>1–3 pages</li>
              <li>portfolio/gallery</li>
              <li>services/about</li>
              <li>contact form</li>
              <li>mobile-first</li>
              <li>basic SEO</li>
            </ul>
          </article>
          {/* Shopify Customisation */}
          <article className="relative group rounded-xl bg-gradient-to-br from-pink-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl" aria-labelledby="shopify-customisation-title">
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-70" />
            <h3 id="shopify-customisation-title" className="font-semibold text-pink-800 text-lg mb-2 mt-1 tracking-tight">Shopify Customisation <span className="text-gray-500 font-normal">— from £900</span></h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1 mt-1">
              <li>theme customisation</li>
              <li>homepage + product page refresh</li>
              <li>navigation/collections</li>
              <li>mobile optimisation</li>
              <li>essential app setup</li>
              <li>launch support</li>
            </ul>
          </article>
          {/* Simple E-Commerce (Stripe) */}
          <article className="relative group rounded-xl bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl" aria-labelledby="simple-ecommerce-title">
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-70" />
            <h3 id="simple-ecommerce-title" className="font-semibold text-blue-800 text-lg mb-2 mt-1 tracking-tight">Simple E-Commerce (Stripe) <span className="text-gray-500 font-normal">— from £1,200</span></h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-1 mt-1">
              <li>custom storefront</li>
              <li>product catalogue</li>
              <li>secure Stripe checkout</li>
              <li>mobile-first</li>
              <li>basic SEO</li>
              <li>speed optimisation</li>
            </ul>
          </article>
        </div>
        <div className="text-gray-500 text-xs text-center mt-8">Final pricing depends on scope and required pages.</div>
      </div>
    </section>
  )
}
