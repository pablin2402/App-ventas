import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { MessageI } from '../../model/message.interface';
@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})
export class ListcontactsComponent implements OnInit {

  constructor(private dataApi: ContactoService) { }

  public books: MessageI[];

  ngOnInit() {
    this.getListBooks();
  }
  
  getListBooks()
  {
    this.dataApi.getAllBooks()
      .subscribe(books => {
        this.books = books;
      });
  }
  onPreUpdateBook(book:MessageI)
  {
    //this.dataApi.selectedBook=Object.assign({},book);
    console.log('BOOK',book);
    this.dataApi.selectedBook = Object.assign({}, book);

  }

}
