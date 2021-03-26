import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DataLoadDirective } from './directives/data-load.directive';
import { DataTableComponent } from './components/data-table/data-table.component';
import { LoadingTableComponent } from './components/loading-table/loading-table.component';
import { NoDataTableComponent } from './components/no-data-table/no-data-table.component';
import { BaseCrudComponent } from './components/base-crud.component';



@NgModule({
  declarations: [HeaderComponent, DataLoadDirective, DataTableComponent, LoadingTableComponent, NoDataTableComponent,BaseCrudComponent],
  imports: [
    CommonModule,
    RouterModule
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
