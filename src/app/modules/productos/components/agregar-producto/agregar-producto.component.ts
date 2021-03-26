import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  dataForm = new FormGroup({
    nombre: new FormControl('',Validators.compose([Validators.required])),
    descripcion: new FormControl('',Validators.compose([Validators.required])),
    precio: new FormControl('',Validators.compose([Validators.required]))
  })

  constructor() { }

  ngOnInit(): void {
  }

  guardarProducto(){

  }

}
