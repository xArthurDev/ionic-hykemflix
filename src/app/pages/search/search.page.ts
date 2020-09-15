import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { first } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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

  constructor(private todoService: TodoService, db: AngularFirestore) {
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
    this.todos = await this.initializeItems();
    const searchTerm = event.srcElement.value;
  
    if (!searchTerm) {
      return;
    }

    
  
    this.Gtodos = this.Gtodos.filter(todo => {
      if (todo.task && searchTerm) {
        return (todo.task.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
      
    });
  }

}
