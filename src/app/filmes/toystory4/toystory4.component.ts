import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-toystory4',
  templateUrl: './toystory4.component.html',
  styleUrls: ['./toystory4.component.scss'],
})
export class Toystory4Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
