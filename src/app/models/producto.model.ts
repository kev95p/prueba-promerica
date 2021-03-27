import { BaseModel } from './base.model';

export class ProductoModel implements BaseModel {
  id?: string;
  nombre?: string;
  descripcion?: string;
  precio?: string;
}
