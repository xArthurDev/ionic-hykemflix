import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Request, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  requests: Request[];
  requestId = null 
  isenabled: boolean = false;
  

  request: Request = {
    title: '',
    upvote: +1,
    voteCount: 0,
  };

  constructor(private todoService: TodoService, private alertCtrl: AlertController, private loadingController: LoadingController,) { }

  ngOnInit() {
    this.todoService.getRequests().subscribe(res => {
      this.requests = res;
    });
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando..'
    });
    await loading.present();
 
    this.todoService.getRequest(this.requestId).subscribe(res => {
      loading.dismiss();
      this.request = res;
    });
  }

  upVote(item) {
    const currentVoteCount = item.voteCount ? item.voteCount + 1 : 1
    const newRequest = {
      ...item,
    voteCount: currentVoteCount
    }
    this.todoService.updateRequest(newRequest, item.id)
    alert('Voto confirmado!')
    if (alert){
      
      this.isenabled = true

    }
    console.log(item.voteCount, this.isenabled)
}

  async presentPrompt() {
    let alert = await this.alertCtrl.create({
      header: 'Novo pedido',
      inputs: [
        {
          name: 'title',
          placeholder: 'Título do filme/série',
          id: this.request.title
        },
      ],
      buttons: [
        {
          cssClass: 'button-color',
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          cssClass: 'button-color',
          text: 'Realizar pedido',
          handler: data => {
            if (data) {
             this.todoService.addRequest(data)
              console.log(this.requests, this.request, this.request.title)
            } else {
              
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }}
