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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, BrightComponent, Milagre7Component, SilenciopantComponent, ThekingComponent],
  entryComponents: [ BrightComponent, Milagre7Component, SilenciopantComponent, ThekingComponent]
})
export class FolderPageModule {}
