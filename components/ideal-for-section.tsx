'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const niches = [
  'Supplement brands',
  'Skincare brands',
  'Handmade product businesses',
  'Independent fashion labels and apparel makers',
  'Small Shopify / Etsy / Amazon sellers',
  'Custom portfolio and website solutions for creative professionals and businesses seeking a bespoke online presence',
]

export default function IdealForSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ideal For</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Professional product visuals designed to elevate your brand and increase trust. Modern websites for portfolios, product showcases and e‑commerce — built to showcase and convert.
          </p>
        </motion.div>

          <motion.div
            className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {niches.map((niche, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
              >
                <div className="rounded-full p-2 bg-gradient-to-tr from-pink-300 via-purple-400 to-blue-400 flex-shrink-0">
                  <div className="rounded-full bg-white p-1">
                    <Check size={16} className="text-purple-600" />
                  </div>
                </div>
                <div className="text-base text-gray-700">{niche}</div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  )
}
