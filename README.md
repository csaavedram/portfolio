# 🚀 Mi Portafolio Personal

Un portafolio moderno y responsivo construido con **Next.js 15**, **TypeScript** y **Tailwind CSS**. Diseñado para mostrar proyectos, habilidades y información personal de manera elegante y profesional.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones sutiles
- **Completamente Responsivo**: Optimizado para todos los dispositivos
- **Performance Optimizada**: Construido con Next.js 15 y mejores prácticas
- **SEO Friendly**: Meta tags optimizados y estructura semántica
- **Fácil Personalización**: Datos centralizados fáciles de modificar
- **Deploy Ready**: Listo para desplegar en Vercel/Netlify

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Imágenes**: Next.js Image Optimization
- **Fonts**: Geist Sans & Mono
- **Desarrollo**: ESLint, Hot Reload

## 📦 Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio
```

2. **Instala las dependencias:**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecuta en modo desarrollo:**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abre tu navegador:**
Visita [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### 1. Información Personal
Edita `/src/data/portfolio.ts` para actualizar:
- Información personal (nombre, título, descripción)
- Habilidades y tecnologías
- Enlaces de redes sociales
- Lista de proyectos

### 2. Imágenes
- **Foto de perfil**: Coloca tu foto en `/public/images/profile.jpg`
- **Imágenes de proyectos**: Agrega capturas en `/public/images/projects/`

### 3. Colores y Estilos
Personaliza los colores y estilos en:
- `/src/app/globals.css` - Estilos globales
- Componentes individuales para ajustes específicos

## 📂 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── Header.tsx         # Navegación
│   ├── AboutSection.tsx   # Sección "Sobre mí"
│   ├── ProjectCard.tsx    # Tarjeta de proyecto
│   ├── ProjectsSection.tsx # Sección de proyectos
│   ├── ContactSection.tsx # Sección de contacto
│   └── Footer.tsx         # Pie de página
├── data/                  # Datos del portafolio
│   └── portfolio.ts       # Información personal y proyectos
└── types/                 # Tipos TypeScript
    └── index.ts           # Interfaces y tipos
```

## 🚀 Deployment

### Vercel (Recomendado)
1. Haz push de tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Deploy automático en cada push

### Netlify
1. Haz push de tu código a GitHub
2. Conecta tu repositorio en [Netlify](https://netlify.com)
3. Configura el build command: `npm run build`
4. Deploy automático

### Build Manual
```bash
npm run build
npm start
```

## 🎯 Próximas Mejoras

- [ ] Animaciones más avanzadas
- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Analytics integrado
- [ ] Más temas de color
- [ ] Modo de contraste alto

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una feature branch
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐
