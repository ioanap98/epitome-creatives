'use client'

import { motion } from 'framer-motion'
import { ImageOff, Gauge, Layers } from 'lucide-react'

const problems = [
  {
    icon: ImageOff,
    title: 'Poor product images reduce trust',
    description: 'DIY photos make your brand look amateur, no matter how great your products are.',
    color: 'from-red-400 to-pink-400'
  },
  {
    icon: Gauge,
    title: 'Slow, cluttered websites kill conversions',
    description: 'Visitors leave before they buy if your site is hard to navigate or slow to load.',
    color: 'from-orange-400 to-red-400'
  },
  {
    icon: Layers,
    title: 'Inconsistent branding weakens credibility',
    description: 'Mixed visuals and messaging make it hard for customers to trust and remember you.',
    color: 'from-purple-400 to-pink-400'
  },
]

export default function PositioningSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-black" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Why Brands Struggle to Look Premium
            </h2>
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Even with great products, these common issues hold brands back from standing out
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${problem.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <problem.icon className={`w-7 h-7 text-transparent bg-gradient-to-br ${problem.color} bg-clip-text`} strokeWidth={2} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-8 border border-purple-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-3xl md:text-4xl font-light mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              We fix all three.
            </p>
            <p className="text-gray-600 max-w-xl mx-auto">
              Professional product photography + conversion-focused web design = a complete brand transformation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
