import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModel } from '../models/base.model';
import { ClienteModel } from '../models/cliente.model';
import { ENDPOINTS } from '../utils/enpoints';
import { CrudService } from './interfaces/crud.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesService implements CrudService {
  constructor(private client: HttpClient) { }


  getAll(): Observable<ClienteModel[]> {
    return this.client.get<ClienteModel[]>(ENDPOINTS.OBTENER_CLIENTES);
  }
  getOne(id: string): Observable<ClienteModel> {
    return this.client.get<ClienteModel>(
      ENDPOINTS.OBTENER_CLIENTE.replace(':id', id)
    );
  }
  save(cliente: ClienteModel): Observable<BaseModel> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    if (cliente.id){
      return this.client.put<ClienteModel>(
        ENDPOINTS.GUARDAR_CLIENTE,
        JSON.stringify(cliente),
        { headers }
      );
    }
    else{
      return this.client.post<ClienteModel>(
        ENDPOINTS.GUARDAR_CLIENTE,
        JSON.stringify(cliente),
        { headers }
      );
    }
  }
}
