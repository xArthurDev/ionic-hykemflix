import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AdmobService } from '../services/admob.service';

@Pipe({
  name: 'safe'
})
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  todos: Todo[];
  movies: Todo[];
  series: Todo[];
  hype: Todo[];

  slidesOptions = {
    slidesPerView: 2.1
  };
  slidesOptions2 = {
    slidesPerView: 2.1
  };
  slidesOptions3 = {
    slidesPerView: 1.2
  };
 
  constructor(private admobService: AdmobService, private todoService: TodoService, private sanitizer: DomSanitizer, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
    }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.sanitizer.bypassSecurityTrustScript(url);
  }

  ionViewWillEnter() {
    setTimeout(() => {
    }, 5000);
  }

 
  ngOnInit() {
   
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });

    this.todoService.getAllMovies().subscribe(res => {
      this.movies = res
    })

    this.todoService.getAllSeries().subscribe(res => {
      this.series = res
    })

    this.todoService.getAllHype().subscribe(res => {
      this.hype = res
    })
  }
 
  remove(item) {
    this.todoService.removeTodo(item.id);
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