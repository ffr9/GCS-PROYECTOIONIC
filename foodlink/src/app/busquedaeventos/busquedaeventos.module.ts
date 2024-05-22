import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaeventosPageRoutingModule } from './busquedaeventos-routing.module';

import { BusquedaeventosPage } from './busquedaeventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaeventosPageRoutingModule
  ],
  declarations: [BusquedaeventosPage]
})
export class BusquedaeventosPageModule {}
