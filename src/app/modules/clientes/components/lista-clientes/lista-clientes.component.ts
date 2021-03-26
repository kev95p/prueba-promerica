import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { DataTableComponent } from 'src/app/modules/shared/components/data-table/data-table.component';
import { NoDataTableComponent } from 'src/app/modules/shared/components/no-data-table/no-data-table.component';
import { DataLoadDirective } from 'src/app/modules/shared/directives/data-load.directive';
import { TableComponent } from 'src/app/modules/shared/interfaces/table.component';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  loaded: boolean = false;
  clientes: ClienteModel[] = [];

  @ViewChild(DataLoadDirective, { static: true })
  appDataLoad?: DataLoadDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,private clientesService:ClientesService) {}

  ngOnInit(): void {
    this.loadComponent();
    this.loadData();
  }

  loadComponent() {
    let componentFactory = null;
    if (!this.loaded) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        NoDataTableComponent
      );
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        DataTableComponent
      );
    }
    const viewContainerRef = this.appDataLoad?.viewContainerRef;
    viewContainerRef?.clear();
    const componentRef = viewContainerRef?.createComponent<TableComponent>(
      componentFactory
    );
    componentRef!.instance.data = {
      data: this.clientes,
      headers: [
        { name: 'Nombre', field: 'nombre' },
        { name: 'Apellidos', field: 'apellidos' },
      ],
    };
  }

  loadData() {
    this.clientesService.getAll()
    .subscribe(clientes=>{
      this.clientes = clientes
      this.loaded = true;
      this.loadComponent();
    })
  }
}
