import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaClientesComponent, AgregarClienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientesRoutingModule,
    ButtonsModule,
    SharedModule
  ]
})
export class ClientesModule { }
