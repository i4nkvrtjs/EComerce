# Food Store - Programación III

Proyecto desarrollado para el Parcial 1 de Programación III - Técnicatura en programación a distancia UTN.

Alumno: Valentín Piñeyro

DNI: 35.140.195

La aplicación consiste en una tienda frontend desarrollada utilizando:

- HTML5
- CSS3
- JavaScript
- TypeScript
- Vite

El objetivo del proyecto fue implementar un catálogo dinámico de productos con:

- búsqueda
- filtrado por categorías
- carrito persistente
- manejo de autenticación
- manipulación del DOM
- uso de localStorage

---

# Funcionalidades implementadas

## Autenticación

La aplicación incluye:

- Login
- Registro
- Protección de rutas
- Persistencia de sesión

### Roles

Existen dos roles:

- client
- admin

Los usuarios registrados desde la interfaz solo pueden crearse como `client`.

El usuario admin se genera manualmente al iniciar la aplicación.

---

## Catálogo de productos

La tienda muestra productos renderizados dinámicamente desde `data.ts`.

Cada producto incluye:

- imagen
- nombre
- descripción
- precio
- botón para agregar al carrito

---

## Búsqueda de productos

Se implementó una búsqueda en tiempo real por nombre.

El catálogo se actualiza dinámicamente mientras el usuario escribe.

---

## Filtrado por categorías

Las categorías se renderizan dinámicamente.

Al seleccionar una categoría:
- se filtran los productos
- puede volver a visualizarse todo el catálogo usando "Todos"

---

## Carrito de compras

El carrito permite:

- agregar productos
- aumentar cantidad
- disminuir cantidad
- eliminar productos
- calcular subtotales
- calcular total general

---

## Persistencia

Se utiliza `localStorage` para almacenar:

- usuario autenticado
- carrito
- preferencia de dark mode

La información persiste incluso luego de refrescar la página.

---

## Dark Mode

La aplicación incluye modo oscuro persistente entre páginas.

---

# Arquitectura del proyecto

La aplicación se encuentra organizada por módulos.

## Estructura

```txt
src/
│
├── pages/
│   ├── auth/
│   │   ├── login/
│   │   └── registro/
│   │
│   ├── admin/
│   │   └── home/
│   │
│   ├── client/
│   │   └── home/
│   │
│   └── store/
│       ├── home/
│       └── cart/
│
├── styles/
│   ├── global.css
│   ├── components.css
│   ├── variables.css
│   └── pages/
│
├── types/
│
├── utils/
│
└── public/
    └── assets/
```
---

# Instalación y ejecución

## Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- pnpm

---

## Instalar Node.js

Descargar desde:

https://nodejs.org/

Se recomienda instalar la versión LTS.

---

## Instalar pnpm

Luego de instalar Node.js, ejecutar:

```bash
npm install -g pnpm
```

---

# Clonar el proyecto

```bash
git clone <url-del-repositorio>
```

---

# Instalar dependencias

Dentro de la carpeta del proyecto ejecutar:

```bash
pnpm install
```

---

# Ejecutar servidor de desarrollo

```bash
pnpm dev
```

---

# Abrir aplicación

Vite mostrará una URL similar a:

```txt
http://localhost:5173
```

Abrir esa dirección en el navegador.

---

# Usuario administrador por defecto

La aplicación genera un administrador manualmente al iniciar.

Credenciales:

```txt
Email: admin@admin.com
Password: admin
```

---

# Consideraciones importantes

## Persistencia

La aplicación utiliza `localStorage`.

Por este motivo:
- el carrito persiste entre recargas
- la sesión permanece iniciada
- el dark mode se mantiene

---

## Reiniciar datos

Para reiniciar completamente la aplicación:

1. Abrir DevTools del navegador
2. Ir a Application
3. Ir a Local Storage
4. Limpiar los datos almacenados

---

## Imágenes

Las imágenes de productos deben ubicarse en:

```txt
src/assets/
```

---

## Navegación

La aplicación utiliza navegación frontend mediante:

```ts
window.location.href
```

adaptada al entorno Vite.

---

## Responsive Design

La interfaz fue diseñada para:
- desktop
- tablet
- mobile

utilizando:
- Flexbox
- CSS Grid
- Media Queries

---

# Tecnologías utilizadas

- HTML5
- CSS3
- TypeScript
- Vite
- localStorage
- Flexbox
- CSS Grid

---

# Decisiones técnicas

## Arquitectura modular

La aplicación fue dividida en módulos para separar responsabilidades:

- pages → vistas
- utils → lógica reutilizable
- styles → estilos
- types → interfaces TypeScript

---

## Uso de TypeScript

Se utilizó tipado fuerte mediante interfaces para:

- prevenir errores
- mejorar mantenibilidad
- facilitar escalabilidad

---

## Renderizado dinámico

Los productos y categorías se generan dinámicamente manipulando el DOM desde TypeScript.

---

## Seguridad frontend

Se implementó:
- protección de rutas
- validación de roles
- restricción de creación de administradores
