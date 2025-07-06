import Image from 'next/image';
import { mockData } from '../lib/mockData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publicaciones - Vega Cerezo',
  description: 'Obras literarias y publicaciones de Vega Cerezo',
};

export default function Publicaciones() {
  const data = mockData.publicaciones;
  
  return (
    <div className="animate-fadeIn p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800">Lorem Ipsum Opera</h1>
        <p className="text-lg text-amber-600">Lorem ipsum dolor sit amet, Vega Cerezo.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map(pub => (
          <div key={pub.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Image 
              src={pub.coverImage} 
              alt={`Lorem Ipsum ${pub.title}`}
              width={200}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-serif text-amber-700 mb-2">{pub.title}</h2>
              <p className="text-gray-600 mb-1">{pub.type}</p>
              <p className="text-gray-500 text-sm mb-4">{pub.year}</p>
              <button className="mt-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 self-start">
                Lorem Ipsum Plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}