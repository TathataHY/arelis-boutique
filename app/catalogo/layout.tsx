import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo - Arelis Boutique',
  description: 'Explora nuestro catálogo completo de prendas elegantes y modernas. Encuentra vestidos, blusas, pantalones y más.',
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

