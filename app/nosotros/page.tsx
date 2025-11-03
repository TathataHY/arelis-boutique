import Header from '../components/Header';

export default function NosotrosPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-primary dark:text-background-light">
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        
        {/* Main Content */}
        <main className="flex flex-1 justify-center py-6 md:py-10 px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 gap-8 md:gap-12 lg:gap-16">
            
            {/* HeaderImage */}
            <div className="w-full">
              <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden h-48 md:h-64 lg:h-80 xl:h-[420px] rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAluLtC2qFN7h8fuo501h7K9A83VDk8-uj-h5SRQ-repwcvNebQy6MXBYFEm0-yOi0Xy3XMjICUeDV8sB3Nu8lFjRk9xxFRPdH9Onc3KVxgcfv-mG82qSNziRq3zrVCBY5TDb1SjY_ZKBnjRy-C2chB5lwOrVR_1ROBVaOq_FmZhB-_AJr-HKIx3mgXoQRPOjNRMMwZSvrJTiGMhIV2NiwPR5i7u5SbQimoJyISvxaxw6zIWgVIJRzeFViC7jLqV_v-SoVwHILQUio")' }}></div>
            </div>

            {/* PageHeading */}
            <div className="flex flex-col gap-2 md:gap-4 text-center px-4">
              <h1 className="text-primary dark:text-background-light text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tighter">Nuestra Historia</h1>
            </div>

            {/* BodyText */}
            <div className="px-4">
              <p className="text-primary dark:text-background-light text-sm md:text-base lg:text-lg font-normal leading-relaxed text-center max-w-3xl mx-auto">
                Nacimos de una idea simple: crear prendas que trascienden las temporadas. En un mundo de tendencias fugaces, buscamos la belleza en lo duradero, la elegancia en la simplicidad y la calidad en cada detalle. Nuestra misión es vestir a personas que valoran la autenticidad y el diseño atemporal.
              </p>
            </div>

            {/* MetaText / Pull Quote */}
            <div className="px-4">
              <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg lg:text-xl font-normal leading-normal py-4 md:py-6 lg:py-8 px-4 text-center border-y border-primary/10 dark:border-background-light/10 italic">
                &quot;Creemos en la moda como una forma de expresión personal, no como una imposición.&quot;
              </p>
            </div>

            {/* Content Section: Our Philosophy */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center px-4">
              <div className="flex-1 flex flex-col gap-3 md:gap-4">
                <h2 className="text-primary dark:text-background-light text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">Nuestra Filosofía</h2>
                <p className="text-primary dark:text-background-light text-sm md:text-base font-normal leading-relaxed">
                  Cada pieza es un reflejo de nuestros valores fundamentales: artesanía, sostenibilidad y comunidad. Trabajamos con artesanos locales, utilizando materiales de origen responsable para minimizar nuestro impacto ambiental. Creemos en un proceso de producción lento y consciente, donde la calidad prevalece sobre la cantidad.
                </p>
                <p className="text-primary dark:text-background-light text-sm md:text-base font-normal leading-relaxed">
                  Nuestra visión es construir más que una marca; aspiramos a crear una comunidad de individuos que aprecian el diseño thoughtful y comparten nuestro compromiso con un futuro más sostenible en la moda.
                </p>
              </div>
              <div className="flex-1 w-full">
                {/* Secondary Image */}
                <div className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6DTgWGZrwilltCWyFiRAv4YPxzFpWFD52m8yLAs3AofS7wZKf5CMlDpw0ncUAUWYmYCYce7V4GXniAlw-o8e3eQUXiFGBcvjXsJdW_-MOXjaR4lpxVKC1bZZqna5oOOcdZisA4cSQMm9RGW-odp1EOB2FzcRa6DSjuCIQ9CFNnUWdEm3GgH84WGkemrFQ5-Ptrm6kBh2X0-RgDn_2iGTzm7xp4meQoFmjMRa9PTHdyFWxDuWyKv0J9LD7IYjLpsQu2qmgFgfu1HM")' }}></div>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

