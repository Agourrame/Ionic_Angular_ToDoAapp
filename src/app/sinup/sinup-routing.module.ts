import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinupPage } from './sinup.page';

const routes: Routes = [
  {
    path: '',
    component: SinupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinupPageRoutingModule {}
