import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {CompraService} from '../../services/compra.service';
import { CookieService} from '../../services/cookie.service';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cel: new FormControl('', [Validators.required, Validators.minLength(7)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
     
      
    });
  }

  compraForm: FormGroup;
  carritoc: [];
  ptotal:number
  constructor(private dbData: CompraService) {
    this.compraForm = this.createFormGroup();
    this.carritoc=dbData.getCarrito();
    this.ptotal= dbData.getPrecioTotal();
  }

  ngOnInit() {
   
  }

  onResetForm() {
    this.compraForm.reset();
  }


  comprar() {
   
    if (this.compraForm.valid) {
      this.dbData.saveCompra(this.compraForm.value,this.carritoc,this.ptotal);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

  get nombre() { return this.compraForm.get('nombre'); }
  get cel() { return this.compraForm.get('cel'); }
  get direccion() { return this.compraForm.get('direccion'); }
 

  
}
