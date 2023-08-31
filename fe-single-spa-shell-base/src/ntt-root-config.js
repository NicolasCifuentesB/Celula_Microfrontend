import { registerApplication, start } from "single-spa";

import PubSub from "pubsub-js";
import {
  funcionUtilitario,
  setValor,
  publishLib,
  subscribeLib,
} from "@ntt/lib-utilitarias";
import "./styles/main.scss";
import Loader from './loader/loader'

const publish = (event, data) => PubSub.publish(event, data);
const subscribe = (event, callback) => PubSub.subscribe(event, callback);

const props = {
  publish,
  subscribe,
};

const propsUtil = {
  funcionUtilitario,
  setValor,
  publishLib,
  subscribeLib
};


Loader.show();

// Because only Chrome supports offset-path, feGaussianBlur for now

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

window.addEventListener('single-spa:first-mount', () => {
  Loader.hide();
});

window.addEventListener('single-spa', (e) => {
  console.log(e)
});

registerApplication({
  name: "@ntt/navbar-react",
  app: () => System.import("@ntt/navbar-react"),
  activeWhen: ["/"],
  customProps: props,
});

registerApplication({
  name: "@ntt/fe-ng-base-mf",
  app: () => System.import("@ntt/fe-ng-base-mf"),
  activeWhen: ["/home"],
  customProps: props,
});


registerApplication({
  name: "@ntt/page-react",
  app: () => System.import("@ntt/page-react"),
  activeWhen: ["/home"],
  customProps: props,
});

registerApplication({
  name: "@ntt/fe-angular-page",
  app: () => System.import("@ntt/fe-angular-page"),
  activeWhen: ["/angular"]
});

registerApplication({
  name: "@ntt/fe-reactpage-mf",
  app: () => System.import("@ntt/fe-reactpage-mf"),
  activeWhen: ["/react"]
});

registerApplication({
  name: "@ntt/react-utilidades-comunicacion",
  app: () => System.import("@ntt/react-utilidades-comunicacion"),
  activeWhen: ["/utilidades/comunicacionentremf"],
  customProps: propsUtil,
});

registerApplication({
  name: "@ntt/react-webc",
  app: () => System.import("@ntt/react-webc"),
  activeWhen: ["/utilidades/webcomponent"],
  customProps: propsUtil,
});

registerApplication({
  name: "@ntt/fe-ng-util-com",
  app: () => System.import("@ntt/fe-ng-util-com"),
  activeWhen: ["/utilidades/comunicacionentremf"],
  customProps: propsUtil,
});

registerApplication({
  name: "@ntt/fe-ng-ut-parametria",
  app: () => System.import("@ntt/fe-ng-ut-parametria"),
  activeWhen: ["/utilidades/parametria"]
});

registerApplication({
  name: "@ntt/fe-ng-ut-wbcomponts",
  app: () => System.import("@ntt/fe-ng-ut-wbcomponts"),
  activeWhen: ["/utilidades/webcomponent"]
});

registerApplication({
  name: "@ntt/footer-react",
  app: () => System.import("@ntt/footer-react"),
  activeWhen: ["/"],
  customProps: props,
});

start({
  urlRerouteOnly: true,
});

