import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.scss'],
})
export class MostrarClienteComponent implements OnInit {
  cliente: ClienteModel = {};

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.clientesService.getOne(id).subscribe((cliente) => {
        this.cliente = cliente;
      });
    }
  }
}
