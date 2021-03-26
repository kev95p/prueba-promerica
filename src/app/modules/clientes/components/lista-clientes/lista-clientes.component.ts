import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DataTableComponent } from 'src/app/modules/shared/components/data-table/data-table.component';
import { NoDataTableComponent } from 'src/app/modules/shared/components/no-data-table/no-data-table.component';
import { DataLoadDirective } from 'src/app/modules/shared/directives/data-load.directive';
import { TableComponent } from 'src/app/modules/shared/interfaces/table.component';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  loaded: boolean = false;
  @ViewChild(DataLoadDirective, {static: true}) appDataLoad?: DataLoadDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

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
    const componentRef = viewContainerRef?.createComponent<TableComponent>(componentFactory);
  }

  loadData() {
    of(true)
      .pipe(delay(1000))
      .subscribe((v) => {
        this.loaded = v;
        this.loadComponent();
      });
  }
}
