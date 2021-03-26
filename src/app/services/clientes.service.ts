import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';
import { ENDPOINTS } from '../utils/enpoints';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private client:HttpClient) { }

  getAll():Observable<ClienteModel[]>{
    return this.client.get<ClienteModel[]>(ENDPOINTS.OBTENER_CLIENTES)
  }

}
