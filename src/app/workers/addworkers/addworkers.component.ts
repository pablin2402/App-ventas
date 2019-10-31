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
      longitud: new FormControl('', [Validators.required, Validators.minLength(1)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(9)])
    });
  }

  contactsForm: FormGroup;

  constructor(private dbData: WorkerService,private crudService: CrudService) {
    this.contactsForm = this.createFormGroup();
  }


  ngOnInit() {
    this.getUserLocation();
    
    

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
  
  lat = 51.678418;
  lng = 7.809007;
  proveedores: any;
  vendedores: any;
  zoom: number = 6;
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


   
   markers: marker[] = [
	  {
		  lat: -17.38844294968196,
		  lng: -66.17968797683716,
		  label: 'A',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
	  },
	  {
		  lat: -17.39245909106725,
		  lng: -66.19053108158869,
		  label: 'B',
		  draggable: false,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
	  },
	  {
		  lat: -17.397340015755795,
		  lng: -66.17895793864437,
		  label: 'C',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    },
    {
		  lat: -17.39413816623673,
		  lng: -66.16302234593195,
		  label: 'C',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    },
    {
		  lat: -17.39110762912556,
		  lng: -66.15963203373713,
		  label: 'C',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    },
    {
		  lat: -17.39069809323258,
		  lng:-66.15628463688654,
		  label: 'C',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    },
    {
		  lat: -17.393851495957517,
		  lng: -66.15186435643,
		  label: 'C',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    },

  ]
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
		  label: this.contador.toString(),
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
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

  get nombre() { return this.contactsForm.get('nombre'); }
  get correo() { return this.contactsForm.get('correo'); }
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
    
  