import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { GalletaInterface } from '../../model/galleta';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private books: GalletaInterface[];

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
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteBook(idBook);
    }
  }

}
