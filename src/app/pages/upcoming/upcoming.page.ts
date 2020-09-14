import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  up: Todo[];
  upS: Todo[];

  slidesOptions3 = {
    slidesPerView: 2.1
  };

  constructor(private todoService: TodoService, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
    }

  ngOnInit() {
    this.todoService.getAllUp().subscribe(res => {
      this.up = res
    })

    this.todoService.getAllUpS().subscribe(res => {
      this.upS = res
    })
  }

}
