'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HomepageHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center pt-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-purple-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-blue-200 blur-3xl opacity-40" />
        <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-pink-200 blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-indigo-200 blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Subheading */}
          <motion.p
            className="text-sm uppercase tracking-widest text-gray-600 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Premium Brand Upgrade Partner
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-black"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Help Product-Based Brands Look Premium & Convert More
          </motion.h1>

          {/* Divider line */}
          <motion.div
            className="w-16 h-px bg-black mx-auto my-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Subheading text */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            High-quality product photography and clean, conversion-focused websites designed for brands ready to scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] hover:bg-right-bottom text-white px-8 py-6 text-base font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
              >
                Book a Free Brand Audit
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 bg-white text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-500 px-8 py-6 text-base font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
