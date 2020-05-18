import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.scss'],
})
export class T4Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
