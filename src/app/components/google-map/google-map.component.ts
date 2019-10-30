import { Component, OnInit } from '@angular/core';
import *as firebaseapp from 'firebase/app';
import *as geofirex from 'geofirex';
import{switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { GeoService } from 'src/app/geo.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit
{

  title = 'My first AGM project';
  lat :number;
  lng :number;
  zoom:number=16;
  markers:any;

  constructor(private geo: GeoService)
  {

  }

  ngOnInit()
  {

     this.getUserLocation()
     this.geo.hits.subscribe(hits => this.markers = hits)

    }

  private getUserLocation()
  {
    /// locate the user
    if (navigator.geolocation)
    {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.geo.getLocations(500, [this.lat, this.lng])
      });
    }

  }

}
