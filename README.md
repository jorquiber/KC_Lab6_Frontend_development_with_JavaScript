# Frontend Wallapop

Este proyecto consiste en el desarrollo de una aplicación web similar a Wallapop para el laboratorio del módulo 'Desarrollo Frontend con JavaScript' del bootcamp 'Desarrollo Web Full Stack' de 'KeepCoding Tech School'. El objetivo es crear una plataforma donde los usuarios puedan publicar anuncios de productos y otros usuarios puedan ver esos anuncios, así como crear sus propios anuncios y realizar operaciones como iniciar sesión, registrarse, etc.

## Requisitos Funcionales

Para la práctica, es necesario implementar los siguientes requisitos funcionales:

1. **Listado de Anuncios:**
   - Mostrar una lista de anuncios con su imagen (si tiene), nombre, descripción, precio y si es para compra o venta.
   - Gestionar los estados de interfaz correctamente: vacío (no hay anuncios), error (error al cargar los anuncios), carga (cargando los anuncios), y éxito (anuncios listos para ser mostrados).
   - Navegar a la pantalla de detalle de un anuncio al hacer clic en él.
   - Mostrar un botón para acceder a la creación de un anuncio si el usuario ha iniciado sesión.

2. **Detalle de Anuncio:**
   - Mostrar los detalles de un anuncio, incluyendo foto (si tiene), nombre, descripción, precio y si es para compra o venta.
   - Gestionar los estados de interfaz correctamente: vacío (no existe el anuncio), error (error al cargar la información del anuncio), carga (cargando la información del anuncio), y éxito (información del anuncio lista para ser mostrada).
   - Mostrar un botón para eliminar el anuncio si el usuario está autenticado y el anuncio le pertenece.

3. **Creación de Anuncio:**
   - Mostrar un formulario para que el usuario cree un nuevo anuncio con campos como foto (opcional), nombre, descripción, precio y tipo de anuncio (compra/venta).
   - Gestionar los estados de interfaz correctamente: error (error al guardar la información del anuncio), carga (guardando la información del anuncio), y éxito (anuncio creado correctamente).
   - Solo permitir el acceso a esta pantalla si el usuario ha iniciado sesión.

4. **Inicio de Sesión:**
   - Mostrar un formulario de inicio de sesión solicitando el nombre de usuario y contraseña.
   - Autenticar al usuario contra el backend para obtener un token JWT que será utilizado en las siguientes comunicaciones.
   - Gestionar los estados de interfaz correctamente: carga, error y éxito.

5. **Registro:**
   - Mostrar un formulario de registro solicitando el nombre de usuario y contraseña.
   - Registrar al usuario en el backend.
   - Gestionar los estados de interfaz correctamente: carga, error y éxito.

## Resumen de Archivos del Proyecto

### Requisito Funcional 1: Listado de Anuncios y Gestión de Sesión de Usuario
- **ads-controller.js:** Controlador específico para la lista de anuncios.
- **ads-model.js:** Modelo para obtener la lista de anuncios.
- **ads-view.js:** Vista para construir la interfaz de la lista de anuncios.
- **wallapop-home.js:** Controlador principal para la lista de anuncios.
- **index.html:** Vista base para la lista de anuncios.
- **session-controller.js:** Controlador para gestionar la sesión del usuario.
- **session-view.js:** Vista para construir la interfaz de la sesión del usuario.

### Requisito Funcional 2: Detalle de Anuncio
- **ad-detail-controller.js:** Controlador específico para la pantalla de detalle de un anuncio.
- **ad-detail-model.js:** Modelo para obtener los detalles de un anuncio.
- **ad-detail-view.js:** Vista para construir la interfaz de la pantalla de detalle de un anuncio.
- **ad-detail.js:** Controlador principal para la pantalla de detalle de un anuncio.
- **ad-detail.html:** Vista base para la pantalla de detalle de un anuncio.

### Requisito Funcional 3: Creación de Anuncio
- **ad-creation-controller.js:** Controlador específico para la creación de un nuevo anuncio.
- **ad-creation-model.js:** Modelo para la creación de un nuevo anuncio.
- **ad-creation.js:** Controlador principal para la creación de un nuevo anuncio.
- **ad-creation.html:** Vista base para la creación de un nuevo anuncio.

### Requisito Funcional 4: Inicio de Sesión
- **login-controller.js:** Controlador específico para la pantalla de inicio de sesión.
- **login-model.js:** Modelo para autenticar al usuario.
- **login.js:** Controlador principal para la pantalla de inicio de sesión.
- **login.html:** Vista base para la pantalla de inicio de sesión.

### Requisito Funcional 5: Registro
- **signup-controller.js:** Controlador específico para la pantalla de registro de usuario.
- **signup-model.js:** Modelo para registrar un nuevo usuario.
- **signup.js:** Controlador principal para la pantalla de registro de usuario.
- **signup.html:** Vista base para la pantalla de registro de usuario.

### Otros Archivos Comunes
- **loader-controller.js:** Controlador para mostrar y ocultar el cargador.
- **loader-view.js:** Vista para construir la interfaz del cargador.
- **notification-controller.js:** Controlador para mostrar notificaciones en la interfaz.
- **notification-view.js:** Vista para construir la interfaz de las notificaciones.

## Backend de Soporte

Para simular un backend real y adaptarse a las necesidades de esta práctica, utilizaremos sparrest.js, un proyecto basado en la utilidad json-server. Esto nos proporciona un completo API REST que se ajusta perfectamente a los requisitos de la aplicación.

El archivo db.json proporcionado contendrá los datos de ejemplo para el backend. Asegúrate de tener sparrest.js instalado y configurado antes de iniciar el desarrollo del frontend. 

Para descargar el proyecto, puedes clonar el repositorio desde GitHub utilizando el siguiente comando:

```bash
git clone git@github.com:kasappeal/sparrest.js.git
```

## Descarga e Inicialización

### Descarga a través de Git

Para descargar el proyecto, puedes clonar el repositorio desde GitHub utilizando el siguiente comando:

```bash
git clone git@github.com:jorquiber/KC_Lab6_Frontend_development_with_JavaScript.git
```

## Inicialización con Live Server de VSCode

Para inicializar el proyecto utilizando Live Server en Visual Studio Code, simplemente abre la carpeta del proyecto en VSCode, haz clic derecho en el archivo HTML que desees ejecutar y selecciona la opción "Open with Live Server" (Abrir con Live Server).

## Contribuciones
Este proyecto es parte de un laboratorio académico y no acepta contribuciones externas en este momento.

Autor: Jorge Quintero Bermejo