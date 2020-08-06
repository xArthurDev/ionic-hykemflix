import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router'
import { Platform } from '@ionic/angular'
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Pipe({
  name: 'safe'
})
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  interstitialConfig: AdMobFreeInterstitialConfig;
 
  todos: Todo[];
  movies: Todo[];
  series: Todo[];
  hype: Todo[];

  slidesOptions = {
    slidesPerView: 2
  };
  slidesOptions2 = {
    slidesPerView: 2
  };
  slidesOptions3 = {
    slidesPerView: 1
  };
 
  constructor(public platform:Platform, public admob:AdMobFree, public router:Router, private todoService: TodoService, private sanitizer: DomSanitizer, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
      this.platform.ready().then(()=>{
        this.interstitialConfig = {
          isTesting:true,
          autoShow:true
        }
        this.admob.interstitial.config(this.interstitialConfig);

        this.admob.on(this.admob.events.INTERSTITIAL_CLOSE).subscribe(()=>{
          this.router.navigateByUrl('/series');
        })
      })
    }

  LoadAds()
  {
    this.admob.interstitial.prepare().then(()=>{
      
    })
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.sanitizer.bypassSecurityTrustScript(url);
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
}