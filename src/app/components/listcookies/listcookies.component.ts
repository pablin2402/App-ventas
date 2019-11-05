import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { CookieService} from '../../services/cookie.service';
import { Router } from '@angular/router';
import { Galleta } from '../../model/galleta';
import { CookieInterface } from '../../model/cookie';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-listcookies',
  templateUrl: './listcookies.component.html',
  styleUrls: ['./listcookies.component.css']
})
export class ListcookiesComponent implements OnInit {
  durationInSeconds = 5;

  @Input()
  searchText: string;
  @Output()
  search: EventEmitter<string> = new EventEmitter();
  constructor(private dataApis: CookieService, public router: Router,private _snackBar: MatSnackBar) { }

  public books =[];
  public carrito=[];
  public book='';
  
  ngOnInit() {
    this.dataApis.getAllBooks().subscribe(books =>{
      console.log('BOOKS',books);
        this.books=books;
    })
  }

 
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  
  onSearch(searchText: string) {
    this.search.emit(searchText);
  }

}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'uno.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}