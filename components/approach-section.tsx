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
    <section id="approach" className="py-24 bg-gray-50">
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon
              return (
                <motion.div
                  key={index}
                  className="text-left group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 + index * 0.05 }}
                >
                  <motion.div
                    className="mb-4 flex items-center"
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center mr-4 shadow-sm flex-none overflow-hidden p-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-7 h-7 text-purple-600" />
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-2xl font-light mb-1 text-purple-600"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                        whileHover={{ color: '#6D28D9' }}
                        transition={{ duration: 0.3 }}
                      >
                        {approach.title}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed max-w-xl">{approach.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
      </div>
    </section>
  )
}
