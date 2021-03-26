import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteModel } from 'src/app/models/cliente.model';
import { BaseFormComponent } from 'src/app/modules/shared/components/base-form.component';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent extends BaseFormComponent implements OnInit {

  dataForm = new FormGroup({
    nombre: new FormControl('',Validators.compose([Validators.required])),
    apellidos: new FormControl('',Validators.compose([Validators.required]))
  })

  constructor(private clientesService:ClientesService) {
    super();
   }

  ngOnInit(): void {
  }

  validar(){
    return this.dataForm.valid;
  }

  guardarCliente(){
    if(this.validar()){
      let cliente = new ClienteModel()
      cliente.nombre = this.dataForm.controls['nombre'].value;
      cliente.apellido = this.dataForm.controls['apellidos'].value;
      this.clientesService.save(cliente)
      .subscribe(r=>console.log(r))
    }
  }


}
