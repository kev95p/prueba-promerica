import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/producto.model';
import { ENDPOINTS } from '../utils/enpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private client:HttpClient) { }

  getAll():Observable<ProductoModel[]>{
    return this.client.get<ProductoModel[]>(ENDPOINTS.OBTENER_PRODUCTOS)
  }

}
