import axios from "axios";
const baseURL = "";
interface Params {
  baseURL: string;
}
const config: Params = {
  baseURL: `https://ecorg3dsr-aapim-001.azure-api.net/ms-clientes-demo/develop`,
};
export const Api = axios.create(config);
Api.interceptors.request.use(
  (config) => {
    let token: any = "";
    // const user = ;
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
