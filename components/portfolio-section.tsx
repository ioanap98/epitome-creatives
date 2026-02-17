"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}





export default function PortfolioGrid() {
  const [items, setItems] = useState<Array<{ filename: string; type: 'image' | 'video' }> | null>(null);
  const [shuffled, setShuffled] = useState<typeof items>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/images/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
          // Shuffle once after fetch
          const arr = [...data];
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          setShuffled(arr);
        } else throw new Error('Invalid data');
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!shuffled) return <div className="p-6">Loading…</div>;

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Portfolio</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {shuffled.map(({ filename, type }) => (
              <motion.div
                key={filename}
                className="group relative overflow-hidden bg-gray-100 aspect-square"
                layout
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                {type === 'image' ? (
                  <Image
                    src={`/portfolio/${filename}`}
                    alt={filename}
                    fill
                    className="object-cover object-center transition-transform duration-200 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center aspect-square bg-black">
                    <video
                      src={`/portfolio/${filename}`}
                      controls
                      className="object-cover object-center w-full h-full rounded"
                      style={{ background: '#000', maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </div>
                )}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-center text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
