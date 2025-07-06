import Image from 'next/image';

export default function NewsSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-serif text-center mb-8 text-gray-800 bg-gray-100 py-3 rounded italic">
        NOVEDAD
      </h2>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Lo Salvaje</h3>
        <p className="text-gray-600 mb-6">Vega Cerezo</p>
        <a
          href="https://www.editorialparamo.com/online-store/Los-primeros-fríos-de-Vega-Cerezo-p637954525"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full max-w-xs mx-auto aspect-[3/4] mb-6 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/books/book1.jpg"
            alt="Lo Salvaje - Vega Cerezo"
            fill
            className="object-contain rounded-lg shadow-lg"
            sizes="(max-width: 768px) 188px, 188px"
          />
        </a>
        <p className="text-sm text-gray-500 italic">editorial PÁRAMO</p>
      </div>
    </div>
  );
}
