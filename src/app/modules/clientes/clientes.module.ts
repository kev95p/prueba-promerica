import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListaClientesComponent, AgregarClienteComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ButtonsModule,
    SharedModule
  ]
})
export class ClientesModule { }
