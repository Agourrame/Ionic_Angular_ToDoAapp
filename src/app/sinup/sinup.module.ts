import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinupPageRoutingModule } from './sinup-routing.module';

import { SinupPage } from './sinup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinupPageRoutingModule
  ],
  declarations: [SinupPage]
})
export class SinupPageModule {}
