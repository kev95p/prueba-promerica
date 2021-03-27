import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProductosComponent,
  },
  {
    path: ':id',
    component: MostrarProductoComponent
  },
  {
    path: 'agregar',
    component: AgregarProductoComponent,
  },
  {
    path: 'editar/:id',
    component: AgregarProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
