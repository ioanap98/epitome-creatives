"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

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

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1] as [number, number, number, number],
    },
  },
}

function CountUpAnimation({ targetNumber, label, delay = 0 }: { targetNumber: string; label: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Extract numeric value from string (e.g., "100+" -> 100)
  const numericTarget = Number.parseInt(targetNumber.replace(/\D/g, "")) || 0
  const suffix = targetNumber.replace(/\d/g, "") // Extract non-numeric characters like "+"

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const increment = numericTarget / steps
    const intervalTime = duration / steps

    let currentCount = 0
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isVisible, numericTarget])

  return (
    <motion.div
      className="group"
      variants={statsVariants}
      initial="hidden"
      whileInView="visible"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.div
        className="text-3xl font-light mb-2 relative overflow-hidden"
        whileHover={{
          scale: 1.2,
          color: "#059669",
          transition: { duration: 0.3 },
        }}
      >
        <span>
          {count}
          {suffix}
        </span>
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-green-600"
          initial={{ width: "0%" }}
          animate={{ width: isVisible ? "100%" : "0%" }}
          transition={{ duration: 2, delay: delay + 0.2 }}
        />
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-8" variants={imageVariants}>
              <motion.div
                className="relative aspect-[3/2] overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/IMG_1493.jpg"
                  alt="Professional photography studio setup"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/IMG_1495.jpg", alt: "Studio lighting setup" },
                  { src: "/IMG_1494.jpg", alt: "Creative photography workspace" },
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      rotate: index === 0 ? 2 : -2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={textVariants}>
              <motion.h2
                className="text-4xl md:text-5xl font-light mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Epitome Creatives
              </motion.h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                {[
                  "I’m Ioana, founder and lead photographer at Epitome Creatives, a UK-based studio specializing in product and lifestyle photography. My journey began over a decade ago in high school, when I captured my first portrait series and submitted it to a national photography competition. That experience, and the recognition it brought, sparked a lasting passion for visual storytelling.",
                  "Although I pursued engineering at university, my studies gave me something unexpected: a deep appreciation for how brands grow and the role strong visuals play in that journey. I realized that photography isn’t just art - it’s strategy.",
                  "Today, through Epitome Creatives, I help brands elevate their presence through photography that is both strategic and artistic. Whether it’s a clean studio composition or a dynamic lifestyle shot, my mission is to bring your product to life — clearly, creatively, and with purpose.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
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
        </div>
      </div>
    </section>
  )
}
