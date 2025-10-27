# 📸 Sistema de Galería de Fotos - Documentación

## 🎯 Resumen del Sistema

Se ha implementado un **sistema completo de gestión de galerías de fotos** para las ubicaciones del restaurante, incluyendo:

1. ✅ **Componente de Galería Moderna** - Visualización profesional de fotos
2. ✅ **Panel de Administración** - Gestión completa de imágenes
3. ✅ **Integración con Supabase Storage** - Almacenamiento en la nube
4. ✅ **Drag & Drop** - Reordenamiento intuitivo
5. ✅ **Lightbox Modal** - Visualización ampliada de imágenes

---

## 📁 Archivos Creados/Modificados

### **Nuevos Componentes:**

#### 1. `/components/gallery-showcase.tsx`
**Componente de galería moderna para el frontend público**

**Características:**
- ✨ Grid tipo mosaico con diseño responsive
- 🔍 Lightbox modal con navegación
- ⌨️ Navegación por teclado (← →)
- 📱 Touch gestures para móvil
- 🎨 Efectos hover y animaciones suaves
- 📥 Descarga de imágenes
- 🔗 Compartir en redes sociales
- 🖼️ Strip de miniaturas en el lightbox

**Uso:**
```tsx
import { GalleryShowcase } from "@/components/gallery-showcase"

<GalleryShowcase 
  locationData={locationData}
  images={galleryImages} // Opcional: array personalizado
/>
```

---

#### 2. `/components/admin/gallery-manager.tsx`
**Panel de administración para gestionar fotos**

**Características:**
- 📤 Upload múltiple de imágenes
- 🌐 Agregar imágenes desde URL
- 🗑️ Eliminar imágenes
- 🔄 Drag & drop para reordenar
- 💾 Auto-guardado en Supabase
- 📊 Vista previa en grid
- ⚡ Optimización automática

**Props:**
```typescript
interface GalleryManagerProps {
  locationId: string      // 'arbol' | '1898' | 'capriccio'
  locationName: string    // Nombre para mostrar
}
```

---

#### 3. `/app/admin/gallery/page.tsx`
**Página del panel de administración**

**URL:** `/admin/gallery`

**Características:**
- 🔐 Protección con autenticación
- 🏢 Selector de ubicación
- 📑 Tabs para galería y fotos destacadas
- 📖 Guía de uso integrada
- 🎨 UI consistente con el resto del admin

---

### **Archivos Modificados:**

#### 4. `/lib/supabase-storage.ts`
**Funciones agregadas:**

```typescript
// Upload de imagen de ubicación
uploadLocationImage(
  file: File,
  locationId: string,
  type: 'hero' | 'interior' | 'signature' | 'ambiance' | 'gallery'
): Promise<{ path: string; publicUrl: string }>

// Eliminar imagen
deleteLocationImage(urlOrPath: string): Promise<boolean>

// Obtener URL pública
getPublicUrl(path: string, bucket?: string): string
```

**Bucket de Storage:**
- `restaurant-images` - Para todas las imágenes de ubicaciones

---

#### 5. `/components/about-us-professional.tsx`
**Integración del nuevo componente de galería:**

Antes:
- Grid de miniaturas básico
- Estado local para imagen activa

Después:
- Componente GalleryShowcase profesional
- Lightbox con funcionalidades avanzadas
- Mejor experiencia de usuario

---

#### 6. `/components/admin/admin-nav.tsx`
**Agregado nuevo item de navegación:**

```tsx
{
  href: "/admin/gallery",
  label: "Galería",
  icon: ImageIcon
}
```

---

## 🎨 Características del Sistema

### **Frontend Público (GalleryShowcase)**

#### Diseño Mosaico:
- Primera imagen: 2x2 (destacada)
- Quinta imagen: 2x1 (ancho doble)
- Resto: 1x1 (normal)
- Máximo 12 imágenes visibles
- Botón "Ver todas" si hay más

#### Lightbox Modal:
- 🖼️ Imagen a pantalla completa
- ⬅️ ➡️ Navegación con flechas
- 🎞️ Strip de miniaturas inferior
- 📥 Botón de descarga
- 🔗 Botón de compartir
- ⌨️ Atajos de teclado
- ❌ Cerrar con Escape o X

#### Efectos Visuales:
- Hover effects con zoom
- Gradient overlays
- Badges numerados
- Corner accents temáticos
- Animaciones smooth

---

### **Panel de Administración (GalleryManager)**

#### Upload de Imágenes:

**Por Archivo:**
1. Click en área de upload o arrastra archivos
2. Selecciona múltiples imágenes
3. Auto-upload a Supabase Storage
4. Actualización automática en BD

**Por URL:**
1. Pega URL de imagen
2. Click en "Agregar" o Enter
3. Validación y guardado

#### Gestión de Imágenes:

**Reordenar:**
- Arrastra imágenes para cambiar orden
- Auto-guardado al soltar
- Visual feedback durante drag

**Eliminar:**
- Click en botón de eliminar
- Confirmación de seguridad
- Elimina de Storage y BD

**Vista Previa:**
- Grid responsive (2-4 columnas)
- Badges con número de orden
- Botón de vista externa
- Hover effects

---

## 🗄️ Estructura de Base de Datos

### Tabla: `locations`

```sql
-- Campo images (JSONB)
{
  "hero": "url",
  "interior": "url", 
  "signature": "url",
  "ambiance": "url",
  "gallery": [
    "url1",
    "url2",
    "url3",
    ...
  ]
}
```

### Supabase Storage Bucket: `restaurant-images`

