import { Component, Input, OnInit } from '@angular/core';
import { TableProperties } from '../../interfaces/table-properties';
import { TableComponent } from '../../interfaces/table.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit,TableComponent {
  @Input()
  data: TableProperties = {headers:[{name:"",field:""}],data:[{}]};

  constructor() { }


  ngOnInit(): void {
  }

}
