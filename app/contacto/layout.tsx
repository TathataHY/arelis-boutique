import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Arelis Boutique',
  description: 'Contacta con Arelis Boutique. Estamos aquí para ayudarte a encontrar las prendas perfectas.',
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

