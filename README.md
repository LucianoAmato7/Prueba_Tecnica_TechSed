# Prueba Técnica para TechSed

Este proyecto es una implementación de prueba técnica para TechSed, desarrollada con **Next.js** y **React**. A continuación, se describen los pasos para ejecutar la aplicación, las pruebas, así como detalles sobre la persistencia de datos y las dependencias utilizadas.

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando en la terminal:

- `npm run dev`

Este comando iniciará el servidor de desarrollo en `http://localhost:3000`. Podrás ver la aplicación en acción.

## Componente de Selección de Cantidades

El componente principal para la selección de cantidades de productos es **`ProductQuantitySelector`**. Este componente permite al usuario incrementar o decrementar la cantidad de un producto en el carrito, siempre y cuando no se exceda el stock disponible del mismo.
Tambien permite ingresar la cantidad de unidades o metros necesaria, autocompletandose la cantidad del producto que se definirá en el carrito.

## Persistencia del Carrito en `localStorage`

El carrito de compras se guarda en el `localStorage` del navegador para permitir la navegación entre las diferentes páginas y mantengan su selección de productos. Esto asegura que los productos seleccionados no se pierdan al cambiar de página o recargar la aplicación.

## Pruebas Unitarias

Para ejecutar las pruebas, puedes usar el siguiente comando:

- `npm test`

Esto ejecutará todos los tests ubicados en la carpeta `test` del proyecto, asegurando que las funcionalidades clave estén correctamente implementadas.

Se realizaron pruebas unitarias sobre las funciones principales ubicadas en los archivos dentro de la carpeta **`utils`**.

### Herramientas de Testing Utilizadas

- **Jest**: Jest es el framework utilizado para las pruebas unitarias en este proyecto. Se utiliza para verificar el comportamiento de las funciones clave en la aplicación.
- **Testing Library**: Para facilitar las pruebas de componentes React, se utiliza **`@testing-library/react`**.

## Paquetes Utilizados

El proyecto utiliza los siguientes paquetes y herramientas para su desarrollo:

### Dependencias

- **`next`**: Framework utilizado para la creación de aplicaciones React.
- **`react` y `react-dom`**: Librerías principales para el desarrollo de la interfaz de usuario con React.
- **`react-icons`**: Paquete que proporciona íconos para mejorar la interfaz de usuario.
  
### Dependencias de Desarrollo

- **`jest`**: Framework para pruebas unitarias.
- **`@testing-library/react`**: Herramienta para realizar pruebas de componentes React.
- **`@types/jest`, `@types/react`, `@types/react-dom`**: Tipos TypeScript para mejorar la experiencia de desarrollo.
- **`eslint` y `eslint-config-next`**: Herramientas para asegurar que el código siga buenas prácticas de estilo y calidad.
- **`tailwindcss`**: Framework de CSS utilizado para el diseño responsivo y estilización del proyecto.
- **`typescript`**: Lenguaje utilizado en el proyecto para mejorar la seguridad de tipos.
- **`ts-jest`**: Configuración de Jest para trabajar con TypeScript.