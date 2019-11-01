import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../common/app.service';
import { SnackService } from '../common/snack.service';
import { ProductsService } from '../common/products.service';
import { CartService } from '../common/cart.service';
import { OrdersService } from '../common/orders.service';

import{
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatProgressSpinnerModule
}from '@angular/material';

import{
  FormsModule,
  ReactiveFormsModule
}from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [AppService, SnackService, CartService, ProductsService, OrdersService]
  })
export class SharedModule { }
