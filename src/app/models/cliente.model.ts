import { BaseModel } from './base.model';

export class ClienteModel implements BaseModel{
  id?: string;
  nombre?: string;
  apellidos?: string;
}
