import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.scss'],
})
export class T2Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}