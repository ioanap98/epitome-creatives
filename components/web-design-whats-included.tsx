'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'Homepage design',
  'Product page layout',
  'Mobile optimisation',
  'Basic SEO setup',
  'Speed optimisation',
  'Checkout / payment setup (if applicable)',
]

export default function WhatsIncludedSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>What's Included</h2>
          <motion.div
            className="w-24 h-px bg-black mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-left flex items-center gap-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check size={18} className="text-purple-600" />
                </div>
                <span className="text-sm text-gray-800 font-medium leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
