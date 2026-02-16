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
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center mx-auto mb-6 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent size={44} className="text-purple-600" />
                </motion.div>
                <h3 className="text-2xl font-light mb-3 text-black" style={{ fontFamily: 'var(--font-playfair), serif' }}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
