import React from "react";

export default function WhoWeWorkWithSection() {
  return (
    <section
      className="py-24 bg-white border-b border-gray-100"
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
  );
}
