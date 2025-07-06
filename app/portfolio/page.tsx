"use client"

import { useEffect, useState } from 'react';

export default function portfolioPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={`/portfolio/${img}`}
          alt={`Uploaded ${img}`}
          className="rounded shadow"
        />
      ))}
    </div>
  );
}
