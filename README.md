# 💝 Aplicación de Propuesta de San Valentín

Una hermosa Single Page Application diseñada para móviles para hacer tu propuesta de San Valentín inolvidable.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## ✨ Características

- 🎨 **Diseño Mobile-First** con colores pastel románticos
- 💌 **Carta Interactiva** con animación de apertura de sobre
- 😄 **Botón "NO" Escurridizo** que hace imposible rechazar
- 🌸 **Lluvia de Flores** al aceptar la propuesta
- 📱 **Integración con WhatsApp** para confirmar la cita
- ✨ **Animaciones Suaves** con Framer Motion

## ⚙️ Personalización

### 1. Número de WhatsApp

Edita `src/components/SuccessScreen.jsx` línea 6:

```javascript
const whatsappNumber = '5215512345678'; // Tu número en formato internacional
```

### 2. Mensaje Romántico

Edita `src/components/LetterScreen.jsx` líneas 66-75 para personalizar el texto.

### 3. Fotos

Reemplaza los emojis con fotos reales en `src/components/LetterScreen.jsx`.

## 📦 Despliegue en Netlify

1. Construye el proyecto: `npm run build`
2. Arrastra la carpeta `dist` a [Netlify Drop](https://app.netlify.com/drop)
3. ¡Listo! 🎉

## 🛠️ Tecnologías

- React
- Tailwind CSS
- Framer Motion
- Vite

## 📖 Documentación Completa

Ver [walkthrough.md](../../brain/689de649-820d-477b-9377-c45a2e1a20aa/walkthrough.md) para la guía completa en español.

---

**¡Buena suerte con tu propuesta! 💕**
