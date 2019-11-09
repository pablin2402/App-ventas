import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DistribuidorInterface } from '../model/distribuidor';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  export class DistribuidorService {
    private contactCollection: AngularFirestoreCollection<DistribuidorInterface>;
  
    constructor(private afs: AngularFirestore) {
      this.booksCollection = afs.collection<DistribuidorInterface>('distribuidores');
      this.books=this.booksCollection.valueChanges();
    }
    private booksCollection: AngularFirestoreCollection<DistribuidorInterface>;
    private books: Observable<DistribuidorInterface[]>;
    private bookDoc: AngularFirestoreDocument<DistribuidorInterface>;
    private book: Observable<DistribuidorInterface>;
    public selectedBook: DistribuidorInterface = {
      
    };
  
    getAllBooks() {
      return this.books= this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DistribuidorInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }
    updateBook(book: DistribuidorInterface): void {
      let idBook = book.id;
      this.bookDoc = this.afs.doc<DistribuidorInterface>(`distribuidores/${idBook}`);
      this.bookDoc.update(book);
    }
    deleteBook(idBook: string): void
    {
        this.bookDoc = this.afs.doc<DistribuidorInterface>(`distribuidores/${idBook}`);
        this.bookDoc.delete();
    }

    saveMessage(newContact: DistribuidorInterface): void {
      this.booksCollection.add(newContact);
    }
  }