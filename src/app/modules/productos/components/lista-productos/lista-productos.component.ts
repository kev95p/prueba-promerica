import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { BaseCrudComponent } from 'src/app/modules/shared/components/base-crud.component';
import { TableProperties } from 'src/app/modules/shared/interfaces/table-properties';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent
  extends BaseCrudComponent
  implements OnInit {
  productos: ProductoModel[] = [];

  tableProperties: TableProperties = {
    data: this.productos,
    headers: [
      { name: 'Nombre', field: 'nombre' },
      { name: 'Descripción', field: 'descripcion' },
      { name: 'Precio', field: 'precio', currency: true },
    ],
    edit: true,
  };

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver,
    private productosService: ProductosService,
    private router: Router
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit(): void {
    this.loadComponent(this.tableProperties);
    this.loadData();
  }

  loadData() {
    this.productosService.getAll().subscribe((productos) => {
      this.productos = productos;
      this.loaded = true;
      this.tableProperties.data = productos;
      this.loadComponent(this.tableProperties);
    });
  }

  onDetalle(value: string): void {
    super.onDetalle(value);
    this.router.navigate(['/productos', value]);
  }

  onEditar(value: string): void {
    super.onEditar(value);
    this.router.navigate(['/productos/editar', value]);
  }
}
