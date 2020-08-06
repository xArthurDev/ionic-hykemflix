import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwatchedPage } from './mwatched.page';

const routes: Routes = [
  {
    path: '',
    component: MwatchedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MwatchedPageRoutingModule {}
