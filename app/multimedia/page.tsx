export default function Multimedia() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Presentaciones, book trailer, recitales...
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Haz Click para ver más.
          </p>
        </div>

        {/* Video Corner Section */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            The corner of the video
          </h2>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book Trailer - LO SALVAJE */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/245527930?autoplay=false&muted=false&loop=false&byline=false&portrait=false&title=false"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Book Trailer</p>
                <p className="text-gray-600 dark:text-gray-400">LO SALVAJE</p>
              </div>
            </div>

            {/* Book Trailer - LA SIRENA DORMIDA */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/224908809?autoplay=false&muted=false&loop=false&byline=false&portrait=false&title=false"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Book Trailer</p>
                <p className="text-gray-600 dark:text-gray-400">LA SIRENA DORMIDA</p>
              </div>
            </div>

            {/* Video Poema - PSEUDO-AMOR */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/Y2S8FoHEB1Q?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video Poema</p>
                <p className="text-gray-600 dark:text-gray-400">PSEUDO-AMOR</p>
              </div>
            </div>

            {/* Video presentación - YO SOY UN PAÍS */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/htugWhecV10?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video presentación</p>
                <p className="text-gray-600 dark:text-gray-400">PRESENTACIÓN "YO SOY UN PAÍS"</p>
              </div>
            </div>

            {/* Video recital - MURSIYA POÉTICA 2012 */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/FCSNgyAqDOQ?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video recital</p>
                <p className="text-gray-600 dark:text-gray-400">MURSIYA POÉTICA 2012</p>
              </div>
            </div>

            {/* Canal Autonómico de Murcia 7RM */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/2NSxf2yxc-s?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Canal Autonómico de Murcia 7RM</p>
                <p className="text-gray-600 dark:text-gray-400">"LA SEPARATA" con Oché Cortés</p>
              </div>
            </div>

            {/* Video recital - APERTURA CURSO ACADÉMICO */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dPlrAaY4RwU?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video recital</p>
                <p className="text-gray-600 dark:text-gray-400">APERTURA CURSO ACADÉMICO</p>
              </div>
            </div>

            {/* Video presentación - LA SIRENA DORMIDA */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/24030877?autoplay=false&muted=false&loop=false&byline=false&portrait=false&title=false"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video presentación</p>
                <p className="text-gray-600 dark:text-gray-400">PRESENTACIÓN "LA SIRENA DORMIDA"</p>
              </div>
            </div>

            {/* Book Trailer - YO SOY UN PAÍS */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ZwcvkLjp0Nc?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Book Trailer</p>
                <p className="text-gray-600 dark:text-gray-400">YO SOY UN PAÍS</p>
              </div>
            </div>

            {/* Video presentación - INTRO YO SOY UN PAÍS */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/Ou1AJA069VQ?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video presentación</p>
                <p className="text-gray-600 dark:text-gray-400">INTRO PRESENTACIÓN "YO SOY UN PAÍS"</p>
              </div>
            </div>

            {/* Video recital - LIBERTAD 8 */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/WK9494nPfmA?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video recital</p>
                <p className="text-gray-600 dark:text-gray-400">LIBERTAD 8</p>
              </div>
            </div>

            {/* Video recital - CIUDAD FRAGILIDAD */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/yTEVEIC5ijY?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video recital</p>
                <p className="text-gray-600 dark:text-gray-400">CIUDAD FRAGILIDAD</p>
              </div>
            </div>

            {/* Video - ACCIÓN "POEMAS EN LA LUNA" */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ARVnzIOYoLk?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video</p>
                <p className="text-gray-600 dark:text-gray-400">ACCIÓN "POEMAS EN LA LUNA"</p>
              </div>
            </div>

            {/* Video RECITAL - TRASNOCHANDO 2012 */}
            <div className="space-y-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YL4ASCrGZ-o?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Video RECITAL</p>
                <p className="text-gray-600 dark:text-gray-400">TRASNOCHANDO 2012</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}