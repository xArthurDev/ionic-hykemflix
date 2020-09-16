import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { first } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AdmobService } from '../../services/admob.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Todo[];
  Gtodos: Todo[];
  private db: AngularFirestore;

  constructor(private admobService: AdmobService, private todoService: TodoService, db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('todos');
 }

 ionViewWillEnter() {
   setTimeout(() => {
   }, 5000);
  }

  async ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.Gtodos = res;
    });
    this.todos = await this.initializeItems();
  }
  
  async initializeItems(): Promise<any> {
    this.todoService.getTodos().subscribe(res => {
      this.Gtodos = res;
    });
    const Gtodos = await this.todosCollection
      .valueChanges().pipe(first()).toPromise();
    return Gtodos;
  }

  async filterList(event) {
    const searchTerm = event.srcElement.value;
    
    if (!searchTerm) {
      this.todos = await this.initializeItems();
      return;
    }

    this.Gtodos = this.todos.filter(todo => {
      if (todo.task && searchTerm) {
        return (todo.task.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
      
    });
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
