import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import * as faker from 'faker';
import { Galleta } from "../model/galleta";
import {Observable} from "rxjs";
import { fromPromise } from 'rxjs/observable/fromPromise';
import { expand, takeWhile, mergeMap, take } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { UploadService } from '../admin/upload.service';


type galletasCollection = AngularFirestoreCollection<Galleta[]>;
type galletaDocument = AngularFirestoreDocument<Galleta>;

@Injectable()

export class ProductsService {

  constructor(
    private afs: AngularFirestore,
    private uploadService: UploadService
  )
  {

  }

  galletas(): galletasCollection
  {
    return (this.afs.collection<Galleta[]>('galletas'));
  }

  galleta(id: string): galletaDocument
  {
    return (this.afs.doc<Galleta>(`galletas/${id}`));
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

  remove(id): Promise<any> {
    let ref = this.galleta(id);
    return new Promise((resolve, reject) => {
      this.deleteUploadsCollection(`products/${id}/uploads`, 1).subscribe(() => {
        ref.delete().then(() => {
          resolve(true);
        }).catch(error => {
          reject(error);
        })
      })
    })
  }

  private deleteUploadsCollection(path: string, limit: number): Observable<any> {
    const source = this.deleteBatch(path, limit)
    return source.pipe(
      expand(val => this.deleteBatch(path, limit)),
      takeWhile(val => val > 0)
    )
  }

  private deleteBatch(path: string, limit: number): Observable<any> {
    const ref = this.afs.collection(path, ref => ref.orderBy('__name__').limit(limit));
    return ref.snapshotChanges().pipe(
      take(1),
      mergeMap(snapshot => {
        const batch = this.afs.firestore.batch();
        snapshot.forEach(doc => {
          this.uploadService.removeFile(doc.payload.doc.id);
          batch.delete(doc.payload.doc.ref);
        });
        return fromPromise(batch.commit()).map(() => snapshot.length)
      })
    )
  }
  //////////////////////////////////////////
  /*products(): productsCollection {
    return this.afs.collection<Product[]>('products');
  }

  product(id: string): productDocument {
    return this.afs.doc<Product>(`products/${id}`);
  }

  save(product: Product): Promise<any> {
    product.id = faker.random.alphaNumeric(16);
    return this.products().doc(product.id).set(Object.assign({}, product));
  }

  update(product: Product): Promise<any> {
    return this.product(product.id).update(Object.assign({}, product));
  }

  getProductImages(productId: string) {
    return this.afs.doc<Product>(`products/${productId}`).collection('uploads');
  }

  remove(id): Promise<any> {
    let ref = this.product(id);
    return new Promise((resolve, reject) => {
      this.deleteUploadsCollection(`products/${id}/uploads`, 1).subscribe(() => {
        ref.delete().then(() => {
          resolve(true);
        }).catch(error => {
          reject(error);
        })
      })
    })
  }

  private deleteUploadsCollection(path: string, limit: number): Observable<any> {
    const source = this.deleteBatch(path, limit)
    return source.pipe(
      expand(val => this.deleteBatch(path, limit)),
      takeWhile(val => val > 0)
    )
  }

  private deleteBatch(path: string, limit: number): Observable<any> {
    const ref = this.afs.collection(path, ref => ref.orderBy('__name__').limit(limit));
    return ref.snapshotChanges().pipe(
      take(1),
      mergeMap(snapshot => {
        const batch = this.afs.firestore.batch();
        snapshot.forEach(doc => {
  //        this.uploadService.removeFile(doc.payload.doc.id);
          batch.delete(doc.payload.doc.ref);
        });
        return fromPromise(batch.commit()).map(() => snapshot.length)
      })
    )
  }
  /////////////////////////////////////////
*/
}
