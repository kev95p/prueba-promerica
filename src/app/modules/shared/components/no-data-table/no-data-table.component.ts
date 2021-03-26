import { Component, OnInit } from '@angular/core';
import { TableProperties } from '../../interfaces/table-properties';
import { TableComponent } from '../../interfaces/table.component';

@Component({
  selector: 'app-no-data-table',
  templateUrl: './no-data-table.component.html',
  styleUrls: ['./no-data-table.component.scss']
})
export class NoDataTableComponent implements OnInit,TableComponent {

  data?: TableProperties;

  constructor() { }


  ngOnInit(): void {
  }

}
