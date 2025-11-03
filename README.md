# Arelis Boutique - Catálogo de Moda

Proyecto de catálogo web para Arelis Boutique desarrollado con **Next.js 16** (React + TypeScript).

## 🚀 Características

- ✅ Galería de prendas con imágenes
- ✅ Búsqueda en tiempo real por nombre, categoría o descripción
- ✅ Enlace directo a WhatsApp por prenda
- ✅ Diseño responsivo y moderno
- ✅ Interfaz intuitiva y atractiva
- ✅ Optimizado para SEO
- ✅ Deploy listo para Vercel

## 🛠️ Tecnología

- **Frontend**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Deployment**: Vercel (recomendado)

## 📁 Estructura del Proyecto

```
ArelisBoutique/
├── app/                        # Páginas Next.js (App Router)
│   ├── components/            # Componentes React
│   │   ├── Header.tsx
│   │   ├── PrendaCard.tsx
│   │   └── PrendaCardModern.tsx
│   ├── catalogo/              # Página de catálogo
│   ├── nosotros/              # Página nosotros
│   ├── contacto/              # Página contacto
│   ├── layout.tsx             # Layout principal
│   ├── globals.css            # Estilos globales
│   └── page.tsx               # Página principal
├── lib/                       # Utilidades y lógica
│   ├── types.ts               # Tipos TypeScript
│   └── prendas.ts             # Datos de prendas
├── legacy/                    # Proyecto anterior en Blazor .NET
├── vercel.json                # Configuración Vercel
├── package.json               # Dependencias
└── README.md                  # Este archivo
```

## 🚦 Configuración

### Requisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Actualizar número de WhatsApp en los componentes:

En `app/components/PrendaCard.tsx` y `app/components/PrendaCardModern.tsx`, línea ~8:
```typescript
const WHATSAPP_NUMBER = "TU_NUMERO_AQUI"; // TODO: Actualizar con el número real
```

Reemplaza `1234567890` con tu número de WhatsApp (formato: código país + número sin espacios ni caracteres especiales).

Ejemplo: Si tu número es +52 55 1234 5678, usa `525512345678`.

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir el navegador en `http://localhost:3000`

## 🌐 Deploy en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. Haz push de tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará Next.js automáticamente
5. Haz clic en Deploy

### Opción 2: Deploy con CLI

```bash
npm install -g vercel
vercel
```

## 🎨 Personalización

### Agregar Prendas

Edita `lib/prendas.ts` y agrega nuevas prendas al array `prendas`:

```typescript
{
  id: 7,
  nombre: "Nombre de la Prenda",
  descripcion: "Descripción de la prenda",
  precio: 150.00,
  imagenUrl: "URL_de_la_imagen",
  imagenUrlHover: "URL_imagen_hover",
  categoria: "Categoría",
  tallas: "S, M, L",
  tags: ["tag1", "tag2"],
  codigo: "COD-007"
}
```

### Cambiar Colores

Los colores principales están en `app/globals.css`:
- `--background-light`: Fondo claro
- `--background-dark`: Fondo oscuro
- `--primary`: Color primario

## 📊 Funcionalidades

### Búsqueda

La búsqueda funciona en tiempo real y busca por:
- Nombre de la prenda
- Descripción
- Categoría
- Tags

### WhatsApp

Al hacer clic en una prenda, se abre WhatsApp con un mensaje predefinido que incluye:
- Nombre de la prenda
- Código
- Precio
- Descripción

## 🔄 Migración desde Blazor

Este proyecto fue migrado desde Blazor Server (.NET 8). El código original se encuentra en la carpeta `legacy/`.

### Mejoras de la Migración

- **Mejor SEO**: SSR automático con Next.js
- **Mejor Performance**: Optimización automática de imágenes
- **Deploy Simplificado**: Un clic en Vercel
- **Mejor DX**: Hot reload instantáneo
- **Más accesible**: Mejor soporte para crawlers

## 📝 Próximas Mejoras

- [ ] Sistema de administración para gestionar prendas
- [ ] Base de datos para persistencia
- [ ] Carrito de compras
- [ ] Sistema de pedidos
- [ ] Integración con pasarela de pagos
- [ ] Filtros avanzados
- [ ] Wishlist/Favoritos

## 📄 Licencia

© 2024 Arelis Boutique. Todos los derechos reservados.
