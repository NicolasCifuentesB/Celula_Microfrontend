// Definir la estructura del módulo de configuraciones para tener noción de las
// propiedades a las que se quiere acceder del mismo
//declare module "@bci/fe-params" {
//  export const BCIFeParams: {
//    "@bci/arquetipo-react": Record<string, string> & {
//      "endpoint-ms-cuenta-demo": string;
//    };
//  };
//}

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
