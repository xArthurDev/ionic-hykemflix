import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MwatchedPageRoutingModule } from './mwatched-routing.module';

import { MwatchedPage } from './mwatched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MwatchedPageRoutingModule
  ],
  declarations: [MwatchedPage]
})
export class MwatchedPageModule {}
