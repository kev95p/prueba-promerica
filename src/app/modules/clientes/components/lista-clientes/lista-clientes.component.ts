import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { BaseCrudComponent } from 'src/app/modules/shared/components/base-crud.component';
import { TableProperties } from 'src/app/modules/shared/interfaces/table-properties';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent extends BaseCrudComponent implements OnInit {
  clientes: ClienteModel[] = [];

  tableProperties: TableProperties = {
    data: this.clientes,
    headers: [
      { name: 'Nombre', field: 'nombre' },
      { name: 'Apellidos', field: 'apellidos' },
    ],
  }

  constructor(protected componentFactoryResolver: ComponentFactoryResolver,private clientesService:ClientesService) {
    super(componentFactoryResolver)
  }

  ngOnInit(): void {
    this.loadComponent(this.tableProperties);
    this.loadData();
  }

  loadData() {
    this.clientesService.getAll()
    .subscribe(clientes=>{
      this.clientes = clientes
      this.loaded = true;
      this.tableProperties.data = clientes;
      this.loadComponent(this.tableProperties)
    })
  }
}
