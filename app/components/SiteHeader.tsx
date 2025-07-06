import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="bg-white py-8 text-center">
      <Link href="/" className="inline-block">
        <h1 className="text-5xl md:text-6xl font-serif tracking-wider text-gray-800">
          VEGA CEREZO
        </h1>
      </Link>
    </header>
  );
}