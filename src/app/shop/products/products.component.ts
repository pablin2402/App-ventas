import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable, from } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';
import { SnackService } from '../../common/snack.service';
import { ProductsService } from '../../common/products.service';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CartService } from '../../common/cart.service';
import { Galleta } from "../../model/galleta";
import { AppService } from '../../common/app.service';
import { Product } from "../../model/product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

public galletas: any;
public products: any;

  constructor(
    private productService: ProductsService,
    public auth: AuthService,
    public cartService: CartService,
    public appService: AppService,
    public snackService: SnackService
  )
  {
  }

  ngOnInit()
  {
    
    this.products = this.productService.products().snapshotChanges().map(productSnaps => {
        return productSnaps.map(product => {
          const productData = product.payload.doc.data();
          const productId = product.payload.doc.id;
          return this.productService.getProductImages(productId).snapshotChanges().map(uploadSnap => {
            let number = 0;
            return uploadSnap.map(upload => {
              if(number == 0) {
                number++;
                return upload.payload.doc.data();
              }
            })
          })
          .map(uploads => {
            return {productId, ...productData, uploads: uploads};
          })
        })
      })
      .flatMap(products => Observable.combineLatest(products));

  }

  addProduct(product: Product)
  {

      this.cartService.addProduct(product)
        .then(() => {
          this.snackService.launch('Producto añadido', "Productos", 3000);
        })
        .catch((error) => {
          this.snackService.launch('Error: ' + error.message, "Productos", 3000);
        })
    }

}
