import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Galleta } from '../model/galleta';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {


  constructor(private afs: AngularFirestore) {
    this.booksCollection =afs.collection<Galleta>('books');
    this.books=this.booksCollection.valueChanges();
  }

  private booksCollection: AngularFirestoreCollection<Galleta>;
  private books: Observable<Galleta[]>;
  private bookDoc: AngularFirestoreDocument<Galleta>;
  private book: Observable<Galleta>;
  public selectedBook: Galleta = {

  };

  getAllBooks() {
    return this.books= this.booksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Galleta;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getOneBook(idBook: string) {
    this.bookDoc = this.afs.doc<Galleta>(`books/${idBook}`);
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Galleta;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addBook(book: Galleta): void {
    this.booksCollection.add(book);
  }
  updateBook(book: Galleta): void {
    let idBook = book.id;
    this.bookDoc = this.afs.doc<Galleta>(`books/${idBook}`);
    this.bookDoc.update(book);
  }
  deleteBook(idBook: string): void {
    this.bookDoc = this.afs.doc<Galleta>(`books/${idBook}`);
    this.bookDoc.delete();
  }

}
