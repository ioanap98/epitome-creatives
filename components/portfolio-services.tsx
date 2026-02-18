'use client'

import { motion } from 'framer-motion'
import { Camera, Users, Zap } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Product Photography',
    description:
      'Crisp, detailed product images designed for e-commerce. Clean compositions that showcase quality and build buyer confidence.',
  },
  {
    icon: Users,
    title: 'Lifestyle Photography',
    description:
      'Products photographed in context. Natural scenes that help customers visualise use and connect emotionally with your brand.',
  },
  {
    icon: Zap,
    title: 'Video & Motion',
    description:
      'Dynamic short-form content for social and product pages. Engaging visuals that stop the scroll and drive conversions.',
  },
]

export default function PortfolioServices() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Services</h2>
          <motion.div
            className="w-24 h-px bg-black mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center mx-auto mb-6 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-7 h-7 md:w-11 md:h-11 text-purple-600" />
                </motion.div>
                <h3 className="text-2xl font-light mb-3 text-purple-600" style={{ fontFamily: 'var(--font-playfair), serif' }}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-block bg-white rounded-2xl px-4 py-8 shadow-xl w-full max-w-3xl border border-gray-100">
            <h4 className="text-2xl font-semibold text-purple-700 mb-8 text-center tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Packages</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="relative group rounded-xl bg-gradient-to-br from-purple-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-70" />
                <div className="font-semibold text-purple-800 text-lg mb-2 mt-1 tracking-tight">Starter <span className="text-gray-500 font-normal">— from £250</span></div>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-1 mt-1">
                  <li>1 product</li>
                  <li>4–6 images</li>
                  <li>clean background</li>
                  <li>basic retouching</li>
                </ul>
              </div>
              {/* Growth */}
              <div className="relative group rounded-xl bg-gradient-to-br from-pink-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-70" />
                <div className="font-semibold text-pink-800 text-lg mb-2 mt-1 tracking-tight">Growth <span className="text-gray-500 font-normal">— from £450</span></div>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-1 mt-1">
                  <li>1–2 products</li>
                  <li>lifestyle setup</li>
                  <li>8–12 images</li>
                  <li>creative direction</li>
                </ul>
              </div>
              {/* Premium */}
              <div className="relative group rounded-xl bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-md px-6 py-7 flex flex-col items-start md:items-center transition-all hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-70" />
                <div className="font-semibold text-blue-800 text-lg mb-2 mt-1 tracking-tight">Premium <span className="text-gray-500 font-normal">— custom quote</span></div>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-1 mt-1">
                  <li>campaign visuals</li>
                  <li>multiple setups</li>
                  <li>short-form video add-on available</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
