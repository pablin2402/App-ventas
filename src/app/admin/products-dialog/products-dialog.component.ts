import { Component, OnInit , ViewChild, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { SnackService } from '../../common/snack.service';
import { Galleta } from "../../model/galleta";
import { ProductsService } from '../../common/products.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Product } from "../../model/product";
import { Upload } from "../../model/upload";
import { UploadService } from '../../admin/upload.service';

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent implements OnInit {

  uploads;

  constructor(
      private afs: AngularFirestore,
      public dialogRef: MatDialogRef<ProductsDialogComponent>,
    /*  @Inject(MAT_DIALOG_DATA) public data: Galleta,*/
    @Inject(MAT_DIALOG_DATA) public data: Product,
      private snackService: SnackService,
      public auth: AuthService,
      private productService: ProductsService,
      private uploadService: UploadService
  )
  {
  //  console.log(data);
    if(data.id) {
        this.uploads = this.productService.product(this.data.id).collection('uploads').snapshotChanges().map(actions => {
          return actions.map(upload => {
            const data = upload.payload.doc.data();
            const id = upload.payload.doc.id;
            return {id, ...data};
          })
        })
      }
  }

  ngOnInit()
  {

  }

  saveGalleta()
  {
    if(this.data.id)
    {
      this.productService.update(this.data).then(()=>{
        this.snackService.launch("Producto actualizado", "Tienda", 4000);
      })
      .catch(error =>{
        this.snackService.launch("Error " + error.message, "Tienda", 4000);
      })
    }
    else
    {
      this.productService.save(this.data).then(() => {
        this.snackService.launch("Producto creado", "Tienda", 4000);
      })
      .catch(error =>{
        this.snackService.launch("Error" + error.message , "Tienda", 4000);
      })
    }
    this.dialogRef.close();
  }

  saveProduct() {
    if(this.data.id) {
      this.productService.update(this.data).then(() => {
        this.snackService.launch("Producto actualizado", "Tienda", 4000);
      })
        .catch(error => {
          this.snackService.launch("Error: " + error.message, "Tienda", 4000);
        })
    } else {
      this.productService.save(this.data).then(() => {
        this.snackService.launch("Producto creado", "Tienda", 4000);
      })
        .catch(error => {
          this.snackService.launch("Error: " + error.message, "Tienda", 4000);
        })
    }
    this.dialogRef.close();
  }

  removeUpload(upload: Upload) {

     this.uploadService.removeFile(upload.id).then(() => {
        this.afs.doc(`products/${this.data.id}/uploads/${upload.id}`).delete().then(() => {
          this.snackService.launch("Adjunto eliminado", "Tienda", 4000);
        })
          .catch(error => {
            this.snackService.launch("Error: " + error.message, "Tienda", 4000);
          })
      })

    }


}