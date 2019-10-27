import { Component, OnInit } from '@angular/core';
import *as firebaseapp from 'firebase/app';
import *as geofirex from 'geofirex';
import{switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title = 'My first AGM project';
  lat :number;
  lng :number;

  geo= geofirex.init(firebaseapp);
  points : Observable <any>;

  radius = new BehaviorSubject(0.5);

  constructor() { }

  ngOnInit() {
     this.getUserLocation;
    }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      });
    }
  
  
}
}