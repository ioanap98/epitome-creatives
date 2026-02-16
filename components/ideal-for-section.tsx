'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const niches = [
  'Supplement brands',
  'Skincare brands',
  'Handmade product businesses',
  'Modest fashion brands',
  'Small Shopify/Etsy/Amazon sellers',
]

export default function IdealForSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ideal For</h2>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {niches.map((niche, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg border border-gray-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              >
                <Check size={20} className="text-black flex-shrink-0" />
                <span className="text-base text-gray-700">{niche}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
