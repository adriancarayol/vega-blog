import Link from 'next/link';

const publications = [
  {
    id: 1,
    title: 'El coloquio de los perros',
    description: 'Reseña realizada por Carmen Piqueras sobre el libro "Yo soy un país" en la publicación "El coloquio de los perros"',
    type: 'review',
    link: 'http://elcoloquiodelosperros.weebly.com/la-biblioteca-de-alonso-quijano/yo-soy-un-pais'
  },
  {
    id: 2,
    title: 'Revista Entrelíneas',
    description: 'Resumen de artículos de opinión y entrevistas realizadas en la revista sociocultural de Alhama de Murcia Entrelíneas.',
    type: 'articles',
    link: 'https://0eb5233b-6e67-4609-9c3d-08e4ab04f19d.filesusr.com/ugd/312754_427ef7787dfb6be53040124411a934f4.pdf'
  },
  {
    id: 3,
    title: 'Revista Entrelíneas - Entrevistas',
    description: 'Entrevistas realizadas por Vega Cerezo para la revista Entrelíneas a la escritora Julia Navarro y a la bailarina Tamara Rojo.',
    type: 'interviews',
    link: 'https://0eb5233b-6e67-4609-9c3d-08e4ab04f19d.filesusr.com/ugd/312754_46869b58783a4cfe9c8587a7c301af1a.pdf'
  },
  {
    id: 4,
    title: 'Revista Entrelíneas - Reportaje',
    description: 'Reportaje de actualidad sobre la violencia de género realizado por Vega Cerezo para la revista Entrelíneas.',
    type: 'reportage',
    link: 'https://0eb5233b-6e67-4609-9c3d-08e4ab04f19d.filesusr.com/ugd/312754_59e66855b19d5936961fcfc1b26c83ab.pdf'
  },
  {
    id: 5,
    title: 'Publicación Gatos y Mangurrias',
    description: 'Poema publicado en la edición digital de Gatos y Mangurrias.',
    type: 'poetry',
    link: 'http://issuu.com/rumorvisual/docs/siete_gatosymangurrias#download'
  },
  {
    id: 6,
    title: 'Plaquette realizada para Mursiya Poética 2012',
    description: 'Plaquette realizada por Cristina Franco para el recital conjunto de Vega Cerezo y el cantautor Ginés Navarro.',
    type: 'plaquette',
    link: 'http://colectivoiletrados.blogspot.com.es/search?q=forever+blue'
  },
  {
    id: 7,
    title: 'Publicación Manifiesto Azul. Colectivo Iletrados',
    description: 'Poema publicado en la revista Manifiesto Azul editada por el Colectivo Iletrados.',
    type: 'poetry',
    link: 'http://es.scribd.com/doc/97686109/Manifiesto-Azul-12'
  },
  {
    id: 8,
    title: 'Publicación La sombra del membrillo',
    description: 'Reportaje realizado para la edición digital de la revista La sombra del membrillo.',
    type: 'reportage',
    link: 'http://lasombradelmembrillo.com/VI/num/la-sombra-13/nordbrandt/'
  }
];

export default function PublicacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Galería de publicaciones.</h1>
          <p className="text-lg text-gray-600">Haz Click en los enlaces para leer más.</p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12 bg-gray-900 text-white py-2 inline-block px-4">
            Publicaciones
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {publications.map((publication) => (
                <div key={publication.id} className="border-b pb-8 last:border-b-0">
                  <div className="space-y-4">
                    <Link 
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:opacity-80 transition-opacity"
                    >
                      <h3 className="text-2xl font-serif text-gray-900 hover:text-blue-600 transition-colors">
                        {publication.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 leading-relaxed">{publication.description}</p>
                    
                    {/* Publication type badge and link */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded">
                        {publication.type === 'review' && 'Reseña'}
                        {publication.type === 'articles' && 'Artículos'}
                        {publication.type === 'interviews' && 'Entrevistas'}
                        {publication.type === 'reportage' && 'Reportaje'}
                        {publication.type === 'poetry' && 'Poesía'}
                        {publication.type === 'plaquette' && 'Plaquette'}
                      </span>
                      <Link 
                        href={publication.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}