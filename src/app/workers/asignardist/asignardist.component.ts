import { Component, OnInit, Input  } from '@angular/core';
import { AsignarService } from '../../services/asignar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../crud.service';
import { MouseEvent } from '@agm/core';
import { WorkerService } from '../../services/worker.service';

import { DistribuidorService } from '../../services/distribuidor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asignardist',
  templateUrl: './asignardist.component.html',
  styleUrls: ['./asignardist.component.css']
})
export class AsignardistComponent implements OnInit {

  

  constructor(private dbData:DistribuidorService,
    public dataApi: WorkerService,
    private crudService: CrudService, 
    private db:AsignarService,
   ) {
   this.contacForm = this.createFormGroup();
 }

 createFormGroup() {
   return new FormGroup({
     uid: new FormControl('',[Validators.required, Validators.minLength(2)]),

     distribuidor: new FormControl('',[Validators.required, Validators.minLength(2)]),
     vendedor: new FormControl('', [Validators.required, Validators.minLength(2)]),
     fecha: new FormControl('', [Validators.required, Validators.minLength(2)]),
     latituddistribuidor: new FormControl('',[Validators.required, Validators.minLength(2)]),
     longituddistribuidor: new FormControl('',[Validators.required, Validators.minLength(2)])

     
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
 @Input() userUid: string;

 onSaveBook(bookForm: NgForm): void {
  if (bookForm.value.id == null) {
    // New 
    bookForm.value.userUid = this.userUid;
    this.db.addBook(bookForm.value);
  } else {
    // Update
    this.db.updateBook(bookForm.value);
  }
  bookForm.resetForm();
 
}

 onSaveForm() {
     
     if (this.contacForm.valid){
       this.db.saveMessage(this.contacForm.value);
       this.onResetForm();
       // this.toastrService.wait('Adding Product to Cart', 'Product Adding to the cart');

        console.log('Valid');
     }else{
      
      
       console.log('Not Valid');
     } 
   }
   get uid() { return this.contacForm.get('uid'); }

   get distribuidor() { return this.contacForm.get('distribuidor'); }
   get vendedor() { return this.contacForm.get('vendedor'); }
   get fecha() { return this.contacForm.get('fecha'); }
   get latituddistribuidor() { return this.contacForm.get('latituddistribuidor'); }
   get longituddistribuidor() { return this.contacForm.get('longituddistribuidor'); }

}
interface marker {
	lat: number;
	lng: number;
  label?: string;
  iconUrl: string;
  draggable: boolean;

}