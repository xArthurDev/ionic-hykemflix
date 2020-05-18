import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-theking',
  templateUrl: './theking.component.html',
  styleUrls: ['./theking.component.scss'],
})
export class ThekingComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
