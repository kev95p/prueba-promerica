import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { OrdenModel } from 'src/app/models/orden.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { BaseCrudComponent } from 'src/app/modules/shared/components/base-crud.component';
import { TableProperties } from 'src/app/modules/shared/interfaces/table-properties';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-lista-ordenes',
  templateUrl: './lista-ordenes.component.html',
  styleUrls: ['./lista-ordenes.component.scss'],
})
export class ListaOrdenesComponent extends BaseCrudComponent implements OnInit {
  ordenes: OrdenModel[] = [];

  tableProperties: TableProperties = {
    data: this.ordenes,
    headers: [
      { name: 'Codigo Orden', field: 'id' },
      { name: 'Producto', field: 'producto.nombre' },
      { name: 'Cantidad', field: 'cantidad' },
      { name: 'Cliente', field: 'cliente.nombre' },
      { name: 'Fecha', field: 'fecha' },
    ],
    edit: false
  };

  constructor(
    private router: Router,
    protected componentFactoryResolver: ComponentFactoryResolver,
    private ordenesService: OrdenesService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit(): void {
    this.loadComponent(this.tableProperties);
    this.loadData();
  }

  loadData(): void {
    this.ordenesService.getAll().subscribe((ordenes) => {
      this.ordenes = ordenes;
      this.loaded = true;
      this.tableProperties.data = ordenes;
      this.loadComponent(this.tableProperties);
    });
  }

  onDetalle(value: string): void {
    super.onDetalle(value);
    this.router.navigate(['/ordenes', value]);
  }
}
