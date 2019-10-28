import { Injectable } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { AngularFireAuth} from '@angular/fire/auth';
import { Cart } from "../model/cart";
import { Galleta } from "../model/galleta";
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})

export class CartService
{

  constructor( private authService: AuthService, private afs: AngularFirestore)
  {
  }

  createCart(id1)
  {

    this.afs.collection('carts').doc(id1).set(
      {id_cart: id1, galletas: [] , totalProducts: 0}
    )

  }

  myCart(id)//usuario id
  {

    return this.afs.doc<Cart>('carts/${id}').snapshotChanges();

  }

  myCartRef(id)//usuario id
  {

    return this.afs.collection<Cart>('carts').doc(id).ref;

  }
}
