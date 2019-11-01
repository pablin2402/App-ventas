import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { OrdersService } from 'src/app/common/orders.service';
import { SnackService } from 'src/app/common/snack.service';
import { AuthService } from 'src/app/services/auth.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent {
  
  displayedColumns = ['id', 'created_at', 'amount', 'totalProducts', 'detail'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort,{static:false}) sort: MatSort;
  
  constructor(
    private ordersService: OrdersService,
    private snackService: SnackService,
    public auth: AuthService,
  ) {
    this.auth.User.subscribe(user => {
      if(user) {
        this.ordersService.orders(user.uid).valueChanges().subscribe(
          data => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.sort = this.sort;
          },
          err => {
            this.snackService.launch("Error obteniendo pedidos: " + err.message, "Pedidos", 5000);
          }
        )
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackById(index, order: Order) {
    return order.id;
  }
}
