import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import * as faker from 'faker';

type ordersCollection = AngularFirestoreCollection<Order[]>;
type ordersDocument = AngularFirestoreDocument<Order>;

@Injectable()

export class OrdersService {

  constructor(
    private afs: AngularFirestore
  ) 
  { 

  }

  orders(uid?: string): ordersCollection {
    if(uid) {
      return this.afs.collection<Order[]>('orders', ref => ref.where('uid', '==', uid));
    }
    return this.afs.collection<Order[]>('orders');
  }

  order(id: string): ordersDocument {
    return this.afs.doc<Order>(`orders/${id}`);
  }

  save(order: Order): Promise<any> {
    const id = faker.random.alphaNumeric(16);
    order.id = id;
    return this.orders().doc(id).set(Object.assign({}, order));
  }}
