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
        ├── __mocks__                                           # __mocks__ folder contains a default string return
            ├── fileMock.js
        ├── app                                                 # app folder contains declarations and root component of the project
            ├── declarations.d.ts
            ├── root.component.tsx            
        ├── assets                                              # assets folder contains static content and styles
            ├── images                                          # Here are image files
                ├── bci_logo.png
                ├── ntt_data_logo.png
            ├── styles                                          # Here are css files
                ├── component.css
        ├── components                                          # components folder contains project's components
            ├── Footer.tsx
            ├── component.tsx  
        ├── services                                            # services folder contains project's api services
            ├── api.ts
        ├── ntt-footer-react.tsx                                # Here are configs and micro frontends register
        ├── root.component.test.tsx                             # Here is a unit testing for the component


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
