import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { DatoscompraI} from '../model/datoscompra.interface';


@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private datoscompraCollection: AngularFirestoreCollection<DatoscompraI>;
  constructor(private afs: AngularFirestore) { 
    this.datoscompraCollection= afs.collection<DatoscompraI>('compras');
  }
  
   saveCompra(newCompra:  DatoscompraI): void{
    this.datoscompraCollection.add(newCompra);
  }
}
