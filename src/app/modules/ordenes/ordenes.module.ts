import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaOrdenesComponent } from './components/lista-ordenes/lista-ordenes.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { OrdenesRoutingModule } from './ordenes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MostrarOrdenComponent } from './components/mostrar-orden/mostrar-orden.component';



@NgModule({
  declarations: [ListaOrdenesComponent, CrearOrdenComponent, MostrarOrdenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrdenesRoutingModule,
    SharedModule
  ]
})
export class OrdenesModule { }
