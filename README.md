# API ANIMES - React Project

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada en React que consume la API de [Jikan](https://jikan.moe/), una API no oficial de MyAnimeList. La aplicación permite a los usuarios explorar una lista de animes populares, ver detalles específicos de cada anime, incluyendo su sinopsis, tráiler, y otra información relevante.

La interfaz está diseñada para ser responsiva y moderna, utilizando `styled-components` para los estilos. Además, la aplicación está optimizada como una Progressive Web App (PWA), lo que permite a los usuarios instalarla en sus dispositivos y usarla incluso sin conexión a internet.

---

## Despliegue de la Aplicación

La aplicación está desplegada y disponible en el siguiente enlace:

[API ANIMES - Despliegue](https://api-peliculas-react-one.vercel.app/)

---

## Integrantes del Proyecto

- **Kevin Duran**
- **Kevin Salazar**
- **Noe Quesada**
- **Dylan Gonzalez**

---

## Implementación del Service Worker y PWA

### Service Worker
El proyecto incluye un Service Worker que se registra automáticamente al cargar la aplicación. Este Service Worker permite:
- **Cacheo de recursos estáticos**: Los archivos esenciales de la aplicación se almacenan en caché, mejorando el rendimiento y permitiendo el acceso sin conexión.
- **Recuperación desde caché**: En caso de que la API no esté disponible, el Service Worker puede servir datos previamente almacenados en caché.

El registro del Service Worker se realiza en el archivo `App.jsx`:
```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}
```

### Progressive Web App (PWA)
La aplicación está configurada como una PWA, lo que permite:
- **Instalación en dispositivos**: Los usuarios pueden instalar la aplicación en sus dispositivos móviles o de escritorio.
- **Experiencia sin conexión**: Gracias al Service Worker, los usuarios pueden acceder a la aplicación incluso cuando no tienen conexión a internet.
- **Rendimiento optimizado**: Los recursos estáticos se cargan rápidamente desde la caché.

Para convertir la aplicación en una PWA, se han seguido los siguientes pasos:
1. **Archivo `manifest.json`**: Se incluye un archivo de manifiesto que define los metadatos de la aplicación, como el nombre, ícono y tema.
2. **Service Worker**: Implementado para manejar el cacheo y la recuperación de recursos.
3. **HTTPS**: La aplicación debe estar alojada en un servidor HTTPS para cumplir con los requisitos de las PWAs.

---

## Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd API-PELICULAS-REACT
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Abre la aplicación en tu navegador en `http://localhost:3000`.

---

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router**: Manejo de rutas para navegación entre componentes.
- **Styled Components**: Estilización de componentes con CSS-in-JS.
- **Axios**: Cliente HTTP para consumir la API de Jikan.
- **Service Worker**: Para soporte offline y optimización como PWA.

---

## Licencia

Este proyecto es de uso educativo y no tiene fines comerciales.