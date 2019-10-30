import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { SlickModule} from 'ngx-slick';
//import { CarritoComponent } from '../components/carrito/carrito.component';


@NgModule({
  declarations: [ProductsComponent/*, CarritoComponent*/],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SlickModule.forRoot(),
    SharedModule
  ]
})
export class ShopModule { }
