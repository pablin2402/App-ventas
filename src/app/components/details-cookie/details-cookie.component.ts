import { Component, OnInit , Inject} from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { CookieInterface } from '../../model/cookie';
import { ActivatedRoute, Params } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-details-cookie',
  templateUrl: './details-cookie.component.html',
  styleUrls: ['./details-cookie.component.css']
})
export class DetailsCookieComponent implements OnInit {
  constructor(public dialog: MatDialog,private dataApi: CookieService,  private route: ActivatedRoute) { }
  public books: CookieInterface = {};

  
 
  ngOnInit() {
    const idBook = this.route.snapshot.params['id'];
    this.getDetails(idBook);
  }
  getDetails(idBook: string): void {
    this.dataApi.getOneBook(idBook).subscribe(books => {
      this.books = books;
    });
  }

} 
