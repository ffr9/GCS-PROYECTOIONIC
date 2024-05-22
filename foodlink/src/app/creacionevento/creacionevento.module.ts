import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreacioneventoPageRoutingModule } from './creacionevento-routing.module';

import { CreacioneventoPage } from './creacionevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacioneventoPageRoutingModule
  ],
  declarations: [CreacioneventoPage]
})
export class CreacioneventoPageModule {}
