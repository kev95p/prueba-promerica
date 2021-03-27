import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenModel } from 'src/app/models/orden.model';
import { DetalleComponent } from 'src/app/modules/shared/components/detalle.component';
import { ClientesService } from 'src/app/services/clientes.service';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-mostrar-orden',
  templateUrl: './mostrar-orden.component.html',
  styleUrls: ['./mostrar-orden.component.scss']
})
export class MostrarOrdenComponent extends DetalleComponent implements OnInit {

  data: OrdenModel = {};

  constructor(
    protected route: ActivatedRoute,
    protected ordenesService: OrdenesService
    ) {
    super(route, ordenesService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
