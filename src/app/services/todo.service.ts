import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export interface Todo {
  id?: string;
  task: string;
  genre: string;
  trailer: string;
  url: string;
  url2: string;
  duration: string;
  poster: string;
  type: string;
  temp1ep1dub: string,
  temp1ep1leg: string,
  temp1ep2dub: string,
  temp1ep2leg: string,
  temp1ep3dub: string,
  temp1ep3leg: string,
  temp1ep4dub: string,
  temp1ep4leg: string,
  temp1ep5dub: string,
  temp1ep5leg: string,
  temp1ep6dub: string,
  temp1ep6leg: string,
  temp1ep7dub: string,
  temp1ep7leg: string,
  temp1ep8dub: string,
  temp1ep8leg: string,
  temp1ep9dub: string,
  temp1ep9leg: string,
  temp1ep10dub: string,
  temp1ep10leg: string,
  temp1ep11dub: string,
  temp1ep11leg: string,
  temp1ep12dub: string,
  temp1ep12leg: string,
  temp1ep13dub: string,
  temp1ep13leg: string,
  temp1ep14dub: string,
  temp1ep14leg: string,
  temp1ep15dub: string,
  temp1ep15leg: string,
  temp1ep16dub: string,
  temp1ep16leg: string,
  temp1ep17dub: string,
  temp1ep17leg: string,
  temp1ep18dub: string,
  temp1ep18leg: string,
  temp1ep19dub: string,
  temp1ep19leg: string,
  temp1ep20dub: string,
  temp1ep20leg: string,
  temp1ep21dub: string,
  temp1ep21leg: string,
  temp1ep22dub: string,
  temp1ep22leg: string,
  temp1ep23dub: string,
  temp1ep23leg: string,
  temp1ep24dub: string,
  temp1ep24leg: string,
  temp1ep25dub: string,
  temp1ep25leg: string,
  temp1ep26dub: string,
  temp1ep26leg: string,
  temp1ep27dub: string,
  temp1ep27leg: string,
  temp1ep28dub: string,
  temp1ep28leg: string,
  temp1ep29dub: string,
  temp1ep29leg: string,
  temp1ep30dub: string,
  temp1ep30leg: string,
  temp2ep1dub: string,
  temp2ep1leg: string,
  temp2ep2dub: string,
  temp2ep2leg: string,
  temp2ep3dub: string,
  temp2ep3leg: string,
  temp2ep4dub: string,
  temp2ep4leg: string,
  temp2ep5dub: string,
  temp2ep5leg: string,
  temp2ep6dub: string,
  temp2ep6leg: string,
  temp2ep7dub: string,
  temp2ep7leg: string,
  temp2ep8dub: string,
  temp2ep8leg: string,
  temp2ep9dub: string,
  temp2ep9leg: string,
  temp2ep10dub: string,
  temp2ep10leg: string,
  temp2ep11dub: string,
  temp2ep11leg: string,
  temp2ep12dub: string,
  temp2ep12leg: string,
  temp2ep13dub: string,
  temp2ep13leg: string,
  temp2ep14dub: string,
  temp2ep14leg: string,
  temp2ep15dub: string,
  temp2ep15leg: string,
  temp2ep16dub: string,
  temp2ep16leg: string,
  temp2ep17dub: string,
  temp2ep17leg: string,
  temp2ep18dub: string,
  temp2ep18leg: string,
  temp2ep19dub: string,
  temp2ep19leg: string,
  temp2ep20dub: string,
  temp2ep20leg: string,
  temp2ep21dub: string,
  temp2ep21leg: string,
  temp2ep22dub: string,
  temp2ep22leg: string,
  temp2ep23dub: string,
  temp2ep23leg: string,
  temp2ep24dub: string,
  temp2ep24leg: string,
  temp2ep25dub: string,
  temp2ep25leg: string,
  temp2ep26dub: string,
  temp2ep26leg: string,
  temp2ep27dub: string,
  temp2ep27leg: string,
  temp2ep28dub: string,
  temp2ep28leg: string,
  temp2ep29dub: string,
  temp2ep29leg: string,
  temp2ep30dub: string,
  temp2ep30leg: string,
  temp3ep1dub: string,
  temp3ep1leg: string,
  temp3ep2dub: string,
  temp3ep2leg: string,
  temp3ep3dub: string,
  temp3ep3leg: string,
  temp3ep4dub: string,
  temp3ep4leg: string,
  temp3ep5dub: string,
  temp3ep5leg: string,
  temp3ep6dub: string,
  temp3ep6leg: string,
  temp3ep7dub: string,
  temp3ep7leg: string,
  temp3ep8dub: string,
  temp3ep8leg: string,
  temp3ep9dub: string,
  temp3ep9leg: string,
  temp3ep10dub: string,
  temp3ep10leg: string,
  temp3ep11dub: string,
  temp3ep11leg: string,
  temp3ep12dub: string,
  temp3ep12leg: string,
  temp3ep13dub: string,
  temp3ep13leg: string,
  temp3ep14dub: string,
  temp3ep14leg: string,
  temp3ep15dub: string,
  temp3ep15leg: string,
  temp3ep16dub: string,
  temp3ep16leg: string,
  temp3ep17dub: string,
  temp3ep17leg: string,
  temp3ep18dub: string,
  temp3ep18leg: string,
  temp3ep19dub: string,
  temp3ep19leg: string,
  temp3ep20dub: string,
  temp3ep20leg: string,
  temp3ep21dub: string,
  temp3ep21leg: string,
  temp3ep22dub: string,
  temp3ep22leg: string,
  temp3ep23dub: string,
  temp3ep23leg: string,
  temp3ep24dub: string,
  temp3ep24leg: string,
  temp3ep25dub: string,
  temp3ep25leg: string,
  temp3ep26dub: string,
  temp3ep26leg: string,
  temp3ep27dub: string,
  temp3ep27leg: string,
  temp3ep28dub: string,
  temp3ep28leg: string,
  temp3ep29dub: string,
  temp3ep29leg: string,
  temp3ep30dub: string,
  temp3ep30leg: string,
  temp4ep1dub: string,
  temp4ep1leg: string,
  temp4ep2dub: string,
  temp4ep2leg: string,
  temp4ep3dub: string,
  temp4ep3leg: string,
  temp4ep4dub: string,
  temp4ep4leg: string,
  temp4ep5dub: string,
  temp4ep5leg: string,
  temp4ep6dub: string,
  temp4ep6leg: string,
  temp4ep7dub: string,
  temp4ep7leg: string,
  temp4ep8dub: string,
  temp4ep8leg: string,
  temp4ep9dub: string,
  temp4ep9leg: string,
  temp4ep10dub: string,
  temp4ep10leg: string,
  temp4ep11dub: string,
  temp4ep11leg: string,
  temp4ep12dub: string,
  temp4ep12leg: string,
  temp4ep13dub: string,
  temp4ep13leg: string,
  temp4ep14dub: string,
  temp4ep14leg: string,
  temp4ep15dub: string,
  temp4ep15leg: string,
  temp4ep16dub: string,
  temp4ep16leg: string,
  temp4ep17dub: string,
  temp4ep17leg: string,
  temp4ep18dub: string,
  temp4ep18leg: string,
  temp4ep19dub: string,
  temp4ep19leg: string,
  temp4ep20dub: string,
  temp4ep20leg: string,
  temp4ep21dub: string,
  temp4ep21leg: string,
  temp4ep22dub: string,
  temp4ep22leg: string,
  temp4ep23dub: string,
  temp4ep23leg: string,
  temp4ep24dub: string,
  temp4ep24leg: string,
  temp4ep25dub: string,
  temp4ep25leg: string,
  temp4ep26dub: string,
  temp4ep26leg: string,
  temp4ep27dub: string,
  temp4ep27leg: string,
  temp4ep28dub: string,
  temp4ep28leg: string,
  temp4ep29dub: string,
  temp4ep29leg: string,
  temp4ep30dub: string,
  temp4ep30leg: string,
  temp5ep1dub: string,
  temp5ep1leg: string,
  temp5ep2dub: string,
  temp5ep2leg: string,
  temp5ep3dub: string,
  temp5ep3leg: string,
  temp5ep4dub: string,
  temp5ep4leg: string,
  temp5ep5dub: string,
  temp5ep5leg: string,
  temp5ep6dub: string,
  temp5ep6leg: string,
  temp5ep7dub: string,
  temp5ep7leg: string,
  temp5ep8dub: string,
  temp5ep8leg: string,
  temp5ep9dub: string,
  temp5ep9leg: string,
  temp5ep10dub: string,
  temp5ep10leg: string,
  temp5ep11dub: string,
  temp5ep11leg: string,
  temp5ep12dub: string,
  temp5ep12leg: string,
  temp5ep13dub: string,
  temp5ep13leg: string,
  temp5ep14dub: string,
  temp5ep14leg: string,
  temp5ep15dub: string,
  temp5ep15leg: string,
  temp5ep16dub: string,
  temp5ep16leg: string,
  temp5ep17dub: string,
  temp5ep17leg: string,
  temp5ep18dub: string,
  temp5ep18leg: string,
  temp5ep19dub: string,
  temp5ep19leg: string,
  temp5ep20dub: string,
  temp5ep20leg: string,
  temp5ep21dub: string,
  temp5ep21leg: string,
  temp5ep22dub: string,
  temp5ep22leg: string,
  temp5ep23dub: string,
  temp5ep23leg: string,
  temp5ep24dub: string,
  temp5ep24leg: string,
  temp5ep25dub: string,
  temp5ep25leg: string,
  temp5ep26dub: string,
  temp5ep26leg: string,
  temp5ep27dub: string,
  temp5ep27leg: string,
  temp5ep28dub: string,
  temp5ep28leg: string,
  temp5ep29dub: string,
  temp5ep29leg: string,
  temp5ep30dub: string,
  temp5ep30leg: string,
  temp6ep1dub: string,
  temp6ep1leg: string,
  temp6ep2dub: string,
  temp6ep2leg: string,
  temp6ep3dub: string,
  temp6ep3leg: string,
  temp6ep4dub: string,
  temp6ep4leg: string,
  temp6ep5dub: string,
  temp6ep5leg: string,
  temp6ep6dub: string,
  temp6ep6leg: string,
  temp6ep7dub: string,
  temp6ep7leg: string,
  temp6ep8dub: string,
  temp6ep8leg: string,
  temp6ep9dub: string,
  temp6ep9leg: string,
  temp6ep10dub: string,
  temp6ep10leg: string,
  temp6ep11dub: string,
  temp6ep11leg: string,
  temp6ep12dub: string,
  temp6ep12leg: string,
  temp6ep13dub: string,
  temp6ep13leg: string,
  temp6ep14dub: string,
  temp6ep14leg: string,
  temp6ep15dub: string,
  temp6ep15leg: string,
  temp6ep16dub: string,
  temp6ep16leg: string,
  temp6ep17dub: string,
  temp6ep17leg: string,
  temp6ep18dub: string,
  temp6ep18leg: string,
  temp6ep19dub: string,
  temp6ep19leg: string,
  temp6ep20dub: string,
  temp6ep20leg: string,
  temp6ep21dub: string,
  temp6ep21leg: string,
  temp6ep22dub: string,
  temp6ep22leg: string,
  temp6ep23dub: string,
  temp6ep23leg: string,
  temp6ep24dub: string,
  temp6ep24leg: string,
  temp6ep25dub: string,
  temp6ep25leg: string,
  temp6ep26dub: string,
  temp6ep26leg: string,
  temp6ep27dub: string,
  temp6ep27leg: string,
  temp6ep28dub: string,
  temp6ep28leg: string,
  temp6ep29dub: string,
  temp6ep29leg: string,
  temp6ep30dub: string,
  temp6ep30leg: string,
  temp7ep1dub: string,
  temp7ep1leg: string,
  temp7ep2dub: string,
  temp7ep2leg: string,
  temp7ep3dub: string,
  temp7ep3leg: string,
  temp7ep4dub: string,
  temp7ep4leg: string,
  temp7ep5dub: string,
  temp7ep5leg: string,
  temp7ep6dub: string,
  temp7ep6leg: string,
  temp7ep7dub: string,
  temp7ep7leg: string,
  temp7ep8dub: string,
  temp7ep8leg: string,
  temp7ep9dub: string,
  temp7ep9leg: string,
  temp7ep10dub: string,
  temp7ep10leg: string,
  temp7ep11dub: string,
  temp7ep11leg: string,
  temp7ep12dub: string,
  temp7ep12leg: string,
  temp7ep13dub: string,
  temp7ep13leg: string,
  temp7ep14dub: string,
  temp7ep14leg: string,
  temp7ep15dub: string,
  temp7ep15leg: string,
  temp7ep16dub: string,
  temp7ep16leg: string,
  temp7ep17dub: string,
  temp7ep17leg: string,
  temp7ep18dub: string,
  temp7ep18leg: string,
  temp7ep19dub: string,
  temp7ep19leg: string,
  temp7ep20dub: string,
  temp7ep20leg: string,
  temp7ep21dub: string,
  temp7ep21leg: string,
  temp7ep22dub: string,
  temp7ep22leg: string,
  temp7ep23dub: string,
  temp7ep23leg: string,
  temp7ep24dub: string,
  temp7ep24leg: string,
  temp7ep25dub: string,
  temp7ep25leg: string,
  temp7ep26dub: string,
  temp7ep26leg: string,
  temp7ep27dub: string,
  temp7ep27leg: string,
  temp7ep28dub: string,
  temp7ep28leg: string,
  temp7ep29dub: string,
  temp7ep29leg: string,
  temp7ep30dub: string,
  temp7ep30leg: string,
}
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Todo>;
  private moviesCollection: AngularFirestoreCollection<Todo>;
  private seriesCollection: AngularFirestoreCollection<Todo>;
  private hypeCollection: AngularFirestoreCollection<Todo>;
  private acaoCollection: AngularFirestoreCollection<Todo>;
  private animacaoCollection: AngularFirestoreCollection<Todo>;
  private aventuraCollection: AngularFirestoreCollection<Todo>;
  private comediaCollection: AngularFirestoreCollection<Todo>;
  private familiaCollection: AngularFirestoreCollection<Todo>;
  private fantasiaCollection: AngularFirestoreCollection<Todo>;
  private ficcaoCollection: AngularFirestoreCollection<Todo>;
  private terrorCollection: AngularFirestoreCollection<Todo>;
  private suspenseCollection: AngularFirestoreCollection<Todo>;
  private romanceCollection: AngularFirestoreCollection<Todo>;
  private dramaCollection: AngularFirestoreCollection<Todo>;
  private misterioCollection: AngularFirestoreCollection<Todo>;
  private acaoSCollection: AngularFirestoreCollection<Todo>;
  private dramaSCollection: AngularFirestoreCollection<Todo>;
  private comediaSCollection: AngularFirestoreCollection<Todo>;
  private romanceSCollection: AngularFirestoreCollection<Todo>;
  private ficcaoSCollection: AngularFirestoreCollection<Todo>;
  private aventuraSCollection: AngularFirestoreCollection<Todo>;
  private misterioSCollection: AngularFirestoreCollection<Todo>;
  private suspenseSCollection: AngularFirestoreCollection<Todo>;
  private terrorSCollection: AngularFirestoreCollection<Todo>;

  private releaseCollection: AngularFirestoreCollection<Todo>;
  private mostCollection: AngularFirestoreCollection<Todo>;
  private upCollection: AngularFirestoreCollection<Todo>;
  private releaseSCollection: AngularFirestoreCollection<Todo>;
  private mostSCollection: AngularFirestoreCollection<Todo>;
  private upSCollection: AngularFirestoreCollection<Todo>;
 
  private todos: Observable<Todo[]>;
  private movies: Observable<Todo[]>;
  private series: Observable<Todo[]>;
  private hype: Observable<Todo[]>;
  private acao: Observable<Todo[]>;
  private animacao: Observable<Todo[]>;
  private aventura: Observable<Todo[]>;
  private comedia: Observable<Todo[]>;
  private familia: Observable<Todo[]>;
  private fantasia: Observable<Todo[]>;
  private ficcao: Observable<Todo[]>;
  private terror: Observable<Todo[]>;
  private suspense: Observable<Todo[]>;
  private romance: Observable<Todo[]>;
  private drama: Observable<Todo[]>;
  private misterio: Observable<Todo[]>;
  private acaoS: Observable<Todo[]>;
  private dramaS: Observable<Todo[]>;
  private comediaS: Observable<Todo[]>;
  private romanceS: Observable<Todo[]>;
  private ficcaoS: Observable<Todo[]>;
  private aventuraS: Observable<Todo[]>;
  private misterioS: Observable<Todo[]>;
  private suspenseS: Observable<Todo[]>;
  private terrorS: Observable<Todo[]>;

  private release: Observable<Todo[]>;
  private most: Observable<Todo[]>;
  private up: Observable<Todo[]>;

  private releaseS: Observable<Todo[]>;
  private mostS: Observable<Todo[]>;
  private upS: Observable<Todo[]>;

 
  constructor(db: AngularFirestore) {
    
  
    this.todosCollection = db.collection<Todo>('todos');
    this.moviesCollection = db.collection<Todo>('todos', ref => ref.where('type', '==', 'Filme'));
    this.seriesCollection = db.collection<Todo>('todos', ref => ref.where('type', '==', 'Série'));
    this.hypeCollection = db.collection<Todo>('todos', ref => ref.where('hype', '==', 'Em Alta'));
    this.acaoCollection = db.collection<Todo>('todos', ref => ref.where('acao', '==', 'true'));
    this.animacaoCollection = db.collection<Todo>('todos', ref => ref.where('animacao', '==', 'true'));
    this.aventuraCollection = db.collection<Todo>('todos', ref => ref.where('aventura', '==', 'true'));
    this.comediaCollection = db.collection<Todo>('todos', ref => ref.where('comedia', '==', 'true'));
    this.familiaCollection = db.collection<Todo>('todos', ref => ref.where('familia', '==', 'true'));
    this.fantasiaCollection = db.collection<Todo>('todos', ref => ref.where('fantasia', '==', 'true'));
    this.ficcaoCollection = db.collection<Todo>('todos', ref => ref.where('ficcao', '==', 'true'));
    this.terrorCollection = db.collection<Todo>('todos', ref => ref.where('terror', '==', 'true'));
    this.suspenseCollection = db.collection<Todo>('todos', ref => ref.where('suspense', '==', 'true'));
    this.romanceCollection = db.collection<Todo>('todos', ref => ref.where('romance', '==', 'true'));
    this.dramaCollection = db.collection<Todo>('todos', ref => ref.where('drama', '==', 'true'));
    this.misterioCollection = db.collection<Todo>('todos', ref => ref.where('misterio', '==', 'true'));
    this.acaoSCollection = db.collection<Todo>('todos', ref => ref.where('acaoS', '==', 'true'));
    this.dramaSCollection = db.collection<Todo>('todos', ref => ref.where('dramaS', '==', 'true'));
    this.comediaSCollection = db.collection<Todo>('todos', ref => ref.where('comediaS', '==', 'true'));
    this.romanceSCollection = db.collection<Todo>('todos', ref => ref.where('romanceS', '==', 'true'));
    this.ficcaoSCollection = db.collection<Todo>('todos', ref => ref.where('ficcaoS', '==', 'true'));
    this.aventuraSCollection = db.collection<Todo>('todos', ref => ref.where('aventuraS', '==', 'true'));
    this.misterioSCollection = db.collection<Todo>('todos', ref => ref.where('misterioS', '==', 'true'));
    this.suspenseSCollection = db.collection<Todo>('todos', ref => ref.where('suspenseS', '==', 'true'));
    this.terrorSCollection = db.collection<Todo>('todos', ref => ref.where('terrorS', '==', 'true'));

    this.releaseCollection = db.collection<Todo>('todos', ref => ref.where('release', '==', 'true'));
    this.mostCollection = db.collection<Todo>('todos', ref => ref.where('most', '==', 'true'));
    this.upCollection = db.collection<Todo>('todos', ref => ref.where('up', '==', 'true'));
    this.releaseSCollection = db.collection<Todo>('todos', ref => ref.where('releaseS', '==', 'true'));
    this.mostSCollection = db.collection<Todo>('todos', ref => ref.where('mostS', '==', 'true'));
    this.upSCollection = db.collection<Todo>('todos', ref => ref.where('upS', '==', 'true'));

 
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          //console.log(a.payload.doc.data())
          return { id, ...data };
        });
      })
    );

    this.movies = this.moviesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.series = this.seriesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.hype = this.hypeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.acao = this.acaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.animacao = this.animacaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.aventura = this.aventuraCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.comedia = this.comediaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.familia = this.familiaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.fantasia = this.fantasiaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.ficcao = this.ficcaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.terror = this.terrorCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.suspense = this.suspenseCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.romance = this.romanceCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.drama = this.dramaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.misterio = this.misterioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.acaoS = this.acaoSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.dramaS = this.dramaSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.comediaS = this.comediaSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.romanceS = this.romanceSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.ficcaoS = this.ficcaoSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.aventuraS = this.aventuraSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.misterioS = this.misterioSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.suspenseS = this.suspenseSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.terrorS = this.terrorSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.release = this.releaseCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.most = this.mostCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.up = this.upCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.releaseS = this.releaseSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.mostS = this.mostSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );

    this.upS = this.upSCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    );
  }
 
  getTodos() {
    return this.todos;
  }
 
  getTodo(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }
 
  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }
 
  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }
 
  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }

  getAllMovies() {
    return this.movies;
  }

  getAllSeries() {
    return this.series
  }

  getAllHype() {
    return this.hype
  }

  getAllAcao(){
    return this.acao
  }

  getAllAnimacao(){
    return this.animacao
  }

  getAllAventura(){
    return this.aventura
  }

  getAllComedia(){
    return this.comedia
  }

  getAllFamilia(){
    return this.familia
  }

  getAllFantasia(){
    return this.fantasia
  }

  getAllFiccao(){
    return this.ficcao
  }

  getAllTerror(){
    return this.terror
  }

  getAllSuspense(){
    return this.suspense
  }

  getAllRomance(){
    return this.romance
  }

  getAllDrama(){
    return this.drama
  }

  getAllMisterio(){
    return this.misterio
  }

  getAllAcaoS(){
    return this.acaoS
  }

  getAllDramaS(){
    return this.dramaS
  }

  getAllComediaS(){
    return this.comediaS
  }

  getAllRomanceS(){
    return this.romanceS
  }

  getAllFiccaoS(){
    return this.ficcaoS
  }

  getAllAventuraS(){
    return this.aventuraS
  }

  getAllMisterioS(){
    return this.misterioS
  }

  getAllSuspenseS(){
    return this.suspenseS
  }

  getAllTerrorS(){
    return this.terrorS
  }

  getAllRelease(){
    return this.release
  }

  getAllMost(){
    return this.most
  }

  getAllUp(){
    return this.up
  }

  getAllReleaseS(){
    return this.releaseS
  }

  getAllMostS(){
    return this.mostS
  }

  getAllUpS(){
    return this.upS
  }
}