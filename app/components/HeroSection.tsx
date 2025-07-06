import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src="/images/heading.png"
          alt="Beach scene"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 py-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-wider uppercase">
            MI VIENTRE HA SIDO CUEVA<br />
            DE BELLÍSIMOS ANIMALES
          </h1>
          <p className="text-xl md:text-2xl italic">Lo salvaje, Vega Cerezo.</p>
        </div>
      </div>
    </section>
  );
}