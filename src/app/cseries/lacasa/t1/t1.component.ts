import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.scss'],
})
export class T1Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
