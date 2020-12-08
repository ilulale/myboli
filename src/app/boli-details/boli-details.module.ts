import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoliDetailsPageRoutingModule } from './boli-details-routing.module';

import { BoliDetailsPage } from './boli-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoliDetailsPageRoutingModule
  ],
  declarations: [BoliDetailsPage]
})
export class BoliDetailsPageModule {}
