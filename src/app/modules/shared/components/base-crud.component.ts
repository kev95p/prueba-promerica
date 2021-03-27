import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
} from '@angular/core';
import { DataLoadDirective } from '../directives/data-load.directive';
import { TableProperties } from '../interfaces/table-properties';
import { TableComponent } from '../interfaces/table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NoDataTableComponent } from './no-data-table/no-data-table.component';

@Component({
  selector: 'app-base',
  template: ` <div>base works!!</div> `,
})
export class BaseCrudComponent {
  loaded = false;
  @ViewChild(DataLoadDirective, { static: true })
  appDataLoad?: DataLoadDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(data: TableProperties): any {
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
    if (componentRef) {
      componentRef.instance.data = data;
      if (componentRef.instance instanceof DataTableComponent) {
        const table = componentRef?.instance as DataTableComponent;
        table.detalle.subscribe((value) => this.onDetalle(value));
        table.editar.subscribe((value) => this.onEditar(value));
        table.eliminar.subscribe((value) => this.onEliminar(value));
      }
    }
  }

  onDetalle(value: string): void {
    console.log('Detalle' + value);
  }

  onEliminar(value: string): void {
    console.log('Eliminar' + value);
  }

  onEditar(value: string): void {
    console.log('Editar' + value);
  }
}
