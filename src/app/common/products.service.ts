import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import * as faker from 'faker';
import { Galleta } from "../model/galleta";


type galletaCollection = AngularFirestoreCollection<Galleta[]>;
type galletaDocument = AngularFirestoreDocument<Galleta>;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private afs: AngularFirestore
  )
  {

  }

  galletas(): galletaCollection
  {
    return this.afs.collection<Galleta[]>('galletas');
  }

  galleta(id: string): galletaDocument
  {
    return this.afs.doc<Galleta>(`galletas/${id}`);
  }

  save(galleta: Galleta): Promise<any>
  {
    galleta.id = faker.random.alphaNumeric(16);
    return (this.galletas().doc(galleta.id).set(Object.assign({},galleta)));
  }

  update(galleta: Galleta): Promise<any>
  {
    return (this.galleta(galleta.id).update(Object.assign({},galleta)));
  }

  getProductImages(galletaId: string)
  {
    return (this.afs.doc<Galleta>(`galletas/${galletaId}`).collection('uploads'));
    //acceder a la informacion de uploads, acceder a storage de firestore
  }
}
