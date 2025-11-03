import { Prenda } from '@/lib/types';

interface PrendaCardProps {
  prenda: Prenda;
}

const WHATSAPP_NUMBER = "1234567890"; // TODO: Actualizar con el número real

export default function PrendaCard({ prenda }: PrendaCardProps) {
  const abrirWhatsApp = () => {
    const mensaje = `Hola, me interesa la prenda: *${prenda.nombre}*\n\nCódigo: ${prenda.codigo}\nPrecio: $${prenda.precio.toFixed(2)}\n\n${prenda.descripcion}`;
    const mensajeEncoded = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeEncoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group relative cursor-pointer" onClick={abrirWhatsApp}>
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200">
        <img 
          alt={prenda.nombre} 
          className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-0" 
          src={prenda.imagenUrl} 
        />
        {prenda.imagenUrlHover && (
          <img 
            alt={`Vista secundaria de ${prenda.nombre}`} 
            className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
            src={prenda.imagenUrlHover} 
          />
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div>
          <h3 className="text-base font-medium leading-normal text-primary dark:text-background-light">{prenda.nombre}</h3>
          {prenda.tallas && (
            <p className="mt-1 text-sm text-primary/70 dark:text-background-light/70">{prenda.tallas}</p>
          )}
        </div>
        <p className="text-base font-semibold text-primary dark:text-background-light">${prenda.precio.toFixed(2)} MXN</p>
        <button className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary dark:bg-background-light text-white dark:text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 active:scale-95 touch-manipulation">
          Consultar por WhatsApp
        </button>
      </div>
    </div>
  );
}

