import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros - Arelis Boutique',
  description: 'Conoce más sobre Arelis Boutique y nuestra misión de ofrecer moda elegante y de calidad.',
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

