import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { WorkerInterface } from '../model/worker';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  export class WorkerService {
    private contactCollection: AngularFirestoreCollection<WorkerInterface>;
  
    constructor(private afs: AngularFirestore) {
      this.booksCollection = afs.collection<WorkerInterface>('vendedores');
      this.books=this.booksCollection.valueChanges();


    }
    private booksCollection: AngularFirestoreCollection<WorkerInterface>;
    private books: Observable<WorkerInterface[]>;
    public selectedBook: WorkerInterface = {
      id: null
    };
    private bookDoc: AngularFirestoreDocument<WorkerInterface>;
    private book: Observable<WorkerInterface>;
   
  
    getAllBooks() {
      return this.books= this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as WorkerInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }

    saveMessage(newContact: WorkerInterface): void 
    {
        this.booksCollection.add(newContact);
    }

    deleteBook(idBook: string): void
    {
        this.bookDoc = this.afs.doc<WorkerInterface>(`vendedores/${idBook}`);
        this.bookDoc.delete();
    }
    updateBook(book: WorkerInterface): void {
      let idBook = book.id;
      this.bookDoc = this.afs.doc<WorkerInterface>(`vendedores/${idBook}`);
      this.bookDoc.update(book);
    }

  }