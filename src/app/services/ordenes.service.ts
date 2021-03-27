import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenModel } from '../models/orden.model';
import { ENDPOINTS } from '../utils/enpoints';
import { map, mergeMap, flatMap } from 'rxjs/operators';
import { ProductosService } from './productos.service';
import { forkJoin, Observable } from 'rxjs';
import { ClientesService } from './clientes.service';
import { CrudService } from './interfaces/crud.service';
@Injectable({
  providedIn: 'root',
})
export class OrdenesService implements CrudService {
  constructor(
    private client: HttpClient,
    private productoService: ProductosService,
    private clientesService: ClientesService
  ) {}


  getOne(id: string): Observable<OrdenModel> {
    return this.client.get<OrdenModel[]>(ENDPOINTS.OBTENER_ORDENES.replace(':id', id)).pipe(
      mergeMap((orden) => {
        console.log(orden);
        const observable: Observable<OrdenModel> = this.getProductoDesdeOrden(orden[0]);
        return forkJoin([observable]);
      }),
      mergeMap((orden) => {
        const observable: Observable<OrdenModel> = this.getClienteDesdeOrden(orden[0]);
        return forkJoin([observable]);
      }),
      map(o => o[0])
    );
  }


  save(data: OrdenModel): Observable<OrdenModel> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.client.post<OrdenModel>(
      ENDPOINTS.GUARDAR_ORDEN,
      JSON.stringify(data),
      { headers }
    );
  }

  getAll(): Observable<OrdenModel[]> {
    return this.client.get<OrdenModel[]>(ENDPOINTS.OBTENER_ORDENES).pipe(
      mergeMap((ordenes) => {
        const observables: Observable<OrdenModel>[] = [];
        ordenes.forEach((o) => {
          observables.push(this.getProductoDesdeOrden(o));
        });
        return forkJoin(observables);
      }),
      mergeMap((ordenes) => {
        const observables: Observable<OrdenModel>[] = [];
        ordenes.forEach((o) => {
          observables.push(this.getClienteDesdeOrden(o));
        });
        return forkJoin(observables);
      })
    );
  }

  private getProductoDesdeOrden(orden: OrdenModel): Observable<OrdenModel> {
    return this.productoService.getOne(orden.idProducto!).pipe(
      map((producto) => {
        orden.producto = producto;
        return orden;
      })
    );
  }

  private getClienteDesdeOrden(orden: OrdenModel): Observable<OrdenModel> {
    return this.clientesService.getOne(orden.idCliente!).pipe(
      map((cliente) => {
        orden.cliente = cliente;
        return orden;
      })
    );
  }
}
