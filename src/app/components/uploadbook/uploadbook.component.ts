import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-uploadbook',
  templateUrl: './uploadbook.component.html',
  styleUrls: ['./uploadbook.component.css']
})
export class UploadbookComponent implements OnInit {

  constructor(
    public dataApi: CookieService

  ) { }

  @Input() userUid: string;

  ngOnInit() {
  }
  
  onSaveBook(bookForm: NgForm): void {
  
    // Update
    this.dataApi.updateBook(bookForm.value);
  }

}
