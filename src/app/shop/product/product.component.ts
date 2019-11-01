import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/common/products.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/common/cart.service';
import { Upload } from 'src/app/model/upload';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public product: any;
  public slides = [];
  public slideConfig = {"slidesToShow": 2, "slidesToScroll": 2};

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    public auth: AuthService,
    public cartService: CartService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    const product = this.productService.galleta(id);
    product.collection('uploads').valueChanges().subscribe(uploadSnap => {
      uploadSnap.map((upload: Upload) => {
        this.slides.push({img: upload.url});
      })
    });
    this.product = product.valueChanges();
  }

  ngOnInit() 
  {

  }

}

  
  