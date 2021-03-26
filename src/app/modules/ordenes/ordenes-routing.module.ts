import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { ListaOrdenesComponent } from './components/lista-ordenes/lista-ordenes.component';

const routes: Routes = [
  {
    path: "",
    component: ListaOrdenesComponent
  },
  {
    path: "crear-orden",
    component: CrearOrdenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
