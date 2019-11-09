import { Component, OnInit, Inject } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { WorkerInterface } from '../../model/worker';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-listworkers',
  templateUrl: './listworkers.component.html',
  styleUrls: ['./listworkers.component.css']
})
export class ListworkersComponent implements OnInit {

  constructor(
    public dataApi: WorkerService,
    public dialog: MatDialog
    
    ) { }
    
  
  public books: WorkerInterface[];

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
 

  onDeleteBook(idBook: string): void
  {
    const confirmacion = confirm('¿Estás seguro que deseas eliminar el producto?');
    if (confirmacion) {
      this.dataApi.deleteBook(idBook);
    }
  }
 
  onPreUpdateBook(book:WorkerInterface)
  {
    //this.dataApi.selectedBook=Object.assign({},book);
    console.log('BOOK',book);
    this.dataApi.selectedBook = Object.assign({}, book);
    
  }

}
