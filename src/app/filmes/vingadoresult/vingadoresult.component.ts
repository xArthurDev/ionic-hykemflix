import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vingadoresult',
  templateUrl: './vingadoresult.component.html',
  styleUrls: ['./vingadoresult.component.scss'],
})
export class VingadoresultComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
