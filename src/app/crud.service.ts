import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewProducto(record) {
    return this.firestore.collection('Productos').add(record);
  }
 
 
 
  read_Proveedores() {
    return this.firestore.collection('distribuidores').snapshotChanges();
  }
 
  update_Proveedor(recordID,record){
    this.firestore.doc('Proveedores/' + recordID).update(record);
  }
 
  
  read_Vendedor() {
    return this.firestore.collection('vendedores').snapshotChanges();
  }
 
}