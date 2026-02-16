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
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            About Epitome Creatives
          </h2>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
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
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    We’re a UK-based creative studio that pairs product photography with conversion-first web design to help brands stand out and grow.
                  </motion.p>

                  <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}>
                    Founded by Ioana — an engineer turned photographer and designer — we combine technical precision with thoughtful aesthetics. From scroll-stopping product visuals to fast, shop-ready websites, we deliver assets and experiences that convert.
                  </motion.p>

                  <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }}>
                    Whether you’re launching a new product, scaling a Shopify store, or building a portfolio that wins clients, we focus on clarity, performance, and measurable results.
                  </motion.p>

                  {/* benefit cards removed per request */}

                  {/* CTA moved below the two-column grid to be centered */}
                </div>

              {/* <motion.div
                className="mt-8 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="grid grid-cols-3 gap-8 text-center">
                  {[
                    { number: "100+", label: "Projects Completed" },
                    { number: "5", label: "Years Experience" },
                    { number: "50+", label: "Happy Clients" },
                  ].map((stat, index) => (
                    <CountUpAnimation key={index} targetNumber={stat.number} label={stat.label} delay={index * 0.1} />
                  ))}
                </div>
              </motion.div> */}
            </motion.div>
          </motion.div>

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
