# SEO Setup - zotti.site

## ✅ Implementaciones realizadas

### 1. Metadata Completa (layout.tsx)
- ✅ Título y descripción optimizados
- ✅ Keywords relevantes
- ✅ OpenGraph tags para redes sociales
- ✅ Twitter Cards
- ✅ Configuración de robots y googleBot
- ✅ Meta tag de verificación de Google Search Console

### 2. Archivos de SEO
- ✅ `app/robots.ts` - Configuración de crawling
- ✅ `app/sitemap.ts` - Sitemap dinámico XML

### 3. Structured Data (JSON-LD)
- ✅ Schema.org markup tipo "Person"
- ✅ Información profesional estructurada

---

## 🚀 Próximos pasos en Google Search Console

### Paso 1: Obtener código de verificación
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Selecciona tu propiedad `zotti.site` (ya verificada)
3. Ve a **Configuración** → **Verificación**
4. Copia el código de verificación HTML meta tag

### Paso 2: Actualizar el código de verificación
1. Abre `app/layout.tsx`
2. Busca la línea:
   ```typescript
   verification: {
     google: "tu-codigo-de-verificacion-aqui",
   },
   ```
3. Reemplaza `"tu-codigo-de-verificacion-aqui"` con tu código real
4. Ejemplo: `google: "abcd1234efgh5678ijkl9012mnop3456"`

### Paso 3: Desplegar cambios
```powershell
git add .
git commit -m "feat: add SEO optimization and Google Search Console setup"
git push origin main
```

### Paso 4: Enviar sitemap en Google Search Console
1. Espera a que Cloudflare Pages despliegue los cambios (~1-2 minutos)
2. Ve a Google Search Console → **Sitemaps**
3. En "Añadir un nuevo sitemap", ingresa: `sitemap.xml`
4. Haz clic en **Enviar**
5. El sitemap será procesado en 24-48 horas

### Paso 5: Solicitar indexación
1. En Google Search Console, ve a **Inspección de URLs**
2. Ingresa: `https://zotti.site`
3. Haz clic en **Solicitar indexación**
4. Repite para URLs importantes:
   - `https://zotti.site/#about`
   - `https://zotti.site/#projects`
   - `https://zotti.site/#contact`

---

## 📊 Verificar que todo funciona

### Probar robots.txt
Visita: `https://zotti.site/robots.txt`

Deberías ver:
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://zotti.site/sitemap.xml
```

### Probar sitemap.xml
Visita: `https://zotti.site/sitemap.xml`

Deberías ver un XML con todas tus URLs.

### Probar metadata
1. Abre `https://zotti.site` en Chrome
2. Click derecho → **Ver código fuente**
3. Busca `<meta property="og:title"` - debería estar presente
4. Busca `application/ld+json` - debería mostrar tu structured data

### Herramientas de validación
- **Rich Results Test**: https://search.google.com/test/rich-results
  - Pega `https://zotti.site` y valida el structured data
- **OpenGraph Debugger**: https://www.opengraph.xyz/
  - Verifica cómo se ve tu sitio en redes sociales

---

## 🎯 Optimizaciones adicionales recomendadas

### 1. Actualizar handle de Twitter
En `app/layout.tsx`, cambia:
```typescript
creator: "@tuusuario", // ← Cambia esto por tu handle real
```

### 2. Agregar perfiles sociales
En el JSON-LD del `layout.tsx`, descomenta y actualiza:
```typescript
sameAs: [
  "https://github.com/TomasBearzotti",
  "https://linkedin.com/in/tu-perfil",
  // Agrega más perfiles
],
```

### 3. Crear imagen OG optimizada
1. Crea una imagen 1200x630px con tu branding
2. Guárdala en `public/og-image.jpg`
3. Actualiza en `layout.tsx`:
   ```typescript
   images: [
     {
       url: "/og-image.jpg", // ← Cambia de placeholder.jpg
       width: 1200,
       height: 630,
       alt: "Tomás Bearzotti - Portfolio",
     },
   ],
   ```

### 4. Mejorar performance
- Optimizar imágenes con WebP
- Implementar lazy loading
- Minificar CSS/JS (Next.js lo hace automáticamente en producción)

---

## 📈 Monitoreo

### Métricas importantes en Google Search Console
- **Cobertura**: Verifica que todas tus páginas estén indexadas
- **Rendimiento**: Clicks, impresiones, CTR
- **Core Web Vitals**: LCP, FID, CLS
- **Experiencia**: Mobile usability

### Tiempo de indexación esperado
- Primera indexación: 1-7 días
- Actualizaciones regulares: 1-3 días
- Sitemap procesado: 24-48 horas

---

## 🔧 Troubleshooting

### Si no aparece en Google después de 1 semana:
1. Verifica que `robots.txt` permite crawling
2. Confirma que el sitemap fue enviado correctamente
3. Revisa errores en Google Search Console → Cobertura
4. Asegúrate de que Cloudflare no esté bloqueando el bot de Google

### Si hay errores de cobertura:
- "Enviada, pero no indexada": Normal, espera más tiempo
- "Rastreada pero no indexada": Mejora el contenido único
- "Error de servidor (5xx)": Revisa logs de Cloudflare

---

## 📝 Checklist final

- [ ] Código de verificación de Google actualizado
- [ ] Cambios deployados a producción
- [ ] Sitemap enviado en Search Console
- [ ] Indexación solicitada para página principal
- [ ] robots.txt accesible y correcto
- [ ] sitemap.xml accesible y correcto
- [ ] Metadata OpenGraph validada
- [ ] Structured data validada con Rich Results Test
- [ ] Handle de Twitter actualizado (si aplica)
- [ ] Perfiles sociales agregados al JSON-LD
- [ ] Imagen OG personalizada creada

---

## 📚 Recursos útiles

- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Person Type](https://schema.org/Person)
- [OpenGraph Protocol](https://ogp.me/)
