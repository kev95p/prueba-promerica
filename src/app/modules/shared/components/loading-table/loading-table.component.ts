import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../interfaces/table.component';

@Component({
  selector: 'app-loading-table',
  templateUrl: './loading-table.component.html',
  styleUrls: ['./loading-table.component.scss']
})
export class LoadingTableComponent implements OnInit,TableComponent {

  data: any;

  constructor() { }


  ngOnInit(): void {
  }

}
