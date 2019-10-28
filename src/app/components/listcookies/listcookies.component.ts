import { Component, OnInit } from '@angular/core';
import { CookieService} from '../../services/cookie.service';

@Component({
  selector: 'app-listcookies',
  templateUrl: './listcookies.component.html',
  styleUrls: ['./listcookies.component.css']
})
export class ListcookiesComponent implements OnInit {

  constructor(private dataApis: CookieService) { }

  public books =[];
  public book='';
  ngOnInit() {
    this.dataApis.getAllBooks().subscribe(books =>{
      console.log('BOOKS',books);
      this.books=books;
    })
  }

 

}
