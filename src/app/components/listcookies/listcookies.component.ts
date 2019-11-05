import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { CookieService} from '../../services/cookie.service';
import { Router } from '@angular/router';
import { Galleta } from '../../model/galleta';
import { CookieInterface } from '../../model/cookie';

@Component({
  selector: 'app-listcookies',
  templateUrl: './listcookies.component.html',
  styleUrls: ['./listcookies.component.css']
})
export class ListcookiesComponent implements OnInit {

  @Input()
  searchText: string;
  @Output()
  search: EventEmitter<string> = new EventEmitter();
  constructor(private dataApis: CookieService, public router: Router) { }

  public books =[];
  public carrito=[];
  public book='';
  
  ngOnInit() {
    this.dataApis.getAllBooks().subscribe(books =>{
      console.log('BOOKS',books);
        this.books=books;
    })
  }

 
  onSearch(searchText: string) {
    this.search.emit(searchText);
  }

}
