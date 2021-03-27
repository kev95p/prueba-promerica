import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/producto.model';
import { ENDPOINTS } from '../utils/enpoints';
import { CrudService } from './interfaces/crud.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService implements CrudService {
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

  save(producto: ProductoModel): Observable<ProductoModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    if (producto.id){
      return this.client.put<ProductoModel>(
        ENDPOINTS.OBTENER_PRODUCTO.replace(':id', producto.id),
        JSON.stringify(producto),
        { headers }
      );
    }
    else{
      return this.client.post<ProductoModel>(
        ENDPOINTS.GUARDAR_PRODUCTO,
        JSON.stringify(producto),
        { headers }
      );
    }

  }
}
