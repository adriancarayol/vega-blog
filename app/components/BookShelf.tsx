import Image from 'next/image';

const books = [
  {
    id: 1,
    title: 'Los primeros fríos',
    author: 'Vega Cerezo',
    type: 'Poesía',
    image: '/images/books/los-primeros-frios.jpg',
    link: 'https://www.editorialparamo.com/online-store/Los-primeros-fríos-de-Vega-Cerezo-p637954525'
  },
  {
    id: 2,
    title: 'Lo salvaje',
    author: 'Vega Cerezo',
    type: 'Poesía',
    image: '/images/books/book1.jpg',
    link: 'https://www.todostuslibros.com/libros/lo-salvaje_978-84-946307-9-8'
  },
  {
    id: 3,
    title: 'Yo soy un país',
    author: 'Vega Cerezo',
    type: 'Poesía',
    image: '/images/books/book3.jpg',
    link: 'https://www.todostuslibros.com/libros/yo-soy-un-pais_978-84-941372-0-4'
  },
  {
    id: 4,
    title: 'La sirena dormida',
    author: 'Vega Cerezo',
    type: 'Poesía',
    image: '/images/books/book2.jpg',
    link: 'https://www.todostuslibros.com/libros/la-sirena-dormida_978-84-946307-2-9'
  }
];

export default function BookShelf() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 italic">
          The Book Shelf
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <div key={book.id} className="text-center">
                <p className="text-sm text-gray-600 mb-2 italic">{book.type}</p>
                <div className="relative aspect-[3/4] mb-4 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-[200px] mx-auto">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 200px, 200px"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{book.title.toUpperCase()}</h3>
                <p className="text-sm text-gray-600 mb-4">{book.author}</p>
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  Comprar libro
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}