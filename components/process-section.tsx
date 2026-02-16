'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Code, Rocket } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Brand Review & Strategy',
    description: 'We analyze your brand, goals, and audience to create a tailored strategy.',
    icon: Search,
    color: 'from-purple-400 to-pink-400',
  },
  {
    number: 2,
    title: 'Visual Creation (Photography / Design)',
    description: 'Professional photography or custom design that brings your vision to life.',
    icon: Palette,
    color: 'from-pink-400 to-purple-500',
  },
  {
    number: 3,
    title: 'Website Build & Optimisation',
    description: 'We build a fast, beautiful, and SEO-optimized website for maximum impact.',
    icon: Code,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    number: 4,
    title: 'Launch & Growth Support',
    description: 'Go live with confidence and ongoing support to help your business grow.',
    icon: Rocket,
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>How It Works</h2>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth journey from concept to launch
          </p>
        </motion.div>

        {/* Desktop: Horizontal Roadmap */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className="relative z-10 mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-4 border-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`} />
                    <step.icon className={`w-7 h-7 text-transparent bg-gradient-to-br ${step.color} bg-clip-text`} strokeWidth={2} />
                  </motion.div>

                  {/* Step Number Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-semibold shadow-md`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-3 text-gray-800" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Roadmap */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical Connecting Line */}
            <motion.div
              className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-blue-200"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                >
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-4 border-white">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`} />
                      <step.icon className={`w-7 h-7 text-transparent bg-gradient-to-br ${step.color} bg-clip-text`} strokeWidth={2} />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-semibold shadow-md`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-medium mb-2 text-gray-800" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
