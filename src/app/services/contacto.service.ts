import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MessageI} from '../model/message.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  
  constructor(private afs: AngularFirestore) { 
    this.booksCollection= afs.collection<MessageI>('contacts');
    this.books=this.booksCollection.valueChanges();


  }
  private books: Observable<MessageI[]>;

  private booksCollection: AngularFirestoreCollection<MessageI>;
  private bookDoc: AngularFirestoreDocument<MessageI>;
  private book: Observable<MessageI>;
  public selectedBook: MessageI = {
    
  };
  saveMessage(newContact:  MessageI): void{
    this.booksCollection.add(newContact);
  }

  getAllBooks() {
    return this.books= this.booksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as MessageI;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  
  
  
}

