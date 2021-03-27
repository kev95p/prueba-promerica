import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModel } from 'src/app/models/base.model';
import { CrudService } from 'src/app/services/interfaces/crud.service';

@Component({
  selector: 'app-detalle',
  template: ` <div>base works!!</div> `,
})
export class DetalleComponent implements OnInit{
  data: BaseModel = {};
  constructor(protected route: ActivatedRoute , protected crudService: CrudService) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.crudService.getOne(id).subscribe((data) => {
        this.data = data;
      });
    }
  }


}
