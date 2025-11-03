'use client';

import { useState } from 'react';
import Header from '../components/Header';
import PrendaCard from '../components/PrendaCard';
import { prendas, obtenerPrendasPorCategoria } from '@/lib/prendas';

const categorias = ['Todos', 'Blusas', 'Vestidos', 'Pantalones', 'Camisas', 'Faldas', 'Tops', 'Chamarras'];

export default function CatalogoPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  
  const prendasMostradas = categoriaSeleccionada === 'Todos'
    ? prendas
    : obtenerPrendasPorCategoria(categoriaSeleccionada);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-primary dark:text-background-light">
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-12 text-primary dark:text-background-light">Catálogo</h2>

            {/* Filtros por Categoría */}
            <div className="flex gap-2 pb-6 border-b border-primary/10 dark:border-background-light/10 overflow-x-auto px-4">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSeleccionada(categoria)}
                  className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${
                    categoriaSeleccionada === categoria
                      ? 'bg-primary text-white dark:bg-white dark:text-primary'
                      : 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-background-light hover:bg-primary/10 dark:hover:bg-primary/30'
                  }`}
                >
                  <p className="text-sm font-medium">{categoria}</p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {prendasMostradas.map((prenda) => (
                <PrendaCard key={prenda.id} prenda={prenda} />
              ))}
            </div>

            {prendasMostradas.length === 0 && (
              <div className="text-center py-16 px-4">
                <p className="text-base leading-relaxed text-primary/80 dark:text-background-light/80">No se encontraron prendas en esta categoría.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

