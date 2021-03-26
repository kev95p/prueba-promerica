import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DataLoadDirective } from './directives/data-load.directive';
import { DataTableComponent } from './components/data-table/data-table.component';
import { LoadingTableComponent } from './components/loading-table/loading-table.component';
import { NoDataTableComponent } from './components/no-data-table/no-data-table.component';



@NgModule({
  declarations: [HeaderComponent, DataLoadDirective, DataTableComponent, LoadingTableComponent, NoDataTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    DataLoadDirective,
    DataTableComponent,
    NoDataTableComponent,
    LoadingTableComponent
  ]
})
export class SharedModule { }
