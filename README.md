# Turing Front-end Challenge Template

## Important Note
Before using this template, read the template guide [here](https://docs.google.com/document/d/1F68KceOe2lUi3KDVcBEcOxwwRsZDNLmkFFYrIAcV6BQ/edit?usp=sharing)

## Introduction

> **Turing Front-end Vue App Challenge template** is an e-commerce application template built using Vue that enables users shop for goods in the plaform. To complete this challenge, you need to implement all the requirement in the frontend challenge doc. You can modify the design to suit your purpose, but ensure you use all our default predefined Id and classes.
Comments are added to the top of most of the component file which serve as a guide to what is expected from the finished product.

The App has been built using Vue.

The core libraries are as follows:

* Vue
* Vuex
* Axios
* Bootstrap-Vue

The app uses and advanced vuex structure. All Network calls go via vuex actions. The global state is then updated. All components simply listen to the state or send a request for data. The UI is state driven. The full vuex store can be found in the "store" folder under the "src directory".

The UI is based primarily on Bootstrap-Vue. Custom styling is used with scss. The theming is quite an advanced structure in itself. The Layout and Theme is selected based on the router views. This can be seen in the view directory in the "src" directory. All Icons are SVG Fontawsome Icons so scaling should not be an issue.


## Scripts to Note

# vue-challenge-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
