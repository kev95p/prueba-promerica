import {
  Component,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { BaseCrudComponent } from 'src/app/modules/shared/components/base-crud.component';
import { TableProperties } from 'src/app/modules/shared/interfaces/table-properties';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent
  extends BaseCrudComponent
  implements OnInit {
  clientes: ClienteModel[] = [];

  tableProperties: TableProperties = {
    data: this.clientes,
    headers: [
      { name: 'Nombre', field: 'nombre' },
      { name: 'Apellidos', field: 'apellidos' },
    ],
    edit: true,
  };

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
    private clientesService: ClientesService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit(): void {
    this.loadComponent(this.tableProperties);
    this.loadData();
  }

  loadData(): void {
    this.clientesService.getAll().subscribe((clientes) => {
      this.clientes = clientes;
      this.loaded = true;
      this.tableProperties.data = clientes;
      this.loadComponent(this.tableProperties);
    });
  }

  onDetalle(value: string): void {
    super.onDetalle(value);
    this.router.navigate(['/clientes', value]);
  }

  onEditar(value: string): void{
    super.onEditar(value);
    this.router.navigate(['/clientes/editar', value]);
  }

}
