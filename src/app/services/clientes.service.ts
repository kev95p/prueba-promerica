import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';
import { ENDPOINTS } from '../utils/enpoints';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private client: HttpClient) { }

  getAll(): Observable<ClienteModel[]> {
    return this.client.get<ClienteModel[]>(ENDPOINTS.OBTENER_CLIENTES);
  }

  getOne(id: string): Observable<ClienteModel> {
    return this.client.get<ClienteModel>(
      ENDPOINTS.OBTENER_CLIENTE.replace(':id', id)
    );
  }

  buscarCliente(query: string): Observable<ClienteModel[]> {
    return this.client.get<ClienteModel[]>(
      ENDPOINTS.OBTENER_CLIENTES.concat(`?nombre=${query}`)
    );
  }

  save(cliente: ClienteModel): Observable<any> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    if (cliente.id){
      return this.client.put<ClienteModel[]>(
        ENDPOINTS.GUARDAR_CLIENTE,
        JSON.stringify(cliente),
        { headers }
      );
    }
    else{
      return this.client.post<ClienteModel[]>(
        ENDPOINTS.GUARDAR_CLIENTE,
        JSON.stringify(cliente),
        { headers }
      );
    }

  }
}
