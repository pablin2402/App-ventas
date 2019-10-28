import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MessageI} from '../model/message.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs: AngularFirestore) { 
    this.contactCollection= afs.collection<MessageI>('contacts');
  }
  
 
   saveMessage(newContact:  MessageI): void{
    this.contactCollection.add(newContact);
  }
  
  
}

