import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacioneventoPage } from './creacionevento.page';

const routes: Routes = [
  {
    path: '',
    component: CreacioneventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreacioneventoPageRoutingModule {}
