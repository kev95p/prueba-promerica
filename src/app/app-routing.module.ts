import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./modules/clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: 'ordenes',
    loadChildren: () =>
      import('./modules/ordenes/ordenes.module').then((m) => m.OrdenesModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/productos/productos.module').then((m) => m.ProductosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
