import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MostrarClienteComponent } from './components/mostrar-cliente/mostrar-cliente.component';


@NgModule({
  declarations: [ListaClientesComponent, AgregarClienteComponent, MostrarClienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientesRoutingModule,
    ButtonsModule,
    SharedModule
  ]
})
export class ClientesModule { }
