import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  acao: Todo[];
  animacao: Todo[];
  aventura: Todo[];
  comedia: Todo[];
  familia: Todo[];
  fantasia: Todo[];
  ficcao: Todo[];
  terror: Todo[];
  suspense: Todo[];
  romance: Todo[];
  drama: Todo[];
  misterio: Todo[];

  slidesOptions3 = {
    slidesPerView: 2
  };

  constructor(private todoService: TodoService, public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
     }

  ngOnInit() {
    this.todoService.getAllAcao().subscribe(res => {
      this.acao = res
    })

    this.todoService.getAllAnimacao().subscribe(res => {
      this.animacao = res
    })

    this.todoService.getAllAventura().subscribe(res => {
      this.aventura = res
    })

    this.todoService.getAllComedia().subscribe(res => {
      this.comedia = res
    })

    this.todoService.getAllFamilia().subscribe(res => {
      this.familia = res
    })

    this.todoService.getAllFantasia().subscribe(res => {
      this.fantasia = res
    })

    this.todoService.getAllFiccao().subscribe(res => {
      this.ficcao = res
    })

    this.todoService.getAllTerror().subscribe(res => {
      this.terror = res
    })

    this.todoService.getAllSuspense().subscribe(res => {
      this.suspense = res
    })

    this.todoService.getAllRomance().subscribe(res => {
      this.romance = res
    })

    this.todoService.getAllDrama().subscribe(res => {
      this.drama = res
    })

    this.todoService.getAllMisterio().subscribe(res => {
      this.misterio = res
    })
  }

}
