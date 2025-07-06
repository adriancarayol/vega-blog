'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { mockData } from '../lib/mockData';

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<typeof mockData.galeria[0] | null>(null);
  const data = mockData.galeria;

  const openModal = (image: typeof mockData.galeria[0]) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="animate-fadeIn p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800">Galería</h1>
        <p className="text-lg text-amber-600">Imágenes de Vega Cerezo</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map(image => (
          <div 
            key={image.id} 
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300" 
            onClick={() => openModal(image)}
          >
            <div className="relative aspect-w-4 aspect-h-3">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={600}
                height={450}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-lg font-medium drop-shadow-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" 
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button 
              onClick={closeModal} 
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors z-10"
              aria-label="Cerrar imagen"
            >
              <X size={32} />
            </button>
            
            <div className="relative" onClick={e => e.stopPropagation()}>
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                width={1200}
                height={900}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                priority
              />
              <p className="text-center text-white mt-4 text-lg">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}