'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Palette, Check } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'Shopify Store Customization',
    description:
      'Transform your Shopify store into a conversion machine. We design custom, high-performing stores that reflect your brand identity and drive sales. From product page optimization to seamless checkout experiences—every detail is crafted to maximize revenue.',
    features: ['Custom theme design and branding', 'Product page optimization for conversions', 'Streamlined checkout flows', 'Advanced payment gateway setup', 'Inventory & order management systems'],
    gradient: 'from-blue-50 to-indigo-50',
    accentColor: 'bg-blue-600',
  },
  {
    icon: Palette,
    title: 'Creative Portfolio Websites',
    description:
      'Showcase your work with a website that truly stands out. Built for photographers, designers, artists, and creatives who refuse to blend in. We create stunning portfolios that tell your story, display your best work, and turn admirers into clients.',
    features: ['Captivating gallery & lightbox experiences', 'Advanced image optimization', 'Client testimonials & social proof', 'Contact & inquiry forms', 'Blog integration for storytelling'],
    gradient: 'from-purple-50 to-pink-50',
    accentColor: 'bg-purple-600',
  },
]

export default function WebDesignServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Web Design Services</h2>
          <motion.div
            className="w-24 h-px bg-black mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
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
          <div className="inline-block bg-white rounded-lg px-6 py-4 shadow-md">
            <p className="text-sm text-gray-600">Prices starting from: <span className="ml-2 font-medium text-purple-600">200£</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
