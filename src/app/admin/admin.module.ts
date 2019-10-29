import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],

  declarations: [AdminComponent, ProductsDialogComponent],
  entryComponents: [ProductsDialogComponent]
})
export class AdminModule { }
