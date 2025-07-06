import Image from 'next/image';
import Link from 'next/link';

const books = [
  {
    id: 1,
    title: 'Lo salvaje',
    coverUrl: '/images/books/book1.jpg',
    purchaseUrl: 'https://www.todostuslibros.com/autor/cerezo-martin-vega',
    description: 'Lo salvaje, el tercer libro de poemas de Vega Cerezo, es como una de esas piedras deslumbrantes que buscábamos de niños en la tierra. Esas que algunas raras veces aparecían entre otras vulgares, apagadas, semejantes entre sí, piedras que no ofrecían -a nuestros ojos necesitados de belleza- ninguna forma, ninguna arista, ningún color ni textura memorables. Pero quién no recuerda haber dado un día, sin esperarlo siquiera, con esa: la hermosa, la extraña, la diferente a todas las demás. Así este libro: entrañable y poderoso, un libro para volver a él una y mil veces, para tenerlo siempre cerca, para hacer de él un objeto que medie entre nuestro cuerpo y el mundo, un objeto que a la vez desnude y embellezca la brutalidad del mundo, un objeto que nos exponga y nos proteja de esa brutal belleza.'
  },
  {
    id: 2,
    title: 'La sirena dormida',
    coverUrl: '/images/books/book2.jpg',
    purchaseUrl: 'https://www.todostuslibros.com/autor/cerezo-martin-vega',
    description: 'La Sirena dormida narra en sus versos, el viaje hacia la madurez de una mujer. La añoranza del mar, de las playas donde buscó y halló la serenidad y el descubrimiento de un espacio en el que renace formando parte de él.\n\nTocada ya para siempre por una mirada azul y salada, se debate entre la mujer que despierta en ella y la sirena que la gobierna.'
  },
  {
    id: 3,
    title: 'Yo soy un país',
    coverUrl: '/images/books/book3.jpg',
    purchaseUrl: 'https://www.todostuslibros.com/autor/cerezo-martin-vega',
    description: 'Los poemas que acoge este libro conforman un mapa físico que nos muestra la geografía del alma en la que vislumbramos los surcos del tiempo en el relieve de sus versos: Altas cumbres donde reinan los sueños, hondonadas que la noche colma de su sombra, el suceder de los días bramando como un río caudaloso, lagos que son espejos donde mirarse, volcánicas pasiones, montañas intransitables como una mancha que derrama el pasado, llanuras abrasadas por la luz, selvas habitadas por la soledad... Toda una radiografía de la vida, que el lector ha de completar para que adquiera sentido.'
  },
  {
    id: 4,
    title: 'Yo soy un país (ebook)',
    coverUrl: '/images/books/book4.jpg',
    purchaseUrl: 'https://www.todostuslibros.com/autor/cerezo-martin-vega',
    description: 'Un ebook cuya maquetación se adapta a los dispositivos multimedia, donde todos los poemas van acompañados de audios de lectura o videopoemas y que incluye la traducción al inglés realizada por el poeta Ángel Paniagua y las voces que han participado grabando poemas para esta edición: Mitxel Casas, Ángel Paniagua, Marisa López Soria, Ginés Aniorte, Ginés Piñero, Carmen Piqueras, Oché Cortés y Jerónimo Tristante.'
  }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif text-gray-900 mb-4 tracking-wider">TIENDA ONLINE</h1>
          <h2 className="text-2xl font-serif text-gray-700 mb-8">Raspabook</h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-2xl italic text-gray-600 mb-2">
              Sacudo. Escribo. Arrecio. Amago. Y, a veces
            </p>
            <p className="text-2xl italic text-gray-600 mb-2">
              -solo a veces-
            </p>
            <p className="text-2xl italic text-gray-600 mb-8">
              llega el verso.
            </p>
            
            <p className="text-lg text-gray-600 mt-6">
              "Papel en blanco"
            </p>
            <p className="text-lg text-gray-600">
              - Yo soy un país -
            </p>
          </div>
          
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12 bg-gray-900 text-white py-2 inline-block px-4">
            Librería Online
          </h2>
          
          <div className="grid gap-16 max-w-4xl mx-auto">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <Link href={book.purchaseUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={book.coverUrl}
                      alt={book.title}
                      width={189}
                      height={291}
                      className="shadow-lg hover:shadow-xl transition-shadow"
                    />
                  </Link>
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-serif text-gray-900">{book.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {book.description}
                  </p>
                  <Link
                    href={book.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Comprar libro
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}