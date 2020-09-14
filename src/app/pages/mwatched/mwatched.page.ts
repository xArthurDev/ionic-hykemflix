import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-mwatched',
  templateUrl: './mwatched.page.html',
  styleUrls: ['./mwatched.page.scss'],
})
export class MwatchedPage implements OnInit {

  most: Todo[];
  mostS: Todo[];

  slidesOptions3 = {
    slidesPerView: 2.1
  };

  constructor(private todoService: TodoService, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
    }

  ngOnInit() {
    this.todoService.getAllMost().subscribe(res => {
      this.most = res
    })

    this.todoService.getAllMostS().subscribe(res => {
      this.mostS = res
    })
  }

}
