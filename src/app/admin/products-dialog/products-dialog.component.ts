import { Component, OnInit , ViewChild, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../auth/auth.service';
import { SnackService } from '../../common/snack.service';
import { Galleta } from "../../model/galleta";
import { ProductsService } from '../../common/products.service';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent implements OnInit {

  constructor(
      private afs: AngularFirestore,
      public MatDialogRef: MatDialogRef<ProductsDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Galleta,
      /*private snackService: SnackService,*/
      public auth: AuthService,
      private productService: ProductsService
  )
  {
    console.log(data);
  }

  ngOnInit()
  {
  }

}
