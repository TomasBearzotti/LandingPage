# Portfolio de Tomás Bearzotti

Portfolio personal de Tomás Bearzotti, desarrollado con Next.js y TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- Lucide React
- Vercel Analytics

## Requisitos

- Node.js 20.9 o superior
- npm

## Ejecutar localmente

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run lint`: ejecuta ESLint.
- `npm run build`: genera la build de producción.
- `npm run start`: inicia la aplicación compilada.

## Estructura principal

- `app/`: layout, página principal, estilos globales y metadata.
- `components/`: secciones del portfolio y componentes de interfaz.
- `public/`: imágenes y otros recursos estáticos.

## Deploy

El proyecto está preparado para desplegarse en Vercel. También puede publicarse en cualquier plataforma compatible con aplicaciones Next.js ejecutando `npm run build` y `npm run start`.
