import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-amber-200 mt-12 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-amber-700">&copy; {new Date().getFullYear()} Vega Cerezo. Lorem ipsum dolor.</p>
        <p className="text-sm text-amber-600 mt-2">Lorem ipsum web design.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
            <Instagram size={22} />
          </a>
          <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
            <Twitter size={22} />
          </a>
          <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
            <Facebook size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}