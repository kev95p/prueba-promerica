import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { BaseFormComponent } from 'src/app/modules/shared/components/base-form.component';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss'],
})
export class AgregarClienteComponent
  extends BaseFormComponent
  implements OnInit {
  dataForm = new FormGroup({
    nombre: new FormControl('', Validators.compose([Validators.required])),
    apellidos: new FormControl('', Validators.compose([Validators.required])),
  });

  private id = '';

  constructor(private route: ActivatedRoute, private clientesService: ClientesService) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.clientesService.getOne(id).subscribe((cliente) => {
        this.dataForm.controls['nombre'].setValue(cliente.nombre);
        this.dataForm.controls['apellidos'].setValue(cliente.apellidos);
        this.id = cliente.id!;
      });
    }
  }

  validar(): boolean {
    return this.dataForm.valid;
  }

  guardarCliente(): void {
    if (this.validar()) {
      const  cliente = new ClienteModel();
      cliente.id = this.id;
      cliente.nombre = this.dataForm.controls['nombre'].value;
      cliente.apellidos = this.dataForm.controls['apellidos'].value;
      this.clientesService.save(cliente).subscribe((r) => console.log(r));
    }
  }
}
