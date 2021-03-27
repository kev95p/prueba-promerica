import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { DetalleComponent } from 'src/app/modules/shared/components/detalle.component';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.scss'],
})
export class MostrarClienteComponent extends DetalleComponent implements OnInit {
  data: ClienteModel = {};

  constructor(
    protected route: ActivatedRoute,
    protected clientesService: ClientesService
  ) {
    super(route, clientesService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
