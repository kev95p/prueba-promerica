import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { OrdenModel } from 'src/app/models/orden.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { BaseCrudComponent } from 'src/app/modules/shared/components/base-crud.component';
import { TableProperties } from 'src/app/modules/shared/interfaces/table-properties';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-lista-ordenes',
  templateUrl: './lista-ordenes.component.html',
  styleUrls: ['./lista-ordenes.component.scss']
})
export class ListaOrdenesComponent extends BaseCrudComponent implements OnInit {

  ordenes: OrdenModel[] = [];

  tableProperties: TableProperties = {
    data: this.ordenes,
    headers: [
      { name: 'Codigo Orden', field: 'idOrden' },
      { name: 'Producto', field: 'nombreProducto' },
      { name: 'Cantidad', field: 'cantidad'},
      { name: 'Cliente', field: 'nombreCliente'},
      { name: 'Fecha', field: 'fecha'}
    ],
  };

  constructor(protected componentFactoryResolver: ComponentFactoryResolver, private ordenesService: OrdenesService ) {
    super(componentFactoryResolver);
  }

  ngOnInit(): void {
    this.loadComponent(this.tableProperties);
    this.loadData();
  }

  loadData(): void {
    this.ordenesService.getAll()
    .subscribe(ordenes=>{
      this.ordenes = ordenes
      this.loaded = true;
      this.tableProperties.data = ordenes;
      this.loadComponent(this.tableProperties)
    });
  }

}
