'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Twitter, Facebook, BookOpen, Image as ImageIcon, User, Home, Award } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Inicio', Icon: Home },
  { href: '/biografia', label: 'Biografía', Icon: User },
  { href: '/publicaciones', label: 'Publicaciones', Icon: BookOpen },
  { href: '/galeria', label: 'Galería', Icon: ImageIcon },
  { href: '/prensa', label: 'Prensa', Icon: Award },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Site Title */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-serif font-bold text-amber-700 hover:text-amber-800 transition-colors">
              Vega Cerezo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-2">
              {navItems.map(({ href, label, Icon }) => (
                <li key={href} className="mx-2">
                  <Link
                    href={href}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                      ${pathname === href
                        ? 'bg-amber-700 text-white shadow-lg'
                        : 'text-amber-700 hover:bg-amber-100 hover:text-amber-800'
                      }`}
                  >
                    <Icon size={18} className="mr-2" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-amber-700 hover:text-amber-800 focus:outline-none p-2 rounded-md hover:bg-amber-100"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg pb-3 z-30 border-t border-amber-100" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ href, label, Icon }) => (
              <li key={href} className="my-2">
                <Link
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                    ${pathname === href
                      ? 'bg-amber-700 text-white shadow-lg'
                      : 'text-amber-700 hover:bg-amber-100 hover:text-amber-800'
                    }`}
                >
                  <Icon size={18} className="mr-2" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-amber-200 px-4">
            <p className="text-sm text-amber-600 mb-2 text-center">Lorem ipsum Vega Cerezo:</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-amber-600 hover:text-amber-800"><Instagram size={24} /></a>
              <a href="#" className="text-amber-600 hover:text-amber-800"><Twitter size={24} /></a>
              <a href="#" className="text-amber-600 hover:text-amber-800"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}