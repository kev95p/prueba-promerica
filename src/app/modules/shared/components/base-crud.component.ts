import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
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
  loaded: boolean = false;
  @ViewChild(DataLoadDirective,{static:true})
  appDataLoad?: DataLoadDirective;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(data: TableProperties) {
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
    componentRef!.instance.data = data;
  }
}
