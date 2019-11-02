import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { DatoscompraI} from '../model/datoscompra.interface';

//name service
export interface myData{
  name:string;
} 

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private datoscompraCollection: AngularFirestoreCollection<DatoscompraI>;
  //
  sharingData: DatoscompraI={};
  //
  constructor(private afs: AngularFirestore) { 
    this.datoscompraCollection= afs.collection<DatoscompraI>('compras');
  }
  
   saveCompra(newCompra:  DatoscompraI,carrito:[], total:number): void{
     newCompra.carrito=carrito;
     newCompra.preciototal= total;
    this.datoscompraCollection.add(newCompra);
  }

  saveData(carritoser:[], preciot: number){
    //console.log('saveData() called'+ carritoser+ this.sharingData.carrito);
    this.sharingData.carrito=carritoser;
    console.log('precio total enviar', preciot);
    this.sharingData.preciototal= preciot;
  }

  getCarrito():[]
  {
    console.log('getData() called');
    return this.sharingData.carrito;
  }
  getPrecioTotal(): number{
    return this.sharingData.preciototal;
  }


}
