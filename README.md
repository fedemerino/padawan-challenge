## Padawan Challenge

El proyecto es una API para gestionar tareas construida con Express, GraphQL y Apollo Server. Permite realizar operaciones CRUD sobre una lista de tareas.

## Requisitos

- Node.js
- npm (Node Package Manager) 

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/fedemerino/padawan-challenge.git
cd padawan-challenge
```

2. Instalar las dependencias:

```bash
npm install
```

## Ejecución del servidor

1. Iniciar el servidor

```bash
npm start
```
El servidor estará disponible en http://localhost:4000/graphql/

## Instrucciones

Podemos consumir la API a través de Apollo Studio siguiendo estos pasos:


1. Ingresar a http://localhost:4000/graphql
2. En la ventana Operation ingresamos nuestra consulta. Ejemplos:
- createTask: 
```bash
 mutation createTask {
  createTask(title: "Padawan Challenge", description: "Realizar el challenge") {
    id
    title
    description
    completed
  }
}
 ```
- getTasks: 
```bash
 query Task {
  tasks {
    id
    title
    description
    completed
  }
}
 ```

- updateTask: 
```bash
 mutation updateTask {
  updateTask(id: 0, description: "Tarea Realizada", completed: true) {
    id
    title
    description
    completed
  }
}
 ```

- deleteTask: 
```bash
 mutation deleteTask {
  deleteTask(id: 0) {
    id
    title
    description
    completed
  }
}
 ```

## Tests

Ejecutar los tests corriendo el comando `npm run test` en la terminal.

## Estructura del proyecto

```plaintext

├── src
│   ├── graphql
│   │   ├── resolvers.js        # Define los resolvers de GraphQL
│   │   └── typeDefs.js         # Define los tipos y operaciones de GraphQL
│   ├── __tests__
│   │   └── resolvers.test.js   # Tests unitarios para los resolvers
│   └── index.js                # Configuración del servidor Express y Apollo 
├── .babelrc      
├── .gitignore            
├── jest.config.js            
├── package.json                
└── README.md

```


