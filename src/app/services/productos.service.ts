import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/producto.model';
import { ENDPOINTS } from '../utils/enpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private client: HttpClient) {}

  getAll(): Observable<ProductoModel[]> {
    return this.client.get<ProductoModel[]>(ENDPOINTS.OBTENER_PRODUCTOS);
  }

  buscarProducto(query: string): Observable<ProductoModel[]> {
    return this.client.get<ProductoModel[]>(
      ENDPOINTS.OBTENER_PRODUCTOS.concat(`?nombre=${query}%`)
    );
  }

  getOne(id: string): Observable<ProductoModel> {
    return this.client.get<ProductoModel>(
      ENDPOINTS.OBTENER_PRODUCTO.replace(':id', id)
    );
  }

  save(producto: ProductoModel) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.client.post<ProductoModel[]>(
      ENDPOINTS.GUARDAR_PRODUCTO,
      JSON.stringify(producto),
      { headers }
    );
  }
}
