'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/presentacion-el-cuervo4.jpg',
    title: 'PRESNTACION EL CUERVO4',
    description: ''
  },
  {
    id: 2,
    src: '/images/gallery/premios-mandarache.jpg',
    title: 'Premios Mandarache de Cartagena',
    description: 'X Aniversario de los Premios Mandarache de la ciudad de Cartagena.'
  },
  {
    id: 3,
    src: '/images/gallery/vega-cerezo-juan-rubio.jpg',
    title: 'Vega Cerezo',
    description: 'Fotografía de Juan Rubio'
  },
  // Add more images here as they become available (17 total mentioned in the counter)
];

export default function Galeria() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = galleryImages[currentImageIndex];

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, currentImageIndex]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://www.facebook.com/vega.cerezomartin?fref=tl_fr_box"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Facebook"
          >
            <Image
              src="/images/facebook-icon.png"
              alt="Facebook"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://twitter.com/Vega_Cerezo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="Twitter"
          >
            <Image
              src="/images/twitter-icon.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </Link>
        </div>

        {/* Gallery Container */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          {/* Main Image Display */}
          <div className="relative aspect-[16/10] bg-black">
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              fill
              className="object-contain cursor-pointer"
              onClick={() => setIsZoomed(true)}
              priority
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{currentImage.title}</h3>
              {currentImage.description && (
                <p className="text-sm text-gray-200">{currentImage.description}</p>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gray-200 dark:bg-gray-700 px-6 py-4 flex items-center justify-between">
            <button
              onClick={togglePlayPause}
              className="flex items-center space-x-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 px-4 py-2 rounded transition-colors"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {currentImageIndex + 1}/{galleryImages.length}
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mt-12 text-gray-900 dark:text-gray-100">
          Galería
        </h2>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg ${
                index === currentImageIndex 
                  ? 'ring-4 ring-blue-500' 
                  : 'hover:opacity-75'
              } transition-all`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close fullscreen"
          >
            <X size={32} />
          </button>
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={1920}
            height={1080}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}