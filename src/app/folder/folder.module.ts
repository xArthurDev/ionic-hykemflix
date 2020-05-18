import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { BrightComponent } from '../filmes/bright/bright.component';
import { Milagre7Component } from '../filmes/milagre7/milagre7.component';
import { SilenciopantComponent } from '../filmes/silenciopant/silenciopant.component';
import { ThekingComponent } from '../filmes/theking/theking.component';
import { LacasaComponent } from '../cseries/lacasa/lacasa.component';
import { T1Component } from 'src/app/cseries/lacasa/t1/t1.component';
import { T2Component } from 'src/app/cseries/lacasa/t2/t2.component';
import { T3Component } from 'src/app/cseries/lacasa/t3/t3.component';
import { T4Component } from 'src/app/cseries/lacasa/t4/t4.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,
     BrightComponent,
     Milagre7Component,
     SilenciopantComponent,
     ThekingComponent,
     LacasaComponent,
     T1Component,
     T2Component,
     T3Component,
     T4Component],
  entryComponents: [BrightComponent,
     Milagre7Component,
     SilenciopantComponent,
     ThekingComponent,
     LacasaComponent,
     T1Component,
     T2Component,
     T3Component,
     T4Component]
})
export class FolderPageModule {}
