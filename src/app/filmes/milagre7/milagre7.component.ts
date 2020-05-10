import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-milagre7',
  templateUrl: './milagre7.component.html',
  styleUrls: ['./milagre7.component.scss'],
})
export class Milagre7Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
