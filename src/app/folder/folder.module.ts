import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { BrightComponent } from '../filmes/bright/bright.component';
import { LoganComponent } from '../filmes/logan/logan.component';
import { Toystory4Component } from '../filmes/toystory4/toystory4.component';
import { VingadoresultComponent } from '../filmes/vingadoresult/vingadoresult.component';
import { WifiralphComponent } from '../filmes/wifiralph/wifiralph.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,
     BrightComponent,
     LoganComponent,
     Toystory4Component,
     VingadoresultComponent,
     WifiralphComponent,
     ],
  entryComponents: [BrightComponent,
     LoganComponent,
     Toystory4Component,
     VingadoresultComponent,
     WifiralphComponent,
     ]
})
export class FolderPageModule {}
