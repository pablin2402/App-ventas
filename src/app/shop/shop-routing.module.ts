import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CarritoComponent } from '../components/carrito/carrito.component';

const routes: Routes = [
  { path: 'shop', component: ProductsComponent },
  { path: 'product/:id', component: ProductsComponent},
  { path: 'cart', component: CarritoComponent /*,canActivate: [CustomerGuard]*/},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
