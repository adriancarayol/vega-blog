import { mockData } from '../lib/mockData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prensa - Vega Cerezo',
  description: 'Artículos de prensa y menciones sobre Vega Cerezo',
};

export default function Prensa() {
  const data = mockData.prensa;
  
  return (
    <div className="animate-fadeIn p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800">Lorem Ipsum Media</h1>
        <p className="text-lg text-amber-600">Vega Cerezo in lorem ipsum.</p>
      </header>
      <div className="space-y-8">
        {data.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-amber-700 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{item.publication} - {item.date}</p>
            <p className="text-gray-700 mb-4 italic">&quot;{item.excerpt}&quot;</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800 hover:underline font-semibold transition-colors">
              Lorem Ipsum Legere &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}