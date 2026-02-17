'use client'

import { motion } from 'framer-motion'
import { ImageOff, Gauge, Layers } from 'lucide-react'

const problems = [
  {
    icon: ImageOff,
    title: 'Product & Portfolio Photography',
    description: 'High-quality photography for products and portfolios that showcases detail, context and storytelling—built to attract clients and boost sales.',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: Gauge,
    title: 'Portfolio & Shopify Websites',
    description: 'Beautiful portfolio sites and Shopify stores designed to showcase work, sell products and convert visitors into customers.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Layers,
    title: 'Shopify Customisation & Support',
    description: 'Custom Shopify setup, optimisation and launch support so your store performs and is easy to manage.',
    color: 'from-green-400 to-teal-400'
  },
]

export default function PositioningSection() {
  return (
    <section className="py-24 bg-gray-50">
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
              Websites, Shopify & Photography for Creatives
            </h2>
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Portfolio websites, Shopify customisation and product photography to showcase your work and grow sales.
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
                className="relative p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center mb-4 transition-transform mx-auto`}>
                  <problem.icon className={`w-10 h-10 text-purple-600`} strokeWidth={2} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-light text-purple-600 mb-2 mx-auto text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-3xl md:text-4xl font-light mb-3 text-purple-600" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Everything to showcase and sell
            </p>
            <p className="text-gray-600 max-w-xl mx-auto">
              Portfolio sites, Shopify customisation and product photography — all focused on showcasing your work and increasing conversions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
