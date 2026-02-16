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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Web Design Services</h2>
          <motion.div
            className="w-24 h-px bg-black mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two powerful solutions to bring your vision to life and grow your business online.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Decorative corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 ${service.accentColor} opacity-5 rounded-bl-full`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  {/* Icon with floating animation */}
                  <motion.div
                    className="inline-block mb-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 group-hover:border-black transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <IconComponent size={36} className="text-black" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-light mb-4 text-black group-hover:text-black transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Enhanced features list */}
                  <div className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        className="flex items-start gap-3 text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + fIdx * 0.1 }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.div
                          className="mt-0.5 flex-shrink-0"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check size={18} className="text-green-600" />
                        </motion.div>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
