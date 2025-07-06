import Image from 'next/image';

export default function PoemOfTheMonth() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-serif text-center mb-8 text-gray-800 bg-gray-100 py-3 rounded italic">
        Poema del mes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ANTÁRTIDA</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Dejaré este mundo más sucio y codicioso<br />
              de cómo lo hallé.
            </p>
            <p>
              Esta es la primera verdad que debéis saber:<br />
              hemos venido a quebrar la Tierra.
            </p>
            <p>
              Nosotros hemos venido a llenar los mares, de plástico,<br />
              las playas de muertos, los cementerios de mujeres.
            </p>
            <p>
              No era nuestro propósito, pero<br />
              nos seduce esa sangre, los gritos,<br />
              el llanto, el quejido rudo y bronco de los mataderos.
            </p>
            <p className="mt-6">
              Hace unos meses vi un documental sobre la Antártida.<br />
              Me alivia ese frío: la inmensidad blanca y silenciosa<br />
              de los polos.
            </p>
            <p>
              En la escena, más de cien mil morsas se hacinan en una playa<br />
              de la costa nororiental de Rusia desposeídas<br />
              de su territorio de hielo.
            </p>
            <p>
              Un paisaje abrumador de cuerpos amontonados<br />
              formando una vasta pradera que perturba<br />
              por su extraña composición.
            </p>
            <p>
              Algunas reptan por el acantilado que nace al pie de la playa.<br />
              Ochenta metros de fragosa aventura<br />
              para tener espacio.
            </p>
            <p>
              Luego, el hambre les araña las entrañas y<br />
              comienzan el descenso de una altura que<br />
              nunca debían haber escalado.
            </p>
            <p>
              La imagen es desoladora: cientos de morsas<br />
              se precipitan al resbalar por la pendiente golpeándose<br />
              -aparatosamente- una y otra vez contra las rocas<br />
              hasta caer, a plomo, sobre la orilla.
            </p>
            <p>
              Queda una hilera de cadáveres reventados coronando<br />
              la margen de esa playa antártica.
            </p>
            <p className="mt-6">
              Lloro.<br />
              Lloro como se llora la muerte de un amigo,<br />
              de un padre, de mi perro,<br />
              de los niños migrantes que mueren de frío<br />
              en los campos de refugiados esperando<br />
              un hueco en la próspera Europa.
            </p>
            <p>
              Lloro sin consuelo.<br />
              Sé que me acompañará esa certeza en la partida.<br />
              Ese frío en mi frío corazón será mi último recuerdo.
            </p>
            <p className="mt-6">
              Hijos míos, debéis saber esta verdad:<br />
              hemos venido a incendiar la casa<br />
              con vosotros dentro.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-80">
            <Image
              src="/images/2.jpg"
              alt="Vega Cerezo"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}