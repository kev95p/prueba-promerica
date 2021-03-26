import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../interfaces/table.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit,TableComponent {

  data: any;

  constructor() { }


  ngOnInit(): void {
  }

}
