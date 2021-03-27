import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClienteComponent } from '../clientes/components/mostrar-cliente/mostrar-cliente.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { ListaOrdenesComponent } from './components/lista-ordenes/lista-ordenes.component';
import { MostrarOrdenComponent } from './components/mostrar-orden/mostrar-orden.component';

const routes: Routes = [
  {
    path: '',
    component: ListaOrdenesComponent,
  },
  {
    path: 'crear-orden',
    component: CrearOrdenComponent,
  },
  {
    path: ':id',
    component: MostrarOrdenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesRoutingModule {}
