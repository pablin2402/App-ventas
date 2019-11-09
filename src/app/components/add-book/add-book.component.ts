import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { CookieInterface } from '../../model/cookie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(public dataApi: CookieService) { }
  public books: CookieInterface[];

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this.dataApi.getAllBooks()
      .subscribe(books => {
        this.books = books;
      });
  }
  
  onDeleteBook(idBook: string): void {
    const confirmacion = confirm('¿Estás seguro que deseas eliminar el producto?');
    if (confirmacion) {
      this.dataApi.deleteBook(idBook);
    }
  }

  onPreUpdateBook(book:CookieInterface){
    //this.dataApi.selectedBook=Object.assign({},book);
    console.log('BOOK',book);
    this.dataApi.selectedBook = Object.assign({}, book);

  }

  
}
