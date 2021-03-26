import { environment } from "src/environments/environment";

export const ENDPOINTS = {
  OBTENER_ORDENES: environment.apiUrl.concat("ordenes"),


  OBTENER_CLIENTES: environment.apiUrl.concat("clientes"),
  GUARDAR_CLIENTES: environment.apiUrl.concat("clientes"),

  OBTENER_PRODUCTOS: environment.apiUrl.concat("productos"),
  GUARDAR_PRODUCTO: environment.apiUrl.concat("productos")
}
