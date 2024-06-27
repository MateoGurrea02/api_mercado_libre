// Carousel.js
import React from 'react';
import { useState } from 'react';

import bg1 from '../assets/bg-1.webp'
import bg2 from '../assets/bg-2.webp'
import bg3 from '../assets/bg-3.webp'
import bg4 from '../assets/bg-4.webp'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bg1, bg2, bg3, bg4]

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-64 md:h-max overflow-hidden mt-20">
      <div className="flex transition-transform duration-200 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-slate-100"></div>
      <button className="absolute rotate-180 left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
