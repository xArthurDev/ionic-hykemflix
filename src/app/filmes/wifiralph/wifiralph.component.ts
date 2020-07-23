import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wifiralph',
  templateUrl: './wifiralph.component.html',
  styleUrls: ['./wifiralph.component.scss'],
})
export class WifiralphComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
