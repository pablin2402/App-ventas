import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerGuard } from '../auth/customer.guard';

const routes: Routes = [
  { path: 'shop', component: ProductsComponent },
  { path: 'product/:id', component: ProductsComponent},
  { path: 'cart', component: CarritoComponent /*,canActivate: [CustomerGuard]*/},
  { path: 'orders', component: OrdersComponent/*, canActivate: [CustomerGuard]*/},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
