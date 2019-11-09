import { Component, OnInit } from '@angular/core';
import { DistribuidorService } from '../../services/distribuidor.service';
import { DistribuidorInterface } from '../../model/distribuidor';
@Component({
  selector: 'app-listdistribuidores',
  templateUrl: './listdistribuidores.component.html',
  styleUrls: ['./listdistribuidores.component.css']
})
export class ListdistribuidoresComponent implements OnInit {

  constructor(private dataApi: DistribuidorService) { }
  public books: DistribuidorInterface[];
  ngOnInit() 
  {
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
  onPreUpdateBook(book:DistribuidorInterface)
  {
    //this.dataApi.selectedBook=Object.assign({},book);
    console.log('BOOK',book);
    this.dataApi.selectedBook = Object.assign({}, book);

  }

}
