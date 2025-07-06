'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'INICIO' },
  { href: '/shop', label: 'SHOP' },
  { href: '/biografia', label: 'BIOGRAFÍA' },
  { href: '/publicaciones', label: 'PUBLICACIONES' },
  { href: '/multimedia', label: 'MULTIMEDIA' },
  { href: '/galeria', label: 'GALERÍA' },
  { href: '/prensa', label: 'PRENSA' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 py-2 text-sm tracking-wider transition-colors duration-200
                      ${pathname === href
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-300 hover:text-white'
                      }`}
                  >
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
              className="text-white hover:text-gray-300 focus:outline-none p-2"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg pb-3 z-30" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ href, label }) => (
              <li key={href} className="my-2">
                <Link
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm tracking-wider transition-colors duration-200
                    ${pathname === href
                      ? 'text-white border-l-2 border-white pl-3'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}