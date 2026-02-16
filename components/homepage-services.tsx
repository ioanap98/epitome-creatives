'use client'

import Link from 'next/link'
import { Camera, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const services = [
    {
    icon: Camera,
    title: 'Product Photography',
    description: 'Professional product visuals designed to elevate your brand and increase trust.',
    cta: 'View Photography Work',
    href: '/product-photography',
  },
    {
    icon: Code2,
    title: 'Web Design & Development',
    description: 'Modern websites for portfolios, product showcases and e‑commerce — built to showcase and convert.',
    cta: 'View Website Work',
    href: '/web-design',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1] as [number, number, number, number],
    },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Our Services</h2>
          <motion.div
            className="w-24 h-px bg-black mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <motion.div
                  className="inline-block mb-6 p-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <div className="rounded-full bg-white p-3">
                      <IconComponent size={24} className="text-purple-600" />
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-2xl font-light mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link href={service.href}>
                  <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] hover:bg-right-bottom text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-500">
                    {service.cta}
                  </Button>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
