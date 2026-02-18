'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    name: 'Pilates Instructor Website',
    description: '',
    goal: 'Turn Instagram traffic into structured inquiries.',
    whatWeDid: 'Clear service hierarchy, booking integration, mobile-first layout.',
    images: [
      '/web_dev/pilates_image_1.png',
      '/web_dev/pilates_image_2.png',
      '/web_dev/pilates_image_3.png',
      '/web_dev/pilates_image_5.png',
      '/web_dev/pilates_image_6.png',
      '/web_dev/pilates_image_7.png',
    ],
    features: ['Service presentation', 'Session type breakdowns', 'Booking integration', 'Mobile-optimized'],
  },
  {
    name: 'Photography Portfolio Website',
    description: '',
    goal: 'Showcase work clearly and guide visitors to booking.',
    whatWeDid: 'Gallery structure, portfolio categories, contact/booking flow.',
    images: [
      '/web_dev/photography-website-1.png',
      '/web_dev/photography-website-2.png',
      '/web_dev/photography-website-3.png',
      '/web_dev/photography-website-4.png',
      '/web_dev/photography-website-5.png',
      '/web_dev/photography-website-6.png',
      '/web_dev/photography-website-7.png',
      '/web_dev/photography-website-8.png',
      '/web_dev/photography-website-9.png',
    ],
    features: ['Visual gallery showcase', 'Client booking flow', 'Portfolio categories', 'Contact integration'],
  },
]

export default function DemoTemplatesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
  })

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % totalImages
    }))
  }

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] - 1 + totalImages) % totalImages
    }))
  }
  return (
    <section id="recent-projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-purple-600" style={{ fontFamily: 'var(--font-playfair), serif' }}>Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Real websites we've built for real clients — designed to convert visitors into customers.
          </p>
          <motion.div
            className="w-24 h-px bg-black mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              {/* Project image carousel */}
              <div className="relative w-full h-72 md:h-96 bg-gray-100 border-b border-gray-200 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex[index]}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={`${project.name} screenshot ${currentImageIndex[index] + 1}`}
                      fill
                      className="object-contain object-center"
                      priority={index === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows - only show if there are multiple images */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(index, project.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} className="text-black" />
                    </button>
                    <button
                      onClick={() => nextImage(index, project.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} className="text-black" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex[index] + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Project details */}
              <div className="p-8">
                <h3 className="text-2xl font-light mb-2 text-purple-600" style={{ fontFamily: 'var(--font-playfair), serif' }}>{project.name}</h3>
                {project.goal || project.whatWeDid ? (
                  <div className="mb-6 text-left text-gray-600 text-sm leading-relaxed">
                    {project.goal && (
                      <div><span className="font-medium text-purple-700">Goal:</span> {project.goal}</div>
                    )}
                    {project.whatWeDid && (
                      <div><span className="font-medium text-purple-700">What we did:</span> {project.whatWeDid}</div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{project.description}</p>
                )}

                {/* Features */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.features.map((feature, fIndex) => (
                    <span key={fIndex} className="text-xs bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-gray-700">{feature}</span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
