#  Archetype fe-single-spa-shell-base - Coe Front

## Project version

Version: v1.0.0
Date: 2022-02-15

## About this project

Description: fe-single-spa-shell-base - archetype base that allows to create containers for micro frontends

### Team

- Developers: Jordan González, Jose Carrasco, Jose Antonio Reyes, Juan Carlos Leon
- Lead: Eric Salosny

### Project structure

    ├── src                                                     
        ├── static                                              # assets folder that are copied by the webpack copy plugin
            ├── bci_logo.png
        ├── styles                                              # Here are scss, css files
            ├── base.scss
            ├── layout.scss
            ├── components.scss
            ├── main.scss
        ├── bci-root-config.js                                  # Here are configs and micro frontends register
        ├── index.ejs                                           # use of importmaps and html definition 
       

## Get Started

- [clone](#steps-to-run) the repository.
- [install](#steps-to-run) all dependecies.
- [run](#steps-to-run) the server.

### Prerequisites

- nodejs v14.18.3

### Project dependencies

- [package.json](package.json)

#### Third-Party Libraries

- single-spa v5.9.3
- pubsub-js v1.9.4

### Steps to run

For fe-single-spa-shell-base microfrontend
- `git clone git@github.com/Ecosistema-Digital-Bci/fe-single-spa-shell-base.git`. This command clones the repository.
- `npm install`. This command installs all dependencies.
- connect to the vpn to get to the @bci/fe-params when running the app.
- `npm start`. This command runs the serve and exposes it on [localhost:9001](http://localhost:9001/).

For shell that load microfrontend fe-react-mf-base
- `git clone git@github.com/Ecosistema-Digital-Bci/fe-react-mf-base.git`. This command clones the shell repository.
-  create file .npmrc or npm config set registry <registry url> with the credentials to get bci azure dependencies
- `npm install`. This command installs all dependencies.
- `npm start`. This command runs the serve and exposes it on [localhost:8080](http://localhost:8080/).


For shell that load microfrontend fe-oss-ng-base-mf
- `git clone git@github.com/Ecosistema-Digital-Bci/fe-oss-ng-base-mf`. This command clones the shell repository.
-  create file .npmrc or npm config set registry <registry url> with the credentials to get bci azure dependencies
- `npm install`. This command installs all dependencies.
- `npm start`. This command runs the serve and exposes it on [localhost:4215](http://localhost:4215/).

## Running the tests

- `npm test`. This command runs the tests.
- `npm run test:coverage`. This command runs the tests and creates a coverage folder with the coverage report.
    
## Build application

- `npm run build:dev`.  This command runs develop build.
- `npm run build:cert`. This command runs certification build.
- `npm run build:prod`. This command runs production build.

## How to publish develop

- Push changes to `feature branch` and CI starts automatically
  
## How to publish cert and production

- Create a pull request from the `feature branch` to the `develop branch`.

### Pull requests

- Your work should be merged on `develop branch`.
- Create a new [pull request](https://github.com/Ecosistema-Digital-Bci/fe-single-spa-shell-base.git/pulls). 

## Branch strategy

- For each new feature a new branch should be created.
- The new branch should be named like `feature/EFE-123` were `123` is the user story number.
- A new feature should be created from the `main branch` and once finished it should be merged with `develop branch`.
