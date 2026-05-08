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