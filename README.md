# PavimentosPRO — sitio estático
Estructura base para sitio de empresa de pavimentos (HTML/CSS/JS puros) con enfoque corporativo-industrial.

## Contenido
- `index.html` — Home con hero, servicios, proyectos, proceso y CTA.
- `src/servicios.html` — Detalle de servicios (hormigón, asfalto, bases).
- `src/proyectos.html` — Galería de proyectos (ejemplos).
- `src/nosotros.html` — Descripción de la empresa.
- `src/contacto.html` — Formulario básico + enlace a WhatsApp.
- `assets/css/style.css` — Estilos base (responsive + accesibilidad).
- `assets/js/main.js` — Navegación móvil y utilidades.
- `assets/img/*` — Imágenes de ejemplo tomadas del material del cliente.

## Cómo usar
1. Abre `index.html` directamente en el navegador **o** levanta un server local:
   - Con Python 3: `python -m http.server 3000`
   - Con Node: `npx serve` (si tienes instalado `serve`)
2. Edita los textos, rutas y reemplaza el número de WhatsApp en:
   - `index.html` (botones) y `src/contacto.html`
3. Agrega más proyectos y servicios duplicando las tarjetas de ejemplo.

## Sugerencias
- Optimiza las imágenes finales a WebP/AVIF para producción.
- Agrega Google Analytics 4 y reCAPTCHA si vas a desplegar formularios reales.
- Para CMS/headless (opcional): migra a Next.js + Sanity/Strapi cuando el cliente pida autogestión.

## Licencia
Uso libre para tu proyecto con este cliente.
