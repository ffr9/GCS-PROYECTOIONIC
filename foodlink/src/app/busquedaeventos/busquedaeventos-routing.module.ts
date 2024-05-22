import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaeventosPage } from './busquedaeventos.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaeventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaeventosPageRoutingModule {}
