import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  id = '';

  dataForm = new FormGroup({
    nombre: new FormControl('', Validators.compose([Validators.required])),
    descripcion: new FormControl('', Validators.compose([Validators.required])),
    precio: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.productosService.getOne(id).subscribe((producto) => {
        this.dataForm.controls.nombre.setValue(producto.nombre);
        this.dataForm.controls.descripcion.setValue(producto.descripcion);
        this.dataForm.controls.precio.setValue(producto.precio);
        this.id = producto.id!;
      });
    }
  }

  guardarProducto(){

  }

}
