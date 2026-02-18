"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'


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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 1, 1] as [number, number, number, number],
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1] as [number, number, number, number],
    },
  },
}

// const statsVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.42, 0, 1, 1] as [number, number, number, number],
//     },
//   },
// }

// function CountUpAnimation({ targetNumber, label, delay = 0 }: { targetNumber: string; label: string; delay?: number }) {
//   const [count, setCount] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)

//   // Extract numeric value from string (e.g., "100+" -> 100)
//   const numericTarget = Number.parseInt(targetNumber.replace(/\D/g, "")) || 0
//   const suffix = targetNumber.replace(/\d/g, "") // Extract non-numeric characters like "+"

//   useEffect(() => {
//     if (!isVisible) return

//     const duration = 2000 // 2 seconds
//     const steps = 60 // 60 steps for smooth animation
//     const increment = numericTarget / steps
//     const intervalTime = duration / steps

//     let currentCount = 0
//     const timer = setInterval(() => {
//       currentCount += increment
//       if (currentCount >= numericTarget) {
//         setCount(numericTarget)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(currentCount))
//       }
//     }, intervalTime)

//     return () => clearInterval(timer)
//   }, [isVisible, numericTarget])

//   return (
//     <motion.div
//       className="group"
//       variants={statsVariants}
//       initial="hidden"
//       whileInView="visible"
//       onViewportEnter={() => setIsVisible(true)}
//       viewport={{ once: true }}
//       transition={{ delay }}
//     >
//       <motion.div
//         className="text-3xl font-light mb-2 relative overflow-hidden"
//         whileHover={{
//           scale: 1.2,
//           color: "#059669",
//           transition: { duration: 0.3 },
//         }}
//       >
//         <span>
//           {count}
//           {suffix}
//         </span>
//         <motion.div
//           className="absolute bottom-0 left-0 h-0.5 bg-green-600"
//           initial={{ width: "0%" }}
//           animate={{ width: isVisible ? "100%" : "0%" }}
//           transition={{ duration: 2, delay: delay + 0.2 }}
//         />
//       </motion.div>
//       <div className="text-gray-600">{label}</div>
//     </motion.div>
//   )
// }

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Centered Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-black" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            About Epitome Creatives
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-8 flex flex-col items-start" variants={imageVariants}>
              <motion.div
                className="relative overflow-hidden rounded-lg group bg-black max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover object-center"
                  style={{ aspectRatio: "4/3" }}
                >
                  <source src="/IMG_4867.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={textVariants}>
                <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                  {/* Intro Paragraph */}
                  <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    Epitome Creatives was built to help product-based brands and creatives establish a strong, premium digital presence from day one. We combine strategic web design with high-quality product visuals to create brands that look cohesive, credible, and ready to grow.
                  </motion.p>
                </div>
            </motion.div>
          </motion.div>

          {/* Subheading, Differentiation Blocks, and Closing Line moved below the grid */}
          <motion.h3 className="text-2xl md:text-3xl font-light text-purple-600 mb-4 mt-16 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}>
            More Than Design — A Structured Brand Foundation
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Card visual hierarchy: add shadow, border, and subtle gradient */}
            <motion.div className="bg-white bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl border border-gray-200 shadow-xl p-8 flex flex-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}>
              <h4 className="text-xl font-light text-purple-600 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Visual + Technical Approach
              </h4>
              <p className="text-gray-700 text-base">
                Most designers focus only on aesthetics. Most developers focus only on functionality. We bridge both — aligning product presentation with clean, structured web builds so your brand feels intentional at every touchpoint.
              </p>
            </motion.div>
            <motion.div className="bg-white bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl border border-gray-200 shadow-xl p-8 flex flex-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }}>
              <h4 className="text-xl font-light text-purple-600 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Built for Growing Brands
              </h4>
              <p className="text-gray-700 text-base">
                We specialise in working with early-stage product businesses and creatives who need clarity, not complexity. Every project is tailored to help you launch professionally without unnecessary technical overwhelm.
              </p>
            </motion.div>
            <motion.div className="bg-white bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl border border-gray-200 shadow-xl p-8 flex flex-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.20 }}>
              <h4 className="text-xl font-light text-purple-600 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Designed to Build Trust
              </h4>
              <p className="text-gray-700 text-base">
                From layout structure to image composition, every decision is made with one goal: building confidence in your brand and guiding visitors toward action.
              </p>
            </motion.div>
          </div>

          <motion.p className="mt-8 text-center text-lg text-gray-700" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.24 }}>
            If you’re building something meaningful, we help you present it the right way.
          </motion.p>

          <motion.div className="text-center mt-10" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] hover:bg-right-bottom text-white px-8 py-3 rounded-md shadow hover:shadow-lg transition">
              <a href="#contact">Work with us</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
