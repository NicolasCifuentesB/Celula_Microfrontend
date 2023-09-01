<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" alt="Logo" width="120" height="100">
  </a>

  <h3 align="center">Arquetipo React - Microfrontend - Single SPA</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the poroject</a>
      <ul>
        <li><a href="#team">Team</a></li>
        <li><a href="#project-version">Project version</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#project-structure">Project structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requisites">Requisites</a></li>
        <li><a href="#project-dependencies">Project dependencies</a></li>
        <li><a href="#installation">Installation</a></li>
        <ul>
          <li><a href="#install-fe-oss-reactjs-base-mf">Install fe-oss-reactjs-base-mf</a></li>
          <li><a href="#install-fe-reactpage-mf">Install fe-reactpage-mf</a></li>
        </ul>
        <li><a href="#running-steps">Running steps</a></li>
        <ul>
          <li><a href="#microfrontend-fe-oss-reactjs-base-mf-shell-loader">microfrontend fe-oss-reactjs-base-mf shell loader</a></li>
          <li><a href="#microfrontend-fe-reactpage-mf-shell-loader">microfrontend fe-reactpage-mf shell loader</a></li>
          <li><a href="#running-tests">Running tests</a></li>
          <li><a href="#build-application">Build aplication</a></li>
        </ul>
      </ul>
    </li>
  </ol>
</details>

<!-- About the project -->
## About the project
fe-reactpage-mf is an archetype base that allows to create footers for micro frontends using Single SPA.

<!-- Team -->
### Team

- Developers: Jordan González, Jose Carrasco, Jose Antonio Reyes, Juan Carlos Leon
- Lead: Eric Salosny

<!-- Project version -->
### Project version
Version: v1.0.0

Date: 2022-02-15

<!-- Built With -->
### Built With

* [Single-SPA](https://single-spa.js.org/)
* [Jest](https://jestjs.io/)
* [React ^17.0.2](https://reactjs.org/):

<!-- Project structure -->
### Project structure

    ├── src                                                     
        ├── diseño                                              # Here are css files
            ├── estilos.css
        ├── declarations.d.ts                                   # Here are the typescripts declarations
        ├── ntt-fe-reactpage-mf.tsx                             # Here are the Single SPA project settings
        ├── root.component.test.tsx                             # Here is a unit testing for the component
        ├── root.component.tsx                                  # Here is the component of the project


<!-- GETTING STARTED -->
### Getting Started

<!-- Requisites -->
## Requisites

- In orther to use this project is neccesary a container shell with Single SPA.
- nodejs v14.18.3

<!-- Project dependencies -->
## Project dependencies

- [package.json](package.json)

<!-- Installation -->
## Installation

<!-- git clone https://github.com/frodrisu/Celula_Microfrontend/tree/Arquetipos/fe-oss-ng-base-mf -->

<!-- Install fe-oss-reactjs-base-mf -->
#### Install fe-oss-reactjs-base-mf
1. Clone the repo
   ```sh
   git clone https://github.com/Ecosistema-Digital-Bci/fe-oss-reactjs-base-mf.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<!-- Install fe-reactpage-mf -->
#### Install fe-reactpage-mf
1. Clone the repo of fe-reactpage-mf
   ```sh
   git clone https://github.com/Ecosistema-Digital-Bci/fe-reactpage-mf.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- Running steps -->
## Running steps

1. Follow installation steps
2. importar en index.ejs y layout.html (single-spa)

   ```sh
   "imports": {
      "@ntt/root-config":  "//localhost:9001/ntt-root-config.js", 
      "@ntt/fe-reactpage-mf":"http://localhost:8083/ntt-fe-reactpage-mf.js"  
   }
   
   <body>

   <div>
    
   <div>
    <application id="single-spa-application:@ntt/fe-reactpage-mf"></application>
   </div>


   <noscript>
    You need to enable JavaScript to run this app.
   </noscript>
   <script>
    System.import('@ntt/root-config');
   </script>
   <import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>
   </body>
   ```

<!-- microfrontend fe-oss-reactjs-base-mf shell loader -->
3. ###  microfrontend fe-oss-reactjs-base-mf shell loader 
-  create file .npmrc or npm config set registry <registry url> with the credentials to get bci azure dependencies
- This command runs the serve and exposes it on [localhost:4215](http://localhost:4215/).

   ```sh
   npm start:dev
   ```

<!-- microfrontend fe-reactpage-mf shell loader -->
4. ###  microfrontend fe-reactpage-mf shell loader
-  create file .npmrc or npm config set registry <registry url> with the credentials to get bci azure dependencies
- This command runs the serve and exposes it on [localhost:8083](http://localhost:8083/).

   ```sh
   npm start
   ```

<!-- Runnig tests -->
## Running tests
- `npm test`. This command runs the tests.
- `npm run watch-tests`. This command runs the tests in order to watch its results.
- `npm run coverage`. This command runs the tests and creates a coverage folder with the coverage report.

<!-- Build application -->
## Build application
- `npm run build`.  This command runs develop build.
- `npm run build:webpack`. This command runs webpack build in production.
- `npm run build:types`. This command compiles TypeSrcipt files.
