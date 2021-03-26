import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { BaseFormComponent } from 'src/app/modules/shared/components/base-form.component';
import { SelectItem } from 'src/app/modules/shared/interfaces/select-item';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.scss'],
})
export class CrearOrdenComponent extends BaseFormComponent implements OnInit {
  productos: SelectItem[] = [];
  clientes: SelectItem[] = [];

  dataForm = new FormGroup({
    producto: new FormControl('', Validators.compose([Validators.required])),
    cliente: new FormControl('', Validators.compose([Validators.required])),
    cantidad: new FormControl('', Validators.compose([Validators.required])),
    fecha: new FormControl('', Validators.compose([Validators.required])),
    productoId: new FormControl(''),
    clienteId: new FormControl(''),
  });

  constructor(
    private clientesService: ClientesService,
    private productosService: ProductosService
  ) {
    super();
  }

  obtenerClientes(): void {
    this.clientesService
      .getAll()
      .pipe(
        map((p) => {
          const selects: SelectItem[] = [];
          p.forEach((v) =>
            selects.push({ displayName: v.nombre!, value: v.id! })
          );
          return selects;
        })
      )
      .subscribe((v) => {
        this.clientes = v;
      });
  }

  obtenerProductos(): void {
    this.productosService
      .getAll()
      .pipe(
        map((p) => {
          const selects: SelectItem[] = [];
          p.forEach((v) =>
            selects.push({ displayName: v.nombre!, value: v.id! })
          );
          return selects;
        })
      )
      .subscribe((v) => {
        this.productos = v;
      });
  }

  clienteSeleccionado(item: SelectItem): void {
    this.dataForm.controls['clienteId'].setValue(item.value);
    this.dataForm.controls['cliente'].setValue(item.displayName);
  }

  productoSeleccionado(item: SelectItem): void {
    this.dataForm.controls['productoId'].setValue(item.value);
    this.dataForm.controls['producto'].setValue(item.displayName);
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerProductos();
  }

  guardarOrden(): void {
    this.dataForm.markAllAsTouched();
  }
}
