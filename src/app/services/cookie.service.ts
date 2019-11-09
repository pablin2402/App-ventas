import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CookieInterface } from '../model/cookie';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  
  constructor(private afs: AngularFirestore) { 
    this.booksCollection =afs.collection<CookieInterface>('galletas');
    this.books=this.booksCollection.valueChanges();
    this.contactCollection = afs.collection<CookieInterface>('galletas');

  }
  private contactCollection: AngularFirestoreCollection<CookieInterface>;

  private booksCollection: AngularFirestoreCollection<CookieInterface>;
  private books: Observable<CookieInterface[]>;
  private bookDoc: AngularFirestoreDocument<CookieInterface>;
  private book: Observable<CookieInterface>;
  public selectedBook: CookieInterface = {
    
  };
 
  getAllBooks() {
    return this.books= this.booksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as CookieInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getOneBook(idBook: string) {
   this.bookDoc = this.afs.doc<CookieInterface>(`galletas/${idBook}`);
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as CookieInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addBook(book: CookieInterface): void {
    this.booksCollection.add(book);
  }
  
  updateBook(book: CookieInterface): void {
    let idBook = book.id;
    this.bookDoc = this.afs.doc<CookieInterface>(`galletas/${idBook}`);
    this.bookDoc.update(book);
  }
  deleteBook(idBook: string): void {
    this.bookDoc = this.afs.doc<CookieInterface>(`galletas/${idBook}`);
    this.bookDoc.delete();
  }
  saveMessage(newContact: CookieInterface): void {
    this.contactCollection.add(newContact);

  }
  
}

