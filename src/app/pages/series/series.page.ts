import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  acaoS: Todo[];
  aventuraS: Todo[];
  comediaS: Todo[];
  ficcaoS: Todo[];
  terrorS: Todo[];
  suspenseS: Todo[];
  romanceS: Todo[];
  dramaS: Todo[];
  misterioS: Todo[];

  slidesOptions3 = {
    slidesPerView: 2.1
  };

  constructor(private todoService: TodoService, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
    }

  ngOnInit() {
    this.todoService.getAllAcaoS().subscribe(res => {
      this.acaoS = res
    })

    this.todoService.getAllAventuraS().subscribe(res => {
      this.aventuraS = res
    })

    this.todoService.getAllComediaS().subscribe(res => {
      this.comediaS = res
    })

    this.todoService.getAllFiccaoS().subscribe(res => {
      this.ficcaoS = res
    })

    this.todoService.getAllTerrorS().subscribe(res => {
      this.terrorS = res
    })

    this.todoService.getAllSuspenseS().subscribe(res => {
      this.suspenseS = res
    })

    this.todoService.getAllRomanceS().subscribe(res => {
      this.romanceS = res
    })

    this.todoService.getAllDramaS().subscribe(res => {
      this.dramaS = res
    })

    this.todoService.getAllMisterioS().subscribe(res => {
      this.misterioS = res
    })
  }

}
