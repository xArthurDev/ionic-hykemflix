import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { ModalController } from '@ionic/angular';
import { BrightComponent } from '../filmes/bright/bright.component';
import { Milagre7Component } from '../filmes/milagre7/milagre7.component';
import { SilenciopantComponent } from '../filmes/silenciopant/silenciopant.component';
import { ThekingComponent } from '../filmes/theking/theking.component';
import { LacasaComponent } from '../cseries/lacasa/lacasa.component';

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

  //Filmes dentro de modais

  async bright() {
    const modal = await this.ModalCtrl.create({
      component: BrightComponent
    });
    modal.present();
  }

  async milagre7() {
    const modal = await this.ModalCtrl.create({
      component: Milagre7Component
    });
    modal.present();
  }

  async silenciopant() {
    const modal = await this.ModalCtrl.create({
      component: SilenciopantComponent
    });
    modal.present();
  }

  async theking() {
    const modal = await this.ModalCtrl.create({
      component: ThekingComponent
    });
    modal.present();
  }

  async lacasa() {
    const modal = await this.ModalCtrl.create({
      component: LacasaComponent
    });
    modal.present();
  }

}
