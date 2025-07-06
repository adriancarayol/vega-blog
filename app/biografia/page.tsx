import Image from 'next/image';
import { mockData } from '../lib/mockData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biografía - Vega Cerezo',
  description: 'Biografía de Vega Cerezo, influencias literarias y premios recibidos',
};

export default function Biografia() {
  const data = mockData.biografia;
  
  return (
    <div className="animate-fadeIn p-6 md:p-10 bg-white rounded-lg shadow-xl">
      <header className="text-center mb-10">
        <Image 
          src={data.profileImage} 
          alt={`Retrato de ${data.name}`} 
          width={240}
          height={240}
          className="w-48 h-48 md:w-60 md:h-60 rounded-full mx-auto mb-6 shadow-lg border-4 border-amber-200 object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800">{data.name}</h1>
        <p className="text-lg text-amber-600">{`${data.birthDate} - ${data.location}`}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-amber-700 mb-6">Sobre mí</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.bio}</p>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <video 
              controls 
              className="w-full h-full object-cover"
              src="/videos/video.mp4"
            >
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold text-amber-700 mb-3">Influencias</h2>
          <ul className="list-disc list-inside text-gray-700">
            {data.influences.map(influence => <li key={influence} className="mb-1">{influence}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-amber-700 mb-3">Reconocimientos</h2>
          <ul className="list-disc list-inside text-gray-700">
            {data.awards.map(award => <li key={award} className="mb-1">{award}</li>)}
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-amber-700 mb-6">Galería</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-w-4 aspect-h-3">
              <Image 
                src="/images/1.jpg" 
                alt="Vega Cerezo - Retrato"
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Juan Rubio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-w-4 aspect-h-3">
              <Image 
                src="/images/2.jpg" 
                alt="Vega Cerezo - Evento literario"
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Frederic Volkringer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-w-4 aspect-h-3">
              <Image 
                src="/images/3.jpeg" 
                alt="Vega Cerezo - Presentación"
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Juan José Ballester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}