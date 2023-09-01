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
          <li><a href="#install-fe-react-webc">Install fe-react-webc</a></li>
        </ul>
        <li><a href="#running-steps">Running steps</a></li>
        <ul>
          <li><a href="#microfrontend-fe-oss-reactjs-base-mf-shell-loader">microfrontend fe-oss-reactjs-base-mf shell loader</a></li>
          <li><a href="#microfrontend-fe-react-webc-shell-loader">microfrontend fe-react-webc shell loader</a></li>
          <li><a href="#running-tests">Running tests</a></li>
          <li><a href="#build-application">Build aplication</a></li>
        </ul>
      </ul>
    </li>
  </ol>
</details>

<!-- About the project -->
## About the project
fe-react-webc is an archetype base that allows to create footers for micro frontends using Single SPA.

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
* [React ^17.0.2](https://reactjs.org/)

<!-- Project structure -->
### Project structure

    ├── src                                                     
        ├── fe-wc-wk                                           # fe-wc-wk contains the src project's file
            ├── src                                            
                ├── components                                 # components folder contains different project's components
                    ├── base-button                            # base-button folder contains base-button component's files
                        ├── base-button.d.ts
                        ├── base-button.js
                        ├── base-button.js.map
                    ├── base-card                              # base-card folder contains base-card component's files
                        ├── base-card.d.ts
                        ├── base-card.js
                        ├── base-card.js.map
                    ├── contador-example                       # contador-example folder contains contador-example component's files
                        ├── FeWcWk.d.ts
                        ├── FeWcWk.js
                        ├── FeWcWk.js.map
                    ├── UICard                                 # UICard folder contains UICard and UICard1 component's files
                        ├── UICard.1.d.ts
                        ├── UICard.1.js
                        ├── UICard.1.js.map
                        ├── UICard.d.ts
                        ├── UICard.js
                        ├── UICard.js.map
                        ├── UICard.styles.d.ts
                        ├── UICard.styles.js
                        ├── UICard.styles.js.map
                ├── lib                                        # lib folder contains UIComponent design component's files
                    ├── UIComponent.d.ts
                    ├── UIComponent.js
                    ├── UIComponent.js.map
                ├── styles                                     # styles folder contains theme css personalization files
                    ├── theme.d.ts
                    ├── theme.js
                    ├── theme.js.map
                ├── utils                                      # utils folder contains colors personalization files
                    ├── colors.d.ts
                    ├── colors.js
                    ├── colors.js.map
                ├── fe-wc-wk.d.ts                              # Here are the typescripts declarations of fe-wc-wk.js
                ├── fe-wc-wk.js                                # Here are definitions of window componentes
                ├── fe-wc-wk.js.map                            # Here is the origins's map file of fe-wc-wk.js
                ├── index.d.ts                                 # Here are the typescripts declarations of index.js
                ├── index.js                                   # Here are exports of componentes
                ├── index.js.map                               # Here is the origins's map file of index.js
            ├── tsconfig.tsbuidinfo                            # Here is the typescript build information
        ├── declarations.d.ts                                  # Here are the typescripts declarations
        ├── ntt-fe-react-webc.tsx                              # Here are configs and micro frontends register
        ├── root.component.test.tsx                            # Here is a unit testing for the component
        ├── root.component.tsx                                 # Here is the component of the project


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

#### Install fe-react-webc
1. Clone the repo of fe-react-webc
   ```sh
   git clone https://github.com/Ecosistema-Digital-Bci/fe-react-webc.git
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
      "@@ntt/react-webc":" http://localhost:8089/ntt-fe-react-webc.js"  
   }
   
   <body>

   <div>
    
   <div>
    <application id="single-spa-application:@ntt/react-webc"></application>
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

<!-- microfrontend fe-react-webc shell loader -->
4. ###  microfrontend fe-react-webc shell loader
-  create file .npmrc or npm config set registry <registry url> with the credentials to get bci azure dependencies
- This command runs the serve and exposes it on [localhost:8089](http://localhost:8089/).

   ```sh
   npm start
   ```

<!-- Runnig tests -->
# Running tests
- `npm test`. This command runs the tests.
- `npm run watch-tests`. This command runs the tests in order to watch its results.
- `npm run coverage`. This command runs the tests and creates a coverage folder with the coverage report.

<!-- Build application -->
# Build application
- `npm run build`.  This command runs develop build.
- `npm run build:webpack`. This command runs webpack build in production.
- `npm run build:types`. This command compiles TypeSrcipt files.
