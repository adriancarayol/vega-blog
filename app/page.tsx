import { mockData } from './lib/mockData';

export default function Home() {
  return (
    <div className="animate-fadeIn p-6 md:p-10 bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg shadow-xl">
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif text-amber-800 mb-4">{mockData.inicio.title}</h1>
        <p className="text-xl text-amber-600">Lorem ipsum ad Vega Cerezo.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-amber-700 mb-6 border-b-2 border-amber-200 pb-2">Lorem Ipsum Poema</h2>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-serif text-amber-700 mb-4">{mockData.inicio.featuredPoem.title}</h3>
          {mockData.inicio.featuredPoem.lines.map((line, index) => (
            <p key={index} className="text-gray-700 leading-relaxed my-1">{line}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-amber-700 mb-6 border-b-2 border-amber-200 pb-2">Lorem Ipsum Novitates</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-800 text-lg">{mockData.inicio.latestNews}</p>
          <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
            Lorem Ipsum Legere
          </button>
        </div>
      </section>
    </div>
  );
}