import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.scss'],
})
export class T3Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
