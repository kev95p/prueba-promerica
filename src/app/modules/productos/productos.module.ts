import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';



@NgModule({
  declarations: [ListaProductosComponent, AgregarProductoComponent, MostrarProductoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
