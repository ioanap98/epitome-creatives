'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PortfolioHero() {
  const [images, setImages] = useState<string[]>([])
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/images')
        if (!res.ok) throw new Error(`Status ${res.status}`)
        const data: string[] = await res.json()
        if (Array.isArray(data)) {
          setImages(data.map((f) => `/uploads/${f}`))
        }
      } catch (err) {
        console.error('Failed to load images', err)
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [])

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images])

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length)

  if (loading || images.length === 0) {
    return (
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center pt-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-purple-200 blur-3xl opacity-30" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-blue-200 blur-3xl opacity-30" />
        </div>
        <p className="text-gray-600 relative z-10">Loading portfolio images...</p>
      </section>
    )
  }

  return (
    <section className="relative h-screen overflow-hidden pt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Gradient background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-purple-200 blur-3xl opacity-25" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-blue-200 blur-3xl opacity-25" />
      </div>
      
      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[current] || '/placeholder.svg'}
              alt={`Portfolio slide ${current + 1}`}
              fill
              className="object-cover"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Centered text & text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 max-w-4xl mx-auto">
        
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 drop-shadow-2xl"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Product Photography
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light mb-0 opacity-95 max-w-3xl leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore our collection of premium product photography from supplements and skincare to fashion and lifestyle products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#contact">
            <button
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] hover:bg-right-bottom text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 shadow-md hover:shadow-xl"
            >
              Book a Product Shoot
            </button>
          </a>
          <a href="#approach">
            <button
              className="border-2 border-white bg-white/20 backdrop-blur-md text-white hover:bg-white/90 hover:text-purple-600 px-8 py-6 text-base font-medium rounded-lg transition-all shadow-md hover:shadow-xl"
            >
              Our Approach
            </button>
          </a>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>

      <motion.button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
