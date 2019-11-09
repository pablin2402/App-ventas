import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AsignarInterface } from '../model/asignar';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  export class AsignarService {
    private contactCollection: AngularFirestoreCollection<AsignarInterface>;
  
    constructor(private afs: AngularFirestore) {
      this.booksCollection = afs.collection<AsignarInterface>('asignarvendedor');
      this.books=this.booksCollection.valueChanges();
    }
    private booksCollection: AngularFirestoreCollection<AsignarInterface>;
    private books: Observable<AsignarInterface[]>;
    private bookDoc: AngularFirestoreDocument<AsignarInterface>;
    private book: Observable<AsignarInterface>;
    public selectedBook: AsignarInterface = {
      
    };
  
  
    deleteBook(idBook: string): void
    {
        this.bookDoc = this.afs.doc<AsignarInterface>(`asignarvendedor/${idBook}`);
        this.bookDoc.delete();
    }

    saveMessage(newContact: AsignarInterface): void {
      this.booksCollection.add(newContact);
    }
    addBook(book: AsignarInterface): void {
      this.booksCollection.add(book);
    }
    updateBook(book: AsignarInterface): void {
      let idBook = book.uid;
      this.bookDoc = this.afs.doc<AsignarInterface>(`asignarvendedor/${idBook}`);
      this.bookDoc.update(book);
    }
  }