import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.page.html',
  styleUrls: ['./releases.page.scss'],
})
export class ReleasesPage implements OnInit {

  release: Todo[];
  releaseS: Todo[];

  slidesOptions3 = {
    slidesPerView: 2.1
  };

  constructor(private admobService: AdmobService, private todoService: TodoService, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
    }

    ionViewWillEnter() {
      setTimeout(() => {
      }, 5000);
    }

  ngOnInit() {
    this.todoService.getAllRelease().subscribe(res => {
      this.release = res
    })

    this.todoService.getAllReleaseS().subscribe(res => {
      this.releaseS = res
    })
  }

  //FUNCTION FOR INTERSTITIAL
  Interstitial(){
    this.admobService.ShowInterstitial();
  }
  //FUNCTION FOR VIDEOREWARD
  Reward(){
    this.admobService.ShowRewardVideo();
  }
}
