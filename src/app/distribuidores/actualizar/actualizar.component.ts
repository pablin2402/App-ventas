import { Component, OnInit, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../../crud.service';
import { MouseEvent } from '@agm/core';
import { WorkerService } from '../../services/worker.service';

import { DistribuidorService } from '../../services/distribuidor.service';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(
    public dataApi: DistribuidorService,
    private crudService: CrudService, 
    public dataAp: WorkerService,


  ) { }
  @Input() userUid: string;

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
  onSaveBook(bookForm: NgForm): void {
  
    // Update
    this.dataApi.updateBook(bookForm.value);
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
}
interface marker {
	lat: number;
	lng: number;
  label?: string;
  iconUrl: string;
  draggable: boolean;

}