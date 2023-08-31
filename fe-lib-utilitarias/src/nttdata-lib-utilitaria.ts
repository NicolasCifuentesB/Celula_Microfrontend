import PubSub from "pubsub-js";

let valor = "Valor librería";

export function funcionUtilitario() {
    return valor;
}

export function setValor(newValor) {
    valor = newValor;
}

export const publishLib = (event, data) => PubSub.publish(event, data);

export const subscribeLib = (event, callback) => PubSub.subscribe(event, callback);
