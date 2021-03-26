import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {SelectItem} from '../../interfaces/select-item';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {

  @Input() items?: SelectItem[];

  @Output() selected = new EventEmitter<SelectItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(item: SelectItem): void{
    this.selected.emit(item);
  }

}
