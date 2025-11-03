'use client';

import { useState } from 'react';
import Header from '../components/Header';

const WHATSAPP_NUMBER = "51998545204";
const EMAIL = "arelissanchez0310@gmail.com";

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState('');

  const enviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && email && mensaje) {
      // Crear mailto con el mensaje del formulario
      const subject = encodeURIComponent(`Mensaje de ${nombre}`);
      const body = encodeURIComponent(`De: ${email}\n\n${mensaje}`);
      const mailtoLink = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      
      // Abrir el cliente de correo
      window.location.href = mailtoLink;
      
      setMensajeEnviado('Gracias por contactarnos. Te redirigiremos a tu cliente de correo.');
      setNombre('');
      setEmail('');
      setMensaje('');
      
      setTimeout(() => {
        setMensajeEnviado('');
      }, 3000);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-primary dark:text-white font-display">
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        
        <main className="flex flex-1 justify-center py-6 sm:py-10 md:py-20 px-4">
          <div className="layout-content-container flex flex-col w-full max-w-3xl gap-8 sm:gap-12">
            
            {/* Header */}
            <div className="flex flex-wrap justify-center text-center gap-2 md:gap-3">
              <div className="flex w-full flex-col gap-2 md:gap-3">
                <p className="text-primary dark:text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Hablemos</p>
                <p className="text-neutral-500 dark:text-gray-400 text-sm sm:text-base md:text-lg font-normal leading-normal max-w-xl mx-auto px-2">Nos encantaría saber de ti. Escríbenos directamente o déjanos un mensaje a continuación.</p>
              </div>
            </div>

            {/* Botones de Contacto */}
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row flex-1 gap-3 flex-wrap px-2 md:px-4 py-3 max-w-[580px] justify-center">
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 md:px-5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em] grow gap-2 active:bg-primary/20 dark:active:bg-primary/30 transition-colors touch-manipulation" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[#25D366]">sms</span>
                  <span className="truncate">Escríbenos por WhatsApp</span>
                </a>
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 md:px-5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em] grow gap-2 active:bg-primary/20 dark:active:bg-primary/30 transition-colors touch-manipulation" href={`mailto:${EMAIL}`}>
                  <span className="material-symbols-outlined">mail</span>
                  <span className="truncate">Escríbenos por Email</span>
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <h4 className="text-neutral-500 dark:text-gray-400 text-xs md:text-sm font-bold leading-normal tracking-[0.015em] px-4 py-2 text-center">O envíanos un mensaje</h4>
              <form onSubmit={enviarMensaje} className="flex flex-col gap-4 md:gap-6 w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-primary dark:text-white text-sm md:text-base font-medium leading-normal pb-2">Nombre</p>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-primary dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-black/20 dark:border-white/20 bg-white dark:bg-background-dark h-12 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-sm md:text-base font-normal leading-normal transition-shadow" placeholder="Tu nombre completo" required />
                  </label>
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-primary dark:text-white text-sm md:text-base font-medium leading-normal pb-2">Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-primary dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-black/20 dark:border-white/20 bg-white dark:bg-background-dark h-12 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-sm md:text-base font-normal leading-normal transition-shadow" placeholder="tu@email.com" required />
                  </label>
                </div>
                <label className="flex flex-col">
                  <p className="text-primary dark:text-white text-sm md:text-base font-medium leading-normal pb-2">Mensaje</p>
                  <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-primary dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-black/20 dark:border-white/20 bg-white dark:bg-background-dark min-h-32 placeholder:text-neutral-500 dark:placeholder:text-gray-500 p-[15px] text-sm md:text-base font-normal leading-normal transition-shadow" placeholder="Escribe tu mensaje aquí..." required></textarea>
                </label>
                <button type="submit" className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em] grow hover:bg-opacity-90 active:scale-95 transition-opacity touch-manipulation">
                  <span className="truncate">Enviar Mensaje</span>
                </button>
              </form>
            </div>

            {mensajeEnviado && (
              <div className="w-full max-w-md rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                <p className="text-green-800 dark:text-green-200 text-center">{mensajeEnviado}</p>
              </div>
            )}

          </div>
        </main>

      </div>
    </div>
  );
}

