import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logan',
  templateUrl: './logan.component.html',
  styleUrls: ['./logan.component.scss'],
})
export class LoganComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  
  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss();

  }

}
