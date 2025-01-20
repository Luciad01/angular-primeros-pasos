# Bases de Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.


## Interesting Links

- UUID: Generar identificadores únicos con cierto formato.

https://www.npmjs.com/package/uuid 

- Código fuente sección 5.

https://github.com/Klerith/angular-bases/tree/fin-seccion-5




## Formas rápidas de hacer un despliegue real

0. Generamos el build de producción:

```bash
ng build
```

#### npm http server 
Paquete de node que sirve para probar y montar un
servidor HTTP sin ninguna configuración, algo rápido pero con fines únicamente de pruebas y desarrollo local. No usar en producción. 

https://www.npmjs.com/package/http-server

1. Instalamos http-server:

  ```bash
  npm install --global htt-server
  ```

2. Entramos al browser:

  ```bash
  cd '...02-bases/dist/nameProject/browser'
  ```

3. Ejecutamos:

  ```bash
  http-server -o
  ```

### netify

https://www.netlify.com/ 

1. Creamos una cuenta.

2. En el espacio que pone " Want to deploy a new site without connecting to Git?
 Drag and drop your site output folder here." Arrastramos la carpeta de 'browser'.

3. Una vez creado el proyecto entramos en él y en el enlace que aparece.

https://gleeful-unicorn-413f41.netlify.app/

### GitHub pages

1. Sacamos los archivos de browser a 'nameProject' y renombramos esta carpeta como 'docs'. Esta carpeta la sacamos al root de la aplicación. Debe quedar algo así:

|- .angular |- (...)
|
|- .vscode |- (...)
|
|- docs |- browser (  )
|       |- (...)
|
|- dist |- (  )
|
|- node_modules |- (...)
|
|- src |- (...)
|
|- (...)

2. Cambiamos el base href en index.html por "./nameRepo".

3. Creamos un nuevo repositorio y subimos el proyecto.

4. Entramos en Settings > Pages y configuramos:
- Deploy from a branch
- 'main' y '/docs'. Guardamos ('Save').

5. En Actions podremos ver el proceso de creación y si entramos tendremos la URL para acceder a la página cuando esté lista.

https://luciad01.github.io/angular-primeros-pasos/



## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
