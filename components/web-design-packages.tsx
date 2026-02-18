import React from 'react'

export default function WebDesignPackages() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="inline-block bg-white rounded-2xl px-4 py-8 shadow-xl w-full max-w-3xl border border-gray-100 mx-auto">
          <h4 className="text-2xl font-semibold text-purple-700 mb-8 text-center tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Packages</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portfolio Website */}
            <div className="relative group rounded-xl bg-gradient-to-br from-purple-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-70" />
              <div className="font-semibold text-purple-800 text-lg mb-2 mt-1 tracking-tight">Portfolio Website <span className="text-gray-500 font-normal">— from £500</span></div>
            </div>
            {/* Shopify Customisation */}
            <div className="relative group rounded-xl bg-gradient-to-br from-pink-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-70" />
              <div className="font-semibold text-pink-800 text-lg mb-2 mt-1 tracking-tight">Shopify Customisation <span className="text-gray-500 font-normal">— from £900</span></div>
            </div>
            {/* Simple E-Commerce (Stripe) */}
            <div className="relative group rounded-xl bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-70" />
              <div className="font-semibold text-blue-800 text-lg mb-2 mt-1 tracking-tight">Simple E-Commerce (Stripe) <span className="text-gray-500 font-normal">— from £1,200</span></div>
            </div>
          </div>
          <div className="text-gray-500 text-xs text-center mt-6">Final pricing depends on scope and required pages.</div>
        </div>
      </div>
    </section>
  )
}
