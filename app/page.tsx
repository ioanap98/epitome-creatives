'use client';

import TickerTape from '@/components/tickertape_animation';
import { useEffect, useState } from 'react';

export default function Carousel() {
  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return <p>Loading...</p>;


  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative">
        {images.map((img, index) => (
          <img
            key={img}
            src={`/uploads/${img}`}
            alt={img}
            className={`absolute top-0 left-0 w-screen h-screen object-cover transition-opacity duration-500 ease-in-out ${
        index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className='absolute bottom-[30%] flex items-center justify-center mx-auto w-full '>
          <h1 className='text-6xl  font-bold text-center text-white   p-4 rounded-lg'>
            The creative growth partner
          </h1>
        </div>
      </div>

      <TickerTape />

      
    </>
  );
}


