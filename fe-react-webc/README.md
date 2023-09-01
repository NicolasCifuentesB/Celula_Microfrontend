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
        <li><a href="#running-steps">Running steps</a></li>
        <ul>
          <li><a href="#microfrontend-fe-react-footer-shell-loader">microfrontend fe-react-footer shell loader</a></li>
          <li><a href="#running-tests">Running tests</a></li>
          <li><a href="#build-application">Build aplication</a></li>
        </ul>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#how-to-publish-develop">How to publish develop</a></li>
    <li><a href="#how-to-publish-certification-and-production">How to publish certification and production</a></li>
    <li><a href="#pull-requests">Pull requests</a></li>
    <li><a href="#branch-strat">Branch strategies</a></li>
  </ol>
</details>

<!-- About the project -->
## About the project
fe-react-footer is an archetype base that allows to create footers for micro frontends using Single SPA.

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
* [React](https://reactjs.org/): version ^17.0.2

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

1. Clone the repo
   ```sh
   git clone https://github.com/Ecosistema-Digital-Bci/fe-oss-reactjs-base-mf.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- Running steps -->
## Running steps

1. Follow installation steps
2. npm start
3. importar en index.ejs y layout.html (single-spa)

<!-- microfrontend fe-react-footer shell loader -->
#  microfrontend fe-react-footer shell loader
- `git clone git@github.com/Ecosistema-Digital-Bci/fe-react-footer.git`. This command clones the shell repository.
-  create file .npmrc or npm config set registry <registry url> with the credentials to get bci azure dependencies
- `npm install`. This command installs all dependencies.
- `npm start`. This command runs the serve and exposes it on [localhost:8080](http://localhost:8080/).

<!-- Runnig tests -->
# Running tests
- `npm test`. This command runs the tests.
- `npm run coverage`. This command runs the tests and creates a coverage folder with the coverage report.

<!-- Build application -->
# Build application
- `npm run build`.  This command runs develop build.
- `npm run build:webpack`. This command runs webpack build in production.
- `npm run build:types`. This command compiles TypeSrcipt files.

<!-- Roadmap -->
## Roadmap

- [x] Add Changelog

<!-- How to publish develop -->
## How to publish develop

- Push changes to `feature branch` and CI starts automatically

<!-- How to publish certification and production -->
## How to publish certification and production

- Create a pull request from the `feature branch` to the `develop branch`.

<!-- Pull requests -->
### Pull requests

- Your work should be merged on `develop branch`.
- Create a new [pull request](https://github.com/Ecosistema-Digital-Bci/fe-single-spa-shell-base.git/pulls). 

<!-- Branch strategy -->
## Branch strat

- For each new feature a new branch should be created.
- The new branch should be named like `feature/EFE-123` were `123` is the user story number.
- A new feature should be created from the `main branch` and once finished it should be merged with `develop branch`.
