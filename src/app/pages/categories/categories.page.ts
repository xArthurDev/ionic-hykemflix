import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  segment = "today";
  
  
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
  acaoS: Todo[];
  aventuraS: Todo[];
  comediaS: Todo[];
  ficcaoS: Todo[];
  terrorS: Todo[];
  suspenseS: Todo[];
  romanceS: Todo[];
  dramaS: Todo[];
  misterioS: Todo[];

  slidesOptions2 = {
    slidesPerView: 2.1
  };

  constructor(private todoService: TodoService, private admobService: AdmobService) { }

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

  segmentChanged(){
    console.log(this.segmentChanged)
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
