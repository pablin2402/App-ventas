import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }

  public books =[];
  public book='';
  ngOnInit() {
    this.dataApi.getAllBooks().subscribe(books =>{
      console.log('BOOKS',books);
      this.books=books;
    })
  }

  irformcomprar():void{
    this.router.navigate(['/comprar']);
  }
  
}
