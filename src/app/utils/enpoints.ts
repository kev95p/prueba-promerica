import { environment } from 'src/environments/environment';

export const ENDPOINTS = {
  OBTENER_ORDENES: environment.apiUrl.concat('ordenes'),
  OBTENER_ORDEN: environment.apiUrl.concat('ordenes/:id'),
  GUARDAR_ORDEN: environment.apiUrl.concat('ordenes'),

  OBTENER_CLIENTES: environment.apiUrl.concat('clientes'),
  OBTENER_CLIENTE: environment.apiUrl.concat('clientes/:id'),
  GUARDAR_CLIENTE: environment.apiUrl.concat('clientes'),

  OBTENER_PRODUCTOS: environment.apiUrl.concat('productos'),
  OBTENER_PRODUCTO: environment.apiUrl.concat('productos/:id'),
  GUARDAR_PRODUCTO: environment.apiUrl.concat('productos'),
};
