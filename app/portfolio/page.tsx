'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PortfolioPage() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images')
      const data = await res.json()
      if (Array.isArray(data)) {
        setImages(data)
      }
    }
    fetchImages()
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {images.map((img, index) => (
        <div key={index} className="relative w-full h-48 rounded overflow-hidden shadow">
          <Image
            src={`/portfolio/${img}`}
            alt={`Uploaded ${img}`}
            fill                       // make it cover the div
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"  // responsive hint
            priority={index < 3}      // prioritize the first few
          />
        </div>
      ))}
    </div>
  )
}
