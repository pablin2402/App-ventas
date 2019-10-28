import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {CompraService} from '../../services/compra.service';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cel: new FormControl('', [Validators.required, Validators.minLength(5)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      cantidad: new FormControl('', [Validators.required, Validators.minLength(5)]),
    
    });
  }

  compraForm: FormGroup;
  public book='';
  constructor(private dbData: CompraService) {
    this.compraForm = this.createFormGroup();
    
  }

  ngOnInit() {
  }

  onResetForm() {
    this.compraForm.reset();
  }

  comprar() {
    if (this.compraForm.valid) {
      this.dbData.saveCompra(this.compraForm.value);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

  get nombre() { return this.compraForm.get('nombre'); }
  get cel() { return this.compraForm.get('cel'); }
  get direccion() { return this.compraForm.get('direccion'); }
  get cantidad() { return this.compraForm.get('cantidad'); }

}
