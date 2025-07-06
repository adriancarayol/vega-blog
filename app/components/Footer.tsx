import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Vega Cerezo. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.instagram.com/vegacerezomartin/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/vega.cerezomartin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}