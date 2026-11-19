
# 📋 Gestor de Solicitudes

## 📌 Descripción del proyecto

Gestor de Solicitudes es una aplicación de consola desarrollada en **TypeScript**, que permite administrar solicitudes de una mesa de ayuda mediante una **lista simplemente ligada**.

El proyecto tiene como objetivo aplicar los conocimientos de estructuras de datos, utilizando nodos conectados entre sí, sin utilizar arreglos como estructura principal de almacenamiento.

## 🎯 Objetivo

Desarrollar un sistema que permita registrar, consultar, listar y eliminar solicitudes utilizando una lista simplemente ligada creada desde cero.

## 🛠️ Tecnologías utilizadas

- TypeScript
- Node.js
- Visual Studio Code
- npm

## ⚙️ Funcionalidades

La aplicación contempla las siguientes operaciones:

- **Registrar solicitud:** Agrega una nueva solicitud a la lista.
- **Consultar solicitud:** Busca una solicitud mediante su folio.
- **Listar solicitudes:** Recorre y muestra todas las solicitudes registradas.
- **Eliminar solicitud:** Elimina una solicitud utilizando su folio.
- **Control de lista vacía:** Verifica cuando no existen solicitudes.

## 📂 Estructura del proyecto

```text
Producto_Estructura_Datos/
│
├── nodo.ts
├── lista-simple.ts
├── solicitud.ts
├── main.ts
├── package.json
└── README.md
```

### Descripción de los archivos

| Archivo | Descripción |
|---------|-------------|
| nodo.ts | Define la estructura de cada nodo. |
| lista-simple.ts | Contiene las operaciones de la lista enlazada. |
| solicitud.ts | Define los datos de cada solicitud. |
| main.ts | Contiene la ejecución principal del programa. |
| package.json | Administra las dependencias del proyecto. |

## 🧩 ¿Cómo funciona?

El programa utiliza una lista simplemente ligada, donde cada nodo almacena una solicitud y una referencia al siguiente nodo.

Cada solicitud contiene:

- **Folio:** Identificador de la solicitud.
- **Descripción:** Problema que se reporta.
- **Prioridad:** Nivel de importancia de la solicitud.

### Ejemplo de lista enlazada

```text
CABEZA
  |
  v
[101] --> [102] --> [103] --> null
```

Cada nodo apunta al siguiente, mientras que el último apunta a `null`, indicando el final de la lista.

## 💻 Clases principales

### Clase Nodo

Representa cada elemento de la lista enlazada.

```typescript
export class Nodo<T> {
    constructor(
        public valor: T,
        public siguiente: Nodo<T> | null = null
    ) {}
}
```

### Clase ListaSimple

Administra los nodos mediante diferentes métodos:

| Método | Descripción |
|--------|-------------|
| agregarInicio() | Inserta un nodo al principio. |
| agregarFinal() | Inserta un nodo al final. |
| recorrer() | Muestra todos los nodos. |
| buscar() | Busca una solicitud por folio. |
| eliminar() | Elimina una solicitud por folio. |

## 🖥️ Ejemplo de funcionamiento

Ejemplo de las opciones previstas para el menú:

```text
===== GESTOR DE SOLICITUDES =====

1. Registrar solicitud
2. Consultar solicitud
3. Listar solicitudes
4. Eliminar solicitud
5. Salir

Seleccione una opción:
```

### Ejemplo de registro

```text
Folio: 101
Descripción: No funciona el internet
Prioridad: Alta

Solicitud registrada correctamente.
```

### Ejemplo de listado

```text
Folio: 101
Descripción: No funciona el internet
Prioridad: Alta

Folio: 102
Descripción: Impresora dañada
Prioridad: Media
```

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar a la carpeta

```bash
cd Producto_Estructura_Datos
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar el proyecto

Si se utiliza `tsx`:

```bash
npx tsx main.ts
```

## 🧪 Pruebas contempladas

| Prueba | Resultado esperado |
|--------|--------------------|
| Lista vacía | Indica que no hay solicitudes. |
| Insertar un nodo | La solicitud se registra. |
| Insertar varios nodos | Se mantienen conectados. |
| Buscar folio existente | Muestra la solicitud. |
| Buscar folio inexistente | Indica que no se encontró. |
| Eliminar primer nodo | Actualiza la cabeza. |
| Eliminar otro nodo | Actualiza los enlaces. |

## 📚 Aprendizajes

Con este proyecto se ponen en práctica los siguientes conocimientos:

- Programación orientada a objetos.
- Clases y constructores.
- Tipos genéricos en TypeScript.
- Listas simplemente ligadas.
- Referencias entre nodos.
- Recorridos mediante `while`.
- Inserción, búsqueda y eliminación de nodos.

## 👥 Integrantes

| Nombre | Apellido  |
|--------|-----------|
| Juan   | Camacho   |
| Jafet  | Herrera   |
| Luis   | Maldonado |
| Jose   | Jimenez   |
| Alan   | Paz       |

## 📖 Materia

**Estructura de Datos**

Proyecto académico: Gestor de Solicitudes con Lista Simplemente Ligada.


Proyecto desarrollado con fines educativos.
