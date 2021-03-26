import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenModel } from '../models/orden.model';
import { ENDPOINTS } from '../utils/enpoints';
import {map, mergeMap,flatMap} from 'rxjs/operators';
import { ProductosService } from './productos.service';
import { forkJoin, Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';
import { ClientesService } from './clientes.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private client:HttpClient,private productoService:ProductosService,private clientesService:ClientesService) { }

  getAll(){
    return this.client.get<OrdenModel[]>(ENDPOINTS.OBTENER_ORDENES)
    .pipe(
      mergeMap(ordenes=>{
      let observables: Observable<OrdenModel>[] = []
      ordenes.forEach(o=>{
        observables.push(this.getProductoDesdeOrden(o))
      })
      return forkJoin(observables);
    }),
    mergeMap(ordenes=>{
      let observables: Observable<OrdenModel>[] = []
      ordenes.forEach(o=>{
        observables.push(this.getClienteDesdeOrden(o))
      })
      return forkJoin(observables);
    }))
  }

  private getProductoDesdeOrden(orden:OrdenModel): Observable<OrdenModel>{
    return this.productoService.getOne(orden.idProducto!)
    .pipe(map(producto=>{
      orden.nombreProducto = producto.nombre;
      return orden
    }))

  }

  private getClienteDesdeOrden(orden:OrdenModel): Observable<OrdenModel>{
    return this.clientesService.getOne(orden.idCliente!)
    .pipe(map(cliente=>{
      orden.nombreCliente = cliente.nombre;
      return orden
    }))
  }

}
