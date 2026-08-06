# Portafolio de Kelly Núñez

Soy Product Design & Front-End y construí mi portafolio diseñado y desarrollado con React, Next.js y Tailwind CSS.

Este proyecto está construido sobre [NextJS](https://nextjs.org/), un framework de desarrollo full stack basado en React.
En la raíz del proyecto, verás un archivo `package.json` que define las dependencias del proyecto.

Las dependencias principales incluyen:

- `framer-motion` -> Una librería de animación basada en React utilizada para la mayoría de las animaciones.
- `animejs` -> Una librería de animación secundaria utilizada para la animación de cuadrícula escalonada en la sección principal (hero).
- `tailwindcss` -> Todo el diseño de estilos utiliza Tailwind CSS en este proyecto.

Desde tu terminal, ejecuta:

```
npm install
# or
yarn install
```

Esto tomará uno o dos minutos, pero una vez completado, ejecuta:

```
npm run dev
# or
yarn dev
```

Esto iniciará el proyecto en `localhost:3000`

## Estructura de archivos

Dado que se trata de un proyecto de Next.js, sigue el patrón estándar de Next.js para organizar archivos y componentes:

- `_app.tsx/jsx` -> Un archivo que envuelve cada página del sitio.
- `_document.tsx/jsx` -> La versión de Next.js del documento HTML base configurado con clases de Tailwind.
- `index.tsx/jsx` -> Representa la ruta de inicio. Puedes explorar el código base desde aquí, junto con las configuraciones de fuentes personalizadas.

Dentro del directorio `/src/components/` encontrarás todos los componentes modulares renderizados a lo largo del portafolio.

## Estilos

Los estilos se han implementado en su totalidad utilizando [Tailwind CSS](https://tailwindcss.com/).

Abre el archivo `tailwind.config.js/ts` para personalizar la configuración, paletas de colores y tokens de diseño.