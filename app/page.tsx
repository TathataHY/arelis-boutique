'use client';

import Link from 'next/link';
import Header from './components/Header';
import PrendaCardModern from './components/PrendaCardModern';
import { prendas } from '@/lib/prendas';

export default function Home() {
  const prendasDestacadas = prendas.slice(0, 6);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-primary dark:text-background-light">
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* HeroSection */}
            <div className="container mt-5">
              <div className="p-4">
                <div className="flex min-h-[480px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000")' }}>
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Tu estilo, tu esencia
                    </h1>
                    <h2 className="text-white text-sm md:text-base font-normal leading-normal">
                      Descubre las últimas tendencias y encuentra piezas únicas que definen tu look.
                    </h2>
                  </div>
                  <Link href="/catalogo" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 md:h-12 px-4 md:px-5 bg-primary dark:bg-background-light text-white dark:text-primary text-sm md:text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                    <span className="truncate">Ver Catálogo</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SectionHeader */}
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-12 text-primary dark:text-background-light">Catálogo</h2>
            
            {/* ImageGrid - Solo mostrar 6 prendas en el home */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-6 p-4">
              {prendasDestacadas.map((prenda) => (
                <PrendaCardModern key={prenda.id} prenda={prenda} />
              ))}
            </div>

            {/* Ver más */}
            <div className="text-center py-8 px-4">
              <Link href="/catalogo" className="inline-flex items-center justify-center rounded-md h-12 px-6 bg-primary dark:bg-background-light text-white dark:text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                Ver Catálogo Completo
              </Link>
            </div>

            {/* SectionHeader */}
            <h2 id="nosotros" className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-12 text-primary dark:text-background-light">Nosotros</h2>
            
            {/* About Section */}
            <div className="px-4 py-3">
              <p className="text-base leading-relaxed text-primary/80 dark:text-background-light/80">
                Creemos en la moda como una forma de expresión personal. Nuestra misión es ofrecer piezas atemporales y de alta calidad que te permitan construir un armario versátil y con estilo. Cada prenda está seleccionada pensando en la comodidad, la elegancia y las últimas tendencias, para que te sientas segura y única en cada ocasión.
              </p>
            </div>

            {/* Contact Section */}
            <div id="contacto" className="text-center py-16 px-4">
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 text-primary dark:text-background-light">Contacto</h2>
              <p className="text-base leading-relaxed text-primary/80 dark:text-background-light/80 mb-6">
                ¿Tienes alguna pregunta o quieres hacer un pedido? <br/>
                Contáctanos a través de nuestras redes sociales.
              </p>
              <div className="flex justify-center items-center gap-6">
                <a className="text-primary dark:text-background-light transition-transform hover:scale-110" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
                <a className="text-primary dark:text-background-light transition-transform hover:scale-110" href="#" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
