'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Camera, Palette, Target } from 'lucide-react'

const approaches = [
  {
    icon: Lightbulb,
    title: 'Strategic Planning',
    description:
      'We start by understanding your brand identity, target audience, and product positioning. Every shot is designed with a clear purpose - whether that\'s building trust, showcasing features, or driving conversions.',
  },
  {
    icon: Camera,
    title: 'Premium Lighting & Composition',
    description:
      'Clean, minimalist compositions with professional lighting setup. We focus on clarity, detail, and visual hierarchy to make your products stand out and communicate quality.',
  },
  {
    icon: Palette,
    title: 'Consistent Visual Language',
    description:
      'All imagery follows your brand guidelines to create a cohesive look across product pages, social media, and marketing materials. Consistency builds brand recognition and trust.',
  },
  {
    icon: Target,
    title: 'Conversion-Focused Results',
    description:
      'Every image is optimized for e-commerce performance. We deliver high-resolution files, lifestyle shots, detail close-ups, and lifestyle contexts that help customers make purchasing decisions.',
  },
]

export default function ApproachSection() {
  return (
    <section id="approach" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>How We Approach Product Photography</h2>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon
            return (
              <motion.div
                key={index}
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <motion.div
                  className="inline-block mb-4 p-3 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent size={28} className="text-black" />
                </motion.div>
                <h3 className="text-2xl font-light mb-3 text-black" style={{ fontFamily: 'var(--font-playfair), serif' }}>{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
