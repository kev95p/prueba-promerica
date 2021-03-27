import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableProperties } from '../../interfaces/table-properties';
import { TableComponent } from '../../interfaces/table.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, TableComponent {
  @Input()
  data: TableProperties = { headers: [{ name: '', field: '' }], data: [{}] };

  @Output()
  detalle =  new EventEmitter<string>();

  @Output()
  editar =  new EventEmitter<string>();

  @Output()
  eliminar =  new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onDetalle(id: string): void{
    this.detalle.emit(id);
  }

  onEditar(id: string): void{
    this.editar.emit(id);
  }

  onEliminar(id: string): void{
    this.eliminar.emit(id);
  }
}
