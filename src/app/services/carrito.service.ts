import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { CarritoInterface} from '../model/carrito';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  
  constructor(private afs: AngularFirestore) { 
    this.booksCollection= afs.collection<CarritoInterface>('compras');
    this.books=this.booksCollection.valueChanges();

  }
  private books: Observable<CarritoInterface[]>;

  private booksCollection: AngularFirestoreCollection<CarritoInterface>;
  private bookDoc: AngularFirestoreDocument<CarritoInterface>;
  private book: Observable<CarritoInterface>;
  public selectedBook: CarritoInterface = {
    
  };
  saveMessage(newContact:  CarritoInterface): void{
    this.booksCollection.add(newContact);
  }

  getAllBooks() {
    return this.books= this.booksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as CarritoInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  
  
  
}

