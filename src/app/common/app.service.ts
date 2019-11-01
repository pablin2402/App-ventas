import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AppService {
//Preloader

loading$: Observable<boolean> = Observable.of(false);

  constructor()
  {

  }

  fireLoader()
  {

    this.loading$ = Observable.of(true);

  }

  stopLoader()
  {

    this.loading$ = Observable.of(false);
  }
}
