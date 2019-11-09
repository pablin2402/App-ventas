import { Component, OnInit } from '@angular/core';
import { DistribuidorService } from '../../services/distribuidor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../crud.service';
import { MouseEvent } from '@agm/core';
import { ToastrService } from '../../toastr.service';


@Component({
  selector: 'app-adddis',
  templateUrl: './adddis.component.html',
  styleUrls: ['./adddis.component.css']
})
export class AdddisComponent implements OnInit {


  constructor(private dbData:DistribuidorService,
     private crudService: CrudService, 
    private toastrService: ToastrService) {
    this.contacForm = this.createFormGroup();
  }

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

  lat = -17.393851495957517;
  lng =  -66.15186435643;
  proveedores: any;
  vendedores: any;
  zoom: number = 14;
  contador:number=4;

  mapClicked($event: MouseEvent) {
   this.markers.push({
     label: this.contador.toString(),
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true,
     iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
   });
   this.contador++;
 }

 markerDragEnd(m: marker, $event: MouseEvent) {
   console.log('dragEnd', m, $event);
   this.markers.push({
     label: m.label,
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true,
     iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
   });
 }
 markers: marker[] = [ //se necesita inicializar el arreglo de markers de esta manera, asi que uno para el administrador, por que no
  {
    lat: -17.393851495957517,
    lng: -66.234564,
    draggable: true,

    label: 'Administrator',
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
  }
]
 crearmarkers(a: string,b: string,c: string){ 
  this.markers.push({
    label: a,
    draggable: true,

    lat: parseFloat(b),
    lng: parseFloat(c),
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
}
crearmarkersv(a: string,b: string,c: string){ 
this.markers.push({
  label: a,
  lat: parseFloat(b),
  lng: parseFloat(c),
  draggable: true,

  iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
});
}

clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}
   
  contacForm: FormGroup;

  


  ngOnInit() {
    this.crudService.read_Proveedores().subscribe(data => {
      this.vendedores = data.map(e => {    
        this.crearmarkersv( e.payload.doc.data()['nombre'],e.payload.doc.data()['latitud'],e.payload.doc.data()['longitud']); 
      })
    });   
    this.crudService.read_Vendedor().subscribe(data => {
      this.vendedores = data.map(e => {    
        this.crearmarkers( e.payload.doc.data()['nombre'],e.payload.doc.data()['latitud'],e.payload.doc.data()['longitud']); 
      })
    }); 
  }

  onResetForm() {
    this.contacForm.reset();
  }

  onSaveForm() {
      
      if (this.contacForm.valid){
        this.dbData.saveMessage(this.contacForm.value);
        this.onResetForm();
        // this.toastrService.wait('Adding Product to Cart', 'Product Adding to the cart');

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
interface marker {
	lat: number;
	lng: number;
  label?: string;
  iconUrl: string;
  draggable: boolean;

}