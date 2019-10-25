import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { GalletaInterface } from '../../model/galleta';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService,  private route: ActivatedRoute) { }
  public book: GalletaInterface = {};

  ngOnInit() {
    const idBook = this.route.snapshot.params['id'];
    this.getDetails(idBook);
  }
  getDetails(idBook: string): void {
    this.dataApi.getOneBook(idBook).subscribe(book => {
      this.book = book;
    });
  }

}