```
restaurant-images/
  ├── arbol/
  │   ├── gallery/
  │   │   ├── 1234567890.webp
  │   │   ├── 1234567891.jpg
  │   │   └── ...
  │   ├── hero/
  │   ├── interior/
  │   ├── signature/
  │   └── ambiance/
  ├── 1898/
  │   └── gallery/
  └── capriccio/
      └── gallery/
```

---

## 🚀 Cómo Usar

### **Para Administradores:**

1. **Acceder al Panel:**
   - Ir a `/admin/gallery`
   - Seleccionar ubicación (Árbol, 1898, Capriccio)

2. **Subir Fotos:**
   - Click en área de upload
   - Seleccionar múltiples imágenes
   - O pegar URLs directamente

3. **Organizar:**
   - Arrastra fotos para reordenar
   - Primera foto = foto destacada
   - Elimina fotos no deseadas

4. **Guardar:**
   - Auto-guardado en cada acción
   - No requiere botón "Guardar"

### **Para Usuarios:**

1. **Ver Galería:**
   - Ir a página de ubicación
   - Scroll a sección "Conócenos"
   - Ver grid de fotos

2. **Ver Ampliado:**
   - Click en cualquier foto
   - Se abre lightbox modal
   - Navegar con flechas o teclado

3. **Descargar/Compartir:**
   - En lightbox, usar botones superiores
   - Descargar imagen
   - Compartir en redes

---

## 🎯 Mejores Prácticas

### **Imágenes Recomendadas:**

#### Especificaciones:
- ✅ Formato: WEBP > JPG > PNG
- ✅ Tamaño: Máximo 5MB
- ✅ Resolución: Mínimo 1200x800px
- ✅ Aspecto: 3:2 o 16:9 preferido

#### Contenido:
- 📸 Fotos profesionales de alta calidad
- 🍽️ Platos bien iluminados
- 🏠 Interior del restaurante
- 👨‍🍳 Equipo de cocina
- 🎉 Eventos y celebraciones
- 😊 Clientes felices (con permiso)

#### Cantidad:
- **Mínimo:** 6-8 fotos
- **Recomendado:** 12-16 fotos
- **Máximo:** Ilimitado (pero mantenlo razonable)

### **Orden de Prioridad:**

1. **Foto 1:** Plato signature o vista general espectacular
2. **Foto 2-4:** Otros platos destacados
3. **Foto 5-8:** Interior, ambiente, decoración
4. **Foto 9+:** Equipo, eventos, detalles

---

## 🔧 Configuración Técnica

### **Variables de Entorno Necesarias:**

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

### **Permisos de Supabase Storage:**

```sql
-- Bucket policy para 'restaurant-images'
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'restaurant-images');

CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'restaurant-images' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated Delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'restaurant-images' 
  AND auth.role() = 'authenticated'
);
```

---

## 📱 Responsive Design

### Breakpoints:

- **Mobile (< 640px):** 
  - Grid 2 columnas
  - Lightbox optimizado para touch
  - Controles grandes y accesibles

- **Tablet (640px - 1024px):**
  - Grid 3 columnas
  - Navigation arrows visibles
  - Thumbnails más grandes

- **Desktop (> 1024px):**
  - Grid 4 columnas
  - Full lightbox experience
  - Keyboard shortcuts activos

---

## ⚡ Performance

### Optimizaciones Implementadas:

1. **Next.js Image Optimization:**
   - Lazy loading automático
   - Responsive images
   - Format conversion (WebP)

2. **Loading States:**
   - Spinners durante upload
   - Skeleton screens
   - Progressive image loading

3. **Caching:**
   - Supabase Storage CDN
   - Browser caching
   - Next.js Image cache

---

## 🐛 Troubleshooting

### **Problema: Las imágenes no se cargan**

**Solución:**
1. Verificar permisos del bucket
2. Revisar CORS en Supabase
3. Validar URLs públicas

### **Problema: Error al subir imágenes**

**Solución:**
1. Verificar tamaño < 5MB
2. Validar formato (PNG, JPG, WEBP)
3. Revisar autenticación de usuario

### **Problema: Orden no se guarda**

**Solución:**
1. Verificar conexión a internet
2. Revisar logs del navegador
3. Confirmar permisos de escritura

---

## 🔮 Futuras Mejoras Posibles

### Fase 2:
- [ ] Edición de imágenes (crop, rotate, filters)
- [ ] Bulk upload desde carpeta
- [ ] Categorías/tags para fotos
- [ ] Captions y descripciones
- [ ] SEO alt text automático

### Fase 3:
- [ ] Integración con Instagram API
- [ ] Auto-optimization de imágenes
- [ ] Watermark automático
- [ ] Analytics de fotos más vistas
- [ ] Galería de videos

---

## 📞 Soporte

Para problemas o consultas:
- 📧 Email: admin@restaurant.com
- 📖 Docs: Este archivo
- 🐛 Issues: Reportar en panel de admin

---

## ✅ Checklist de Implementación

- [x] Componente GalleryShowcase creado
- [x] Panel de administración funcional
- [x] Integración con Supabase Storage
- [x] Drag & drop implementado
- [x] Lightbox modal completo
- [x] Upload de imágenes
- [x] Eliminar imágenes
- [x] Responsive design
- [x] Documentación completa
- [x] Integrado en about-us section
- [x] Link en admin navigation

---

**¡Sistema de Galería Completamente Funcional! 🎉**

Ahora los administradores pueden gestionar fácilmente las fotos de cada ubicación, y los usuarios disfrutan de una experiencia visual profesional y moderna.
