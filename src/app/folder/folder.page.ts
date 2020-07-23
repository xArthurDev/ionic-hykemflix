import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { ModalController } from '@ionic/angular';

//movies in component format
import { BrightComponent } from '../filmes/bright/bright.component';
import { Toystory4Component } from '../filmes/toystory4/toystory4.component';
import { VingadoresultComponent } from '../filmes/vingadoresult/vingadoresult.component';
import { WifiralphComponent } from '../filmes/wifiralph/wifiralph.component';
import { LoganComponent } from '../filmes/logan/logan.component';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  slidesOptions = {
    slidesPerView: 3
  };
  slidesOptions2 = {
    slidesPerView: 2
  };
  slidesOptions3 = {
    slidesPerView: 1
  };
  public folder: string;

  constructor(private embedService: EmbedVideoService, private activatedRoute: ActivatedRoute, private ModalCtrl: ModalController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  //movies inside their respective modals

  async bright() {
    const modal = await this.ModalCtrl.create({
      component: BrightComponent
    });
    modal.present();
  }

  async toystory4() {
    const modal = await this.ModalCtrl.create({
      component: Toystory4Component
    });
    modal.present();
  }

  async vingadoresult() {
    const modal = await this.ModalCtrl.create({
      component: VingadoresultComponent
    });
    modal.present();
  }

  async wifiralph() {
    const modal = await this.ModalCtrl.create({
      component: WifiralphComponent
    });
    modal.present();
  }

  async logan() {
    const modal = await this.ModalCtrl.create({
      component: LoganComponent
    });
    modal.present();
  }

}
