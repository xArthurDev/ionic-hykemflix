import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { T3Component } from './t3/t3.component';
import { T4Component } from './t4/t4.component';

@Component({
  selector: 'app-lacasa',
  templateUrl: './lacasa.component.html',
  styleUrls: ['./lacasa.component.scss'],
})
export class LacasaComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

  async t1() {
    const modal = await this.modalCtrl.create({
      component: T1Component
    });
    modal.present();
  }

  async t2() {
    const modal = await this.modalCtrl.create({
      component: T2Component
    });
    modal.present();
  }

  async t3() {
    const modal = await this.modalCtrl.create({
      component: T3Component
    });
    modal.present();
  }

  async t4() {
    const modal = await this.modalCtrl.create({
      component: T4Component
    });
    modal.present();
  }
}
