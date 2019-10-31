import { Component, OnInit } from '@angular/core';
import { DistribuidorService } from '../../services/distribuidor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adddis',
  templateUrl: './adddis.component.html',
  styleUrls: ['./adddis.component.css']
})
export class AdddisComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      correo: new FormControl('',[Validators.required, Validators.minLength(10)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      pais: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      latitud: new FormControl('', [Validators.required, Validators.minLength(1)]),
      longitud: new FormControl('', [Validators.required, Validators.minLength(1)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(9)])
    });
  }

  contacForm: FormGroup;

  constructor(private dbData:DistribuidorService) {
    this.contacForm = this.createFormGroup();
  }


  ngOnInit() {
  }

  onResetForm() {
    this.contacForm.reset();
  }

  onSaveForm() {
      
      if (this.contacForm.valid){
        this.dbData.saveMessage(this.contacForm.value);
        this.onResetForm();
         console.log('Valid');
      }else{
       
       
        console.log('Not Valid');
      }
    }
    get correo() { return this.contacForm.get('correo'); }
    get nombre() { return this.contacForm.get('nombre'); }
    get pais() { return this.contacForm.get('pais'); }
    get longitud() { return this.contacForm.get('longitud'); }
    get latitud() { return this.contacForm.get('latitud'); }
    get telefono() { return this.contacForm.get('telefono'); }
   
  
}
