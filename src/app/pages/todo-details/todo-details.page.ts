import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdmobService } from '../../services/admob.service';

@Pipe({
  name: 'safe'
})
 
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})

export class TodoDetailsPage implements OnInit {
 
  todo: Todo = {
    task: 'Título',
    genre: 'Gênero',
    trailer: 'http://google.com.br',
    url: 'http://google.com.br',
    url2: 'http://google.com.br',
    duration: 'Duração',
    poster: 'http://google.com.br',
    type: 'Tipo',
    temp1ep1dub: 'http://google.com.br',
    temp1ep1leg: 'http://google.com.br',
    temp1ep2dub: 'http://google.com.br',
    temp1ep2leg: 'http://google.com.br',
    temp1ep3dub: 'http://google.com.br',
    temp1ep3leg: 'http://google.com.br',
    temp1ep4dub: 'http://google.com.br',
    temp1ep4leg: 'http://google.com.br',
    temp1ep5dub: 'http://google.com.br',
    temp1ep5leg: 'http://google.com.br',
    temp1ep6dub: 'http://google.com.br',
    temp1ep6leg: 'http://google.com.br',
    temp1ep7dub: 'http://google.com.br',
    temp1ep7leg: 'http://google.com.br',
    temp1ep8dub: 'http://google.com.br',
    temp1ep8leg: 'http://google.com.br',
    temp1ep9dub: 'http://google.com.br',
    temp1ep9leg: 'http://google.com.br',
    temp1ep10dub: 'http://google.com.br',
    temp1ep10leg: 'http://google.com.br',
    temp1ep11dub: 'http://google.com.br',
    temp1ep11leg: 'http://google.com.br',
    temp1ep12dub: 'http://google.com.br',
    temp1ep12leg: 'http://google.com.br',
    temp1ep13dub: 'http://google.com.br',
    temp1ep13leg: 'http://google.com.br',
    temp1ep14dub: 'http://google.com.br',
    temp1ep14leg: 'http://google.com.br',
    temp1ep15dub: 'http://google.com.br',
    temp1ep15leg: 'http://google.com.br',
    temp1ep16dub: 'http://google.com.br',
    temp1ep16leg: 'http://google.com.br',
    temp1ep17dub: 'http://google.com.br',
    temp1ep17leg: 'http://google.com.br',
    temp1ep18dub: 'http://google.com.br',
    temp1ep18leg: 'http://google.com.br',
    temp1ep19dub: 'http://google.com.br',
    temp1ep19leg: 'http://google.com.br',
    temp1ep20dub: 'http://google.com.br',
    temp1ep20leg: 'http://google.com.br',
    temp1ep21dub: 'http://google.com.br',
    temp1ep21leg: 'http://google.com.br',
    temp1ep22dub: 'http://google.com.br',
    temp1ep22leg: 'http://google.com.br',
    temp1ep23dub: 'http://google.com.br',
    temp1ep23leg: 'http://google.com.br',
    temp1ep24dub: 'http://google.com.br',
    temp1ep24leg: 'http://google.com.br',
    temp1ep25dub: 'http://google.com.br',
    temp1ep25leg: 'http://google.com.br',
    temp2ep1dub: 'http://google.com.br',
    temp2ep1leg: 'http://google.com.br',
    temp2ep2dub: 'http://google.com.br',
    temp2ep2leg: 'http://google.com.br',
    temp2ep3dub: 'http://google.com.br',
    temp2ep3leg: 'http://google.com.br',
    temp2ep4dub: 'http://google.com.br',
    temp2ep4leg: 'http://google.com.br',
    temp2ep5dub: 'http://google.com.br',
    temp2ep5leg: 'http://google.com.br',
    temp2ep6dub: 'http://google.com.br',
    temp2ep6leg: 'http://google.com.br',
    temp2ep7dub: 'http://google.com.br',
    temp2ep7leg: 'http://google.com.br',
    temp2ep8dub: 'http://google.com.br',
    temp2ep8leg: 'http://google.com.br',
    temp2ep9dub: 'http://google.com.br',
    temp2ep9leg: 'http://google.com.br',
    temp2ep10dub: 'http://google.com.br',
    temp2ep10leg: 'http://google.com.br',
    temp2ep11dub: 'http://google.com.br',
    temp2ep11leg: 'http://google.com.br',
    temp2ep12dub: 'http://google.com.br',
    temp2ep12leg: 'http://google.com.br',
    temp2ep13dub: 'http://google.com.br',
    temp2ep13leg: 'http://google.com.br',
    temp2ep14dub: 'http://google.com.br',
    temp2ep14leg: 'http://google.com.br',
    temp2ep15dub: 'http://google.com.br',
    temp2ep15leg: 'http://google.com.br',
    temp2ep16dub: 'http://google.com.br',
    temp2ep16leg: 'http://google.com.br',
    temp2ep17dub: 'http://google.com.br',
    temp2ep17leg: 'http://google.com.br',
    temp2ep18dub: 'http://google.com.br',
    temp2ep18leg: 'http://google.com.br',
    temp2ep19dub: 'http://google.com.br',
    temp2ep19leg: 'http://google.com.br',
    temp2ep20dub: 'http://google.com.br',
    temp2ep20leg: 'http://google.com.br',
    temp2ep21dub: 'http://google.com.br',
    temp2ep21leg: 'http://google.com.br',
    temp2ep22dub: 'http://google.com.br',
    temp2ep22leg: 'http://google.com.br',
    temp2ep23dub: 'http://google.com.br',
    temp2ep23leg: 'http://google.com.br',
    temp2ep24dub: 'http://google.com.br',
    temp2ep24leg: 'http://google.com.br',
    temp2ep25dub: 'http://google.com.br',
    temp2ep25leg: 'http://google.com.br',
    temp3ep1dub: 'http://google.com.br',
    temp3ep1leg: 'http://google.com.br',
    temp3ep2dub: 'http://google.com.br',
    temp3ep2leg: 'http://google.com.br',
    temp3ep3dub: 'http://google.com.br',
    temp3ep3leg: 'http://google.com.br',
    temp3ep4dub: 'http://google.com.br',
    temp3ep4leg: 'http://google.com.br',
    temp3ep5dub: 'http://google.com.br',
    temp3ep5leg: 'http://google.com.br',
    temp3ep6dub: 'http://google.com.br',
    temp3ep6leg: 'http://google.com.br',
    temp3ep7dub: 'http://google.com.br',
    temp3ep7leg: 'http://google.com.br',
    temp3ep8dub: 'http://google.com.br',
    temp3ep8leg: 'http://google.com.br',
    temp3ep9dub: 'http://google.com.br',
    temp3ep9leg: 'http://google.com.br',
    temp3ep10dub: 'http://google.com.br',
    temp3ep10leg: 'http://google.com.br',
    temp3ep11dub: 'http://google.com.br',
    temp3ep11leg: 'http://google.com.br',
    temp3ep12dub: 'http://google.com.br',
    temp3ep12leg: 'http://google.com.br',
    temp3ep13dub: 'http://google.com.br',
    temp3ep13leg: 'http://google.com.br',
    temp3ep14dub: 'http://google.com.br',
    temp3ep14leg: 'http://google.com.br',
    temp3ep15dub: 'http://google.com.br',
    temp3ep15leg: 'http://google.com.br',
    temp3ep16dub: 'http://google.com.br',
    temp3ep16leg: 'http://google.com.br',
    temp3ep17dub: 'http://google.com.br',
    temp3ep17leg: 'http://google.com.br',
    temp3ep18dub: 'http://google.com.br',
    temp3ep18leg: 'http://google.com.br',
    temp3ep19dub: 'http://google.com.br',
    temp3ep19leg: 'http://google.com.br',
    temp3ep20dub: 'http://google.com.br',
    temp3ep20leg: 'http://google.com.br',
    temp3ep21dub: 'http://google.com.br',
    temp3ep21leg: 'http://google.com.br',
    temp3ep22dub: 'http://google.com.br',
    temp3ep22leg: 'http://google.com.br',
    temp3ep23dub: 'http://google.com.br',
    temp3ep23leg: 'http://google.com.br',
    temp3ep24dub: 'http://google.com.br',
    temp3ep24leg: 'http://google.com.br',
    temp3ep25dub: 'http://google.com.br',
    temp3ep25leg: 'http://google.com.br',
    temp4ep1dub: 'http://google.com.br',
    temp4ep1leg: 'http://google.com.br',
    temp4ep2dub: 'http://google.com.br',
    temp4ep2leg: 'http://google.com.br',
    temp4ep3dub: 'http://google.com.br',
    temp4ep3leg: 'http://google.com.br',
    temp4ep4dub: 'http://google.com.br',
    temp4ep4leg: 'http://google.com.br',
    temp4ep5dub: 'http://google.com.br',
    temp4ep5leg: 'http://google.com.br',
    temp4ep6dub: 'http://google.com.br',
    temp4ep6leg: 'http://google.com.br',
    temp4ep7dub: 'http://google.com.br',
    temp4ep7leg: 'http://google.com.br',
    temp4ep8dub: 'http://google.com.br',
    temp4ep8leg: 'http://google.com.br',
    temp4ep9dub: 'http://google.com.br',
    temp4ep9leg: 'http://google.com.br',
    temp4ep10dub: 'http://google.com.br',
    temp4ep10leg: 'http://google.com.br',
    temp4ep11dub: 'http://google.com.br',
    temp4ep11leg: 'http://google.com.br',
    temp4ep12dub: 'http://google.com.br',
    temp4ep12leg: 'http://google.com.br',
    temp4ep13dub: 'http://google.com.br',
    temp4ep13leg: 'http://google.com.br',
    temp4ep14dub: 'http://google.com.br',
    temp4ep14leg: 'http://google.com.br',
    temp4ep15dub: 'http://google.com.br',
    temp4ep15leg: 'http://google.com.br',
    temp4ep16dub: 'http://google.com.br',
    temp4ep16leg: 'http://google.com.br',
    temp4ep17dub: 'http://google.com.br',
    temp4ep17leg: 'http://google.com.br',
    temp4ep18dub: 'http://google.com.br',
    temp4ep18leg: 'http://google.com.br',
    temp4ep19dub: 'http://google.com.br',
    temp4ep19leg: 'http://google.com.br',
    temp4ep20dub: 'http://google.com.br',
    temp4ep20leg: 'http://google.com.br',
    temp4ep21dub: 'http://google.com.br',
    temp4ep21leg: 'http://google.com.br',
    temp4ep22dub: 'http://google.com.br',
    temp4ep22leg: 'http://google.com.br',
    temp4ep23dub: 'http://google.com.br',
    temp4ep23leg: 'http://google.com.br',
    temp4ep24dub: 'http://google.com.br',
    temp4ep24leg: 'http://google.com.br',
    temp4ep25dub: 'http://google.com.br',
    temp4ep25leg: 'http://google.com.br',
    temp5ep1dub: 'http://google.com.br',
    temp5ep1leg: 'http://google.com.br',
    temp5ep2dub: 'http://google.com.br',
    temp5ep2leg: 'http://google.com.br',
    temp5ep3dub: 'http://google.com.br',
    temp5ep3leg: 'http://google.com.br',
    temp5ep4dub: 'http://google.com.br',
    temp5ep4leg: 'http://google.com.br',
    temp5ep5dub: 'http://google.com.br',
    temp5ep5leg: 'http://google.com.br',
    temp5ep6dub: 'http://google.com.br',
    temp5ep6leg: 'http://google.com.br',
    temp5ep7dub: 'http://google.com.br',
    temp5ep7leg: 'http://google.com.br',
    temp5ep8dub: 'http://google.com.br',
    temp5ep8leg: 'http://google.com.br',
    temp5ep9dub: 'http://google.com.br',
    temp5ep9leg: 'http://google.com.br',
    temp5ep10dub: 'http://google.com.br',
    temp5ep10leg: 'http://google.com.br',
    temp5ep11dub: 'http://google.com.br',
    temp5ep11leg: 'http://google.com.br',
    temp5ep12dub: 'http://google.com.br',
    temp5ep12leg: 'http://google.com.br',
    temp5ep13dub: 'http://google.com.br',
    temp5ep13leg: 'http://google.com.br',
    temp5ep14dub: 'http://google.com.br',
    temp5ep14leg: 'http://google.com.br',
    temp5ep15dub: 'http://google.com.br',
    temp5ep15leg: 'http://google.com.br',
    temp5ep16dub: 'http://google.com.br',
    temp5ep16leg: 'http://google.com.br',
    temp5ep17dub: 'http://google.com.br',
    temp5ep17leg: 'http://google.com.br',
    temp5ep18dub: 'http://google.com.br',
    temp5ep18leg: 'http://google.com.br',
    temp5ep19dub: 'http://google.com.br',
    temp5ep19leg: 'http://google.com.br',
    temp5ep20dub: 'http://google.com.br',
    temp5ep20leg: 'http://google.com.br',
    temp5ep21dub: 'http://google.com.br',
    temp5ep21leg: 'http://google.com.br',
    temp5ep22dub: 'http://google.com.br',
    temp5ep22leg: 'http://google.com.br',
    temp5ep23dub: 'http://google.com.br',
    temp5ep23leg: 'http://google.com.br',
    temp5ep24dub: 'http://google.com.br',
    temp5ep24leg: 'http://google.com.br',
    temp5ep25dub: 'http://google.com.br',
    temp5ep25leg: 'http://google.com.br',
    
  };
 
  todoId = null;
 
  constructor(private admobService: AdmobService, private route: ActivatedRoute, private router: Router, private todoService: TodoService, private loadingController: LoadingController, private sanitizer: DomSanitizer) { }
 
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.sanitizer.bypassSecurityTrustScript(url);
  }

  ngOnInit() {
    this.admobService.HideBanner();
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('home');
      });
    }
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