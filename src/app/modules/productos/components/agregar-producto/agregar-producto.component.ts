import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  id = '';

  dataForm = new FormGroup({
    nombre: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(4)])),
    descripcion: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(200)])),
    precio: new FormControl('', Validators.compose([Validators.required, Validators.min(0.01)]))
  });

  constructor(private router: Router ,private route: ActivatedRoute, private productosService: ProductosService) { }

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

  guardarProducto(): void{
    console.log(this.dataForm.controls.precio.errors);
    const producto = new ProductoModel();
    producto.nombre = this.dataForm.controls.nombre.value;
    producto.descripcion = this.dataForm.controls.descripcion.value;
    producto.precio = this.dataForm.controls.precio.value;
    producto.id = this.id;
    this.productosService.save(producto)
    .subscribe(r=>{
      this.router.navigate(['/productos']);
    });
  }

}
