'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-primary/10 dark:border-b-background-light/10 px-4 md:px-10 py-4 bg-background-light dark:bg-background-dark relative">
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary dark:text-background-light">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-base md:text-lg font-bold leading-tight tracking-[-0.015em] text-primary dark:text-background-light">Arelis Boutique</h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link href="/" className="text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70">Inicio</Link>
          <Link href="/catalogo" className="text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70">Catálogo</Link>
          <Link href="/nosotros" className="text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70">Nosotros</Link>
          <Link href="/contacto" className="text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70">Contacto</Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex items-center justify-center w-8 h-8 text-primary dark:text-background-light"
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background-light dark:bg-background-dark border-b border-primary/10 dark:border-background-light/10 md:hidden z-50">
          <div className="flex flex-col py-2">
            <Link href="/" className="px-4 py-3 text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70 hover:bg-primary/5 dark:hover:bg-background-light/5" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/catalogo" className="px-4 py-3 text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70 hover:bg-primary/5 dark:hover:bg-background-light/5" onClick={() => setMenuOpen(false)}>
              Catálogo
            </Link>
            <Link href="/nosotros" className="px-4 py-3 text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70 hover:bg-primary/5 dark:hover:bg-background-light/5" onClick={() => setMenuOpen(false)}>
              Nosotros
            </Link>
            <Link href="/contacto" className="px-4 py-3 text-sm font-medium leading-normal text-primary dark:text-background-light hover:opacity-70 hover:bg-primary/5 dark:hover:bg-background-light/5" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

