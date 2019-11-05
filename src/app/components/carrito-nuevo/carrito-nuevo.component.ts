import { Component, OnInit } from '@angular/core';
import { CookieService} from '../../services/cookie.service';
import { Router } from '@angular/router';
import { CookieInterface } from '../../model/cookie';
import { CompraService } from '../../services/compra.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { fallIn, moveIn } from '../../router.animation';
@Component({
  selector: 'app-carrito-nuevo',
  templateUrl: './carrito-nuevo.component.html',
  styleUrls: ['./carrito-nuevo.component.css'],
  animations:[moveIn(),fallIn()],
  host: {'[@moveIn': ''}
})
export class CarritoNuevoComponent implements OnInit {

  state: string = '';
  constructor(private _snackBar: MatSnackBar,private dataApis: CookieService,public dbData: CompraService, public router: Router) { }

  public books =[];
  public carrito=[];
  public book='';
  public productos_carrito=[];
  public precio_total=0;
  ngOnInit() {
    this.dataApis.getAllBooks().subscribe(books =>{
      console.log('BOOKS',books);
      this.books=books;
    })
  }

  

  addCarrito(producto: CookieInterface){
    
    this.carrito.push(producto);
    this.productos_carrito.push(producto.nombre);
    console.log('PRODUCTOS EN CARRITO', producto.nombre);
  }

  total(producto: CookieInterface):number{
    var total=0;
    for(producto of this.carrito){
      total += parseInt(producto.precio);
      //console.log('precio prod', producto.precio);
      //console.log('total', total);
      this.precio_total=total;
    }

    return total;
  }
  
 
  irformcomprar(productos_c:[]):void{
    console.log('CARRITO',this.productos_carrito);
    this.dbData.saveData(productos_c, this.precio_total);
    this.router.navigate(['/comprar']);
  }
  
}
