import { Component, OnInit,ViewChild, ElementRef, Input } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import {  CookieInterface } from '../../model/cookie';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcookie',
  templateUrl: './addcookie.component.html',
  styleUrls: ['./addcookie.component.css']
})
export class AddcookieComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      Alergenos: new FormControl(''),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(40)]),
      descripcioncorta: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      ingredientes: new FormControl('',[Validators.required, Validators.minLength(10)]),
      marca: new FormControl('', [Validators.required, Validators.minLength(1)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      oferta: new FormControl('', [Validators.required, Validators.minLength(1)]),
      peso: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      portada: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
     //-------------------------------------------------------------------------------------------------
      fondo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      imagen: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),

      precio: new FormControl('', [Validators.required, Validators.minLength(1)])


    });
  }

  contactsForm: FormGroup;

  constructor(private dbData: CookieService) {
    this.contactsForm = this.createFormGroup();
  }


  ngOnInit() {
  }

  onResetForm() {
    this.contactsForm.reset();
  }
  //Manda los datos a firecloud, revisando si todos los campos cumples con los requerimientos dados anteriormente.
  onSaveForm() 
  {

    if (this.contactsForm.valid)
    {
        this.dbData.saveMessage(this.contactsForm.value);
        this.onResetForm();
        console.log('Valid');
    }else
    {
        console.log('Not Valid');
    }

  }
 
  
  get nombre() { return this.contactsForm.get('nombre'); }
  get fondo() { return this.contactsForm.get('fondo'); }
  get imagen() { return this.contactsForm.get('imagen'); }

  get marca() { return this.contactsForm.get('marca'); }
  get peso() { return this.contactsForm.get('peso'); }
  get oferta() { return this.contactsForm.get('oferta'); }
  get portada() { return this.contactsForm.get('portada'); }
  get descripcion() { return this.contactsForm.get('descripcion'); }
  get descripcioncorta() { return this.contactsForm.get('descripcioncorta'); }
  get ingredientes() { return this.contactsForm.get('ingredientes'); }
  get Alergenos() { return this.contactsForm.get('Alergenos'); }
  get precio() { return this.contactsForm.get('precio'); }

}  

