import { BaseModel } from './base.model';
import { ClienteModel } from './cliente.model';
import { ProductoModel } from './producto.model';

export class OrdenModel implements BaseModel {
  id?: string;
  idProducto?: string;
  producto?: ProductoModel;
  cliente?: ClienteModel;
  idCliente?: string;
  cantidad?: string;
  fecha?: Date;
}
