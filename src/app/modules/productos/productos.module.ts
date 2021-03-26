import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ProductosRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListaProductosComponent, AgregarProductoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
