import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeoService } from 'src/app/geo.service';
import { MouseEvent } from '@agm/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-addworkers',
  templateUrl: './addworkers.component.html',
  styleUrls: ['./addworkers.component.css']
})
export class AddworkersComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      correo: new FormControl(''),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      latitud: new FormControl(''),
      ci: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),

      longitud: new FormControl('', [Validators.required, Validators.minLength(1)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(9)])
    });
  }

  contactsForm: FormGroup;

  constructor(private dbData: WorkerService,
    private crudService: CrudService) {
    this.contactsForm = this.createFormGroup();
  }


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
    this.contactsForm.reset();
  }
  

  onSaveForm() {
      
    if (this.contactsForm.valid){
      this.dbData.saveMessage(this.contactsForm.value);
      this.onResetForm();
       console.log('Valid');
    }else{
     
     
      console.log('Not Valid');
    }
  }
  
  lat = -17.393851495957517;
  lng =  -66.15186435643;
  proveedores: any;
  vendedores: any;
  zoom: number = 14;
  contador:number=4;
  //UBICACION ACTUAL
  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
            });
    }
  }

 
 
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


   
   

  get nombre() { return this.contactsForm.get('nombre'); }
  get correo() { return this.contactsForm.get('correo'); }
  get ci() { return this.contactsForm.get('ci'); }

  get apellido() { return this.contactsForm.get('apellido'); }
  get latitud() { return this.contactsForm.get('latitud'); }
  get longitud() { return this.contactsForm.get('longitud'); }
  get telefono() { return this.contactsForm.get('telefono'); }
  }

  interface marker {
      draggable: boolean;
      lat: number;
      lng: number;
      label?: string;
      iconUrl: string;
    }
    
  