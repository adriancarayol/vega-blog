import Image from 'next/image';
import Link from 'next/link';

const pressItems = [
  {
    id: 1,
    date: 'Octubre 2023',
    title: '7RM "Entre mujeres" con Tati García',
    type: 'interview',
    media: '7RM',
    description: 'Entrevista en 7RM con Tati García "Entre mujeres".',
    link: 'https://www.la7tv.es/video/entre-mujeres/pemw07013t-wmv/20230428114416016359.html',
    imageUrl: '/images/press/7rm-logo.jpg'
  },
  {
    id: 2,
    date: 'Octubre 2022',
    title: 'RNE - Gente Despierta',
    type: 'interview',
    media: 'RNE',
    description: 'Entrevista en RNE con Julia Valera y Lara López.',
    link: 'https://www.rtve.es/play/audios/gente-despierta/segunda-guerra-mundial-sin-mitos-ni-topicos/6868002/',
    imageUrl: '/images/press/rne-logo.png'
  },
  {
    id: 3,
    date: 'Octubre 2022',
    title: 'RNE - Informativo de Murcia',
    type: 'interview',
    media: 'RNE',
    description: 'Entrevista en RNE hablando de librerías, libreras, libreros y poesía con Javier Cortijo.',
    link: 'https://www.rtve.es/play/audios/informativo-de-murcia/rne-murcia-entrevista-vega-cerezo-poeta/6722080/',
    imageUrl: '/images/press/rne-logo.png'
  },
  {
    id: 4,
    date: 'Noviembre 2017',
    title: 'Blog Dare girl.es',
    type: 'review',
    media: 'Dare girl.es',
    description: '#BookTues: "Lindos gatitos", por Amor Costa. Una reseña de "Lo salvaje" de Vega Cerezo.',
    link: 'http://daregirl.es/2017/11/14/booktues-lindos-gatitos-amor-costa-una-resena-lo-salvaje-vega-cerezo/'
  },
  {
    id: 5,
    date: 'Noviembre 2017',
    title: 'Onda Regional de Murcia - La radio del siglo',
    type: 'interview',
    media: 'Onda Regional',
    description: 'Entrevista realizada por Jacinto Nicolás en su programa "La radio del siglo"',
    link: 'http://www.orm.es/programas/la-radio-del-siglo-entrevista-a-la-escritora-vega-cerezo/',
    imageUrl: '/images/press/onda-regional-logo.jpg'
  },
  {
    id: 6,
    date: 'Noviembre de 2017',
    title: 'Onda Regional de Murcia - Club de lectura',
    type: 'interview',
    media: 'Onda Regional',
    description: 'Entrevista realizada por Gregorio León en su programa Club de lectura',
    link: 'http://www.orm.es/programas/clubdelectura/club-de-lectura-vega-cerezo/',
    imageUrl: '/images/press/onda-regional-logo.jpg'
  },
  {
    id: 7,
    date: 'Octubre de 2016',
    title: 'Onda Regional de Murcia - La radio del siglo',
    type: 'interview',
    media: 'Onda Regional',
    description: 'Entrevista realizada por Jacinto Nicolás en su programa "La radio del siglo"',
    link: 'http://www.orm.es/programas/laradiodelsiglo/la-radio-del-siglo-entrevista-a-la-escritora-vega-cerezo/',
    imageUrl: '/images/press/onda-regional-logo.jpg'
  },
  {
    id: 8,
    date: 'Octubre de 2016',
    title: 'Diario La Opinión de Murcia',
    type: 'interview',
    media: 'La Opinión',
    description: 'Entrevista realizada por Antonio Ubero.',
    link: 'https://0eb5233b-6e67-4609-9c3d-08e4ab04f19d.filesusr.com/ugd/312754_f2404f593832483bad73bd0a48670555.pdf',
    imageUrl: '/images/press/la-opinion-logo.jpg'
  },
  {
    id: 9,
    date: 'Octubre de 2016',
    title: 'Diario La Verdad de Murcia',
    type: 'reportage',
    media: 'La Verdad',
    description: 'Reportaje en el diario La Verdad de Murcia.',
    link: 'http://www.laverdad.es/culturas/libros/futuro-esperanzador-20171013004219-ntvo.html',
    imageUrl: '/images/press/la-verdad-logo.jpg'
  },
  {
    id: 10,
    date: 'Miércoles 26 de Agosto de 2015',
    title: 'Diario La Verdad de Murcia - Estío a la murciana',
    type: 'interview',
    media: 'La Verdad',
    description: 'Entrevista realizada por Antonio Arco dentro de la sección "Estío a la murciana"',
    link: 'https://0eb5233b-6e67-4609-9c3d-08e4ab04f19d.filesusr.com/ugd/312754_f2404f593832483bad73bd0a48670555.pdf',
    imageUrl: '/images/press/la-verdad-logo.jpg'
  },
  {
    id: 11,
    date: 'Jueves 16 de abril',
    title: 'X Aniversario Premios Mandarache',
    type: 'event',
    media: 'Premio Mandarache',
    description: 'RECITAL LITERARIO -10º Aniversario Mandarache. Invitada: Vega Cerezo, escritora regional invitada (2014) con su poemario Yo soy un país.',
    link: 'http://www.premiomandarache.es/semanaLibro.asp',
    imageUrl: '/images/press/mandarache-logo.png'
  },
  {
    id: 12,
    date: '2014',
    title: '7RM "La separata" con Oché Cortés',
    type: 'interview',
    media: '7RM',
    description: 'Entrevista en el programa "La separata" de 7RM con Oché Cortés.',
    link: 'http://cmon.fcdmurcia.es/entrevista-a-vega-cerezo-la-poesia-o-el-mar/',
    imageUrl: '/images/press/7rm-logo.jpg'
  },
  {
    id: 13,
    date: '2014',
    title: 'Entrevista para C\' Mon Murcia',
    type: 'interview',
    media: 'C\' Mon Murcia',
    description: 'Gracias a Araceli Muñoz García y a Santiago Ros Navarro por el rato tan lindo que compartimos en el jardín de La Pólvora.',
    link: 'http://cmon.fcdmurcia.es/entrevista-a-vega-cerezo-la-poesia-o-el-mar/',
    imageUrl: '/images/press/cmon-murcia.jpg'
  },
  {
    id: 14,
    date: '2014',
    title: 'Premios Mandarache 2014',
    type: 'event',
    media: 'Premio Mandarache',
    description: 'Escritor regional invitado.',
    link: 'http://premiomandarache.cartagena.es/escritor_invitado.asp',
    imageUrl: '/images/press/mandarache-award.jpg'
  },
  {
    id: 15,
    date: '2014',
    title: 'Gala premios Mandarache 2014',
    type: 'event',
    media: 'Premio Mandarache',
    description: 'Gracias a la IX Edición del Premio Hache y Mandarache de Cartagena por el regalo de haber podido compartir mi poemario Yo soy un país con los alumnos de los IES de Cartagena.',
    link: 'https://www.youtube.com/watch?v=3mwvtVhqRPA&list=UULvNyqpVr51Dfql7qNkwETw',
    imageUrl: '/images/press/gala-mandarache.jpg'
  },
  {
    id: 16,
    date: '2013',
    title: 'Canal 7RM "La separata"',
    type: 'interview',
    media: '7RM',
    description: 'Entrevista en Canal 7RM con Oché Cortés en el programa "La separata"',
    link: 'https://vimeo.com/65951304',
    imageUrl: '/images/press/7rm-logo.jpg'
  },
  {
    id: 17,
    date: '2013',
    title: 'Presentación "Yo soy un país"',
    type: 'event',
    media: 'Presentación',
    description: 'Presentación de "Yo soy un país" en Las Claras, Murcia',
    link: 'https://vimeo.com/78613389',
    imageUrl: '/images/press/yo-soy-un-pais-cover.jpg'
  },
  {
    id: 18,
    date: '2012',
    title: 'Onda Regional de Murcia',
    type: 'interview',
    media: 'Onda Regional',
    description: 'Programa radiofónico "Las personal del verbo" con José Antonio Martinez.',
    link: 'http://vega-cerezo-martin.blogspot.com.es/2012/11/blog-post_16.html',
    imageUrl: '/images/press/onda-regional-small.jpg'
  },
  {
    id: 19,
    date: '2010',
    title: 'Diario La Verdad de Murcia',
    type: 'interview',
    media: 'La Verdad',
    description: 'Entrevista en el diario La verdad de Murcia',
    link: 'http://www.laverdad.es/murcia/v/20101228/region/playa-encontre-serenidad-orden-20101228.html',
    imageUrl: '/images/press/la-verdad-banner.jpg'
  }
];

export default function PrensaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Press corner</h1>
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-8 bg-gray-900 text-white py-2 inline-block px-4">
            Rincón de prensa
          </h2>
        </div>
      </section>

      {/* Press Items Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {pressItems.map((item) => (
                <article key={item.id} className="border-b pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    {item.imageUrl && (
                      <div className="flex-shrink-0">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={200}
                            height={150}
                            className="rounded shadow-sm hover:shadow-md transition-shadow"
                          />
                        </a>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <time>{item.date}</time>
                        <span>•</span>
                        <span className="font-medium">{item.media}</span>
                      </div>
                      
                      <h3 className="text-xl font-serif text-gray-900">
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 underline">
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      
                      <p className="text-gray-600">{item.description}</p>
                      
                      {/* Type badge */}
                      <div>
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded">
                          {item.type === 'interview' && 'Entrevista'}
                          {item.type === 'review' && 'Reseña'}
                          {item.type === 'reportage' && 'Reportaje'}
                          {item.type === 'event' && 'Evento'}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}