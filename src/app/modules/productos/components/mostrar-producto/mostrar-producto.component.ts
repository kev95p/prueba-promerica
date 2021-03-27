import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { DetalleComponent } from 'src/app/modules/shared/components/detalle.component';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent extends DetalleComponent implements OnInit {
  data: ProductoModel = {};
  constructor(protected route: ActivatedRoute, protected productosService: ProductosService) {
    super(route, productosService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
