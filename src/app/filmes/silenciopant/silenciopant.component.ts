import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-silenciopant',
  templateUrl: './silenciopant.component.html',
  styleUrls: ['./silenciopant.component.scss'],
})
export class SilenciopantComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}